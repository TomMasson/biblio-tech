"use client";

import TableComponent from "@/components/UI/table";
import { useEffect, useState } from "react";
import Link from "next/link";

const LivresComponent = () => {
	const [livres, setLivres] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			const result = await fetch("http://localhost:3001/livres");
			const jsonResult = await result.json();
			setLivres(jsonResult);
		};

		fetchData();
	}, []);

	const deleteLivre = async (livreId) => {
		const result = await fetch(
			`http://localhost:3001/livres/${livreId}/?mdp=IAmBiblioProtecter`,
			{
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		const jsonResult = await result.json();

		if (jsonResult.affected === 1) {
			const updatedLivres = livres.filter((livre) => {
				if (livre.id === livreId) {
					alert(`Le livre ${livre.titre} a bien été supprimé`); // @evol : créer un composant 'notif' avec une durée de vie (5 sec par exemple)
				} else {
					return livre;
				}
			});
			setLivres(updatedLivres);
		}
	};

	const headers = ["Titre", "Auteur", "Actions"];
	const items = livres
		? livres.map((livre) => {
				const auteurNom = livre.auteur.nom ?? "anonyme";
				const auteurId = livre.auteur.id ?? 0;

				return {
					id: livre.id,
					data1: (
						<Link href={`/livres/${livre.id}`}>{livre.titre}</Link>
					),
					data2: (
						<p>
							écrit par{" "}
							<Link href={`/auteurs/${auteurId}`}>
								{auteurNom}
							</Link>
						</p>
					),
					url: {
						edit: `/admin/livres/${livre.id}`,
					},
				};
		  })
		: null;

	if (items === null) {
		return <p>Chargement des livres...</p>;
	}

	return (
		<TableComponent
			headers={headers}
			items={items}
			deleteAction={deleteLivre}
		/>
	);
};

export default LivresComponent;
