'use client';

import { GlitchText } from "./glitch-text";
import styles from '@/app/globals.module.css';

export function SuccessModal() {
    return (
        <div className="fixed inset-0 p-4 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div
                className={`bg-black rounded-lg p-8 shadow-xl max-w-sm w-full ${styles.buttonBorder}`}
                role="alert"
            >
                <GlitchText text={'Cargando...'} className='text-white pb-10 text-3xl font-bold' />
                <div className="flex justify-center items-center pb-8">
                    <div className="w-9 h-9 border-4 border-gray-200 border-l-black rounded-full animate-spin"></div>
                </div>
                <p className="text-white text-center">
                    Por favor, espera mientras procesamos tu impresión.
                </p>
            </div>
        </div>
    );
}
