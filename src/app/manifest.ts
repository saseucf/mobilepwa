import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Next.js Mobile PWA',
    short_name: 'NextPWA',
    description: 'A simple Next.js PWA boilerplate with Supabase and TailwindCSS',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '16x16 32x32',
        type: 'image/x-icon',
      },
    ],
  }
}
