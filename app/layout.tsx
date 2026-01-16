import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Sora } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });
const sora = Sora({ subsets: ['latin'], variable: '--font-sora' });

export const metadata: Metadata = {
    title: 'DermAI | Precision Diagnostics',
    description: 'Clinical-grade AI diagnostics powered by 3D volumetric scanning.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${sora.variable}`}>
            <body className="font-sans antialiased bg-slate-950">
                {children}
            </body>
        </html>
    );
}
