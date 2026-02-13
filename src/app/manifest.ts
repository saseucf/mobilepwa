import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'UCF SASE Mobile',
    short_name: 'SASE UCF',
    description: 'Society of Asian Scientists and Engineers Mobile App',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0f6cb6',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '16x16 32x32',
        type: 'image/x-icon',
      },
      {
        src: '/UCF_SASE_Logo.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}
