import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, ExternalLink, Star, BookOpen, Video, FileText } from 'lucide-react'

interface Resource {
  id: string
  title: string
  author: string
  type: 'book' | 'video' | 'article' | 'course'
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  rating: number
  description: string
  url: string
  image: string
  tags: string[]
}

const BookCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const resources: Resource[] = [
    {
      id: '1',
      title: 'Python Crash Course',
      author: 'Eric Matthes',
      type: 'book',
      difficulty: 'beginner',
      rating: 4.8,
      description: 'A hands-on, project-based introduction to programming with Python. Perfect for beginners who want to learn Python quickly.',
      url: 'https://nostarch.com/pythoncrashcourse2e',
      image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=400&fit=crop',
      tags: ['basics', 'projects', 'beginner-friendly']
    },
    {
      id: '2',
      title: 'Automate the Boring Stuff',
      author: 'Al Sweigart',
      type: 'book',
      difficulty: 'beginner',
      rating: 4.7,
      description: 'Learn how to use Python to write programs that do useful tasks in a matter of minutes.',
      url: 'https://automatetheboringstuff.com/',
      image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=300&h=400&fit=crop',
      tags: ['automation', 'practical', 'scripting']
    },
    {
      id: '3',
      title: 'Python Data Science',
      author: 'Jake VanderPlas',
      type: 'book',
      difficulty: 'intermediate',
      rating: 4.6,
      description: 'Essential tools for working with data in Python, including NumPy, Pandas, and Matplotlib.',
      url: 'https://jakevdp.github.io/PythonDataScienceHandbook/',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=400&fit=crop',
      tags: ['data-science', 'numpy', 'pandas']
    },
    {
      id: '4',
      title: 'Python Tutorial for Beginners',
      author: 'Programming with Mosh',
      type: 'video',
      difficulty: 'beginner',
      rating: 4.9,
      description: 'Complete Python tutorial covering all the fundamentals in an easy-to-follow format.',
      url: 'https://youtu.be/t8pPdKYpowI',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=400&fit=crop',
      tags: ['video', 'tutorial', 'comprehensive']
    },
    {
      id: '5',
      title: 'Real Python Articles',
      author: 'Real Python Team',
      type: 'article',
      difficulty: 'intermediate',
      rating: 4.5,
      description: 'High-quality articles covering Python best practices, tutorials, and advanced concepts.',
      url: 'https://realpython.com/',
      image: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=300&h=400&fit=crop',
      tags: ['articles', 'best-practices', 'advanced']
    },
    {
      id: '6',
      title: 'CS50P - Python Programming',
      author: 'Harvard University',
      type: 'course',
      difficulty: 'beginner',
      rating: 4.8,
      description: 'Introduction to programming using Python from Harvard University.',
      url: 'https://cs50.harvard.edu/python/',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=300&h=400&fit=crop',
      tags: ['university', 'structured', 'comprehensive']
    }
  ]

  const categories = [
    { id: 'all', label: 'All Resources', icon: BookOpen },
    { id: 'book', label: 'Books', icon: BookOpen },
    { id: 'video', label: 'Videos', icon: Video },
    { id: 'article', label: 'Articles', icon: FileText },
    { id: 'course', label: 'Courses', icon: Star }
  ]

  const filteredResources = selectedCategory === 'all' 
    ? resources 
    : resources.filter(resource => resource.type === selectedCategory)

  const itemsPerPage = 3
  const totalPages = Math.ceil(filteredResources.length / itemsPerPage)

  const getCurrentPageResources = () => {
    const start = currentIndex * itemsPerPage
    const end = start + itemsPerPage
    return filteredResources.slice(start, end)
  }

  const nextPage = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setCurrentIndex(0)
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'book': return <BookOpen size={16} />
      case 'video': return <Video size={16} />
      case 'article': return <FileText size={16} />
      case 'course': return <Star size={16} />
      default: return <BookOpen size={16} />
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800'
      case 'intermediate': return 'bg-yellow-100 text-yellow-800'
      case 'advanced': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <BookOpen className="text-python-blue" size={24} />
          Learning Resources
        </h3>
        <div className="text-sm text-gray-600">
          {filteredResources.length} resources available
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((category) => {
          const IconComponent = category.icon
          return (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                selectedCategory === category.id
                  ? 'bg-python-blue text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <IconComponent size={16} />
              {category.label}
            </button>
          )
        })}
      </div>

      {/* Resource Cards */}
      <div className="relative">
        <motion.div
          key={`${selectedCategory}-${currentIndex}`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {getCurrentPageResources().map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 left-2 flex gap-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(resource.difficulty)}`}>
                    {resource.difficulty}
                  </span>
                  <span className="bg-white bg-opacity-90 text-gray-700 px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                    {getTypeIcon(resource.type)}
                    {resource.type}
                  </span>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-gray-800 line-clamp-2">{resource.title}</h4>
                  <div className="flex items-center gap-1 text-yellow-500 ml-2">
                    <Star size={14} fill="currentColor" />
                    <span className="text-xs text-gray-600">{resource.rating}</span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-2">by {resource.author}</p>
                <p className="text-sm text-gray-700 mb-3 line-clamp-3">{resource.description}</p>

                <div className="flex flex-wrap gap-1 mb-3">
                  {resource.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 w-full px-4 py-2 bg-python-blue text-white rounded-lg hover:bg-blue-700 transition-colors text-sm justify-center"
                >
                  <ExternalLink size={14} />
                  View Resource
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Navigation */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={prevPage}
              disabled={filteredResources.length === 0}
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 disabled:text-gray-400 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={16} />
              Previous
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-python-blue' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextPage}
              disabled={filteredResources.length === 0}
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 disabled:text-gray-400 disabled:cursor-not-allowed"
            >
              Next
              <ChevronRight size={16} />
            </button>
          </div>
        )}
      </div>

      {filteredResources.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="mx-auto mb-4 text-gray-400" size={48} />
          <p className="text-gray-600">No resources found for the selected category.</p>
        </div>
      )}

      {/* Tips */}
      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h5 className="font-semibold text-blue-800 mb-2">💡 Study Tips</h5>
        <ul className="text-blue-700 text-sm space-y-1">
          <li>• Start with beginner resources if you're new to Python</li>
          <li>• Combine different types of resources for better learning</li>
          <li>• Practice coding examples from books and videos</li>
          <li>• Join online communities to discuss what you've learned</li>
        </ul>
      </div>
    </div>
  )
}

export default BookCarousel