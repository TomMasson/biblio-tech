"use client";

import TableComponent from "@/components/UI/table";
import { useEffect, useState } from "react";
import Link from "next/link";

const AuteursComponent = () => {
	const [auteurs, setAuteurs] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			const result = await fetch("http://localhost:3001/auteurs");
			const jsonResult = await result.json();
			setAuteurs(jsonResult);
		};

		fetchData();
	}, []);

	const deleteAuteur = async (auteurId) => {
		const result = await fetch(
			`http://localhost:3001/auteurs/${auteurId}/?mdp=IAmBiblioProtecter`,
			{
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		const jsonResult = await result.json();

		if (jsonResult.affected === 1) {
			const updatedAuteurs = auteurs.filter((auteur) => {
				if (auteur.id === auteurId) {
					alert(`L'auteur ${auteur.nom} a bien été supprimé`); // @evol : créer un composant 'notif' avec une durée de vie (5 sec par exemple)
				} else {
					return auteur;
				}
			});
			setAuteurs(updatedAuteurs);
		}
	};

	const headers = ["Nom", "Livres en notre possession", "Actions"];
	const items = auteurs
		? auteurs.map((auteur) => {
				return {
					id: auteur.id,
					data1: (
						<Link href={`/auteurs/${auteur.id}`}>{auteur.nom}</Link>
					),
					data2: (
						<Link
							href={`/livres/?auteur=${encodeURIComponent(
								auteur.nom
							)}`}
						>
							{auteur.livres.length} livre
							{auteur.livres.length > 1 ? "s" : null}
						</Link>
					),
					url: {
						edit: `/admin/auteurs/${auteur.id}`,
					},
				};
		  })
		: null;

	if (items === null) {
		return <p>Chargement des auteurs...</p>;
	}

	return (
		<TableComponent
			headers={headers}
			items={items}
			deleteAction={deleteAuteur}
		/>
	);
};

export default AuteursComponent;
