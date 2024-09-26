import HeaderComponent from "@/components/sections/header";

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<HeaderComponent />
				{children}
			</body>
		</html>
	);
}
