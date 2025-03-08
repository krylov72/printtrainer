import type { Metadata } from 'next'
import { Quantico } from 'next/font/google'
import '../styles/globals.scss'
import { Header } from '@/components/Header/Header'
import { ParticlesBackground } from '@/components/ParticlesBackground/ParticlesBackground'
import { TrainerProvider } from '@/context/TrainerContext'
import MainContainer from '@/components/MainContainer/MainContainer'

const quantico = Quantico({
    variable: '--font-quantico',
    subsets: ['latin'],
    weight: '400',
})

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${quantico.variable} antialiased container `}>
                <ParticlesBackground />
                <TrainerProvider>
                    <MainContainer>
                        <Header />
                        {children}
                    </MainContainer>
                </TrainerProvider>
            </body>
        </html>
    )
}
