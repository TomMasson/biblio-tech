"use client";

import React, { useEffect, useState } from "react";

function AuteursPage() {
	const [auteurs, setAuteurs] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			const result = await fetch("http://localhost:3001/auteurs");
			const jsonResult = await result.json();
			setAuteurs(jsonResult);
		};

		fetchData();
	}, []);

	if (auteurs === null) {
		return <p>Chargement des auteurs...</p>;
	}

	return (
		<div className="page-auteurs">
			<h1>Auteurs</h1>
			{auteurs &&
				auteurs.map((auteur) => {
					const nbLivres = auteur.livres.length;
					return (
						<div key={auteur.id}>
							<p>
								{auteur.nom}, dont nous possédons {nbLivres}{" "}
								livre(s).
							</p>
						</div>
					);
				})}
		</div>
	);
}

export default AuteursPage;
