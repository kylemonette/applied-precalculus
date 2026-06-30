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
        # Convert < and > to \lt and \gt
        math_content = math_content.replace('<', r'\lt')
        math_content = math_content.replace('>', r'\gt')
        return f'<md>\n{math_content}\n</md>'
    
    content = re.sub(display_pattern, replace_display_math, content, flags=re.DOTALL)
    
    # Convert inline math $...$ to <m>...</m>
    inline_pattern = r'(?<!\\)\$(?!\$)(.*?)(?<!\\)\$(?!\$)'
    
    def replace_inline_math(match):
        math_content = match.group(1)
        # Convert < and > to \lt and \gt
        math_content = math_content.replace('<', r'\lt')
        math_content = math_content.replace('>', r'\gt')
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

def convert_parts_to_ol(parts_content, is_solution=False):
    """Convert \begin{parts}...\end{parts} to <ol>...</ol>."""
    # Split by \item
    items = re.split(r'\\item\s+', parts_content)
    # First split result is empty or whitespace before first \item
    items = [item.strip() for item in items if item.strip()]
    
    if is_solution:
        # For solutions, wrap each item content in appropriate tags
        ol_items = []
        for item in items:
            item = item.strip()
            # Check if item is just math or very simple
            if item.startswith('<m>') or (not '\n' in item and len(item) < 100):
                ol_items.append(f'        <li>\n            {item}\n        </li>')
            else:
                ol_items.append(f'        <li>\n            <p>{item}</p>\n        </li>')
        
        ol_content = '\n'.join(ol_items)
        return f'    <ol>\n{ol_content}\n    </ol>'
    else:
        # For statements, simpler format
        ol_items = [f'<li>{item.strip()}</li>' for item in items]
        ol_content = '\n'.join(ol_items)
        return f'<ol>\n{ol_content}\n</ol>'

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
    
    # Pattern to match exercise with solution
    exercise_pattern = r'\\begin\{exercise\}(.*?)\\end\{exercise\}\s*\\begin\{solution\}(.*?)\\end\{solution\}'
    
    def replace_exercise(match):
        exercise_content = match.group(1).strip()
        solution_content = match.group(2).strip()
        
        # Process exercise content
        # Check if it contains \begin{parts}
        parts_match = re.search(r'(.*?)\\begin\{parts\}(.*?)\\end\{parts\}', exercise_content, flags=re.DOTALL)
        
        if parts_match:
            # Exercise has parts
            intro_text = parts_match.group(1).strip()
            parts_content = parts_match.group(2).strip()
            
            statement = '<statement>\n'
            if intro_text:
                statement += f'<p>\n{intro_text}\n</p>\n'
            
            # Convert parts to ordered list
            statement += convert_parts_to_ol(parts_content, is_solution=False)
            statement += '\n</statement>'
        else:
            # Simple exercise without parts
            statement = f'<statement>\n<p>\n{exercise_content}\n</p>\n</statement>'
        
        # Process solution content
        solution_parts_match = re.search(r'\\begin\{parts\}(.*?)\\end\{parts\}', solution_content, flags=re.DOTALL)
        
        if solution_parts_match:
            # Solution has parts
            parts_content = solution_parts_match.group(1).strip()
            solution = '<solution>\n<p>\n' + convert_parts_to_ol(parts_content, is_solution=True) + '\n</p>\n</solution>'
        else:
            # Simple solution
            solution = f'<solution>\n<p>\n{solution_content}\n</p>\n</solution>'
        
        return f'<exercise>\n{statement}\n\n{solution}\n</exercise>'
    
    content = re.sub(exercise_pattern, replace_exercise, content, flags=re.DOTALL)
    
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