import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Bar, Line, Pie } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Play, Download, Settings, BarChart3, LineChart, PieChart } from 'lucide-react'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
)

interface DataPoint {
  label: string
  value: number
}

const VisualizationLab: React.FC = () => {
  const [chartType, setChartType] = useState<'bar' | 'line' | 'pie'>('bar')
  const [data, setData] = useState<DataPoint[]>([
    { label: 'Python', value: 85 },
    { label: 'JavaScript', value: 75 },
    { label: 'Java', value: 65 },
    { label: 'C++', value: 55 },
    { label: 'Go', value: 45 },
  ])
  const [customCode, setCustomCode] = useState(`# Data Visualization Example
import matplotlib.pyplot as plt

# Sample data
languages = ['Python', 'JavaScript', 'Java', 'C++', 'Go']
popularity = [85, 75, 65, 55, 45]

# Create a bar chart
plt.figure(figsize=(10, 6))
plt.bar(languages, popularity, color='skyblue')
plt.title('Programming Language Popularity')
plt.xlabel('Languages')
plt.ylabel('Popularity Score')
plt.show()`)
  const [isAnimating, setIsAnimating] = useState(false)

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Programming Language Popularity',
      },
    },
    animation: {
      duration: isAnimating ? 1500 : 0,
    },
  }

  const chartData = {
    labels: data.map(d => d.label),
    datasets: [
      {
        label: 'Popularity Score',
        data: data.map(d => d.value),
        backgroundColor: [
          'rgba(55, 118, 171, 0.8)',
          'rgba(255, 212, 59, 0.8)',
          'rgba(34, 197, 94, 0.8)',
          'rgba(239, 68, 68, 0.8)',
          'rgba(168, 85, 247, 0.8)',
        ],
        borderColor: [
          'rgba(55, 118, 171, 1)',
          'rgba(255, 212, 59, 1)',
          'rgba(34, 197, 94, 1)',
          'rgba(239, 68, 68, 1)',
          'rgba(168, 85, 247, 1)',
        ],
        borderWidth: 2,
      },
    ],
  }

  const addDataPoint = () => {
    const newLabel = `Item ${data.length + 1}`
    const newValue = Math.floor(Math.random() * 100) + 1
    setData([...data, { label: newLabel, value: newValue }])
  }

  const removeDataPoint = (index: number) => {
    setData(data.filter((_, i) => i !== index))
  }

  const updateDataPoint = (index: number, field: 'label' | 'value', newValue: string | number) => {
    const newData = [...data]
    if (field === 'label') {
      newData[index].label = newValue as string
    } else {
      newData[index].value = newValue as number
    }
    setData(newData)
  }

  const animateChart = () => {
    setIsAnimating(true)
    setTimeout(() => setIsAnimating(false), 1500)
  }

  const randomizeData = () => {
    const newData = data.map(item => ({
      ...item,
      value: Math.floor(Math.random() * 100) + 1
    }))
    setData(newData)
    animateChart()
  }

  const renderChart = () => {
    switch (chartType) {
      case 'bar':
        return <Bar data={chartData} options={chartOptions} />
      case 'line':
        return <Line data={chartData} options={chartOptions} />
      case 'pie':
        return <Pie data={chartData} options={chartOptions} />
      default:
        return <Bar data={chartData} options={chartOptions} />
    }
  }

  const exportData = () => {
    const csvContent = "data:text/csv;charset=utf-8," 
      + "Label,Value\n"
      + data.map(d => `${d.label},${d.value}`).join("\n")
    
    const encodedUri = encodeURI(csvContent)
    const link = document.createElement("a")
    link.setAttribute("href", encodedUri)
    link.setAttribute("download", "chart_data.csv")
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-800">Data Visualization Lab</h3>
        <div className="flex gap-2">
          <button
            onClick={animateChart}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            <Play size={16} />
            Animate
          </button>
          <button
            onClick={exportData}
            className="flex items-center gap-2 px-4 py-2 bg-python-blue text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Download size={16} />
            Export
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="mb-4">
            <div className="flex items-center gap-4 mb-4">
              <span className="font-medium">Chart Type:</span>
              <div className="flex gap-2">
                <button
                  onClick={() => setChartType('bar')}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                    chartType === 'bar' ? 'bg-python-blue text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <BarChart3 size={16} />
                  Bar
                </button>
                <button
                  onClick={() => setChartType('line')}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                    chartType === 'line' ? 'bg-python-blue text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <LineChart size={16} />
                  Line
                </button>
                <button
                  onClick={() => setChartType('pie')}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                    chartType === 'pie' ? 'bg-python-blue text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <PieChart size={16} />
                  Pie
                </button>
              </div>
            </div>
          </div>

          <motion.div
            key={chartType}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-50 p-4 rounded-lg"
            style={{ height: '400px' }}
          >
            {renderChart()}
          </motion.div>
        </div>

        <div>
          <h4 className="font-semibold mb-4 flex items-center gap-2">
            <Settings size={16} />
            Data Editor
          </h4>
          
          <div className="space-y-3 mb-4">
            {data.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex gap-2 p-3 bg-gray-50 rounded-lg"
              >
                <input
                  type="text"
                  value={item.label}
                  onChange={(e) => updateDataPoint(index, 'label', e.target.value)}
                  className="flex-1 px-2 py-1 text-sm border rounded"
                  placeholder="Label"
                />
                <input
                  type="number"
                  value={item.value}
                  onChange={(e) => updateDataPoint(index, 'value', parseInt(e.target.value) || 0)}
                  className="w-16 px-2 py-1 text-sm border rounded"
                  placeholder="Value"
                />
                <button
                  onClick={() => removeDataPoint(index)}
                  className="px-2 py-1 text-red-600 hover:text-red-800 text-sm"
                >
                  ✕
                </button>
              </motion.div>
            ))}
          </div>

          <div className="space-y-2">
            <button
              onClick={addDataPoint}
              className="w-full px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
            >
              + Add Data Point
            </button>
            <button
              onClick={randomizeData}
              className="w-full px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
            >
              🎲 Randomize Values
            </button>
          </div>

          <div className="mt-6">
            <h5 className="font-medium mb-2">Python Code Example</h5>
            <textarea
              value={customCode}
              onChange={(e) => setCustomCode(e.target.value)}
              className="w-full h-32 p-2 text-xs font-mono bg-gray-900 text-gray-100 rounded border resize-none"
              readOnly
            />
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h5 className="font-semibold text-blue-800 mb-2">💡 Learning Tips</h5>
        <ul className="text-blue-700 text-sm space-y-1">
          <li>• Try different chart types to see which best represents your data</li>
          <li>• Add or remove data points to see how the visualization changes</li>
          <li>• Use the randomize button to experiment with different data patterns</li>
          <li>• Export your data as CSV to use in real Python projects</li>
        </ul>
      </div>
    </div>
  )
}

export default VisualizationLab