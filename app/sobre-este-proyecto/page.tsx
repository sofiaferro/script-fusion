'use client'

import React from 'react'
import { GlitchText } from '@/components/ui/glitch-text'
import { ParticleScene } from '@/components/ui/particle-scene'
import globalData from '../data/global-data'
import styles from './sobre-este-proyecto.module.css'
import globalStyles from '@/app/globals.module.css'
import ContentBox from '@/components/ui/content-box'
import { useRouter } from 'next/navigation'

export default function SobreEsteProyectoPage() {
  const router = useRouter();

  const action = () => {
    router.replace('/nodos');
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ParticleScene />
      </div>
      <div className="relative z-10">
        <main className="py-16 lg:py-24 h-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 items-center h-full">
            <h1 className={`text-center mb-12 lg:mb-16 ${styles.titleAnimation}`}>
              <GlitchText
                text={globalData.secondSectionTitle}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white"
              />
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <ContentBox>
                <GlitchText
                  text={globalData.projectName}
                  className='text-white pb-2 text-2xl font-bold'
                />
                <p>
                  {globalData.projectName} funciona como un archivo vivo que explora las
                  prácticas culinarias de las comunidades migrantes del barrio de <b>Balvanera</b>, con un enfoque en la
                  apropiación, dispersión y transmisión de tradiciones que dieron forma a su identidad
                  gastronómica.
                  <br />
                  <br />
                  El proyecto se materializa en una mesa interactiva que recorre los lazos
                  entre el barrio y sus diversas comunidades, invitando a reflexionar sobre las relaciones
                  culturales que nutren este espacio urbano.
                </p>
              </ContentBox>
              <ContentBox>
                <GlitchText
                  text={'Nodos'}
                  className='text-white pb-2 text-2xl font-bold'
                />
                <p className='pb-8'>
                  La información recopilada está organizada en <b>nodos</b>, cada uno representando a una
                  comunidad del barrio. Al tocar el botón <i>Imprimir</i>, los visitantes podrán llevarse un fragmento del
                  archivo en formato físico.
                  <br />
                  <br />
                  Este gesto simboliza la continuidad en la difusión de
                  ingredientes, sabores y relatos, permitiendo que cada persona contribuya a la
                  resignificación de las prácticas culinarias exploradas en este proyecto.
                </p>
                <button
                  onClick={action}
                  className={`bg-white text-gray-800 font-bold py-3 px-8 rounded-lg text-lg relative overflow-hidden group w-full mx-auto ${globalStyles.button} `}
                >
                  <p>[[ Ver Nodos ]]</p>
                </button>
              </ContentBox>
              <ContentBox>
                <div className="h-full flex flex-col justify-center">
                  <GlitchText
                    text={'Integrantes'}
                    className='text-white pb-2 text-2xl font-bold'
                  />
                  <p>
                    Iris Saladino, Isis Vargas y Sofía Ferro
                  </p>
                </div>
              </ContentBox>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
