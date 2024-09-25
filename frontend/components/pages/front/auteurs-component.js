"use client";

import TableComponent from "@/components/UI/table";
import { useEffect, useState } from "react";
import styles from "./auteurs-component.module.scss";
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

	const headers = ["Nom", "Livres en notre possétion", "Actions"];
	const items = auteurs
		? auteurs.map((auteur) => {
				console.log(auteur);
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
					actions: { edit: "editUrl", delete: "deleteUrl" },
				};
		  })
		: null;

	if (items === null) {
		return <p>Chargement des auteurs...</p>;
	}

	return (
		<div className={styles.pageAuteurs}>
			<h1 className={styles.titre}>Auteurs</h1>
			<TableComponent headers={headers} items={items} />
		</div>
	);
};

export default AuteursComponent;
