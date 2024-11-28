'use client'

import { useState, useEffect } from "react"
import { GlitchText } from "@/components/ui/glitch-text"
import { CommunityCard } from "@/components/ui/community-card"
import globalData from "../data/global-data"
import { communityData } from "../data/community-data"
import { ParticleScene } from "@/components/ui/particle-scene"
import styles from './nodos.module.css'
import { ErrorModal } from "@/components/ui/error-print-modal"

export default function Page() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // set default for exhibition
  const isPrinterAvailable = true;

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <div className={`absolute inset-0 z-0`}>
        <ParticleScene />
      </div>
      <div className="relative z-10">
        <main className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className={`text-center mb-12 ${styles.titleAnimation}`}>
              <GlitchText
                text={globalData.firstSectionTitle}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight"
              />
            </h1>
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${styles.cardContainer}`}>
              {communityData.map((community, index) => (
                <div key={community.name} className={`${styles.cardItem} ${isLoaded ? styles.cardVisible : ''}`} style={{ animationDelay: `${index * 100}ms` }}>
                  <CommunityCard
                    {...community}
                    aria-label={`community card for ${community.name}`}
                    isPrinterAvailable={isPrinterAvailable}
                    error={error}
                    setError={setError}
                  />
                </div>
              ))}
            </div>
          </div>
          {error && (
            <ErrorModal onClose={() => setError(false)} />
          )}
        </main>
      </div>
    </div>
  )
}