import re

def convert_math_to_pretext(content):
    """Convert LaTeX math delimiters to PreTeXt format."""
    
    # Protect tikzpicture environments
    tikz_pattern = r'\\begin\{tikzpicture\}.*?\\end\{tikzpicture\}'
    tikz_blocks = []
    
    def save_tikz(match):
        tikz_blocks.append(match.group(0))
        return f'___TIKZ_PLACEHOLDER_{len(tikz_blocks)-1}___'
    
    content = re.sub(tikz_pattern, save_tikz, content, flags=re.DOTALL)
    
    # Convert display math \[...\] to <me>...</me>
    display_pattern = r'\\\[(.*?)\\\]'
    def replace_display_math(match):
        math_content = match.group(1)
        return f'<me>\n{math_content}\n</me>'
    
    content = re.sub(display_pattern, replace_display_math, content, flags=re.DOTALL)
    
    # Convert inline math $...$ to <m>...</m>
    # Match $ not preceded by backslash, capture everything until next $ not preceded by backslash
    # The content can include \$ (escaped dollar signs)
    inline_pattern = r'(?<!\\)\$(?!\$)(.*?)(?<!\\)\$(?!\$)'
    
    def replace_inline_math(match):
        math_content = match.group(1)
        return f'<m>{math_content}</m>'
    
    content = re.sub(inline_pattern, replace_inline_math, content, flags=re.DOTALL)
    
    # Restore tikzpicture environments
    for i, tikz_block in enumerate(tikz_blocks):
        content = content.replace(f'___TIKZ_PLACEHOLDER_{i}___', tikz_block)
    
    return content

def convert_complete(input_file, output_file):
    with open(input_file, 'r') as f:
        content = f.read()
    
    # Remove \begin{questions} and \end{questions}
    content = content.replace(r'\begin{questions}', '')
    content = content.replace(r'\end{questions}', '')
    
    # First pass: Handle questions with parts
    parts_pattern = r'\\question\s+((?:(?!\\question).)*?)\\begin\{parts\}((?:(?!\\question|\\end\{parts\}).)*?)\\end\{parts\}'
    
    def replace_question_with_parts(match):
        question_text = match.group(1).strip()
        parts_content = match.group(2)
        
        result = '<exercise>\n<statement>\n'
        
        if question_text:
            result += f'<p>\n{question_text}\n</p>\n'
        
        result += '</statement>\n'
        
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
    
    # Second pass: Handle simple questions
    simple_pattern = r'\\question\s+((?:(?!\\question|\\begin\{parts\}|<exercise>).)*?)\\begin\{solution\}(?:\[(.*?)\])?((?:(?!\\end\{solution\}).)*?)\\end\{solution\}'
    
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
    
    # Convert math delimiters
    content = convert_math_to_pretext(content)
    
    with open(output_file, 'w') as f:
        f.write(content)
    
    print(f"Conversion complete! Output saved to {output_file}")

if __name__ == "__main__":
    convert_complete("section-1.1.txt", "section-1.1-pretext.xml")