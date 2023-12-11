import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/nav'
import { Rubik } from 'next/font/google'

const inter = Rubik({
	subsets: ['latin'],
	weight: '400'
});


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={`${inter.className} bg-[var(--background)] text-[var(--base)]`}>
				<Nav />
				{children}
			</body>
		</html>
	)
}
