import type React from "react"
import { useWater } from "../contexts/WaterContext"

const WaterInputForm: React.FC = () => {
  const { water1, water2, setWater1, setWater2 } = useWater()

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    waterBody: "water1" | "water2",
    property: "weight" | "temperature",
  ) => {
    const value = Number.parseFloat(e.target.value)
    if (waterBody === "water1") {
      setWater1((prev) => ({ ...prev, [property]: value }))
    } else {
      setWater2((prev) => ({ ...prev, [property]: value }))
    }
  }

  return (
    <div className="glass-panel p-6 text-center">
      <h2 className="text-2xl font-semibold mb-4 text-white">Vstupy</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <h3 className="font-medium text-white mb-2">v₁</h3>
          <div className="relative mb-2">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50">m₁:</span>
            <input
              type="number"
              value={water1.weight ?? 5}
              onChange={(e) => handleChange(e, "water1", "weight")}
              placeholder="Weight"
              min={0}
              className="w-full p-2 pl-10 pr-12 bg-white/20 border border-white/30 rounded text-white placeholder-white/50 number-hide-controls"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50">kg</span>
          </div>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50">t₁:</span>
            <input
              type="number"
              value={water1.temperature ?? 25}
              onChange={(e) => handleChange(e, "water1", "temperature")}
              placeholder="Temperature"
              min={Number.NEGATIVE_INFINITY}
              className="w-full p-2 pl-8 pr-12 bg-white/20 border border-white/30 rounded text-white placeholder-white/50 number-hide-controls"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50">°C</span>
          </div>
        </div>
        <div>
          <h3 className="font-medium text-white mb-2">v₂</h3>
          <div className="relative mb-2">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50">m₂:</span>
            <input
              type="number"
              value={water2.weight ?? 2.5}
              onChange={(e) => handleChange(e, "water2", "weight")}
              placeholder="Weight"
              min={0}
              className="w-full p-2 pl-10 pr-12 bg-white/20 border border-white/30 rounded text-white placeholder-white/50 number-hide-controls"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50">kg</span>
          </div>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50">t₂:</span>
            <input
              type="number"
              value={water2.temperature ?? 20}
              onChange={(e) => handleChange(e, "water2", "temperature")}
              placeholder="Temperature"
              min={Number.NEGATIVE_INFINITY}
              className="w-full p-2 pl-8 pr-12 bg-white/20 border border-white/30 rounded text-white placeholder-white/50 number-hide-controls"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50">°C</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WaterInputForm

