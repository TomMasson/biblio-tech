"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const DetailLivreComponent = ({ livreId, setTitrePage }) => {
	const [livreData, setLivreData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			const result = await fetch(
				`http://localhost:3001/livres/${livreId}`
			);
			const jsonResult = await result.json();
			setLivreData(jsonResult);
			setTitrePage(jsonResult.titre);
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
			<div>Genre : {livreData.genre}</div>
			<div>
				Auteur: <Link href={`/auteurs/${auteurId}`}>{auteur}</Link>
			</div>
			{livreData.serie && <p>Série : {livreData.serie}</p>}
		</div>
	);
};

export default DetailLivreComponent;
