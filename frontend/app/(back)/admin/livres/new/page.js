import NewPageComponent from "@/components/pages/admin/new-page-component";
import PageLayout from "@/components/pages/page-layout";

function AdminPage() {
	return (
		<PageLayout titre={"Enregistrer un nouveau livre"}>
			<NewPageComponent />
		</PageLayout>
	);
}

export default AdminPage;
