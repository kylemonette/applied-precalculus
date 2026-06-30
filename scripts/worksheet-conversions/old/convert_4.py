import re

def convert_4(input_file, output_file):
    with open(input_file, 'r') as f:
        content = f.read()
    
    # Remove \begin{questions} and \end{questions}
    content = content.replace(r'\begin{questions}', '')
    content = content.replace(r'\end{questions}', '')
    
    # First pass: Handle questions with parts
    # We need to be careful to match the entire question block including all parts
    parts_pattern = r'\\question\s+((?:(?!\\question).)*?)\\begin\{parts\}((?:(?!\\question|\\end\{parts\}).)*?)\\end\{parts\}'
    
    def replace_question_with_parts(match):
        question_text = match.group(1).strip()
        parts_content = match.group(2)
        
        result = '<exercise>\n<statement>\n'
        
        # Add question text if it exists
        if question_text:
            result += f'<p>\n{question_text}\n</p>\n'
        
        result += '</statement>\n'
        
        # Process each \part within this question
        part_pattern = r'\\part\s+((?:(?!\\part|\\end\{parts\}).)*?)\\begin\{solution\}(?:\[(.*?)\])?((?:(?!\\end\{solution\}).)*?)\\end\{solution\}'
        
        def replace_part(part_match):
            part_text = part_match.group(1).strip()
            workspace = part_match.group(2)
            solution_text = part_match.group(3).strip()
            
            # Only include workspace attribute if it exists
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
    
    # Second pass: Handle simple questions (without parts)
    # Match \question followed by text, then \begin{solution}...\end{solution}
    # Make sure we don't match questions that have already been converted
    simple_pattern = r'\\question\s+((?:(?!\\question|\\begin\{parts\}|<exercise>).)*?)\\begin\{solution\}(?:\[(.*?)\])?((?:(?!\\end\{solution\}).)*?)\\end\{solution\}'
    
    def replace_simple_question(match):
        question_text = match.group(1).strip()
        workspace = match.group(2)
        solution_text = match.group(3).strip()
        
        # Only include workspace attribute if it exists
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
    
    with open(output_file, 'w') as f:
        f.write(content)
    
    print(f"Conversion complete! Output saved to {output_file}")

if __name__ == "__main__":
    convert_4("section-1.1.txt", "section-1.1-pretext.txt")