"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

function LivreDetailPage({ params }) {
	const [livreData, setLivreData] = useState(null);
	const livreId = params.livreId;

	useEffect(() => {
		const fetchData = async () => {
			const result = await fetch(
				`http://localhost:3001/livres/${livreId}`
			);
			const jsonResult = await result.json();
			setLivreData(jsonResult);
		};

		fetchData();
	}, []);

	if (livreData === null) {
		return <p>Chargement des informations...</p>;
	}

	const auteur = livreData.auteur.nom ?? "Inconnu";
	const auteurId = livreData.auteur.id ?? 0;

	return (
		<div className="page-livre-detail">
			<h1>{livreData.titre}</h1>
			<div>Genre : {livreData.genre}</div>
			<div>
				Auteur: <Link href={`/auteurs/${auteurId}`}>{auteur}</Link>
			</div>
			{livreData.serie && <p>Série : {livreData.serie}</p>}
		</div>
	);
}

export default LivreDetailPage;
