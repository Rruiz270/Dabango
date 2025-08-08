'use client'

import { useTranslation } from 'react-i18next'
import { ProductCard } from '@/components/products/ProductCard'

const mockProducts = [
  {
    id: '1',
    name: 'Tênis Nike Air Max Kids',
    price: 299.90,
    image: '/images/products/nike-air-max-kids.jpg',
    brand: 'Nike',
    ageGroup: 'KIDS' as const,
  },
  {
    id: '2',
    name: 'Camisa Adidas Treino Juvenil',
    price: 149.90,
    image: '/images/products/adidas-training-shirt.jpg',
    brand: 'Adidas',
    ageGroup: 'TEENS' as const,
  },
  {
    id: '3',
    name: 'Chuteira Puma Future Z',
    price: 399.90,
    image: '/images/products/puma-future-z.jpg',
    brand: 'Puma',
    ageGroup: 'TEENS' as const,
  },
  {
    id: '4',
    name: 'Mochila Nike Brasilia Kids',
    price: 199.90,
    image: '/images/products/nike-backpack-kids.jpg',
    brand: 'Nike',
    ageGroup: 'KIDS' as const,
  },
]

export function FeaturedProducts() {
  const { t } = useTranslation('common')

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-dabango-navy">
          Produtos em Destaque
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}