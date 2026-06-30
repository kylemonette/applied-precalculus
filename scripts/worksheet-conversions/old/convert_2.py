import re

def convert_2(input_file, output_file):
    with open(input_file, 'r') as f:
        content = f.read()
    
    # First, handle questions with parts
    # Pattern: \question ... \begin{parts} ... \end{parts}
    parts_pattern = r'\\question\s+(.*?)\s*\\begin\{parts\}(.*?)\\end\{parts\}'
    
    def replace_question_with_parts(match):
        question_text = match.group(1).strip()
        parts_content = match.group(2)
        
        result = '<exercise>\n<statement>\n'
        
        # Add question text if it exists
        if question_text:
            result += f'<p>\n{question_text}\n</p>\n'
        
        result += '</statement>\n'
        
        # Now process each \part within this question
        part_pattern = r'\\part\s+(.*?)\s*\\begin\{solution\}\[(.*?)\](.*?)\\end\{solution\}'
        
        def replace_part(part_match):
            part_text = part_match.group(1).strip()
            workspace = part_match.group(2).strip()
            solution_text = part_match.group(3).strip()
            
            return f'''<task workspace="{workspace}">
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
    
    # Then handle simple questions (without parts)
    # Pattern to match \question ... \begin{solution}[dimension] ... \end{solution}
    simple_pattern = r'\\question\s+(.*?)\s*\\begin\{solution\}\[(.*?)\](.*?)\\end\{solution\}'
    
    def replace_simple_question(match):
        question_text = match.group(1).strip()
        workspace = match.group(2).strip()
        solution_text = match.group(3).strip()
        
        return f'''<exercise workspace="{workspace}">
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
    
    with open(output_file, 'w') as f:
        f.write(content)
    
    print(f"Conversion complete! Output saved to {output_file}")

if __name__ == "__main__":
    convert_2("section-1.1.txt", "section-1.1-pretext.txt")