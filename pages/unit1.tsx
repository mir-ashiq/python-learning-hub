import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import AnimatedConcept from '../components/AnimatedConcept'
import PythonPractice from '../components/PythonPractice'
import Quiz from '../components/Quiz'
import ProgressTracker from '../components/ProgressTracker'

const Unit1Page = () => {
  const variableSteps = [
    {
      code: `# Variables in Python
name = "Alice"`,
      explanation: "We create a variable called 'name' and assign it the string value 'Alice'. In Python, we don't need to declare variable types.",
      highlight: "Variables are containers for storing data values."
    },
    {
      code: `# Variables in Python
name = "Alice"
age = 25`,
      explanation: "Now we create another variable 'age' and assign it the integer value 25. Python automatically determines the data type.",
      highlight: "Python is dynamically typed - it figures out the type automatically."
    },
    {
      code: `# Variables in Python
name = "Alice"
age = 25
print(name)`,
      explanation: "We use the print() function to display the value stored in the 'name' variable. This will output: Alice",
      highlight: "The print() function displays values on the screen."
    },
    {
      code: `# Variables in Python
name = "Alice"
age = 25
print(name)
print(f"Hello, {name}! You are {age} years old.")`,
      explanation: "Here we use an f-string (formatted string literal) to combine variables with text. The f before the quotes makes it a formatted string.",
      highlight: "F-strings are a modern way to format strings in Python."
    }
  ]

  const quizQuestions = [
    {
      question: "Which of the following is a valid variable name in Python?",
      options: ["my_variable", "2variable", "my-variable", "my variable"],
      correctAnswer: 0,
      explanation: "Variable names can contain letters, numbers, and underscores, but cannot start with a number or contain spaces or hyphens."
    },
    {
      question: "What will print(type(42)) output?",
      options: ["<class 'str'>", "<class 'int'>", "<class 'float'>", "<class 'number'>"],
      correctAnswer: 1,
      explanation: "42 is an integer in Python, so type(42) returns <class 'int'>."
    },
    {
      question: "Which operator is used for exponentiation in Python?",
      options: ["^", "**", "pow", "exp"],
      correctAnswer: 1,
      explanation: "The ** operator is used for exponentiation in Python. For example, 2**3 equals 8."
    }
  ]

  return (
    <>
      <Head>
        <title>Unit 1: Python Fundamentals - Learning Hub</title>
        <meta name="description" content="Learn Python fundamentals including variables, data types, and basic operations." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Navigation */}
        <nav className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/syllabus" className="flex items-center text-python-blue hover:text-blue-700">
                <ArrowLeft size={20} className="mr-2" />
                Back to Syllabus
              </Link>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-python-blue rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">🐍</span>
                </div>
                <span className="ml-2 text-xl font-bold text-gray-900">Unit 1: Python Fundamentals</span>
              </div>
              <Link href="/unit2" className="flex items-center text-python-blue hover:text-blue-700">
                Next: Unit 2
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Unit Header */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Unit 1: Python Fundamentals</h1>
            <p className="text-xl text-gray-600 mb-6">
              Get started with Python basics, understand core concepts, and write your first programs.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                ✅ Beginner Friendly
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                📚 8 Lessons
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                🧪 12 Exercises
              </span>
              <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                📝 3 Quizzes
              </span>
            </div>
          </div>

          {/* Progress Tracker */}
          <ProgressTracker />

          {/* Learning Content */}
          <div className="space-y-8">
            {/* Animated Concept: Variables */}
            <AnimatedConcept
              title="Understanding Variables and Data Types"
              concept="Variables are like labeled containers that store data. Python automatically determines what type of data you're storing."
              steps={variableSteps}
            />

            {/* Practice Exercise */}
            <PythonPractice
              title="Practice: Create Your First Variables"
              description="Create variables to store your personal information and print a greeting message."
              initialCode={`# Create variables for your information
name = ""  # Your name here
age = 0    # Your age here

# Print a greeting message
`}
              expectedOutput="Hello, my name is John and I am 25 years old."
              hints={[
                "Assign your name as a string (in quotes) to the name variable",
                "Assign your age as a number (no quotes) to the age variable",
                "Use print() to display a message with your variables",
                "You can use f-strings like f'Hello, my name is {name}'"
              ]}
              solution={`# Create variables for your information
name = "John"  # Your name here
age = 25       # Your age here

# Print a greeting message
print(f"Hello, my name is {name} and I am {age} years old.")`}
            />

            {/* Data Types Concept */}
            <AnimatedConcept
              title="Python Data Types"
              concept="Python has several built-in data types. The most common ones are strings (text), integers (whole numbers), floats (decimal numbers), and booleans (True/False)."
              steps={[
                {
                  code: `# String (text)
message = "Hello, World!"
print(type(message))`,
                  explanation: "Strings are sequences of characters enclosed in quotes. They represent text data.",
                  highlight: "Strings can use single quotes '' or double quotes \"\"."
                },
                {
                  code: `# Integer (whole number)
age = 25
print(type(age))`,
                  explanation: "Integers are whole numbers without decimal points. They can be positive or negative.",
                  highlight: "Python can handle very large integers automatically."
                },
                {
                  code: `# Float (decimal number)
height = 5.8
print(type(height))`,
                  explanation: "Floats are numbers with decimal points. They're used for precise calculations.",
                  highlight: "Even 5.0 is considered a float because of the decimal point."
                },
                {
                  code: `# Boolean (True/False)
is_student = True
print(type(is_student))`,
                  explanation: "Booleans represent True or False values. They're essential for making decisions in code.",
                  highlight: "Boolean values must be capitalized: True and False."
                }
              ]}
            />

            {/* Operators Practice */}
            <PythonPractice
              title="Practice: Working with Numbers and Operators"
              description="Practice using arithmetic operators to perform calculations."
              initialCode={`# Calculate the area of a rectangle
length = 10
width = 5

# Calculate area and perimeter
area = 
perimeter = 

print(f"Area: {area}")
print(f"Perimeter: {perimeter}")
`}
              expectedOutput={`Area: 50
Perimeter: 30`}
              hints={[
                "Area of rectangle = length × width",
                "Perimeter of rectangle = 2 × (length + width)",
                "Use * for multiplication and + for addition",
                "Remember to use parentheses for proper order of operations"
              ]}
              solution={`# Calculate the area of a rectangle
length = 10
width = 5

# Calculate area and perimeter
area = length * width
perimeter = 2 * (length + width)

print(f"Area: {area}")
print(f"Perimeter: {perimeter}")`}
            />

            {/* Input/Output Concept */}
            <AnimatedConcept
              title="Getting User Input"
              concept="The input() function allows your program to interact with users by accepting their input. All input is received as a string."
              steps={[
                {
                  code: `# Getting user input
name = input("What's your name? ")`,
                  explanation: "The input() function displays a prompt and waits for the user to type something and press Enter.",
                  highlight: "The text in parentheses is the prompt shown to the user."
                },
                {
                  code: `# Getting user input
name = input("What's your name? ")
print(f"Hello, {name}!")`,
                  explanation: "We can immediately use the input to create a personalized greeting.",
                  highlight: "Input is always received as a string, even if the user types numbers."
                },
                {
                  code: `# Converting input to numbers
age_str = input("What's your age? ")
age = int(age_str)
print(f"Next year you'll be {age + 1}")`,
                  explanation: "To use input as a number, we need to convert it using int() for integers or float() for decimals.",
                  highlight: "int() converts strings to integers, float() converts to decimal numbers."
                }
              ]}
            />

            {/* Quiz */}
            <Quiz
              title="Unit 1 Quiz: Python Fundamentals"
              questions={quizQuestions}
            />

            {/* String Methods Practice */}
            <PythonPractice
              title="Practice: String Manipulation"
              description="Practice working with strings and their methods."
              initialCode={`# String manipulation
text = "  Python Programming  "

# Remove extra spaces and convert to uppercase
cleaned_text = 
upper_text = 

print(f"Original: '{text}'")
print(f"Cleaned: '{cleaned_text}'")
print(f"Uppercase: '{upper_text}'")
`}
              expectedOutput={`Original: '  Python Programming  '
Cleaned: 'Python Programming'
Uppercase: 'PYTHON PROGRAMMING'`}
              hints={[
                "Use .strip() to remove spaces from beginning and end",
                "Use .upper() to convert to uppercase",
                "You can chain methods like text.strip().upper()",
                "Remember to assign the result to variables"
              ]}
              solution={`# String manipulation
text = "  Python Programming  "

# Remove extra spaces and convert to uppercase
cleaned_text = text.strip()
upper_text = cleaned_text.upper()

print(f"Original: '{text}'")
print(f"Cleaned: '{cleaned_text}'")
print(f"Uppercase: '{upper_text}'")`}
            />
          </div>

          {/* Unit Navigation */}
          <div className="bg-white rounded-lg shadow-lg p-6 mt-12">
            <div className="flex justify-between items-center">
              <Link
                href="/syllabus"
                className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors"
              >
                <ArrowLeft size={20} />
                Back to Syllabus
              </Link>
              
              <div className="text-center">
                <h3 className="font-semibold text-gray-900">Unit 1 Complete!</h3>
                <p className="text-gray-600">Ready for the next challenge?</p>
              </div>
              
              <Link
                href="/unit2"
                className="flex items-center gap-2 px-6 py-3 bg-python-blue text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Continue to Unit 2
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Unit1Page