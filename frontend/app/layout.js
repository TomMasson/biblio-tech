import "./globals.scss";
import { Protest_Guerrilla, Roboto_Condensed } from "next/font/google";

const fontTitle = Protest_Guerrilla({
	weight: "400",
	subsets: ["latin"],
	variable: "--fontTitle",
	display: "swap",
});

const fontText = Roboto_Condensed({
	weight: "400",
	subsets: ["latin"],
	variable: "--fontText",
	display: "swap",
});

export const metadata = {
	title: "Biblio-Tech",
	description: "Une bibliothèque enligne, pour consulter nos livres",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${fontTitle.variable} ${fontText.variable}`}>
				{children}
			</body>
		</html>
	);
}
