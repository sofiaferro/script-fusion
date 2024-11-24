'use client'

import globalData from '@/app/data/global-data'

export function Footer() {
    return (
        <footer className="bg-black text-white py-8">
            <div className="container mx-auto px-4 text-center">
                {`${new Date().getFullYear()} - ${globalData.projectName}`}
            </div>
        </footer>
    )
}

