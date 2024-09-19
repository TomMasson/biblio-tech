"use client";

import React, { useEffect, useState } from "react";

function LivresPage() {
	const [livres, setLivres] = useState(null);

	// IMPORTANT : j'ai dû utiliser un plugin sur mon navigateur : Allow CORS: Access-Control-Allow-Origin
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
					const auteur = livre.auteur.nom ?? "quelqu'un";
					return (
						<div key={livre.id}>
							<p>
								{livre.titre} écrit par {auteur}.
							</p>
						</div>
					);
				})}
		</div>
	);
}

export default LivresPage;
