import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, CheckCircle, Clock, Users, Book, Target, Play } from 'lucide-react'

const SyllabusPage = () => {
  const courseInfo = {
    duration: '8-12 weeks',
    difficulty: 'Beginner to Intermediate',
    prerequisites: 'None - Complete beginner friendly',
    format: 'Self-paced with interactive exercises'
  }

  const units = [
    {
      unit: 1,
      title: 'Python Fundamentals',
      duration: '2-3 weeks',
      description: 'Get started with Python basics, understand core concepts, and write your first programs.',
      topics: [
        'Introduction to Python and Programming',
        'Installing Python and Setting up Development Environment',
        'Variables and Data Types (int, float, string, boolean)',
        'Basic Input/Output Operations',
        'Operators (Arithmetic, Comparison, Logical)',
        'Comments and Code Documentation',
        'Basic String Manipulation',
        'Type Conversion and Casting'
      ],
      skills: ['Basic syntax understanding', 'Variable manipulation', 'Simple calculations', 'User input handling'],
      exercises: 12,
      quizzes: 3
    },
    {
      unit: 2,
      title: 'Control Structures',
      duration: '2-3 weeks',
      description: 'Master decision making and repetition in programming with conditionals and loops.',
      topics: [
        'Conditional Statements (if, elif, else)',
        'Nested Conditionals',
        'For Loops and Range Function',
        'While Loops',
        'Loop Control (break, continue, pass)',
        'Nested Loops',
        'Pattern Printing Programs',
        'Boolean Logic and Complex Conditions'
      ],
      skills: ['Decision making logic', 'Loop construction', 'Problem decomposition', 'Pattern recognition'],
      exercises: 15,
      quizzes: 4
    },
    {
      unit: 3,
      title: 'Functions & Modules',
      duration: '2-3 weeks',
      description: 'Learn to organize code efficiently using functions and explore Python\'s module system.',
      topics: [
        'Defining and Calling Functions',
        'Function Parameters and Arguments',
        'Return Statements and Return Values',
        'Local vs Global Scope',
        'Lambda Functions',
        'Built-in Functions',
        'Importing and Using Modules',
        'Creating Custom Modules',
        'Standard Library Overview'
      ],
      skills: ['Code organization', 'Function design', 'Module usage', 'Code reusability'],
      exercises: 18,
      quizzes: 4
    },
    {
      unit: 4,
      title: 'Data Structures',
      duration: '2-3 weeks',
      description: 'Explore Python\'s powerful data structures and file handling capabilities.',
      topics: [
        'Lists: Creation, Indexing, and Methods',
        'List Comprehensions',
        'Tuples and Their Applications',
        'Dictionaries: Keys, Values, and Methods',
        'Sets and Set Operations',
        'String Methods and Advanced Manipulation',
        'File Input/Output Operations',
        'Exception Handling (try, except, finally)',
        'Introduction to Object-Oriented Programming'
      ],
      skills: ['Data organization', 'File manipulation', 'Error handling', 'Advanced data processing'],
      exercises: 20,
      quizzes: 5
    }
  ]

  const learningOutcomes = [
    'Write clean, readable Python code following best practices',
    'Solve problems using appropriate data structures and algorithms',
    'Create reusable functions and organize code into modules',
    'Handle errors gracefully and debug programs effectively',
    'Work with files and external data sources',
    'Understand object-oriented programming fundamentals',
    'Build small to medium-sized Python applications',
    'Prepare for advanced Python topics and frameworks'
  ]

  return (
    <>
      <Head>
        <title>Python Course Syllabus - Learning Hub</title>
        <meta name="description" content="Complete Python programming course syllabus with detailed curriculum, learning objectives, and timeline." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Navigation */}
        <nav className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="flex items-center text-python-blue hover:text-blue-700">
                <ArrowLeft size={20} className="mr-2" />
                Back to Home
              </Link>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-python-blue rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">🐍</span>
                </div>
                <span className="ml-2 text-xl font-bold text-gray-900">Python Learning Hub</span>
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Python Programming Course
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive curriculum designed to take you from complete beginner to confident Python developer
            </p>
          </motion.div>

          {/* Course Overview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-8 mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Overview</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <Clock className="text-python-blue mx-auto mb-2" size={32} />
                <h3 className="font-semibold text-gray-900">Duration</h3>
                <p className="text-gray-600">{courseInfo.duration}</p>
              </div>
              <div className="text-center">
                <Target className="text-python-blue mx-auto mb-2" size={32} />
                <h3 className="font-semibold text-gray-900">Difficulty</h3>
                <p className="text-gray-600">{courseInfo.difficulty}</p>
              </div>
              <div className="text-center">
                <Users className="text-python-blue mx-auto mb-2" size={32} />
                <h3 className="font-semibold text-gray-900">Prerequisites</h3>
                <p className="text-gray-600">{courseInfo.prerequisites}</p>
              </div>
              <div className="text-center">
                <Book className="text-python-blue mx-auto mb-2" size={32} />
                <h3 className="font-semibold text-gray-900">Format</h3>
                <p className="text-gray-600">{courseInfo.format}</p>
              </div>
            </div>
          </motion.div>

          {/* Learning Outcomes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-lg shadow-lg p-8 mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What You'll Learn</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {learningOutcomes.map((outcome, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-700">{outcome}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Course Units */}
          <div className="space-y-8">
            {units.map((unit, index) => (
              <motion.div
                key={unit.unit}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="bg-gradient-to-r from-python-blue to-blue-600 text-white p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Unit {unit.unit}: {unit.title}</h3>
                      <p className="text-blue-100">{unit.description}</p>
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-6">
                      <Link
                        href={`/unit${unit.unit}`}
                        className="inline-flex items-center gap-2 bg-white text-python-blue px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                      >
                        <Play size={16} />
                        Start Unit
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="grid lg:grid-cols-3 gap-6">
                    {/* Topics */}
                    <div className="lg:col-span-2">
                      <h4 className="font-semibold text-gray-900 mb-3">Topics Covered</h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {unit.topics.map((topic, topicIndex) => (
                          <div key={topicIndex} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-python-blue rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Unit Info */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Unit Information</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Duration:</span>
                          <span className="font-medium">{unit.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Exercises:</span>
                          <span className="font-medium">{unit.exercises}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Quizzes:</span>
                          <span className="font-medium">{unit.quizzes}</span>
                        </div>
                      </div>

                      <h5 className="font-semibold text-gray-900 mt-6 mb-3">Skills You'll Gain</h5>
                      <div className="space-y-2">
                        {unit.skills.map((skill, skillIndex) => (
                          <div key={skillIndex} className="flex items-center gap-2">
                            <CheckCircle className="text-green-600" size={16} />
                            <span className="text-gray-700 text-sm">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Getting Started */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="bg-gradient-to-r from-python-blue to-blue-600 text-white rounded-lg p-8 mt-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Python Journey?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Start with Unit 1 and progress through our carefully designed curriculum. 
              Each unit builds upon the previous one, ensuring a solid foundation.
            </p>
            <Link
              href="/unit1"
              className="inline-flex items-center gap-2 bg-white text-python-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Play size={20} />
              Start with Unit 1: Python Fundamentals
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default SyllabusPage