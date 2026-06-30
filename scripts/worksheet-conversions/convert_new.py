import re
import sys
import os

def protect_environments(content):
    """Protect specified LaTeX environments from conversion."""
    environments = ['minipage', 'tabular', 'table', 'figure', 'tikzpicture', 'center']
    protected_blocks = []
    
    # Process environments multiple times to handle nesting
    # Start with innermost environments first
    max_iterations = 10  # Prevent infinite loops
    for iteration in range(max_iterations):
        found_any = False
        for env in environments:
            pattern = rf'\\begin\{{{env}\}}.*?\\end\{{{env}\}}'
            
            def save_block(match):
                nonlocal found_any
                found_any = True
                protected_blocks.append(match.group(0))
                return f'___PROTECTED_{len(protected_blocks)-1}___'
            
            content = re.sub(pattern, save_block, content, flags=re.DOTALL)
        
        # If no replacements were made, we're done
        if not found_any:
            break
    
    return content, protected_blocks

def restore_protected_blocks(content, protected_blocks):
    """Restore protected blocks in reverse order (outermost first)."""
    # Restore in reverse order so nested blocks are restored correctly
    for i in range(len(protected_blocks) - 1, -1, -1):
        placeholder = f'___PROTECTED_{i}___'
        content = content.replace(placeholder, protected_blocks[i])
    
    return content

def convert_align_to_pretext(content):
    """Convert align* environments to PreTeXt <md> format."""
    
    align_pattern = r'\\begin\{align\*\}(.*?)\\end\{align\*\}'
    
    def replace_align(match):
        align_content = match.group(1).strip()
        
        # Split by \\ to get individual lines
        lines = re.split(r'\\\\', align_content)
        
        mrows = []
        for line in lines:
            line = line.strip()
            if not line:
                continue
            
            # Remove && (double ampersands)
            line = line.replace('&&', '')
            
            # Replace single & with \amp
            line = line.replace('&', r'\amp')
            
            mrows.append(f'<mrow>{line}</mrow>')
        
        md_content = '\n'.join(mrows)
        
        return f'</p>\n<p>\n<md>\n{md_content}\n</md>\n</p>\n<p>'
    
    content = re.sub(align_pattern, replace_align, content, flags=re.DOTALL)
    
    return content

def cleanup_paragraph_tags(content):
    """Clean up problematic paragraph tag patterns."""
    
    # Remove empty paragraphs
    content = re.sub(r'<p>\s*</p>', '', content)
    
    # Fix pattern where we have </p> followed immediately by <p> with whitespace
    content = re.sub(r'</p>\s*<p>', '</p>\n<p>', content)
    
    # Remove paragraph tags that are immediately after opening tags like <statement> or <solution>
    # and immediately before closing tags
    content = re.sub(r'(<(?:statement|solution|introduction)>\s*)<p>\s*</p>', r'\1', content)
    
    return content

def convert_math_to_pretext(content):
    """Convert LaTeX math delimiters to PreTeXt format."""
    
    # Convert display math \[...\] to <md>...</md>
    display_pattern = r'\\\[(.*?)\\\]'
    def replace_display_math(match):
        math_content = match.group(1).strip()
        # If the math content ends with a newline followed by a period, move the period to the end of the line
        math_content = re.sub(r'\n\s*\.\s*$', '.', math_content)
        return f'<md>\n{math_content}\n</md>'
    
    content = re.sub(display_pattern, replace_display_math, content, flags=re.DOTALL)
    
    # Convert inline math $...$ to <m>...</m>
    inline_pattern = r'(?<!\\)\$(?!\$)(.*?)(?<!\\)\$(?!\$)'
    
    def replace_inline_math(match):
        math_content = match.group(1)
        return f'<m>{math_content}</m>'
    
    content = re.sub(inline_pattern, replace_inline_math, content, flags=re.DOTALL)
    
    return content

def convert_formatting_to_pretext(content):
    """Convert LaTeX formatting (italics and bold) to PreTeXt format."""
    
    # Convert italics: {\it ...} to <em>...</em>
    def replace_it_braces(text):
        pattern = r'\{\\it\s+((?:[^{}]|\{[^{}]*\})*)\}'
        max_iterations = 10
        for _ in range(max_iterations):
            new_text = re.sub(pattern, r'<em>\1</em>', text)
            if new_text == text:
                break
            text = new_text
        return text
    
    content = replace_it_braces(content)
    
    # Convert italics: \textit{...} to <em>...</em>
    def replace_textit(text):
        pattern = r'\\textit\{((?:[^{}]|\{[^{}]*\})*)\}'
        max_iterations = 10
        for _ in range(max_iterations):
            new_text = re.sub(pattern, r'<em>\1</em>', text)
            if new_text == text:
                break
            text = new_text
        return text
    
    content = replace_textit(content)
    
    # Convert bold: {\bf ...} to <alert>...</alert>
    def replace_bf_braces(text):
        pattern = r'\{\\bf\s+((?:[^{}]|\{[^{}]*\})*)\}'
        max_iterations = 10
        for _ in range(max_iterations):
            new_text = re.sub(pattern, r'<alert>\1</alert>', text)
            if new_text == text:
                break
            text = new_text
        return text
    
    content = replace_bf_braces(content)
    
    # Convert bold: \textbf{...} to <alert>...</alert>
    def replace_textbf(text):
        pattern = r'\\textbf\{((?:[^{}]|\{[^{}]*\})*)\}'
        max_iterations = 10
        for _ in range(max_iterations):
            new_text = re.sub(pattern, r'<alert>\1</alert>', text)
            if new_text == text:
                break
            text = new_text
        return text
    
    content = replace_textbf(content)
    
    return content

