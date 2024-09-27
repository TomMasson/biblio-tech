"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./auteur-detail-component.module.scss";

const DetailAuteurComponent = ({ auteurId, setTitrePage }) => {
	const [auteurData, setAuteurData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			const result = await fetch(
				`http://localhost:3001/auteurs/${auteurId}`
			);
			const jsonResult = await result.json();
			setAuteurData(jsonResult);
			setTitrePage(jsonResult.nom);
		};

		fetchData();
	}, []);

	if (auteurData === null) {
		return <p>Chargement des informations...</p>;
	}

	return (
		<div className="page-livre-detail">
			<div>Cet auteur(e) a écrit un certain nombre de livres.</div>

			{auteurData.livres && (
				<div>
					Dans notre bibliothèque nous en avons{" "}
					{auteurData.livres.length} :
					<ul className={styles.listeLivres}>
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
};

export default DetailAuteurComponent;
