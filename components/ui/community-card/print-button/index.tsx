'use client'

interface PrintButtonProps {
  isPrinting: boolean
  isPrinterAvailable?: boolean
  action: () => void
}

export function PrintButton({ isPrinting, action }: PrintButtonProps) {

  return (
    <button
      onClick={action}
      disabled={isPrinting}
      className={`bg-white text-gray-800 font-bold py-2 px-6 rounded-lg text-lg relative overflow-hidden group`}
      aria-label={isPrinting ? "Imprimiendo..." : "Imprimir"}
    >
      <span className="relative z-10">
        {isPrinting ? '[[ Imprimiendo... ]]' : '[[ Imprimir ]]'}
      </span>
    </button>
  )
}