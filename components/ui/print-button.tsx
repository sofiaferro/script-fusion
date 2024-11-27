'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import styles from './print-button.module.css'

interface PrintButtonProps {
  imagePaths: string[]
  onError: (error: string) => void
}

export function PrintButton({ imagePaths, onError }: PrintButtonProps) {
  const [isPrinting, setIsPrinting] = useState(false)

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
      onError('Ups. No pudimos imprimir tu pedido *-*. Por favor, intentá una vez más.')
    } finally {
      setIsPrinting(false)
    }
  }

  return (
    <Button
      onClick={handlePrint}
      disabled={isPrinting}
      className={`${styles.printButton} bg-white text-black hover:bg-white hover:text-black`}
      aria-label={isPrinting ? "Imprimiendo..." : "Imprimir"}
    >
      <span className="relative z-10">
        {isPrinting ? '[[ Imprimiendo... ]]' : '[[ Imprimir ]]'}
      </span>
    </Button>
  )
}