import { bluuSuperstarFont, maisonNeueFont, sairaFont } from "@/config/fonts";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Teclados",
	description: "Teclados mecânicos e magnéticos personalizados e de alta qualidade.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${bluuSuperstarFont.variable} ${maisonNeueFont.variable} ${sairaFont.variable}`}
			>
				{children}
			</body>
		</html>
	);
}
