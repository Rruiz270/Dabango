'use client'

import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import Image from 'next/image'
import { Heart, ShoppingCart } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'
import { useWishlist } from '@/contexts/WishlistContext'

interface ProductCardProps {
  product: {
    id: string
    name: string
    price: number
    image: string
    brand: string
    ageGroup: 'KIDS' | 'TEENS'
  }
}

export function ProductCard({ product }: ProductCardProps) {
  const { t } = useTranslation('common')
  const { addItem } = useCart()
  const { addItem: addToWishlist, isInWishlist } = useWishlist()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    addItem({
      variantId: `${product.id}-default`,
      productId: product.id,
      name: product.name,
      size: 'M',
      color: 'Default',
      price: product.price,
      image: product.image,
      quantity: 1,
    })
  }

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault()
    addToWishlist({
      variantId: `${product.id}-default`,
      productId: product.id,
      name: product.name,
      size: 'M',
      color: 'Default',
      price: product.price,
      image: product.image,
    })
  }

  return (
    <Link href={`/product/${product.id}`} className="card group">
      <div className="relative aspect-square bg-gray-100">
        <div className="absolute top-2 right-2 z-10">
          <button
            onClick={handleToggleWishlist}
            className={`p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow ${
              isInWishlist(`${product.id}-default`) ? 'text-red-500' : 'text-gray-600'
            }`}
          >
            <Heart size={20} fill={isInWishlist(`${product.id}-default`) ? 'currentColor' : 'none'} />
          </button>
        </div>
        
        {product.ageGroup && (
          <div className="absolute top-2 left-2 z-10">
            <span className={`px-2 py-1 text-xs font-medium rounded ${
              product.ageGroup === 'KIDS' 
                ? 'bg-blue-100 text-blue-800' 
                : 'bg-purple-100 text-purple-800'
            }`}>
              {product.ageGroup === 'KIDS' ? 'Infantil' : 'Juvenil'}
            </span>
          </div>
        )}
        
        <div className="w-full h-full flex items-center justify-center p-4">
          <div className="text-6xl font-bold text-gray-300">{product.brand[0]}</div>
        </div>
      </div>
      
      <div className="p-4">
        <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
        <h3 className="font-medium text-dabango-navy mb-2 line-clamp-2">
          {product.name}
        </h3>
        <div className="flex items-center justify-between">
          <p className="text-xl font-bold text-dabango-navy">
            {t('currency')} {product.price.toFixed(2)}
          </p>
          <button
            onClick={handleAddToCart}
            className="p-2 bg-dabango-lime hover:bg-dabango-lime-dark rounded-full text-dabango-navy transition-colors"
            aria-label={t('product.addToCart')}
          >
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </Link>
  )
}