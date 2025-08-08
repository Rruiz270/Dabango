'use client'

import { useTranslation } from 'react-i18next'
import { Globe } from 'lucide-react'

export function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === 'pt' ? 'en' : 'pt'
    i18n.changeLanguage(newLang)
  }

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-1 hover:text-dabango-lime"
      aria-label="Change language"
    >
      <Globe size={20} />
      <span className="text-sm font-medium">{i18n.language.toUpperCase()}</span>
    </button>
  )
}