'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  const { t } = useTranslation('common')

  return (
    <footer className="bg-dabango-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{t('brand')}</h3>
            <p className="text-sm text-gray-300 mb-4">{t('tagline')}</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-dabango-lime"><Facebook size={24} /></a>
              <a href="#" className="hover:text-dabango-lime"><Instagram size={24} /></a>
              <a href="#" className="hover:text-dabango-lime"><Youtube size={24} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.help')}</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-dabango-lime text-sm">{t('footer.about')}</Link></li>
              <li><Link href="/contact" className="hover:text-dabango-lime text-sm">{t('footer.contact')}</Link></li>
              <li><Link href="/shipping" className="hover:text-dabango-lime text-sm">{t('footer.shipping')}</Link></li>
              <li><Link href="/returns" className="hover:text-dabango-lime text-sm">{t('footer.returns')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/terms" className="hover:text-dabango-lime text-sm">{t('footer.terms')}</Link></li>
              <li><Link href="/privacy" className="hover:text-dabango-lime text-sm">{t('footer.privacy')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-sm">
                <Mail size={16} />
                <span>contato@dabango.com.br</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Phone size={16} />
                <span>0800 123 4567</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <MapPin size={16} />
                <span>São Paulo, SP - Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 DABANGO. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}