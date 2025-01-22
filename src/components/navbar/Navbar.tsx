
'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Search, Heart, ShoppingCart, UserCircle, X, Menu } from 'lucide-react'
import { useAtom } from 'jotai'
import { cartNumber } from '@/globalState/globalState'
import emailjs from 'emailjs-com'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [cartNum] = useAtom(cartNumber)

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format'
    }

    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }

    if (!isLogin && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      // EmailJS integration
      const templateParams = {
        email: formData.email,
        message: isLogin
          ? 'User logged in successfully!'
          : 'New user signed up successfully!',
      }

      try {
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          templateParams,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        )
        console.log('Email sent successfully!')
        setShowAuthModal(false)
        setFormData({ email: '', password: '', confirmPassword: '' })
        setErrors({})
      } catch (error) {
        console.error('Error sending email:', error)
      }
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

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
            <button
              aria-label="Account"
              className="p-2 hover:bg-black/5 rounded-full transition-colors"
              onClick={() => setShowAuthModal(true)}
            >
              <UserCircle className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
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

      {/* Auth Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-full max-w-md">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">
                {isLogin ? 'Login' : 'Sign Up'}
              </h2>
              <button
                onClick={() => {
                  setShowAuthModal(false)
                  setErrors({})
                }}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                  required
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md"
                  required
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
              </div>

              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-md"
                    required
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors"
              >
                {isLogin ? 'Login' : 'Sign Up'}
              </button>
            </form>

            <p className="mt-4 text-center">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-blue-500 hover:underline"
              >
                {isLogin ? 'Sign Up' : 'Login'}
              </button>
            </p>
          </div>
        </div>
      )}
    </nav>
  )
}


















































