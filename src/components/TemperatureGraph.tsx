import type React from "react"
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, ReferenceLine, Line, ComposedChart } from "recharts"
import { useWater } from "../contexts/WaterContext"

const TemperatureGraph: React.FC = () => {
  const { water1, water2, finalTemperature } = useWater()

  const data = [
    { name: "Teploty vody", "v₁": water1.temperature, "v₂": water2.temperature, final: finalTemperature },
  ]

  return (
    <div className="glass-panel p-6">
      <h2 className="text-2xl font-semibold mb-4 text-white">Porovnanie teplôt</h2>
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart data={data}>
          <XAxis dataKey="name" stroke="#fff" />
          <YAxis
            stroke="#fff"
            label={{ value: "Teplota (°C)", angle: -90, position: "insideLeft", fill: "#fff" }}
          />
          <Tooltip contentStyle={{ backgroundColor: "rgba(0, 0, 0, 0.8)", border: "none", color: "rgba(255,255,255,0.8)" }} />
          <Legend />
          {(water1.temperature < 0 || water2.temperature < 0) && <ReferenceLine y={0} label="Bod mrazu" stroke="#fff" />}
          <Bar dataKey="v₁" fill={water1.temperature < water2.temperature ? "#3b82f6" : "#ef4444"} />
          <Bar dataKey="v₂" fill={water2.temperature <= water1.temperature ? "#3b82f6" : "#ef4444"} />
          <ReferenceLine type="monotone" label={`Výsledná teplota: ${Math.round(finalTemperature * 100) / 100}°C`} className="[&_tspan]:fill-white [&_tspan]:text-2xl hidden md:block" y={finalTemperature} stroke={finalTemperature > ((water1.temperature + water2.temperature) / 2) ? "#ef4444" : finalTemperature < ((water1.temperature + water2.temperature) / 2) ? "#3b82f6" : "white"} strokeWidth="3px" ifOverflow="discard"/>
          {/*<Bar dataKey="final" fill={finalTemperature > ((water1.temperature + water2.temperature) / 2) ? "#ef4444" : finalTemperature < ((water1.temperature + water2.temperature) / 2) ? "#3b82f6" : "white"} />*/}
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  )
}

export default TemperatureGraph

