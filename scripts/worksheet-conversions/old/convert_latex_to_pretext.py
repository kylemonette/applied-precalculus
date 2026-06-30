import re

def convert_latex_to_pretext(input_file, output_file):
    with open(input_file, 'r') as f:
        content = f.read()
    
    # Pattern to match \question ... \begin{solution}[dimension] ... \end{solution}
    # This handles questions without \begin{parts}
    pattern = r'\\question\s+(.*?)\s*\\begin\{solution\}\[(.*?)\](.*?)\\end\{solution\}'
    
    def replace_question(match):
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
{solution_text}
</solution>
</exercise>'''
    
    # Replace simple questions (without parts)
    content = re.sub(pattern, replace_question, content, flags=re.DOTALL)
    
    # Now handle questions with parts
    # Pattern: \question ... \begin{parts} ... \end{parts}
    parts_pattern = r'\\question\s+(.*?)\s*\\begin\{parts\}(.*?)\\end\{parts\}'
    
    def replace_question_with_parts(match):
        question_text = match.group(1).strip()
        parts_content = match.group(2)
        
        result = f'''<exercise>
<statement>
<p>
{question_text}
</p>
</statement>
'''
        
        # Now process each \part within this question
        part_pattern = r'\\part\s+(.*?)\s*\\begin\{solution\}\[(.*?)\](.*?)\\end\{solution\}'
        
        def replace_part(part_match):
            part_text = part_match.group(1).strip()
            workspace = part_match.group(2).strip()
            solution_text = part_match.group(3).strip()
            
            return f'''<exercise workspace="{workspace}">
<statement>
<p>
{part_text}
</p>
</statement>
<solution>
{solution_text}
</solution>
</exercise>
'''
        
        parts_converted = re.sub(part_pattern, replace_part, parts_content, flags=re.DOTALL)
        result += parts_converted
        result += '</exercise>'
        
        return result
    
    content = re.sub(parts_pattern, replace_question_with_parts, content, flags=re.DOTALL)
    
    with open(output_file, 'w') as f:
        f.write(content)
    
    print(f"Conversion complete! Output saved to {output_file}")




if __name__ == "__main__":
    convert_latex_to_pretext("section-1.1.txt", "section-1.1-pretext.txt")