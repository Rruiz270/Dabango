'use client'

import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import { Shirt, Footprints, Dumbbell, Waves, Trophy, Heart } from 'lucide-react'

const categories = [
  { id: 'clothing', icon: Shirt, nameKey: 'Roupas', color: 'bg-blue-500' },
  { id: 'footwear', icon: Footprints, nameKey: 'Calçados', color: 'bg-green-500' },
  { id: 'equipment', icon: Dumbbell, nameKey: 'Equipamentos', color: 'bg-purple-500' },
  { id: 'swimming', icon: Waves, nameKey: 'Natação', color: 'bg-cyan-500' },
  { id: 'team-sports', icon: Trophy, nameKey: 'Esportes Coletivos', color: 'bg-orange-500' },
  { id: 'fitness', icon: Heart, nameKey: 'Fitness', color: 'bg-pink-500' },
]

export function CategoryGrid() {
  const { t } = useTranslation('common')

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-dabango-navy">
          Categorias Populares
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Link
                key={category.id}
                href={`/category/${category.id}`}
                className="group text-center"
              >
                <div className={`${category.color} rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                  <Icon size={40} className="text-white" />
                </div>
                <h3 className="text-sm font-medium text-dabango-navy group-hover:text-dabango-lime">
                  {category.nameKey}
                </h3>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}