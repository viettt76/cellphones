import { Toaster } from '@/components/ui/sonner';
import I18nProvider from '@/providers/i18n-provider';
import QueryProvider from '@/providers/query-provider';
import StoreProvider from '@/providers/store-provider';
import { ThemeProvider } from '@/providers/theme-provider';
import type { Metadata } from 'next';
import { Be_Vietnam_Pro } from 'next/font/google';
import './globals.css';

const beVietnamPro = Be_Vietnam_Pro({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-be-vietnam-pro',
});

export const metadata: Metadata = {
    title: 'CellphoneS',
    description: 'CellphoneS',
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${beVietnamPro.variable} antialiased`}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                    <I18nProvider>
                        <QueryProvider>
                            <StoreProvider>
                                <Toaster position="top-right" richColors />
                                {children}
                            </StoreProvider>
                        </QueryProvider>
                    </I18nProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
