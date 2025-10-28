import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Olukunle Owolabi - Lead AI Engineer & Applied Scientist',
    short_name: 'Olukunle Owolabi',
    description: 'Lead AI Engineer & Applied Scientist with 7+ years of End-to-End AI & ML experience. Ex Meta Engineer, PhD at Tufts.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/og-image.png',
        sizes: '1200x630',
        type: 'image/png',
      },
    ],
    categories: ['technology', 'education', 'business'],
    lang: 'en',
    orientation: 'portrait-primary',
  }
}








