'use client'

import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import Image from 'next/image'

export function HeroSection() {
  const { t } = useTranslation('common')

  return (
    <section className="relative h-[600px] bg-gradient-to-br from-dabango-navy to-dabango-navy-dark text-white">
      <div className="absolute inset-0 bg-black/20" />
      
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t('brand')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-dabango-lime">
            {t('tagline')}
          </p>
          <p className="text-lg mb-8 text-gray-200">
            As melhores marcas esportivas para crianças e adolescentes. 
            Nike, Adidas, Puma e muito mais!
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/kids" className="btn-primary text-lg px-8 py-3">
              Comprar Infantil
            </Link>
            <Link href="/teens" className="btn-outline bg-white/10 text-white border-white hover:bg-white hover:text-dabango-navy text-lg px-8 py-3">
              Comprar Juvenil
            </Link>
          </div>
        </div>
        
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2">
          <div className="relative w-[500px] h-[500px]">
            <div className="absolute inset-0 bg-dabango-lime rounded-full opacity-20 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}