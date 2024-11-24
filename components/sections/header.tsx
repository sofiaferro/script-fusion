'use client'

import React, { useMemo } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import globalData from '@/app/data/global-data'

const MenuItem = React.memo(({ name, id, currentPath }: { name: string; id: string; currentPath: string }) => {
  if (currentPath === `/${id}`) return null;
  
  return (
    <li>
      <Link
        href={`/${id}`}
        className="hover:text-gray-300 transition-colors"
      >
        {name}
      </Link>
    </li>
  );
});

MenuItem.displayName = 'MenuItem';

const HeaderTitle = React.memo(({ pathname }: { pathname: string }) => {
  if (pathname === '/') return null;
  
  return (
    <Link href="/" className="text-2xl font-bold">
      {globalData.headerName}
    </Link>
  );
});

HeaderTitle.displayName = 'HeaderTitle';

export function Header() {
  const pathname = usePathname()

  const menuItems = useMemo(() => 
    globalData.menuItems.map((item) => (
      <MenuItem key={item.name} {...item} currentPath={pathname} />
    )),
    [pathname]
  );

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="fixed top-0 left-0 right-0 z-50 bg-opacity-90 backdrop-blur-md transition-colors duration-700 ease-out bg-black text-white"
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex-1">
          <HeaderTitle pathname={pathname} />
        </div>
        <ul className="flex space-x-6">
          {menuItems}
        </ul>
      </nav>
    </motion.header>
  )
}