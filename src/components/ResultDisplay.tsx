import type React from "react"
import { useWater } from "../contexts/WaterContext"

const ResultDisplay: React.FC = () => {
  const { finalTemperature, water1, water2 } = useWater()

  return (
    <div className="glass-panel p-6 flex flex-col items-center justify-center">
      <h2 className="text-2xl font-semibold mb-4 text-white">Výsledok</h2>
      <p className="text-5xl font-bold text-primary" style={{ color: finalTemperature > ((water1.temperature + water2.temperature) / 2) ? "#ef4444" : finalTemperature < ((water1.temperature + water2.temperature) / 2) ? "#3b82f6" : "white" }}>{finalTemperature.toFixed(2)}°C</p>
      <p className="text-lg text-white/80 mt-2">Výsledná teplota</p>
    </div>
  )
}

export default ResultDisplay

