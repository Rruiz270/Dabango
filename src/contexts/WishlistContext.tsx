'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface WishlistItem {
  variantId: string
  productId: string
  name: string
  size: string
  color: string
  price: number
  image: string
}

interface WishlistContextType {
  items: WishlistItem[]
  addItem: (item: WishlistItem) => void
  removeItem: (variantId: string) => void
  isInWishlist: (variantId: string) => boolean
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined)

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<WishlistItem[]>([])

  useEffect(() => {
    const savedWishlist = localStorage.getItem('wishlist')
    if (savedWishlist) {
      setItems(JSON.parse(savedWishlist))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(items))
  }, [items])

  const addItem = (item: WishlistItem) => {
    setItems(prevItems => {
      const exists = prevItems.some(i => i.variantId === item.variantId)
      if (!exists) {
        return [...prevItems, item]
      }
      return prevItems
    })
  }

  const removeItem = (variantId: string) => {
    setItems(prevItems => prevItems.filter(item => item.variantId !== variantId))
  }

  const isInWishlist = (variantId: string) => {
    return items.some(item => item.variantId === variantId)
  }

  return (
    <WishlistContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        isInWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

export const useWishlist = () => {
  const context = useContext(WishlistContext)
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider')
  }
  return context
}