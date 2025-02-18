import type React from "react"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"
import { useWater } from "../contexts/WaterContext"

const VolumeRatioGraph: React.FC = () => {
  const { water1, water2 } = useWater()

  const data = [
    { name: "v₁", value: water1.weight, temp: water1.temperature },
    { name: "v₂", value: water2.weight, temp: water2.temperature },
  ]

  const COLORS = ["#3b82f6", "#ef4444"]

  return (
    <div className="glass-panel p-6">
      <h2 className="text-2xl font-semibold mb-4 text-white">Pomer objemov</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name} - ${(percent * 100).toFixed(0)}%`}
          >
            {data
              .sort((a, b) => a.temp - b.temp)
              .map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
          </Pie>
          <Tooltip contentStyle={{ backgroundColor: "rgba(255, 255, 255, 0.8)", border: "1px solid black", color: "white" }} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VolumeRatioGraph

