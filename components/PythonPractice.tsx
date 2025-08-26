import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, CheckCircle, RotateCcw, Code } from 'lucide-react'

interface PythonPracticeProps {
  title: string
  description: string
  initialCode: string
  expectedOutput: string
  hints: string[]
  solution: string
}

const PythonPractice: React.FC<PythonPracticeProps> = ({
  title,
  description,
  initialCode,
  expectedOutput,
  hints,
  solution
}) => {
  const [code, setCode] = useState(initialCode)
  const [output, setOutput] = useState('')
  const [isCorrect, setIsCorrect] = useState(false)
  const [showHints, setShowHints] = useState(false)
  const [showSolution, setShowSolution] = useState(false)
  const [currentHint, setCurrentHint] = useState(0)

  const runCode = () => {
    // Simulate code execution for demo purposes
    // In a real implementation, this would send code to a Python interpreter
    try {
      // Simple pattern matching for basic Python code
      let result = ''
      
      if (code.includes('print(')) {
        const printRegex = /print\(([^)]+)\)/g
        let match
        while ((match = printRegex.exec(code)) !== null) {
          let printValue = match[1]
          // Remove quotes if it's a string
          if (printValue.startsWith('"') && printValue.endsWith('"')) {
            printValue = printValue.slice(1, -1)
          } else if (printValue.startsWith("'") && printValue.endsWith("'")) {
            printValue = printValue.slice(1, -1)
          }
          // Basic variable substitution
          if (code.includes('name = ')) {
            const nameMatch = code.match(/name = ['"]([^'"]+)['"]/)
            if (nameMatch && printValue.includes('name')) {
              printValue = printValue.replace('name', nameMatch[1])
            }
          }
          result += printValue + '\n'
        }
      }

      setOutput(result.trim())
      setIsCorrect(result.trim() === expectedOutput.trim())
    } catch (error) {
      setOutput('Error: ' + (error as Error).message)
      setIsCorrect(false)
    }
  }

  const resetCode = () => {
    setCode(initialCode)
    setOutput('')
    setIsCorrect(false)
    setShowSolution(false)
  }

  const nextHint = () => {
    if (currentHint < hints.length - 1) {
      setCurrentHint(prev => prev + 1)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <div className="flex gap-2">
          <button
            onClick={runCode}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            <Play size={16} />
            Run Code
          </button>
          <button
            onClick={resetCode}
            className="flex items-center gap-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
          >
            <RotateCcw size={16} />
            Reset
          </button>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-gray-600">{description}</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold mb-3 flex items-center gap-2">
            <Code size={16} />
            Your Code
          </h4>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-48 p-3 font-mono text-sm bg-gray-900 text-gray-100 rounded-lg border focus:ring-2 focus:ring-python-blue focus:border-transparent resize-none"
            placeholder="Write your Python code here..."
          />
          
          <div className="mt-4">
            <h4 className="font-semibold mb-2">Output</h4>
            <div className={`p-3 rounded-lg border-2 min-h-[80px] font-mono text-sm ${
              isCorrect ? 'bg-green-50 border-green-200' : output ? 'bg-red-50 border-red-200' : 'bg-gray-50 border-gray-200'
            }`}>
              {output && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-start gap-2"
                >
                  {isCorrect && <CheckCircle className="text-green-600 mt-0.5" size={16} />}
                  <pre className="whitespace-pre-wrap flex-1">{output}</pre>
                </motion.div>
              )}
              {!output && (
                <span className="text-gray-400">Run your code to see the output</span>
              )}
            </div>
          </div>
        </div>

        <div>
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Expected Output</h4>
            <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg font-mono text-sm">
              <pre className="whitespace-pre-wrap">{expectedOutput}</pre>
            </div>
          </div>

          {hints.length > 0 && (
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold">Hints</h4>
                <button
                  onClick={() => setShowHints(!showHints)}
                  className="text-sm text-python-blue hover:text-blue-700"
                >
                  {showHints ? 'Hide' : 'Show'} Hints
                </button>
              </div>
              {showHints && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="space-y-2"
                >
                  {hints.slice(0, currentHint + 1).map((hint, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg"
                    >
                      <span className="text-sm font-medium text-yellow-800">Hint {index + 1}:</span>
                      <p className="text-yellow-700 mt-1">{hint}</p>
                    </motion.div>
                  ))}
                  {currentHint < hints.length - 1 && (
                    <button
                      onClick={nextHint}
                      className="text-sm text-yellow-700 hover:text-yellow-800"
                    >
                      Show next hint →
                    </button>
                  )}
                </motion.div>
              )}
            </div>
          )}

          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold">Solution</h4>
              <button
                onClick={() => setShowSolution(!showSolution)}
                className="text-sm text-python-blue hover:text-blue-700"
              >
                {showSolution ? 'Hide' : 'Show'} Solution
              </button>
            </div>
            {showSolution && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-3 bg-gray-900 text-gray-100 rounded-lg font-mono text-sm"
              >
                <pre className="whitespace-pre-wrap">{solution}</pre>
                <button
                  onClick={() => setCode(solution)}
                  className="mt-3 px-3 py-1 bg-python-blue text-white rounded text-xs hover:bg-blue-700"
                >
                  Copy to Editor
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {isCorrect && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-6 p-4 bg-green-100 border border-green-300 rounded-lg"
        >
          <div className="flex items-center gap-2">
            <CheckCircle className="text-green-600" size={20} />
            <span className="font-semibold text-green-800">Correct! Well done!</span>
          </div>
          <p className="text-green-700 mt-1">Your code produces the expected output. Ready for the next challenge?</p>
        </motion.div>
      )}
    </div>
  )
}

export default PythonPractice