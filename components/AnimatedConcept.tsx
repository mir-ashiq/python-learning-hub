import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause, RotateCcw } from 'lucide-react'

interface AnimatedConceptProps {
  title: string
  concept: string
  steps: Array<{
    code: string
    explanation: string
    highlight?: string
  }>
}

const AnimatedConcept: React.FC<AnimatedConceptProps> = ({ title, concept, steps }) => {
  const [currentStep, setCurrentStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [highlightedCode, setHighlightedCode] = useState('')

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isPlaying && currentStep < steps.length - 1) {
      interval = setInterval(() => {
        setCurrentStep(prev => prev + 1)
      }, 2000)
    } else if (currentStep >= steps.length - 1) {
      setIsPlaying(false)
    }

    return () => clearInterval(interval)
  }, [isPlaying, currentStep, steps.length])

  useEffect(() => {
    const currentStepData = steps[currentStep]
    if (currentStepData) {
      setHighlightedCode(currentStepData.code)
    }
  }, [currentStep, steps])

  const togglePlayback = () => {
    setIsPlaying(!isPlaying)
  }

  const resetAnimation = () => {
    setCurrentStep(0)
    setIsPlaying(false)
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <div className="flex gap-2">
          <button
            onClick={togglePlayback}
            className="flex items-center gap-2 px-4 py-2 bg-python-blue text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            {isPlaying ? <Pause size={16} /> : <Play size={16} />}
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <button
            onClick={resetAnimation}
            className="flex items-center gap-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
          >
            <RotateCcw size={16} />
            Reset
          </button>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-gray-600 text-lg">{concept}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-900 rounded-lg p-4">
          <h4 className="text-white font-semibold mb-3">Code</h4>
          <motion.pre
            key={currentStep}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-sm text-gray-100 overflow-x-auto"
          >
            <code className="language-python">{highlightedCode}</code>
          </motion.pre>
        </div>

        <div className="bg-blue-50 rounded-lg p-4">
          <h4 className="font-semibold mb-3">Explanation</h4>
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-700">{steps[currentStep]?.explanation}</p>
            {steps[currentStep]?.highlight && (
              <div className="mt-3 p-3 bg-yellow-100 border-l-4 border-yellow-500 rounded">
                <p className="text-yellow-800 font-medium">{steps[currentStep].highlight}</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600">Step {currentStep + 1} of {steps.length}</span>
          <span className="text-sm text-gray-600">{Math.round(((currentStep + 1) / steps.length) * 100)}% Complete</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div
            className="bg-python-blue h-2 rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {steps.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentStep(index)}
            className={`w-8 h-8 rounded-full text-sm font-medium transition-colors ${
              index === currentStep
                ? 'bg-python-blue text-white'
                : index < currentStep
                ? 'bg-green-500 text-white'
                : 'bg-gray-200 text-gray-600'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  )
}

export default AnimatedConcept