def convert_complete(input_file, output_file=None):
    # Generate output filename if not provided
    if output_file is None:
        base_name = os.path.splitext(input_file)[0]
        output_file = f"{base_name}-pt.ptx"
    
    with open(input_file, 'r') as f:
        content = f.read()
    
    # Convert align* environments FIRST, before protecting other environments
    content = convert_align_to_pretext(content)
    
    # Protect specified environments
    content, protected_blocks = protect_environments(content)
    
    # Remove \begin{questions} and \end{questions}
    content = content.replace(r'\begin{questions}', '')
    content = content.replace(r'\end{questions}', '')
    
    # First pass: Handle questions with parts environment
    parts_pattern = r'\\question\s+((?:(?!\\question).)*?)\\begin\{parts\}((?:(?!\\question|\\end\{parts\}).)*?)\\end\{parts\}'
    
    def replace_question_with_parts(match):
        question_text = match.group(1).strip()
        parts_content = match.group(2)
        
        # For questions with parts, use <introduction> instead of <statement>
        result = '<exercise>\n<introduction>\n'
        
        if question_text:
            result += f'<p>\n{question_text}\n</p>\n'
        
        result += '</introduction>\n'
        
        part_pattern = r'\\part\s+((?:(?!\\part|\\end\{parts\}).)*?)\\begin\{solution\}(?:\[(.*?)\])?((?:(?!\\end\{solution\}).)*?)\\end\{solution\}'
        
        def replace_part(part_match):
            part_text = part_match.group(1).strip()
            workspace = part_match.group(2)
            solution_text = part_match.group(3).strip()
            
            if workspace:
                workspace = workspace.strip()
                task_opening = f'<task workspace="{workspace}">'
            else:
                task_opening = '<task>'
            
            return f'''{task_opening}
<statement>
<p>
{part_text}
</p>
</statement>
<solution>
<p>
{solution_text}
</p>
</solution>
</task>
'''
        
        parts_converted = re.sub(part_pattern, replace_part, parts_content, flags=re.DOTALL)
        result += parts_converted
        result += '</exercise>\n'
        
        return result
    
    content = re.sub(parts_pattern, replace_question_with_parts, content, flags=re.DOTALL)
    
    # Second pass: Handle questions with standalone \part commands (no parts environment)
    standalone_parts_pattern = r'\\question\s+((?:(?!\\question|\\begin\{parts\}).)*?)(?=\\part)'
    
    def replace_question_with_standalone_parts(match):
        question_text = match.group(1).strip()
        
        result = '<exercise>\n<introduction>\n'
        
        if question_text:
            result += f'<p>\n{question_text}\n</p>\n'
        
        result += '</introduction>\n'
        
        return result
    
    content = re.sub(standalone_parts_pattern, replace_question_with_standalone_parts, content, flags=re.DOTALL)
    
    # Convert standalone \part commands to <task> elements
    standalone_part_pattern = r'\\part\s+((?:(?!\\part|\\question|<exercise>).)*?)(?=\\part|\\question|<exercise>|$)'
    
    def replace_standalone_part(match):
        part_text = match.group(1).strip()
        
        solution_match = re.search(r'(.*?)\\begin\{solution\}(?:\[(.*?)\])?((?:(?!\\end\{solution\}).)*?)\\end\{solution\}', part_text, flags=re.DOTALL)
        
        if solution_match:
            statement_text = solution_match.group(1).strip()
            workspace = solution_match.group(2)
            solution_text = solution_match.group(3).strip()
            
            if workspace:
                workspace = workspace.strip()
                task_opening = f'<task workspace="{workspace}">'
            else:
                task_opening = '<task>'
            
            return f'''{task_opening}
<statement>
<p>
{statement_text}
</p>
</statement>
<solution>
<p>
{solution_text}
</p>
</solution>
</task>
'''
        else:
            return f'''<task>
<statement>
<p>
{part_text}
</p>
</statement>
</task>
'''
    
    content = re.sub(standalone_part_pattern, replace_standalone_part, content, flags=re.DOTALL)
    
    # Third pass: Handle simple questions (without parts)
    simple_pattern = r'\\question\s+((?:(?!\\question|\\begin\{parts\}|\\part|<exercise>).)*?)\\begin\{solution\}(?:\[(.*?)\])?((?:(?!\\end\{solution\}).)*?)\\end\{solution\}'
    
    def replace_simple_question(match):
        question_text = match.group(1).strip()
        workspace = match.group(2)
        solution_text = match.group(3).strip()
        
        if workspace:
            workspace = workspace.strip()
            exercise_opening = f'<exercise workspace="{workspace}">'
        else:
            exercise_opening = '<exercise>'
        
        return f'''{exercise_opening}
<statement>
<p>
{question_text}
</p>
</statement>
<solution>
<p>
{solution_text}
</p>
</solution>
</exercise>
'''
    
    content = re.sub(simple_pattern, replace_simple_question, content, flags=re.DOTALL)
    
    # Convert math delimiters (but not in protected blocks)
    content = convert_math_to_pretext(content)
    
    # Convert formatting (italics and bold) (but not in protected blocks)
    content = convert_formatting_to_pretext(content)
    
    # Clean up paragraph tags
    content = cleanup_paragraph_tags(content)
    
    # Restore protected blocks at the end (this puts the original LaTeX back)
    content = restore_protected_blocks(content, protected_blocks)
    
    with open(output_file, 'w') as f:
        f.write(content)
    
    print(f"Conversion complete! Output saved to {output_file}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python convert_new.py <input_file>")
        print("Output will be saved as <input_file>-pt.ptx")
        sys.exit(1)
    
    input_file = sys.argv[1]
    convert_complete(input_file)