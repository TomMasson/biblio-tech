"use client";

import TableComponent from "@/components/UI/table";
import { useEffect, useState } from "react";
import styles from "./livres-component.module.scss";
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

	const headers = ["Titre", "Auteur", "Actions"];
	const items = livres
		? livres.map((livre) => {
				const auteurNom = livre.auteur.nom ?? "quelqu'un";
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
					actions: { edit: "editUrl", delete: "deleteUrl" },
				};
		  })
		: null;

	if (items === null) {
		return <p>Chargement des livres...</p>;
	}

	return (
		<div className={styles.pageLivres}>
			<h1 className={styles.titre}>Livres</h1>
			<TableComponent headers={headers} items={items} />
		</div>
	);
};

export default LivresComponent;
