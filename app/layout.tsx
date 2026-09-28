import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider, themeInitScript } from '@/components/theme-provider'
import { Navbar } from '@/components/site/navbar'
import { Footer } from '@/components/site/footer'
import './globals.css'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: {
    default: 'AeternumNova | Building Technology for Problems That Matter',
    template: '%s | AeternumNova',
  },
  description:
    'AeternumNova is a technology and innovation company building visionary products designed to solve meaningful real-world problems.',
  applicationName: 'AeternumNova',
  openGraph: {
    type: 'website',
    siteName: 'AeternumNova',
    title: 'AeternumNova | Building Technology for Problems That Matter',
    description:
      'AeternumNova is a technology and innovation company building visionary products designed to solve meaningful real-world problems.',
  },
  icons: {
    icon: [
      { url: '/logo-mark.png', type: 'image/png' },
      { url: '/icon-32.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0f1e' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} bg-background`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="antialiased grid-bg">
        <ThemeProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
