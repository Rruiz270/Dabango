'use client'

import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import Image from 'next/image'

const brands = [
  { id: 'nike', name: 'Nike', logo: '/images/brands/nike.png' },
  { id: 'adidas', name: 'Adidas', logo: '/images/brands/adidas.png' },
  { id: 'puma', name: 'Puma', logo: '/images/brands/puma.png' },
  { id: 'under-armour', name: 'Under Armour', logo: '/images/brands/under-armour.png' },
  { id: 'new-balance', name: 'New Balance', logo: '/images/brands/new-balance.png' },
  { id: 'reebok', name: 'Reebok', logo: '/images/brands/reebok.png' },
]

export function BrandSection() {
  const { t } = useTranslation('common')

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-dabango-navy">
          Nossas Marcas
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {brands.map((brand) => (
            <Link
              key={brand.id}
              href={`/brand/${brand.id}`}
              className="bg-white rounded-lg p-6 flex items-center justify-center hover:shadow-lg transition-shadow duration-200 h-32"
            >
              <div className="text-2xl font-bold text-gray-600">{brand.name}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}