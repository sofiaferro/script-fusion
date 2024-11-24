'use client'

import { useState, useCallback, useEffect } from 'react'
import Image from 'next/image'
import { PrintButton } from './print-button'

interface CommunityCardProps {
  name: string
  image: string
  description: string
  famousDish: string
  yearOfArrival: string
  imageName: string
  imagePath: string
}

export function CommunityCard({ 
  name, 
  image, 
  description, 
  famousDish, 
  yearOfArrival,
  imagePath,
  imageName,
}: CommunityCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  const handleHover = useCallback(() => {
    setIsHovered(true)
  }, [])

  const handleLeave = useCallback(() => {
    setIsHovered(false)
  }, [])

  const handleError = useCallback((errorMessage: string) => {
    setError(errorMessage)
  }, [])

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(null), 5000)
      return () => clearTimeout(timer)
    }
  }, [error])

  return (
    <>
      <div
        className="bg-black/40 backdrop-blur-sm rounded-lg border border-white/10 shadow-lg overflow-hidden relative transition-transform duration-200 ease-in-out hover:-translate-y-2"
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image}
            alt={`Representación de la comunidad ${name}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'cover' }}
            className={`relative z-10 opacity-30 transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setIsLoaded(true)}
            loading="lazy"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-30 transition-opacity duration-300"
            style={{ opacity: isHovered ? 0.8 : 0.6 }}
          />
        </div>
        <div className="p-6 relative z-40">
          <h3 className="text-2xl font-semibold mb-2 text-white">
            {name}
          </h3>
          <p className="text-sm text-gray-300 mb-4">
            {description}
          </p>
          <div className="flex justify-between items-center mb-4">
            <div>
              <strong className="text-white/90">Llegada:</strong>
              <p className="text-sm text-gray-400">{yearOfArrival}</p>
            </div>
          </div>
          <div className="mt-4">
            <PrintButton imagePath={imagePath} imageName={imageName} onError={handleError}/>
          </div>
        </div>
      </div>
      {error && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full" role="alert">
            <h4 className="text-lg font-bold text-red-600 mb-2">Error</h4>
            <p className="text-gray-700">{error}</p>
            <button 
              onClick={() => setError(null)}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  )
}