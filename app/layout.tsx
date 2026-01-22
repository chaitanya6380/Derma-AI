import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Sora } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });
const sora = Sora({ subsets: ['latin'], variable: '--font-sora' });

export const metadata: Metadata = {
    title: 'Skinapse Labs',
    description: 'Holistic Skin Diagnosis Powered By Multilayer Image Analysis and Patient Context.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${sora.variable}`}>
            <body className="font-sans antialiased bg-white">
                {children}
            </body>
        </html>
    );
}
