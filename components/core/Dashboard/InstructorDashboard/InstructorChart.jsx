import React, { useState } from "react"
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  Tooltip, 
  Legend,
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid 
} from "recharts"

export default function InstructorChart() {
  const [currChart, setCurrChart] = useState("students")

  // Hardcoded data for charts
  const studentsChartData = [
    { name: 'Dev ops', value: 4 },
    { name: 'Java Programming', value: 7 },
    { name: 'AIML', value: 5 },
    { name: 'C++ Programming', value: 3 }
  ]

  const incomeChartData = [
    { name: 'Dev ops', value: 50000 },
    { name: 'Java Programming', value: 25000 },
    { name: 'AIML', value: 25000 },
    { name: 'C++ Programming', value: 18000 }
  ]

  const paymentsChartData = [
    { name: 'Successful Payments', value: 20 },
    { name: 'Pending Payments', value: 10 },
    { name: 'Failed Payments', value: 5 }
  ]

  const platformStatsChartData = [
    { 
      name: 'Dev ops', 
      'Avg. Course Rating': 4.5, 
      'Total Course Views': 15 
    },
    { 
      name: 'Java Programming', 
      'Avg. Course Rating': 4.2, 
      'Total Course Views': 50 
    },
    { 
      name: 'AIML', 
      'Avg. Course Rating': 4.7, 
      'Total Course Views': 10
    },
    { 
      name: 'C++ Programming', 
      'Avg. Course Rating': 4.3, 
      'Total Course Views': 20
    }
  ]

  const COLORS = [
    '#0088FE', '#00C49F', '#FFBB28', '#FF8042', 
    '#8884D8', '#82CA9D', '#FF6384', '#36A2EB'
  ]

  return (
    <div className="flex flex-1 flex-col gap-y-4 rounded-md bg-richblack-800 p-6">
      <p className="text-lg font-bold text-richblack-5">Visualize</p>
      
      <div className="space-x-4 font-semibold">
        <button 
          onClick={() => setCurrChart("students")} 
          className={`rounded-sm p-1 px-3 transition-all duration-200 ${
            currChart === "students" ? "bg-richblack-700 text-yellow-50" : "text-yellow-400"
          }`}
        >
          Students
        </button>
        <button 
          onClick={() => setCurrChart("income")} 
          className={`rounded-sm p-1 px-3 transition-all duration-200 ${
            currChart === "income" ? "bg-richblack-700 text-yellow-50" : "text-yellow-400"
          }`}
        >
          Income
        </button>
        <button 
          onClick={() => setCurrChart("payments")} 
          className={`rounded-sm p-1 px-3 transition-all duration-200 ${
            currChart === "payments" ? "bg-richblack-700 text-yellow-50" : "text-yellow-400"
          }`}
        >
          Payments
        </button>
        <button 
          onClick={() => setCurrChart("platformStats")} 
          className={`rounded-sm p-1 px-3 transition-all duration-200 ${
            currChart === "platformStats" ? "bg-richblack-700 text-yellow-50" : "text-yellow-400"
          }`}
        >
          Platform Stats
        </button>
      </div>

      <div className="relative mx-auto h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          {currChart === "students" && (
            <PieChart>
              <Pie
                data={studentsChartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {studentsChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend layout="horizontal" verticalAlign="bottom" align="center" />
            </PieChart>
          )}

          {currChart === "income" && (
            <PieChart>
              <Pie
                data={incomeChartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {incomeChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend layout="horizontal" verticalAlign="bottom" align="center" />
            </PieChart>
          )}

          {currChart === "payments" && (
            <PieChart>
              <Pie
                data={paymentsChartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {paymentsChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend layout="horizontal" verticalAlign="bottom" align="center" />
            </PieChart>
          )}

          {currChart === "platformStats" && (
            <BarChart
              data={platformStatsChartData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Avg. Course Rating" fill="#8884d8" />
              <Bar dataKey="Total Course Views" fill="#82ca9d" />
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  )
} 