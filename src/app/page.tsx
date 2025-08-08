'use client'

import { useTranslation } from 'react-i18next'
import { HeroSection } from '@/components/home/HeroSection'
import { FeaturedProducts } from '@/components/home/FeaturedProducts'
import { BrandSection } from '@/components/home/BrandSection'
import { CategoryGrid } from '@/components/home/CategoryGrid'

export default function HomePage() {
  const { t } = useTranslation('common')

  return (
    <div className="min-h-screen">
      <HeroSection />
      <CategoryGrid />
      <FeaturedProducts />
      <BrandSection />
    </div>
  )
}