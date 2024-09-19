"use client";

import React, { useState } from "react";

function AdminPage() {
	const [newLivre, setNewLivre] = useState({});
	const [msgResponse, setMsgResponse] = useState("");

	const submitLivre = async () => {
		const result = await fetch(
			"http://localhost:3001/livres?mdp=IAmBiblioProtecter",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(newLivre),
			}
		).catch((error) => {
			console.log(error);
		});

		const jsonResult = await result.json();

		if (jsonResult) {
			setMsgResponse("Le livre " + jsonResult.titre + " a été ajouté.");
		}

		setNewLivre({});
	};

	return (
		<div className="page-livres">
			<h1>Enregistrer un nouveau livre</h1>
			<input
				name="titre"
				placeholder="titre"
				required
				onChange={(input) =>
					setNewLivre({
						...newLivre,
						titre: input.currentTarget.value,
					})
				}
			/>
			<input
				name="auteurId"
				placeholder="auteurId"
				required
				onChange={(input) =>
					setNewLivre({
						...newLivre,
						auteurId: parseInt(input.currentTarget.value),
					})
				}
			/>
			<input
				name="genre"
				placeholder="genre"
				required
				onChange={(input) =>
					setNewLivre({
						...newLivre,
						genre: input.currentTarget.value,
					})
				}
			/>

			<button onClick={submitLivre}>Envoyer</button>
			<p>{msgResponse}</p>
		</div>
	);
}

export default AdminPage;
