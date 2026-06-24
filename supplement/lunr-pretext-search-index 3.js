var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "frontmatter-4",
  "level": "1",
  "url": "frontmatter-4.html",
  "type": "Acknowledgements",
  "number": "",
  "title": "Acknowledgements",
  "body": " The authors would like to thank the many instructors of MTH 103 at the University of Rhode Island, including full-time faculty, part-time faculty, and graduate teaching assistants, whose feedback has contributed to the improvement of both Applied Precalculus the course and Applied Precalculus the textbook over the years. Very special acknowledgment and boundless gratitude is owed to Kyle Monette, who worked closely with us on reformatting and editing as we prepared the second edition of Applied Precalculus. We also thank Faith Bailey for her contribution of additional exercises to our book.  "
},
{
  "id": "preface",
  "level": "1",
  "url": "preface.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " As the title of the book suggests, our emphasis is on the real-life meaning of precalculus concepts. We want our students to master the basic concepts of precalculus while building a solid understanding of those concepts in practical contexts and the skills to apply mathematical tools to real-life processes.  To illustrate our approach, take for example the family of linear functions. When talking about linear functions, our emphasis is on the practical meaning and the units of the slope as well as on the units and the practical meaning of the horizontal and vertical intercepts. Such practical understanding is built through many applied examples and their careful analysis. We show how to use linear functions to model real-life processes which are described through tabulated data. At the same time, we try to ensure that students build the algebraic proficiency necessary to successfully work with linear functions.  We present all the main precalculus topics while stressing their practical meaning and their real-life applications. Those topics include:  Functions, their graphs, and their numerical representation;  Linear functions and their applications;  Quadratic functions and quadratic equations;  Algebra of exponential expressions, power functions, and their applications;  Exponential and logarithmic functions, their algebraic properties and their rich variety of applications in the life sciences;  Trigonometric functions and their applications to modeling periodic phenomena.    Our intended audience is primarily students in the life sciences and pharmacy. These students can be divided generally into two groups. The first group consists of students for whom this course is a terminal mathematics course, who wish to learn tools of before-calculus mathematics and to develop solid skills of applying those tools to real-life problems. The second group consists of students who plan to continue their study of mathematics in an applied calculus course.  "
},
{
  "id": "frontmatter-6",
  "level": "1",
  "url": "frontmatter-6.html",
  "type": "Preface",
  "number": "",
  "title": "About the Authors",
  "body": " About the Authors   Erin Denette serves as a Teaching Professor for the University of Rhode Island Department of Mathematics and Applied Mathematical Sciences. She received her Ph.D. and M.S. in Mathematics from the University of Rhode Island. She earned her B.S. in Mathematics from Fitchburg State University.   Barbara Kaskosz serves as a Professor for the University of Rhode Island Department of Mathematics and Applied Mathematical Sciences. She received her Ph.D. in Mathematics from the Institute of Mathematics of the Polish Academy of Sciences and her M.S. in Mathematics from the University of Warsaw.  "
},
{
  "id": "sec_1_1",
  "level": "1",
  "url": "sec_1_1.html",
  "type": "Section",
  "number": "1.1",
  "title": "The Concept of a Function",
  "body": " The Concept of a Function    After completing this section, you should be able to do the following.     First objective.    Second objective.    Third objective.      One of the main concepts in mathematics and in the mathematical modeling of applied processes is that of a function. The formal mathematical definition of a function is abstract and general, but in applied precalculus we can think of a function as a special kind of dependence between two numerical variables.    Suppose you are in Rhode Island and intend to buy a gift from an online store. The amount of money, , that you will have to spend (that is, the total cost to purchase the gift) depends on the list price, , of the item you select. The cost is equal to the list price plus the state of Rhode Island's sales tax plus the rate the store charges for shipping and handling. Assuming that the online store charges a flat rate of for shipping and handling, give a formula for the cost to purchase a gift of list price dollars.    Given the list price , you can calculate the cost , in dollars, as Here, represents of the list price that is, the sales tax on the item.     variable numerical  function notation In the above formula, and are variables their values vary based on the item you select. They are both numerical variables as their possible values are numbers. The cost depends on and, moreover, the cost is uniquely determined by the item's list price . We say in this case that  is a function of . Using function notation , we write The notation is read as equals of . Note that does not stand for the word function here; it is merely a letter used to name the function and another letter could be used instead. The notation represents the value of the function at a given list price ; that is, is the cost corresponding to a list price :   For every , the value of the function gives the cost for a list price . For example, the value of the function at gives the cost corresponding to the list price dollars. Similarly, gives the cost corresponding to the list price dollars.    Use the function whose formula was found in to determine the total amount you will spend to purchase a gift with a list price of dollars from the online store.    We are looking for the cost when . In other words, we are looking for read aloud as of . Using the formula for with , we obtain If you select an item listed at dollars, you will pay dollars. In function notation we could write or, equivalently, .     variable dependent  variable independent Above, the cost variable, , is called the dependent variable or the output variable . The list price, , is the independent variable or the input variable . For each list price or input value input for short we have exactly one cost value. So we have exactly one output value output for short for each input. The formula for the function gives the rule of how to obtain the output corresponding to each possible input .  In general, we define a function as follows.   Informal Definition of a Function   A function is a correspondence between two numerical variables, the input variable and the output variable, that takes input numbers from a certain subset of the real numbers called the domain of the function and prescribes to each exactly one output.    From the mathematical point of view, the domain of the formula for the function consists of all real numbers . This is because is unique and defined for each individual real number inputted for . When we consider the applied context of this formula as presented in and , however, the input is a list price and therefore cannot be negative. For practical reasons, we would restrict the domain of to positive inputs .    Functions in General  In an abstract setting, when variables are not associated any specific real-life meaning, we commonly denote the independent variable by , the dependent variable by , and a function by :     Let where .   What is the domain of ?    Find and .    Find all inputs for which the output is equal to .         For every input number , we can multiply by and add . So the output is defined and is a single number for each . Hence, the domain of consists of all real numbers .    The quantity is the value of the function or the output corresponding to the input . Substituting into the formula for , we find Hence, the value of corresponding to is . Similarly,     We are looking for inputs for which the output . In other words, we are looking for the value (or the values) of which are solutions to the equation or equivalently To find , we use the standard techniques of solving equations: we subtract from both sides of the equation and then we divide both sides of the equation by . These steps are shown below.         Functions in Applied Settings  The previous example illustrates that a function need not be associated with an applied scenario. When an application is involved, it is important to be able to interpret the practical meaning.    The amount of nicotine in a person's bloodstream, , in milligrams, is a function of time , in hours, that have passed since the person finished smoking a single cigarette.   Identify the independent variable and the dependent variable of this function.    In the statement , what is the meaning of 3 and 0.71 in terms of time and nicotine? Include units in the answer.    Explain the meaning of the statement in practical terms.         Here, depends on , making a function of . Thus is the dependent variable and is the independent variable.    The number is a value of , so its units are hours; is a value of , so its units are milligrams. In practical terms, means that hours after a person finishes smoking a single cigarette there will be milligrams of nicotine left in their bloodstream.    Similarly to the prior solution, means that hours after a person finishes smoking a single cigarette there will be milligrams of nicotine left in their bloodstream.        In cases of strep throat, a daily pediatric dose of Amoxicillin, , in milligrams, depends on the weight of a child, , in kilograms; that is, is a function of . Denoting the function by results in As a general rule, the daily dose should be 50 milligrams for each kilogram of weight.   Write a formula for the function .    Calculate the daily dose for a child who weighs 8 kilograms.    What does represent in practical terms?         The value represents the dose for the weight of kilograms. Since the dose is 50 milligrams for each kilogram, the dose is given by   Multiplying and simplifying units results in milligrams.    We calculate and arrive at the conclusion that the dose for a child who weighs 8 kilograms is 400 milligrams.    To answer questions like this, it can be useful to assign the appropriate units to each number. Since is a value for , it is measured in kilograms. is a value for or , so it is measured in milligrams. Combining this information with the fact that gives the dose for a child who weighs kilograms, we conclude that the practical meaning of the statement is that a child weighing kilograms should receive a daily dose of milligrams of Amoxicillin when being treated for strep throat.        A man leaves home and drives at miles per hour toward a hospital located miles away from his home. At time hours after he began driving, his distance from the hospital, , in miles, is given by    Let . What is the formula for the function ?    How far from the hospital is the man after 1.5 hours?    When will the man arrive at the hospital?         Since and the formula for was given, .    The man's distance from the hospital at is given by After hours, the man is miles from the hospital.    The man will arrive at the hospital when his distance from the hospital is 0 miles. We are looking for such that or equivalently . Solving for :   The man will arrive at the hospital hours and minutes after he left home.        Increasing and Decreasing Functions  In we considered the function that gives the daily dose of Amoxicillin for a child weighing kilograms. Notice that increases as the weight increases. In , the distance from the hospital decreases as the number of hours spent driving toward the hospital increases.   function increasing  function decreasing  Increasing and Decreasing Functions      A function is increasing if the values of increase as increases.    A function is decreasing if the values of decrease as increases.       Above, the dose of Amoxicillin would be an illustration of an increasing function of weight while the distance from the hospital would be an illustration of a decreasing function of time. We will see later that many functions are neither increasing nor decreasing through their domain; they may increase on some intervals and decrease on other intervals.   Functions as a Sequence of Operations  A function that is presented as a formula can be thought of as sequence of operations performed on an input in order to obtain the corresponding output. For example, the function of takes an input, multiplies the input by , and then adds to the result. The function performs this sequence of operations no matter what the input is. We can write this symbolically as Whatever input we feed into the function , a number, an expression, whatever we like, the function will multiply the input by and add .   In Chapter 7 we'll even consider putting functions into functions.     Let . Evaluate and simplify each of the following.                The function takes any input whatever it might be multiplies the input by 4, and subtracts the result from 3:      In , the input is an algebraic expression : . In any given context, may stand for a number or for a numerical variable. No matter what represents here, the function takes the input , multiplies it by 4, and then subtracts the result from 3. Thus, To simplify, we use the distributive law to expand : We cannot simplify further. The final answer is .    We consider the whole expression all at once below, though you may find it helpful to separately find each of and and then subtract the two results.   Whatever might be, .         Find a formula for if...   ... takes the square root of the input, multiplies the result by 3, and subtracts 1.    ... squares the input, adds 2, and takes the reciprocal of the result.          We begin with an input . Taking the square root of this input results in . Multiplying the result by 3 results in . Finally, subtracting 1 results in . Therefore, the formula for is     We begin with an input . Squaring the input first results in . Adding next results in . Now, we take the reciprocal of , which is . Therefore, the formula for is          Find the domain of each of the following functions.                Note that neither and are assigned any specific practical applied meaning. This means that the domain of each function will be all inputs for which the output is defined.     The function is defined at any input that does not lead to division by zero and undefined at any input that does lead to division by zero. To find the value(s) of for which is undefined, we set its denominator equal to zero and solve for :   We can now see that is undefined when and when . The domain of is all real numbers except for these two values. This can be written in a variety of different ways.   domain  set-builder notation  interval notation  union    Domain of in words:     Domain of in set-builder notation :     Domain of in interval notation : The symbol is called a union . Essentially, it means include all these intervals .         The function is defined provided the number under the radical is not negative. That is, it is defined for those values of satisfying that . We can isolate on one side of the inequality   which allows us to conclude that the domain of is all real numbers that are greater than or equal to . As before, this can be written in a variety of different ways.     Domain of in words:     Domain of in set-builder notation :     Domain of in interval notation :  Notice that we wrote and not to denote that is included in the domain.               Practice Problems                                                     The value of a car, , in dollars, is a function of the number of years, , since it was purchased; that is, .  The independent variable is  t   V   g  with units  dollars   years   dollars\/year  .  The dependent variable is  t   V   g  with units  dollars   years   dollars\/year  .                       The independent variable is and has units of years. The dependent variable is and has units of dollars.              The amount of caffeine, , measured in milligrams, in a person's body hours after drinking a cup of coffee is given by the function . What do each of the following statements tell you in practical terms; that is, in terms of time and caffeine? Answer in complete sentences and include units with each number.           The amount of caffeine in a person's body hours after drinking a cup of coffee is 96 mg.  The amount of caffeine in a person's body hours after drinking a cup of coffee is 48 mg.   The amount of caffeine in a person's body hours after drinking a cup of coffee is approximately 0 mg.         The total number of units, , produced after hours of production is given by the function . What do each of the following statements tell you in practical terms; that is, in terms of units of product produced and time? Answer in complete sentences and include units with each number.           A total of 10 units of the product are produced in 1 hour.  A total of 0 units of the product are produced in 0 hours.  A total of approximately 29 units of the product are produced in 3 hours.        The total cost of a meal in a restaurant, , in dollars, as a function of the menu price of the meal, , also in dollars, is given by where the term corresponds to a tip.   What is the input variable and what units is it measured in?  What is the output variable and what units is it measured in?  Calculate the total cost of a meal whose menu price is .        ; dollars   ; dollars           A bakery makes 6 batches of cookies an hour, with a batch typically consisting of 12 cookies. The total number of batches baked, , is measured as function of time , in hours, so that .   What is the independent variable?  What is the dependent variable?  Evaluate . What is the practical meaning of in the applied context of this problem?       The independent variable is , which represents the time spent baking in hours.   The dependent variable is , which represents the number of batches of cookies made by the bakery after hours have passed.    ; The bakery makes 18 batches of cookies (or approximately 216 cookies) in 3 hours.        A driver is heading to a faraway town. The amount of fuel, , in gallons, left in the fuel tank is a function of the number of miles driven during the trip; that is, .   What does the statement tell you in practical terms? What are units of the numbers 70 and 6?  What does the statement tell you in practical terms?       The amount of fuel left in the fuel tank 70 miles into the drive is 6 gallons.  The amount of fuel left in the fuel tank 200 miles into the drive is 1 gallon.         Let . Evaluate and simplify if possible:                          Let . Evaluate:                          Let . Evaluate and simplify if possible:                          Let . Evaluate. If the value is undefined, say so.              undefined           Let . Evaluate and simplify if possible.                          Let . Evaluate and simplify if possible.                          Let and . Evaluate and simplify if possible.                          A URI student tutors for MTH 103. The cost of each session in terms of hours, , is given by the function .   What is the cost of a 3 hour session?  If , how many hours was the session?           hours        The value of a car, , in dollars, years after purchase is given by the function , where .   What is the value of the car at the time of purchase?  What is the value of the car years after purchase?  After how many years is the car worth nothing?              years         Since you see lightning immediately and it takes the sound of thunder about 5 seconds to travel a mile, you can calculate the distance between you and the lightning. Count the number of seconds, , between the flash of lightning and the sound of thunder. Then the distance, , in miles, between you and the lightning is given by the function:    Identify the independent and the dependent variable.  How far is the lightning if you counted 4 seconds between the flash and the thunder?        is the independent variable; is the dependent variable   of a mile        The cost of a medium pizza is plus per topping. Write a function to describe the cost of a medium pizza with number of toppings.           Find a formula for a function for each of the following scenarios:   multiplies the input by 7 then adds to the result.  adds to the input and then multiplies the result by 7.                   Find a formula for a function for each of the following scenarios:   takes the square of the input, multiplies the result by 5, then subtracts 8.  multiplies the input by 5, takes the square of the result, then subtracts 8.  subtracts 8 from the input, takes the square of the result, then multiplies by 5.                      Find a formula for a function for each of the following scenarios:   takes the input, divides it by 3, then adds this to the square root of the input times 4.  takes the reciprocal of the square root of the input, adds to this, and then adds the input squared.                   Find the domain of each of the following functions.             all real numbers or in interval notation  all real numbers or in interval notation  all real numbers , or in interval notation  all real numbers or in interval notation  all real numbers or in interval notation        Find the domain of each of the following functions.   , where is a positive integer         all real numbers or in interval notation  all real numbers or in interval notation  all real numbers or in interval notation        Practice Worksheet      A caffeine addict has and buys cups of coffee at per cup. The amount of money that he has left depends on the number of cups that he buys.     Why is this scenario an example of a function? What is the input? What is the output?    This is a function because if they purchase a specific number of cups of coffee, there is exactly one amount of money left. The input is the number of cups of coffee purchased, the output is the amount of money left.      Write an equation\/formula expressing the amount of money that the caffeine addict will have left after purchasing cups of coffee.     . (They lose from their for each cup of coffee they buy)      What is the domain? What is the range?    The domain is the set of all possible numbers of cups of coffee they could purchase, which are integers (whole numbers) and specifically must be between and . The is there because it is the maximum number of cups of coffee they can purchase with . The range is the set of all possible amounts of money they could have left from the initial . So numbers from to spaced by .       Let be the weight of an astronaut in pounds at a distance (in thousands of miles) from the earth's center. Explain the meaning of each of the following. Write a complete sentence explaining the meaning of , including units.    At a distance of thousand miles from the Earth's center, the astronaut weighs pounds.      Write an expression for the total cost of an item of sticker price that is on sale for off given that the sales tax is .    The total cost is equal to the sale price plus the sales tax on the sale price. That is,       Write an expression for the sequence of operations.     Subtract 9 from and then multiply the result by 5.           Subtract from 7 and then divide the result by 6.     , or equivalently       Divide by 3, subtract 4, and triple the result.    First we have , and then subtracting yields . Finally, this is tripled (multiplied by ) to obtain .      Add 10 to , then divide by 3, then square the result.            Given that , , and , find each of the following.                                                                      We advise that you compute and separately. First, Second, Therefore        Find the domain of each function.          All real numbers.           All real numbers.           Because must be nonnegative, we require that . Thus and so . That is, the domain is all numbers greater than or equal to .           Because cannot be zero (we cannot divide by zero), then means that and so . That is, the domain is all numbers except for  .      "
},
{
  "id": "sec_1_1-2",
  "level": "2",
  "url": "sec_1_1.html#sec_1_1-2",
  "type": "Objectives",
  "number": "1.1",
  "title": "",
  "body": "  After completing this section, you should be able to do the following.     First objective.    Second objective.    Third objective.    "
},
{
  "id": "example-ch1-gift",
  "level": "2",
  "url": "sec_1_1.html#example-ch1-gift",
  "type": "Example",
  "number": "1.1.1",
  "title": "",
  "body": "  Suppose you are in Rhode Island and intend to buy a gift from an online store. The amount of money, , that you will have to spend (that is, the total cost to purchase the gift) depends on the list price, , of the item you select. The cost is equal to the list price plus the state of Rhode Island's sales tax plus the rate the store charges for shipping and handling. Assuming that the online store charges a flat rate of for shipping and handling, give a formula for the cost to purchase a gift of list price dollars.    Given the list price , you can calculate the cost , in dollars, as Here, represents of the list price that is, the sales tax on the item.   "
},
{
  "id": "example-ch1-gift2",
  "level": "2",
  "url": "sec_1_1.html#example-ch1-gift2",
  "type": "Example",
  "number": "1.1.2",
  "title": "",
  "body": "  Use the function whose formula was found in to determine the total amount you will spend to purchase a gift with a list price of dollars from the online store.    We are looking for the cost when . In other words, we are looking for read aloud as of . Using the formula for with , we obtain If you select an item listed at dollars, you will pay dollars. In function notation we could write or, equivalently, .   "
},
{
  "id": "sec_1_1-3-8",
  "level": "2",
  "url": "sec_1_1.html#sec_1_1-3-8",
  "type": "Definition",
  "number": "1.1.3",
  "title": "Informal Definition of a Function.",
  "body": " Informal Definition of a Function   A function is a correspondence between two numerical variables, the input variable and the output variable, that takes input numbers from a certain subset of the real numbers called the domain of the function and prescribes to each exactly one output.   "
},
{
  "id": "example-ch1-equ-solve",
  "level": "2",
  "url": "sec_1_1.html#example-ch1-equ-solve",
  "type": "Example",
  "number": "1.1.4",
  "title": "",
  "body": "  Let where .   What is the domain of ?    Find and .    Find all inputs for which the output is equal to .         For every input number , we can multiply by and add . So the output is defined and is a single number for each . Hence, the domain of consists of all real numbers .    The quantity is the value of the function or the output corresponding to the input . Substituting into the formula for , we find Hence, the value of corresponding to is . Similarly,     We are looking for inputs for which the output . In other words, we are looking for the value (or the values) of which are solutions to the equation or equivalently To find , we use the standard techniques of solving equations: we subtract from both sides of the equation and then we divide both sides of the equation by . These steps are shown below.      "
},
{
  "id": "example-ch1-nicotine",
  "level": "2",
  "url": "sec_1_1.html#example-ch1-nicotine",
  "type": "Example",
  "number": "1.1.5",
  "title": "",
  "body": "  The amount of nicotine in a person's bloodstream, , in milligrams, is a function of time , in hours, that have passed since the person finished smoking a single cigarette.   Identify the independent variable and the dependent variable of this function.    In the statement , what is the meaning of 3 and 0.71 in terms of time and nicotine? Include units in the answer.    Explain the meaning of the statement in practical terms.         Here, depends on , making a function of . Thus is the dependent variable and is the independent variable.    The number is a value of , so its units are hours; is a value of , so its units are milligrams. In practical terms, means that hours after a person finishes smoking a single cigarette there will be milligrams of nicotine left in their bloodstream.    Similarly to the prior solution, means that hours after a person finishes smoking a single cigarette there will be milligrams of nicotine left in their bloodstream.     "
},
{
  "id": "example-ch1-amox",
  "level": "2",
  "url": "sec_1_1.html#example-ch1-amox",
  "type": "Example",
  "number": "1.1.6",
  "title": "",
  "body": "  In cases of strep throat, a daily pediatric dose of Amoxicillin, , in milligrams, depends on the weight of a child, , in kilograms; that is, is a function of . Denoting the function by results in As a general rule, the daily dose should be 50 milligrams for each kilogram of weight.   Write a formula for the function .    Calculate the daily dose for a child who weighs 8 kilograms.    What does represent in practical terms?         The value represents the dose for the weight of kilograms. Since the dose is 50 milligrams for each kilogram, the dose is given by   Multiplying and simplifying units results in milligrams.    We calculate and arrive at the conclusion that the dose for a child who weighs 8 kilograms is 400 milligrams.    To answer questions like this, it can be useful to assign the appropriate units to each number. Since is a value for , it is measured in kilograms. is a value for or , so it is measured in milligrams. Combining this information with the fact that gives the dose for a child who weighs kilograms, we conclude that the practical meaning of the statement is that a child weighing kilograms should receive a daily dose of milligrams of Amoxicillin when being treated for strep throat.     "
},
{
  "id": "example-ch1-drive",
  "level": "2",
  "url": "sec_1_1.html#example-ch1-drive",
  "type": "Example",
  "number": "1.1.7",
  "title": "",
  "body": "  A man leaves home and drives at miles per hour toward a hospital located miles away from his home. At time hours after he began driving, his distance from the hospital, , in miles, is given by    Let . What is the formula for the function ?    How far from the hospital is the man after 1.5 hours?    When will the man arrive at the hospital?         Since and the formula for was given, .    The man's distance from the hospital at is given by After hours, the man is miles from the hospital.    The man will arrive at the hospital when his distance from the hospital is 0 miles. We are looking for such that or equivalently . Solving for :   The man will arrive at the hospital hours and minutes after he left home.     "
},
{
  "id": "sec_1_1-6-3",
  "level": "2",
  "url": "sec_1_1.html#sec_1_1-6-3",
  "type": "Definition",
  "number": "1.1.8",
  "title": "Increasing and Decreasing Functions.",
  "body": " function increasing  function decreasing  Increasing and Decreasing Functions      A function is increasing if the values of increase as increases.    A function is decreasing if the values of decrease as increases.      "
},
{
  "id": "sec_1_1-7-4",
  "level": "2",
  "url": "sec_1_1.html#sec_1_1-7-4",
  "type": "Example",
  "number": "1.1.9",
  "title": "",
  "body": "  Let . Evaluate and simplify each of the following.                The function takes any input whatever it might be multiplies the input by 4, and subtracts the result from 3:      In , the input is an algebraic expression : . In any given context, may stand for a number or for a numerical variable. No matter what represents here, the function takes the input , multiplies it by 4, and then subtracts the result from 3. Thus, To simplify, we use the distributive law to expand : We cannot simplify further. The final answer is .    We consider the whole expression all at once below, though you may find it helpful to separately find each of and and then subtract the two results.   Whatever might be, .      "
},
{
  "id": "sec_1_1-7-5",
  "level": "2",
  "url": "sec_1_1.html#sec_1_1-7-5",
  "type": "Example",
  "number": "1.1.10",
  "title": "",
  "body": "  Find a formula for if...   ... takes the square root of the input, multiplies the result by 3, and subtracts 1.    ... squares the input, adds 2, and takes the reciprocal of the result.          We begin with an input . Taking the square root of this input results in . Multiplying the result by 3 results in . Finally, subtracting 1 results in . Therefore, the formula for is     We begin with an input . Squaring the input first results in . Adding next results in . Now, we take the reciprocal of , which is . Therefore, the formula for is       "
},
{
  "id": "sec_1_1-7-6",
  "level": "2",
  "url": "sec_1_1.html#sec_1_1-7-6",
  "type": "Example",
  "number": "1.1.11",
  "title": "",
  "body": "  Find the domain of each of the following functions.                Note that neither and are assigned any specific practical applied meaning. This means that the domain of each function will be all inputs for which the output is defined.     The function is defined at any input that does not lead to division by zero and undefined at any input that does lead to division by zero. To find the value(s) of for which is undefined, we set its denominator equal to zero and solve for :   We can now see that is undefined when and when . The domain of is all real numbers except for these two values. This can be written in a variety of different ways.   domain  set-builder notation  interval notation  union    Domain of in words:     Domain of in set-builder notation :     Domain of in interval notation : The symbol is called a union . Essentially, it means include all these intervals .         The function is defined provided the number under the radical is not negative. That is, it is defined for those values of satisfying that . We can isolate on one side of the inequality   which allows us to conclude that the domain of is all real numbers that are greater than or equal to . As before, this can be written in a variety of different ways.     Domain of in words:     Domain of in set-builder notation :     Domain of in interval notation :  Notice that we wrote and not to denote that is included in the domain.            "
},
{
  "id": "ww_1_1_1",
  "level": "2",
  "url": "sec_1_1.html#ww_1_1_1",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "                                              "
},
{
  "id": "ww_1_1_2",
  "level": "2",
  "url": "sec_1_1.html#ww_1_1_2",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "   The value of a car, , in dollars, is a function of the number of years, , since it was purchased; that is, .  The independent variable is  t   V   g  with units  dollars   years   dollars\/year  .  The dependent variable is  t   V   g  with units  dollars   years   dollars\/year  .                       The independent variable is and has units of years. The dependent variable is and has units of dollars.       "
},
{
  "id": "ex_1_1-1",
  "level": "2",
  "url": "sec_1_1.html#ex_1_1-1",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  The amount of caffeine, , measured in milligrams, in a person's body hours after drinking a cup of coffee is given by the function . What do each of the following statements tell you in practical terms; that is, in terms of time and caffeine? Answer in complete sentences and include units with each number.           The amount of caffeine in a person's body hours after drinking a cup of coffee is 96 mg.  The amount of caffeine in a person's body hours after drinking a cup of coffee is 48 mg.   The amount of caffeine in a person's body hours after drinking a cup of coffee is approximately 0 mg.      "
},
{
  "id": "ex_1_1-2",
  "level": "2",
  "url": "sec_1_1.html#ex_1_1-2",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  The total number of units, , produced after hours of production is given by the function . What do each of the following statements tell you in practical terms; that is, in terms of units of product produced and time? Answer in complete sentences and include units with each number.           A total of 10 units of the product are produced in 1 hour.  A total of 0 units of the product are produced in 0 hours.  A total of approximately 29 units of the product are produced in 3 hours.     "
},
{
  "id": "ex_1_1-3",
  "level": "2",
  "url": "sec_1_1.html#ex_1_1-3",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  The total cost of a meal in a restaurant, , in dollars, as a function of the menu price of the meal, , also in dollars, is given by where the term corresponds to a tip.   What is the input variable and what units is it measured in?  What is the output variable and what units is it measured in?  Calculate the total cost of a meal whose menu price is .        ; dollars   ; dollars        "
},
{
  "id": "ex_1_1-4",
  "level": "2",
  "url": "sec_1_1.html#ex_1_1-4",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  A bakery makes 6 batches of cookies an hour, with a batch typically consisting of 12 cookies. The total number of batches baked, , is measured as function of time , in hours, so that .   What is the independent variable?  What is the dependent variable?  Evaluate . What is the practical meaning of in the applied context of this problem?       The independent variable is , which represents the time spent baking in hours.   The dependent variable is , which represents the number of batches of cookies made by the bakery after hours have passed.    ; The bakery makes 18 batches of cookies (or approximately 216 cookies) in 3 hours.     "
},
{
  "id": "ex_1_1-5",
  "level": "2",
  "url": "sec_1_1.html#ex_1_1-5",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  A driver is heading to a faraway town. The amount of fuel, , in gallons, left in the fuel tank is a function of the number of miles driven during the trip; that is, .   What does the statement tell you in practical terms? What are units of the numbers 70 and 6?  What does the statement tell you in practical terms?       The amount of fuel left in the fuel tank 70 miles into the drive is 6 gallons.  The amount of fuel left in the fuel tank 200 miles into the drive is 1 gallon.     "
},
{
  "id": "ex_1_1-6",
  "level": "2",
  "url": "sec_1_1.html#ex_1_1-6",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "  Let . Evaluate and simplify if possible:                       "
},
{
  "id": "ex_1_1-7",
  "level": "2",
  "url": "sec_1_1.html#ex_1_1-7",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "  Let . Evaluate:                       "
},
{
  "id": "ex_1_1-8",
  "level": "2",
  "url": "sec_1_1.html#ex_1_1-8",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "  Let . Evaluate and simplify if possible:                       "
},
{
  "id": "ex_1_1-9",
  "level": "2",
  "url": "sec_1_1.html#ex_1_1-9",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "  Let . Evaluate. If the value is undefined, say so.              undefined        "
},
{
  "id": "ex_1_1-10",
  "level": "2",
  "url": "sec_1_1.html#ex_1_1-10",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "  Let . Evaluate and simplify if possible.                       "
},
{
  "id": "ex_1_1-11",
  "level": "2",
  "url": "sec_1_1.html#ex_1_1-11",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "  Let . Evaluate and simplify if possible.                       "
},
{
  "id": "ex_1_1-12",
  "level": "2",
  "url": "sec_1_1.html#ex_1_1-12",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "  Let and . Evaluate and simplify if possible.                       "
},
{
  "id": "ex_1_1-13",
  "level": "2",
  "url": "sec_1_1.html#ex_1_1-13",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": "  A URI student tutors for MTH 103. The cost of each session in terms of hours, , is given by the function .   What is the cost of a 3 hour session?  If , how many hours was the session?           hours     "
},
{
  "id": "ex_1_1-14",
  "level": "2",
  "url": "sec_1_1.html#ex_1_1-14",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": "  The value of a car, , in dollars, years after purchase is given by the function , where .   What is the value of the car at the time of purchase?  What is the value of the car years after purchase?  After how many years is the car worth nothing?              years     "
},
{
  "id": "ex_1_1-15",
  "level": "2",
  "url": "sec_1_1.html#ex_1_1-15",
  "type": "Exercise",
  "number": "15",
  "title": "",
  "body": "   Since you see lightning immediately and it takes the sound of thunder about 5 seconds to travel a mile, you can calculate the distance between you and the lightning. Count the number of seconds, , between the flash of lightning and the sound of thunder. Then the distance, , in miles, between you and the lightning is given by the function:    Identify the independent and the dependent variable.  How far is the lightning if you counted 4 seconds between the flash and the thunder?        is the independent variable; is the dependent variable   of a mile     "
},
{
  "id": "ex_1_1-16",
  "level": "2",
  "url": "sec_1_1.html#ex_1_1-16",
  "type": "Exercise",
  "number": "16",
  "title": "",
  "body": "  The cost of a medium pizza is plus per topping. Write a function to describe the cost of a medium pizza with number of toppings.        "
},
{
  "id": "ex_1_1-17",
  "level": "2",
  "url": "sec_1_1.html#ex_1_1-17",
  "type": "Exercise",
  "number": "17",
  "title": "",
  "body": "  Find a formula for a function for each of the following scenarios:   multiplies the input by 7 then adds to the result.  adds to the input and then multiplies the result by 7.                "
},
{
  "id": "ex_1_1-18",
  "level": "2",
  "url": "sec_1_1.html#ex_1_1-18",
  "type": "Exercise",
  "number": "18",
  "title": "",
  "body": "  Find a formula for a function for each of the following scenarios:   takes the square of the input, multiplies the result by 5, then subtracts 8.  multiplies the input by 5, takes the square of the result, then subtracts 8.  subtracts 8 from the input, takes the square of the result, then multiplies by 5.                   "
},
{
  "id": "ex_1_1-19",
  "level": "2",
  "url": "sec_1_1.html#ex_1_1-19",
  "type": "Exercise",
  "number": "19",
  "title": "",
  "body": "  Find a formula for a function for each of the following scenarios:   takes the input, divides it by 3, then adds this to the square root of the input times 4.  takes the reciprocal of the square root of the input, adds to this, and then adds the input squared.                "
},
{
  "id": "ex_1_1-20",
  "level": "2",
  "url": "sec_1_1.html#ex_1_1-20",
  "type": "Exercise",
  "number": "20",
  "title": "",
  "body": "  Find the domain of each of the following functions.             all real numbers or in interval notation  all real numbers or in interval notation  all real numbers , or in interval notation  all real numbers or in interval notation  all real numbers or in interval notation     "
},
{
  "id": "ex_1_1-21",
  "level": "2",
  "url": "sec_1_1.html#ex_1_1-21",
  "type": "Exercise",
  "number": "21",
  "title": "",
  "body": "  Find the domain of each of the following functions.   , where is a positive integer         all real numbers or in interval notation  all real numbers or in interval notation  all real numbers or in interval notation     "
},
{
  "id": "ws_1_1-2",
  "level": "2",
  "url": "sec_1_1.html#ws_1_1-2",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  A caffeine addict has and buys cups of coffee at per cup. The amount of money that he has left depends on the number of cups that he buys.     Why is this scenario an example of a function? What is the input? What is the output?    This is a function because if they purchase a specific number of cups of coffee, there is exactly one amount of money left. The input is the number of cups of coffee purchased, the output is the amount of money left.      Write an equation\/formula expressing the amount of money that the caffeine addict will have left after purchasing cups of coffee.     . (They lose from their for each cup of coffee they buy)      What is the domain? What is the range?    The domain is the set of all possible numbers of cups of coffee they could purchase, which are integers (whole numbers) and specifically must be between and . The is there because it is the maximum number of cups of coffee they can purchase with . The range is the set of all possible amounts of money they could have left from the initial . So numbers from to spaced by .    "
},
{
  "id": "ws_1_1-3",
  "level": "2",
  "url": "sec_1_1.html#ws_1_1-3",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  Let be the weight of an astronaut in pounds at a distance (in thousands of miles) from the earth's center. Explain the meaning of each of the following. Write a complete sentence explaining the meaning of , including units.    At a distance of thousand miles from the Earth's center, the astronaut weighs pounds.   "
},
{
  "id": "ws_1_1-4",
  "level": "2",
  "url": "sec_1_1.html#ws_1_1-4",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  Write an expression for the total cost of an item of sticker price that is on sale for off given that the sales tax is .    The total cost is equal to the sale price plus the sales tax on the sale price. That is,    "
},
{
  "id": "ws_1_1-5",
  "level": "2",
  "url": "sec_1_1.html#ws_1_1-5",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "  Write an expression for the sequence of operations.     Subtract 9 from and then multiply the result by 5.           Subtract from 7 and then divide the result by 6.     , or equivalently       Divide by 3, subtract 4, and triple the result.    First we have , and then subtracting yields . Finally, this is tripled (multiplied by ) to obtain .      Add 10 to , then divide by 3, then square the result.         "
},
{
  "id": "ws_1_1-6",
  "level": "2",
  "url": "sec_1_1.html#ws_1_1-6",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": "  Given that , , and , find each of the following.                                                                      We advise that you compute and separately. First, Second, Therefore     "
},
{
  "id": "ws_1_1-7",
  "level": "2",
  "url": "sec_1_1.html#ws_1_1-7",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "",
  "body": "  Find the domain of each function.          All real numbers.           All real numbers.           Because must be nonnegative, we require that . Thus and so . That is, the domain is all numbers greater than or equal to .           Because cannot be zero (we cannot divide by zero), then means that and so . That is, the domain is all numbers except for  .    "
},
{
  "id": "sec_1_2",
  "level": "1",
  "url": "sec_1_2.html",
  "type": "Section",
  "number": "1.2",
  "title": "The Graph of a Function",
  "body": " The Graph of a Function    After completing this section, you should be able to do the following.     First objective.    Second objective.    Third objective.      One way to visualize a function is by graphing it. The graph of a function is the set of all ordered pairs or points in the -plane such that is in the domain of the function and is the output assigned to the input by .  This graph is often a curve in the -plane. Specifically, it is the set of all ordered pairs for which the second coordinate is the value of the function at the first coordinate ; that is, the graph is the set of all points that satisfy the equation :      A short description.    It is not always reasonable or even possible to plot the ordered pair associated with each in the domain of a given function . This is because functions can have many (sometimes even infinitely many) possible inputs. When drawing the graph of a function by hand, we customarily take relatively few points , plot the corresponding ordered pairs in the -plane, and then join neighboring ordered pairs with straight line segments. The result is an approximation of the graph of the function. Graphing calculators and other graphing tools do exactly this they just use a greater number of inputs than we typically would when graphing by hand.  It is useful to state a precise definition of the graph of a function as similar definitions appear in other contexts in mathematics.   Graph of a Function   The graph of a function is the collection of all points in the -plane for which . In other words, the graph is the collection of points for all inputs in the domain of .      Sketch the graph of the function where by hand. Plot points on the graph for .    The below table gives each input , the corresponding output obtained by calculating , and then the associated point .              pair                                                                                                       Plotting these points on the -plane and joining neighboring points by straight line segments results in the following rough sketch of :   A short description.    This is a decent approximation of the graph of . A better graph of can be obtained from a graphing calculator, graphing software package, or other similar tool.   A short description.      In , the function was given algebraically . That is, we were provided the algebraic formula for the function.  Sometimes, a function is given graphically . That is, we are given only the graph of the function. The following examples illustrate that a great deal of information can be extracted from the graph of a function.    The amount of nicotine in a person's bloodstream, , in milligrams, is a function of the time , in hours, that has passed since the person smoked a single cigarette. The graph of the function is given in .     A short description.       How much nicotine is absorbed from a single cigarette?  How much nicotine is left in the person's bloodstream hours after smoking a single cigarette? What about after hours?        Note that (as the point belongs to the graph of ). Thus, at hours so immediately after a person finishes smoking a cigarette the amount of nicotine in their bloodstream is milligrams. This is the amount absorbed from the cigarette.   As time goes on, the amount of nicotine decreases. We see from the grid on the -plane that ; in other words, the point lies on the graph. This tells us that hours after smoking a single cigarette there is milligram of nicotine left in the bloodstream.  Similarly, we observe that and conclude that hours after smoking a single cigarette there is only milligram of nicotine left in the bloodstream.         A woman is driving to visit with her family in a town miles from her home. Let be the time, in hours, since she left her home. Let be the distance, in miles, to her destination. Here, is a function of : . The graph of the function is given in .     A short description.       What is her distance from her destination hour after she leaves home?  Estimate the time at which her distance from her destination is miles.  When will she reach her destination?  How fast is she driving?        The point on the graph above is . In function notation, this can be written as . The practical meaning of this notation is that the distance to her destination after hour of driving is miles.  We look for the point on the graph for which the second coordinate is . The -coordinate of that point seems to be at . We conclude that the point lies on the graph, and that the associated function notation is . This means that after hours, the woman is 60 miles from her destination.  The woman reaches her destination when ; that is, when . From the graph, it is clear that . Hence the woman arrives at her destination after hours.  In the first hour of driving, her distance from her destination drops from miles to miles. After the next hour, it drops from miles to miles, and then from miles to miles during the hour after that. This pattern reveals that the woman is traveling at miles per hour.       Graphs of Increasing and Decreasing Functions  In graphical terms:    A function is increasing if its graph climbs as the independent variable increases; that is, as we move from left to right.  A function is decreasing if its graph falls as the independent variable increases; that is, as we move from left to right.    The function in is decreasing its graph is falling as increases. The amount of nicotine decreases as the amount of time after smoking a cigarette increases. In the distance to the destination decreases as the time spent driving increases. The function in is neither increasing nor decreasing in its domain. At first, over the negative -axis the graph is falling; the values decrease as increases. Then, over the positive -axis, the graph is climbing; the values increase as increases. We can say that is decreasing on the interval and increasing on the interval .   We typically require that these intervals be open : . Why? You'll see in calculus.    Functions Increasing or Decreasing on Intervals     A function is increasing on an interval if the values increase as increases along .  A function is decreasing on an interval if the values decrease as increases along .        Identify the interval(s) on which the function depicted below is increasing and the interval(s) on which it is decreasing.   A short description.      The graph of is climbing on the interval and on the interval . Hence, the function is increasing on these intervals. In interval notation, we would write that the function is increasing on .  The graph of is falling and thus is decreasing on the interval . In interval notation, we would write that the function is decreasing on .   Note that we do not use a bracket or around any of the endpoints , , or that appear in the interval notation here. This is because a function is neither increasing nor decreasing at these endpoints it either stops at them, or turns around.       Vertical Line Test  We have established that the graph of a function is often a curve in the -plane. However, not every curve in the -plane is the graph of a function. The definition of a function requires that for each input in the domain there is exactly one output . That is, there cannot be two different outputs corresponding to the same input.  The Vertical Line Test is a simple visual way of determining if a given curve is or is not the graph of a function.  Vertical Line Test   Let a curve in the -plane be given. If there is a vertical line that intersects the curve more than once, then the curve does not represent a function. If every vertical line intersects the curve at most once, then the curve represents the graph of a function.     This test clearly requires having the graph of a curve. In the next section, when a table of values is given, we cannot use this test.     Is the circle of radius centered at the origin in the -plane the graph of a function?    Consider the vertical line corresponding to ; that is, the vertical line passing through the point on the -axis.   A short description.     It takes only one vertical line intersecting the curve twice to conclude that the curve is not a function!   This vertical line intersects the circle at two points with two different values of , meaning there are two outputs corresponding to the input . This violates the definition of a function. Hence, the circle is NOT the graph of a function.    In utilizing the Vertical Line Test, it doesn't matter if the coordinates on the plane are labeled with , , or other letters. The idea is the same.    Is the graph of a straight line segment between the ordered pairs and in the -plane the graph of a function?   A short description.      The line segment is the graph of a function whose domain is the interval . Using the Vertical Line Test, we can see that each individual vertical line that passes through a specific value of with on the horizontal axis crosses the line segment at exactly one point. Any vertical line that passes through a value of outside the interval does not intersect the segment.    Note that, in general, a function can have the same output for two different inputs. In , the function gives the same output for both and . Still, for each , we have only one value of .  Having the same output for two different inputs means that some horizontal lines intersect the graph more than once which is perfectly fine for a function:   A short description.    We will revisit graphs of functions in Section 1.4.      Create a table of values and sketch the graph of the function for . Then use a graphing calculator or other graphing utility to check your graph.                       A short description.        Create a table of values and sketch the graph of the function for . Then use your calculator or any other graphing utility to check your graph.                     A short description.        Create a table of values and sketch the graph of the function for . Then use a graphing calculator or other graphing utility to check your graph.                     A short description.        The total cost of a meal in a restaurant, , in dollars, as a function of the price of the meal, , in dollars is given by: where the term corresponds to the tip. Create a table of values and sketch the graph of the function for . Then use your calculator or any other graphing utility to check your graph.                         A short description.        Use the graph of the function below to estimate each of the following.   A short description.                              For the function whose graph is given in , estimate all values for which .     , , and .      For the function whose graph is given in , estimate all values of for which .     , , and .      Use the graph of the function shown below to estimate each of the following.          A short description.                       For the function whose graph is given in , estimate all values of for which .     and       For the function whose graph is given in , estimate all values of for which .     , , , and       A driver of a 2019 Toyota Corolla fills his gas tank and embarks on a highway trip. The amount of gas left in the tank, , in gallons, is a function of the number of miles driven, . Use the graph of given below to answer the following questions.   A short description.      What is the fuel tank capacity of the 2019 Toyota Corolla?  How much fuel is left after 200 miles?  What happens after 528 miles?  What is the fuel efficiency of the 2019 Toyota Corolla on the highway?         gallons.   gallons.  The gas tank is empty.  Approximately miles per gallon.        The amount of caffeine remaining in the body, , in milligrams, hours after drinking a cup of coffee, is given by the graph below.   A short description.      How much caffeine was absorbed into the bloodstream from the cup of coffee?  How much caffeine is left after hours? After hours?  Is the function increasing, decreasing or neither on the interval ?         mg.  After hours, there are mg left. After hours, mg.  Decreasing.        A man deposited money into a savings account. His balance , in dollars, after years is given by the graph below.   A short description.      What was his initial deposit?  How much money was in his account after 10 years? After 20 years?  Is the function increasing, decreasing or neither in the interval ?         .  After 10 years, . After 20 years, .  Increasing.        Is the curve below the graph of a function ? Explain your answer.   A short description.      No, because it fails the vertical line test (in many places!).      The graph of a function is given below. Use it to find the following.   A short description.      Estimate .  Estimate all values of for which .  Estimate all values of for which .         .   and .   and .        For the function whose graph is depicted below, identify the intervals on the -axis for which the function is increasing and for which the function is decreasing.   A short description.      Increasing on the intervals . Or, write as and . Decreasing on the interval . Or, write as .      Practice Worksheet    Create a table of values and sketch the graph of the function for . Then use your calculator or any other graphing utility to check your graph.                               A short description.        The total cost of a meal in a restaurant, , in dollars, as a function of the price of the meal, , in dollars is given by: where the term corresponds to the tip. Create a table of values and sketch the graph of the function for . Then use your calculator or any other graphing utility to check your graph.    We can combine like terms and write . We then have the following.                     A short description.        Use the graph of the function below to estimate:   A short description.                         From the graph, , , and (the points in red).   A short description.         For the function in Problem 3, estimate all points for which .    This is looking for ordered pairs on the graph of the function where , which are: , , and (the points in green).      For the function in Problem 3, estimate all points for which .    This is looking for ordered pairs on the graph of the function where , which are (approximately): , , and (the points in blue).      The amount of caffeine remaining in the body, , in milligrams, hours after drinking a cup of coffee, is given by the graph below:   A short description.       How much caffeine was absorbed into the bloodstream from the cup of coffee?    This is the value at hours, so milligrams.      How much caffeine is left after 5 hours? After 10 hours?    After hours, there are mg of caffeine remaining. After hours, there are mg of caffeine remaining.      Is the function increasing, decreasing or neither on the interval ?    The function is decreasing on ; the outputs decrease as the inputs increase.       A man deposits money into a savings account. His balance , in dollars, after years is given by the graph below:   A short description.       What was his initial deposit?    His initial deposit is the value of , which is .      How much money was in his account after 10 years? After 20 years?    After years, there is in his account. After years, there is in his account.      Is the function increasing, decreasing or neither in the interval ?    The function is increasing for .       Is the curve below the graph of a function ? Explain!   A short description.      No, because it fails the vertical line test as shown below (and in other places as well).   A short description.        The graph of a function is given below.   A short description.       Estimate .    From the graph, (shown in red).   A short description.        Estimate all values of for which .    We look for ordered pairs on the graph where . These occur at and (shown in blue).      Estimate all values of for which .    Similarly, and (shown in green).       For the function whose graph is depicted below, identify intervals on the -axis on which the function is increasing and the intervals on the -axis on which the function is decreasing.   A short description.      The function is increasing on the intervals and , which in inequality notation reads and , respectively. The function is decreasing on the interval , which in inequality notation reads .     "
},
{
  "id": "sec_1_2-2",
  "level": "2",
  "url": "sec_1_2.html#sec_1_2-2",
  "type": "Objectives",
  "number": "1.2",
  "title": "",
  "body": "  After completing this section, you should be able to do the following.     First objective.    Second objective.    Third objective.    "
},
{
  "id": "jsx_1_2_function_graph",
  "level": "2",
  "url": "sec_1_2.html#jsx_1_2_function_graph",
  "type": "Figure",
  "number": "1.2.1",
  "title": "",
  "body": "  "
},
{
  "id": "sec_1_2-3-7",
  "level": "2",
  "url": "sec_1_2.html#sec_1_2-3-7",
  "type": "Definition",
  "number": "1.2.2",
  "title": "Graph of a Function.",
  "body": " Graph of a Function   The graph of a function is the collection of all points in the -plane for which . In other words, the graph is the collection of points for all inputs in the domain of .   "
},
{
  "id": "example-ch1-plot-points",
  "level": "2",
  "url": "sec_1_2.html#example-ch1-plot-points",
  "type": "Example",
  "number": "1.2.3",
  "title": "",
  "body": "  Sketch the graph of the function where by hand. Plot points on the graph for .    The below table gives each input , the corresponding output obtained by calculating , and then the associated point .              pair                                                                                                       Plotting these points on the -plane and joining neighboring points by straight line segments results in the following rough sketch of :   A short description.    This is a decent approximation of the graph of . A better graph of can be obtained from a graphing calculator, graphing software package, or other similar tool.   A short description.     "
},
{
  "id": "sec_1_2-3-11",
  "level": "2",
  "url": "sec_1_2.html#sec_1_2-3-11",
  "type": "Example",
  "number": "1.2.4",
  "title": "",
  "body": "  The amount of nicotine in a person's bloodstream, , in milligrams, is a function of the time , in hours, that has passed since the person smoked a single cigarette. The graph of the function is given in .     A short description.       How much nicotine is absorbed from a single cigarette?  How much nicotine is left in the person's bloodstream hours after smoking a single cigarette? What about after hours?        Note that (as the point belongs to the graph of ). Thus, at hours so immediately after a person finishes smoking a cigarette the amount of nicotine in their bloodstream is milligrams. This is the amount absorbed from the cigarette.   As time goes on, the amount of nicotine decreases. We see from the grid on the -plane that ; in other words, the point lies on the graph. This tells us that hours after smoking a single cigarette there is milligram of nicotine left in the bloodstream.  Similarly, we observe that and conclude that hours after smoking a single cigarette there is only milligram of nicotine left in the bloodstream.      "
},
{
  "id": "example-ch1-driving",
  "level": "2",
  "url": "sec_1_2.html#example-ch1-driving",
  "type": "Example",
  "number": "1.2.6",
  "title": "",
  "body": "  A woman is driving to visit with her family in a town miles from her home. Let be the time, in hours, since she left her home. Let be the distance, in miles, to her destination. Here, is a function of : . The graph of the function is given in .     A short description.       What is her distance from her destination hour after she leaves home?  Estimate the time at which her distance from her destination is miles.  When will she reach her destination?  How fast is she driving?        The point on the graph above is . In function notation, this can be written as . The practical meaning of this notation is that the distance to her destination after hour of driving is miles.  We look for the point on the graph for which the second coordinate is . The -coordinate of that point seems to be at . We conclude that the point lies on the graph, and that the associated function notation is . This means that after hours, the woman is 60 miles from her destination.  The woman reaches her destination when ; that is, when . From the graph, it is clear that . Hence the woman arrives at her destination after hours.  In the first hour of driving, her distance from her destination drops from miles to miles. After the next hour, it drops from miles to miles, and then from miles to miles during the hour after that. This pattern reveals that the woman is traveling at miles per hour.     "
},
{
  "id": "sec_1_2-4-6",
  "level": "2",
  "url": "sec_1_2.html#sec_1_2-4-6",
  "type": "Definition",
  "number": "1.2.8",
  "title": "Functions Increasing or Decreasing on Intervals.",
  "body": " Functions Increasing or Decreasing on Intervals     A function is increasing on an interval if the values increase as increases along .  A function is decreasing on an interval if the values decrease as increases along .     "
},
{
  "id": "sec_1_2-4-7",
  "level": "2",
  "url": "sec_1_2.html#sec_1_2-4-7",
  "type": "Example",
  "number": "1.2.9",
  "title": "",
  "body": "  Identify the interval(s) on which the function depicted below is increasing and the interval(s) on which it is decreasing.   A short description.      The graph of is climbing on the interval and on the interval . Hence, the function is increasing on these intervals. In interval notation, we would write that the function is increasing on .  The graph of is falling and thus is decreasing on the interval . In interval notation, we would write that the function is decreasing on .   Note that we do not use a bracket or around any of the endpoints , , or that appear in the interval notation here. This is because a function is neither increasing nor decreasing at these endpoints it either stops at them, or turns around.     "
},
{
  "id": "sec_1_2-5-4",
  "level": "2",
  "url": "sec_1_2.html#sec_1_2-5-4",
  "type": "Theorem",
  "number": "1.2.10",
  "title": "Vertical Line Test.",
  "body": "Vertical Line Test   Let a curve in the -plane be given. If there is a vertical line that intersects the curve more than once, then the curve does not represent a function. If every vertical line intersects the curve at most once, then the curve represents the graph of a function.   "
},
{
  "id": "sec_1_2-5-6",
  "level": "2",
  "url": "sec_1_2.html#sec_1_2-5-6",
  "type": "Example",
  "number": "1.2.11",
  "title": "",
  "body": "  Is the circle of radius centered at the origin in the -plane the graph of a function?    Consider the vertical line corresponding to ; that is, the vertical line passing through the point on the -axis.   A short description.     It takes only one vertical line intersecting the curve twice to conclude that the curve is not a function!   This vertical line intersects the circle at two points with two different values of , meaning there are two outputs corresponding to the input . This violates the definition of a function. Hence, the circle is NOT the graph of a function.   "
},
{
  "id": "sec_1_2-5-8",
  "level": "2",
  "url": "sec_1_2.html#sec_1_2-5-8",
  "type": "Example",
  "number": "1.2.12",
  "title": "",
  "body": "  Is the graph of a straight line segment between the ordered pairs and in the -plane the graph of a function?   A short description.      The line segment is the graph of a function whose domain is the interval . Using the Vertical Line Test, we can see that each individual vertical line that passes through a specific value of with on the horizontal axis crosses the line segment at exactly one point. Any vertical line that passes through a value of outside the interval does not intersect the segment.   "
},
{
  "id": "ex_1_2-1",
  "level": "2",
  "url": "sec_1_2.html#ex_1_2-1",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  Create a table of values and sketch the graph of the function for . Then use a graphing calculator or other graphing utility to check your graph.                       A short description.     "
},
{
  "id": "ex_1_2-2",
  "level": "2",
  "url": "sec_1_2.html#ex_1_2-2",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  Create a table of values and sketch the graph of the function for . Then use your calculator or any other graphing utility to check your graph.                     A short description.     "
},
{
  "id": "ex_1_2-3",
  "level": "2",
  "url": "sec_1_2.html#ex_1_2-3",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  Create a table of values and sketch the graph of the function for . Then use a graphing calculator or other graphing utility to check your graph.                     A short description.     "
},
{
  "id": "ex_1_2-4",
  "level": "2",
  "url": "sec_1_2.html#ex_1_2-4",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  The total cost of a meal in a restaurant, , in dollars, as a function of the price of the meal, , in dollars is given by: where the term corresponds to the tip. Create a table of values and sketch the graph of the function for . Then use your calculator or any other graphing utility to check your graph.                         A short description.     "
},
{
  "id": "exercise-1_2-graph1",
  "level": "2",
  "url": "sec_1_2.html#exercise-1_2-graph1",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  Use the graph of the function below to estimate each of the following.   A short description.                           "
},
{
  "id": "ex_1_2-6",
  "level": "2",
  "url": "sec_1_2.html#ex_1_2-6",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "  For the function whose graph is given in , estimate all values for which .     , , and .   "
},
{
  "id": "ex_1_2-7",
  "level": "2",
  "url": "sec_1_2.html#ex_1_2-7",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "  For the function whose graph is given in , estimate all values of for which .     , , and .   "
},
{
  "id": "exercise-1_2-graph2",
  "level": "2",
  "url": "sec_1_2.html#exercise-1_2-graph2",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "  Use the graph of the function shown below to estimate each of the following.          A short description.                    "
},
{
  "id": "ex_1_2-9",
  "level": "2",
  "url": "sec_1_2.html#ex_1_2-9",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "  For the function whose graph is given in , estimate all values of for which .     and    "
},
{
  "id": "ex_1_2-10",
  "level": "2",
  "url": "sec_1_2.html#ex_1_2-10",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "  For the function whose graph is given in , estimate all values of for which .     , , , and    "
},
{
  "id": "ex_1_2-11",
  "level": "2",
  "url": "sec_1_2.html#ex_1_2-11",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "  A driver of a 2019 Toyota Corolla fills his gas tank and embarks on a highway trip. The amount of gas left in the tank, , in gallons, is a function of the number of miles driven, . Use the graph of given below to answer the following questions.   A short description.      What is the fuel tank capacity of the 2019 Toyota Corolla?  How much fuel is left after 200 miles?  What happens after 528 miles?  What is the fuel efficiency of the 2019 Toyota Corolla on the highway?         gallons.   gallons.  The gas tank is empty.  Approximately miles per gallon.     "
},
{
  "id": "exercise-1_2-caff",
  "level": "2",
  "url": "sec_1_2.html#exercise-1_2-caff",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "  The amount of caffeine remaining in the body, , in milligrams, hours after drinking a cup of coffee, is given by the graph below.   A short description.      How much caffeine was absorbed into the bloodstream from the cup of coffee?  How much caffeine is left after hours? After hours?  Is the function increasing, decreasing or neither on the interval ?         mg.  After hours, there are mg left. After hours, mg.  Decreasing.     "
},
{
  "id": "ex_1_2-13",
  "level": "2",
  "url": "sec_1_2.html#ex_1_2-13",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": "  A man deposited money into a savings account. His balance , in dollars, after years is given by the graph below.   A short description.      What was his initial deposit?  How much money was in his account after 10 years? After 20 years?  Is the function increasing, decreasing or neither in the interval ?         .  After 10 years, . After 20 years, .  Increasing.     "
},
{
  "id": "ex_1_2-14",
  "level": "2",
  "url": "sec_1_2.html#ex_1_2-14",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": "  Is the curve below the graph of a function ? Explain your answer.   A short description.      No, because it fails the vertical line test (in many places!).   "
},
{
  "id": "ex_1_2-15",
  "level": "2",
  "url": "sec_1_2.html#ex_1_2-15",
  "type": "Exercise",
  "number": "15",
  "title": "",
  "body": "  The graph of a function is given below. Use it to find the following.   A short description.      Estimate .  Estimate all values of for which .  Estimate all values of for which .         .   and .   and .     "
},
{
  "id": "ex_1_2-16",
  "level": "2",
  "url": "sec_1_2.html#ex_1_2-16",
  "type": "Exercise",
  "number": "16",
  "title": "",
  "body": "  For the function whose graph is depicted below, identify the intervals on the -axis for which the function is increasing and for which the function is decreasing.   A short description.      Increasing on the intervals . Or, write as and . Decreasing on the interval . Or, write as .   "
},
{
  "id": "ws_1_2-2",
  "level": "2",
  "url": "sec_1_2.html#ws_1_2-2",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Create a table of values and sketch the graph of the function for . Then use your calculator or any other graphing utility to check your graph.                               A short description.     "
},
{
  "id": "ws_1_2-3",
  "level": "2",
  "url": "sec_1_2.html#ws_1_2-3",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  The total cost of a meal in a restaurant, , in dollars, as a function of the price of the meal, , in dollars is given by: where the term corresponds to the tip. Create a table of values and sketch the graph of the function for . Then use your calculator or any other graphing utility to check your graph.    We can combine like terms and write . We then have the following.                     A short description.     "
},
{
  "id": "ws_1_2-4",
  "level": "2",
  "url": "sec_1_2.html#ws_1_2-4",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  Use the graph of the function below to estimate:   A short description.                         From the graph, , , and (the points in red).   A short description.      "
},
{
  "id": "ws_1_2-5",
  "level": "2",
  "url": "sec_1_2.html#ws_1_2-5",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "  For the function in Problem 3, estimate all points for which .    This is looking for ordered pairs on the graph of the function where , which are: , , and (the points in green).   "
},
{
  "id": "ws_1_2-6",
  "level": "2",
  "url": "sec_1_2.html#ws_1_2-6",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": "  For the function in Problem 3, estimate all points for which .    This is looking for ordered pairs on the graph of the function where , which are (approximately): , , and (the points in blue).   "
},
{
  "id": "ws_1_2-7",
  "level": "2",
  "url": "sec_1_2.html#ws_1_2-7",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "",
  "body": "  The amount of caffeine remaining in the body, , in milligrams, hours after drinking a cup of coffee, is given by the graph below:   A short description.       How much caffeine was absorbed into the bloodstream from the cup of coffee?    This is the value at hours, so milligrams.      How much caffeine is left after 5 hours? After 10 hours?    After hours, there are mg of caffeine remaining. After hours, there are mg of caffeine remaining.      Is the function increasing, decreasing or neither on the interval ?    The function is decreasing on ; the outputs decrease as the inputs increase.    "
},
{
  "id": "ws_1_2-8",
  "level": "2",
  "url": "sec_1_2.html#ws_1_2-8",
  "type": "Worksheet Exercise",
  "number": "7",
  "title": "",
  "body": "  A man deposits money into a savings account. His balance , in dollars, after years is given by the graph below:   A short description.       What was his initial deposit?    His initial deposit is the value of , which is .      How much money was in his account after 10 years? After 20 years?    After years, there is in his account. After years, there is in his account.      Is the function increasing, decreasing or neither in the interval ?    The function is increasing for .    "
},
{
  "id": "ws_1_2-9",
  "level": "2",
  "url": "sec_1_2.html#ws_1_2-9",
  "type": "Worksheet Exercise",
  "number": "8",
  "title": "",
  "body": "  Is the curve below the graph of a function ? Explain!   A short description.      No, because it fails the vertical line test as shown below (and in other places as well).   A short description.     "
},
{
  "id": "ws_1_2-10",
  "level": "2",
  "url": "sec_1_2.html#ws_1_2-10",
  "type": "Worksheet Exercise",
  "number": "9",
  "title": "",
  "body": "  The graph of a function is given below.   A short description.       Estimate .    From the graph, (shown in red).   A short description.        Estimate all values of for which .    We look for ordered pairs on the graph where . These occur at and (shown in blue).      Estimate all values of for which .    Similarly, and (shown in green).    "
},
{
  "id": "ws_1_2-11",
  "level": "2",
  "url": "sec_1_2.html#ws_1_2-11",
  "type": "Worksheet Exercise",
  "number": "10",
  "title": "",
  "body": "  For the function whose graph is depicted below, identify intervals on the -axis on which the function is increasing and the intervals on the -axis on which the function is decreasing.   A short description.      The function is increasing on the intervals and , which in inequality notation reads and , respectively. The function is decreasing on the interval , which in inequality notation reads .   "
},
{
  "id": "sec_1_3",
  "level": "1",
  "url": "sec_1_3.html",
  "type": "Section",
  "number": "1.3",
  "title": "Functions Given Numerically",
  "body": " Functions Given Numerically    After completing this section, you should be able to do the following.     First objective.    Second objective.    Third objective.     In the previous section, we saw that if a function is given algebraically by a formula we can easily create a table of values for that function. That table of values can then be used to sketch the graph of the function, which in turn provides a visual representation of the function that can allow us to see behavior that may not be readily apparent from the formula alone.  When we study a real-life process, which inevitably involves a function of some kind, we rarely begin with a formula for a function that represents or models the process. Typically, we take measurements and collect and tabulate numerical data for the process we are studying. We then try to find a formula for a function that “fits” the numerical information we collected. That is, we start with a table of values and then try to find a formula for a function, not the other way around.  Finding a mathematical description of a real-life process is called mathematical modeling . A function that is given by its table of values is said to be given numerically .  If you ever kept overripe bananas in your house a bit too long, you probably experienced an invasion by fruit flies. And you probably noticed how quickly the population of fruit flies in your house was increasing. It is difficult to count the number of fruit flies in a house, but it can be done in a laboratory.  Suppose that a population of fruit flies in a laboratory experiment is initially 100 flies and it begins to grow. The size of the population, , measured in thousands of flies, is a function of the time since the experiment began; that is, . Given how quickly fruit flies multiply, it is reasonable to measure in days. The scientists conducting the experiment do not have a formula for that describes the growth of this fruit fly population and, in general, that growth (and therefore the function ) depends on many factors controlled by the lab the temperature, food provided, etc. Taking into consideration the length of the fruit fly reproductive cycle, the scientists observe the population and take measurements every 14 days. The data they collect is provided in the table below.       (in days)  0  14  28  42  56     (in thousands)  0.1  3.94  155.12  6106.99  240432.20     We see that is an increasing function and it increases very fast. After 56 days, the initial population of 100 flies grew to 240432.2 thousand flies; that is, 240,432,200 flies!  Can we find a formula for a function so that is a table of values for ? In other words, can we find a mathematical model for the population growth exhibited in the fruit fly experiment? It turns out that finding a formula for a function that corresponds to experimental data, even if only approximately, may be difficult. In fact, it can be impossible. A formula corresponding to  can be found, as the growth of the fruit fly population is exponential. You will see how this is done when we cover exponential functions in Chapter 5.  One can obtain a visual representation of a function from a numerical representation by sketching its approximate graph. The function associated with for between 0 and 42 is plotted below. The value at is so large that it squeezes the graph vertically too much and makes it hard to read, which is why we excluded it.   A short description.      On December 31, 2019 the price of ExxonMobil stock (NYSE: XOM) was changing during the day. The price of the stock each hour from 10 am to 4 pm is recorded in the table below.      time  10 am  11 am  12 pm  1 pm  2 pm  3 pm  4 pm    price (dollars)                            Let be the function that gives the price of ExxonMobil stock hours after 10 am on December 31, 2019. Rewrite with the first row giving values of and the second values of .  Sketch an approximate graph of .  Does it appear simple to find a formula or mathematical model for the function ?         We denote by the time, in hours, since 10 am on December 31, 2019. This means that 10 am is , 11 am is , 4 pm is , and so on. As the function gives the price of ExxonMobil stock at time , we can express numerically by:                                                             We use to sketch an approximation of the graph of .   A short description.    Note that the red ordered pairs are guaranteed to be on the graph of , while the line segments used to connect them are not.   The function is neither increasing nor decreasing as the graph sometimes climbs and sometimes falls as increases. Finding a formula for the function that models fluctuations of the price of a stock does not seem simple and we will not attempt to do so.        A woman goes to a gym to exercise. After minutes on a treadmill, her pulse (heart rate), , in beats per minute, is:       (minutes)  0  2  4  6  8  10     (bpm)  80  84  88  92  96  100        Express the above table as a function.    Does it appear simple to find a formula or mathematical model for this function?    Sketch an approximate graph of the function.          The woman's pulse, , is a function of time , which, based on the table, we will measure in minutes since her treadmill workout began. We could write if we chose to name the associated function . For the sake of simplicity, we often denote the dependent variable and the function by the same letter. In this case, we will instead write .    Can we find a formula for ? We haven't developed any specific techniques to do so yet, and hence to answer this question we can only attempt to observe patterns and make educated guesses based on common sense.  Looking at the data in , we can see that the woman's pulse increases as time increases, which we might expect based on our own experience with exercise. How does increase? The initial value of in function notation is . During the first two minutes from to , her pulse increases by bpm from to . During the next two minutes from to , her pulse increases again by bpm from to . Looking at each of the remaining two-minute intervals, we see that her pulse increases by bpm every two minutes: to , to , and to .  As we attempt to find a possible formula for , we observe that if her pulse is increasing by bpm every two minutes, we could perhaps think of this as bpm every minute instead. So her pulse starts at an initial value of bpm and then we add bpm for every one-minute change in . The formula that reflects that is: Let's check if the values of reflect the data in :     Yes! Our formula produces all the right values and matches the information given in .  Note that the formula gives a possible formula for . It is entirely possible that the woman's actual heart rate at time minutes does not match what the formula suggests it should be. We have no way of knowing, as the table does not tell us anything about the values of at any times other than minutes.    Here is an approximate graph of the function based on the numerical data:   A short description.           Functions and are given numerically below. Find possible formulas for and .                                                                                                                     We notice that the values of for each given in the table are negative and have the magnitude equal to . Hence, a possible function represented by is . We can easily check that works by substituting into and calculating the corresponding values. Those are indeed and , respectively.    At , . Then, as increases, decreases in a very regular fashion: for each increase of 1 in , decreases by 2. A formula that gives exactly such behavior is: We can verify that this function produces the values in :          For now, we can only try to observe patterns and guess formulas for numerically given functions. As we study various families of functions, we will develop more systematic methods for finding formulas of functions given numerically.     Use the numerically given function below to find each of the following.                                                Let be the function given in .    Find all values of for which  Find all values of for which                    Use the numerically given function below to find each of the following.                                                Let be the function given in .   Find all values of for which .  Find all values of for which .        , , and            Determine a formula for the function given numerically in the table below.                                 Determine a formula for the function given numerically in the table below and fill in the missing values.                        ?  ?                         A driver of a Volkswagen Passat fills up his gas tank and starts a highway trip to a faraway city. Let , in gallons, be the amount of gas left in the tank after driving miles. Fill in the missing numbers and find the gas mileage of the VW Passat; that is, the number of miles the SUV gets per gallon.                     ?  ?  ?                    The gas mileage of the driver's Volkswagen Passat is 24 miles per gallon.      Data regarding the world population between 2010 and 2018, in billions, is recorded in the table below.     Year             Population             The information in the table can be rewritten so that the population, , in billions, is a function of the number of years, , since 2010. This rewriting has been partially completed for you. Fill in the missing values.                   ?      ?                                     Sketch an approximate graph of the population function whose table you completed in .     A short description.        The amount of power a dragon must output to carry a knight depends on how fast it is flying, as shown in the table below.    speed (mph)         power (kW)           Is the amount of power required for the dragon to carry the knight increasing or decreasing as its speed increases? Explain how you arrive at your conclusion from the data in the table.  Is the amount of power required for the dragon to carry the knight changing faster and faster or slower and slower as its speed increases? Explain how you arrive at your conclusion from the data in the table.         The amount of power required for the dragon to carry the knight is increasing as the dragon's speed increases. This is evident from the table since the values associated with the power required increase as the speed increases.    The amount of power required for the dragon to carry the knight is increasing faster and faster as the dragon's speed increases. This is evident from the table since each time the speed increases by 10 miles per hour starting at 60 miles per hour, the power required to carry the knight increases by more and more.         Sketch the graph of the function given numerically in and use it to answer the following questions.   Is the amount of power required for the dragon to carry the knight increasing or decreasing as its speed increases? Explain how you arrive at your conclusion from the graph.  Is the amount of power required for the dragon to carry the knight changing faster and faster or slower and slower as its speed increases? Explain how you arrive at your conclusion from the graph.      A short description.       The amount of power required for the dragon to carry the knight is increasing as the dragon's speed increases. This is evident from the graph since it climbs over the interval .    The amount of power required for the dragon to carry the knight is increasing faster and faster as the dragon's speed increases. This is evident from the graph since each time the speed increases by 10 miles per hour starting at 60 miles per hour, the graph climbs more and more quickly.         Practice Worksheet    Use the table to find each of the following.                                   The value(s) of for which .    From the table, , , and lastly and both satisfy .       A function is given numerically below. Compute the following:                                            From the table, , , and .       Let be the function in the previous problem.     Find all inputs for which .    When (can think of this as , the second row in the table), then could be , , and .      Find all inputs for which .    When , then could only be .       Guess a formula for the function given numerically in the table below.                          Here, . Convince yourself that this formula works!      Guess a formula for the function given numerically in the table below. Fill in the missing values.                              Notice that the inputs go up by each time. And, the outputs go down by each time. Or, you can think of the outputs as being the inputs multiplied by . Therefore, . Thus and .      Here is the data for the world population https:\/\/www.worldometers.info\/world-population\/world-population-by-year\/ , accessed: 7\/8\/20 between 2010 and 2018, in billions:    Year  2010  2011  2012  2013  2014  2015  2016  2017  2018    Population  6.957  7.041  7.126  7.211  7.296  7.380  7.464  7.548  7.631    To study the population from the mathematical point of view, it is convenient to rewrite the data in terms of the independent variable which stands for the number of years since 2010 and write the population, , in billions, as a function of years since 2010. Based on the table above, fill in the missing values.                 6.957  7.041   7.211  7.296  7.380  7.464   7.631                     6.957  7.041  7.126  7.211  7.296  7.380  7.464  7.548  7.631        A driver of an SUV fills up his gas tank and starts a highway trip to a faraway city. Let , in gallons, be the amount of gas left in the tank after driving miles. Of course is a function of ; that is, . Here is partial data about the function:                              Find gas mileage of the SUV; that is, the number of miles the SUV gets per gallon. Fill in the missing numbers.    Except for the last column when , note that the miles go up by each time, and the gallons go down by each time. Using these rules, the completed table is given below.                              Therefore, the car can drive miles using gallons of gas. Thus, the gas mileage is      "
},
{
  "id": "sec_1_3-2",
  "level": "2",
  "url": "sec_1_3.html#sec_1_3-2",
  "type": "Objectives",
  "number": "1.3",
  "title": "",
  "body": "  After completing this section, you should be able to do the following.     First objective.    Second objective.    Third objective.    "
},
{
  "id": "table-ch1-fruit-flies",
  "level": "2",
  "url": "sec_1_3.html#table-ch1-fruit-flies",
  "type": "Table",
  "number": "1.3.1",
  "title": "",
  "body": "     (in days)  0  14  28  42  56     (in thousands)  0.1  3.94  155.12  6106.99  240432.20    "
},
{
  "id": "sec_1_3-13",
  "level": "2",
  "url": "sec_1_3.html#sec_1_3-13",
  "type": "Example",
  "number": "1.3.2",
  "title": "",
  "body": "  On December 31, 2019 the price of ExxonMobil stock (NYSE: XOM) was changing during the day. The price of the stock each hour from 10 am to 4 pm is recorded in the table below.      time  10 am  11 am  12 pm  1 pm  2 pm  3 pm  4 pm    price (dollars)                            Let be the function that gives the price of ExxonMobil stock hours after 10 am on December 31, 2019. Rewrite with the first row giving values of and the second values of .  Sketch an approximate graph of .  Does it appear simple to find a formula or mathematical model for the function ?         We denote by the time, in hours, since 10 am on December 31, 2019. This means that 10 am is , 11 am is , 4 pm is , and so on. As the function gives the price of ExxonMobil stock at time , we can express numerically by:                                                             We use to sketch an approximation of the graph of .   A short description.    Note that the red ordered pairs are guaranteed to be on the graph of , while the line segments used to connect them are not.   The function is neither increasing nor decreasing as the graph sometimes climbs and sometimes falls as increases. Finding a formula for the function that models fluctuations of the price of a stock does not seem simple and we will not attempt to do so.     "
},
{
  "id": "sec_1_3-14",
  "level": "2",
  "url": "sec_1_3.html#sec_1_3-14",
  "type": "Example",
  "number": "1.3.5",
  "title": "",
  "body": "  A woman goes to a gym to exercise. After minutes on a treadmill, her pulse (heart rate), , in beats per minute, is:       (minutes)  0  2  4  6  8  10     (bpm)  80  84  88  92  96  100        Express the above table as a function.    Does it appear simple to find a formula or mathematical model for this function?    Sketch an approximate graph of the function.          The woman's pulse, , is a function of time , which, based on the table, we will measure in minutes since her treadmill workout began. We could write if we chose to name the associated function . For the sake of simplicity, we often denote the dependent variable and the function by the same letter. In this case, we will instead write .    Can we find a formula for ? We haven't developed any specific techniques to do so yet, and hence to answer this question we can only attempt to observe patterns and make educated guesses based on common sense.  Looking at the data in , we can see that the woman's pulse increases as time increases, which we might expect based on our own experience with exercise. How does increase? The initial value of in function notation is . During the first two minutes from to , her pulse increases by bpm from to . During the next two minutes from to , her pulse increases again by bpm from to . Looking at each of the remaining two-minute intervals, we see that her pulse increases by bpm every two minutes: to , to , and to .  As we attempt to find a possible formula for , we observe that if her pulse is increasing by bpm every two minutes, we could perhaps think of this as bpm every minute instead. So her pulse starts at an initial value of bpm and then we add bpm for every one-minute change in . The formula that reflects that is: Let's check if the values of reflect the data in :     Yes! Our formula produces all the right values and matches the information given in .  Note that the formula gives a possible formula for . It is entirely possible that the woman's actual heart rate at time minutes does not match what the formula suggests it should be. We have no way of knowing, as the table does not tell us anything about the values of at any times other than minutes.    Here is an approximate graph of the function based on the numerical data:   A short description.        "
},
{
  "id": "sec_1_3-15",
  "level": "2",
  "url": "sec_1_3.html#sec_1_3-15",
  "type": "Example",
  "number": "1.3.7",
  "title": "",
  "body": "  Functions and are given numerically below. Find possible formulas for and .                                                                                                                     We notice that the values of for each given in the table are negative and have the magnitude equal to . Hence, a possible function represented by is . We can easily check that works by substituting into and calculating the corresponding values. Those are indeed and , respectively.    At , . Then, as increases, decreases in a very regular fashion: for each increase of 1 in , decreases by 2. A formula that gives exactly such behavior is: We can verify that this function produces the values in :         "
},
{
  "id": "exercise-1_3-table1",
  "level": "2",
  "url": "sec_1_3.html#exercise-1_3-table1",
  "type": "Exercise",
  "number": "1.3.1",
  "title": "",
  "body": "  Use the numerically given function below to find each of the following.                                             "
},
{
  "id": "ex_1_3-2",
  "level": "2",
  "url": "sec_1_3.html#ex_1_3-2",
  "type": "Exercise",
  "number": "1.3.2",
  "title": "",
  "body": "  Let be the function given in .    Find all values of for which  Find all values of for which                 "
},
{
  "id": "exercise-1_3-table2",
  "level": "2",
  "url": "sec_1_3.html#exercise-1_3-table2",
  "type": "Exercise",
  "number": "1.3.3",
  "title": "",
  "body": "  Use the numerically given function below to find each of the following.                                             "
},
{
  "id": "ex_1_3-4",
  "level": "2",
  "url": "sec_1_3.html#ex_1_3-4",
  "type": "Exercise",
  "number": "1.3.4",
  "title": "",
  "body": "  Let be the function given in .   Find all values of for which .  Find all values of for which .        , , and         "
},
{
  "id": "ex_1_3-5",
  "level": "2",
  "url": "sec_1_3.html#ex_1_3-5",
  "type": "Exercise",
  "number": "1.3.5",
  "title": "",
  "body": "  Determine a formula for the function given numerically in the table below.                              "
},
{
  "id": "ex_1_3-6",
  "level": "2",
  "url": "sec_1_3.html#ex_1_3-6",
  "type": "Exercise",
  "number": "1.3.6",
  "title": "",
  "body": "  Determine a formula for the function given numerically in the table below and fill in the missing values.                        ?  ?                      "
},
{
  "id": "ex_1_3-7",
  "level": "2",
  "url": "sec_1_3.html#ex_1_3-7",
  "type": "Exercise",
  "number": "1.3.7",
  "title": "",
  "body": "  A driver of a Volkswagen Passat fills up his gas tank and starts a highway trip to a faraway city. Let , in gallons, be the amount of gas left in the tank after driving miles. Fill in the missing numbers and find the gas mileage of the VW Passat; that is, the number of miles the SUV gets per gallon.                     ?  ?  ?                    The gas mileage of the driver's Volkswagen Passat is 24 miles per gallon.   "
},
{
  "id": "exercise-1_3-population",
  "level": "2",
  "url": "sec_1_3.html#exercise-1_3-population",
  "type": "Exercise",
  "number": "1.3.8",
  "title": "",
  "body": "  Data regarding the world population between 2010 and 2018, in billions, is recorded in the table below.     Year             Population             The information in the table can be rewritten so that the population, , in billions, is a function of the number of years, , since 2010. This rewriting has been partially completed for you. Fill in the missing values.                   ?      ?                                  "
},
{
  "id": "ex_1_3-9",
  "level": "2",
  "url": "sec_1_3.html#ex_1_3-9",
  "type": "Exercise",
  "number": "1.3.9",
  "title": "",
  "body": "  Sketch an approximate graph of the population function whose table you completed in .     A short description.     "
},
{
  "id": "exercise-1_3-dragon",
  "level": "2",
  "url": "sec_1_3.html#exercise-1_3-dragon",
  "type": "Exercise",
  "number": "1.3.10",
  "title": "",
  "body": "  The amount of power a dragon must output to carry a knight depends on how fast it is flying, as shown in the table below.    speed (mph)         power (kW)           Is the amount of power required for the dragon to carry the knight increasing or decreasing as its speed increases? Explain how you arrive at your conclusion from the data in the table.  Is the amount of power required for the dragon to carry the knight changing faster and faster or slower and slower as its speed increases? Explain how you arrive at your conclusion from the data in the table.         The amount of power required for the dragon to carry the knight is increasing as the dragon's speed increases. This is evident from the table since the values associated with the power required increase as the speed increases.    The amount of power required for the dragon to carry the knight is increasing faster and faster as the dragon's speed increases. This is evident from the table since each time the speed increases by 10 miles per hour starting at 60 miles per hour, the power required to carry the knight increases by more and more.      "
},
{
  "id": "ex_1_3-11",
  "level": "2",
  "url": "sec_1_3.html#ex_1_3-11",
  "type": "Exercise",
  "number": "1.3.11",
  "title": "",
  "body": "  Sketch the graph of the function given numerically in and use it to answer the following questions.   Is the amount of power required for the dragon to carry the knight increasing or decreasing as its speed increases? Explain how you arrive at your conclusion from the graph.  Is the amount of power required for the dragon to carry the knight changing faster and faster or slower and slower as its speed increases? Explain how you arrive at your conclusion from the graph.      A short description.       The amount of power required for the dragon to carry the knight is increasing as the dragon's speed increases. This is evident from the graph since it climbs over the interval .    The amount of power required for the dragon to carry the knight is increasing faster and faster as the dragon's speed increases. This is evident from the graph since each time the speed increases by 10 miles per hour starting at 60 miles per hour, the graph climbs more and more quickly.      "
},
{
  "id": "ws_1_3-2",
  "level": "2",
  "url": "sec_1_3.html#ws_1_3-2",
  "type": "Worksheet Exercise",
  "number": "1.3.1",
  "title": "",
  "body": "  Use the table to find each of the following.                                   The value(s) of for which .    From the table, , , and lastly and both satisfy .    "
},
{
  "id": "ws_1_3-3",
  "level": "2",
  "url": "sec_1_3.html#ws_1_3-3",
  "type": "Worksheet Exercise",
  "number": "1.3.2",
  "title": "",
  "body": "  A function is given numerically below. Compute the following:                                            From the table, , , and .    "
},
{
  "id": "ws_1_3-4",
  "level": "2",
  "url": "sec_1_3.html#ws_1_3-4",
  "type": "Worksheet Exercise",
  "number": "1.3.3",
  "title": "",
  "body": "  Let be the function in the previous problem.     Find all inputs for which .    When (can think of this as , the second row in the table), then could be , , and .      Find all inputs for which .    When , then could only be .    "
},
{
  "id": "ws_1_3-5",
  "level": "2",
  "url": "sec_1_3.html#ws_1_3-5",
  "type": "Worksheet Exercise",
  "number": "1.3.4",
  "title": "",
  "body": "  Guess a formula for the function given numerically in the table below.                          Here, . Convince yourself that this formula works!   "
},
{
  "id": "ws_1_3-6",
  "level": "2",
  "url": "sec_1_3.html#ws_1_3-6",
  "type": "Worksheet Exercise",
  "number": "1.3.5",
  "title": "",
  "body": "  Guess a formula for the function given numerically in the table below. Fill in the missing values.                              Notice that the inputs go up by each time. And, the outputs go down by each time. Or, you can think of the outputs as being the inputs multiplied by . Therefore, . Thus and .   "
},
{
  "id": "ws_1_3-7",
  "level": "2",
  "url": "sec_1_3.html#ws_1_3-7",
  "type": "Worksheet Exercise",
  "number": "1.3.6",
  "title": "",
  "body": "  Here is the data for the world population https:\/\/www.worldometers.info\/world-population\/world-population-by-year\/ , accessed: 7\/8\/20 between 2010 and 2018, in billions:    Year  2010  2011  2012  2013  2014  2015  2016  2017  2018    Population  6.957  7.041  7.126  7.211  7.296  7.380  7.464  7.548  7.631    To study the population from the mathematical point of view, it is convenient to rewrite the data in terms of the independent variable which stands for the number of years since 2010 and write the population, , in billions, as a function of years since 2010. Based on the table above, fill in the missing values.                 6.957  7.041   7.211  7.296  7.380  7.464   7.631                     6.957  7.041  7.126  7.211  7.296  7.380  7.464  7.548  7.631     "
},
{
  "id": "ws_1_3-8",
  "level": "2",
  "url": "sec_1_3.html#ws_1_3-8",
  "type": "Worksheet Exercise",
  "number": "1.3.7",
  "title": "",
  "body": "  A driver of an SUV fills up his gas tank and starts a highway trip to a faraway city. Let , in gallons, be the amount of gas left in the tank after driving miles. Of course is a function of ; that is, . Here is partial data about the function:                              Find gas mileage of the SUV; that is, the number of miles the SUV gets per gallon. Fill in the missing numbers.    Except for the last column when , note that the miles go up by each time, and the gallons go down by each time. Using these rules, the completed table is given below.                              Therefore, the car can drive miles using gallons of gas. Thus, the gas mileage is    "
},
{
  "id": "sec_1_4",
  "level": "1",
  "url": "sec_1_4.html",
  "type": "Section",
  "number": "1.4",
  "title": "Vertical and Horizontal Intercepts",
  "body": " Vertical and Horizontal Intercepts    After completing this section, you should be able to do the following.     First objective.    Second objective.    Third objective.     The points where the graph of a function crosses the horizontal axis or the vertical axis are of special interest. They are called the horizontal and the vertical intercepts. If the independent variable is named and the dependent variable is named , the horizontal and vertical intercepts are also called -intercepts and -intercepts, respectively.   A short description.    The plot above illustrates that every point in the -plane that lies on the -axis has the -coordinate , and every point that lies on -axis has the -coordinate . We will use this observation to find the vertical and horizontal intercepts (if they exist).  Vertical Intercept   Suppose the graph of the function crosses the -axis at ; that is, at the point . Then is called the -intercept of the function .    Since is on the graph of the function, . So the -intercept is simply the value of the function at .   Why can a function not have more than one vertical intercept? Hint: Consider the vertical line test.   If is in the domain of , we have exactly one -intercept. If is not in the domain, the graph of does not cross the -axis and there is no -intercept.  That is: To find the vertical intercept of , evaluate .   A short description.    Horizontal Intercepts   Suppose that the graph of the function crosses the -axis at ; that is, at the point . Then is called an -intercept of the function .    Since the point is on the graph of the function, . So the -intercepts are the real values of at which . A function may have many -intercepts. They are often called the zeros or roots of a graphed function .  That is: To find horizontal intercepts of , solve for .    A short description.      Consider the function where . Find the vertical intercept and the horizontal intercepts.    To find the -intercept, we evaluate . Therefore, crosses the -axis at ; that is, the vertical intercept is the point .   In describing the vertical intercept of a function, we might say it is at or at . Keep in mind that these represent the same concept.   To find -intercepts, we have to solve the equation . For our function, the equation we must solve is . We use the standard techniques for solving equations. There are two solutions, and . These are the two horizontal intercepts or zeros of the function. Since and , the associated ordered pairs are and .   In describing a horizontal intercept of a function, we might say it is at or at . Keep in mind that these represent the same concept.   The graph of the function clearly shows the intercepts and the corresponding points on the -plane:   A short description.        A full tank of water springs a leak. Water is leaking out at the rate of gallons per hour. Let be the amount of water in the tank, in gallons, hours after the leak started.The function is given by Find vertical and horizontal intercepts of the function and interpret them in practical terms. Also graph the function.    For the vertical intercept or the -intercept of the function , we evaluate , which results in . Since is the value of at , it is measured in gallons and it gives the initial amount of water in the tank. We conclude that the vertical intercept of 60 gallons is the initial amount of water in the tank. Note that 60 gallons is also the capacity of the tank as the tank was full when the leak began at time .  To find horizontal intercepts, we have to solve the equation for ; that is, The function has one horizontal intercept at . Thus, hours after the leak started, the amount of water left in the tank is . In practical terms, it will take hours until the tank is empty.  Here is the graph of the function . The intercepts are clearly visible on the graph and their meaning is clear as well.   A short description.      Given the graph of a function, with its formula unknown, we are still able to find the intercepts.    Use the graph of a function below to estimate its vertical and horizontal intercepts.   A short description.      The vertical intercept is where the graph of a function crosses the vertical axis, which is the -axis for the function shown. We can see that this is the ordered pair . Thus, the vertical intercept occurs at .  The graph crosses the -axis at each of . These are the -intercepts (the zeros) of , meaning for each of . The corresponding points are , , and .    Similarly, given a function that is described numerically (i.e., by a table of values), we can find the intercepts by looking for when or .    Every summer the depth of water in a reservoir is measured weekly over the 10-week period beginning with July 1. Let be the depth of water, in meters, and denote the time, in weeks, since July 1. Here, is a function of , which can be written as . The readings from 2019 are provided in the table below.       (weeks)                                      (meters)                                      What are the vertical and horizontal intercepts given by the table? What is their practical meaning? Verify your answer on a graph of .    The vertical intercept occurs when and hence has value given by . Per the table, . Hence, the vertical intercept, or -intercept, is . In practical terms, the vertical intercept tells us that the water depth on July 1, 2019 was 10 meters.  The horizontal intercepts are values of for which . The depth is at and . In practical terms, the horizontal intercepts tell us that at both 5 and 9 weeks after July 1, 2019, the reservoir was empty. Below is a graph that fits the data from . We can clearly see the intercepts.   A short description.         Find the horizontal and vertical intercepts or state that they don't exist for each function given below.                horizontal intercept:  ; vertical intercept:     horizontal intercepts:  , ; vertical intercept:     horizontal intercept:  ; vertical intercept:     horizontal intercept:  ; vertical intercept:     horizontal intercept:  ; vertical intercept:     horizontal intercepts: none; vertical intercept: none   horizontal intercept: none; vertical intercept:          Identify the horizontal and vertical intercepts for each function given numerically below.                                                                           horizontal intercepts:  , 2; vertical intercept: 2   horizontal intercepts: none; vertical intercept: 5   horizontal intercept: 8; vertical intercept: none        Estimate the horizontal and vertical intercepts for each function given graphically below.       A short description.         A short description.           horizontal intercepts: 0, 4, 8; vertical intercept: 0   horizontal intercepts: none; vertical intercept: 3        A ball is dropped from a cliff above a lake. The ball's height above the surface of the lake, , in feet, seconds after the ball is dropped, is given by Find the vertical intercept of the function and the horizontal intercept(s) for which . Give your answers to two decimal places and interpret the intercepts in practical terms.     vertical intercept: 300 this is the number of feet above the lake that the ball is dropped from; horizontal intercept:  this is the number of seconds that it takes after being dropped for the ball to hit the surface of the lake      The value of a car , in dollars, years after the car was purchased is given by Find the vertical and horizontal intercepts of the function and interpret them in practical terms.     vertical intercept: 21500 this is the price in dollars for which the car was purchased; horizontal intercept:  this is the number of years after purchase that it takes for the car's value to depreciate to       Practice Worksheet    Find the horizontal and vertical intercepts of the following or state that they don't exist.          Setting , then and so implying that is the horizontal intercept. The vertical intercept is when , so .           Setting , then and so . Thus and are the horizontal intercepts. The vertical intercept is when , so .           Setting , then and so is the horizontal intercept. When , then is the vertical intercept.           Setting , then and so . Thus implying that is the horizontal intercept. When , then is the vertical intercept.           Setting , then so . Thus implying that . The vertical intercept is .           Note that can never be , so there are no horizontal intercepts. And, cannot be so there are no vertical intercepts either.           Note that can never be , so there are no horizontal intercepts. But there is a vertical intercept when , and this is .       For each of the following, find the horizontal and vertical intercepts or state that there is not enough information to determine them.                           Vertical intercept is , horizontal intercepts are and .                            Vertical intercept is , and there are no horizontal intercepts ( is never ).                            There are no vertical intercepts ( is never ), and the horizontal intercept is at .       Estimate the horizontal and vertical intercepts given the graph of the function.   A short description.      The vertical intercept is at . The horizontal intercepts are at , , and .      Estimate the horizontal and vertical intercepts given the graph of the function.   A short description.      The vertical intercept is at . There are no horizontal intercepts.      A ball is dropped from a cliff above a lake. The ball's height above the surface of the lake, , in feet, seconds after the ball is dropped is given by Find the vertical intercept of the function and the horizontal intercepts for which . (Round off to two decimal places.) Interpret the intercepts in practical terms.    The vertical intercept is . This occurs when , so we can say that the ball was feet above ground when it was dropped. The horizontal intercept is when , that is when . Solving for we get This means that seconds after the ball was dropped, it hit the ground (because the height is ).      The value of a car , in dollars, years after the car was purchased is: Find vertical and horizontal intercepts of the function and interpret them in terms of dollars and years.    The vertical intercept is when , which is . This means that the car was worth at the time of purchase. The horizontal intercept is when . That is, . Solving this equation for yields Therefore, years after purchase the value of the car is .     "
},
{
  "id": "sec_1_4-2",
  "level": "2",
  "url": "sec_1_4.html#sec_1_4-2",
  "type": "Objectives",
  "number": "1.4",
  "title": "",
  "body": "  After completing this section, you should be able to do the following.     First objective.    Second objective.    Third objective.    "
},
{
  "id": "sec_1_4-6",
  "level": "2",
  "url": "sec_1_4.html#sec_1_4-6",
  "type": "Definition",
  "number": "1.4.1",
  "title": "Vertical Intercept.",
  "body": "Vertical Intercept   Suppose the graph of the function crosses the -axis at ; that is, at the point . Then is called the -intercept of the function .   "
},
{
  "id": "sec_1_4-12",
  "level": "2",
  "url": "sec_1_4.html#sec_1_4-12",
  "type": "Definition",
  "number": "1.4.2",
  "title": "Horizontal Intercepts.",
  "body": "Horizontal Intercepts   Suppose that the graph of the function crosses the -axis at ; that is, at the point . Then is called an -intercept of the function .   "
},
{
  "id": "sec_1_4-16",
  "level": "2",
  "url": "sec_1_4.html#sec_1_4-16",
  "type": "Example",
  "number": "1.4.3",
  "title": "",
  "body": "  Consider the function where . Find the vertical intercept and the horizontal intercepts.    To find the -intercept, we evaluate . Therefore, crosses the -axis at ; that is, the vertical intercept is the point .   In describing the vertical intercept of a function, we might say it is at or at . Keep in mind that these represent the same concept.   To find -intercepts, we have to solve the equation . For our function, the equation we must solve is . We use the standard techniques for solving equations. There are two solutions, and . These are the two horizontal intercepts or zeros of the function. Since and , the associated ordered pairs are and .   In describing a horizontal intercept of a function, we might say it is at or at . Keep in mind that these represent the same concept.   The graph of the function clearly shows the intercepts and the corresponding points on the -plane:   A short description.     "
},
{
  "id": "example-ch1-leak",
  "level": "2",
  "url": "sec_1_4.html#example-ch1-leak",
  "type": "Example",
  "number": "1.4.4",
  "title": "",
  "body": "  A full tank of water springs a leak. Water is leaking out at the rate of gallons per hour. Let be the amount of water in the tank, in gallons, hours after the leak started.The function is given by Find vertical and horizontal intercepts of the function and interpret them in practical terms. Also graph the function.    For the vertical intercept or the -intercept of the function , we evaluate , which results in . Since is the value of at , it is measured in gallons and it gives the initial amount of water in the tank. We conclude that the vertical intercept of 60 gallons is the initial amount of water in the tank. Note that 60 gallons is also the capacity of the tank as the tank was full when the leak began at time .  To find horizontal intercepts, we have to solve the equation for ; that is, The function has one horizontal intercept at . Thus, hours after the leak started, the amount of water left in the tank is . In practical terms, it will take hours until the tank is empty.  Here is the graph of the function . The intercepts are clearly visible on the graph and their meaning is clear as well.   A short description.     "
},
{
  "id": "sec_1_4-19",
  "level": "2",
  "url": "sec_1_4.html#sec_1_4-19",
  "type": "Example",
  "number": "1.4.5",
  "title": "",
  "body": "  Use the graph of a function below to estimate its vertical and horizontal intercepts.   A short description.      The vertical intercept is where the graph of a function crosses the vertical axis, which is the -axis for the function shown. We can see that this is the ordered pair . Thus, the vertical intercept occurs at .  The graph crosses the -axis at each of . These are the -intercepts (the zeros) of , meaning for each of . The corresponding points are , , and .   "
},
{
  "id": "sec_1_4-21",
  "level": "2",
  "url": "sec_1_4.html#sec_1_4-21",
  "type": "Example",
  "number": "1.4.6",
  "title": "",
  "body": "  Every summer the depth of water in a reservoir is measured weekly over the 10-week period beginning with July 1. Let be the depth of water, in meters, and denote the time, in weeks, since July 1. Here, is a function of , which can be written as . The readings from 2019 are provided in the table below.       (weeks)                                      (meters)                                      What are the vertical and horizontal intercepts given by the table? What is their practical meaning? Verify your answer on a graph of .    The vertical intercept occurs when and hence has value given by . Per the table, . Hence, the vertical intercept, or -intercept, is . In practical terms, the vertical intercept tells us that the water depth on July 1, 2019 was 10 meters.  The horizontal intercepts are values of for which . The depth is at and . In practical terms, the horizontal intercepts tell us that at both 5 and 9 weeks after July 1, 2019, the reservoir was empty. Below is a graph that fits the data from . We can clearly see the intercepts.   A short description.     "
},
{
  "id": "ex_1_4-1",
  "level": "2",
  "url": "sec_1_4.html#ex_1_4-1",
  "type": "Exercise",
  "number": "1.4.1",
  "title": "",
  "body": "  Find the horizontal and vertical intercepts or state that they don't exist for each function given below.                horizontal intercept:  ; vertical intercept:     horizontal intercepts:  , ; vertical intercept:     horizontal intercept:  ; vertical intercept:     horizontal intercept:  ; vertical intercept:     horizontal intercept:  ; vertical intercept:     horizontal intercepts: none; vertical intercept: none   horizontal intercept: none; vertical intercept:       "
},
{
  "id": "ex_1_4-2",
  "level": "2",
  "url": "sec_1_4.html#ex_1_4-2",
  "type": "Exercise",
  "number": "1.4.2",
  "title": "",
  "body": "  Identify the horizontal and vertical intercepts for each function given numerically below.                                                                           horizontal intercepts:  , 2; vertical intercept: 2   horizontal intercepts: none; vertical intercept: 5   horizontal intercept: 8; vertical intercept: none     "
},
{
  "id": "ex_1_4-3",
  "level": "2",
  "url": "sec_1_4.html#ex_1_4-3",
  "type": "Exercise",
  "number": "1.4.3",
  "title": "",
  "body": "  Estimate the horizontal and vertical intercepts for each function given graphically below.       A short description.         A short description.           horizontal intercepts: 0, 4, 8; vertical intercept: 0   horizontal intercepts: none; vertical intercept: 3     "
},
{
  "id": "ex_1_4-4",
  "level": "2",
  "url": "sec_1_4.html#ex_1_4-4",
  "type": "Exercise",
  "number": "1.4.4",
  "title": "",
  "body": "  A ball is dropped from a cliff above a lake. The ball's height above the surface of the lake, , in feet, seconds after the ball is dropped, is given by Find the vertical intercept of the function and the horizontal intercept(s) for which . Give your answers to two decimal places and interpret the intercepts in practical terms.     vertical intercept: 300 this is the number of feet above the lake that the ball is dropped from; horizontal intercept:  this is the number of seconds that it takes after being dropped for the ball to hit the surface of the lake   "
},
{
  "id": "ex_1_4-5",
  "level": "2",
  "url": "sec_1_4.html#ex_1_4-5",
  "type": "Exercise",
  "number": "1.4.5",
  "title": "",
  "body": "  The value of a car , in dollars, years after the car was purchased is given by Find the vertical and horizontal intercepts of the function and interpret them in practical terms.     vertical intercept: 21500 this is the price in dollars for which the car was purchased; horizontal intercept:  this is the number of years after purchase that it takes for the car's value to depreciate to    "
},
{
  "id": "ws_1_4-2",
  "level": "2",
  "url": "sec_1_4.html#ws_1_4-2",
  "type": "Worksheet Exercise",
  "number": "1.4.1",
  "title": "",
  "body": "  Find the horizontal and vertical intercepts of the following or state that they don't exist.          Setting , then and so implying that is the horizontal intercept. The vertical intercept is when , so .           Setting , then and so . Thus and are the horizontal intercepts. The vertical intercept is when , so .           Setting , then and so is the horizontal intercept. When , then is the vertical intercept.           Setting , then and so . Thus implying that is the horizontal intercept. When , then is the vertical intercept.           Setting , then so . Thus implying that . The vertical intercept is .           Note that can never be , so there are no horizontal intercepts. And, cannot be so there are no vertical intercepts either.           Note that can never be , so there are no horizontal intercepts. But there is a vertical intercept when , and this is .    "
},
{
  "id": "ws_1_4-3",
  "level": "2",
  "url": "sec_1_4.html#ws_1_4-3",
  "type": "Worksheet Exercise",
  "number": "1.4.2",
  "title": "",
  "body": "  For each of the following, find the horizontal and vertical intercepts or state that there is not enough information to determine them.                           Vertical intercept is , horizontal intercepts are and .                            Vertical intercept is , and there are no horizontal intercepts ( is never ).                            There are no vertical intercepts ( is never ), and the horizontal intercept is at .    "
},
{
  "id": "ws_1_4-4",
  "level": "2",
  "url": "sec_1_4.html#ws_1_4-4",
  "type": "Worksheet Exercise",
  "number": "1.4.3",
  "title": "",
  "body": "  Estimate the horizontal and vertical intercepts given the graph of the function.   A short description.      The vertical intercept is at . The horizontal intercepts are at , , and .   "
},
{
  "id": "ws_1_4-5",
  "level": "2",
  "url": "sec_1_4.html#ws_1_4-5",
  "type": "Worksheet Exercise",
  "number": "1.4.4",
  "title": "",
  "body": "  Estimate the horizontal and vertical intercepts given the graph of the function.   A short description.      The vertical intercept is at . There are no horizontal intercepts.   "
},
{
  "id": "ws_1_4-6",
  "level": "2",
  "url": "sec_1_4.html#ws_1_4-6",
  "type": "Worksheet Exercise",
  "number": "1.4.5",
  "title": "",
  "body": "  A ball is dropped from a cliff above a lake. The ball's height above the surface of the lake, , in feet, seconds after the ball is dropped is given by Find the vertical intercept of the function and the horizontal intercepts for which . (Round off to two decimal places.) Interpret the intercepts in practical terms.    The vertical intercept is . This occurs when , so we can say that the ball was feet above ground when it was dropped. The horizontal intercept is when , that is when . Solving for we get This means that seconds after the ball was dropped, it hit the ground (because the height is ).   "
},
{
  "id": "ws_1_4-7",
  "level": "2",
  "url": "sec_1_4.html#ws_1_4-7",
  "type": "Worksheet Exercise",
  "number": "1.4.6",
  "title": "",
  "body": "  The value of a car , in dollars, years after the car was purchased is: Find vertical and horizontal intercepts of the function and interpret them in terms of dollars and years.    The vertical intercept is when , which is . This means that the car was worth at the time of purchase. The horizontal intercept is when . That is, . Solving this equation for yields Therefore, years after purchase the value of the car is .   "
},
{
  "id": "sec_1_5",
  "level": "1",
  "url": "sec_1_5.html",
  "type": "Section",
  "number": "1.5",
  "title": "The Average Rate of Change",
  "body": " The Average Rate of Change    After completing this section, you should be able to do the following.     First objective.    Second objective.    Third objective.     The notion of a rate of change is central to mathematics and its applications. Roughly speaking, a rate of change tells us how fast and in what manner a given quantity is changing with respect to another changing quantity. We will consider three examples below.    Suppose that a population of a town grows by people each year. Here, the rate of change of the population with respect to time is constant and equal to people\/year.   Recall . A daily pediatric dose of Amoxicillin, , in milligrams, depends on the weight of a patient, , in kilograms. More precisely, . How fast does the dose increase as the weight increases? The formula for clearly shows that for each 1 kilogram increase in weight, the dose increases by 50 milligrams. In this case, the rate of change of with respect to weight is milligrams\/kilogram.    Suppose that the value of your car changes at the rate dollars\/year. The rate of change is negative, meaning that the value of the car decreases by dollars each year. In general, a quantity that changes at a negative rate is decreasing while one that changes at a positive rate is increasing.     In the three examples above, the rate of change of the dependent variable with respect to the independent variable is constant. In real-life processes, this is rarely the case.  Consider the following example of two students, Amir and Nick, who went to the library to study for a precalculus exam. After hours of uninterrupted study, Amir mastered pages of new material from the textbook while Nick mastered pages. The graphs of the two functions and are in .      A short description.     A short description.      According to the graphs, both students stayed in the library for 5 hours. We can see that during the 5-hour session, both students learned about 30 new pages, as and .  During the first hour, Amir mastered approximately pages of new material, while Nick mastered approximately pages. Comparatively speaking, Amir learned quickly during the first hour, while Nick learned more slowly.  During the last hour, Amir mastered approximately pages of new material, while Nick mastered approximately pages.  This means that Amir went from learning quickly at the beginning of the study session to learning more slowly as time went on. Nick, on the other hand, got off to a slow start but picked up the pace as time went on. Their learning patterns are clearly not identical.  Does it make sense to ask how quickly or at what rate in pages per hour each student learned during the 5-hour session? Not really. The question is ambiguous. When exactly in the study session should we focus on? The beginning? The end? For both students, the rate at which they were learning during the session changed, with Amir learning more and more slowly over time and Nick learning faster and faster.  What does make sense is to consider how quickly each student learned during the 5-hour session on average . Amir learned quickly at first and then more slowly later, but overall he mastered 30 pages of new material in 5 hours. He learned at an average rate of pages\/hour. Nick, on the other hand, learned slowly at first, then faster, but he also mastered 30 pages in 5 hours. So, he too learned at an average rate of pages\/hour.  Readers who proceed to Calculus will study instantaneous rate of change how quickly a quantity changes at a specific input. For now, the average rate of change is the best we can do.  Average Rate of Change   Let be a function of , . Let and be given. The average rate of change of between and is given by     We'll use to abbreviate Average Rate of Change.  Typically, the symbol (the Greek letter Delta) is used to mean change in. So, stands for a change in while stands for a change in . In the definition above, stands for the change in between and . This can be thought of as the distance between the numbers and , which is given by . The notation stands for the change in that takes place as changes from to . That change is given by . The graph below illustrates the changes in and .      A short description.      Let . Find the average rate of change of between and .    We use the definition of the average rate of change with , and : Therefore, the average rate of change of between and is .    This is not an applied example so and don't have real-life units. In general, the average rate of change is measured in Were units associated with and in the last example, we would write that the average rate of change of between and is .  Let's revisit about nicotine leaving the body after a cigarette is smoked.    The amount of nicotine in a person's bloodstream, , in milligrams, is a function of the time , in hours, that has passed since the person smoked a single cigarette. The graph of the function is shown below.   A short description.    Use the graph to find and interpret the average rate of change of between:   and ;   and .  Include units with your answers.       To find the average rate of change between and , we use the graph to find the values of the function at and at . At , we have milligrams. At , milligrams. Thus: Here the variables are associated with units: is measured in milligrams while is measured in hours. Hence, is measured in milligrams and is measured in hours. The average rate of change has units which can be written as .  Therefore, the average rate of change of between and is The rate is negative as the amount of nicotine decreased between and . For the interpretation, we would say that on the interval , nicotine leaves the body at the average rate of milligrams per hour.    We need values and , which are obtained from the graph: and . Hence,   On the interval , nicotine leaves the body at the average rate of milligrams per hour.         A population of a small village at time , measured in years since the year 2010, is given by . Here are the annual readings:      (years)                                      (people)                                         Find the change in the population between and . What are the units of ?    Find the average rate of change in the population between and . What are the units of this rate of change?          The change in between and , , tells us by how much the population changed from and : The population increased by people from to (from 2012 to 2016).    The average rate of change tells us how fast the population was changing between and and is measured in people\/year:          A ball is dropped from the rooftop of a building 150 feet tall. The height of the ball above the ground, , in feet, seconds after the ball is dropped is:    Find the average rate of change of between and .    When will the ball hit the ground?          We use the definition of the average rate of change:   This can also be thought of as the average velocity of the ball between and . The velocity is negative because the height is decreasing.    The ball hits the ground when it falls to a height of feet, so we solve the equation for :   Mathematically, we get two solutions: and . However, only one makes sense in the applied context for our problem. As is the number of seconds after the ball is dropped, a negative answer does not make sense the ball can't hit the ground before it was dropped! Hence, the ball hits the ground seconds after it is dropped.          Find the average rate of change of each function over the indicated interval. Give your answers to two decimal places.   between and .  between and .  between and .  between and .  between and .                            In , data about the world population, in billions, between the years 2010 and 2018, was given in the table shown below. Use the data to answer the following questions.    Year             Population              What was the average rate of change of the world population between 2010 and 2012? Between 2016 and 2018? Give your answers to four decimal places and include units with your answers.  Is there a one-year interval in the time period from 2010 to 2018 during which the average rate of change of the population was negative?        billion people per year; billion people per year  No.        A ball is dropped from a cliff above a lake. The ball's height above the surface of the lake, , in feet, seconds after the ball is dropped, is given by    What is the average rate of change in height between and ? Between and ? Give units with your answers.  Are your answers in part (a) positive or negative? Explain why.        feet per second; feet per second  negative; the height of the ball is decreasing as time progresses (as it was dropped)        In , the graph of a function (provided again below) was given.   A short description.    Recall that this graph that models the amount of caffeine, in milligrams, remaining in the body hours after drinking a cup of coffee. Use the graph to do the following.   Estimate the average rate of change of between and . Give units with your answer.  Estimate the average rate of change of between and . Give units with your answer.  Compare the magnitudes of your answers in (a) and (b). Can you explain the difference by what you see on the graph?        mg\/hr   mg\/hr   The average rate of change from to hours is larger than the average rate of change from to hours. It can be seen that the rate at which the amount of caffeine in the bloodstream is changing gets smaller and smaller as time progresses.         The graph of a function is shown below.   A short description.    Without performing any calculations, answer the following questions.   Is the average rate of change of between and positive or negative? Explain your answer.  Is the average rate of change of between and positive or negative? Explain your answer.       positive since the graph is increasing on this interval  negative since the graph is decreasing on this interval        A person's weight, , in pounds, depends on the number of minutes of daily exercise. Hence, is a function of . Below is a numerical representation of :    (minutes)           (pounds)            Find the average rate of change of between and . Give units with your answer.  Find the average rate of change of between and . Give units with your answer.  Based on your answers and the data in the table, what can you say about the rate of weight loss with increasing amount of exercise?        pounds\/minute   pounds\/minute  The rate of weight loss slows as the daily amount of exercise increases.        Worldwide sales of passenger cars fluctuated between 2012 and 2019, as can be seen in the table below.     Year              Cars Sold (millions)               Calculate the average rate of change in sales of passenger cars between the years 2010 and 2017. Give units with your answer.  Calculate the average rate of change in sales of passenger cars between the years 2017 and 2019. Give units with your answer.  In what one-year intervals was the average rate of change negative?       approximately 2.124 million cars sold per year   million cars sold per year  from 2017 to 2018 and from 2018 to 2019        Practice Worksheet    Find the average rate of change of from to .    First, compute and . Then, the average rate of change is       Find the average rate of change of between and .    First, compute and . Then, the average rate of change is       The table below gives the net sales of The Gap, Inc., which operates nearly clothing stores.    Year  2005  2006  2007  2008  2009  2010    Sales (millions of dollars)  16019  15923  15763  14526  14197  14660       Find the average rate of change in net sales between and . Give units and interpret your answer.    The average rate of change from 2005 to 2008 is This means that on average, The Gap's net sales decreased by approximately million dollars per year from 2005 to 2008.      From 2005 to 2010, were there any one-year intervals during which the average rate of change was positive? If so, when?    Yes. From 2009 to 2010 is the only two consecutive years for which the sales increased. Therefore, this is the only one-year interval for which the ARC was positive.       The graph of a function is given below.   A short description.       What is the average rate of change from to ?    The average rate of change from to is       What is the average rate of change from to ?    The average rate of change from to is       What is the average rate of change from to ?    The average rate of change from to is       "
},
{
  "id": "sec_1_5-2",
  "level": "2",
  "url": "sec_1_5.html#sec_1_5-2",
  "type": "Objectives",
  "number": "1.5",
  "title": "",
  "body": "  After completing this section, you should be able to do the following.     First objective.    Second objective.    Third objective.    "
},
{
  "id": "fig-ch1-studying",
  "level": "2",
  "url": "sec_1_5.html#fig-ch1-studying",
  "type": "Figure",
  "number": "1.5.1",
  "title": "",
  "body": "    A short description.     A short description.     "
},
{
  "id": "sec_1_5-15",
  "level": "2",
  "url": "sec_1_5.html#sec_1_5-15",
  "type": "Definition",
  "number": "1.5.2",
  "title": "Average Rate of Change.",
  "body": "Average Rate of Change   Let be a function of , . Let and be given. The average rate of change of between and is given by    "
},
{
  "id": "fig_1_5_arc_graph",
  "level": "2",
  "url": "sec_1_5.html#fig_1_5_arc_graph",
  "type": "Figure",
  "number": "1.5.3",
  "title": "",
  "body": "  "
},
{
  "id": "sec_1_5-20",
  "level": "2",
  "url": "sec_1_5.html#sec_1_5-20",
  "type": "Example",
  "number": "1.5.4",
  "title": "",
  "body": "  Let . Find the average rate of change of between and .    We use the definition of the average rate of change with , and : Therefore, the average rate of change of between and is .   "
},
{
  "id": "sec_1_5-23",
  "level": "2",
  "url": "sec_1_5.html#sec_1_5-23",
  "type": "Example",
  "number": "1.5.5",
  "title": "",
  "body": "  The amount of nicotine in a person's bloodstream, , in milligrams, is a function of the time , in hours, that has passed since the person smoked a single cigarette. The graph of the function is shown below.   A short description.    Use the graph to find and interpret the average rate of change of between:   and ;   and .  Include units with your answers.       To find the average rate of change between and , we use the graph to find the values of the function at and at . At , we have milligrams. At , milligrams. Thus: Here the variables are associated with units: is measured in milligrams while is measured in hours. Hence, is measured in milligrams and is measured in hours. The average rate of change has units which can be written as .  Therefore, the average rate of change of between and is The rate is negative as the amount of nicotine decreased between and . For the interpretation, we would say that on the interval , nicotine leaves the body at the average rate of milligrams per hour.    We need values and , which are obtained from the graph: and . Hence,   On the interval , nicotine leaves the body at the average rate of milligrams per hour.      "
},
{
  "id": "sec_1_5-24",
  "level": "2",
  "url": "sec_1_5.html#sec_1_5-24",
  "type": "Example",
  "number": "1.5.6",
  "title": "",
  "body": "  A population of a small village at time , measured in years since the year 2010, is given by . Here are the annual readings:      (years)                                      (people)                                         Find the change in the population between and . What are the units of ?    Find the average rate of change in the population between and . What are the units of this rate of change?          The change in between and , , tells us by how much the population changed from and : The population increased by people from to (from 2012 to 2016).    The average rate of change tells us how fast the population was changing between and and is measured in people\/year:       "
},
{
  "id": "sec_1_5-25",
  "level": "2",
  "url": "sec_1_5.html#sec_1_5-25",
  "type": "Example",
  "number": "1.5.8",
  "title": "",
  "body": "  A ball is dropped from the rooftop of a building 150 feet tall. The height of the ball above the ground, , in feet, seconds after the ball is dropped is:    Find the average rate of change of between and .    When will the ball hit the ground?          We use the definition of the average rate of change:   This can also be thought of as the average velocity of the ball between and . The velocity is negative because the height is decreasing.    The ball hits the ground when it falls to a height of feet, so we solve the equation for :   Mathematically, we get two solutions: and . However, only one makes sense in the applied context for our problem. As is the number of seconds after the ball is dropped, a negative answer does not make sense the ball can't hit the ground before it was dropped! Hence, the ball hits the ground seconds after it is dropped.      "
},
{
  "id": "ex_1_5-1",
  "level": "2",
  "url": "sec_1_5.html#ex_1_5-1",
  "type": "Exercise",
  "number": "1.5.1",
  "title": "",
  "body": "  Find the average rate of change of each function over the indicated interval. Give your answers to two decimal places.   between and .  between and .  between and .  between and .  between and .                         "
},
{
  "id": "ex_1_5-2",
  "level": "2",
  "url": "sec_1_5.html#ex_1_5-2",
  "type": "Exercise",
  "number": "1.5.2",
  "title": "",
  "body": "  In , data about the world population, in billions, between the years 2010 and 2018, was given in the table shown below. Use the data to answer the following questions.    Year             Population              What was the average rate of change of the world population between 2010 and 2012? Between 2016 and 2018? Give your answers to four decimal places and include units with your answers.  Is there a one-year interval in the time period from 2010 to 2018 during which the average rate of change of the population was negative?        billion people per year; billion people per year  No.     "
},
{
  "id": "ex_1_5-3",
  "level": "2",
  "url": "sec_1_5.html#ex_1_5-3",
  "type": "Exercise",
  "number": "1.5.3",
  "title": "",
  "body": "  A ball is dropped from a cliff above a lake. The ball's height above the surface of the lake, , in feet, seconds after the ball is dropped, is given by    What is the average rate of change in height between and ? Between and ? Give units with your answers.  Are your answers in part (a) positive or negative? Explain why.        feet per second; feet per second  negative; the height of the ball is decreasing as time progresses (as it was dropped)     "
},
{
  "id": "ex_1_5-4",
  "level": "2",
  "url": "sec_1_5.html#ex_1_5-4",
  "type": "Exercise",
  "number": "1.5.4",
  "title": "",
  "body": "  In , the graph of a function (provided again below) was given.   A short description.    Recall that this graph that models the amount of caffeine, in milligrams, remaining in the body hours after drinking a cup of coffee. Use the graph to do the following.   Estimate the average rate of change of between and . Give units with your answer.  Estimate the average rate of change of between and . Give units with your answer.  Compare the magnitudes of your answers in (a) and (b). Can you explain the difference by what you see on the graph?        mg\/hr   mg\/hr   The average rate of change from to hours is larger than the average rate of change from to hours. It can be seen that the rate at which the amount of caffeine in the bloodstream is changing gets smaller and smaller as time progresses.      "
},
{
  "id": "ex_1_5-5",
  "level": "2",
  "url": "sec_1_5.html#ex_1_5-5",
  "type": "Exercise",
  "number": "1.5.5",
  "title": "",
  "body": "  The graph of a function is shown below.   A short description.    Without performing any calculations, answer the following questions.   Is the average rate of change of between and positive or negative? Explain your answer.  Is the average rate of change of between and positive or negative? Explain your answer.       positive since the graph is increasing on this interval  negative since the graph is decreasing on this interval     "
},
{
  "id": "ex_1_5-6",
  "level": "2",
  "url": "sec_1_5.html#ex_1_5-6",
  "type": "Exercise",
  "number": "1.5.6",
  "title": "",
  "body": "  A person's weight, , in pounds, depends on the number of minutes of daily exercise. Hence, is a function of . Below is a numerical representation of :    (minutes)           (pounds)            Find the average rate of change of between and . Give units with your answer.  Find the average rate of change of between and . Give units with your answer.  Based on your answers and the data in the table, what can you say about the rate of weight loss with increasing amount of exercise?        pounds\/minute   pounds\/minute  The rate of weight loss slows as the daily amount of exercise increases.     "
},
{
  "id": "ex_1_5-7",
  "level": "2",
  "url": "sec_1_5.html#ex_1_5-7",
  "type": "Exercise",
  "number": "1.5.7",
  "title": "",
  "body": "  Worldwide sales of passenger cars fluctuated between 2012 and 2019, as can be seen in the table below.     Year              Cars Sold (millions)               Calculate the average rate of change in sales of passenger cars between the years 2010 and 2017. Give units with your answer.  Calculate the average rate of change in sales of passenger cars between the years 2017 and 2019. Give units with your answer.  In what one-year intervals was the average rate of change negative?       approximately 2.124 million cars sold per year   million cars sold per year  from 2017 to 2018 and from 2018 to 2019     "
},
{
  "id": "ws_1_5-2",
  "level": "2",
  "url": "sec_1_5.html#ws_1_5-2",
  "type": "Worksheet Exercise",
  "number": "1.5.1",
  "title": "",
  "body": "  Find the average rate of change of from to .    First, compute and . Then, the average rate of change is    "
},
{
  "id": "ws_1_5-3",
  "level": "2",
  "url": "sec_1_5.html#ws_1_5-3",
  "type": "Worksheet Exercise",
  "number": "1.5.2",
  "title": "",
  "body": "  Find the average rate of change of between and .    First, compute and . Then, the average rate of change is    "
},
{
  "id": "ws_1_5-4",
  "level": "2",
  "url": "sec_1_5.html#ws_1_5-4",
  "type": "Worksheet Exercise",
  "number": "1.5.3",
  "title": "",
  "body": "  The table below gives the net sales of The Gap, Inc., which operates nearly clothing stores.    Year  2005  2006  2007  2008  2009  2010    Sales (millions of dollars)  16019  15923  15763  14526  14197  14660       Find the average rate of change in net sales between and . Give units and interpret your answer.    The average rate of change from 2005 to 2008 is This means that on average, The Gap's net sales decreased by approximately million dollars per year from 2005 to 2008.      From 2005 to 2010, were there any one-year intervals during which the average rate of change was positive? If so, when?    Yes. From 2009 to 2010 is the only two consecutive years for which the sales increased. Therefore, this is the only one-year interval for which the ARC was positive.    "
},
{
  "id": "ws_1_5-5",
  "level": "2",
  "url": "sec_1_5.html#ws_1_5-5",
  "type": "Worksheet Exercise",
  "number": "1.5.4",
  "title": "",
  "body": "  The graph of a function is given below.   A short description.       What is the average rate of change from to ?    The average rate of change from to is       What is the average rate of change from to ?    The average rate of change from to is       What is the average rate of change from to ?    The average rate of change from to is     "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
