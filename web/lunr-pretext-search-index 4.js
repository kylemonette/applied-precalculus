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
  "id": "ww-1.1.1",
  "level": "2",
  "url": "sec_1_1.html#ww-1.1.1",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "                                              "
},
{
  "id": "ww-1.1.2",
  "level": "2",
  "url": "sec_1_1.html#ww-1.1.2",
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
},
{
  "id": "sec_2_1",
  "level": "1",
  "url": "sec_2_1.html",
  "type": "Section",
  "number": "2.1",
  "title": "Properties of Linear Functions",
  "body": " Properties of Linear Functions    After completing this section, you should be able to do the following.     First objective.    Second objective.    Third objective.       Linear Function   A function is called a linear function if it can be written in the form where and are constants. The constant is called the slope of the function . The constant is the initial value of ; it is also the vertical intercept of the function as .    A linear function written in the form or is said to be in slope-intercept form .   Another form of linear functions will be presented in the next section.     Practical Interpretation of the Slope and Vertical Intercept  Applied examples of linear functions will help us understand the practical meaning of the slope and the initial value . In such examples, the input and output variables will often be denoted by letters that correspond to their practical meaning rather than by and .    Maya is saving money to purchase a car. She initially has in savings and for each hour she works at her summer job she is able to put an additional into savings. Find a formula for the function that gives the total amount of money, , that Maya has in savings after working hours.    We begin with a table of values reflecting the total amount of money Maya will have in savings after working a certain number of hours.      If Maya works  Maya's savings will be    0 hours     1 hour     2 hours     3 hours          Recognizing the pattern unfolding, a formula for the amount of money that Maya has in savings as a function of the number of hours that she works is .    The function found in the solution to is a linear function with slope and vertical intercept . Mathematically, the domain of the function consists of all inputs , but in the applied context of the function, it is not possible for Maya to work a negative number of hours. For this reason, we must restrict the domain to .  Observe that, as in most applied examples, the input and output variables have units: is measured in hours worked while is measured in dollars. Likewise, both constants and have units and a practical meaning:      dollars is the initial value of at ; that is, the amount of money that Maya has in savings initially.    The slope indicates that Maya saves per each hour worked. Hence, the slope is measured in dollars per hour and gives the rate at which Maya's savings grow as the number of hours she works increases.     We can additionally observe that the average rate of change between any two distinct inputs for the function is always the same. The below calculations illustrate this.   Recall that average rate of change of a function between and is given by .      Maya's savings grow at a constant rate with respect to the hours that she works, and that constant rate of 5 dollars\/hour is the same as the slope of the linear function In general, for linear functions and only for linear functions the rate of change of the dependent variable with respect to the independent variable is constant and equal to the slope.   Slope as Rate of Change   For every linear function , the rate of change of with respect to is constant and equal to , with units Further, represents the initial value of the function, , and is measured in units of .    The constancy of the rate of change of a linear function can be proven using algebraic properties of linear functions. Take two distinct inputs , and the corresponding outputs , . The average rate of change of between and is given by:       The number of people residing in the town of Linesville years after 2010 is given by the linear function Identify the slope and the initial value of the function. Include units and explain their practical meaning.    From the formula for , we see that the slope of the function is and the initial value is .  The slope is measured in people\/year. In practical terms, the slope tells us that the population of Linesville increases at a constant rate of people per year.  The initial value is measured in number of people. It represents the initial number of residents in the town of Linesville, i.e., the number of residents at . As time corresponds to the year 2010, this means that the population of Linesville was 4500 people in 2010.      A container holding 50 gallons of water has sprung a leak. Water is leaking out at a rate of gallons\/hour. Let be the amount of water in the container, in gallons, hours after the leak began. Find a formula for the function .    Water is leaking out at a constant rate so is a linear function. Hence .  The amount of water in the container is decreasing at a rate 5 gallons\/hour. This means that the rate of change or slope of is gallons\/hour. That is, .  The initial amount of water is gallons, so . The formula for is:       Graphs of Linear Functions  We will next explore the graphs of linear functions.    In , Maya's savings , in dollars, as a function of the number of hours, , was given by Use to create a graph of the function .     contains the points , , , and . By plotting these points, we obtain the following graph. It is clear that the points lie along a straight line.   A short description.       Graph of a Linear Function   The graph of a linear function is a straight line with slope and vertical intercept . The equation of the line in the slope-intercept form is .    If the slope , the function is increasing and its graph is climbing as increases.    If the slope , the function is decreasing and its graph is falling as increases.    If the slope , the function is the constant function , and its graph is the horizontal line .       In the following figure, we can see how the slope and vertical intercept change the graph of the function.        Consider the function from , which gives the amount of water in a container, , in gallons, hours after the container sprung a leak: Create a graph of the function . What restriction should be placed on the domain of in the applied context of this exercise?    The slope is negative, and thus the graph is decreasing: for each 1 hour increase in , decreases by . The vertical intercept is gallons. Using this information, we construct the following graph.   A short description.    The practical significance of vertical and horizontal intercepts is apparent from the graph. The vertical intercept, , gives the initial amount of water in the container. The horizontal intercept, , is the number of hours that must pass for the tank to empty completely. Based upon this, the domain of should be restricted to in order for the formula to make sense in the applied context of this exercise.      The Slope Formula  We are often given multiple points on the graph of a linear function but not provided the formula for the function nor explicitly told its slope. In this case, we have enough information to determine both the slope and the slope-intercept form of the function.  Given two distinct points and on the graph of a linear function , the average rate of change of between and is given by Since the average rate of change between any two points on a linear function is its slope (see ), the above is the value of .   Slope Formula   The slope of a linear function whose graph passes through two distinct points and is:     Graphically, the slope formula is often thought of as rise over run. The rise is what we denote by or ; it is the change in -values from the ordered pair to the ordered pair . The run is what we denote by or ; it is the change in the corresponding -values. This is illustrated below.   A short description.      Find the slope of the line passing through each set of points.     and      and      and .        If and then the slope is     If and then the slope is    Because the slope is , the line through the points is horizontal . This will be explained in further detail later on in this section.     If and then the slope is   Here, find a common denominator to simplify and .            Find a linear function such that and .    The two associated points on the graph of the function are Using the slope formula, we find that So, . The value of is not immediately apparent as we were not given the value of the function at . However, we can solve for it by using either one of the function values provided. For instance, we can use the fact that to set up an equation for . Substituting into results in Adding to both sides allows us to conclude that . Therefore, .      Identify the slope and vertical intercept of each line. Then write the equation of the line in slope-intercept form.    A short description.     A short description.         The first line intersects the -axis at the point , so the vertical intercept is . To calculate the slope, find two points on the graph and use the slope formula. We'll use and . Then The equation of the line is . The corresponding linear function is .    For the second line, note that the variable is being used instead of . We must again find two points on the line to substitute into the slope formula. We'll use and to find that Since the vertical intercept is , the equation of the line is . The corresponding linear function is .        Constant Functions, Horizontal and Vertical Lines  In , we encountered a linear function with slope 0 but did not go into great detail about what this means. To further explore the concept, consider the linear function The formula for this function can be rewritten as . The slope of this function is 0 and the -intercept is 3. We can see that for every , the value of the function is the same; that is, for all . We say that the function is constant because it is constantly equal to 3. Using the rate of change interpretation of the slope of a linear function, it is unsurprising that the function is constant — the rate of change or slope of the function being implies that the function doesn't change.  The graph of the function consists of all points on the plane for which , resulting in a horizontal line through the -value 3 as depicted below.   A short description.     Constant Functions and Horizontal Lines   The linear function with slope and vertical intercept is a constant function with equation given by and its graph is the horizontal line through the -value .    Having established that horizontal lines in the plane are graphs of constant functions, it is natural to wonder if vertical lines in the plane are also associated with a special type of linear function.  Vertical lines lines parallel to the -axis are not graphs of functions. A vertical line consists of all points for which the -coordinate is constant. Take for example the line which is graphed below.   A short description.     A key takeaway here is that vertical lines are not functions, but still have equations , such as . Equations are not the same thing as functions.   This line is not the graph of any function as for the single input there is more than one output infinitely many outputs, in fact. You can reach the same conclusion by using the Vertical Line Test. There exists a vertical line (the line itself) that crosses the graph of more than once (everywhere, actually). Therefore the graph of is not a function.  We conclude that vertical lines are not graphs of functions. Furthermore, slopes of vertical lines are undefined. Why? Take two points on the line , say and . The slope formula gives: which is undefined due to division by .   Vertical Lines   The vertical line with horizontal intercept has equation given by and its slope is undefined.     This is to say: all linear functions are lines, but not all lines are linear functions.   In summary, the graph of every linear function is a line in the -plane while every non-vertical line has an equation of the form and thus is the graph of a linear function. However, not every line in the plane is the graph of a linear function, since vertical lines are not functions. Sometimes people talk about linear functions and lines in the plane interchangeably. Despite the duality between lines and linear functions, it is important to remember that a linear function is a special dependence between two numerical variables that can be visually represented by a line. The converse is not necessarily true.     Slope-Intercept Form   For each of the following, rewrite the linear function in slope-intercept form. Then identify the slope and vertical intercept.           ; slope: 3; vertical intercept:             ; slope: ; vertical intercept:             ; slope: ; vertical intercept:             ; slope: ; vertical intercept:       Computing the Slope   For each of the following, find the slope of the line passing through each pair of points.      and             and             and             and             and             and            Finding the Slope   For each of the following, find the slope of the linear function corresponding to the information provided.      and             and             and             and             Identify the slope and vertical intercept of each line. Then write an equation of the line.       A short description.        A short description.        A short description.     A short description.          slope: ; vertical intercept: ; equation:   slope: ; vertical intercept: ; equation:   slope: ; vertical intercept: ; equation:   slope: ; vertical intercept: ; equation:         Five linear functions are given below. Drag each function on the left to the corresponding line number on the right.   A short description.          Line 1       Line 2       Line 3       Line 4       Line 5     Line 1 is ; Line 2 is ; Line 3 is ; Line 4 is ; Line 5 is .      During the 2019-2020 academic year, a senior lecturer at URI earned a base salary of for a standard teaching load. For each credit taught in excess of the standard load, were added to his salary. Write a linear equation expressing the total amount that the senior lecturer earned for teaching credits in excess of the standard workload during the 2019-2020 academic year.           The elevation in feet, , of a hiker minutes after beginning her hike is given by .   Write a complete sentence explaining the practical meaning of the vertical intercept of this linear function. Include units in your answer.  Write a complete sentence explaining the practical meaning of the slope of this linear function. Include units in your answer.       The initial elevation of the hiker is 1350 feet.  The hiker's elevation is increasing at a rate of 35 feet per minute.        The distance in miles from the finish line, , of a bicyclist hours after beginning a race is given by .   Write a complete sentence explaining the practical meaning of the vertical intercept of this linear function. Include units in your answer.  Write a complete sentence explaining the practical meaning of the slope of this linear function. Include units in your answer.       The bicyclist's initial distance from the finish line is 50 miles.  The bicyclist's distance from the finish line is decreasing at a rate of 25 miles per hour.       "
},
{
  "id": "sec_2_1-2",
  "level": "2",
  "url": "sec_2_1.html#sec_2_1-2",
  "type": "Objectives",
  "number": "2.1",
  "title": "",
  "body": "  After completing this section, you should be able to do the following.     First objective.    Second objective.    Third objective.    "
},
{
  "id": "sec_2_1-3-1",
  "level": "2",
  "url": "sec_2_1.html#sec_2_1-3-1",
  "type": "Definition",
  "number": "2.1.1",
  "title": "Linear Function.",
  "body": " Linear Function   A function is called a linear function if it can be written in the form where and are constants. The constant is called the slope of the function . The constant is the initial value of ; it is also the vertical intercept of the function as .   "
},
{
  "id": "example-ch2-maya-car",
  "level": "2",
  "url": "sec_2_1.html#example-ch2-maya-car",
  "type": "Example",
  "number": "2.1.2",
  "title": "",
  "body": "  Maya is saving money to purchase a car. She initially has in savings and for each hour she works at her summer job she is able to put an additional into savings. Find a formula for the function that gives the total amount of money, , that Maya has in savings after working hours.    We begin with a table of values reflecting the total amount of money Maya will have in savings after working a certain number of hours.      If Maya works  Maya's savings will be    0 hours     1 hour     2 hours     3 hours          Recognizing the pattern unfolding, a formula for the amount of money that Maya has in savings as a function of the number of hours that she works is .   "
},
{
  "id": "res-ch2-slope-roc",
  "level": "2",
  "url": "sec_2_1.html#res-ch2-slope-roc",
  "type": "Theorem",
  "number": "2.1.4",
  "title": "Slope as Rate of Change.",
  "body": " Slope as Rate of Change   For every linear function , the rate of change of with respect to is constant and equal to , with units Further, represents the initial value of the function, , and is measured in units of .   "
},
{
  "id": "sec_2_1-4-14",
  "level": "2",
  "url": "sec_2_1.html#sec_2_1-4-14",
  "type": "Example",
  "number": "2.1.5",
  "title": "",
  "body": "  The number of people residing in the town of Linesville years after 2010 is given by the linear function Identify the slope and the initial value of the function. Include units and explain their practical meaning.    From the formula for , we see that the slope of the function is and the initial value is .  The slope is measured in people\/year. In practical terms, the slope tells us that the population of Linesville increases at a constant rate of people per year.  The initial value is measured in number of people. It represents the initial number of residents in the town of Linesville, i.e., the number of residents at . As time corresponds to the year 2010, this means that the population of Linesville was 4500 people in 2010.   "
},
{
  "id": "example-ch2-water-leak",
  "level": "2",
  "url": "sec_2_1.html#example-ch2-water-leak",
  "type": "Example",
  "number": "2.1.6",
  "title": "",
  "body": "  A container holding 50 gallons of water has sprung a leak. Water is leaking out at a rate of gallons\/hour. Let be the amount of water in the container, in gallons, hours after the leak began. Find a formula for the function .    Water is leaking out at a constant rate so is a linear function. Hence .  The amount of water in the container is decreasing at a rate 5 gallons\/hour. This means that the rate of change or slope of is gallons\/hour. That is, .  The initial amount of water is gallons, so . The formula for is:    "
},
{
  "id": "sec_2_1-5-3",
  "level": "2",
  "url": "sec_2_1.html#sec_2_1-5-3",
  "type": "Example",
  "number": "2.1.7",
  "title": "",
  "body": "  In , Maya's savings , in dollars, as a function of the number of hours, , was given by Use to create a graph of the function .     contains the points , , , and . By plotting these points, we obtain the following graph. It is clear that the points lie along a straight line.   A short description.     "
},
{
  "id": "sec_2_1-5-4",
  "level": "2",
  "url": "sec_2_1.html#sec_2_1-5-4",
  "type": "Theorem",
  "number": "2.1.8",
  "title": "Graph of a Linear Function.",
  "body": " Graph of a Linear Function   The graph of a linear function is a straight line with slope and vertical intercept . The equation of the line in the slope-intercept form is .    If the slope , the function is increasing and its graph is climbing as increases.    If the slope , the function is decreasing and its graph is falling as increases.    If the slope , the function is the constant function , and its graph is the horizontal line .      "
},
{
  "id": "fig_2_1_linear_graph",
  "level": "2",
  "url": "sec_2_1.html#fig_2_1_linear_graph",
  "type": "Figure",
  "number": "2.1.9",
  "title": "",
  "body": "   "
},
{
  "id": "sec_2_1-5-7",
  "level": "2",
  "url": "sec_2_1.html#sec_2_1-5-7",
  "type": "Example",
  "number": "2.1.10",
  "title": "",
  "body": "  Consider the function from , which gives the amount of water in a container, , in gallons, hours after the container sprung a leak: Create a graph of the function . What restriction should be placed on the domain of in the applied context of this exercise?    The slope is negative, and thus the graph is decreasing: for each 1 hour increase in , decreases by . The vertical intercept is gallons. Using this information, we construct the following graph.   A short description.    The practical significance of vertical and horizontal intercepts is apparent from the graph. The vertical intercept, , gives the initial amount of water in the container. The horizontal intercept, , is the number of hours that must pass for the tank to empty completely. Based upon this, the domain of should be restricted to in order for the formula to make sense in the applied context of this exercise.   "
},
{
  "id": "sec_2_1-6-4",
  "level": "2",
  "url": "sec_2_1.html#sec_2_1-6-4",
  "type": "Theorem",
  "number": "2.1.11",
  "title": "Slope Formula.",
  "body": " Slope Formula   The slope of a linear function whose graph passes through two distinct points and is:    "
},
{
  "id": "example-ch2-slope0",
  "level": "2",
  "url": "sec_2_1.html#example-ch2-slope0",
  "type": "Example",
  "number": "2.1.12",
  "title": "",
  "body": "  Find the slope of the line passing through each set of points.     and      and      and .        If and then the slope is     If and then the slope is    Because the slope is , the line through the points is horizontal . This will be explained in further detail later on in this section.     If and then the slope is   Here, find a common denominator to simplify and .         "
},
{
  "id": "sec_2_1-6-8",
  "level": "2",
  "url": "sec_2_1.html#sec_2_1-6-8",
  "type": "Example",
  "number": "2.1.13",
  "title": "",
  "body": "  Find a linear function such that and .    The two associated points on the graph of the function are Using the slope formula, we find that So, . The value of is not immediately apparent as we were not given the value of the function at . However, we can solve for it by using either one of the function values provided. For instance, we can use the fact that to set up an equation for . Substituting into results in Adding to both sides allows us to conclude that . Therefore, .   "
},
{
  "id": "sec_2_1-6-9",
  "level": "2",
  "url": "sec_2_1.html#sec_2_1-6-9",
  "type": "Example",
  "number": "2.1.14",
  "title": "",
  "body": "  Identify the slope and vertical intercept of each line. Then write the equation of the line in slope-intercept form.    A short description.     A short description.         The first line intersects the -axis at the point , so the vertical intercept is . To calculate the slope, find two points on the graph and use the slope formula. We'll use and . Then The equation of the line is . The corresponding linear function is .    For the second line, note that the variable is being used instead of . We must again find two points on the line to substitute into the slope formula. We'll use and to find that Since the vertical intercept is , the equation of the line is . The corresponding linear function is .     "
},
{
  "id": "sec_2_1-7-5",
  "level": "2",
  "url": "sec_2_1.html#sec_2_1-7-5",
  "type": "Theorem",
  "number": "2.1.15",
  "title": "Constant Functions and Horizontal Lines.",
  "body": " Constant Functions and Horizontal Lines   The linear function with slope and vertical intercept is a constant function with equation given by and its graph is the horizontal line through the -value .   "
},
{
  "id": "sec_2_1-7-12",
  "level": "2",
  "url": "sec_2_1.html#sec_2_1-7-12",
  "type": "Theorem",
  "number": "2.1.16",
  "title": "Vertical Lines.",
  "body": " Vertical Lines   The vertical line with horizontal intercept has equation given by and its slope is undefined.   "
},
{
  "id": "exercise-2_1_1",
  "level": "2",
  "url": "sec_2_1.html#exercise-2_1_1",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "        ; slope: 3; vertical intercept:    "
},
{
  "id": "ex_2_1-1-4",
  "level": "2",
  "url": "sec_2_1.html#ex_2_1-1-4",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "        ; slope: ; vertical intercept:    "
},
{
  "id": "ex_2_1-1-5",
  "level": "2",
  "url": "sec_2_1.html#ex_2_1-1-5",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "        ; slope: ; vertical intercept:    "
},
{
  "id": "ex_2_1-1-6",
  "level": "2",
  "url": "sec_2_1.html#ex_2_1-1-6",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "        ; slope: ; vertical intercept:    "
},
{
  "id": "ex_2_1-2-3",
  "level": "2",
  "url": "sec_2_1.html#ex_2_1-2-3",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "   and         "
},
{
  "id": "ex_2_1-2-4",
  "level": "2",
  "url": "sec_2_1.html#ex_2_1-2-4",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "   and         "
},
{
  "id": "ex_2_1-2-5",
  "level": "2",
  "url": "sec_2_1.html#ex_2_1-2-5",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "   and         "
},
{
  "id": "ex_2_1-2-6",
  "level": "2",
  "url": "sec_2_1.html#ex_2_1-2-6",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "   and         "
},
{
  "id": "ex_2_1-2-7",
  "level": "2",
  "url": "sec_2_1.html#ex_2_1-2-7",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "   and         "
},
{
  "id": "ex_2_1-2-8",
  "level": "2",
  "url": "sec_2_1.html#ex_2_1-2-8",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "   and         "
},
{
  "id": "ex_2_1-3-3",
  "level": "2",
  "url": "sec_2_1.html#ex_2_1-3-3",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "   and         "
},
{
  "id": "ex_2_1-3-4",
  "level": "2",
  "url": "sec_2_1.html#ex_2_1-3-4",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "   and         "
},
{
  "id": "ex_2_1-3-5",
  "level": "2",
  "url": "sec_2_1.html#ex_2_1-3-5",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": "   and         "
},
{
  "id": "ex_2_1-3-6",
  "level": "2",
  "url": "sec_2_1.html#ex_2_1-3-6",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": "   and         "
},
{
  "id": "ex_2_1-4",
  "level": "2",
  "url": "sec_2_1.html#ex_2_1-4",
  "type": "Exercise",
  "number": "15",
  "title": "",
  "body": "  Identify the slope and vertical intercept of each line. Then write an equation of the line.       A short description.        A short description.        A short description.     A short description.          slope: ; vertical intercept: ; equation:   slope: ; vertical intercept: ; equation:   slope: ; vertical intercept: ; equation:   slope: ; vertical intercept: ; equation:      "
},
{
  "id": "ex_2_1-5",
  "level": "2",
  "url": "sec_2_1.html#ex_2_1-5",
  "type": "Exercise",
  "number": "16",
  "title": "",
  "body": "  Five linear functions are given below. Drag each function on the left to the corresponding line number on the right.   A short description.          Line 1       Line 2       Line 3       Line 4       Line 5     Line 1 is ; Line 2 is ; Line 3 is ; Line 4 is ; Line 5 is .   "
},
{
  "id": "ex_2_1-6",
  "level": "2",
  "url": "sec_2_1.html#ex_2_1-6",
  "type": "Exercise",
  "number": "17",
  "title": "",
  "body": "  During the 2019-2020 academic year, a senior lecturer at URI earned a base salary of for a standard teaching load. For each credit taught in excess of the standard load, were added to his salary. Write a linear equation expressing the total amount that the senior lecturer earned for teaching credits in excess of the standard workload during the 2019-2020 academic year.        "
},
{
  "id": "ex_2_1-7",
  "level": "2",
  "url": "sec_2_1.html#ex_2_1-7",
  "type": "Exercise",
  "number": "18",
  "title": "",
  "body": "  The elevation in feet, , of a hiker minutes after beginning her hike is given by .   Write a complete sentence explaining the practical meaning of the vertical intercept of this linear function. Include units in your answer.  Write a complete sentence explaining the practical meaning of the slope of this linear function. Include units in your answer.       The initial elevation of the hiker is 1350 feet.  The hiker's elevation is increasing at a rate of 35 feet per minute.     "
},
{
  "id": "ex_2_1-8",
  "level": "2",
  "url": "sec_2_1.html#ex_2_1-8",
  "type": "Exercise",
  "number": "19",
  "title": "",
  "body": "  The distance in miles from the finish line, , of a bicyclist hours after beginning a race is given by .   Write a complete sentence explaining the practical meaning of the vertical intercept of this linear function. Include units in your answer.  Write a complete sentence explaining the practical meaning of the slope of this linear function. Include units in your answer.       The bicyclist's initial distance from the finish line is 50 miles.  The bicyclist's distance from the finish line is decreasing at a rate of 25 miles per hour.     "
},
{
  "id": "sec_2_2",
  "level": "1",
  "url": "sec_2_2.html",
  "type": "Section",
  "number": "2.2",
  "title": "Working with Linear Functions and Linear Equations",
  "body": " Working with Linear Functions and Linear Equations    After completing this section, you should be able to do the following.     First objective.    Second objective.    Third objective.      In the last section, we introduced the slope-intercept form of a linear function, which is often used when given the slope and vertical intercept . When given two points on the linear function, the point-slope form is frequently used instead.   Point-Slope Form     The point-slope form of the equation of a line with slope passing through is:     A linear function with slope for which can be written in the point-slope form as:      Note that means that the point is on the graph of the function .    The point-slope form is very useful for finding formulas for linear functions and equations of lines.    Find an equation in point-slope form for the line passing through each set of points. Then rewrite each equation in the slope-intercept form.     and      and      and       In each part, we follow the same steps. We first use the two given points to find the slope. Once we have obtained the value of the slope, we then designate one of the two points as and write an equation in the point-slope form. Finally, we rewrite the equation in the slope-intercept form.    Using the slope formula, we find that   We will next let and use point-slope form. An equation of the line is thus   To convert to slope-intercept form, we begin by expanding the right-hand side, which results in By subtracting from both sides, we obtain the slope-intercept form     The slope is If we take , an equation of the line in slope-intercept form is which simplifies to Adding 3 to both sides (which can be rewritten as to obtain a common denominator) to results in the slope-intercept form     The slope is If we take , the resulting point-slope form of the line is which simplifies to the slope-intercept form    Note that is in the form with . This makes sense, as the line passes through the origin , meaning that the -intercept of the line is .         Let be a linear function such that and . Find a formula for the function in the slope-intercept form.    We are given the values of at two inputs, which tells us that the two points and are on the graph of the function. Using these to calculate the slope we find that Recall that the point-slope form for a linear function can alternatively be written as If we take we find that The formula simplifies to the slope-intercept form       Linear Functions and Linear Equations  When working with linear functions, we frequently find ourselves needing to set the formula for the linear function equal to a specific quantity and then to solve the resulting equation. For instance, when tasked with finding the horizontal intercept of the linear function , we would set and solve for . The resulting equation is an illustration of a linear equation in one variable.    Linear Equation in One Variable   An equation that can be written in the form where , , and are real numbers with and is the variable is called a linear equation in one variable .    We will explore how such linear equations arise in applications of linear functions and review how to solve them in the examples below.    Mr. Bell is driving through Nevada to Reno at a constant speed of mph. Let be his distance from Reno, in miles, hours after he began driving and suppose that Mr. Bell checks his GPS at to find that his distance from Reno is miles.    Find a formula for the function .    How far from Reno was Mr. Bell when he began driving?    How long from the moment he began driving will it take him to reach Reno?         At first, it may seem that we don't have enough information to find a formula for as we only know the value of the function at a single point: =150. However, we also know that Mr. Bell is driving at the constant speed of 40 mph. In the applied context of this example, this tells us that his distance from Reno is decreasing at the constant rate of 40 mph. A decreasing function has a negative rate of change, so we could say that is changing at the constant rate of mph. Furthermore, since the rate of change of is constant, the function is linear and its slope is the constant rate of change; that is, . With both the slope and the point , we can write the point-slope form for : This can be simplified to slope-intercept form:   or, equivalently, be written as     Mr. Bell began driving at when, according to the formula, his distance from Reno was miles.    Mr. Bell will reach Reno when his distance from Reno is 0 miles; that is, at the value of such that To find such we must solve the equation To solve our equation, we apply the standard methods of algebra, which in that case will involve subtracting from both sides of the equation and then dividing both sides by .     It takes Mr. Bell hours total to reach Reno. Alternatively, we could translate hours into hours and minutes.      Observe that to answer parts (b) and (c) of , we had to find the intercepts of the function . In applied problems, intercepts have an important practical meaning. Here is a graph of the function that serves as a visual illustration of the meaning of the intercepts that we found:   A short description.      During the first ten days after hatching, a chick gains weight at the rate of grams\/day. Let be the weight of the chick days after hatching and suppose that three days after hatching the chick weighs grams.    Find a formula for the function .    What was the weight of the chick when it hatched?    How many days after it hatched will the chick weigh grams?        The function changes at a constant rate so it is linear. As the slope is equal to the constant rate of change, . We are also given the value of the function at : . Hence, the point is on the graph of the function . Using the point-slope form of a linear function we find: In slope-intercept form,     The chick hatched when . Therefore, the weight of the chick when it hatched was     The weight of the chick will reach grams for the value of that satisfies the equation . That is, for satisfying the equation To solve for , subtract from both sides and then divide both sides by      It will take approximately days for the chick to reach the weight of grams.         Twin towns are municipalities in different countries that are paired to encourage human contact and cultural links. The populations of two twin towns one in the Netherlands and one in France are and , respectively, where is the number of years since a twin partnership was established.  Both populations grow linearly according to the formulas:     Which town had a larger population when a twin partnership was initially established?    Which town has a faster growing population? At what rate does it grow?    Will the two populations ever be equal? If yes, when?        The initial population of the Dutch town is people, of the French town . Initially, the population of the Dutch town was larger.    It is the slope of each function that gives its rate of increase. The population of the Dutch town grows at the rate of people\/year while the population of the French town grows faster at the rate of people\/year.    The population of the French town is initially lower than the population of the Dutch town. However, as the populations of both towns grow, the population of the French town grows faster and therefore will at some point surpass the population of the Dutch town. This can be seen clearly when we graph both functions.   A short description.    The population of the French town overtakes the population of the Dutch town where the graphs of and cross. This appears to occur between years 8 and 9. As we have the formulas for both and , we can be more precise than this.  The populations of the two towns are equal when . That is, for the value of satisfying the equation This is a linear equation in the variable . To solve it, we begin by moving all constant terms to one side of the equation and all the terms containing to the other.     Dividing both sides by , we find that years after establishing a twin partnership, the populations of both towns are equal.         The value of a car, in dollars, years after the car was purchased is given by     Find the vertical intercept and the horizontal intercept of the function and explain their meaning in practical terms.    Create a graph of the function . What restriction should be placed on the domain of in the applied context of this exercise?        The vertical intercept is the value of the function at : In practical terms, it is the purchase value of the car.  For the horizontal intercept, we must find the value of for which . That is, we must solve the linear equation :   We find that the horizontal intercept is . In practical terms, the horizontal intercept tells us that the car will have no value 12 years after it was purchased.    The graph of the function , with intercepts clearly visible, is provided below.   A short description.    While the line extends forever in both directions and has a domain of all real numbers, the domain of the function should be limited to for practical reasons. This is because the formula begins to model the applied scenario when the car was purchased at time and ceases to model the applied scenario after 12 years have passed (it does not make sense for the value of the car to be negative).        Number of Solutions to a Linear Equation in One Variable  You may have noticed that each individual linear equation that we set up and solved in the preceding examples resulted in a single solution. It is, however, possible for a linear equation in one variable to result in no solution or an infinite number of solutions. Although you will rarely encounter either of these scenarios when working with linear functions modeling real-life situations, it is important to be familiar with the possibility.    Solve each linear equation, if possible.                       To solve, we begin by expanding the left-hand side:     You may observe that both sides of the equation are identical. Because of this, the equation is true for all values of and hence has an infinite number of solutions .    To solve, we move all terms involving to one side of the equation and all constants to the other:     Dividing both sides by 5 results in the single solution  .    To solve, we move all terms involving to one side of the equation:     We end up with a statement that is never true; 4 is not the same value as . The equation has no solution .         Slope-Intercept Form   For each of the following, write the equation of the line satisfying the given set of conditions in slope-intercept form.     passing through and            passing through and            with slope passing through            with slope passing through            with slope passing through            passing through and            passing through and            with slope 0 and passing through            Slope-Intercept Form   For each of the following, write the formula in slope-intercept form for the linear function satisfying the given set of conditions.      and             and             has slope and its graph passes through             has slope and its graph passes through            the graph of passes through and            the slope of is 3 and its horizontal intercept is            the slope of is 1 and its vertical intercept is            the vertical intercept of is and its horizontal intercept is             Which of the following lines is NOT the graph of a linear function?         (c) is not the graph of a linear function.      The distance in miles from the finish line, , of a bicyclist hours after beginning a race is given by    Write a complete sentence explaining the practical meaning of the vertical intercept of this linear function. Include units in your answer.  Write a complete sentence explaining the practical meaning of the horizontal intercept of this linear function. Include units in your answer.  Write a complete sentence explaining the practical meaning of the slope of this linear function. Include units in your answer.        The vertical intercept 60 is the distance in miles that the biker is from the finish line at the start of the race.   The horizontal intercept 3 is the number of hours that it takes the biker to complete the race.   The slope indicates that the distance between the biker and the finish line is decreasing at a rate of 20 miles per hour.         The value of an antique lamp, , in dollars, years after its purchase is given by    What was the purchase price of the lamp?  When will the value of the lamp reach ?          The lamp will have a value of 4000 dollars 8.4 years after its purchase.        Two mobile phone companies sell an international roaming plan. Company A charges a dollar fixed monthly fee and per minute for talk. Company B charges a dollar fixed monthly fee and per minute for talk.   Write the linear functions and which give the monthly cost charged by Company A and Company B, respectively, with minutes spent talking on the phone.  For what value of is the cost the same with either company?  Which company gives you a better deal if you plan to talk for hours?        ;              Solving Linear Equations   Solve each linear equation. If there is no solution or infinitely many solutions, say so.                                  no solution           infinite number of solutions      "
},
{
  "id": "sec_2_2-2",
  "level": "2",
  "url": "sec_2_2.html#sec_2_2-2",
  "type": "Objectives",
  "number": "2.2",
  "title": "",
  "body": "  After completing this section, you should be able to do the following.     First objective.    Second objective.    Third objective.    "
},
{
  "id": "sec_2_2-3-2",
  "level": "2",
  "url": "sec_2_2.html#sec_2_2-3-2",
  "type": "Theorem",
  "number": "2.2.1",
  "title": "Point-Slope Form.",
  "body": " Point-Slope Form     The point-slope form of the equation of a line with slope passing through is:     A linear function with slope for which can be written in the point-slope form as:      Note that means that the point is on the graph of the function .   "
},
{
  "id": "sec_2_2-3-4",
  "level": "2",
  "url": "sec_2_2.html#sec_2_2-3-4",
  "type": "Example",
  "number": "2.2.2",
  "title": "",
  "body": "  Find an equation in point-slope form for the line passing through each set of points. Then rewrite each equation in the slope-intercept form.     and      and      and       In each part, we follow the same steps. We first use the two given points to find the slope. Once we have obtained the value of the slope, we then designate one of the two points as and write an equation in the point-slope form. Finally, we rewrite the equation in the slope-intercept form.    Using the slope formula, we find that   We will next let and use point-slope form. An equation of the line is thus   To convert to slope-intercept form, we begin by expanding the right-hand side, which results in By subtracting from both sides, we obtain the slope-intercept form     The slope is If we take , an equation of the line in slope-intercept form is which simplifies to Adding 3 to both sides (which can be rewritten as to obtain a common denominator) to results in the slope-intercept form     The slope is If we take , the resulting point-slope form of the line is which simplifies to the slope-intercept form    Note that is in the form with . This makes sense, as the line passes through the origin , meaning that the -intercept of the line is .      "
},
{
  "id": "sec_2_2-3-5",
  "level": "2",
  "url": "sec_2_2.html#sec_2_2-3-5",
  "type": "Example",
  "number": "2.2.3",
  "title": "",
  "body": "  Let be a linear function such that and . Find a formula for the function in the slope-intercept form.    We are given the values of at two inputs, which tells us that the two points and are on the graph of the function. Using these to calculate the slope we find that Recall that the point-slope form for a linear function can alternatively be written as If we take we find that The formula simplifies to the slope-intercept form    "
},
{
  "id": "sec_2_2-4-3",
  "level": "2",
  "url": "sec_2_2.html#sec_2_2-4-3",
  "type": "Definition",
  "number": "2.2.4",
  "title": "Linear Equation in One Variable.",
  "body": " Linear Equation in One Variable   An equation that can be written in the form where , , and are real numbers with and is the variable is called a linear equation in one variable .   "
},
{
  "id": "example-ch2-reno-drive",
  "level": "2",
  "url": "sec_2_2.html#example-ch2-reno-drive",
  "type": "Example",
  "number": "2.2.5",
  "title": "",
  "body": "  Mr. Bell is driving through Nevada to Reno at a constant speed of mph. Let be his distance from Reno, in miles, hours after he began driving and suppose that Mr. Bell checks his GPS at to find that his distance from Reno is miles.    Find a formula for the function .    How far from Reno was Mr. Bell when he began driving?    How long from the moment he began driving will it take him to reach Reno?         At first, it may seem that we don't have enough information to find a formula for as we only know the value of the function at a single point: =150. However, we also know that Mr. Bell is driving at the constant speed of 40 mph. In the applied context of this example, this tells us that his distance from Reno is decreasing at the constant rate of 40 mph. A decreasing function has a negative rate of change, so we could say that is changing at the constant rate of mph. Furthermore, since the rate of change of is constant, the function is linear and its slope is the constant rate of change; that is, . With both the slope and the point , we can write the point-slope form for : This can be simplified to slope-intercept form:   or, equivalently, be written as     Mr. Bell began driving at when, according to the formula, his distance from Reno was miles.    Mr. Bell will reach Reno when his distance from Reno is 0 miles; that is, at the value of such that To find such we must solve the equation To solve our equation, we apply the standard methods of algebra, which in that case will involve subtracting from both sides of the equation and then dividing both sides by .     It takes Mr. Bell hours total to reach Reno. Alternatively, we could translate hours into hours and minutes.     "
},
{
  "id": "sec_2_2-4-8",
  "level": "2",
  "url": "sec_2_2.html#sec_2_2-4-8",
  "type": "Example",
  "number": "2.2.6",
  "title": "",
  "body": "  During the first ten days after hatching, a chick gains weight at the rate of grams\/day. Let be the weight of the chick days after hatching and suppose that three days after hatching the chick weighs grams.    Find a formula for the function .    What was the weight of the chick when it hatched?    How many days after it hatched will the chick weigh grams?        The function changes at a constant rate so it is linear. As the slope is equal to the constant rate of change, . We are also given the value of the function at : . Hence, the point is on the graph of the function . Using the point-slope form of a linear function we find: In slope-intercept form,     The chick hatched when . Therefore, the weight of the chick when it hatched was     The weight of the chick will reach grams for the value of that satisfies the equation . That is, for satisfying the equation To solve for , subtract from both sides and then divide both sides by      It will take approximately days for the chick to reach the weight of grams.      "
},
{
  "id": "sec_2_2-4-9",
  "level": "2",
  "url": "sec_2_2.html#sec_2_2-4-9",
  "type": "Example",
  "number": "2.2.7",
  "title": "",
  "body": "  Twin towns are municipalities in different countries that are paired to encourage human contact and cultural links. The populations of two twin towns one in the Netherlands and one in France are and , respectively, where is the number of years since a twin partnership was established.  Both populations grow linearly according to the formulas:     Which town had a larger population when a twin partnership was initially established?    Which town has a faster growing population? At what rate does it grow?    Will the two populations ever be equal? If yes, when?        The initial population of the Dutch town is people, of the French town . Initially, the population of the Dutch town was larger.    It is the slope of each function that gives its rate of increase. The population of the Dutch town grows at the rate of people\/year while the population of the French town grows faster at the rate of people\/year.    The population of the French town is initially lower than the population of the Dutch town. However, as the populations of both towns grow, the population of the French town grows faster and therefore will at some point surpass the population of the Dutch town. This can be seen clearly when we graph both functions.   A short description.    The population of the French town overtakes the population of the Dutch town where the graphs of and cross. This appears to occur between years 8 and 9. As we have the formulas for both and , we can be more precise than this.  The populations of the two towns are equal when . That is, for the value of satisfying the equation This is a linear equation in the variable . To solve it, we begin by moving all constant terms to one side of the equation and all the terms containing to the other.     Dividing both sides by , we find that years after establishing a twin partnership, the populations of both towns are equal.      "
},
{
  "id": "sec_2_2-4-10",
  "level": "2",
  "url": "sec_2_2.html#sec_2_2-4-10",
  "type": "Example",
  "number": "2.2.8",
  "title": "",
  "body": "  The value of a car, in dollars, years after the car was purchased is given by     Find the vertical intercept and the horizontal intercept of the function and explain their meaning in practical terms.    Create a graph of the function . What restriction should be placed on the domain of in the applied context of this exercise?        The vertical intercept is the value of the function at : In practical terms, it is the purchase value of the car.  For the horizontal intercept, we must find the value of for which . That is, we must solve the linear equation :   We find that the horizontal intercept is . In practical terms, the horizontal intercept tells us that the car will have no value 12 years after it was purchased.    The graph of the function , with intercepts clearly visible, is provided below.   A short description.    While the line extends forever in both directions and has a domain of all real numbers, the domain of the function should be limited to for practical reasons. This is because the formula begins to model the applied scenario when the car was purchased at time and ceases to model the applied scenario after 12 years have passed (it does not make sense for the value of the car to be negative).     "
},
{
  "id": "sec_2_2-5-3",
  "level": "2",
  "url": "sec_2_2.html#sec_2_2-5-3",
  "type": "Example",
  "number": "2.2.9",
  "title": "",
  "body": "  Solve each linear equation, if possible.                       To solve, we begin by expanding the left-hand side:     You may observe that both sides of the equation are identical. Because of this, the equation is true for all values of and hence has an infinite number of solutions .    To solve, we move all terms involving to one side of the equation and all constants to the other:     Dividing both sides by 5 results in the single solution  .    To solve, we move all terms involving to one side of the equation:     We end up with a statement that is never true; 4 is not the same value as . The equation has no solution .     "
},
{
  "id": "ex_2_2-1-3",
  "level": "2",
  "url": "sec_2_2.html#ex_2_2-1-3",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  passing through and         "
},
{
  "id": "ex_2_2-1-4",
  "level": "2",
  "url": "sec_2_2.html#ex_2_2-1-4",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  passing through and         "
},
{
  "id": "ex_2_2-1-5",
  "level": "2",
  "url": "sec_2_2.html#ex_2_2-1-5",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  with slope passing through         "
},
{
  "id": "ex_2_2-1-6",
  "level": "2",
  "url": "sec_2_2.html#ex_2_2-1-6",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  with slope passing through         "
},
{
  "id": "ex_2_2-1-7",
  "level": "2",
  "url": "sec_2_2.html#ex_2_2-1-7",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  with slope passing through         "
},
{
  "id": "ex_2_2-1-8",
  "level": "2",
  "url": "sec_2_2.html#ex_2_2-1-8",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "  passing through and         "
},
{
  "id": "ex_2_2-1-9",
  "level": "2",
  "url": "sec_2_2.html#ex_2_2-1-9",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "  passing through and         "
},
{
  "id": "ex_2_2-1-10",
  "level": "2",
  "url": "sec_2_2.html#ex_2_2-1-10",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "  with slope 0 and passing through         "
},
{
  "id": "ex_2_2-2-3",
  "level": "2",
  "url": "sec_2_2.html#ex_2_2-2-3",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "   and         "
},
{
  "id": "ex_2_2-2-4",
  "level": "2",
  "url": "sec_2_2.html#ex_2_2-2-4",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "   and         "
},
{
  "id": "ex_2_2-2-5",
  "level": "2",
  "url": "sec_2_2.html#ex_2_2-2-5",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "   has slope and its graph passes through         "
},
{
  "id": "ex_2_2-2-6",
  "level": "2",
  "url": "sec_2_2.html#ex_2_2-2-6",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "   has slope and its graph passes through         "
},
{
  "id": "ex_2_2-2-7",
  "level": "2",
  "url": "sec_2_2.html#ex_2_2-2-7",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": "  the graph of passes through and         "
},
{
  "id": "ex_2_2-2-8",
  "level": "2",
  "url": "sec_2_2.html#ex_2_2-2-8",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": "  the slope of is 3 and its horizontal intercept is         "
},
{
  "id": "ex_2_2-2-9",
  "level": "2",
  "url": "sec_2_2.html#ex_2_2-2-9",
  "type": "Exercise",
  "number": "15",
  "title": "",
  "body": "  the slope of is 1 and its vertical intercept is         "
},
{
  "id": "ex_2_2-2-10",
  "level": "2",
  "url": "sec_2_2.html#ex_2_2-2-10",
  "type": "Exercise",
  "number": "16",
  "title": "",
  "body": "  the vertical intercept of is and its horizontal intercept is         "
},
{
  "id": "ex_2_2-3",
  "level": "2",
  "url": "sec_2_2.html#ex_2_2-3",
  "type": "Exercise",
  "number": "17",
  "title": "",
  "body": "  Which of the following lines is NOT the graph of a linear function?         (c) is not the graph of a linear function.   "
},
{
  "id": "ex_2_2-4",
  "level": "2",
  "url": "sec_2_2.html#ex_2_2-4",
  "type": "Exercise",
  "number": "18",
  "title": "",
  "body": "  The distance in miles from the finish line, , of a bicyclist hours after beginning a race is given by    Write a complete sentence explaining the practical meaning of the vertical intercept of this linear function. Include units in your answer.  Write a complete sentence explaining the practical meaning of the horizontal intercept of this linear function. Include units in your answer.  Write a complete sentence explaining the practical meaning of the slope of this linear function. Include units in your answer.        The vertical intercept 60 is the distance in miles that the biker is from the finish line at the start of the race.   The horizontal intercept 3 is the number of hours that it takes the biker to complete the race.   The slope indicates that the distance between the biker and the finish line is decreasing at a rate of 20 miles per hour.      "
},
{
  "id": "ex_2_2-5",
  "level": "2",
  "url": "sec_2_2.html#ex_2_2-5",
  "type": "Exercise",
  "number": "19",
  "title": "",
  "body": "  The value of an antique lamp, , in dollars, years after its purchase is given by    What was the purchase price of the lamp?  When will the value of the lamp reach ?          The lamp will have a value of 4000 dollars 8.4 years after its purchase.     "
},
{
  "id": "ex_2_2-6",
  "level": "2",
  "url": "sec_2_2.html#ex_2_2-6",
  "type": "Exercise",
  "number": "20",
  "title": "",
  "body": "  Two mobile phone companies sell an international roaming plan. Company A charges a dollar fixed monthly fee and per minute for talk. Company B charges a dollar fixed monthly fee and per minute for talk.   Write the linear functions and which give the monthly cost charged by Company A and Company B, respectively, with minutes spent talking on the phone.  For what value of is the cost the same with either company?  Which company gives you a better deal if you plan to talk for hours?        ;            "
},
{
  "id": "ex_2_2-7-3",
  "level": "2",
  "url": "sec_2_2.html#ex_2_2-7-3",
  "type": "Exercise",
  "number": "21",
  "title": "",
  "body": "           "
},
{
  "id": "ex_2_2-7-4",
  "level": "2",
  "url": "sec_2_2.html#ex_2_2-7-4",
  "type": "Exercise",
  "number": "22",
  "title": "",
  "body": "           "
},
{
  "id": "ex_2_2-7-5",
  "level": "2",
  "url": "sec_2_2.html#ex_2_2-7-5",
  "type": "Exercise",
  "number": "23",
  "title": "",
  "body": "       no solution   "
},
{
  "id": "ex_2_2-7-6",
  "level": "2",
  "url": "sec_2_2.html#ex_2_2-7-6",
  "type": "Exercise",
  "number": "24",
  "title": "",
  "body": "       infinite number of solutions   "
},
{
  "id": "sec_2_3",
  "level": "1",
  "url": "sec_2_3.html",
  "type": "Section",
  "number": "2.3",
  "title": "Modeling and Numerically Given Functions",
  "body": " Modeling and Numerically Given Functions    After completing this section, you should be able to do the following.     First objective.    Second objective.    Third objective.     How do we recognize when it is appropriate for a function given numerically through a table of values to be modeled by a linear function? The key is to remember that a function is linear if it changes at a constant rate. We will explore how to determine whether or not a numerically given function changes at a constant rate in the following examples.    In her laboratory, a biologist is studying the growth of the larvae of a certain insect species during the last instar. Her team takes weight measurements of the larvae every 6 hours for 48 hours beginning with . Let denote the average larval weight, in grams, at time . Here are the measurements they record rounded off to two decimal places Data source: http:\/\/www.biology.arizona.edu\/biomath\/tutorials\/Linear\/LinearModels.html , accessed: 6\/12\/20 .    (hours)             (grams)             Is it appropriate for the growth of the larvae to be modeled by a linear function? If it is, find a formula that matches the data.    It would be appropriate to model by a linear function if it changes at a constant rate. A function changes at a constant rate if equal changes in the independent variable correspond to equal changes in the dependent variable.  From the table, we can see that the independent variable increases by the quantity as we move between consecutive inputs. Starting at , we must determine the corresponding change in each time increases by (or, equivalently, the difference between each pair of consecutive outputs in the table).      These calculations indicate that each time increases by , the function increases by .   Hence the function changes at a constant rate. Indeed, the average rate of change in on each of the -hour intervals is   Since it changes at a constant rate, it is appropriate to model by a linear function for some constants and . The vertical intercept is the value of the function at . We have that value in the table: The slope is the constant rate of change which we have just calculated, so grams\/hour. Hence is an appropriate mathematical model for the growth of the larvae.      Decide which of the following tables could represent a linear function. For each table that could represent a linear function, find a formula matching the data in the table.                                                                           The change in between any two consecutive inputs in the table is given by . The change in as increases by (or, equivalently, the change in between each pair of consecutive points in the table) can be calculated as follows:     We can see that each time increases by , changes by ; that is; decreases by .   Since changes in corresponding to equal changes in are all equal, the function is linear, so for some constants and . The slope is given by Hence   In , we could easily find the vertical intercept as we were given the value of the function at 0. The table for does not directly give us the value , so we will use another point given in the table to set up an equation and solve for . Taking the point from the table, we have that      The final formula for the linear function matching the table is      Consecutive values of in the table are equally spaced by . We must check if all the corresponding changes in are equal.   Here, we can see that each time increases by , the corresponding value of becomes larger and larger. That means that the function increases faster and faster by more and more at each next step so increases at an increasing rate unlike a linear function that increases or decreases at a constant rate.    Because the change in the output, , is not the same each time increases by , the function is not linear.     All changes in are equal between consecutive inputs in the table with . The corresponding changes in are also equal: at every step increases by , so . Hence, is a linear function. We find the slope to be We are given the value of at 0: . Hence, . The formula for is:         A company purchased a computer system for . The company accountant decided to depreciate the item over 5 years of its useful life for tax purposes. The depreciated value of the system, , in dollars, reported to the IRS years after the purchase (the so-called carrying value ) is given by:    (years after purchase)          (dollars)            What is the amount of depreciation over each of the five years?    What is an appropriate formula for the carrying value ?        We begin by calculating the change in depreciated value each year:     From the above, we conclude that the computer system depreciates by each of the five years.    Since equal changes of in correspond to equal changes in the depreciated value of the computer system, can be modeled by a linear function with formula:       The depreciation method used by the accountant in is called straight-line depreciation . The 5 years of useful life is prescribed by the IRS for each type of asset. Information about how the value at the end of the asset's useful life, called the salvage value , is prescribed can be found in accounting books.  In the straight-line depreciation method, the fixed annual depreciation amount is calculated by taking the difference between the purchase cost and the salvage value and dividing by the number of years of useful life of the asset. For the computer system from , this calculation results in   The computer system is depreciating by each year, so the slope of the associated line is . The graph of the depreciated value for is the straight line shown below.   A short description.       Decide if each table could represent a linear function and explain your reasoning. For each table that could represent a linear function, find a formula that matches the data given in the table.                                                                                                      linear with equation   linear with equation   not linear  not linear  linear with equation         The table below shows for each temperature in degrees Fahrenheit the corresponding approximate temperature in degrees Celsius. Is it appropriate to model by a linear function of ? If it is, find a formula for as a function of .    (degrees Fahrenheit)        (degrees Celsius)          approximately linear with approximate equation       The height of a human individual can be estimated by the length of the femur, as shown for males in the following table.    (length of femur in cm)        (height of human male in cm)         Use the information in this table to find a possible formula for the height of a human male as a function of his femur length .  What would the approximate height of a human male with femur length 46 cm be?  Fernando is 175.4 cm tall. What would you expect the approximate length of his femur to be?           cm  approximately 47.36 cm        The weight of water above a scuba diver as well as the air above the diver exerts pressure on their bodies. The pressure the diver experiences at sea level is PSI (pounds per square inch), and this pressure increases by PSI per each foot of depth.   Write a linear equation expressing the pressure on a diver at a depth of feet below sea level.  The deepest a recreational scuba diver typically dives is feet. What is the pressure on a diver at this depth?           PSI        A hiker is at a trailhead about to climb a mountain. The temperature at the trailhead is F. According to the standard atmosphere model https:\/\/www.grc.nasa.gov\/WWW\/K-12\/airplane\/atmos.html , accessed: 6\/25\/20 the temperature drops by F per each 1 foot increase in altitude. Let be the temperature, in F, feet above the hiker.   Write a formula for the function .  Find the temperature at the mountaintop that is feet above the hiker.  Is the function increasing or decreasing?            F  The function is decreasing.        A man goes to a gym to exercise. After minutes on a treadmill, his pulse (heart rate), , in beats per minute, is:    (minutes)          (bpm)           Is it appropriate to model by a linear function? If yes, find a formula for .  If the function can be modeled by a linear function, give units for the slope and the vertical intercept of . Then explain their meaning in practical terms.       Linear; formula    The slope is bpm per minute; the practical meaning of the slope is that the man's bpm is increasing at a rate of bpm per minute. The vertical intercept is bpm; the practical meaning of the vertical intercept is that the man's resting heart rate (heart rate when performing no exercise on the treadmill) is bpm.        "
},
{
  "id": "sec_2_3-2",
  "level": "2",
  "url": "sec_2_3.html#sec_2_3-2",
  "type": "Objectives",
  "number": "2.3",
  "title": "",
  "body": "  After completing this section, you should be able to do the following.     First objective.    Second objective.    Third objective.    "
},
{
  "id": "example-ch2-larvae",
  "level": "2",
  "url": "sec_2_3.html#example-ch2-larvae",
  "type": "Example",
  "number": "2.3.1",
  "title": "",
  "body": "  In her laboratory, a biologist is studying the growth of the larvae of a certain insect species during the last instar. Her team takes weight measurements of the larvae every 6 hours for 48 hours beginning with . Let denote the average larval weight, in grams, at time . Here are the measurements they record rounded off to two decimal places Data source: http:\/\/www.biology.arizona.edu\/biomath\/tutorials\/Linear\/LinearModels.html , accessed: 6\/12\/20 .    (hours)             (grams)             Is it appropriate for the growth of the larvae to be modeled by a linear function? If it is, find a formula that matches the data.    It would be appropriate to model by a linear function if it changes at a constant rate. A function changes at a constant rate if equal changes in the independent variable correspond to equal changes in the dependent variable.  From the table, we can see that the independent variable increases by the quantity as we move between consecutive inputs. Starting at , we must determine the corresponding change in each time increases by (or, equivalently, the difference between each pair of consecutive outputs in the table).      These calculations indicate that each time increases by , the function increases by .   Hence the function changes at a constant rate. Indeed, the average rate of change in on each of the -hour intervals is   Since it changes at a constant rate, it is appropriate to model by a linear function for some constants and . The vertical intercept is the value of the function at . We have that value in the table: The slope is the constant rate of change which we have just calculated, so grams\/hour. Hence is an appropriate mathematical model for the growth of the larvae.   "
},
{
  "id": "sec_2_3-5",
  "level": "2",
  "url": "sec_2_3.html#sec_2_3-5",
  "type": "Example",
  "number": "2.3.2",
  "title": "",
  "body": "  Decide which of the following tables could represent a linear function. For each table that could represent a linear function, find a formula matching the data in the table.                                                                           The change in between any two consecutive inputs in the table is given by . The change in as increases by (or, equivalently, the change in between each pair of consecutive points in the table) can be calculated as follows:     We can see that each time increases by , changes by ; that is; decreases by .   Since changes in corresponding to equal changes in are all equal, the function is linear, so for some constants and . The slope is given by Hence   In , we could easily find the vertical intercept as we were given the value of the function at 0. The table for does not directly give us the value , so we will use another point given in the table to set up an equation and solve for . Taking the point from the table, we have that      The final formula for the linear function matching the table is      Consecutive values of in the table are equally spaced by . We must check if all the corresponding changes in are equal.   Here, we can see that each time increases by , the corresponding value of becomes larger and larger. That means that the function increases faster and faster by more and more at each next step so increases at an increasing rate unlike a linear function that increases or decreases at a constant rate.    Because the change in the output, , is not the same each time increases by , the function is not linear.     All changes in are equal between consecutive inputs in the table with . The corresponding changes in are also equal: at every step increases by , so . Hence, is a linear function. We find the slope to be We are given the value of at 0: . Hence, . The formula for is:      "
},
{
  "id": "example-ch2-depreciation",
  "level": "2",
  "url": "sec_2_3.html#example-ch2-depreciation",
  "type": "Example",
  "number": "2.3.3",
  "title": "",
  "body": "  A company purchased a computer system for . The company accountant decided to depreciate the item over 5 years of its useful life for tax purposes. The depreciated value of the system, , in dollars, reported to the IRS years after the purchase (the so-called carrying value ) is given by:    (years after purchase)          (dollars)            What is the amount of depreciation over each of the five years?    What is an appropriate formula for the carrying value ?        We begin by calculating the change in depreciated value each year:     From the above, we conclude that the computer system depreciates by each of the five years.    Since equal changes of in correspond to equal changes in the depreciated value of the computer system, can be modeled by a linear function with formula:      "
},
{
  "id": "ex_2_3-1",
  "level": "2",
  "url": "sec_2_3.html#ex_2_3-1",
  "type": "Exercise",
  "number": "2.3.1",
  "title": "",
  "body": "  Decide if each table could represent a linear function and explain your reasoning. For each table that could represent a linear function, find a formula that matches the data given in the table.                                                                                                      linear with equation   linear with equation   not linear  not linear  linear with equation      "
},
{
  "id": "ex_2_3-2",
  "level": "2",
  "url": "sec_2_3.html#ex_2_3-2",
  "type": "Exercise",
  "number": "2.3.2",
  "title": "",
  "body": "  The table below shows for each temperature in degrees Fahrenheit the corresponding approximate temperature in degrees Celsius. Is it appropriate to model by a linear function of ? If it is, find a formula for as a function of .    (degrees Fahrenheit)        (degrees Celsius)          approximately linear with approximate equation    "
},
{
  "id": "ex_2_3-3",
  "level": "2",
  "url": "sec_2_3.html#ex_2_3-3",
  "type": "Exercise",
  "number": "2.3.3",
  "title": "",
  "body": "  The height of a human individual can be estimated by the length of the femur, as shown for males in the following table.    (length of femur in cm)        (height of human male in cm)         Use the information in this table to find a possible formula for the height of a human male as a function of his femur length .  What would the approximate height of a human male with femur length 46 cm be?  Fernando is 175.4 cm tall. What would you expect the approximate length of his femur to be?           cm  approximately 47.36 cm     "
},
{
  "id": "ex_2_3-4",
  "level": "2",
  "url": "sec_2_3.html#ex_2_3-4",
  "type": "Exercise",
  "number": "2.3.4",
  "title": "",
  "body": "  The weight of water above a scuba diver as well as the air above the diver exerts pressure on their bodies. The pressure the diver experiences at sea level is PSI (pounds per square inch), and this pressure increases by PSI per each foot of depth.   Write a linear equation expressing the pressure on a diver at a depth of feet below sea level.  The deepest a recreational scuba diver typically dives is feet. What is the pressure on a diver at this depth?           PSI     "
},
{
  "id": "ex_2_3-5",
  "level": "2",
  "url": "sec_2_3.html#ex_2_3-5",
  "type": "Exercise",
  "number": "2.3.5",
  "title": "",
  "body": "  A hiker is at a trailhead about to climb a mountain. The temperature at the trailhead is F. According to the standard atmosphere model https:\/\/www.grc.nasa.gov\/WWW\/K-12\/airplane\/atmos.html , accessed: 6\/25\/20 the temperature drops by F per each 1 foot increase in altitude. Let be the temperature, in F, feet above the hiker.   Write a formula for the function .  Find the temperature at the mountaintop that is feet above the hiker.  Is the function increasing or decreasing?            F  The function is decreasing.     "
},
{
  "id": "ex_2_3-6",
  "level": "2",
  "url": "sec_2_3.html#ex_2_3-6",
  "type": "Exercise",
  "number": "2.3.6",
  "title": "",
  "body": "  A man goes to a gym to exercise. After minutes on a treadmill, his pulse (heart rate), , in beats per minute, is:    (minutes)          (bpm)           Is it appropriate to model by a linear function? If yes, find a formula for .  If the function can be modeled by a linear function, give units for the slope and the vertical intercept of . Then explain their meaning in practical terms.       Linear; formula    The slope is bpm per minute; the practical meaning of the slope is that the man's bpm is increasing at a rate of bpm per minute. The vertical intercept is bpm; the practical meaning of the vertical intercept is that the man's resting heart rate (heart rate when performing no exercise on the treadmill) is bpm.      "
},
{
  "id": "sec_3_1",
  "level": "1",
  "url": "sec_3_1.html",
  "type": "Section",
  "number": "3.1",
  "title": "Introduction to Quadratic Functions",
  "body": " Introduction to Quadratic Functions    After completing this section, you should be able to do the following.     First objective.    Second objective.    Third objective.      Consider the function . A table of values for this function is provided below.           point                                              We can use this table of values to construct the plot of or we can rely on a graphing utility. In either case, the result is the U -shaped graph in . In the figure below, change the values of to see how the function changes.      From the graph, we can see that has two -intercepts, and , located at the points and , respectively. The -intercept is located at . Furthermore, there is an additional special point on this graph at which it turns around that is referred to as its vertex . The vertex is located at .  The function is an illustration of a quadratic function .  Standard Form for a Quadratic Function   A function that can be written in the form where , , and are real numbers with is called a quadratic function .  The form is referred to as the standard form for a quadratic function.      Graphs of Quadratic Functions  The graph of a quadratic function is U -shaped and called a parabola . To be precise, we will often call it a quadratic parabola to distinguish it from parabola-like graphs of other functions.   You will encounter parabola-like graphs of other functions in Chapter 4.     Use the graph of each quadratic function to identify its intercept(s) and vertex.                      The graph of each quadratic function can be obtained by making a table of values or by using a graphing calculator or utility.       A short description.    The -intercept is where the graph crosses the -axis; this occurs at . There are no -intercepts, since the graph is located entirely above the -axis. The turning point or vertex is the lowest point on the graph since this is an upward facing quadratic parabola; hence the vertex is .      A short description.    The -intercept of this quadratic function is . The graph crosses the -axis at two points so there are two -intercepts. Visual inspection reveals that the approximate values of at which the -intercepts are located are and . The vertex is the highest point on the graph since this is a downward facing quadratic parabola; hence the vertex is .      A short description.    The -intercept of this function is . The graph crosses the -axis at one point only: . Hence, has one horizontal intercept . The vertex is the lowest point on the graph since this is an upward facing quadratic parabola; hence the vertex is .        indicates that a quadratic function may have two horizontal intercepts, one horizontal intercept, or no horizontal intercepts. Recall that horizontal intercepts of are also called the real zeros of since they are values of where . With this in mind, our observation about the number of horizontal intercepts a quadratic function may have can be used to conclude that the quadratic equation may have two real solutions, one real solution, or no real solution.  The three parts of illustrate several other features of quadratic functions. Observe that the parabolas obtained by graphing and opened up while the parabola obtained by graphing opened down. Whether the parabola associated with a quadratic function will open up or open down is determined entirely by the sign of the leading coefficient . Additionally, it can be seen that each of the quadratic parabolas obtained from graphing the functions listed in is symmetric about the vertical line passing through its vertex.   Special Features of the Graphs of Quadratic Functions   The U -shaped graph of a quadratic function is called a parabola .    If is positive the U opens up and the vertex occurs at the lowest point on the parabola.    If is negative the U opens down and the vertex occurs at the highest point on the parabola.     Furthermore, a quadratic parabola is symmetric about the vertical line passing through its vertex, which is referred to as the axis of symmetry . Because of this symmetry, the -coordinate of the vertex of a quadratic function with two distinct horizontal intercepts occurs at the midpoint of those horizontal intercepts.    The -coordinate of the vertex of a quadratic function with distinct horizontal intercepts and has formula:         Below is the graph of a quadratic function . The horizontal intercepts and the -coordinate of the vertex are given. Find the -coordinate of the vertex and the vertex itself.   A short description.      The -coordinate of the vertex is the midpoint between the horizontal intercepts and . Visually, we may be able to guess that the midpoint is . To ensure precision, we can use the formula for the midpoint of the -intercepts: Hence the -coordinate of the vertex is indeed . As the -coordinate of the vertex is given, the vertex is the ordered pair .      Below is the graph of a quadratic function . One of the two horizontal intercepts and the vertex are given. Find the point on the -axis that corresponds to the other horizontal intercept of .   A short description.      The graph of every quadratic parabola is symmetric with respect to the vertical line passing through its vertex. In this case, we can see that the vertical line through the vertex crosses the -axis at the point .   A short description.    By symmetry, each -intercept must be the same horizontal distance from the point . As is a horizontal distance of units from , the second horizontal intercept must be .  Alternatively, we could use the fact that the -coordinate of the vertex, , is the midpoint between the given horizontal intercept and the second horizontal intercept that we are tasked with finding. Using the formula for the -coordinate of the vertex:     Whether we use a visual approach or the formula, we arrive at the same conclusion: the second horizontal intercept is at the point .      Quadratic Functions and Their Graphs in Applications  Quadratic functions often model real-life scenarios for which the intercepts and vertex have important practical interpretations.    A chair manufacturer finds that the number of chairs that it can sell depends on the price (in dollars) that it charges per chair. Specifically, the number of chairs that will be sold if dollars is charged per chair is given by the formula .    Find the formula for the revenue function and graph .    For what price(s) per chair is the manufacturer's revenue ?    What is the maximum revenue? What price should the chair manufacturer charge per chair in order to maximize revenue?         The revenue is the income that the chair manufacturer makes from selling chairs. This means that     Note that the revenue function is in fact a quadratic function, which can be seen more easily by using the distributive law to rewrite the formula we found above in the standard form :       Here, , , and . The graph of the revenue function can be obtained using a table of values or a graphing utility and the result is the parabola below.   A short description.      The price(s) for which the chair manufacturer's revenue will be can be found by setting the revenue function equal to 0 and solving for : The only way that a product of two factors can be 0 is if one of the factors itself is 0, so the above breaks into the two equations: Solving the latter,     These two values can also be found by visually inspecting the graph of . The revenue is where the graph crosses the horizontal axis, which occurs at the values of and .  Hence if either or is charged per chair, the revenue will be . In the first case, if the chair manufacturer charges nothing for a product, it will of course receive no income. In the second case, charging per chair results in the chair manufacturer pricing itself out of the market; they have set the price too high for customers to be willing to purchase the item.    Since the graph of is a parabola that opens down, answering questions about the maximum revenue involves the vertex. We can find the vertex by visual inspection or by using the midpoint of the two horizontal intercepts and . The formula tells us that the -value of the vertex is 100. The -value of the vertex can be found by substituting into the formula : Since the vertex is , the maximum revenue occurs when a price of is charged per chair. The maximum revenue is .          Standard Form   Write each quadratic function in standard form. Then determine whether its graph will open up or open down without graphing the function.           ; opens up            ; opens down            ; opens up            ; opens down      Intercepts and Vertex   Use the graph of each quadratic function to identify its intercept(s) and vertex.      A short description.      horizontal intercepts: , ; vertical intercept: ; vertex:        A short description.      no horizontal intercepts; vertical intercept: ; vertex:       Horizontal Intercepts   The horizontal intercepts of a quadratic parabola are given. Find the -coordinate of its vertex.      and             and             A quadratic parabola crosses the -axis at the point and has its vertex at the point . Find the second point on the -axis where the parabola crosses the -axis. Does the parabola open up or open down?     ; opens down      A lighting company can sell units of its specialty chandelier if it charges per specialty chandelier.   Find the formula for the revenue generated from specialty chandelier sales and graph it.  At what price will the lighting company sell zero of its specialty chandelier?  What is the maximum revenue? What price should the lighting company charge per specialty chandelier in order to maximize revenue?        or       The maximum revenue is . The lighting company should charge per specialty chandelier to maximize revenue.        "
},
{
  "id": "sec_3_1-2",
  "level": "2",
  "url": "sec_3_1.html#sec_3_1-2",
  "type": "Objectives",
  "number": "3.1",
  "title": "",
  "body": "  After completing this section, you should be able to do the following.     First objective.    Second objective.    Third objective.    "
},
{
  "id": "fig_3_1_quadratic_basic",
  "level": "2",
  "url": "sec_3_1.html#fig_3_1_quadratic_basic",
  "type": "Figure",
  "number": "3.1.1",
  "title": "",
  "body": "  "
},
{
  "id": "sec_3_1-3-7",
  "level": "2",
  "url": "sec_3_1.html#sec_3_1-3-7",
  "type": "Definition",
  "number": "3.1.2",
  "title": "Standard Form for a Quadratic Function.",
  "body": "Standard Form for a Quadratic Function   A function that can be written in the form where , , and are real numbers with is called a quadratic function .  The form is referred to as the standard form for a quadratic function.   "
},
{
  "id": "exercise-ch3-graph-quads",
  "level": "2",
  "url": "sec_3_1.html#exercise-ch3-graph-quads",
  "type": "Example",
  "number": "3.1.3",
  "title": "",
  "body": "  Use the graph of each quadratic function to identify its intercept(s) and vertex.                      The graph of each quadratic function can be obtained by making a table of values or by using a graphing calculator or utility.       A short description.    The -intercept is where the graph crosses the -axis; this occurs at . There are no -intercepts, since the graph is located entirely above the -axis. The turning point or vertex is the lowest point on the graph since this is an upward facing quadratic parabola; hence the vertex is .      A short description.    The -intercept of this quadratic function is . The graph crosses the -axis at two points so there are two -intercepts. Visual inspection reveals that the approximate values of at which the -intercepts are located are and . The vertex is the highest point on the graph since this is a downward facing quadratic parabola; hence the vertex is .      A short description.    The -intercept of this function is . The graph crosses the -axis at one point only: . Hence, has one horizontal intercept . The vertex is the lowest point on the graph since this is an upward facing quadratic parabola; hence the vertex is .      "
},
{
  "id": "res-ch3-quadgraphsresult",
  "level": "2",
  "url": "sec_3_1.html#res-ch3-quadgraphsresult",
  "type": "Theorem",
  "number": "3.1.4",
  "title": "Special Features of the Graphs of Quadratic Functions.",
  "body": " Special Features of the Graphs of Quadratic Functions   The U -shaped graph of a quadratic function is called a parabola .    If is positive the U opens up and the vertex occurs at the lowest point on the parabola.    If is negative the U opens down and the vertex occurs at the highest point on the parabola.     Furthermore, a quadratic parabola is symmetric about the vertical line passing through its vertex, which is referred to as the axis of symmetry . Because of this symmetry, the -coordinate of the vertex of a quadratic function with two distinct horizontal intercepts occurs at the midpoint of those horizontal intercepts.    The -coordinate of the vertex of a quadratic function with distinct horizontal intercepts and has formula:      "
},
{
  "id": "sec_3_1-4-8",
  "level": "2",
  "url": "sec_3_1.html#sec_3_1-4-8",
  "type": "Example",
  "number": "3.1.5",
  "title": "",
  "body": "  Below is the graph of a quadratic function . The horizontal intercepts and the -coordinate of the vertex are given. Find the -coordinate of the vertex and the vertex itself.   A short description.      The -coordinate of the vertex is the midpoint between the horizontal intercepts and . Visually, we may be able to guess that the midpoint is . To ensure precision, we can use the formula for the midpoint of the -intercepts: Hence the -coordinate of the vertex is indeed . As the -coordinate of the vertex is given, the vertex is the ordered pair .   "
},
{
  "id": "sec_3_1-4-9",
  "level": "2",
  "url": "sec_3_1.html#sec_3_1-4-9",
  "type": "Example",
  "number": "3.1.6",
  "title": "",
  "body": "  Below is the graph of a quadratic function . One of the two horizontal intercepts and the vertex are given. Find the point on the -axis that corresponds to the other horizontal intercept of .   A short description.      The graph of every quadratic parabola is symmetric with respect to the vertical line passing through its vertex. In this case, we can see that the vertical line through the vertex crosses the -axis at the point .   A short description.    By symmetry, each -intercept must be the same horizontal distance from the point . As is a horizontal distance of units from , the second horizontal intercept must be .  Alternatively, we could use the fact that the -coordinate of the vertex, , is the midpoint between the given horizontal intercept and the second horizontal intercept that we are tasked with finding. Using the formula for the -coordinate of the vertex:     Whether we use a visual approach or the formula, we arrive at the same conclusion: the second horizontal intercept is at the point .   "
},
{
  "id": "sec_3_1-5-3",
  "level": "2",
  "url": "sec_3_1.html#sec_3_1-5-3",
  "type": "Example",
  "number": "3.1.7",
  "title": "",
  "body": "  A chair manufacturer finds that the number of chairs that it can sell depends on the price (in dollars) that it charges per chair. Specifically, the number of chairs that will be sold if dollars is charged per chair is given by the formula .    Find the formula for the revenue function and graph .    For what price(s) per chair is the manufacturer's revenue ?    What is the maximum revenue? What price should the chair manufacturer charge per chair in order to maximize revenue?         The revenue is the income that the chair manufacturer makes from selling chairs. This means that     Note that the revenue function is in fact a quadratic function, which can be seen more easily by using the distributive law to rewrite the formula we found above in the standard form :       Here, , , and . The graph of the revenue function can be obtained using a table of values or a graphing utility and the result is the parabola below.   A short description.      The price(s) for which the chair manufacturer's revenue will be can be found by setting the revenue function equal to 0 and solving for : The only way that a product of two factors can be 0 is if one of the factors itself is 0, so the above breaks into the two equations: Solving the latter,     These two values can also be found by visually inspecting the graph of . The revenue is where the graph crosses the horizontal axis, which occurs at the values of and .  Hence if either or is charged per chair, the revenue will be . In the first case, if the chair manufacturer charges nothing for a product, it will of course receive no income. In the second case, charging per chair results in the chair manufacturer pricing itself out of the market; they have set the price too high for customers to be willing to purchase the item.    Since the graph of is a parabola that opens down, answering questions about the maximum revenue involves the vertex. We can find the vertex by visual inspection or by using the midpoint of the two horizontal intercepts and . The formula tells us that the -value of the vertex is 100. The -value of the vertex can be found by substituting into the formula : Since the vertex is , the maximum revenue occurs when a price of is charged per chair. The maximum revenue is .      "
},
{
  "id": "ex_3_1-1-3",
  "level": "2",
  "url": "sec_3_1.html#ex_3_1-1-3",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "        ; opens up   "
},
{
  "id": "ex_3_1-1-4",
  "level": "2",
  "url": "sec_3_1.html#ex_3_1-1-4",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "        ; opens down   "
},
{
  "id": "ex_3_1-1-5",
  "level": "2",
  "url": "sec_3_1.html#ex_3_1-1-5",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "        ; opens up   "
},
{
  "id": "ex_3_1-1-6",
  "level": "2",
  "url": "sec_3_1.html#ex_3_1-1-6",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "        ; opens down   "
},
{
  "id": "ex_3_1-2-3",
  "level": "2",
  "url": "sec_3_1.html#ex_3_1-2-3",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "   A short description.      horizontal intercepts: , ; vertical intercept: ; vertex:    "
},
{
  "id": "ex_3_1-2-4",
  "level": "2",
  "url": "sec_3_1.html#ex_3_1-2-4",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "   A short description.      no horizontal intercepts; vertical intercept: ; vertex:    "
},
{
  "id": "ex_3_1-3-3",
  "level": "2",
  "url": "sec_3_1.html#ex_3_1-3-3",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "   and         "
},
{
  "id": "ex_3_1-3-4",
  "level": "2",
  "url": "sec_3_1.html#ex_3_1-3-4",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "   and         "
},
{
  "id": "ex_3_1-4",
  "level": "2",
  "url": "sec_3_1.html#ex_3_1-4",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "  A quadratic parabola crosses the -axis at the point and has its vertex at the point . Find the second point on the -axis where the parabola crosses the -axis. Does the parabola open up or open down?     ; opens down   "
},
{
  "id": "ex_3_1-5",
  "level": "2",
  "url": "sec_3_1.html#ex_3_1-5",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "  A lighting company can sell units of its specialty chandelier if it charges per specialty chandelier.   Find the formula for the revenue generated from specialty chandelier sales and graph it.  At what price will the lighting company sell zero of its specialty chandelier?  What is the maximum revenue? What price should the lighting company charge per specialty chandelier in order to maximize revenue?        or       The maximum revenue is . The lighting company should charge per specialty chandelier to maximize revenue.      "
},
{
  "id": "sec_3_2",
  "level": "1",
  "url": "sec_3_2.html",
  "type": "Section",
  "number": "3.2",
  "title": "Factoring Quadratic Expressions",
  "body": " Factoring Quadratic Expressions    After completing this section, you should be able to do the following.     First objective.    Second objective.    Third objective.      In order to algebraically solve for the horizontal intercepts of a quadratic function such as one must set equal to and then solve for ; in other words, one must solve the quadratic equation This equation can be solved by factoring . This process will be explained below.  When we multiply together for some real numbers and , we obtain:    So if one begins with a quadratic expression of the form and wants to find two numbers and such that it must be the case that and .   Factoring Quadratics of the Form   In order to factor a quadratic expression of the form (where , and are constants and is a variable), find two numbers and whose product is and whose sum is . Then       Factor each quadratic expression.                         We need to find two numbers whose product is and whose sum is . Since and , we have     We need to find two numbers whose product is and whose sum is . Since and , we have     We need to find two numbers whose product is and whose sum is . Since and , we have         Find the horizontal intercepts of each quadratic function.                  To find the horizontal intercepts, we set the function equal to 0 and solve for : We factored the left-hand side of this equation in (a), so      Hence the horizontal intercepts of are and .    Again, we set the quadratic function equal to 0 and solve: In order to factor the left-hand side, we note that , so we need two numbers whose product is and whose sum is . Since and , we obtain      Hence the horizontal intercepts of are and .       The quadratic function in the above example is an example of a difference of squares .   Difference of Squares   The difference of squares factors into :     The above formula can be verified quickly through multiplication:      Factor each difference of squares:                  Here, so     Here, so       Each of the above factoring strategies are special cases of a more general approach to factoring quadratic functions.   Factoring Quadratics of the Form   To factor a trinomial of the form (where , , and are constants with and is a variable), rewrite the term  to factor by grouping. This is done by finding two numbers whose product is and whose sum is . These two numbers can be used to rewrite the term .      Factor each of the following quadratic expressions.                  Here , , and . List all factors of  . Notice that the pair ,  multiply to  and sum to  . Now       Here , , and . List all factors of  . Notice that the pair ,  multiply to  and sum to  . Now           Find the horizontal intercepts of the quadratic function .    We set the quadratic function equal to and solve: In order to factor the left-hand side, we observe that , , and . List all factors of  . Notice that the pair ,  multiply to  and sum to  . Now     so we have that      Hence, the horizontal intercepts of are and . The function can be factored in the form . By factoring out from the second term, we can factor the function even further as In this form, the real zeros (horizontal intercepts) of the function are readily apparent.    It is worth mentioning another special case of factoring a quadratic expression : the case when is zero.   Factoring Quadratics of the Form   Consider an expression of the form (where and are constants with and is a variable). To factor the expression, factor out from both terms: or, alternatively, factor out from both terms:     If we rewrite a given expression as the horizontal intercepts of the function are straightforward to find. We want to solve the equation: The product is equal to if or . Since , when . The second term when . Hence, we have two -intercepts for :     Find horizontal intercepts of each of the quadratic functions given below.                   Here, , , and . We factor from both terms: The solutions to the equation are and , which are the two horizontal intercepts of the function.    Here, , , and . We factor out : The horizontal intercepts are and          Quadratic Functions and Projectile Motion  Consider a projectile in a vertical motion straight up or straight down. The height of the projectile above the ground, , in feet, seconds after it has been thrown can be modeled by the quadratic function where is the initial velocity of the object in feet per second and is the initial height of the object in feet.    A model rocket is launched from the ground with an initial velocity of 180 feet per second. Let be the height of the rocket above the ground seconds after launch.    Write a formula for the function .    When will the model rocket hit the ground?    Find the maximum height that the model rocket reaches.        The model rocket is launched from the ground. Hence, the initial height is 0 feet; that is, . The initial velocity is 180 ft\/sec. Hence, . The function that gives the height of the rocket after seconds is:     The rocket travels vertically upwards, reaches its maximum height, and then falls back to the ground. It hits the ground at the time when its height above the ground is zero; that is, when . To find such , we must solve the equation Note that the solutions to this equation are the horizontal intercepts of the quadratic parabola associated with . Factoring the left-hand side of the equation results in , or, equivalently, The horizontal intercepts are thus and . So the height of the rocket is 0 feet above the ground at both time — that is, at the moment of launch — and also at time , which is when the rocket comes back and hits the ground. Hence, the rocket hits the ground 11.25 seconds after launch.    The rocket reaches its maximum height when is at its maximum. The graph of is a parabola opening down. Hence, is at its maximum at the vertex of the parabola. Remember that the -coordinate of the vertex is the midpoint of the horizontal intercepts, and . Hence, the -coordinate of the vertex is . Thus, the maximum height is reached at time . The height at is feet. So at its highest, the rocket reaches 506 feet. The graph of the function explains everything:   A short description.    Note that the graph shows the height of the rocket as a function of time . It does not show the path of the rocket, which travels straight up and down along a vertical line.         Finding Intercepts   Find the intercepts of each quadratic function.          horizontal intercepts: , ; vertical intercept:            horizontal intercepts: , ; vertical intercept:            horizontal intercepts: , ; vertical intercept:            horizontal intercepts: ; vertical intercept:            horizontal intercept: ; vertical intercept:            horizontal intercepts: , ; vertical intercept:            horizontal intercepts: , ; vertical intercept:            horizontal intercepts: , ; vertical intercept:            horizontal intercepts: , ; vertical intercept:            horizontal intercepts: , ; vertical intercept:            horizontal intercepts: , ; vertical intercept:            horizontal intercepts: , ; vertical intercept:        A model rocket is launched vertically from the ground with an initial velocity of feet per second. Let be the height, in feet, of the rocket seconds after launch.   Write a formula for the function .  Find when the model rocket hits the ground.  Find the maximum height that the model rocket reaches.           seconds  The maximum height that the model rocket reaches is feet.       "
},
{
  "id": "sec_3_2-2",
  "level": "2",
  "url": "sec_3_2.html#sec_3_2-2",
  "type": "Objectives",
  "number": "3.2",
  "title": "",
  "body": "  After completing this section, you should be able to do the following.     First objective.    Second objective.    Third objective.    "
},
{
  "id": "sec_3_2-3-4",
  "level": "2",
  "url": "sec_3_2.html#sec_3_2-3-4",
  "type": "Theorem",
  "number": "3.2.1",
  "title": "Factoring Quadratics of the Form <span class=\"process-math\">\\(x^2+Bx+C\\)<\/span>.",
  "body": " Factoring Quadratics of the Form   In order to factor a quadratic expression of the form (where , and are constants and is a variable), find two numbers and whose product is and whose sum is . Then    "
},
{
  "id": "exercise-ch3-factor",
  "level": "2",
  "url": "sec_3_2.html#exercise-ch3-factor",
  "type": "Example",
  "number": "3.2.2",
  "title": "",
  "body": "  Factor each quadratic expression.                         We need to find two numbers whose product is and whose sum is . Since and , we have     We need to find two numbers whose product is and whose sum is . Since and , we have     We need to find two numbers whose product is and whose sum is . Since and , we have      "
},
{
  "id": "sec_3_2-3-6",
  "level": "2",
  "url": "sec_3_2.html#sec_3_2-3-6",
  "type": "Example",
  "number": "3.2.3",
  "title": "",
  "body": "  Find the horizontal intercepts of each quadratic function.                  To find the horizontal intercepts, we set the function equal to 0 and solve for : We factored the left-hand side of this equation in (a), so      Hence the horizontal intercepts of are and .    Again, we set the quadratic function equal to 0 and solve: In order to factor the left-hand side, we note that , so we need two numbers whose product is and whose sum is . Since and , we obtain      Hence the horizontal intercepts of are and .      "
},
{
  "id": "sec_3_2-3-8",
  "level": "2",
  "url": "sec_3_2.html#sec_3_2-3-8",
  "type": "Theorem",
  "number": "3.2.4",
  "title": "Difference of Squares.",
  "body": " Difference of Squares   The difference of squares factors into :    "
},
{
  "id": "sec_3_2-3-10",
  "level": "2",
  "url": "sec_3_2.html#sec_3_2-3-10",
  "type": "Example",
  "number": "3.2.5",
  "title": "",
  "body": "  Factor each difference of squares:                  Here, so     Here, so      "
},
{
  "id": "sec_3_2-3-12",
  "level": "2",
  "url": "sec_3_2.html#sec_3_2-3-12",
  "type": "Theorem",
  "number": "3.2.6",
  "title": "Factoring Quadratics of the Form <span class=\"process-math\">\\(ax^2 + bx + c\\)<\/span>.",
  "body": " Factoring Quadratics of the Form   To factor a trinomial of the form (where , , and are constants with and is a variable), rewrite the term  to factor by grouping. This is done by finding two numbers whose product is and whose sum is . These two numbers can be used to rewrite the term .   "
},
{
  "id": "sec_3_2-3-13",
  "level": "2",
  "url": "sec_3_2.html#sec_3_2-3-13",
  "type": "Example",
  "number": "3.2.7",
  "title": "",
  "body": "  Factor each of the following quadratic expressions.                  Here , , and . List all factors of  . Notice that the pair ,  multiply to  and sum to  . Now       Here , , and . List all factors of  . Notice that the pair ,  multiply to  and sum to  . Now        "
},
{
  "id": "sec_3_2-3-14",
  "level": "2",
  "url": "sec_3_2.html#sec_3_2-3-14",
  "type": "Example",
  "number": "3.2.8",
  "title": "",
  "body": "  Find the horizontal intercepts of the quadratic function .    We set the quadratic function equal to and solve: In order to factor the left-hand side, we observe that , , and . List all factors of  . Notice that the pair ,  multiply to  and sum to  . Now     so we have that      Hence, the horizontal intercepts of are and . The function can be factored in the form . By factoring out from the second term, we can factor the function even further as In this form, the real zeros (horizontal intercepts) of the function are readily apparent.   "
},
{
  "id": "sec_3_2-3-16",
  "level": "2",
  "url": "sec_3_2.html#sec_3_2-3-16",
  "type": "Theorem",
  "number": "3.2.9",
  "title": "Factoring Quadratics of the Form <span class=\"process-math\">\\(ax^2+bx\\)<\/span>.",
  "body": " Factoring Quadratics of the Form   Consider an expression of the form (where and are constants with and is a variable). To factor the expression, factor out from both terms: or, alternatively, factor out from both terms:    "
},
{
  "id": "sec_3_2-3-18",
  "level": "2",
  "url": "sec_3_2.html#sec_3_2-3-18",
  "type": "Example",
  "number": "3.2.10",
  "title": "",
  "body": "  Find horizontal intercepts of each of the quadratic functions given below.                   Here, , , and . We factor from both terms: The solutions to the equation are and , which are the two horizontal intercepts of the function.    Here, , , and . We factor out : The horizontal intercepts are and       "
},
{
  "id": "sec_3_2-4-3",
  "level": "2",
  "url": "sec_3_2.html#sec_3_2-4-3",
  "type": "Example",
  "number": "3.2.11",
  "title": "",
  "body": "  A model rocket is launched from the ground with an initial velocity of 180 feet per second. Let be the height of the rocket above the ground seconds after launch.    Write a formula for the function .    When will the model rocket hit the ground?    Find the maximum height that the model rocket reaches.        The model rocket is launched from the ground. Hence, the initial height is 0 feet; that is, . The initial velocity is 180 ft\/sec. Hence, . The function that gives the height of the rocket after seconds is:     The rocket travels vertically upwards, reaches its maximum height, and then falls back to the ground. It hits the ground at the time when its height above the ground is zero; that is, when . To find such , we must solve the equation Note that the solutions to this equation are the horizontal intercepts of the quadratic parabola associated with . Factoring the left-hand side of the equation results in , or, equivalently, The horizontal intercepts are thus and . So the height of the rocket is 0 feet above the ground at both time — that is, at the moment of launch — and also at time , which is when the rocket comes back and hits the ground. Hence, the rocket hits the ground 11.25 seconds after launch.    The rocket reaches its maximum height when is at its maximum. The graph of is a parabola opening down. Hence, is at its maximum at the vertex of the parabola. Remember that the -coordinate of the vertex is the midpoint of the horizontal intercepts, and . Hence, the -coordinate of the vertex is . Thus, the maximum height is reached at time . The height at is feet. So at its highest, the rocket reaches 506 feet. The graph of the function explains everything:   A short description.    Note that the graph shows the height of the rocket as a function of time . It does not show the path of the rocket, which travels straight up and down along a vertical line.     "
},
{
  "id": "ex_3_2-1-3",
  "level": "2",
  "url": "sec_3_2.html#ex_3_2-1-3",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "       horizontal intercepts: , ; vertical intercept:    "
},
{
  "id": "ex_3_2-1-4",
  "level": "2",
  "url": "sec_3_2.html#ex_3_2-1-4",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "       horizontal intercepts: , ; vertical intercept:    "
},
{
  "id": "ex_3_2-1-5",
  "level": "2",
  "url": "sec_3_2.html#ex_3_2-1-5",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "       horizontal intercepts: , ; vertical intercept:    "
},
{
  "id": "ex_3_2-1-6",
  "level": "2",
  "url": "sec_3_2.html#ex_3_2-1-6",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "       horizontal intercepts: ; vertical intercept:    "
},
{
  "id": "ex_3_2-1-7",
  "level": "2",
  "url": "sec_3_2.html#ex_3_2-1-7",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "       horizontal intercept: ; vertical intercept:    "
},
{
  "id": "ex_3_2-1-8",
  "level": "2",
  "url": "sec_3_2.html#ex_3_2-1-8",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "       horizontal intercepts: , ; vertical intercept:    "
},
{
  "id": "ex_3_2-1-9",
  "level": "2",
  "url": "sec_3_2.html#ex_3_2-1-9",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "       horizontal intercepts: , ; vertical intercept:    "
},
{
  "id": "ex_3_2-1-10",
  "level": "2",
  "url": "sec_3_2.html#ex_3_2-1-10",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "       horizontal intercepts: , ; vertical intercept:    "
},
{
  "id": "ex_3_2-1-11",
  "level": "2",
  "url": "sec_3_2.html#ex_3_2-1-11",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "       horizontal intercepts: , ; vertical intercept:    "
},
{
  "id": "ex_3_2-1-12",
  "level": "2",
  "url": "sec_3_2.html#ex_3_2-1-12",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "       horizontal intercepts: , ; vertical intercept:    "
},
{
  "id": "ex_3_2-1-13",
  "level": "2",
  "url": "sec_3_2.html#ex_3_2-1-13",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "       horizontal intercepts: , ; vertical intercept:    "
},
{
  "id": "ex_3_2-1-14",
  "level": "2",
  "url": "sec_3_2.html#ex_3_2-1-14",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "       horizontal intercepts: , ; vertical intercept:    "
},
{
  "id": "ex_3_2-2",
  "level": "2",
  "url": "sec_3_2.html#ex_3_2-2",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": "  A model rocket is launched vertically from the ground with an initial velocity of feet per second. Let be the height, in feet, of the rocket seconds after launch.   Write a formula for the function .  Find when the model rocket hits the ground.  Find the maximum height that the model rocket reaches.           seconds  The maximum height that the model rocket reaches is feet.     "
},
{
  "id": "sec_3_3",
  "level": "1",
  "url": "sec_3_3.html",
  "type": "Section",
  "number": "3.3",
  "title": "Vertex Form and Completing the Square",
  "body": " Vertex Form and Completing the Square    After completing this section, you should be able to do the following.     First objective.    Second objective.    Third objective.      Recall that the standard form of a quadratic function is where , , and are real numbers with .  When one first looks upon the function it may not immediately be apparent that this is in fact a quadratic function. This can be seen by expanding the right-hand side:     Hence, can be written in the standard form of a quadratic function as This is the same quadratic function that appeared in part (a) of where we saw that the vertex was . Notice that these numbers appear in the alternate formula for : This is not a coincidence and brings us to the vertex form of a quadratic function.   Vertex Form   The vertex form of a quadratic function with vertex is given by       Identify the vertex of each of the following quadratic functions.                    The function can be written as It can be seen that and , so its vertex is .    Note that for the function addition is being performed inside the parentheses instead of subtraction, as is required to correctly identify using the vertex form. Recalling that subtracting a negative number is the same as adding, we can rewrite the above as which allows us to identify that and . The vertex is .        Converting from Vertex Form to Standard Form  In the beginning of this section, we converted from vertex form to its standard form by expanding the right-hand side. This is what is done in general to convert a quadratic function from vertex form to standard form. To expedite this process, special product formulas may be used. Note that      Special Product Formulas          Convert each quadratic function from vertex form to standard form and identify , , and .                   Note that     so the standard form is . Here , , and .    Note that     so the standard form is . Here , , and .        Converting from Standard Form to Vertex Form  Converting from standard form to vertex form requires completing the square . This process will be explained below, but first an observation. Note that     by the first special product formula (see ).   Completing the Square for   To complete the square on a quadratic function of the form :   Identify , the coefficient of the term.  Compute .   Add and subtract this quantity from the original quadratic function: Note that by both adding and subtracting the same number from the original function, you have in fact added , which does not change the function.    Factor into and combine constants to finish completing the square.         Convert each of the following quadratic functions from standard form to vertex form. Then identify the vertex.                       The quadratic function is of the form with . Now Adding and subtracting this quantity from the quadratic yields:     Hence, the vertex form of is and the vertex is .    The quadratic function is of the form with . Now Adding and subtracting this quantity from the quadratic yields:     Hence, the vertex form of is and the vertex is .    The quadratic function is of the form with . Now Adding and subtracting this quantity from the quadratic yields:   Don't forget that always factors into . This is particularly helpful to remember in more complicated exercises like this one.      Hence, the vertex form of is and the vertex is .       In short: when , create a new quadratic (the one in parentheses) that has its coefficient equal to .    Complete Square on   To complete the square on a quadratic function of the form where :    Factor out of the first two terms to obtain an expression of the form     Complete the square within the parentheses.    Distribute and combine constants to finish completing the square on the original quadratic.        Convert each of the following quadratic functions from standard form to vertex form. Then identify the vertex.                  We begin by factoring the out of the first two terms to obtain We then complete the square inside the parentheses; in other words, we will complete the square on . Here so and     Now     Hence, the vertex form of is and the vertex is .    We begin by factoring the out of the first two terms to obtain We then complete the square inside the parentheses; in other words, we will complete the square on . Here so and     Now     Hence, the vertex form of is and the vertex is .        Using Vertex Form to Find Horizontal Intercepts  If a quadratic function is given in vertex form, then its horizontal intercepts can be found by following the process illustrated in the example below.    Find the horizontal intercepts of each of the following functions.                            To find the horizontal or -intercept(s) of this quadratic function, we set equal to and solve for . We could treat the left-hand side as a difference of squares and proceed by factoring, but we also could take an alternate approach:     This equation can be solved by taking the square root of both sides, remembering that there will be both a positive solution and a negative solution since both and :     Hence, the horizontal intercepts of the function and the solutions of the equation are and .    To find the horizontal intercepts, we set equal to and solve for :     We obtain two solutions to our equation and two horizontal intercepts of : and .    To find the horizontal intercepts, we set to and solve for :     Hence, the two solutions and therefore the two horizontal intercepts are and .    Once more, we set the function equal to and solve for :     In this case there is no real solution, since is not a real number. This means that the equation has no real solutions and the function has no horizontal intercepts. If we take a moment to visualize the graph of the function, this makes sense. Its graph is an upward facing parabola with vertex . Since the lowest point (the vertex) of this parabola is above the -axis, there cannot be any horizontal intercepts.         Vertex   For each of the following, identify the vertex of the given quadratic function.                                                     Vertex Form to Standard Form   Convert each quadratic function from vertex form to standard form and identify , , and .           ; , ,             ; , ,             ; , ,             ; , ,       Standard Form to Vertex Form   Convert each quadratic function from standard form to vertex form by completing the square. Then identify the vertex.           ; vertex:             ; vertex             ; vertex             ; vertex             ; vertex             ; vertex       Horizontal Intercepts   Find the horizontal intercepts of each quadratic function. Give exact and approximate values rounded off to three decimal places.           ,             ,             ,             ,            No real solutions.            ,       "
},
{
  "id": "sec_3_3-2",
  "level": "2",
  "url": "sec_3_3.html#sec_3_3-2",
  "type": "Objectives",
  "number": "3.3",
  "title": "",
  "body": "  After completing this section, you should be able to do the following.     First objective.    Second objective.    Third objective.    "
},
{
  "id": "sec_3_3-3-5",
  "level": "2",
  "url": "sec_3_3.html#sec_3_3-3-5",
  "type": "Definition",
  "number": "3.3.1",
  "title": "Vertex Form.",
  "body": " Vertex Form   The vertex form of a quadratic function with vertex is given by    "
},
{
  "id": "sec_3_3-3-6",
  "level": "2",
  "url": "sec_3_3.html#sec_3_3-3-6",
  "type": "Example",
  "number": "3.3.2",
  "title": "",
  "body": "  Identify the vertex of each of the following quadratic functions.                    The function can be written as It can be seen that and , so its vertex is .    Note that for the function addition is being performed inside the parentheses instead of subtraction, as is required to correctly identify using the vertex form. Recalling that subtracting a negative number is the same as adding, we can rewrite the above as which allows us to identify that and . The vertex is .     "
},
{
  "id": "res-ch3-special-products",
  "level": "2",
  "url": "sec_3_3.html#res-ch3-special-products",
  "type": "Theorem",
  "number": "3.3.3",
  "title": "Special Product Formulas.",
  "body": " Special Product Formulas       "
},
{
  "id": "sec_3_3-4-5",
  "level": "2",
  "url": "sec_3_3.html#sec_3_3-4-5",
  "type": "Example",
  "number": "3.3.4",
  "title": "",
  "body": "  Convert each quadratic function from vertex form to standard form and identify , , and .                   Note that     so the standard form is . Here , , and .    Note that     so the standard form is . Here , , and .     "
},
{
  "id": "sec_3_3-5-5",
  "level": "2",
  "url": "sec_3_3.html#sec_3_3-5-5",
  "type": "Theorem",
  "number": "3.3.5",
  "title": "Completing the Square for <span class=\"process-math\">\\(x^2+Bx+C\\)<\/span>.",
  "body": " Completing the Square for   To complete the square on a quadratic function of the form :   Identify , the coefficient of the term.  Compute .   Add and subtract this quantity from the original quadratic function: Note that by both adding and subtracting the same number from the original function, you have in fact added , which does not change the function.    Factor into and combine constants to finish completing the square.      "
},
{
  "id": "sec_3_3-5-6",
  "level": "2",
  "url": "sec_3_3.html#sec_3_3-5-6",
  "type": "Example",
  "number": "3.3.6",
  "title": "",
  "body": "  Convert each of the following quadratic functions from standard form to vertex form. Then identify the vertex.                       The quadratic function is of the form with . Now Adding and subtracting this quantity from the quadratic yields:     Hence, the vertex form of is and the vertex is .    The quadratic function is of the form with . Now Adding and subtracting this quantity from the quadratic yields:     Hence, the vertex form of is and the vertex is .    The quadratic function is of the form with . Now Adding and subtracting this quantity from the quadratic yields:   Don't forget that always factors into . This is particularly helpful to remember in more complicated exercises like this one.      Hence, the vertex form of is and the vertex is .     "
},
{
  "id": "sec_3_3-5-8",
  "level": "2",
  "url": "sec_3_3.html#sec_3_3-5-8",
  "type": "Theorem",
  "number": "3.3.7",
  "title": "Complete Square on <span class=\"process-math\">\\(ax^2 + bx + c\\)<\/span>.",
  "body": " Complete Square on   To complete the square on a quadratic function of the form where :    Factor out of the first two terms to obtain an expression of the form     Complete the square within the parentheses.    Distribute and combine constants to finish completing the square on the original quadratic.     "
},
{
  "id": "sec_3_3-5-9",
  "level": "2",
  "url": "sec_3_3.html#sec_3_3-5-9",
  "type": "Example",
  "number": "3.3.8",
  "title": "",
  "body": "  Convert each of the following quadratic functions from standard form to vertex form. Then identify the vertex.                  We begin by factoring the out of the first two terms to obtain We then complete the square inside the parentheses; in other words, we will complete the square on . Here so and     Now     Hence, the vertex form of is and the vertex is .    We begin by factoring the out of the first two terms to obtain We then complete the square inside the parentheses; in other words, we will complete the square on . Here so and     Now     Hence, the vertex form of is and the vertex is .     "
},
{
  "id": "sec_3_3-6-3",
  "level": "2",
  "url": "sec_3_3.html#sec_3_3-6-3",
  "type": "Example",
  "number": "3.3.9",
  "title": "",
  "body": "  Find the horizontal intercepts of each of the following functions.                            To find the horizontal or -intercept(s) of this quadratic function, we set equal to and solve for . We could treat the left-hand side as a difference of squares and proceed by factoring, but we also could take an alternate approach:     This equation can be solved by taking the square root of both sides, remembering that there will be both a positive solution and a negative solution since both and :     Hence, the horizontal intercepts of the function and the solutions of the equation are and .    To find the horizontal intercepts, we set equal to and solve for :     We obtain two solutions to our equation and two horizontal intercepts of : and .    To find the horizontal intercepts, we set to and solve for :     Hence, the two solutions and therefore the two horizontal intercepts are and .    Once more, we set the function equal to and solve for :     In this case there is no real solution, since is not a real number. This means that the equation has no real solutions and the function has no horizontal intercepts. If we take a moment to visualize the graph of the function, this makes sense. Its graph is an upward facing parabola with vertex . Since the lowest point (the vertex) of this parabola is above the -axis, there cannot be any horizontal intercepts.     "
},
{
  "id": "ex_3_3-1-3",
  "level": "2",
  "url": "sec_3_3.html#ex_3_3-1-3",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "           "
},
{
  "id": "ex_3_3-1-4",
  "level": "2",
  "url": "sec_3_3.html#ex_3_3-1-4",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "           "
},
{
  "id": "ex_3_3-1-5",
  "level": "2",
  "url": "sec_3_3.html#ex_3_3-1-5",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "           "
},
{
  "id": "ex_3_3-1-6",
  "level": "2",
  "url": "sec_3_3.html#ex_3_3-1-6",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "           "
},
{
  "id": "ex_3_3-2-3",
  "level": "2",
  "url": "sec_3_3.html#ex_3_3-2-3",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "        ; , ,    "
},
{
  "id": "ex_3_3-2-4",
  "level": "2",
  "url": "sec_3_3.html#ex_3_3-2-4",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "        ; , ,    "
},
{
  "id": "ex_3_3-2-5",
  "level": "2",
  "url": "sec_3_3.html#ex_3_3-2-5",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "        ; , ,    "
},
{
  "id": "ex_3_3-2-6",
  "level": "2",
  "url": "sec_3_3.html#ex_3_3-2-6",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "        ; , ,    "
},
{
  "id": "ex_3_3-3-3",
  "level": "2",
  "url": "sec_3_3.html#ex_3_3-3-3",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "        ; vertex:    "
},
{
  "id": "ex_3_3-3-4",
  "level": "2",
  "url": "sec_3_3.html#ex_3_3-3-4",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "        ; vertex    "
},
{
  "id": "ex_3_3-3-5",
  "level": "2",
  "url": "sec_3_3.html#ex_3_3-3-5",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "        ; vertex    "
},
{
  "id": "ex_3_3-3-6",
  "level": "2",
  "url": "sec_3_3.html#ex_3_3-3-6",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "        ; vertex    "
},
{
  "id": "ex_3_3-3-7",
  "level": "2",
  "url": "sec_3_3.html#ex_3_3-3-7",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": "        ; vertex    "
},
{
  "id": "ex_3_3-3-8",
  "level": "2",
  "url": "sec_3_3.html#ex_3_3-3-8",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": "        ; vertex    "
},
{
  "id": "ex_3_3-4-3",
  "level": "2",
  "url": "sec_3_3.html#ex_3_3-4-3",
  "type": "Exercise",
  "number": "15",
  "title": "",
  "body": "        ,    "
},
{
  "id": "ex_3_3-4-4",
  "level": "2",
  "url": "sec_3_3.html#ex_3_3-4-4",
  "type": "Exercise",
  "number": "16",
  "title": "",
  "body": "        ,    "
},
{
  "id": "ex_3_3-4-5",
  "level": "2",
  "url": "sec_3_3.html#ex_3_3-4-5",
  "type": "Exercise",
  "number": "17",
  "title": "",
  "body": "        ,    "
},
{
  "id": "ex_3_3-4-6",
  "level": "2",
  "url": "sec_3_3.html#ex_3_3-4-6",
  "type": "Exercise",
  "number": "18",
  "title": "",
  "body": "        ,    "
},
{
  "id": "ex_3_3-4-7",
  "level": "2",
  "url": "sec_3_3.html#ex_3_3-4-7",
  "type": "Exercise",
  "number": "19",
  "title": "",
  "body": "       No real solutions.   "
},
{
  "id": "ex_3_3-4-8",
  "level": "2",
  "url": "sec_3_3.html#ex_3_3-4-8",
  "type": "Exercise",
  "number": "20",
  "title": "",
  "body": "        ,    "
},
{
  "id": "sec_3_4",
  "level": "1",
  "url": "sec_3_4.html",
  "type": "Section",
  "number": "3.4",
  "title": "The Quadratic Formula",
  "body": " The Quadratic Formula    After completing this section, you should be able to do the following.     First objective.    Second objective.    Third objective.      In the previous section, we saw that finding the horizontal intercepts of a quadratic function from the vertex form requires setting and solving. If we wanted to find the horizontal intercepts of a quadratic function given in the standard form , we could first complete the square to convert to vertex form, and then proceed as before. If this process is done in general; i.e., on (without replacing , , and with numbers), we obtain the quadratic formula .   Quadratic Formula   Recall that a quadratic equation in standard form is written in the form The solution(s) to a quadratic equation in standard form are given by the quadratic formula :      Applying the quadratic formula when an equation is not in standard form is a common mistake!     Use the quadratic formula to solve each quadratic equation.                          Since this quadratic equation is in standard form, , , and . Now by the quadratic formula     So the two solutions are and .    Since this quadratic equation is in standard form, , , and . Now by the quadratic formula     So the two solutions are and     Since this quadratic equation is not in standard form, we must first expand the left-hand side and then get all terms on one side before we are able to proceed:     Now that the equation is in standard form, we can see that this is similar to part (a), so the solutions are and .         Find the horizontal intercepts of the quadratic function .    To find the horizontal intercepts, we set the quadratic function equal to and solve for : Here , , and , so by the quadratic formula,     Simplifying, the two solutions are and Hence, the horizontal intercepts are and .      The Discriminant  How many solutions a quadratic equation in standard form will have is determined entirely by the quantity under the radical in the quadratic formula; we call this quantity the discriminant .   The Discriminant   For the quadratic equation in standard form , the discriminant  is given by       Given the discriminant of the quadratic equation :    If , then the quadratic equation has two distinct real solutions.    If , then the quadratic equation has one real solution.    If , then the quadratic equation has no real solutions.       Note: The discriminant allows you to state the number of solutions to the quadratic equation without actually finding them .     Use the discriminant to determine how many solutions each quadratic equation has.                       Here, , , and , so . Hence this quadratic equation has one real solution . By the quadratic formula, that solution is     Here, , , and , so . Since , this quadratic equation has no real solutions . This can be seen by using the quadratic formula as well, yielding which is not a real quantity due to the negative number underneath the square root.    Here, , , and , so . Since , this quadratic equation has two distinct real solutions . We found these solutions in part (b) of ; they are and .        Using Horizontal Intercepts to Find the Vertex  In Section 3.1, we noted that the graph of a quadratic function is symmetric about the vertical line passing through the vertex, so the horizontal position of the vertex must be exactly halfway between the horizontal intercepts, or real zeros, of the quadratic function. This was stated in .  The zeros of a quadratic function are found by solving the equation . By the quadratic formula, the solutions of this equation and therefore the zeros of the quadratic function are and . As the -coordinate of the vertex must be located at the average of and , denoting the -coordinate of the vertex by results in Now      As is frequently the case in mathematics, many paths may lead to the same answer. There is another way to show that you may encounter if you go on to study critical points in calculus.   Note that the above formula for is valid when , (i.e., if the quadratic function has a single horizontal intercept). In this case, the single horizontal intercept must also be the vertex. It is also valid when the quadratic function has no real horizontal intercepts, or, equivalently, no real zeros.   Vertex Formula   The vertex of a quadratic function in the standard form is given by       A baseball is thrown straight up with initial speed ft\/sec by a player who is feet tall. Let be the height of the ball above the ground seconds later.    Find a formula for .    When does the ball reach its maximum height, and what is its maximum height?         We use the formula for the vertical motion of a projectile with initial velocity and initial height that was originally presented in Section 3.3: In our example, and . Hence This is a quadratic function in standard form with , , and .    The parabola corresponding to the function opens down so is at its maximum at the vertex of the parabola. Given and , we can calculate , the -coordinate of the vertex: The ball will reach its maximum height at ; that is, seconds into the motion. The height of the ball at is: The maximum height of the ball is feet. Here is the graph of .   A short description.    The graph shows the part of the parabola that is relevant to the motion in our example.         Factored Form of a Quadratic Function  We have previously established that if we can factor a given quadratic function, we can quickly find its zeros (or, equivalently, horizontal intercepts). For example, the zeros of the function: are and .  The other way around is also true: if we have real zeros, and , of a given quadratic function , we can write the function in factored form:    Factored Form   Let be a quadratic function with distinct real zeros and . The factored form of is If has a single real zero, then is called a double root of and we use in the formula for factored form defined above.     Remember, the real zeros of are the real values of for which .    Note: Every quadratic function can be written in standard form and in vertex form. However, not every quadratic function can be written in factored form for real numbers , . In particular, a quadratic function that has no real zeros, or equivalently no horizontal intercepts, cannot be factored over the real numbers and therefore cannot be written in the factored form we have defined.    Find the zeros for a given quadratic function using any method you wish. Express the function in factored form.                        To find the zeros of , we have to solve the quadratic equation: Notice that , , and . So by the quadratic formula:     We simplify and obtain the two solutions: and The function in factored form is     We set up the equation to find the zeros of : We have , , and . So by the quadratic formula:     Hence, the two solutions are and The function in factored form is     The equation we have to solve is: Since , , and , the discriminant is negative: . Hence, the equation has no real solutions and cannot be written in factored form. However, the vertex form of is The vertex is below the -axis at and the parabola opens down. So there cannot be any horizontal intercepts. Here is the graph of .   A short description.          Use the graph of a quadratic function given below to find a formula for the function in factored form and in standard form.   A short description.      The graph gives us the horizontal intercepts or equivalently the zeros of the function : and . Hence, in factored form is: We still don't have the value of the leading coefficient . To find , we will use the vertical intercept of the function. The intercept is clearly seen on the graph. The vertical intercept is the value of the function at . Thus, . We substitute into factored form of and obtain:     We simplify the equation: which gives: and finally: The function in factored form is: To obtain in standard form, we multiply out all terms and simplify:          Quadratic Equations   Find all real solutions to each quadratic equation. Give exact and approximate values rounded to three decimal places.           and             and             and             and             and             and       Intercepts and Vertex   Find the intercepts and vertex of each quadratic function. Give exact and approximate values rounded off to three decimal places.          horizontal intercepts: , ; vertical intercept: ; vertex:            horizontal intercepts: , ; vertical intercept: ; vertex:            horizontal intercepts: , ; vertical intercept: ; vertex:            no horizontal intercepts; vertical intercept: 5; vertex       Discriminant   Calculate the discriminant of each quadratic equation and use it to determine whether the equation will have one real solution, two distinct real solutions, or no real solutions.          0; one real solution           132; two distinct real solutions            ; no real solutions           56; two distinct real solutions       A baseball is thrown straight up with the initial speed of 50 ft\/sec by a player who is 6 feet tall. Let be the height of the ball above the ground seconds later.   Find a formula for .  When does the ball reach its maximum height and what is its maximum height? Round your answers to two decimal places.           The ball reaches its maximum height approximately 1.56 seconds after it is thrown straight up and that maximum height is approximately 45.06 feet.        Factored Form   Rewrite the given quadratic function in factored form. Be sure to use the exact values of the zeros of each function.                              The graph of a quadratic function is given below. Write the function in factored form. Then rewrite the function in standard form.   A short description.       ;       The graph of a quadratic function is given below. Write the function in factored form. Then rewrite the function in standard form.   A short description.       ;      "
},
{
  "id": "sec_3_4-2",
  "level": "2",
  "url": "sec_3_4.html#sec_3_4-2",
  "type": "Objectives",
  "number": "3.4",
  "title": "",
  "body": "  After completing this section, you should be able to do the following.     First objective.    Second objective.    Third objective.    "
},
{
  "id": "sec_3_4-3-2",
  "level": "2",
  "url": "sec_3_4.html#sec_3_4-3-2",
  "type": "Theorem",
  "number": "3.4.1",
  "title": "Quadratic Formula.",
  "body": " Quadratic Formula   Recall that a quadratic equation in standard form is written in the form The solution(s) to a quadratic equation in standard form are given by the quadratic formula :    "
},
{
  "id": "exercise-ch3-quad-form",
  "level": "2",
  "url": "sec_3_4.html#exercise-ch3-quad-form",
  "type": "Example",
  "number": "3.4.2",
  "title": "",
  "body": "  Use the quadratic formula to solve each quadratic equation.                          Since this quadratic equation is in standard form, , , and . Now by the quadratic formula     So the two solutions are and .    Since this quadratic equation is in standard form, , , and . Now by the quadratic formula     So the two solutions are and     Since this quadratic equation is not in standard form, we must first expand the left-hand side and then get all terms on one side before we are able to proceed:     Now that the equation is in standard form, we can see that this is similar to part (a), so the solutions are and .      "
},
{
  "id": "sec_3_4-3-5",
  "level": "2",
  "url": "sec_3_4.html#sec_3_4-3-5",
  "type": "Example",
  "number": "3.4.3",
  "title": "",
  "body": "  Find the horizontal intercepts of the quadratic function .    To find the horizontal intercepts, we set the quadratic function equal to and solve for : Here , , and , so by the quadratic formula,     Simplifying, the two solutions are and Hence, the horizontal intercepts are and .   "
},
{
  "id": "sec_3_4-4-3",
  "level": "2",
  "url": "sec_3_4.html#sec_3_4-4-3",
  "type": "Definition",
  "number": "3.4.4",
  "title": "The Discriminant.",
  "body": " The Discriminant   For the quadratic equation in standard form , the discriminant  is given by    "
},
{
  "id": "sec_3_4-4-4",
  "level": "2",
  "url": "sec_3_4.html#sec_3_4-4-4",
  "type": "Theorem",
  "number": "3.4.5",
  "title": "",
  "body": "  Given the discriminant of the quadratic equation :    If , then the quadratic equation has two distinct real solutions.    If , then the quadratic equation has one real solution.    If , then the quadratic equation has no real solutions.     "
},
{
  "id": "sec_3_4-4-6",
  "level": "2",
  "url": "sec_3_4.html#sec_3_4-4-6",
  "type": "Example",
  "number": "3.4.6",
  "title": "",
  "body": "  Use the discriminant to determine how many solutions each quadratic equation has.                       Here, , , and , so . Hence this quadratic equation has one real solution . By the quadratic formula, that solution is     Here, , , and , so . Since , this quadratic equation has no real solutions . This can be seen by using the quadratic formula as well, yielding which is not a real quantity due to the negative number underneath the square root.    Here, , , and , so . Since , this quadratic equation has two distinct real solutions . We found these solutions in part (b) of ; they are and .     "
},
{
  "id": "sec_3_4-5-7",
  "level": "2",
  "url": "sec_3_4.html#sec_3_4-5-7",
  "type": "Theorem",
  "number": "3.4.7",
  "title": "Vertex Formula.",
  "body": " Vertex Formula   The vertex of a quadratic function in the standard form is given by    "
},
{
  "id": "sec_3_4-5-8",
  "level": "2",
  "url": "sec_3_4.html#sec_3_4-5-8",
  "type": "Example",
  "number": "3.4.8",
  "title": "",
  "body": "  A baseball is thrown straight up with initial speed ft\/sec by a player who is feet tall. Let be the height of the ball above the ground seconds later.    Find a formula for .    When does the ball reach its maximum height, and what is its maximum height?         We use the formula for the vertical motion of a projectile with initial velocity and initial height that was originally presented in Section 3.3: In our example, and . Hence This is a quadratic function in standard form with , , and .    The parabola corresponding to the function opens down so is at its maximum at the vertex of the parabola. Given and , we can calculate , the -coordinate of the vertex: The ball will reach its maximum height at ; that is, seconds into the motion. The height of the ball at is: The maximum height of the ball is feet. Here is the graph of .   A short description.    The graph shows the part of the parabola that is relevant to the motion in our example.      "
},
{
  "id": "sec_3_4-6-4",
  "level": "2",
  "url": "sec_3_4.html#sec_3_4-6-4",
  "type": "Definition",
  "number": "3.4.9",
  "title": "Factored Form.",
  "body": " Factored Form   Let be a quadratic function with distinct real zeros and . The factored form of is If has a single real zero, then is called a double root of and we use in the formula for factored form defined above.   "
},
{
  "id": "sec_3_4-6-7",
  "level": "2",
  "url": "sec_3_4.html#sec_3_4-6-7",
  "type": "Example",
  "number": "3.4.10",
  "title": "",
  "body": "  Find the zeros for a given quadratic function using any method you wish. Express the function in factored form.                        To find the zeros of , we have to solve the quadratic equation: Notice that , , and . So by the quadratic formula:     We simplify and obtain the two solutions: and The function in factored form is     We set up the equation to find the zeros of : We have , , and . So by the quadratic formula:     Hence, the two solutions are and The function in factored form is     The equation we have to solve is: Since , , and , the discriminant is negative: . Hence, the equation has no real solutions and cannot be written in factored form. However, the vertex form of is The vertex is below the -axis at and the parabola opens down. So there cannot be any horizontal intercepts. Here is the graph of .   A short description.       "
},
{
  "id": "sec_3_4-6-8",
  "level": "2",
  "url": "sec_3_4.html#sec_3_4-6-8",
  "type": "Example",
  "number": "3.4.11",
  "title": "",
  "body": "  Use the graph of a quadratic function given below to find a formula for the function in factored form and in standard form.   A short description.      The graph gives us the horizontal intercepts or equivalently the zeros of the function : and . Hence, in factored form is: We still don't have the value of the leading coefficient . To find , we will use the vertical intercept of the function. The intercept is clearly seen on the graph. The vertical intercept is the value of the function at . Thus, . We substitute into factored form of and obtain:     We simplify the equation: which gives: and finally: The function in factored form is: To obtain in standard form, we multiply out all terms and simplify:      "
},
{
  "id": "ex_3_4-1-3",
  "level": "2",
  "url": "sec_3_4.html#ex_3_4-1-3",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "        and    "
},
{
  "id": "ex_3_4-1-4",
  "level": "2",
  "url": "sec_3_4.html#ex_3_4-1-4",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "        and    "
},
{
  "id": "ex_3_4-1-5",
  "level": "2",
  "url": "sec_3_4.html#ex_3_4-1-5",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "        and    "
},
{
  "id": "ex_3_4-1-6",
  "level": "2",
  "url": "sec_3_4.html#ex_3_4-1-6",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "        and    "
},
{
  "id": "ex_3_4-1-7",
  "level": "2",
  "url": "sec_3_4.html#ex_3_4-1-7",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "        and    "
},
{
  "id": "ex_3_4-1-8",
  "level": "2",
  "url": "sec_3_4.html#ex_3_4-1-8",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "        and    "
},
{
  "id": "ex_3_4-2-3",
  "level": "2",
  "url": "sec_3_4.html#ex_3_4-2-3",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "       horizontal intercepts: , ; vertical intercept: ; vertex:    "
},
{
  "id": "ex_3_4-2-4",
  "level": "2",
  "url": "sec_3_4.html#ex_3_4-2-4",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "       horizontal intercepts: , ; vertical intercept: ; vertex:    "
},
{
  "id": "ex_3_4-2-5",
  "level": "2",
  "url": "sec_3_4.html#ex_3_4-2-5",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "       horizontal intercepts: , ; vertical intercept: ; vertex:    "
},
{
  "id": "ex_3_4-2-6",
  "level": "2",
  "url": "sec_3_4.html#ex_3_4-2-6",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "       no horizontal intercepts; vertical intercept: 5; vertex    "
},
{
  "id": "ex_3_4-3-3",
  "level": "2",
  "url": "sec_3_4.html#ex_3_4-3-3",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "       0; one real solution   "
},
{
  "id": "ex_3_4-3-4",
  "level": "2",
  "url": "sec_3_4.html#ex_3_4-3-4",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "       132; two distinct real solutions   "
},
{
  "id": "ex_3_4-3-5",
  "level": "2",
  "url": "sec_3_4.html#ex_3_4-3-5",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": "        ; no real solutions   "
},
{
  "id": "ex_3_4-3-6",
  "level": "2",
  "url": "sec_3_4.html#ex_3_4-3-6",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": "       56; two distinct real solutions   "
},
{
  "id": "ex_3_4-4",
  "level": "2",
  "url": "sec_3_4.html#ex_3_4-4",
  "type": "Exercise",
  "number": "15",
  "title": "",
  "body": "  A baseball is thrown straight up with the initial speed of 50 ft\/sec by a player who is 6 feet tall. Let be the height of the ball above the ground seconds later.   Find a formula for .  When does the ball reach its maximum height and what is its maximum height? Round your answers to two decimal places.           The ball reaches its maximum height approximately 1.56 seconds after it is thrown straight up and that maximum height is approximately 45.06 feet.      "
},
{
  "id": "ex_3_4-5-3",
  "level": "2",
  "url": "sec_3_4.html#ex_3_4-5-3",
  "type": "Exercise",
  "number": "16",
  "title": "",
  "body": "           "
},
{
  "id": "ex_3_4-5-4",
  "level": "2",
  "url": "sec_3_4.html#ex_3_4-5-4",
  "type": "Exercise",
  "number": "17",
  "title": "",
  "body": "           "
},
{
  "id": "ex_3_4-6",
  "level": "2",
  "url": "sec_3_4.html#ex_3_4-6",
  "type": "Exercise",
  "number": "18",
  "title": "",
  "body": "  The graph of a quadratic function is given below. Write the function in factored form. Then rewrite the function in standard form.   A short description.       ;    "
},
{
  "id": "ex_3_4-7",
  "level": "2",
  "url": "sec_3_4.html#ex_3_4-7",
  "type": "Exercise",
  "number": "19",
  "title": "",
  "body": "  The graph of a quadratic function is given below. Write the function in factored form. Then rewrite the function in standard form.   A short description.       ;    "
},
{
  "id": "sec_4_1",
  "level": "1",
  "url": "sec_4_1.html",
  "type": "Section",
  "number": "4.1",
  "title": "Algebra of Powers: Integral Exponents",
  "body": " Algebra of Powers: Integral Exponents    After completing this section, you should be able to do the following.     First objective.    Second objective.    Third objective.     In the next two sections we review algebra of power expressions of the form: where and are given numbers. The number is called the base in the expression and the power that the base is being raised to is called the exponent .  We begin with integral exponents; that is, exponents that are integers. If is a positive integer , then is simply a short way of writing repeated multiplication: In particular, for ,   We expand this simple definition to the exponent by defining for any number : In particular, by definition: Next, we extend the definition to negative integer exponents by defining for every and every , In particular:   These simple definitions easily imply the basic properties of power expressions.   Rules of Exponents Integral Exponents   Let , be given numbers, and be integers. Then the following equalities hold provided both sides are defined:                              An expression in the formulas above may not be defined if there is a zero in the denominator. For example, in , is not defined if and . So holds for .  The properties of exponents listed above follow very easily from our definitions. For example, to illustrate observe:     Rewrite each expression given below as a power of 3; that is, in the form for some constant .                                 All we need is : We rewrote the expression as for .    By :     By and :     As we have:     Note that . Using :          Use Rules of Exponents to simplify the following expressions if possible:                             We use to simplify the expression under the outside power 2. Then we use :     Let's begin by simplifying the expression under the power using : Now we use and then :     Let's simplify the expression under the power using : By and then :     There is no rule for the power of a sum or a difference! We cannot simplify using Rules of Exponents. You certainly cannot distribute the power 7 and write the expression as .        Rewriting Expressions   Rewrite the given expression as a power of ; that is, express it in the form for some .                                                     Rewriting Expressions   Rewrite the given expression as a power of ; that is, express it in the form for some .                                                     Simplifying Expressions   Simplify the given expression if possible. If not possible, state so.                                  Cannot be simplified.                       Cannot be simplified.                       Cannot be simplified.       Let and be positive integers. Use the definition of exponentiation to explain why the following formula is valid:           "
},
{
  "id": "sec_4_1-2",
  "level": "2",
  "url": "sec_4_1.html#sec_4_1-2",
  "type": "Objectives",
  "number": "4.1",
  "title": "",
  "body": "  After completing this section, you should be able to do the following.     First objective.    Second objective.    Third objective.    "
},
{
  "id": "sec_4_1-7",
  "level": "2",
  "url": "sec_4_1.html#sec_4_1-7",
  "type": "Theorem",
  "number": "4.1.1",
  "title": "Rules of Exponents — Integral Exponents.",
  "body": " Rules of Exponents Integral Exponents   Let , be given numbers, and be integers. Then the following equalities hold provided both sides are defined:                             "
},
{
  "id": "sec_4_1-10",
  "level": "2",
  "url": "sec_4_1.html#sec_4_1-10",
  "type": "Example",
  "number": "4.1.2",
  "title": "",
  "body": "  Rewrite each expression given below as a power of 3; that is, in the form for some constant .                                 All we need is : We rewrote the expression as for .    By :     By and :     As we have:     Note that . Using :       "
},
{
  "id": "sec_4_1-11",
  "level": "2",
  "url": "sec_4_1.html#sec_4_1-11",
  "type": "Example",
  "number": "4.1.3",
  "title": "",
  "body": "  Use Rules of Exponents to simplify the following expressions if possible:                             We use to simplify the expression under the outside power 2. Then we use :     Let's begin by simplifying the expression under the power using : Now we use and then :     Let's simplify the expression under the power using : By and then :     There is no rule for the power of a sum or a difference! We cannot simplify using Rules of Exponents. You certainly cannot distribute the power 7 and write the expression as .     "
},
{
  "id": "ex_4_1-1-3",
  "level": "2",
  "url": "sec_4_1.html#ex_4_1-1-3",
  "type": "Exercise",
  "number": "4.1.1",
  "title": "",
  "body": "           "
},
{
  "id": "ex_4_1-1-4",
  "level": "2",
  "url": "sec_4_1.html#ex_4_1-1-4",
  "type": "Exercise",
  "number": "4.1.2",
  "title": "",
  "body": "           "
},
{
  "id": "ex_4_1-1-5",
  "level": "2",
  "url": "sec_4_1.html#ex_4_1-1-5",
  "type": "Exercise",
  "number": "4.1.3",
  "title": "",
  "body": "           "
},
{
  "id": "ex_4_1-1-6",
  "level": "2",
  "url": "sec_4_1.html#ex_4_1-1-6",
  "type": "Exercise",
  "number": "4.1.4",
  "title": "",
  "body": "           "
},
{
  "id": "ex_4_1-2-3",
  "level": "2",
  "url": "sec_4_1.html#ex_4_1-2-3",
  "type": "Exercise",
  "number": "4.1.5",
  "title": "",
  "body": "           "
},
{
  "id": "ex_4_1-2-4",
  "level": "2",
  "url": "sec_4_1.html#ex_4_1-2-4",
  "type": "Exercise",
  "number": "4.1.6",
  "title": "",
  "body": "           "
},
{
  "id": "ex_4_1-2-5",
  "level": "2",
  "url": "sec_4_1.html#ex_4_1-2-5",
  "type": "Exercise",
  "number": "4.1.7",
  "title": "",
  "body": "           "
},
{
  "id": "ex_4_1-2-6",
  "level": "2",
  "url": "sec_4_1.html#ex_4_1-2-6",
  "type": "Exercise",
  "number": "4.1.8",
  "title": "",
  "body": "           "
},
{
  "id": "ex_4_1-3-3",
  "level": "2",
  "url": "sec_4_1.html#ex_4_1-3-3",
  "type": "Exercise",
  "number": "4.1.9",
  "title": "",
  "body": "           "
},
{
  "id": "ex_4_1-3-4",
  "level": "2",
  "url": "sec_4_1.html#ex_4_1-3-4",
  "type": "Exercise",
  "number": "4.1.10",
  "title": "",
  "body": "           "
},
{
  "id": "ex_4_1-3-5",
  "level": "2",
  "url": "sec_4_1.html#ex_4_1-3-5",
  "type": "Exercise",
  "number": "4.1.11",
  "title": "",
  "body": "       Cannot be simplified.   "
},
{
  "id": "ex_4_1-3-6",
  "level": "2",
  "url": "sec_4_1.html#ex_4_1-3-6",
  "type": "Exercise",
  "number": "4.1.12",
  "title": "",
  "body": "           "
},
{
  "id": "ex_4_1-3-7",
  "level": "2",
  "url": "sec_4_1.html#ex_4_1-3-7",
  "type": "Exercise",
  "number": "4.1.13",
  "title": "",
  "body": "       Cannot be simplified.   "
},
{
  "id": "ex_4_1-3-8",
  "level": "2",
  "url": "sec_4_1.html#ex_4_1-3-8",
  "type": "Exercise",
  "number": "4.1.14",
  "title": "",
  "body": "           "
},
{
  "id": "ex_4_1-3-9",
  "level": "2",
  "url": "sec_4_1.html#ex_4_1-3-9",
  "type": "Exercise",
  "number": "4.1.15",
  "title": "",
  "body": "       Cannot be simplified.   "
},
{
  "id": "ex_4_1-4",
  "level": "2",
  "url": "sec_4_1.html#ex_4_1-4",
  "type": "Exercise",
  "number": "4.1.16",
  "title": "",
  "body": "  Let and be positive integers. Use the definition of exponentiation to explain why the following formula is valid:         "
},
{
  "id": "sec_4_2",
  "level": "1",
  "url": "sec_4_2.html",
  "type": "Section",
  "number": "4.2",
  "title": "Algebra of Powers: Fractional Exponents",
  "body": " Algebra of Powers: Fractional Exponents     After completing this section, you should be able to do the following.     First objective.    Second objective.    Third objective.     In this section, we will review the concepts of roots and radicals. Please note that in this book we stay within real numbers, and we do not consider complex numbers. In particular, when we talk about roots, we mean real roots.    Roots and Radicals  We say that a number is a root of order 2 (a square root) of a number if . We say that a number is a root of order 3 (a cube root) of if and so on.    Let be a given number and let be a positive integer. We say that is a root of order of , or an th root of , if .    For example, let , . The number has two roots of order : and . Of course, . On the other hand, let and . The number has no roots of order , since there are no numbers whose square is . We say that the square root of  does not exist .  Take and . The number has exactly one root of order 3 which is . Indeed, . Observe that so 4 is not a cube root of .   Roots and Radicals   Let be a given number and be a positive integer.     Suppose is even.    If , then has no th order roots.    If , then has two th roots, one positive and one of the same magnitude but negative. We denote the positive  th root as: (We use the radical symbol .) The two th roots can then be written as    Typically, we might use the notation to denote the positive and negative roots.      Suppose is odd. Then has exactly one th root which we denote as If is negative, the root is negative; if is positive the root is positive.  If , then has one root of any order: .       When , instead of writing we simply drop the and write . This is the only exception to this notation.     Find all (real) roots specified below and write them in terms of radicals.   All roots of order of   All roots of order of   All roots of order of   All roots of order of        We are looking for all numbers such that . The order, , is even. Hence, we have two roots, one positive and one negative. The positive root is denoted by and the two roots are: The positive number whose th power is is . That is: Hence, the two roots of order of are and . Indeed, .     has two roots of order : and . We cannot easily guess them as they are not integers. We can use our calculator, though, and calculate . The two roots are then approximately and .    The order, , is odd. Hence, there is only one root of order of denoted as . As , we have     A negative number has no roots of even orders and is even. Hence, no roots.      By definition, is a root of order of if is a solution to the equation: Hence, roots and radicals appear naturally when solving equations containing powers of the unknown. We saw plenty of radicals in Chapter 3 in the context of quadratic equations.    Solve for . Find all (real) solutions and give their exact as well as approximate values.                            We add to both sides of the equation and then divide both sides by to obtain Solutions to the equation are roots of order of . There are two such roots:     We divide both sides of the equation by and obtain: There is one cube root of . Hence, our equation has one solution:     We subtract from both sides of the equation, then divide by . The equation becomes: We are looking for all roots of order of . As is even, we have two such roots:     We begin by solving for . Subtract from both sides and divide both sides by : Hence, is a root of order 2 of 4. There are two such roots: This gives and . We solve each of the two equations for and obtain two solutions:       Here are a few important properties of roots.   Properties of Radicals   Let , be given numbers. Let , be positive integers. Then the following equalities hold provided that the roots involved exist, and both sides are defined:                    if is even     if is odd        Powers with Fractional Exponents and Arbitrary Exponents  So far, we have defined powers for all integer exponents .  To extend the definition to fractional exponents , we will use roots. In the first step, for every positive integer , we define as: Does this make sense? Recall that . Therefore, which is what Rules of Exponents would dictate. In the next step, we define which seems to make sense. Here is a precise definition of a power with a fractional exponent.    Let be a given number and let and be positive integers. Assume that exists. We define:       Note that exists unless is even and is negative. The combination of negative radicands (numbers under radicals) and even roots and powers cause a lot of possible problems with the behavior of fractional exponents and Rules of Exponents are not always satisfied.  For example, is the following equality always true? It seems reasonable at first, but consider the following: The first number is which is undefined. However, Therefore, when we talk about fractional powers, we will most often assume that bases are positive except for some very simple cases like:     Find:                      By definition . Note that is the positive of the two square roots of as is .   is undefined. An even-order root of a negative number is undefined. Hence, is undefined.   .   .    .     Depending on your calculator, it may be easier to calculate a fractional power than to enter the corresponding radical. You can simply enter 1700^(1\/20) . Be sure to use parentheses!    We have defined powers for integer and fractional exponents . As you may know, not all real numbers can be expressed as fractions (irrational numbers, for example). Can we define powers for all real numbers ? The answer is affirmative provided the base is positive. The construction falls outside the scope of this course. It suffices to know that can be defined for all exponents and Rules of Exponents are preserved. Therefore, we have the following result.   Rules of Exponents Arbitrary Exponents   Let , be given positive numbers, and be real numbers. Then the following equalities hold:                             Rewrite each of the following expressions as a power of 5; that is, in the form for some .                            By definition of fractional powers:     By definition of fractional powers and :     Note that . Using and :     Note that . Using Rules of Exponents we get:         Use Rules of Exponents to simplify the following. Write your answers in terms of powers and not radicals. Assume , , , and are all positive.                                 By computing first, then we have .         We have , , , . Therefore,          Solving Equations   Solve the equation for or for . Be sure to list all solutions. Give exact and approximate values rounded off to three decimal places. If there are no solutions say so.           and             and                        No real solutions.            and                   Rewriting Expressions   Rewrite the expression as a power of ; that is, in the form for some . If it is not possible, say so.                                                     Simplifying   Simplify the given expression. If it is not possible, say so. and are assumed to be positive.          Cannot be simplified.                                   Cannot be simplified.      "
},
{
  "id": "sec_4_2-2-1",
  "level": "2",
  "url": "sec_4_2.html#sec_4_2-2-1",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  After completing this section, you should be able to do the following.     First objective.    Second objective.    Third objective.    "
},
{
  "id": "sec_4_2-3-3",
  "level": "2",
  "url": "sec_4_2.html#sec_4_2-3-3",
  "type": "Definition",
  "number": "4.2.1",
  "title": "",
  "body": "  Let be a given number and let be a positive integer. We say that is a root of order of , or an th root of , if .   "
},
{
  "id": "sec_4_2-3-6",
  "level": "2",
  "url": "sec_4_2.html#sec_4_2-3-6",
  "type": "Theorem",
  "number": "4.2.2",
  "title": "Roots and Radicals.",
  "body": " Roots and Radicals   Let be a given number and be a positive integer.     Suppose is even.    If , then has no th order roots.    If , then has two th roots, one positive and one of the same magnitude but negative. We denote the positive  th root as: (We use the radical symbol .) The two th roots can then be written as    Typically, we might use the notation to denote the positive and negative roots.      Suppose is odd. Then has exactly one th root which we denote as If is negative, the root is negative; if is positive the root is positive.  If , then has one root of any order: .     "
},
{
  "id": "sec_4_2-3-8",
  "level": "2",
  "url": "sec_4_2.html#sec_4_2-3-8",
  "type": "Example",
  "number": "4.2.3",
  "title": "",
  "body": "  Find all (real) roots specified below and write them in terms of radicals.   All roots of order of   All roots of order of   All roots of order of   All roots of order of        We are looking for all numbers such that . The order, , is even. Hence, we have two roots, one positive and one negative. The positive root is denoted by and the two roots are: The positive number whose th power is is . That is: Hence, the two roots of order of are and . Indeed, .     has two roots of order : and . We cannot easily guess them as they are not integers. We can use our calculator, though, and calculate . The two roots are then approximately and .    The order, , is odd. Hence, there is only one root of order of denoted as . As , we have     A negative number has no roots of even orders and is even. Hence, no roots.     "
},
{
  "id": "sec_4_2-3-10",
  "level": "2",
  "url": "sec_4_2.html#sec_4_2-3-10",
  "type": "Example",
  "number": "4.2.4",
  "title": "",
  "body": "  Solve for . Find all (real) solutions and give their exact as well as approximate values.                            We add to both sides of the equation and then divide both sides by to obtain Solutions to the equation are roots of order of . There are two such roots:     We divide both sides of the equation by and obtain: There is one cube root of . Hence, our equation has one solution:     We subtract from both sides of the equation, then divide by . The equation becomes: We are looking for all roots of order of . As is even, we have two such roots:     We begin by solving for . Subtract from both sides and divide both sides by : Hence, is a root of order 2 of 4. There are two such roots: This gives and . We solve each of the two equations for and obtain two solutions:      "
},
{
  "id": "sec_4_2-3-12",
  "level": "2",
  "url": "sec_4_2.html#sec_4_2-3-12",
  "type": "Theorem",
  "number": "4.2.5",
  "title": "Properties of Radicals.",
  "body": " Properties of Radicals   Let , be given numbers. Let , be positive integers. Then the following equalities hold provided that the roots involved exist, and both sides are defined:                    if is even     if is odd     "
},
{
  "id": "sec_4_2-4-2",
  "level": "2",
  "url": "sec_4_2.html#sec_4_2-4-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "integer "
},
{
  "id": "sec_4_2-4-4",
  "level": "2",
  "url": "sec_4_2.html#sec_4_2-4-4",
  "type": "Definition",
  "number": "4.2.6",
  "title": "",
  "body": "  Let be a given number and let and be positive integers. Assume that exists. We define:      "
},
{
  "id": "sec_4_2-4-7",
  "level": "2",
  "url": "sec_4_2.html#sec_4_2-4-7",
  "type": "Example",
  "number": "4.2.7",
  "title": "",
  "body": "  Find:                      By definition . Note that is the positive of the two square roots of as is .   is undefined. An even-order root of a negative number is undefined. Hence, is undefined.   .   .    .     Depending on your calculator, it may be easier to calculate a fractional power than to enter the corresponding radical. You can simply enter 1700^(1\/20) . Be sure to use parentheses!   "
},
{
  "id": "sec_4_2-4-9",
  "level": "2",
  "url": "sec_4_2.html#sec_4_2-4-9",
  "type": "Theorem",
  "number": "4.2.8",
  "title": "Rules of Exponents — Arbitrary Exponents.",
  "body": " Rules of Exponents Arbitrary Exponents   Let , be given positive numbers, and be real numbers. Then the following equalities hold:                          "
},
{
  "id": "sec_4_2-4-10",
  "level": "2",
  "url": "sec_4_2.html#sec_4_2-4-10",
  "type": "Example",
  "number": "4.2.9",
  "title": "",
  "body": "  Rewrite each of the following expressions as a power of 5; that is, in the form for some .                            By definition of fractional powers:     By definition of fractional powers and :     Note that . Using and :     Note that . Using Rules of Exponents we get:      "
},
{
  "id": "sec_4_2-4-11",
  "level": "2",
  "url": "sec_4_2.html#sec_4_2-4-11",
  "type": "Example",
  "number": "4.2.10",
  "title": "",
  "body": "  Use Rules of Exponents to simplify the following. Write your answers in terms of powers and not radicals. Assume , , , and are all positive.                                 By computing first, then we have .         We have , , , . Therefore,      "
},
{
  "id": "ex_4_2-1-3",
  "level": "2",
  "url": "sec_4_2.html#ex_4_2-1-3",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "        and    "
},
{
  "id": "ex_4_2-1-4",
  "level": "2",
  "url": "sec_4_2.html#ex_4_2-1-4",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "        and    "
},
{
  "id": "ex_4_2-1-5",
  "level": "2",
  "url": "sec_4_2.html#ex_4_2-1-5",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "           "
},
{
  "id": "ex_4_2-1-6",
  "level": "2",
  "url": "sec_4_2.html#ex_4_2-1-6",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "       No real solutions.   "
},
{
  "id": "ex_4_2-1-7",
  "level": "2",
  "url": "sec_4_2.html#ex_4_2-1-7",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "        and    "
},
{
  "id": "ex_4_2-1-8",
  "level": "2",
  "url": "sec_4_2.html#ex_4_2-1-8",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "           "
},
{
  "id": "ex_4_2-2-3",
  "level": "2",
  "url": "sec_4_2.html#ex_4_2-2-3",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "           "
},
{
  "id": "ex_4_2-2-4",
  "level": "2",
  "url": "sec_4_2.html#ex_4_2-2-4",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "           "
},
{
  "id": "ex_4_2-2-5",
  "level": "2",
  "url": "sec_4_2.html#ex_4_2-2-5",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "           "
},
{
  "id": "ex_4_2-2-6",
  "level": "2",
  "url": "sec_4_2.html#ex_4_2-2-6",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "           "
},
{
  "id": "ex_4_2-3-3",
  "level": "2",
  "url": "sec_4_2.html#ex_4_2-3-3",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "       Cannot be simplified.   "
},
{
  "id": "ex_4_2-3-4",
  "level": "2",
  "url": "sec_4_2.html#ex_4_2-3-4",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "           "
},
{
  "id": "ex_4_2-3-5",
  "level": "2",
  "url": "sec_4_2.html#ex_4_2-3-5",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": "           "
},
{
  "id": "ex_4_2-3-6",
  "level": "2",
  "url": "sec_4_2.html#ex_4_2-3-6",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": "       Cannot be simplified.   "
},
{
  "id": "sec_4_3",
  "level": "1",
  "url": "sec_4_3.html",
  "type": "Section",
  "number": "4.3",
  "title": "Power Functions: Positive Integral Exponents",
  "body": " Power Functions: Positive Integral Exponents     After completing this section, you should be able to do the following.     First objective.    Second objective.    Third objective.     In the next two sections we look at the properties and the graphs of the so-called power functions.   Power Function   A function is called a power function if can be expressed in the form: where and are constants and . The constant is called the coefficient of the power function and is called the exponent .     Note: When depends on according to the formula we say that is directly proportional (or proportional) to with the coefficient of proportionality If , we say that is inversely proportional to with the coefficient of proportionality . So power functions express proportionality of the dependent variable to powers of the independent variable.  As the title suggests in this section we look at the case when the exponent is a positive integer.    Which of the functions below are power functions? For those which are, rewrite in the standard form . Identify the coefficient and the exponent.                                      The function is a power function. Using Rules of Exponents from Section 4.1, we can rewrite: The coefficient is and the exponent is .     is a power function: The coefficient is and the exponent is .     is a power function as well: The coefficient is and the exponent is .    The function is not a power function. It cannot be rewritten as . The function is a sum of two power functions, and . A function that is a sum of power functions is called a polynomial function.    The function is a power function. Remember that is just a constant. The coefficient is and the exponent is .     is not a power function. Observe that in the base of the power expression is constant and equal to 2. The exponent is a variable. In a power function, it is the other way around: the base is a variable and the exponent is constant.   Functions like where the variable is in the exponent is the topic of discussion in Chapter 5.         A ball dropped from the Empire State Building has traveled down the distance of feet after seconds where:     Is the function a power function? If yes, identify the exponent and the coefficient.    The Empire State Building is ft tall. How long will it take for the ball to hit the ground?         is a power function with and .    The ball will hit the ground when it has traveled feet. That is, for a positive such that: To solve the equation for we divide both sides by : The two solutions to this quadratic equation are: Since has to be positive, then the solution is Hence, the ball will hit the ground after:     Note that in terms of proportionality, we can say that the distance is directly proportional to with the coefficient of proportionality .      Let be the volume of a sphere of radius . We know from elementary geometry that:     Is a power function? If yes, find the coefficient and the exponent.    What radius is required for the volume to be 25 cm ?        Yes, is a power function. The coefficient is and the exponent is .    We are looking for the radius , in centimeters, such that: Dividing both sides by and multiplying by 3, then Now we take the power of both sides (in other words, the cube root) and obtain: Since , then The volume is when the radius is cm.        Graphs of Power Functions: Positive Integral Exponents  Graphs of power functions with exponents that are positive integers are different for even and for odd.   Even Positive Exponents   If is even, then is positive for all except for where . For example, if then , , , , and so on. Hence, the graph of the power function for any even is symmetric about the -axis as .  Here are the graphs of the functions for and . All graphs are U-shaped and reminiscent of the quadratic parabola .   A short description.    The coefficient in , stretches or shrinks the graph of vertically. Additionally, if , the graph is reflected over the -axis.   A short description.     Odd Positive Exponents   If is odd, then is positive for , it is for , and negative for . For example, let . Then , , , , and so on. Hence, the graph of the power function for any odd is symmetric about the origin as .  Here are the graphs of the functions for and . This time, the graphs are S-shaped.   A short description.    The coefficient in , stretches or shrinks the graph of vertically. Additionally, if , the graph is reflected over the -axis.   A short description.    Here is a summary of how graphs of power functions look for positive integer exponents , even and odd, and for coefficients positive and negative.    even  odd    Positive coefficient,   Graph of a representative power function with even exponent and positive coefficient.     Graph of a representative power function with odd exponent and positive coefficient.      Negative coefficient,   Graph of a representative power function with even exponent and negative coefficient.     Graph of a representative power function with odd exponent and negative coefficient.        Power Functions   Determine whether a given function is a power function. If yes, identify the coefficient and the exponent . If not, say so.           ; ;             ; ;            Not a power function.            ; ;            Not a power function.            ; ;       Braking Distance    Braking distance or stopping distance refers to the distance a car will travel from the point when its brakes are fully applied to when it comes to a complete stop http:\/\/hyperphysics.phy-astr.gsu.edu\/hbase\/crstp.html , accessed: 7\/5\/20 . The braking distance is proportional to the square of the car's speed and it depends on the coefficient of friction, , between the tires and the road surface. Let denote distance, in feet, and speed in mph. The formula for the braking distance is: Note that the braking distance does not include a driver's reaction time https:\/\/en.wikipedia.org\/wiki\/Braking_distance , accessed: 7\/5\/20 .     Is the braking distance a power function of speed? If yes, give the coefficient and the exponent . Assume that is a given constant.    Yes; ;       The coefficient of friction under normal conditions when the road is dry is . What is the braking distance of a car that travels on a dry road at mph? What is the braking distance at mph?     feet; feet      By what factor does the braking distance increase when speed doubles?    Factor of .      The coefficient of friction on a wet road is . Calculate the braking distance of a car traveling at mph on a wet road.     feet       Below are the graphs of four power functions where is a positive integer. In each of the graphs, is the exponent even or odd? Is the coefficient positive or negative?    A short description.     A short description.     A short description.     A short description.       From left to right:     is even and is positive.   is odd and is positive.   is odd and is negative.   is even and is negative.        Which of the following is a graph of ?    A short description.     A short description.     A short description.       The graph in the middle.      Which of the following is a graph of ?    A short description.     A short description.     A short description.       The second graph.      Below you see graphs of the functions , , and . Decide which is which.   A short description.      A is ; B is ; C is .      The area, , of a unilateral triangle whose sides have length is given by: Find the side length , in cm, which gives the area equal to . Round off your answer to three decimal places.     cm     "
},
{
  "id": "sec_4_3-2-1",
  "level": "2",
  "url": "sec_4_3.html#sec_4_3-2-1",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  After completing this section, you should be able to do the following.     First objective.    Second objective.    Third objective.    "
},
{
  "id": "sec_4_3-2-3",
  "level": "2",
  "url": "sec_4_3.html#sec_4_3-2-3",
  "type": "Definition",
  "number": "4.3.1",
  "title": "Power Function.",
  "body": " Power Function   A function is called a power function if can be expressed in the form: where and are constants and . The constant is called the coefficient of the power function and is called the exponent .   "
},
{
  "id": "sec_4_3-2-4",
  "level": "2",
  "url": "sec_4_3.html#sec_4_3-2-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Note: directly proportional inversely proportional "
},
{
  "id": "sec_4_3-2-6",
  "level": "2",
  "url": "sec_4_3.html#sec_4_3-2-6",
  "type": "Example",
  "number": "4.3.2",
  "title": "",
  "body": "  Which of the functions below are power functions? For those which are, rewrite in the standard form . Identify the coefficient and the exponent.                                      The function is a power function. Using Rules of Exponents from Section 4.1, we can rewrite: The coefficient is and the exponent is .     is a power function: The coefficient is and the exponent is .     is a power function as well: The coefficient is and the exponent is .    The function is not a power function. It cannot be rewritten as . The function is a sum of two power functions, and . A function that is a sum of power functions is called a polynomial function.    The function is a power function. Remember that is just a constant. The coefficient is and the exponent is .     is not a power function. Observe that in the base of the power expression is constant and equal to 2. The exponent is a variable. In a power function, it is the other way around: the base is a variable and the exponent is constant.   Functions like where the variable is in the exponent is the topic of discussion in Chapter 5.      "
},
{
  "id": "sec_4_3-2-7",
  "level": "2",
  "url": "sec_4_3.html#sec_4_3-2-7",
  "type": "Example",
  "number": "4.3.3",
  "title": "",
  "body": "  A ball dropped from the Empire State Building has traveled down the distance of feet after seconds where:     Is the function a power function? If yes, identify the exponent and the coefficient.    The Empire State Building is ft tall. How long will it take for the ball to hit the ground?         is a power function with and .    The ball will hit the ground when it has traveled feet. That is, for a positive such that: To solve the equation for we divide both sides by : The two solutions to this quadratic equation are: Since has to be positive, then the solution is Hence, the ball will hit the ground after:     Note that in terms of proportionality, we can say that the distance is directly proportional to with the coefficient of proportionality .   "
},
{
  "id": "sec_4_3-2-8",
  "level": "2",
  "url": "sec_4_3.html#sec_4_3-2-8",
  "type": "Example",
  "number": "4.3.4",
  "title": "",
  "body": "  Let be the volume of a sphere of radius . We know from elementary geometry that:     Is a power function? If yes, find the coefficient and the exponent.    What radius is required for the volume to be 25 cm ?        Yes, is a power function. The coefficient is and the exponent is .    We are looking for the radius , in centimeters, such that: Dividing both sides by and multiplying by 3, then Now we take the power of both sides (in other words, the cube root) and obtain: Since , then The volume is when the radius is cm.     "
},
{
  "id": "sec_4_3-3-3",
  "level": "2",
  "url": "sec_4_3.html#sec_4_3-3-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Even Positive Exponents "
},
{
  "id": "sec_4_3-3-9",
  "level": "2",
  "url": "sec_4_3.html#sec_4_3-3-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Odd Positive Exponents "
},
{
  "id": "ex_4_3-1-3",
  "level": "2",
  "url": "sec_4_3.html#ex_4_3-1-3",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "        ; ;    "
},
{
  "id": "ex_4_3-1-4",
  "level": "2",
  "url": "sec_4_3.html#ex_4_3-1-4",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "        ; ;    "
},
{
  "id": "ex_4_3-1-5",
  "level": "2",
  "url": "sec_4_3.html#ex_4_3-1-5",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "       Not a power function.   "
},
{
  "id": "ex_4_3-1-6",
  "level": "2",
  "url": "sec_4_3.html#ex_4_3-1-6",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "        ; ;    "
},
{
  "id": "ex_4_3-1-7",
  "level": "2",
  "url": "sec_4_3.html#ex_4_3-1-7",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "       Not a power function.   "
},
{
  "id": "ex_4_3-1-8",
  "level": "2",
  "url": "sec_4_3.html#ex_4_3-1-8",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "        ; ;    "
},
{
  "id": "ex_4_3-2-3",
  "level": "2",
  "url": "sec_4_3.html#ex_4_3-2-3",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "  Is the braking distance a power function of speed? If yes, give the coefficient and the exponent . Assume that is a given constant.    Yes; ;    "
},
{
  "id": "ex_4_3-2-4",
  "level": "2",
  "url": "sec_4_3.html#ex_4_3-2-4",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "  The coefficient of friction under normal conditions when the road is dry is . What is the braking distance of a car that travels on a dry road at mph? What is the braking distance at mph?     feet; feet   "
},
{
  "id": "ex_4_3-2-5",
  "level": "2",
  "url": "sec_4_3.html#ex_4_3-2-5",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "  By what factor does the braking distance increase when speed doubles?    Factor of .   "
},
{
  "id": "ex_4_3-2-6",
  "level": "2",
  "url": "sec_4_3.html#ex_4_3-2-6",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "  The coefficient of friction on a wet road is . Calculate the braking distance of a car traveling at mph on a wet road.     feet   "
},
{
  "id": "ex_4_3-3",
  "level": "2",
  "url": "sec_4_3.html#ex_4_3-3",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "  Below are the graphs of four power functions where is a positive integer. In each of the graphs, is the exponent even or odd? Is the coefficient positive or negative?    A short description.     A short description.     A short description.     A short description.       From left to right:     is even and is positive.   is odd and is positive.   is odd and is negative.   is even and is negative.     "
},
{
  "id": "ex_4_3-4",
  "level": "2",
  "url": "sec_4_3.html#ex_4_3-4",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "  Which of the following is a graph of ?    A short description.     A short description.     A short description.       The graph in the middle.   "
},
{
  "id": "ex_4_3-5",
  "level": "2",
  "url": "sec_4_3.html#ex_4_3-5",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": "  Which of the following is a graph of ?    A short description.     A short description.     A short description.       The second graph.   "
},
{
  "id": "ex_4_3-6",
  "level": "2",
  "url": "sec_4_3.html#ex_4_3-6",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": "  Below you see graphs of the functions , , and . Decide which is which.   A short description.      A is ; B is ; C is .   "
},
{
  "id": "ex_4_3-7",
  "level": "2",
  "url": "sec_4_3.html#ex_4_3-7",
  "type": "Exercise",
  "number": "15",
  "title": "",
  "body": "  The area, , of a unilateral triangle whose sides have length is given by: Find the side length , in cm, which gives the area equal to . Round off your answer to three decimal places.     cm   "
},
{
  "id": "sec_4_4",
  "level": "1",
  "url": "sec_4_4.html",
  "type": "Section",
  "number": "4.4",
  "title": "Power Functions: Fractional and Negative Integral Exponents",
  "body": " Power Functions: Fractional and Negative Integral Exponents     After completing this section, you should be able to do the following.     First objective.    Second objective.    Third objective.     In the previous section, we considered power functions in the case when is a positive integer. When is a negative integer, power functions behave quite differently.    Negative Integral Exponents  Consider a power function in the case when the exponent is a negative integer. The behavior and graphs of such functions are very different from the behavior of power functions for positive integral exponents.  A negative exponent means the reciprocal . So now the independent variable is in the denominator. The domain of a power function in this case is no longer the set of all real numbers as cannot be .  As we will soon see, the graphs of power functions with exponents that are negative integers look very differently than in the case of positive integral exponents.    Which of the functions below are power functions? Rewrite those which are in standard form . Identify the coefficient and the exponent.                       The function is a power function. Using Rules of Exponents from Section 4.1, we can rewrite: The coefficient is and the exponent is .     is a power function: The coefficient is and the exponent is .     is not a power function. Using rules of exponents for arbitrary exponents, we can rewrite: The function is not a power function. Indeed, the base of the power expression is constant at , meanwhile the exponent varies.        Body mass index (BMI) is an easy screening method for weight category underweight, healthy weight, overweight, and obesity. BMI is calculated as follows:   A person who weighs 170 lb may be underweight or obese it depends on the person's height. Let denote body mass index of a person who weighs 170 lb and whose height is . Then, according to the formula, Note that with the weight fixed at 170 lb, body mass index is a power function of height: . (In terms of proportionality, BMI is inversely proportional to the square of height.) The obese category is defined as BMI of 30.0 or above. The normal weight category corresponds to BMI between 18.5 and 24.9.  Find the height at and below which a person weighing 170 lb is obese.    We want to find such that : After multiplying both sides by and dividing by 30, then which gives: Since in our problem has to be positive, the solution is: At the height inches and below a person weighing 170 lb is obese.  Note that when increases decreases as the denominator of the expression becomes larger. On the other hand, when gets smaller, gets larger. Hence, every person shorter than inches who weighs 170 lb is also obese.      Graphs of Power Functions: Negative Integral Exponents  Graphs of power functions with exponents that are negative integers have a different shape depending on whether is even or is odd.   Odd Negative Exponents   Let's begin with the case and . The graph of the function looks as follows:   A short description.    Observe that when gets larger and larger, say: the values become very close to 0. Indeed, they are:   In terms of the graph, this behavior translates to the graph getting very close, arbitrarily close, to the -axis. We say that the -axis, or equivalently the horizontal line , is a horizontal asymptote of the function .  Observe that as is getting close to 0 from the right, the values are becoming very large. Let's test a few positive inputs close to 0: The corresponding values are: In terms of the graph, this behavior translates to the graph getting very close to the -axis with the values of the function becoming arbitrarily large. We say that the -axis, or equivalently the vertical line , is a vertical asymptote of the function .  The portion of the graph corresponding to negative inputs , is symmetric about the origin to the portion of the graph corresponding to positive inputs. Indeed, when changes sign changes sign:   Graphs of other power functions in which the exponent is an odd negative integer have a similar shape to the graph of . For example:   A short description.    As always, the coefficient in stretches or shrinks the graph of vertically. Additionally, if is negative, the graph is reflected about the -axis.    A short description.     A short description.      Even Negative Exponents   When is a negative even integer, the graph of is entirely above the -axis and it is symmetric about the -axis, since when is even.   A short description.    The graphs of the functions for other even negative integers have a similar shape:   A short description.    The -axis is still a horizontal asymptote and the -axis is a vertical asymptote. The coefficient is responsible for vertical scaling and a reflection about the -axis if is negative. For example:   A short description.     Summary   Here is a summary of how graphs of power functions look for negative integer exponents , even and odd, and for coefficients positive and negative.    even and negative  odd and negative    Positive coefficient,   Graph of a representative power function with even negative exponent and positive coefficient.     Graph of a representative power function with odd negative exponent and positive coefficient.      Negative coefficient,   Graph of a representative power function with even negative exponent and negative coefficient.     Graph of a representative power function with odd negative exponent and negative coefficient.       Fractional Exponents    Which of the functions below are power functions? Those which are, rewrite in standard form . Identify the coefficient and the exponent.                       The function is a power function. Using rules of exponents for arbitrary exponents, we can rewrite: The coefficient is and the exponent is .     is a power function: The coefficient is and the exponent is .     is a power function as well. Using rules of exponents for arbitrary exponents and properties of the square root, we can rewrite:     The coefficient is and the exponent is .        Body surface area (BSA) is the total surface area of the human body. The body surface area is used in many measurements in medicine, including the calculation of drug dosages and the amount of fluids to be administered intravenously. There are several accepted formulas to calculate BSA. One of the most commonly used is the Du Bois formula: where is weight in kilograms (kg) and is height in centimeters (cm). The formula gives BSA in square meters, .    Calculate BSA of a female who stands 158 cm tall and weighs 60 kg. Give units with your answer.    Let weight be fixed at 70 kg. Then BSA depends on height only— with weight fixed at 70, BSA is a function of only. Denote this function by . Find a formula for . Is it a power function? If yes, identify the coefficient and the exponent.    Use your formula for to calculate BSA for a female that weighs 70 kg and is 158 cm tall. Give units with your answer.        We want to calculate BSA for and . We substitute the values into the Du Bois formula: The total body surface area of a person who weighs kg and is cm tall is .    Fix . Then BSA as a function of is:  is a power function of with the coefficient and exponent .    BSA of a female who weighs kg and is cm tall is . The total body surface area of a person who weighs kg and is cm tall is .        Graphs of Power Functions: Fractional Exponents  When considering power functions with fractional exponents or, more general, with exponents which are not integers, we restrict the domain to (or to if a non-integral exponent is negative). The graphs of and are given below as an example. Traditionally, roots of odd orders like or are considered and graphed for all .    A short description.     A short description.        Power Functions   Determine whether the given function is a power function. If yes, identify the coefficient and the exponent . If not, say so.           ; ;             ; ;             ; ;            Not a power function.            ; ;            Not a power function.       Four power functions are graphed below, where is a negative integer. In each of the graphs, is the exponent even or odd? Is the coefficient positive or negative?    A short description.     A short description.     A short description.     A short description.       From left to right:    is odd; is positive.  is even; is negative.  is odd; is negative.  is even; is positive.        Which of the following is a graph of ?    A short description.     A short description.     A short description.       The graph on the right.      Which of the following is a graph of ?    A short description.     A short description.     A short description.       The graph on the left.      Below you see graphs of the functions , , and . Decide which is which.   A short description.      Graph A is , graph B is , and graph C is .      Find a formula for a power function given numerically by:                                Find a formula for a power function given numerically by:               undefined                  Consider a pendulum depicted below Modified from a public domain image at https:\/\/en.wikipedia.org\/wiki\/Pendulum , accessed: 7\/8\/20 .   A short description.   When the pendulum is displaced sideways from its resting position called the equilibrium position the force due to gravity will cause the pendulum to oscillate back and forth about the equilibrium position. The time, , needed to execute one full cycle a left swing and the right swing is called the pendulum's period. The period depends on the length of the pendulum https:\/\/en.wikipedia.org\/wiki\/Pendulum , accessed: 7\/8\/20 and the local acceleration due to gravity :    With fixed, is a power function of ? In other words, is ? If yes, find the coefficient and the exponent.  On the surface of the Earth, the acceleration due to gravity, , is equal to where m stands for meters. Calculate the period of a pendulum of length that happily oscillates in Kingston, RI.  An astronaut is standing on the surface of a faraway asteroid wondering about the acceleration due to gravity on the asteroid. The astronaut has a watch and a pendulum whose length is . The astronaut measures the period of the pendulum which turns out to be seconds. What is the acceleration due to gravity on the asteroid?        yes; where the coefficient is and the exponent is .   approximately seconds.  approximately .       "
},
{
  "id": "sec_4_4-2-1",
  "level": "2",
  "url": "sec_4_4.html#sec_4_4-2-1",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  After completing this section, you should be able to do the following.     First objective.    Second objective.    Third objective.    "
},
{
  "id": "sec_4_4-3-5",
  "level": "2",
  "url": "sec_4_4.html#sec_4_4-3-5",
  "type": "Example",
  "number": "4.4.1",
  "title": "",
  "body": "  Which of the functions below are power functions? Rewrite those which are in standard form . Identify the coefficient and the exponent.                       The function is a power function. Using Rules of Exponents from Section 4.1, we can rewrite: The coefficient is and the exponent is .     is a power function: The coefficient is and the exponent is .     is not a power function. Using rules of exponents for arbitrary exponents, we can rewrite: The function is not a power function. Indeed, the base of the power expression is constant at , meanwhile the exponent varies.     "
},
{
  "id": "sec_4_4-3-6",
  "level": "2",
  "url": "sec_4_4.html#sec_4_4-3-6",
  "type": "Example",
  "number": "4.4.2",
  "title": "",
  "body": "  Body mass index (BMI) is an easy screening method for weight category underweight, healthy weight, overweight, and obesity. BMI is calculated as follows:   A person who weighs 170 lb may be underweight or obese it depends on the person's height. Let denote body mass index of a person who weighs 170 lb and whose height is . Then, according to the formula, Note that with the weight fixed at 170 lb, body mass index is a power function of height: . (In terms of proportionality, BMI is inversely proportional to the square of height.) The obese category is defined as BMI of 30.0 or above. The normal weight category corresponds to BMI between 18.5 and 24.9.  Find the height at and below which a person weighing 170 lb is obese.    We want to find such that : After multiplying both sides by and dividing by 30, then which gives: Since in our problem has to be positive, the solution is: At the height inches and below a person weighing 170 lb is obese.  Note that when increases decreases as the denominator of the expression becomes larger. On the other hand, when gets smaller, gets larger. Hence, every person shorter than inches who weighs 170 lb is also obese.   "
},
{
  "id": "sec_4_4-4-3",
  "level": "2",
  "url": "sec_4_4.html#sec_4_4-4-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Odd Negative Exponents "
},
{
  "id": "sec_4_4-4-7",
  "level": "2",
  "url": "sec_4_4.html#sec_4_4-4-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "horizontal asymptote "
},
{
  "id": "sec_4_4-4-8",
  "level": "2",
  "url": "sec_4_4.html#sec_4_4-4-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vertical asymptote "
},
{
  "id": "sec_4_4-4-14",
  "level": "2",
  "url": "sec_4_4.html#sec_4_4-4-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Even Negative Exponents "
},
{
  "id": "sec_4_4-4-21",
  "level": "2",
  "url": "sec_4_4.html#sec_4_4-4-21",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Summary "
},
{
  "id": "sec_4_4-5-2",
  "level": "2",
  "url": "sec_4_4.html#sec_4_4-5-2",
  "type": "Example",
  "number": "4.4.3",
  "title": "",
  "body": "  Which of the functions below are power functions? Those which are, rewrite in standard form . Identify the coefficient and the exponent.                       The function is a power function. Using rules of exponents for arbitrary exponents, we can rewrite: The coefficient is and the exponent is .     is a power function: The coefficient is and the exponent is .     is a power function as well. Using rules of exponents for arbitrary exponents and properties of the square root, we can rewrite:     The coefficient is and the exponent is .     "
},
{
  "id": "sec_4_4-5-3",
  "level": "2",
  "url": "sec_4_4.html#sec_4_4-5-3",
  "type": "Example",
  "number": "4.4.4",
  "title": "",
  "body": "  Body surface area (BSA) is the total surface area of the human body. The body surface area is used in many measurements in medicine, including the calculation of drug dosages and the amount of fluids to be administered intravenously. There are several accepted formulas to calculate BSA. One of the most commonly used is the Du Bois formula: where is weight in kilograms (kg) and is height in centimeters (cm). The formula gives BSA in square meters, .    Calculate BSA of a female who stands 158 cm tall and weighs 60 kg. Give units with your answer.    Let weight be fixed at 70 kg. Then BSA depends on height only— with weight fixed at 70, BSA is a function of only. Denote this function by . Find a formula for . Is it a power function? If yes, identify the coefficient and the exponent.    Use your formula for to calculate BSA for a female that weighs 70 kg and is 158 cm tall. Give units with your answer.        We want to calculate BSA for and . We substitute the values into the Du Bois formula: The total body surface area of a person who weighs kg and is cm tall is .    Fix . Then BSA as a function of is:  is a power function of with the coefficient and exponent .    BSA of a female who weighs kg and is cm tall is . The total body surface area of a person who weighs kg and is cm tall is .     "
},
{
  "id": "ex_4_4-1-3",
  "level": "2",
  "url": "sec_4_4.html#ex_4_4-1-3",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "        ; ;    "
},
{
  "id": "ex_4_4-1-4",
  "level": "2",
  "url": "sec_4_4.html#ex_4_4-1-4",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "        ; ;    "
},
{
  "id": "ex_4_4-1-5",
  "level": "2",
  "url": "sec_4_4.html#ex_4_4-1-5",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "        ; ;    "
},
{
  "id": "ex_4_4-1-6",
  "level": "2",
  "url": "sec_4_4.html#ex_4_4-1-6",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "       Not a power function.   "
},
{
  "id": "ex_4_4-1-7",
  "level": "2",
  "url": "sec_4_4.html#ex_4_4-1-7",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "        ; ;    "
},
{
  "id": "ex_4_4-1-8",
  "level": "2",
  "url": "sec_4_4.html#ex_4_4-1-8",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "       Not a power function.   "
},
{
  "id": "ex_4_4-2",
  "level": "2",
  "url": "sec_4_4.html#ex_4_4-2",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "  Four power functions are graphed below, where is a negative integer. In each of the graphs, is the exponent even or odd? Is the coefficient positive or negative?    A short description.     A short description.     A short description.     A short description.       From left to right:    is odd; is positive.  is even; is negative.  is odd; is negative.  is even; is positive.     "
},
{
  "id": "ex_4_4-3",
  "level": "2",
  "url": "sec_4_4.html#ex_4_4-3",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "  Which of the following is a graph of ?    A short description.     A short description.     A short description.       The graph on the right.   "
},
{
  "id": "ex_4_4-4",
  "level": "2",
  "url": "sec_4_4.html#ex_4_4-4",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "  Which of the following is a graph of ?    A short description.     A short description.     A short description.       The graph on the left.   "
},
{
  "id": "ex_4_4-5",
  "level": "2",
  "url": "sec_4_4.html#ex_4_4-5",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "  Below you see graphs of the functions , , and . Decide which is which.   A short description.      Graph A is , graph B is , and graph C is .   "
},
{
  "id": "ex_4_4-6",
  "level": "2",
  "url": "sec_4_4.html#ex_4_4-6",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "  Find a formula for a power function given numerically by:                             "
},
{
  "id": "ex_4_4-7",
  "level": "2",
  "url": "sec_4_4.html#ex_4_4-7",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "  Find a formula for a power function given numerically by:               undefined               "
},
{
  "id": "ex_4_4-8",
  "level": "2",
  "url": "sec_4_4.html#ex_4_4-8",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": "  Consider a pendulum depicted below Modified from a public domain image at https:\/\/en.wikipedia.org\/wiki\/Pendulum , accessed: 7\/8\/20 .   A short description.   When the pendulum is displaced sideways from its resting position called the equilibrium position the force due to gravity will cause the pendulum to oscillate back and forth about the equilibrium position. The time, , needed to execute one full cycle a left swing and the right swing is called the pendulum's period. The period depends on the length of the pendulum https:\/\/en.wikipedia.org\/wiki\/Pendulum , accessed: 7\/8\/20 and the local acceleration due to gravity :    With fixed, is a power function of ? In other words, is ? If yes, find the coefficient and the exponent.  On the surface of the Earth, the acceleration due to gravity, , is equal to where m stands for meters. Calculate the period of a pendulum of length that happily oscillates in Kingston, RI.  An astronaut is standing on the surface of a faraway asteroid wondering about the acceleration due to gravity on the asteroid. The astronaut has a watch and a pendulum whose length is . The astronaut measures the period of the pendulum which turns out to be seconds. What is the acceleration due to gravity on the asteroid?        yes; where the coefficient is and the exponent is .   approximately seconds.  approximately .     "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Appendix",
  "number": "A",
  "title": "Selected Solutions",
  "body": " Selected Solutions  "
},
{
  "id": "backmatter-3",
  "level": "1",
  "url": "backmatter-3.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
},
{
  "id": "backmatter-4",
  "level": "1",
  "url": "backmatter-4.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
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
