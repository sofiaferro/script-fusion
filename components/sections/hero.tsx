'use client'

import { useState, useEffect } from 'react'
import { GlitchText } from '@/components/ui/glitch-text'
import globalData from '@/app/data/global-data'
import { ParticleScene } from '../ui/particle-scene'
import styles from '@/app/globals.module.css';
import { BasicButton } from '../ui/basic-button'

interface HeroSectionProps {
  action: () => void
}

export function HeroSection({ action }: HeroSectionProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className={`absolute inset-0 z-0`}>
        <ParticleScene />
      </div>
      <div className="relative z-10 text-center text-white hero-content">
        <h1>
          <GlitchText
            text={globalData.heroTitle}
            className="text-6xl md:text-8xl font-bold mb-5"
          />
        </h1>
        <p className={`text-xl md:text-2xl mb-8 ${styles.fadeInUp} ${isLoaded ? styles.visible : ''}`}>
          {globalData.heroDescription}
        </p>
        <BasicButton
          title={globalData.heroButton}
          action={action}
        />
      </div>
    </section>
  )
}