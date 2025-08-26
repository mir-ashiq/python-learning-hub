import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Trophy, Target, Calendar, TrendingUp, CheckCircle, Circle } from 'lucide-react'

interface LearningGoal {
  id: string
  title: string
  description: string
  targetDate: string
  completed: boolean
  progress: number
}

interface UnitProgress {
  unit: number
  title: string
  completed: boolean
  lessons: number
  completedLessons: number
  quizScore?: number
}

const ProgressTracker: React.FC = () => {
  const [goals, setGoals] = useState<LearningGoal[]>([
    {
      id: '1',
      title: 'Complete Python Basics',
      description: 'Finish all lessons in Unit 1: Python Fundamentals',
      targetDate: '2024-02-15',
      completed: false,
      progress: 75
    },
    {
      id: '2',
      title: 'Master Control Structures',
      description: 'Complete Unit 2 with 80% quiz score',
      targetDate: '2024-02-28',
      completed: false,
      progress: 40
    },
    {
      id: '3',
      title: 'Build First Project',
      description: 'Create a simple Python calculator',
      targetDate: '2024-03-10',
      completed: false,
      progress: 0
    }
  ])

  const [unitProgress, setUnitProgress] = useState<UnitProgress[]>([
    {
      unit: 1,
      title: 'Python Fundamentals',
      completed: false,
      lessons: 8,
      completedLessons: 6,
      quizScore: 85
    },
    {
      unit: 2,
      title: 'Control Structures',
      completed: false,
      lessons: 10,
      completedLessons: 4,
      quizScore: 70
    },
    {
      unit: 3,
      title: 'Functions & Modules',
      completed: false,
      lessons: 12,
      completedLessons: 0
    },
    {
      unit: 4,
      title: 'Data Structures',
      completed: false,
      lessons: 15,
      completedLessons: 0
    }
  ])

  const [streakDays, setStreakDays] = useState(7)
  const [totalHours, setTotalHours] = useState(24)
  const [completedExercises, setCompletedExercises] = useState(35)

  const overallProgress = unitProgress.reduce((total, unit) => {
    return total + (unit.completedLessons / unit.lessons) * 25
  }, 0)

  const toggleGoalCompletion = (goalId: string) => {
    setGoals(goals.map(goal => 
      goal.id === goalId 
        ? { ...goal, completed: !goal.completed, progress: goal.completed ? goal.progress : 100 }
        : goal
    ))
  }

  const addNewGoal = () => {
    const newGoal: LearningGoal = {
      id: Date.now().toString(),
      title: 'New Learning Goal',
      description: 'Add your custom learning objective',
      targetDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      completed: false,
      progress: 0
    }
    setGoals([...goals, newGoal])
  }

  const updateGoal = (goalId: string, field: keyof LearningGoal, value: string | number | boolean) => {
    setGoals(goals.map(goal => 
      goal.id === goalId ? { ...goal, [field]: value } : goal
    ))
  }

  const deleteGoal = (goalId: string) => {
    setGoals(goals.filter(goal => goal.id !== goalId))
  }

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'bg-green-500'
    if (progress >= 60) return 'bg-yellow-500'
    if (progress >= 40) return 'bg-orange-500'
    return 'bg-red-500'
  }

  const getDaysUntilTarget = (targetDate: string) => {
    const target = new Date(targetDate)
    const today = new Date()
    const diffTime = target.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <Trophy className="text-yellow-500" size={24} />
          Progress Tracker
        </h3>
        <div className="text-sm text-gray-600">
          Overall Progress: {Math.round(overallProgress)}%
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-lg"
        >
          <div className="flex items-center gap-3">
            <TrendingUp size={24} />
            <div>
              <div className="text-2xl font-bold">{streakDays}</div>
              <div className="text-sm opacity-90">Day Streak</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-4 rounded-lg"
        >
          <div className="flex items-center gap-3">
            <Calendar size={24} />
            <div>
              <div className="text-2xl font-bold">{totalHours}</div>
              <div className="text-sm opacity-90">Hours Studied</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-4 rounded-lg"
        >
          <div className="flex items-center gap-3">
            <CheckCircle size={24} />
            <div>
              <div className="text-2xl font-bold">{completedExercises}</div>
              <div className="text-sm opacity-90">Exercises Done</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-4 rounded-lg"
        >
          <div className="flex items-center gap-3">
            <Target size={24} />
            <div>
              <div className="text-2xl font-bold">{goals.filter(g => g.completed).length}</div>
              <div className="text-sm opacity-90">Goals Achieved</div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Unit Progress */}
        <div>
          <h4 className="font-semibold mb-4">Course Progress</h4>
          <div className="space-y-4">
            {unitProgress.map((unit, index) => (
              <motion.div
                key={unit.unit}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border rounded-lg p-4"
              >
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-medium">Unit {unit.unit}: {unit.title}</h5>
                  <span className="text-sm text-gray-600">
                    {unit.completedLessons}/{unit.lessons} lessons
                  </span>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <motion.div
                    className={`h-2 rounded-full ${getProgressColor((unit.completedLessons / unit.lessons) * 100)}`}
                    initial={{ width: '0%' }}
                    animate={{ width: `${(unit.completedLessons / unit.lessons) * 100}%` }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  />
                </div>
                
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{Math.round((unit.completedLessons / unit.lessons) * 100)}% Complete</span>
                  {unit.quizScore && (
                    <span>Quiz Score: {unit.quizScore}%</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Learning Goals */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold">Learning Goals</h4>
            <button
              onClick={addNewGoal}
              className="px-3 py-1 bg-python-blue text-white rounded text-sm hover:bg-blue-700"
            >
              + Add Goal
            </button>
          </div>
          
          <div className="space-y-3">
            {goals.map((goal, index) => (
              <motion.div
                key={goal.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`border rounded-lg p-4 ${goal.completed ? 'bg-green-50 border-green-200' : 'bg-white'}`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <input
                      type="text"
                      value={goal.title}
                      onChange={(e) => updateGoal(goal.id, 'title', e.target.value)}
                      className={`font-medium w-full bg-transparent border-none p-0 focus:outline-none ${
                        goal.completed ? 'line-through text-gray-500' : ''
                      }`}
                    />
                    <textarea
                      value={goal.description}
                      onChange={(e) => updateGoal(goal.id, 'description', e.target.value)}
                      className="text-sm text-gray-600 w-full bg-transparent border-none p-0 focus:outline-none resize-none"
                      rows={1}
                    />
                  </div>
                  <div className="flex items-center gap-2 ml-2">
                    <button
                      onClick={() => toggleGoalCompletion(goal.id)}
                      className="text-gray-400 hover:text-green-600"
                    >
                      {goal.completed ? <CheckCircle size={20} className="text-green-600" /> : <Circle size={20} />}
                    </button>
                    <button
                      onClick={() => deleteGoal(goal.id)}
                      className="text-gray-400 hover:text-red-600 text-sm"
                    >
                      ✕
                    </button>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-sm">
                  <input
                    type="date"
                    value={goal.targetDate}
                    onChange={(e) => updateGoal(goal.id, 'targetDate', e.target.value)}
                    className="border border-gray-300 rounded px-2 py-1 text-xs"
                  />
                  <span className="text-gray-500">
                    {getDaysUntilTarget(goal.targetDate) > 0 
                      ? `${getDaysUntilTarget(goal.targetDate)} days left`
                      : getDaysUntilTarget(goal.targetDate) === 0
                      ? 'Due today'
                      : `${Math.abs(getDaysUntilTarget(goal.targetDate))} days overdue`
                    }
                  </span>
                </div>
                
                {!goal.completed && (
                  <div className="mt-3">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${getProgressColor(goal.progress)}`}
                        style={{ width: `${goal.progress}%` }}
                      />
                    </div>
                    <div className="flex justify-between mt-1">
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={goal.progress}
                        onChange={(e) => updateGoal(goal.id, 'progress', parseInt(e.target.value))}
                        className="w-20 h-1"
                      />
                      <span className="text-xs text-gray-500">{goal.progress}%</span>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgressTracker