import AdminHeaderComponent from "@/components/sections/header-admin";

export default function Layout({ children }) {
	return (
		<>
			<AdminHeaderComponent />
			{children}
		</>
	);
}
