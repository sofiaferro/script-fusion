'use client'

import React from 'react'
import styles from './index.module.css'

interface GlitchTextProps {
  text: string
  className?: string
}

export function GlitchText({ text, className = '' }: GlitchTextProps) {
  return (
    <div className={`${styles.glitchWrapper} ${className}`}>
      <div className={styles.glitch} data-text={text}>
        {text}
      </div>
    </div>
  )
}

