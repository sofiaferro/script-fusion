'use client'

import { GlitchText } from "./glitch-text";
import styles from '@/app/globals.module.css';

interface ErrorProps {
    onClose: () => void;
}

export function ErrorModal({ onClose }: ErrorProps) {
    return (
        <div className="fixed inset-0 p-4 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div
                className={`bg-black rounded-lg p-8 shadow-xl max-w-sm w-full ${styles.buttonBorder}`}
                role="alert"
            >
                <GlitchText text={'x Error x'} className='text-white pb-6 text-3xl font-bold' />
                <p className="text-white pb-10">
                    Ups. No pudimos imprimir tu pedido *-*. Por favor, intentá una vez más.
                </p>
                <button
                    onClick={onClose}
                    className={`bg-white text-gray-800 font-bold py-2 px-6 rounded-lg text-lg relative overflow-hidden group ${styles.button}`}
                >
                    [[ Cerrar ]]
                </button>
            </div>
        </div>
    );
}
