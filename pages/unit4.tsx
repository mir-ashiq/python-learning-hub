import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { ArrowLeft, Home } from 'lucide-react'
import AnimatedConcept from '../components/AnimatedConcept'
import PythonPractice from '../components/PythonPractice'
import Quiz from '../components/Quiz'
import UserProfile from '../components/UserProfile'

const Unit4Page = () => {
  const listSteps = [
    {
      code: `# Creating lists
fruits = ["apple", "banana", "orange"]
numbers = [1, 2, 3, 4, 5]
print(fruits)`,
      explanation: "Lists are ordered collections of items. They can contain different data types and are defined using square brackets.",
      highlight: "Lists are mutable - you can change them after creation."
    },
    {
      code: `# Accessing list elements
fruits = ["apple", "banana", "orange"]
print(fruits[0])    # First item
print(fruits[-1])   # Last item
print(fruits[1:3])  # Slice from index 1 to 2`,
      explanation: "Use square brackets with an index to access list elements. Python uses 0-based indexing. Negative indices count from the end.",
      highlight: "Slicing [start:end] gets elements from start up to (but not including) end."
    },
    {
      code: `# Modifying lists
fruits = ["apple", "banana", "orange"]
fruits.append("grape")      # Add to end
fruits.insert(1, "mango")   # Insert at index 1
fruits.remove("banana")     # Remove first occurrence
print(fruits)`,
      explanation: "Lists have built-in methods for modification: append() adds to end, insert() adds at position, remove() deletes by value.",
      highlight: "List methods modify the original list - they don't create a new one."
    },
    {
      code: `# List comprehensions
numbers = [1, 2, 3, 4, 5]
squared = [x ** 2 for x in numbers]
evens = [x for x in numbers if x % 2 == 0]
print(squared)
print(evens)`,
      explanation: "List comprehensions provide a concise way to create lists. Format: [expression for item in iterable if condition]",
      highlight: "List comprehensions are often faster and more readable than loops."
    }
  ]

  const dictSteps = [
    {
      code: `# Creating dictionaries
student = {
    "name": "Alice",
    "age": 20,
    "grade": "A"
}
print(student)`,
      explanation: "Dictionaries store key-value pairs. Keys must be unique and immutable (strings, numbers, tuples).",
      highlight: "Use curly braces {} and separate key-value pairs with colons."
    },
    {
      code: `# Accessing dictionary values
student = {"name": "Alice", "age": 20, "grade": "A"}
print(student["name"])        # Direct access
print(student.get("age"))     # Safe access
print(student.get("email", "Not found"))  # Default value`,
      explanation: "Access values using keys in square brackets or the get() method. get() is safer as it doesn't crash if key doesn't exist.",
      highlight: "get() can provide a default value if the key is not found."
    },
    {
      code: `# Modifying dictionaries
student = {"name": "Alice", "age": 20}
student["grade"] = "A"        # Add new key-value
student["age"] = 21           # Update existing value
del student["name"]           # Remove key-value pair
print(student)`,
      explanation: "Dictionaries are mutable. You can add, update, and delete key-value pairs after creation.",
      highlight: "If you assign to a new key, it gets added. If the key exists, its value gets updated."
    },
    {
      code: `# Dictionary methods
student = {"name": "Alice", "age": 20, "grade": "A"}
print(student.keys())         # All keys
print(student.values())       # All values  
print(student.items())        # Key-value pairs
print("name" in student)      # Check if key exists`,
      explanation: "Useful dictionary methods: keys() gets all keys, values() gets all values, items() gets key-value pairs, 'in' checks key existence.",
      highlight: "These methods return views that reflect changes to the original dictionary."
    }
  ]

  const fileSteps = [
    {
      code: `# Writing to a file
with open("example.txt", "w") as file:
    file.write("Hello, World!")
    file.write("\\nPython is awesome!")
print("File written successfully")`,
      explanation: "Use open() with 'w' mode to write to a file. The 'with' statement ensures the file is properly closed.",
      highlight: "'with' automatically closes the file even if an error occurs."
    },
    {
      code: `# Reading from a file
with open("example.txt", "r") as file:
    content = file.read()
    print(content)`,
      explanation: "Use 'r' mode to read from a file. read() gets the entire file content as a string.",
      highlight: "Always use 'with' for file operations to ensure proper cleanup."
    },
    {
      code: `# Reading line by line
with open("example.txt", "r") as file:
    for line in file:
        print(f"Line: {line.strip()}")`,
      explanation: "You can iterate over a file object to read line by line. strip() removes newline characters.",
      highlight: "Reading line by line is memory-efficient for large files."
    },
    {
      code: `# Exception handling
try:
    with open("nonexistent.txt", "r") as file:
        content = file.read()
except FileNotFoundError:
    print("File not found!")
except Exception as e:
    print(f"An error occurred: {e}")`,
      explanation: "Use try-except blocks to handle file errors gracefully. This prevents your program from crashing.",
      highlight: "Always handle potential file errors in real applications."
    }
  ]

  const quizQuestions = [
    {
      question: "What will this code output?\n\nnums = [1, 2, 3]\nnums.append([4, 5])\nprint(len(nums))",
      options: ["3", "4", "5", "Error"],
      correctAnswer: 1,
      explanation: "append() adds the entire list [4, 5] as a single element, so the length becomes 4. To add individual elements, use extend()."
    },
    {
      question: "Which method would you use to get all the keys from a dictionary?",
      options: ["dict.keys()", "dict.getkeys()", "dict.keylist()", "dict.allkeys()"],
      correctAnswer: 0,
      explanation: "The keys() method returns a view of all the keys in the dictionary."
    },
    {
      question: "What happens if you try to access a dictionary key that doesn't exist using square brackets?",
      options: ["Returns None", "Returns empty string", "Raises KeyError", "Creates the key"],
      correctAnswer: 2,
      explanation: "Accessing a non-existent key with square brackets raises a KeyError. Use get() for safe access."
    },
    {
      question: "What does this list comprehension do?\n\n[x for x in range(10) if x % 2 == 1]",
      options: [
        "Creates even numbers 0-9",
        "Creates odd numbers 1-9", 
        "Creates all numbers 0-9",
        "Creates numbers 1-10"
      ],
      correctAnswer: 1,
      explanation: "This creates a list of odd numbers from 0-9. The condition x % 2 == 1 filters for odd numbers."
    },
    {
      question: "What's the advantage of using 'with' when working with files?",
      options: [
        "It makes files read faster",
        "It automatically closes the file",
        "It prevents file corruption", 
        "It creates backup files"
      ],
      correctAnswer: 1,
      explanation: "The 'with' statement ensures the file is properly closed even if an error occurs, preventing resource leaks."
    }
  ]

  return (
    <>
      <Head>
        <title>Unit 4: Data Structures - Learning Hub</title>
        <meta name="description" content="Master Python data structures including lists, dictionaries, and file handling." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Navigation */}
        <nav className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/unit3" className="flex items-center text-python-blue hover:text-blue-700">
                <ArrowLeft size={20} className="mr-2" />
                Previous: Unit 3
              </Link>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-python-blue rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">🐍</span>
                </div>
                <span className="ml-2 text-xl font-bold text-gray-900">Unit 4: Data Structures</span>
              </div>
              <Link href="/" className="flex items-center text-python-blue hover:text-blue-700">
                <Home size={20} className="mr-2" />
                Home
              </Link>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Unit Header */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Unit 4: Data Structures</h1>
            <p className="text-xl text-gray-600 mb-6">
              Explore Python's powerful data structures and file handling capabilities.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                💪 Advanced
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                📚 15 Lessons
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                🧪 20 Exercises
              </span>
              <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                📝 5 Quizzes
              </span>
            </div>
          </div>

          {/* User Profile Component */}
          <UserProfile />

          {/* Learning Content */}
          <div className="space-y-8">
            {/* Animated Concept: Lists */}
            <AnimatedConcept
              title="Lists: Dynamic Arrays in Python"
              concept="Lists are ordered, mutable collections that can store multiple items. They're one of the most versatile data structures in Python."
              steps={listSteps}
            />

            {/* Practice Exercise: Shopping List Manager */}
            <PythonPractice
              title="Practice: Shopping List Manager"
              description="Create a program to manage a shopping list with various operations."
              initialCode={`# Shopping list manager
shopping_list = ["milk", "bread", "eggs"]

# Add items to the list
# shopping_list.append("apples")
# shopping_list.insert(1, "butter")

# Remove items from the list
# shopping_list.remove("bread")

# Create a list of expensive items (price > 5)
prices = [3.50, 2.25, 4.00, 6.75, 1.99]
# expensive_items = [price for price in prices if price > 5]

# Print the current shopping list
print("Shopping List:")
for i, item in enumerate(shopping_list):
    print(f"{i+1}. {item}")

# Print expensive items
# print(f"Expensive items: {expensive_items}")
`}
              expectedOutput={`Shopping List:
1. milk
2. butter
3. eggs
4. apples
Expensive items: [6.75]`}
              hints={[
                "Uncomment the lines to see the full functionality",
                "append() adds items to the end of the list",
                "insert(index, item) adds item at specific position",
                "List comprehensions filter based on conditions"
              ]}
              solution={`# Shopping list manager
shopping_list = ["milk", "bread", "eggs"]

# Add items to the list
shopping_list.append("apples")
shopping_list.insert(1, "butter")

# Remove items from the list
shopping_list.remove("bread")

# Create a list of expensive items (price > 5)
prices = [3.50, 2.25, 4.00, 6.75, 1.99]
expensive_items = [price for price in prices if price > 5]

# Print the current shopping list
print("Shopping List:")
for i, item in enumerate(shopping_list):
    print(f"{i+1}. {item}")

# Print expensive items
print(f"Expensive items: {expensive_items}")`}
            />

            {/* Animated Concept: Dictionaries */}
            <AnimatedConcept
              title="Dictionaries: Key-Value Data Storage"
              concept="Dictionaries store data as key-value pairs, providing fast lookup by key. They're perfect for structured data and mappings."
              steps={dictSteps}
            />

            {/* Practice Exercise: Student Grade Book */}
            <PythonPractice
              title="Practice: Student Grade Book"
              description="Create a grade book system using dictionaries to store and manage student information."
              initialCode={`# Student grade book
students = {
    "Alice": {"math": 95, "science": 88, "english": 92},
    "Bob": {"math": 78, "science": 85, "english": 79},
    "Charlie": {"math": 92, "science": 90, "english": 88}
}

# Add a new student
# students["Diana"] = {"math": 89, "science": 94, "english": 91}

# Calculate average grade for a student
def calculate_average(student_grades):
    # Calculate and return the average of all grades
    pass

# Find the student with the highest average
def find_top_student(students):
    # Return the name of student with highest average
    pass

# Test your functions
alice_avg = calculate_average(students["Alice"])
top_student = find_top_student(students)

print(f"Alice's average: {alice_avg}")
print(f"Top student: {top_student}")

# Print all students and their averages
for name, grades in students.items():
    avg = calculate_average(grades)
    print(f"{name}: {avg:.1f}")
`}
              expectedOutput={`Alice's average: 91.7
Top student: Alice
Alice: 91.7
Bob: 80.7
Charlie: 90.0
Diana: 91.3`}
              hints={[
                "Uncomment the Diana line to add the new student",
                "For average: sum all values in the grades dictionary and divide by count",
                "For top student: loop through students, calculate each average, track the highest",
                "Use .values() to get all grades for a student"
              ]}
              solution={`# Student grade book
students = {
    "Alice": {"math": 95, "science": 88, "english": 92},
    "Bob": {"math": 78, "science": 85, "english": 79},
    "Charlie": {"math": 92, "science": 90, "english": 88}
}

# Add a new student
students["Diana"] = {"math": 89, "science": 94, "english": 91}

# Calculate average grade for a student
def calculate_average(student_grades):
    return sum(student_grades.values()) / len(student_grades)

# Find the student with the highest average
def find_top_student(students):
    top_student = ""
    highest_avg = 0
    for name, grades in students.items():
        avg = calculate_average(grades)
        if avg > highest_avg:
            highest_avg = avg
            top_student = name
    return top_student

# Test your functions
alice_avg = calculate_average(students["Alice"])
top_student = find_top_student(students)

print(f"Alice's average: {alice_avg:.1f}")
print(f"Top student: {top_student}")

# Print all students and their averages
for name, grades in students.items():
    avg = calculate_average(grades)
    print(f"{name}: {avg:.1f}")`}
            />

            {/* Animated Concept: File Handling */}
            <AnimatedConcept
              title="File Input/Output Operations"
              concept="File handling allows programs to read from and write to files, enabling data persistence and processing of external data."
              steps={fileSteps}
            />

            {/* Practice Exercise: Data Analysis */}
            <PythonPractice
              title="Practice: Simple Data Analysis"
              description="Analyze text data to count words and find patterns."
              initialCode={`# Text data analysis
text_data = """
Python is a powerful programming language.
Python is easy to learn and use.
Many companies use Python for data science.
Python has a large community of developers.
"""

# Convert to lowercase and split into words
words = text_data.lower().split()

# Count word frequencies
def count_words(word_list):
    # Create a dictionary with word counts
    word_count = {}
    # Loop through words and count occurrences
    pass

# Find the most common word
def find_most_common(word_count):
    # Return the word with the highest count
    pass

# Calculate statistics
word_frequencies = count_words(words)
most_common = find_most_common(word_frequencies)
total_words = len(words)
unique_words = len(word_frequencies)

print(f"Total words: {total_words}")
print(f"Unique words: {unique_words}")
print(f"Most common word: '{most_common}' appears {word_frequencies[most_common]} times")

# Show top 5 most frequent words
sorted_words = sorted(word_frequencies.items(), key=lambda x: x[1], reverse=True)
print("\\nTop 5 most frequent words:")
for word, count in sorted_words[:5]:
    print(f"'{word}': {count}")
`}
              expectedOutput={`Total words: 26
Unique words: 20
Most common word: 'python' appears 4 times

Top 5 most frequent words:
'python': 4
'is': 2
'and': 2
'to': 2
'use': 2`}
              hints={[
                "For word count: loop through words, if word in dict increment, else set to 1",
                "For most common: loop through dictionary items, track word with highest count",
                "Remove punctuation from words using .strip('.,!?')",
                "Filter out empty strings after splitting"
              ]}
              solution={`# Text data analysis
text_data = """
Python is a powerful programming language.
Python is easy to learn and use.
Many companies use Python for data science.
Python has a large community of developers.
"""

# Convert to lowercase and split into words
words = [word.strip('.,!?') for word in text_data.lower().split() if word.strip('.,!?')]

# Count word frequencies
def count_words(word_list):
    word_count = {}
    for word in word_list:
        if word in word_count:
            word_count[word] += 1
        else:
            word_count[word] = 1
    return word_count

# Find the most common word
def find_most_common(word_count):
    most_common = ""
    highest_count = 0
    for word, count in word_count.items():
        if count > highest_count:
            highest_count = count
            most_common = word
    return most_common

# Calculate statistics
word_frequencies = count_words(words)
most_common = find_most_common(word_frequencies)
total_words = len(words)
unique_words = len(word_frequencies)

print(f"Total words: {total_words}")
print(f"Unique words: {unique_words}")
print(f"Most common word: '{most_common}' appears {word_frequencies[most_common]} times")

# Show top 5 most frequent words
sorted_words = sorted(word_frequencies.items(), key=lambda x: x[1], reverse=True)
print("\\nTop 5 most frequent words:")
for word, count in sorted_words[:5]:
    print(f"'{word}': {count}")`}
            />

            {/* Sets and Tuples Concept */}
            <AnimatedConcept
              title="Sets and Tuples: Specialized Collections"
              concept="Sets store unique elements and are great for membership testing. Tuples are immutable sequences, perfect for fixed data."
              steps={[
                {
                  code: `# Sets - unique elements only
fruits = {"apple", "banana", "orange", "apple"}
print(fruits)  # Duplicates automatically removed
print(len(fruits))`,
                  explanation: "Sets automatically remove duplicates and store only unique elements. They're defined with curly braces.",
                  highlight: "Sets are unordered - items don't have a specific position."
                },
                {
                  code: `# Set operations
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}
print(set1.union(set2))        # All elements
print(set1.intersection(set2)) # Common elements
print(set1.difference(set2))   # In set1 but not set2`,
                  explanation: "Sets support mathematical operations like union, intersection, and difference.",
                  highlight: "Set operations are very fast, making sets ideal for membership testing."
                },
                {
                  code: `# Tuples - immutable sequences
coordinates = (10, 20)
rgb_color = (255, 128, 0)
print(coordinates[0])  # Access by index
# coordinates[0] = 15  # This would cause an error`,
                  explanation: "Tuples are like lists but immutable (can't be changed). They're defined with parentheses.",
                  highlight: "Use tuples for data that shouldn't change, like coordinates or database records."
                },
                {
                  code: `# Tuple unpacking
point = (100, 200)
x, y = point  # Unpack into variables
print(f"X: {x}, Y: {y}")

# Multiple return values
def get_name_age():
    return "Alice", 25

name, age = get_name_age()
print(f"Name: {name}, Age: {age}")`,
                  explanation: "Tuple unpacking lets you assign tuple elements to multiple variables at once. Functions can return multiple values as tuples.",
                  highlight: "Unpacking makes code more readable and is commonly used in Python."
                }
              ]}
            />

            {/* Quiz */}
            <Quiz
              title="Unit 4 Quiz: Data Structures & File Handling"
              questions={quizQuestions}
            />

            {/* Final Project */}
            <PythonPractice
              title="Final Project: Contact Book Manager"
              description="Create a complete contact book application using all the concepts you've learned."
              initialCode={`# Contact Book Manager - Final Project
# Use dictionaries, lists, file operations, and functions

contacts = {}

def add_contact(name, phone, email):
    """Add a new contact to the contact book"""
    # Store contact info in contacts dictionary
    pass

def search_contact(name):
    """Search for a contact by name"""
    # Return contact info if found, None otherwise
    pass

def list_all_contacts():
    """Print all contacts in a formatted way"""
    # Loop through contacts and print each one
    pass

def save_contacts_to_file(filename):
    """Save all contacts to a text file"""
    # Write contact data to file
    pass

# Test the contact book
add_contact("Alice Smith", "555-0123", "alice@email.com")
add_contact("Bob Johnson", "555-0456", "bob@email.com")
add_contact("Charlie Brown", "555-0789", "charlie@email.com")

print("All Contacts:")
list_all_contacts()

print("\\nSearching for Alice:")
result = search_contact("Alice Smith")
if result:
    print(f"Found: {result}")
else:
    print("Contact not found")

# Save to file
save_contacts_to_file("contacts.txt")
print("\\nContacts saved to file!")
`}
              expectedOutput={`All Contacts:
Name: Alice Smith, Phone: 555-0123, Email: alice@email.com
Name: Bob Johnson, Phone: 555-0456, Email: bob@email.com
Name: Charlie Brown, Phone: 555-0789, Email: charlie@email.com

Searching for Alice:
Found: {'phone': '555-0123', 'email': 'alice@email.com'}

Contacts saved to file!`}
              hints={[
                "Store each contact as a dictionary with 'phone' and 'email' keys",
                "Use the contact name as the key in the main contacts dictionary",
                "For search: use 'in' to check if name exists in contacts",
                "For file saving: use 'with open()' and write each contact on a new line"
              ]}
              solution={`# Contact Book Manager - Final Project
contacts = {}

def add_contact(name, phone, email):
    """Add a new contact to the contact book"""
    contacts[name] = {"phone": phone, "email": email}

def search_contact(name):
    """Search for a contact by name"""
    return contacts.get(name)

def list_all_contacts():
    """Print all contacts in a formatted way"""
    for name, info in contacts.items():
        print(f"Name: {name}, Phone: {info['phone']}, Email: {info['email']}")

def save_contacts_to_file(filename):
    """Save all contacts to a text file"""
    with open(filename, 'w') as file:
        for name, info in contacts.items():
            file.write(f"{name},{info['phone']},{info['email']}\\n")

# Test the contact book
add_contact("Alice Smith", "555-0123", "alice@email.com")
add_contact("Bob Johnson", "555-0456", "bob@email.com")
add_contact("Charlie Brown", "555-0789", "charlie@email.com")

print("All Contacts:")
list_all_contacts()

print("\\nSearching for Alice:")
result = search_contact("Alice Smith")
if result:
    print(f"Found: {result}")
else:
    print("Contact not found")

# Save to file
save_contacts_to_file("contacts.txt")
print("\\nContacts saved to file!")`}
            />
          </div>

          {/* Course Completion */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg p-8 mt-12 text-center">
            <h2 className="text-3xl font-bold mb-4">🎉 Congratulations! 🎉</h2>
            <p className="text-green-100 mb-6 text-xl">
              You've completed the Python Learning Hub course! You now have a solid foundation in Python programming.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <h3 className="font-semibold mb-2">What You've Learned</h3>
                <ul className="text-green-100 text-sm space-y-1 text-left">
                  <li>• Python syntax and data types</li>
                  <li>• Control structures and loops</li>
                  <li>• Functions and modules</li>
                  <li>• Data structures and file handling</li>
                  <li>• Problem-solving with code</li>
                </ul>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <h3 className="font-semibold mb-2">Next Steps</h3>
                <ul className="text-green-100 text-sm space-y-1 text-left">
                  <li>• Build personal projects</li>
                  <li>• Explore web development with Django/Flask</li>
                  <li>• Learn data science with Pandas/NumPy</li>
                  <li>• Practice on coding challenge sites</li>
                  <li>• Join Python communities</li>
                </ul>
              </div>
            </div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Home size={20} />
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Unit4Page