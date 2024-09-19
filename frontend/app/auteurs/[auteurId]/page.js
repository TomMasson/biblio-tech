"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

function AuteurDetailPage({ params }) {
	const [auteurData, setAuteurData] = useState(null);
	const auteurId = params.auteurId;

	useEffect(() => {
		const fetchData = async () => {
			const result = await fetch(
				`http://localhost:3001/auteurs/${auteurId}`
			);
			const jsonResult = await result.json();
			setAuteurData(jsonResult);
		};

		fetchData();
	}, []);

	if (auteurData === null) {
		return <p>Chargement des informations...</p>;
	}

	return (
		<div className="page-livre-detail">
			<h1>{auteurData.nom}</h1>
			<div>Cet auteur(e) a écrit un certain nombre de livres.</div>

			{auteurData.livres && (
				<div>
					Dans notre bibliothèque nous en avons{" "}
					{auteurData.livres.length} :
					<ul>
						{auteurData.livres.map((livre) => {
							return (
								<li>
									<div>
										<Link href={`/livres/${livre.id}`}>
											{livre.titre}
										</Link>{" "}
										({livre.genre})
									</div>
								</li>
							);
						})}
					</ul>
				</div>
			)}
		</div>
	);
}

export default AuteurDetailPage;
