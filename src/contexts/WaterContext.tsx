"use client"

import type React from "react"
import { createContext, useState, useContext } from "react"

interface WaterBody {
  weight: number
  temperature: number
}

interface WaterContextType {
  water1: WaterBody
  water2: WaterBody
  setWater1: React.Dispatch<React.SetStateAction<WaterBody>>
  setWater2: React.Dispatch<React.SetStateAction<WaterBody>>
  finalTemperature: number
}

const WaterContext = createContext<WaterContextType | undefined>(undefined)

export const WaterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [water1, setWater1] = useState<WaterBody>({ weight: 5, temperature: 25 })
  const [water2, setWater2] = useState<WaterBody>({ weight: 2.5, temperature: 20 })

  const calculateFinalTemperature = (): number => {
    const totalHeat = water1.weight * water1.temperature + water2.weight * water2.temperature
    const totalWeight = water1.weight + water2.weight
    return totalWeight > 0 ? totalHeat / totalWeight : 0
  }

  const finalTemperature = calculateFinalTemperature()

  return (
    <WaterContext.Provider value={{ water1, water2, setWater1, setWater2, finalTemperature }}>
      {children}
    </WaterContext.Provider>
  )
}

export const useWater = () => {
  const context = useContext(WaterContext)
  if (context === undefined) {
    throw new Error("useWater must be used within a WaterProvider")
  }
  return context
}

