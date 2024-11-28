'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import { PrintButton } from './print-button'
import { useRouter } from 'next/navigation'
import { ErrorModal } from '../error-print-modal'

interface CommunityCardProps {
  name: string
  image: string
  description: string
  imagePaths: string[]
  isPrinterAvailable?: boolean
  setError: (error: boolean) => void
}

export function CommunityCard({
  name,
  image,
  description,
  imagePaths,
  isPrinterAvailable = true,
  setError,
}: CommunityCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isPrinting, setIsPrinting] = useState(false)
  const router = useRouter()

  const handleHover = useCallback(() => {
    setIsHovered(true)
  }, [])

  const handleLeave = useCallback(() => {
    setIsHovered(false)
  }, [])


  const handlePrint = async () => {
    setIsPrinting(true)

    try {
      const randomImagePath = imagePaths[Math.floor(Math.random() * imagePaths.length)]

      const response = await fetch(randomImagePath)
      if (!response.ok) {
        throw new Error('Failed to fetch the image')
      }
      const blob = await response.blob()

      const formData = new FormData()
      formData.append('image', blob, randomImagePath.split('/').pop())

      const printResponse = await fetch('/api/print', {
        method: 'POST',
        body: formData,
      })

      if (!printResponse.ok) {
        throw new Error('Failed to send print request')
      }

      const result = await printResponse.json()
      return result;
    } catch (error) {
      setError(true)
    } finally {
      setIsPrinting(false)
    }
  }

  const handleDownload = () => {
    const randomImagePath = imagePaths[Math.floor(Math.random() * imagePaths.length)]
    return router.push(randomImagePath)
  }

  const buttonAction = isPrinterAvailable ? handlePrint : handleDownload;

  return (
    <div
      className="bg-black/40 backdrop-blur-sm rounded-lg border border-white/10 shadow-lg overflow-hidden relative transition-transform duration-200 ease-in-out hover:-translate-y-2 max-w-sm w-full hover:cursor-pointer" onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      onClick={buttonAction}
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
        <div className="mt-4">
          <PrintButton isPrinting={isPrinting} isPrinterAvailable={isPrinterAvailable} action={buttonAction} />
        </div>
      </div>
    </div>

  )
}
