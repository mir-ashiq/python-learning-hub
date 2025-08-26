import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, XCircle, RotateCcw, Award } from 'lucide-react'

interface QuizQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

interface QuizProps {
  title: string
  questions: QuizQuestion[]
}

const Quiz: React.FC<QuizProps> = ({ title, questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(new Array(questions.length).fill(-1))
  const [showResults, setShowResults] = useState(false)
  const [quizCompleted, setQuizCompleted] = useState(false)

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers]
    newAnswers[currentQuestion] = answerIndex
    setSelectedAnswers(newAnswers)
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
    } else {
      setQuizCompleted(true)
      setShowResults(true)
    }
  }

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswers(new Array(questions.length).fill(-1))
    setShowResults(false)
    setQuizCompleted(false)
  }

  const calculateScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      return score + (answer === questions[index].correctAnswer ? 1 : 0)
    }, 0)
  }

  const getScorePercentage = () => {
    return Math.round((calculateScore() / questions.length) * 100)
  }

  const getScoreColor = () => {
    const percentage = getScorePercentage()
    if (percentage >= 80) return 'text-green-600'
    if (percentage >= 60) return 'text-yellow-600'
    return 'text-red-600'
  }

  if (showResults) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Award className="mx-auto mb-4 text-yellow-500" size={64} />
          </motion.div>
          
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Quiz Complete!</h3>
          <div className={`text-4xl font-bold mb-4 ${getScoreColor()}`}>
            {calculateScore()}/{questions.length} ({getScorePercentage()}%)
          </div>
          
          <div className="mb-6">
            {getScorePercentage() >= 80 && (
              <p className="text-green-700">Excellent work! You have a strong understanding of the material.</p>
            )}
            {getScorePercentage() >= 60 && getScorePercentage() < 80 && (
              <p className="text-yellow-700">Good job! Review the explanations below to strengthen your understanding.</p>
            )}
            {getScorePercentage() < 60 && (
              <p className="text-red-700">Keep studying! Review the material and try again to improve your score.</p>
            )}
          </div>

          <button
            onClick={resetQuiz}
            className="flex items-center gap-2 mx-auto px-6 py-3 bg-python-blue text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <RotateCcw size={16} />
            Retake Quiz
          </button>
        </div>

        <div className="mt-8 space-y-6">
          <h4 className="text-xl font-semibold text-gray-800">Review Your Answers</h4>
          {questions.map((question, index) => {
            const userAnswer = selectedAnswers[index]
            const isCorrect = userAnswer === question.correctAnswer
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border rounded-lg p-4"
              >
                <div className="flex items-start gap-3 mb-3">
                  {isCorrect ? (
                    <CheckCircle className="text-green-600 mt-1" size={20} />
                  ) : (
                    <XCircle className="text-red-600 mt-1" size={20} />
                  )}
                  <div className="flex-1">
                    <h5 className="font-semibold mb-2">Question {index + 1}: {question.question}</h5>
                    <div className="space-y-2">
                      {question.options.map((option, optionIndex) => {
                        let optionClass = 'p-2 rounded border text-sm'
                        if (optionIndex === question.correctAnswer) {
                          optionClass += ' bg-green-100 border-green-300 text-green-800'
                        } else if (optionIndex === userAnswer && !isCorrect) {
                          optionClass += ' bg-red-100 border-red-300 text-red-800'
                        } else {
                          optionClass += ' bg-gray-50 border-gray-200'
                        }
                        
                        return (
                          <div key={optionIndex} className={optionClass}>
                            {option}
                            {optionIndex === question.correctAnswer && (
                              <span className="ml-2 text-green-600 font-medium">✓ Correct</span>
                            )}
                            {optionIndex === userAnswer && !isCorrect && (
                              <span className="ml-2 text-red-600 font-medium">✗ Your answer</span>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded p-3 mt-3">
                  <h6 className="font-medium text-blue-800 mb-1">Explanation:</h6>
                  <p className="text-blue-700 text-sm">{question.explanation}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    )
  }

  const currentQ = questions[currentQuestion]

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <div className="text-sm text-gray-600">
          Question {currentQuestion + 1} of {questions.length}
        </div>
      </div>

      <div className="mb-6">
        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
          <motion.div
            className="bg-python-blue h-2 rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <motion.div
        key={currentQuestion}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-6"
      >
        <h4 className="text-lg font-semibold text-gray-800 mb-4">{currentQ.question}</h4>
        
        <div className="space-y-3">
          {currentQ.options.map((option, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleAnswerSelect(index)}
              className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                selectedAnswers[currentQuestion] === index
                  ? 'border-python-blue bg-blue-50 text-python-blue'
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                  selectedAnswers[currentQuestion] === index
                    ? 'border-python-blue bg-python-blue'
                    : 'border-gray-300'
                }`}>
                  {selectedAnswers[currentQuestion] === index && (
                    <div className="w-2 h-2 bg-white rounded-full" />
                  )}
                </div>
                <span>{option}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>

      <div className="flex justify-between items-center">
        <button
          onClick={previousQuestion}
          disabled={currentQuestion === 0}
          className="px-4 py-2 text-gray-600 hover:text-gray-800 disabled:text-gray-400 disabled:cursor-not-allowed"
        >
          ← Previous
        </button>
        
        <div className="flex gap-2">
          {questions.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentQuestion
                  ? 'bg-python-blue'
                  : selectedAnswers[index] !== -1
                  ? 'bg-green-500'
                  : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextQuestion}
          disabled={selectedAnswers[currentQuestion] === -1}
          className="px-4 py-2 bg-python-blue text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
        >
          {currentQuestion === questions.length - 1 ? 'Finish' : 'Next →'}
        </button>
      </div>
    </div>
  )
}

export default Quiz