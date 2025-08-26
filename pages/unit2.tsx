import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import AnimatedConcept from '../components/AnimatedConcept'
import PythonPractice from '../components/PythonPractice'
import Quiz from '../components/Quiz'
import VisualizationLab from '../components/VisualizationLab'

const Unit2Page = () => {
  const conditionalSteps = [
    {
      code: `age = 18
if age >= 18:
    print("You can vote!")`,
      explanation: "The if statement checks a condition. If the condition is True, the indented code block executes.",
      highlight: "Indentation is crucial in Python - it defines code blocks."
    },
    {
      code: `age = 16
if age >= 18:
    print("You can vote!")
else:
    print("You cannot vote yet.")`,
      explanation: "The else statement provides an alternative when the if condition is False.",
      highlight: "else runs when the if condition is not met."
    },
    {
      code: `age = 16
if age >= 18:
    print("You can vote!")
elif age >= 16:
    print("You can get a driver's license!")
else:
    print("You're still young!")`,
      explanation: "elif (else if) allows you to check multiple conditions in sequence.",
      highlight: "Python checks conditions from top to bottom, stopping at the first True condition."
    },
    {
      code: `age = 16
if age >= 18:
    print("You can vote!")
elif age >= 16:
    print("You can get a driver's license!")
else:
    print("You're still young!")
    
print("This always runs")`,
      explanation: "Code after the if-elif-else block always runs, regardless of which condition was true.",
      highlight: "Only the indented code is part of the conditional block."
    }
  ]

  const loopSteps = [
    {
      code: `for i in range(3):
    print(f"Count: {i}")`,
      explanation: "A for loop repeats code a specific number of times. range(3) creates numbers 0, 1, 2.",
      highlight: "range() starts at 0 by default and stops before the given number."
    },
    {
      code: `for i in range(1, 4):
    print(f"Count: {i}")`,
      explanation: "range(1, 4) creates numbers starting from 1 up to (but not including) 4: 1, 2, 3.",
      highlight: "range(start, stop) goes from start to stop-1."
    },
    {
      code: `fruits = ["apple", "banana", "orange"]
for fruit in fruits:
    print(f"I like {fruit}")`,
      explanation: "For loops can iterate over lists. Each item in the list is assigned to the loop variable.",
      highlight: "This is called iteration - going through each item one by one."
    },
    {
      code: `count = 0
while count < 3:
    print(f"Count: {count}")
    count += 1`,
      explanation: "While loops repeat as long as a condition is True. We must update the condition variable to avoid infinite loops.",
      highlight: "Always make sure the condition will eventually become False!"
    }
  ]

  const quizQuestions = [
    {
      question: "What will this code print?\n\nx = 5\nif x > 3:\n    print('A')\nelif x > 1:\n    print('B')\nelse:\n    print('C')",
      options: ["A", "B", "C", "A and B"],
      correctAnswer: 0,
      explanation: "Python checks conditions from top to bottom. Since x > 3 is True (5 > 3), it prints 'A' and doesn't check the other conditions."
    },
    {
      question: "How many times will this loop run?\n\nfor i in range(2, 8, 2):",
      options: ["2", "3", "4", "6"],
      correctAnswer: 1,
      explanation: "range(2, 8, 2) generates: 2, 4, 6. That's 3 numbers, so the loop runs 3 times."
    },
    {
      question: "What's the output of range(5)?",
      options: ["1, 2, 3, 4, 5", "0, 1, 2, 3, 4", "0, 1, 2, 3, 4, 5", "5"],
      correctAnswer: 1,
      explanation: "range(5) generates numbers from 0 up to (but not including) 5: 0, 1, 2, 3, 4."
    },
    {
      question: "Which operator checks if two values are equal?",
      options: ["=", "==", "!=", "==="],
      correctAnswer: 1,
      explanation: "== is the equality operator for comparison. = is for assignment, != is for 'not equal'."
    }
  ]

  return (
    <>
      <Head>
        <title>Unit 2: Control Structures - Learning Hub</title>
        <meta name="description" content="Learn Python control structures including conditionals, loops, and decision making." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Navigation */}
        <nav className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/unit1" className="flex items-center text-python-blue hover:text-blue-700">
                <ArrowLeft size={20} className="mr-2" />
                Previous: Unit 1
              </Link>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-python-blue rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">🐍</span>
                </div>
                <span className="ml-2 text-xl font-bold text-gray-900">Unit 2: Control Structures</span>
              </div>
              <Link href="/unit3" className="flex items-center text-python-blue hover:text-blue-700">
                Next: Unit 3
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Unit Header */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Unit 2: Control Structures</h1>
            <p className="text-xl text-gray-600 mb-6">
              Master decision making and repetition in programming with conditionals and loops.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                ⚡ Intermediate
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                📚 10 Lessons
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                🧪 15 Exercises
              </span>
              <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                📝 4 Quizzes
              </span>
            </div>
          </div>

          {/* Learning Content */}
          <div className="space-y-8">
            {/* Animated Concept: Conditionals */}
            <AnimatedConcept
              title="Conditional Statements (if, elif, else)"
              concept="Conditional statements allow your program to make decisions based on different conditions. They control the flow of your program."
              steps={conditionalSteps}
            />

            {/* Practice Exercise: Age Category */}
            <PythonPractice
              title="Practice: Age Category Classifier"
              description="Write a program that classifies people into age categories."
              initialCode={`# Age category classifier
age = 25  # You can change this to test different ages

# Write conditional statements to classify the age
# Categories: Child (0-12), Teen (13-19), Adult (20-64), Senior (65+)

`}
              expectedOutput="Adult"
              hints={[
                "Use if, elif, and else statements",
                "Check age ranges: 0-12 for Child, 13-19 for Teen, etc.",
                "Remember that elif conditions are checked in order",
                "Use print() to display the category"
              ]}
              solution={`# Age category classifier
age = 25  # You can change this to test different ages

# Write conditional statements to classify the age
if age <= 12:
    print("Child")
elif age <= 19:
    print("Teen")
elif age <= 64:
    print("Adult")
else:
    print("Senior")`}
            />

            {/* Animated Concept: Loops */}
            <AnimatedConcept
              title="Loops: For and While"
              concept="Loops allow you to repeat code multiple times. For loops are great when you know how many times to repeat, while loops continue until a condition becomes false."
              steps={loopSteps}
            />

            {/* Practice Exercise: Multiplication Table */}
            <PythonPractice
              title="Practice: Multiplication Table"
              description="Create a multiplication table for a given number using a for loop."
              initialCode={`# Multiplication table generator
number = 5  # Change this to generate table for different numbers

# Generate multiplication table from 1 to 10
# Format: 5 x 1 = 5

`}
              expectedOutput={`5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50`}
              hints={[
                "Use a for loop with range(1, 11) to get numbers 1 through 10",
                "Inside the loop, calculate number * i where i is the loop variable",
                "Use f-strings to format the output: f'{number} x {i} = {result}'",
                "Each print statement should be on a new line"
              ]}
              solution={`# Multiplication table generator
number = 5  # Change this to generate table for different numbers

# Generate multiplication table from 1 to 10
for i in range(1, 11):
    result = number * i
    print(f"{number} x {i} = {result}")`}
            />

            {/* Visualization Lab */}
            <VisualizationLab />

            {/* Nested Loops Concept */}
            <AnimatedConcept
              title="Nested Loops and Patterns"
              concept="You can put loops inside other loops to create complex patterns and handle multi-dimensional data."
              steps={[
                {
                  code: `for row in range(3):
    for col in range(3):
        print("*", end=" ")
    print()  # New line after each row`,
                  explanation: "This creates a 3x3 pattern of stars. The outer loop controls rows, inner loop controls columns.",
                  highlight: "end=' ' prevents print from going to a new line automatically."
                },
                {
                  code: `for row in range(1, 4):
    for col in range(row):
        print("*", end=" ")
    print()`,
                  explanation: "This creates a triangle pattern. Each row has as many stars as the row number.",
                  highlight: "The inner loop range changes based on the outer loop variable."
                },
                {
                  code: `for i in range(1, 4):
    for j in range(1, 4):
        product = i * j
        print(f"{i}x{j}={product}", end="  ")
    print()`,
                  explanation: "This creates a mini multiplication table, showing the product of each combination.",
                  highlight: "Nested loops are powerful for creating tables and grids."
                }
              ]}
            />

            {/* Practice Exercise: Pattern Printing */}
            <PythonPractice
              title="Practice: Number Pyramid"
              description="Create a number pyramid pattern using nested loops."
              initialCode={`# Number pyramid
# Pattern should look like:
# 1
# 1 2
# 1 2 3
# 1 2 3 4

rows = 4

# Write your nested loop code here

`}
              expectedOutput={`1
1 2
1 2 3
1 2 3 4`}
              hints={[
                "Use nested loops: outer loop for rows, inner loop for numbers",
                "For each row i, print numbers from 1 to i",
                "Use print() without arguments to go to the next line",
                "Use end=' ' to print numbers on the same line with spaces"
              ]}
              solution={`# Number pyramid
rows = 4

# Write your nested loop code here
for i in range(1, rows + 1):
    for j in range(1, i + 1):
        print(j, end=" ")
    print()`}
            />

            {/* Quiz */}
            <Quiz
              title="Unit 2 Quiz: Control Structures"
              questions={quizQuestions}
            />

            {/* Loop Control Practice */}
            <PythonPractice
              title="Practice: Number Guessing with Loop Control"
              description="Use break and continue to control loop execution."
              initialCode={`# Number guessing simulation
secret_number = 7
max_attempts = 5

# Simulate guesses: [3, 7, 5, 9, 2]
guesses = [3, 7, 5, 9, 2]

# Use a for loop with break when correct number is found
# Print "Too low" for numbers < secret_number
# Print "Too high" for numbers > secret_number  
# Print "Correct!" and break when found

`}
              expectedOutput={`Too low
Correct!`}
              hints={[
                "Loop through the guesses list",
                "Use if-elif-else to compare each guess with secret_number",
                "Use break to exit the loop when the correct number is found",
                "The loop should stop after finding the correct number (7)"
              ]}
              solution={`# Number guessing simulation
secret_number = 7
max_attempts = 5

# Simulate guesses: [3, 7, 5, 9, 2]
guesses = [3, 7, 5, 9, 2]

# Use a for loop with break when correct number is found
for guess in guesses:
    if guess < secret_number:
        print("Too low")
    elif guess > secret_number:
        print("Too high")
    else:
        print("Correct!")
        break`}
            />
          </div>

          {/* Unit Navigation */}
          <div className="bg-white rounded-lg shadow-lg p-6 mt-12">
            <div className="flex justify-between items-center">
              <Link
                href="/unit1"
                className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors"
              >
                <ArrowLeft size={20} />
                Back to Unit 1
              </Link>
              
              <div className="text-center">
                <h3 className="font-semibold text-gray-900">Unit 2 Complete!</h3>
                <p className="text-gray-600">You've mastered control flow!</p>
              </div>
              
              <Link
                href="/unit3"
                className="flex items-center gap-2 px-6 py-3 bg-python-blue text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Continue to Unit 3
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Unit2Page