import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Play, BookOpen, Users, Award, ChevronRight, Code, Brain, Target } from 'lucide-react'

const HomePage = () => {
  const features = [
    {
      icon: <Code size={24} />,
      title: 'Interactive Coding',
      description: 'Practice Python with our built-in code editor and instant feedback'
    },
    {
      icon: <Brain size={24} />,
      title: 'Smart Learning',
      description: 'Adaptive quizzes and exercises that adjust to your learning pace'
    },
    {
      icon: <Target size={24} />,
      title: 'Progress Tracking',
      description: 'Monitor your progress with detailed analytics and achievements'
    },
    {
      icon: <BookOpen size={24} />,
      title: 'Rich Resources',
      description: 'Access curated books, videos, and articles from top Python experts'
    }
  ]

  const stats = [
    { number: '4', label: 'Learning Units', description: 'From basics to advanced' },
    { number: '50+', label: 'Coding Exercises', description: 'Hands-on practice' },
    { number: '25+', label: 'Interactive Quizzes', description: 'Test your knowledge' },
    { number: '100+', label: 'Learning Resources', description: 'Books, videos & more' }
  ]

  return (
    <>
      <Head>
        <title>Python Learning Hub - Master Python Programming</title>
        <meta name="description" content="Learn Python programming with interactive lessons, coding exercises, and comprehensive resources. Perfect for beginners and intermediate developers." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen">
        {/* Navigation */}
        <nav className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0 flex items-center">
                  <div className="w-8 h-8 bg-python-blue rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">🐍</span>
                  </div>
                  <span className="ml-2 text-xl font-bold text-gray-900">Python Learning Hub</span>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href="/" className="text-python-blue font-medium px-3 py-2 rounded-md">
                    Home
                  </Link>
                  <Link href="/syllabus" className="text-gray-700 hover:text-python-blue px-3 py-2 rounded-md">
                    Syllabus
                  </Link>
                  <Link href="/unit1" className="text-gray-700 hover:text-python-blue px-3 py-2 rounded-md">
                    Unit 1
                  </Link>
                  <Link href="/unit2" className="text-gray-700 hover:text-python-blue px-3 py-2 rounded-md">
                    Unit 2
                  </Link>
                  <Link href="/unit3" className="text-gray-700 hover:text-python-blue px-3 py-2 rounded-md">
                    Unit 3
                  </Link>
                  <Link href="/unit4" className="text-gray-700 hover:text-python-blue px-3 py-2 rounded-md">
                    Unit 4
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
              >
                Master <span className="text-python-blue">Python</span> Programming
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
              >
                Learn Python through interactive lessons, hands-on coding exercises, and comprehensive resources. 
                From basics to advanced concepts, we'll guide you every step of the way.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Link
                  href="/syllabus"
                  className="flex items-center gap-2 bg-python-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  <Play size={20} />
                  Start Learning
                </Link>
                
                <Link
                  href="/unit1"
                  className="flex items-center gap-2 border-2 border-python-blue text-python-blue px-8 py-4 rounded-lg font-semibold hover:bg-python-blue hover:text-white transition-colors"
                >
                  <BookOpen size={20} />
                  View Curriculum
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Floating Code Snippets */}
          <div className="absolute top-20 left-10 opacity-10">
            <pre className="text-python-blue text-sm">
{`print("Hello, World!")
for i in range(5):
    print(f"Python is awesome {i}")`}
            </pre>
          </div>
          <div className="absolute bottom-20 right-10 opacity-10">
            <pre className="text-python-blue text-sm">
{`def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)`}
            </pre>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Platform?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We've designed the most comprehensive and interactive Python learning experience
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-python-blue text-white rounded-lg mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Learn by Numbers
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive curriculum designed for effective learning
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center bg-white p-8 rounded-lg shadow-sm"
                >
                  <div className="text-4xl font-bold text-python-blue mb-2">{stat.number}</div>
                  <div className="text-xl font-semibold text-gray-900 mb-1">{stat.label}</div>
                  <div className="text-gray-600">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Course Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Learning Path
              </h2>
              <p className="text-xl text-gray-600">
                Structured curriculum from beginner to advanced
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { unit: 1, title: 'Python Fundamentals', description: 'Variables, data types, and basic operations', lessons: 8 },
                { unit: 2, title: 'Control Structures', description: 'Loops, conditionals, and flow control', lessons: 10 },
                { unit: 3, title: 'Functions & Modules', description: 'Code organization and reusability', lessons: 12 },
                { unit: 4, title: 'Data Structures', description: 'Lists, dictionaries, and advanced topics', lessons: 15 }
              ].map((unit, index) => (
                <motion.div
                  key={unit.unit}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link href={`/unit${unit.unit}`}>
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-lg hover:shadow-lg transition-all cursor-pointer group">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-2xl font-bold text-python-blue">Unit {unit.unit}</span>
                        <ChevronRight className="text-python-blue group-hover:translate-x-1 transition-transform" size={20} />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{unit.title}</h3>
                      <p className="text-gray-600 mb-3">{unit.description}</p>
                      <div className="text-sm text-python-blue font-medium">{unit.lessons} lessons</div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-python-blue">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Start Your Python Journey?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join thousands of learners who are mastering Python programming with our interactive platform
              </p>
              <Link
                href="/syllabus"
                className="inline-flex items-center gap-2 bg-white text-python-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <Play size={20} />
                Begin Learning Now
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="w-8 h-8 bg-python-blue rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">🐍</span>
                </div>
                <span className="ml-2 text-xl font-bold">Python Learning Hub</span>
              </div>
              <p className="text-gray-400 mb-4">
                Master Python programming with interactive lessons and hands-on practice
              </p>
              <p className="text-gray-500 text-sm">
                © 2024 Python Learning Hub. Built with Next.js and Tailwind CSS.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default HomePage