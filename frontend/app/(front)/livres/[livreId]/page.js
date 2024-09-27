"use client";

import DetailLivreComponent from "@/components/pages/front/livre-detail-component";
import PageLayout from "@/components/pages/page-layout";
import React, { useState } from "react";

function LivreDetailPage({ params }) {
	const [pageTitre, setPageTitre] = useState("Plus d'infos");

	return (
		<PageLayout titre={pageTitre}>
			<DetailLivreComponent
				livreId={params.livreId}
				setTitrePage={setPageTitre}
			/>
		</PageLayout>
	);
}

export default LivreDetailPage;
