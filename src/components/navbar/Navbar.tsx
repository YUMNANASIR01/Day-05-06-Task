'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Search, Heart, ShoppingCart, UserCircle, X, Menu } from 'lucide-react'
import { useAtom } from 'jotai'
import { cartNumber } from '@/globalState/globalState'


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [cartNum] = useAtom(cartNumber)


  return (
    <nav className="relative w-full bg-white z-50">
      {/* Main container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:bg-black/5"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Main menu"
            >
              <Menu className="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Logo"
                height={32}
                width={50}
                className="h-8 w-auto sm:h-10"
              />
              <span className="font-bold font-montserrat text-xl sm:text-2xl md:text-[25px]">
                Furniro
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1 px-2 lg:ml-[400px] lg:justify-start">
            <div className="flex space-x-8">
              <Link
                href="/"
                className="text-base font-medium font-poppins text-black hover:text-black/70 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/shop"
                className="text-base font-medium font-poppins text-black hover:text-black/70 transition-colors"
              >
                Shop
              </Link>
              <Link
                href="/blog"
                className="text-base font-medium font-poppins text-black hover:text-black/70 transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-base font-medium font-poppins text-black hover:text-black/70 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Icons Section */}
          <div className="flex items-center gap-2 sm:gap-4">
           <Link href={'/login'}>
           <button
              aria-label="Account"
              className="p-2 hover:bg-black/5 rounded-full transition-colors"
            >
              <UserCircle className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            </Link>
            <Link href={'/shop'}>
              <button
                aria-label="Search"
                className="p-2 hover:bg-black/5 rounded-full transition-colors"
              >
                <Search className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </Link>
            <Link href={'/whishlist'}>
              <button
                aria-label="Wishlist"
                className="p-2 hover:bg-black/5 rounded-full transition-colors"
              >
                <Heart className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </Link>
            <Link href="/cart">
              <button
                aria-label="Shopping Cart"
                className="p-2 hover:bg-black/5 rounded-full transition-colors relative"
              >
                <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
                {cartNum > 0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                    {cartNum}
                  </span>
                )}
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'} absolute top-0 left-0 w-full bg-white p-4`}>
        {/* Cross icon to close the menu */}
        <div className="flex justify-end">
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 text-black hover:bg-black/10 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Menu items */}
        <div className="flex flex-col space-y-4">
          <Link href="/" className="text-black">Home</Link>
          <Link href="/shop" className="text-black">Shop</Link>
          <Link href="/blog" className="text-black">Blog</Link>
          <Link href="/contact" className="text-black">Contact</Link>
        </div>
      </div>

      
    </nav>
  )
}















































