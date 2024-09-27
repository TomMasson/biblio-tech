"use client";

import DetailAuteurComponent from "@/components/pages/front/auteur-detail-component";
import PageLayout from "@/components/pages/page-layout";
import { useState } from "react";

function AuteurDetailPage({ params }) {
	const [nomAuteur, setNomAuteur] = useState("Zoom sur un auteur");
	return (
		<PageLayout titre={nomAuteur}>
			<DetailAuteurComponent
				auteurId={params.auteurId}
				setTitrePage={setNomAuteur}
			/>
		</PageLayout>
	);
}

export default AuteurDetailPage;
