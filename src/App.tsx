import type React from "react"
import { Lexend } from "next/font/google"
import WaterInputForm from "./components/WaterInputForm"
import ResultDisplay from "./components/ResultDisplay"
import TemperatureGraph from "./components/TemperatureGraph"
import VolumeRatioGraph from "./components/VolumeRatioGraph"
import { WaterProvider } from "./contexts/WaterContext"
import './index.css'

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

const App: React.FC = () => {
  return (
    <WaterProvider>
      <div className={`container m-auto px-16 py-12 bg-neutral-950/75 backdrop-blur-xl rounded-xl border border-solid border-neutral-800 ${lexend.variable} font-lexend`}>
        <h1 className="text-4xl font-bold mb-8 text-center text-white">Kalkulačka Kalorimetrickej Rovnice</h1>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <WaterInputForm />
          <ResultDisplay />
          <TemperatureGraph />
          <VolumeRatioGraph />
        </div>
      </div>
    </WaterProvider>
  )
}

export default App