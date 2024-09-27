import LivresComponent from "@/components/pages/front/livres-component";
import PageLayout from "@/components/pages/page-layout";

function LivresPage() {
	return (
		<PageLayout titre={"Livres"}>
			<LivresComponent />
		</PageLayout>
	);
}

export default LivresPage;
