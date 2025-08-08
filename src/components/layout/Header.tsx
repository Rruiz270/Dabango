'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { ShoppingCart, Heart, User, Menu, X, Search } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'
import { useAuth } from '@/contexts/AuthContext'
import { LanguageSwitcher } from './LanguageSwitcher'

export function Header() {
  const { t } = useTranslation('common')
  const { items } = useCart()
  const { user } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const cartItemCount = items.reduce((total, item) => total + item.quantity, 0)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="bg-dabango-navy text-white py-2">
        <div className="container mx-auto px-4 text-center text-sm">
          <p>{t('tagline')}</p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-dabango-lime rounded-full flex items-center justify-center">
              <span className="text-dabango-navy font-bold text-lg">D</span>
            </div>
            <span className="text-2xl font-bold text-dabango-navy">{t('brand')}</span>
          </Link>

          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <form className="w-full flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder={t('search.placeholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-field rounded-r-none"
              />
              <button type="submit" className="btn-primary rounded-l-none px-6">
                <Search size={20} />
              </button>
            </form>
          </div>

          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            
            <Link href="/wishlist" className="hidden md:flex items-center space-x-1 hover:text-dabango-lime">
              <Heart size={24} />
            </Link>

            <Link href="/account" className="hidden md:flex items-center space-x-1 hover:text-dabango-lime">
              <User size={24} />
              {user && <span className="text-sm">{user.name}</span>}
            </Link>

            <Link href="/cart" className="flex items-center space-x-1 hover:text-dabango-lime relative">
              <ShoppingCart size={24} />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-dabango-lime text-dabango-navy text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <nav className="hidden md:flex border-t border-gray-200">
          <ul className="flex space-x-8 py-4">
            <li><Link href="/" className="hover:text-dabango-lime font-medium">{t('nav.home')}</Link></li>
            <li><Link href="/shop" className="hover:text-dabango-lime font-medium">{t('nav.shop')}</Link></li>
            <li><Link href="/kids" className="hover:text-dabango-lime font-medium">{t('nav.kids')}</Link></li>
            <li><Link href="/teens" className="hover:text-dabango-lime font-medium">{t('nav.teens')}</Link></li>
            <li><Link href="/brands" className="hover:text-dabango-lime font-medium">{t('nav.brands')}</Link></li>
            <li><Link href="/sports" className="hover:text-dabango-lime font-medium">{t('nav.sports')}</Link></li>
            <li><Link href="/sale" className="hover:text-dabango-lime font-medium text-red-500">{t('nav.sale')}</Link></li>
          </ul>
        </nav>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              <li><Link href="/" className="block hover:text-dabango-lime">{t('nav.home')}</Link></li>
              <li><Link href="/shop" className="block hover:text-dabango-lime">{t('nav.shop')}</Link></li>
              <li><Link href="/kids" className="block hover:text-dabango-lime">{t('nav.kids')}</Link></li>
              <li><Link href="/teens" className="block hover:text-dabango-lime">{t('nav.teens')}</Link></li>
              <li><Link href="/brands" className="block hover:text-dabango-lime">{t('nav.brands')}</Link></li>
              <li><Link href="/sports" className="block hover:text-dabango-lime">{t('nav.sports')}</Link></li>
              <li><Link href="/sale" className="block hover:text-dabango-lime text-red-500">{t('nav.sale')}</Link></li>
              <li><Link href="/wishlist" className="block hover:text-dabango-lime">{t('nav.wishlist')}</Link></li>
              <li><Link href="/account" className="block hover:text-dabango-lime">{t('nav.account')}</Link></li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}