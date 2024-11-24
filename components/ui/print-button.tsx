'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import styles from './print-button.module.css'

interface PrintButtonProps {
  imagePath: string
  imageName: string
  onError: (error: string) => void
}

export function PrintButton({ imagePath, imageName, onError }: PrintButtonProps) {
  const [isPrinting, setIsPrinting] = useState(false)

  const handlePrint = async () => {
    setIsPrinting(true)
    try {
      const formData = new FormData()
      const response = await fetch(imagePath)
      const blob = await response.blob()
      formData.append('image', blob, `${imageName}`)

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