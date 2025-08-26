import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { User, Edit3, Save, Camera, Award, Calendar, Target, TrendingUp } from 'lucide-react'

interface UserProfileProps {
  isEditing?: boolean
}

interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  unlockedAt: string
  progress: number
  maxProgress: number
}

interface UserStats {
  totalLessons: number
  completedLessons: number
  totalQuizzes: number
  averageQuizScore: number
  studyStreak: number
  totalStudyTime: number
  favoriteTopics: string[]
  level: number
  experiencePoints: number
  nextLevelXP: number
}

const UserProfile: React.FC<UserProfileProps> = ({ isEditing: initialEditing = false }) => {
  const [isEditing, setIsEditing] = useState(initialEditing)
  const [profile, setProfile] = useState({
    name: 'Alex Johnson',
    email: 'alex.johnson@email.com',
    bio: 'Aspiring Python developer passionate about data science and web development. Currently learning through hands-on projects and real-world applications.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    joinDate: '2024-01-15',
    location: 'San Francisco, CA',
    github: 'alexjohnson',
    linkedin: 'alex-johnson-dev'
  })

  const [userStats] = useState<UserStats>({
    totalLessons: 45,
    completedLessons: 32,
    totalQuizzes: 12,
    averageQuizScore: 87,
    studyStreak: 7,
    totalStudyTime: 24, // hours
    favoriteTopics: ['Data Structures', 'Web Scraping', 'Data Visualization'],
    level: 5,
    experiencePoints: 1250,
    nextLevelXP: 1500
  })

  const [achievements] = useState<Achievement[]>([
    {
      id: '1',
      title: 'First Steps',
      description: 'Complete your first Python lesson',
      icon: '🎯',
      unlockedAt: '2024-01-16',
      progress: 1,
      maxProgress: 1
    },
    {
      id: '2',
      title: 'Week Warrior',
      description: 'Study for 7 consecutive days',
      icon: '🔥',
      unlockedAt: '2024-01-23',
      progress: 7,
      maxProgress: 7
    },
    {
      id: '3',
      title: 'Quiz Master',
      description: 'Score 90% or higher on 5 quizzes',
      icon: '🧠',
      unlockedAt: '2024-02-01',
      progress: 5,
      maxProgress: 5
    },
    {
      id: '4',
      title: 'Code Explorer',
      description: 'Complete 50 coding exercises',
      icon: '🗺️',
      unlockedAt: '',
      progress: 35,
      maxProgress: 50
    },
    {
      id: '5',
      title: 'Data Wizard',
      description: 'Master all data structure lessons',
      icon: '⚡',
      unlockedAt: '',
      progress: 8,
      maxProgress: 15
    },
    {
      id: '6',
      title: 'Python Pro',
      description: 'Reach level 10',
      icon: '🏆',
      unlockedAt: '',
      progress: 5,
      maxProgress: 10
    }
  ])

  const handleSave = () => {
    setIsEditing(false)
    // In a real app, this would save to a backend
  }

  const handleCancel = () => {
    setIsEditing(false)
    // In a real app, this would revert changes
  }

  const updateProfile = (field: string, value: string) => {
    setProfile(prev => ({ ...prev, [field]: value }))
  }

  const getProgressPercentage = () => {
    return Math.round((userStats.experiencePoints / userStats.nextLevelXP) * 100)
  }

  const getLevelProgress = () => {
    const currentLevelXP = userStats.nextLevelXP - 300 // Assuming 300 XP per level
    const progressInLevel = userStats.experiencePoints - currentLevelXP
    return Math.max(0, progressInLevel)
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <User className="text-python-blue" size={24} />
          User Profile
        </h3>
        <div className="flex gap-2">
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center gap-2 px-4 py-2 bg-python-blue text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Edit3 size={16} />
              Edit Profile
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={handleSave}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <Save size={16} />
                Save
              </button>
              <button
                onClick={handleCancel}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Profile Information */}
        <div className="lg:col-span-1">
          <div className="text-center mb-6">
            <div className="relative inline-block">
              <img
                src={profile.avatar}
                alt="Profile"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-python-blue"
              />
              {isEditing && (
                <button className="absolute bottom-4 right-0 bg-python-blue text-white p-2 rounded-full hover:bg-blue-700">
                  <Camera size={16} />
                </button>
              )}
            </div>
            
            {isEditing ? (
              <input
                type="text"
                value={profile.name}
                onChange={(e) => updateProfile('name', e.target.value)}
                className="text-2xl font-bold text-center w-full border-b-2 border-gray-300 focus:border-python-blue outline-none"
              />
            ) : (
              <h4 className="text-2xl font-bold text-gray-800">{profile.name}</h4>
            )}
            
            <p className="text-gray-600 mt-1">Level {userStats.level} Python Learner</p>
          </div>

          {/* Level Progress */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Level Progress</span>
              <span className="text-sm text-gray-600">{userStats.experiencePoints}/{userStats.nextLevelXP} XP</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <motion.div
                className="bg-gradient-to-r from-python-blue to-purple-600 h-3 rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: `${getProgressPercentage()}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">{userStats.nextLevelXP - userStats.experiencePoints} XP to next level</p>
          </div>

          {/* Profile Details */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
              {isEditing ? (
                <textarea
                  value={profile.bio}
                  onChange={(e) => updateProfile('bio', e.target.value)}
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-python-blue focus:border-transparent resize-none"
                />
              ) : (
                <p className="text-gray-600 text-sm">{profile.bio}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              {isEditing ? (
                <input
                  type="email"
                  value={profile.email}
                  onChange={(e) => updateProfile('email', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-python-blue focus:border-transparent"
                />
              ) : (
                <p className="text-gray-600 text-sm">{profile.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              {isEditing ? (
                <input
                  type="text"
                  value={profile.location}
                  onChange={(e) => updateProfile('location', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-python-blue focus:border-transparent"
                />
              ) : (
                <p className="text-gray-600 text-sm">{profile.location}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">GitHub</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={profile.github}
                    onChange={(e) => updateProfile('github', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-python-blue focus:border-transparent"
                  />
                ) : (
                  <a href={`https://github.com/${profile.github}`} target="_blank" rel="noopener noreferrer" className="text-python-blue text-sm hover:underline">
                    @{profile.github}
                  </a>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={profile.linkedin}
                    onChange={(e) => updateProfile('linkedin', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-python-blue focus:border-transparent"
                  />
                ) : (
                  <a href={`https://linkedin.com/in/${profile.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-python-blue text-sm hover:underline">
                    {profile.linkedin}
                  </a>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Member Since</label>
              <p className="text-gray-600 text-sm">{new Date(profile.joinDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
          </div>
        </div>

        {/* Stats and Achievements */}
        <div className="lg:col-span-2">
          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-lg text-center"
            >
              <TrendingUp className="mx-auto mb-2" size={24} />
              <div className="text-2xl font-bold">{Math.round((userStats.completedLessons / userStats.totalLessons) * 100)}%</div>
              <div className="text-sm opacity-90">Lessons Complete</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-4 rounded-lg text-center"
            >
              <Target className="mx-auto mb-2" size={24} />
              <div className="text-2xl font-bold">{userStats.averageQuizScore}%</div>
              <div className="text-sm opacity-90">Avg Quiz Score</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-4 rounded-lg text-center"
            >
              <Calendar className="mx-auto mb-2" size={24} />
              <div className="text-2xl font-bold">{userStats.studyStreak}</div>
              <div className="text-sm opacity-90">Day Streak</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-4 rounded-lg text-center"
            >
              <Award className="mx-auto mb-2" size={24} />
              <div className="text-2xl font-bold">{userStats.totalStudyTime}h</div>
              <div className="text-sm opacity-90">Study Time</div>
            </motion.div>
          </div>

          {/* Favorite Topics */}
          <div className="mb-6">
            <h5 className="font-semibold mb-3">Favorite Topics</h5>
            <div className="flex flex-wrap gap-2">
              {userStats.favoriteTopics.map((topic, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-python-blue text-white rounded-full text-sm"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h5 className="font-semibold mb-4">Achievements</h5>
            <div className="grid md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => {
                const isUnlocked = achievement.unlockedAt !== ''
                const progressPercentage = (achievement.progress / achievement.maxProgress) * 100

                return (
                  <motion.div
                    key={achievement.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className={`p-4 rounded-lg border-2 ${
                      isUnlocked 
                        ? 'border-yellow-300 bg-yellow-50' 
                        : 'border-gray-200 bg-gray-50'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`text-2xl ${isUnlocked ? '' : 'grayscale opacity-50'}`}>
                        {achievement.icon}
                      </div>
                      <div className="flex-1">
                        <h6 className={`font-medium ${isUnlocked ? 'text-yellow-800' : 'text-gray-600'}`}>
                          {achievement.title}
                        </h6>
                        <p className={`text-sm ${isUnlocked ? 'text-yellow-700' : 'text-gray-500'}`}>
                          {achievement.description}
                        </p>
                        
                        <div className="mt-2">
                          <div className="flex justify-between text-xs mb-1">
                            <span>{achievement.progress}/{achievement.maxProgress}</span>
                            <span>{Math.round(progressPercentage)}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full ${
                                isUnlocked ? 'bg-yellow-500' : 'bg-gray-400'
                              }`}
                              style={{ width: `${progressPercentage}%` }}
                            />
                          </div>
                        </div>
                        
                        {isUnlocked && achievement.unlockedAt && (
                          <p className="text-xs text-yellow-600 mt-1">
                            Unlocked on {new Date(achievement.unlockedAt).toLocaleDateString()}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile