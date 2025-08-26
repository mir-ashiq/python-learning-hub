import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import AnimatedConcept from '../components/AnimatedConcept'
import PythonPractice from '../components/PythonPractice'
import Quiz from '../components/Quiz'
import BookCarousel from '../components/BookCarousel'

const Unit3Page = () => {
  const functionSteps = [
    {
      code: `def greet():
    print("Hello, World!")`,
      explanation: "We define a function using the 'def' keyword followed by the function name and parentheses. The code block is indented.",
      highlight: "Functions are reusable blocks of code that perform specific tasks."
    },
    {
      code: `def greet():
    print("Hello, World!")

greet()  # Call the function`,
      explanation: "To use a function, we 'call' it by writing its name followed by parentheses. This executes the code inside the function.",
      highlight: "Defining a function doesn't run it - you must call it explicitly."
    },
    {
      code: `def greet(name):
    print(f"Hello, {name}!")

greet("Alice")`,
      explanation: "Functions can accept parameters (inputs). Here, 'name' is a parameter that receives the value 'Alice'.",
      highlight: "Parameters make functions flexible - they can work with different inputs."
    },
    {
      code: `def add_numbers(a, b):
    result = a + b
    return result

sum_value = add_numbers(5, 3)
print(sum_value)`,
      explanation: "The 'return' statement sends a value back from the function. We can store this returned value in a variable.",
      highlight: "return allows functions to produce output that can be used elsewhere."
    }
  ]

  const scopeSteps = [
    {
      code: `x = 10  # Global variable

def show_x():
    print(f"Inside function: {x}")

show_x()
print(f"Outside function: {x}")`,
      explanation: "Global variables are defined outside functions and can be accessed from anywhere in the program.",
      highlight: "Global variables have 'global scope' - they're visible everywhere."
    },
    {
      code: `def create_local():
    y = 20  # Local variable
    print(f"Inside function: {y}")

create_local()
# print(y)  # This would cause an error`,
      explanation: "Local variables are defined inside functions and can only be used within that function.",
      highlight: "Local variables have 'local scope' - they only exist inside their function."
    },
    {
      code: `x = 10  # Global

def modify_global():
    global x
    x = 30  # Modify global variable
    print(f"Modified global x: {x}")

modify_global()
print(f"Global x after function: {x}")`,
      explanation: "To modify a global variable inside a function, use the 'global' keyword to tell Python you want to change the global version.",
      highlight: "Without 'global', Python creates a new local variable instead."
    }
  ]

  const moduleSteps = [
    {
      code: `import math

radius = 5
area = math.pi * radius ** 2
print(f"Area of circle: {area}")`,
      explanation: "The 'import' statement brings in external modules. The math module provides mathematical constants and functions.",
      highlight: "Modules extend Python's capabilities with pre-written code."
    },
    {
      code: `from math import pi, sqrt

radius = 5
area = pi * radius ** 2
diagonal = sqrt(2) * radius
print(f"Area: {area}, Diagonal: {diagonal}")`,
      explanation: "You can import specific items from a module using 'from module import item'. This lets you use them directly.",
      highlight: "'from...import' saves typing but be careful not to import too many items."
    },
    {
      code: `import random

# Generate random numbers
dice_roll = random.randint(1, 6)
coin_flip = random.choice(['heads', 'tails'])
print(f"Dice: {dice_roll}, Coin: {coin_flip}")`,
      explanation: "The random module provides functions for generating random numbers and making random choices.",
      highlight: "Modules like random, math, and datetime are part of Python's standard library."
    }
  ]

  const quizQuestions = [
    {
      question: "What happens when you call a function that has a return statement but you don't store the returned value?",
      options: [
        "The program crashes",
        "The returned value is lost",
        "Python automatically stores it in a variable",
        "The function doesn't execute"
      ],
      correctAnswer: 1,
      explanation: "If you don't store or use the returned value, it's simply discarded. The function still executes normally."
    },
    {
      question: "What's the difference between parameters and arguments?",
      options: [
        "There's no difference",
        "Parameters are in function definition, arguments are the actual values passed",
        "Arguments are in function definition, parameters are the actual values passed",
        "Parameters are for numbers, arguments are for strings"
      ],
      correctAnswer: 1,
      explanation: "Parameters are the variable names in the function definition. Arguments are the actual values you pass when calling the function."
    },
    {
      question: "What does this code output?\n\nx = 5\n\ndef func():\n    x = 10\n    print(x)\n\nfunc()\nprint(x)",
      options: ["10, 10", "5, 5", "10, 5", "5, 10"],
      correctAnswer: 2,
      explanation: "The function creates a local variable x=10, which doesn't affect the global x=5. So it prints 10 inside the function and 5 outside."
    },
    {
      question: "Which import statement allows you to use pi directly without the math prefix?",
      options: [
        "import math",
        "from math import pi",
        "import math.pi",
        "from pi import math"
      ],
      correctAnswer: 1,
      explanation: "'from math import pi' imports pi directly, so you can use 'pi' instead of 'math.pi'."
    }
  ]

  return (
    <>
      <Head>
        <title>Unit 3: Functions & Modules - Learning Hub</title>
        <meta name="description" content="Learn Python functions and modules for better code organization and reusability." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Navigation */}
        <nav className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/unit2" className="flex items-center text-python-blue hover:text-blue-700">
                <ArrowLeft size={20} className="mr-2" />
                Previous: Unit 2
              </Link>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-python-blue rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">🐍</span>
                </div>
                <span className="ml-2 text-xl font-bold text-gray-900">Unit 3: Functions & Modules</span>
              </div>
              <Link href="/unit4" className="flex items-center text-python-blue hover:text-blue-700">
                Next: Unit 4
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Unit Header */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Unit 3: Functions & Modules</h1>
            <p className="text-xl text-gray-600 mb-6">
              Learn to organize code efficiently using functions and explore Python's module system.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                🚀 Intermediate+
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                📚 12 Lessons
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                🧪 18 Exercises
              </span>
              <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                📝 4 Quizzes
              </span>
            </div>
          </div>

          {/* Learning Content */}
          <div className="space-y-8">
            {/* Animated Concept: Functions */}
            <AnimatedConcept
              title="Creating and Using Functions"
              concept="Functions are reusable blocks of code that perform specific tasks. They help organize code and avoid repetition."
              steps={functionSteps}
            />

            {/* Practice Exercise: Calculator Function */}
            <PythonPractice
              title="Practice: Calculator Functions"
              description="Create functions for basic arithmetic operations."
              initialCode={`# Calculator functions
def add(a, b):
    # Add two numbers and return the result
    pass

def multiply(a, b):
    # Multiply two numbers and return the result
    pass

# Test your functions
num1 = 10
num2 = 5

result1 = add(num1, num2)
result2 = multiply(num1, num2)

print(f"{num1} + {num2} = {result1}")
print(f"{num1} * {num2} = {result2}")
`}
              expectedOutput={`10 + 5 = 15
10 * 5 = 50`}
              hints={[
                "Replace 'pass' with the actual operation",
                "Use 'return' to send the result back from the function",
                "For add function: return a + b",
                "For multiply function: return a * b"
              ]}
              solution={`# Calculator functions
def add(a, b):
    # Add two numbers and return the result
    return a + b

def multiply(a, b):
    # Multiply two numbers and return the result
    return a * b

# Test your functions
num1 = 10
num2 = 5

result1 = add(num1, num2)
result2 = multiply(num1, num2)

print(f"{num1} + {num2} = {result1}")
print(f"{num1} * {num2} = {result2}")`}
            />

            {/* Animated Concept: Scope */}
            <AnimatedConcept
              title="Variable Scope: Global vs Local"
              concept="Scope determines where variables can be accessed in your program. Understanding scope prevents common programming errors."
              steps={scopeSteps}
            />

            {/* Practice Exercise: Temperature Converter */}
            <PythonPractice
              title="Practice: Temperature Converter with Default Parameters"
              description="Create functions with default parameters for temperature conversion."
              initialCode={`# Temperature converter with default parameters
def celsius_to_fahrenheit(celsius):
    # Convert Celsius to Fahrenheit
    # Formula: F = (C * 9/5) + 32
    pass

def fahrenheit_to_celsius(fahrenheit):
    # Convert Fahrenheit to Celsius  
    # Formula: C = (F - 32) * 5/9
    pass

def convert_temperature(temp, unit="C"):
    # Convert temperature based on unit
    # If unit is "C", convert to Fahrenheit
    # If unit is "F", convert to Celsius
    if unit == "C":
        # Convert from Celsius to Fahrenheit
        pass
    else:
        # Convert from Fahrenheit to Celsius
        pass

# Test the functions
print(f"25°C = {celsius_to_fahrenheit(25)}°F")
print(f"77°F = {fahrenheit_to_celsius(77)}°C")
print(f"30°C = {convert_temperature(30)}°F")
print(f"86°F = {convert_temperature(86, 'F')}°C")
`}
              expectedOutput={`25°C = 77.0°F
77°F = 25.0°C
30°C = 86.0°F
86°F = 30.0°C`}
              hints={[
                "For Celsius to Fahrenheit: (C * 9/5) + 32",
                "For Fahrenheit to Celsius: (F - 32) * 5/9",
                "Use return statements to send results back",
                "In convert_temperature, call the appropriate conversion function"
              ]}
              solution={`# Temperature converter with default parameters
def celsius_to_fahrenheit(celsius):
    # Convert Celsius to Fahrenheit
    return (celsius * 9/5) + 32

def fahrenheit_to_celsius(fahrenheit):
    # Convert Fahrenheit to Celsius  
    return (fahrenheit - 32) * 5/9

def convert_temperature(temp, unit="C"):
    # Convert temperature based on unit
    if unit == "C":
        # Convert from Celsius to Fahrenheit
        return celsius_to_fahrenheit(temp)
    else:
        # Convert from Fahrenheit to Celsius
        return fahrenheit_to_celsius(temp)

# Test the functions
print(f"25°C = {celsius_to_fahrenheit(25)}°F")
print(f"77°F = {fahrenheit_to_celsius(77)}°C")
print(f"30°C = {convert_temperature(30)}°F")
print(f"86°F = {convert_temperature(86, 'F')}°C")`}
            />

            {/* Animated Concept: Modules */}
            <AnimatedConcept
              title="Working with Modules"
              concept="Modules are files containing Python code that you can use in other programs. They help organize code and provide additional functionality."
              steps={moduleSteps}
            />

            {/* Practice Exercise: Math Operations with Modules */}
            <PythonPractice
              title="Practice: Advanced Math with Modules"
              description="Use the math module to perform advanced mathematical operations."
              initialCode={`# Import necessary items from math module
# You'll need: pi, sqrt, sin, cos, radians

# Calculate area and circumference of a circle
radius = 3

# Area = π * r²
area = 

# Circumference = 2 * π * r  
circumference = 

# Calculate hypotenuse of a right triangle
side_a = 3
side_b = 4
# Hypotenuse = √(a² + b²)
hypotenuse = 

# Calculate sine and cosine of 45 degrees
angle_degrees = 45
# Convert to radians first
angle_radians = 
sin_value = 
cos_value = 

print(f"Circle - Area: {area:.2f}, Circumference: {circumference:.2f}")
print(f"Triangle - Hypotenuse: {hypotenuse}")
print(f"45° - Sin: {sin_value:.2f}, Cos: {cos_value:.2f}")
`}
              expectedOutput={`Circle - Area: 28.27, Circumference: 18.85
Triangle - Hypotenuse: 5.0
45° - Sin: 0.71, Cos: 0.71`}
              hints={[
                "Import: from math import pi, sqrt, sin, cos, radians",
                "Area = pi * radius ** 2",
                "Use sqrt() for square root calculations",
                "Convert degrees to radians using radians() function"
              ]}
              solution={`# Import necessary items from math module
from math import pi, sqrt, sin, cos, radians

# Calculate area and circumference of a circle
radius = 3

# Area = π * r²
area = pi * radius ** 2

# Circumference = 2 * π * r  
circumference = 2 * pi * radius

# Calculate hypotenuse of a right triangle
side_a = 3
side_b = 4
# Hypotenuse = √(a² + b²)
hypotenuse = sqrt(side_a ** 2 + side_b ** 2)

# Calculate sine and cosine of 45 degrees
angle_degrees = 45
# Convert to radians first
angle_radians = radians(angle_degrees)
sin_value = sin(angle_radians)
cos_value = cos(angle_radians)

print(f"Circle - Area: {area:.2f}, Circumference: {circumference:.2f}")
print(f"Triangle - Hypotenuse: {hypotenuse}")
print(f"45° - Sin: {sin_value:.2f}, Cos: {cos_value:.2f}")`}
            />

            {/* Book Carousel */}
            <BookCarousel />

            {/* Lambda Functions Concept */}
            <AnimatedConcept
              title="Lambda Functions (Anonymous Functions)"
              concept="Lambda functions are small, anonymous functions that can be defined inline. They're useful for simple operations and functional programming."
              steps={[
                {
                  code: `# Regular function
def square(x):
    return x ** 2

result = square(5)
print(result)`,
                  explanation: "This is a regular function that squares a number. It requires 3 lines to define.",
                  highlight: "Regular functions are good for complex operations."
                },
                {
                  code: `# Lambda function
square = lambda x: x ** 2

result = square(5)
print(result)`,
                  explanation: "This lambda function does the same thing in one line. The syntax is: lambda parameters: expression",
                  highlight: "Lambda functions are concise but limited to single expressions."
                },
                {
                  code: `# Lambda with multiple parameters
add = lambda x, y: x + y
multiply = lambda x, y, z: x * y * z

print(add(3, 4))
print(multiply(2, 3, 4))`,
                  explanation: "Lambda functions can take multiple parameters, just like regular functions.",
                  highlight: "Separate multiple parameters with commas."
                },
                {
                  code: `# Lambda in practice - with map()
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x ** 2, numbers))
print(squared)`,
                  explanation: "Lambda functions are often used with functions like map(), filter(), and sort() for data processing.",
                  highlight: "This squares every number in the list using map() and lambda."
                }
              ]}
            />

            {/* Quiz */}
            <Quiz
              title="Unit 3 Quiz: Functions & Modules"
              questions={quizQuestions}
            />

            {/* Practice Exercise: Function Library */}
            <PythonPractice
              title="Practice: Create a Utility Function Library"
              description="Create a collection of useful utility functions."
              initialCode={`# Utility function library
def is_even(number):
    # Return True if number is even, False otherwise
    pass

def factorial(n):
    # Calculate factorial of n (n! = n * (n-1) * ... * 1)
    # Use a loop or recursion
    pass

def count_vowels(text):
    # Count the number of vowels (a, e, i, o, u) in text
    # Make it case-insensitive
    pass

def find_max(*numbers):
    # Find the maximum number from any number of arguments
    # Use *numbers to accept variable number of arguments
    pass

# Test your functions
print(f"Is 8 even? {is_even(8)}")
print(f"Is 7 even? {is_even(7)}")
print(f"5! = {factorial(5)}")
print(f"Vowels in 'Hello World': {count_vowels('Hello World')}")
print(f"Max of 3, 7, 2, 9, 1: {find_max(3, 7, 2, 9, 1)}")
`}
              expectedOutput={`Is 8 even? True
Is 7 even? False
5! = 120
Vowels in 'Hello World': 3
Max of 3, 7, 2, 9, 1: 9`}
              hints={[
                "Even numbers: use modulo operator (%) to check if remainder is 0",
                "Factorial: multiply numbers from 1 to n",
                "Count vowels: loop through text and check if each character is a vowel",
                "Find max: loop through *numbers and keep track of the largest"
              ]}
              solution={`# Utility function library
def is_even(number):
    # Return True if number is even, False otherwise
    return number % 2 == 0

def factorial(n):
    # Calculate factorial of n
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result

def count_vowels(text):
    # Count the number of vowels in text
    vowels = "aeiouAEIOU"
    count = 0
    for char in text:
        if char in vowels:
            count += 1
    return count

def find_max(*numbers):
    # Find the maximum number from arguments
    if not numbers:
        return None
    max_num = numbers[0]
    for num in numbers:
        if num > max_num:
            max_num = num
    return max_num

# Test your functions
print(f"Is 8 even? {is_even(8)}")
print(f"Is 7 even? {is_even(7)}")
print(f"5! = {factorial(5)}")
print(f"Vowels in 'Hello World': {count_vowels('Hello World')}")
print(f"Max of 3, 7, 2, 9, 1: {find_max(3, 7, 2, 9, 1)}")`}
            />
          </div>

          {/* Unit Navigation */}
          <div className="bg-white rounded-lg shadow-lg p-6 mt-12">
            <div className="flex justify-between items-center">
              <Link
                href="/unit2"
                className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors"
              >
                <ArrowLeft size={20} />
                Back to Unit 2
              </Link>
              
              <div className="text-center">
                <h3 className="font-semibold text-gray-900">Unit 3 Complete!</h3>
                <p className="text-gray-600">You've mastered functions and modules!</p>
              </div>
              
              <Link
                href="/unit4"
                className="flex items-center gap-2 px-6 py-3 bg-python-blue text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Continue to Unit 4
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Unit3Page