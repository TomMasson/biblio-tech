import EditLivrePageComponent from "@/components/pages/admin/edit-livre-page-component";
import PageLayout from "@/components/pages/page-layout";

const EditLivrePage = ({ params }) => {
	return (
		<PageLayout titre={"Enregistrer un nouveau livre"}>
			<EditLivrePageComponent livreId={params.livreId} />
		</PageLayout>
	);
};

export default EditLivrePage;
