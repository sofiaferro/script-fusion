'use client'

import { useEffect, useState } from 'react'
import { Header } from '@/components/sections/header'
import { GlitchText } from '@/components/ui/glitch-text'
import { ParticleScene } from '@/components/ui/particle-scene'
import globalData from '../data/global-data'
import styles from './sobre-este-proyecto.module.css'

export default function ContactPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <div className={`absolute inset-0 z-0`}>
        <ParticleScene />
      </div>
      <div className="relative z-10">
        <main className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className={`text-center mb-12 lg:mb-16 ${styles.titleAnimation}`}>
              <GlitchText
                text={globalData.secondSectionTitle}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white"
              />
            </h1>
            <div className={`max-w-4xl mx-auto mb-16 ${styles.contentAnimation}`}>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 shadow-xl">
                <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                  <p>
                    El proyecto <b>{globalData.projectName}</b> es un archivo interactivo que explora las prácticas
                    culinarias del barrio de Balvanera, con un enfoque en la apropiación, dispersión y
                    transmisión de ingredientes y sabores tradicionales, derivados de los procesos
                    migratorios que fueron moldeando su identidad gastronómica.
                  </p>
                  <p>
                    La información recopilada está organizada por <b>nodos</b>, cada uno representando a una
                    comunidad inmigrante del barrio. Al tapear el botón <i>Imprimir</i>, los visitantes podrán llevar consigo un fragmento del
                    archivo en formato físico. Este gesto simboliza la continuidad de la dispersión de
                    ingredientes, sabores y relatos, permitiendo que cada persona contribuya a la transmisión
                    y resignificación de las prácticas culinarias exploradas en el proyecto.
                  </p>
                </div>
              </div>
            </div>
            <div className={`max-w-4xl mx-auto mb-16 ${styles.contentAnimation}`} style={{animationDelay: '0.2s'}}>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 shadow-xl">
                <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                  <p><b>
                    {globalData.projectName}</b> es un proyecto integrado por: Iris Saladino, Isis Vargas y Sofía Ferro</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}