'use client'

import { Header } from '@/components/sections/header'
import { HeroSection } from '@/components/sections/hero'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();

  const action = () => {
    router.push('/nodos');
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <div className="p-5">
          <HeroSection action={action} />
        </div>
      </main>
    </div>
  )
}