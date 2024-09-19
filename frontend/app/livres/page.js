"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

function LivresPage() {
	const [livres, setLivres] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			const result = await fetch("http://localhost:3001/livres");
			const jsonResult = await result.json();
			setLivres(jsonResult);
		};

		fetchData();
	}, []);

	if (livres === null) {
		return <p>Chargement des livres...</p>;
	}

	return (
		<div className="page-livres">
			<h1>Livres</h1>
			{livres &&
				livres.map((livre) => {
					const auteurNom = livre.auteur.nom ?? "quelqu'un";
					const auteurId = livre.auteur.id ?? 0;
					return (
						<div key={livre.id}>
							<p>
								<Link href={`/livres/${livre.id}`}>
									{livre.titre}
								</Link>{" "}
								écrit par{" "}
								<Link href={`/auteurs/${auteurId}`}>
									{auteurNom}
								</Link>
								.
							</p>
						</div>
					);
				})}
		</div>
	);
}

export default LivresPage;
