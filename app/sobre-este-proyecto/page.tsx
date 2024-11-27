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
{/*                   <p>
                    La Comuna 3, que abarca los barrios de <b>Balvanera</b> y San Cristóbal, es la tercera con mayor
                    población migrante en la Ciudad de Buenos Aires, después del Centro y la zona Sur. Según datos
                    del Instituto Nacional de Estadística y Censos (INDEC), en ambos barrios residen 39.266 migrantes,
                    una cifra publicada en el marco del <a href="https://censo.gob.ar/index.php/datos_definitivos_caba/" className="underline">
                      Censo Nacional 2022.
                    </a>
                  </p> */}
                  <p>
                    <b>{globalData.projectName}</b> funciona como un archivo vivo que explora las 
                    prácticas culinarias de las comunidades migrantes del barrio de <b>Balvanera</b>, con un enfoque en la 
                    apropiación, dispersión y transmisión de tradiciones que dieron forma a su identidad 
                    gastronómica. El proyecto se materializa en una mesa interactiva que recorre los lazos 
                    entre el barrio y sus diversas comunidades, invitando a reflexionar sobre las relaciones 
                    culturales que nutren este espacio urbano.
                  </p>
                  <p>
                    La información recopilada está organizada en <b>nodos</b>, cada uno representando a una
                    comunidad del barrio. Al tocar el botón <i>Imprimir</i>, los visitantes podrán llevarse un fragmento del
                    archivo en formato físico. Este gesto simboliza la continuidad en la difusión de
                    ingredientes, sabores y relatos, permitiendo que cada persona contribuya a la 
                    resignificación de las prácticas culinarias exploradas en este proyecto.
                  </p>
                </div>
              </div>
            </div>
            <div className={`max-w-4xl mx-auto mb-16 ${styles.contentAnimation}`} style={{ animationDelay: '0.2s' }}>
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