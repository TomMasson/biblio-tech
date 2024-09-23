"use client";

import { useState } from "react";
import { livreSchema } from "./Validations/LivreValidation";
import styles from "./page.module.scss";

function AdminPage() {
	const [formData, setFormData] = useState({
		titre: "",
		auteurId: "",
		genre: "",
	});
	const [errors, setErrors] = useState();
	const [response, setResponse] = useState();

	const submitLivre = async (formData) => {
		formData.auteurId = parseInt(formData.auteurId);

		await fetch("http://localhost:3001/livres?mdp=IAmBiblioProtecter", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		})
			.then(async (result) => {
				const jsonResult = await result.json();

				if (jsonResult.error) {
					setResponse({ error: jsonResult.message });
				} else {
					setResponse({
						success:
							"Le livre " + jsonResult.titre + " a été ajouté.",
					});

					setFormData({ titre: "", auteurId: "", genre: "" });
				}
			})
			.catch((error) => {
				setResponse({ error: error.message });
			});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			await livreSchema.validate(formData, { abortEarly: false });
			submitLivre(formData);
			setErrors({});
		} catch (error) {
			const newErrors = {};

			error.inner.forEach((error) => {
				newErrors[error.path] = error.message;
			});

			setErrors(newErrors);
		}
	};

	const updateForm = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	return (
		<div className="page-livres">
			<h1>Enregistrer un nouveau livre</h1>
			<form className={styles.form} onSubmit={handleSubmit}>
				<label htmlFor="titre">Titre</label>
				<input
					id="titre"
					type="text"
					name="titre"
					placeholder="titre"
					value={formData.titre}
					onChange={updateForm}
				/>
				{errors?.titre && (
					<p className={styles.error}>{errors.titre}</p>
				)}
				<label htmlFor="auteurId">Auteur (ID)</label>
				<input
					id="auteurId"
					type="number"
					name="auteurId"
					placeholder="auteurId"
					value={formData.auteurId}
					onChange={updateForm}
				/>
				{errors?.auteurId && (
					<p className={styles.error}>{errors.auteurId}</p>
				)}
				<label htmlFor="genre">Genre</label>
				<input
					id="genre"
					type="text"
					name="genre"
					placeholder="genre"
					value={formData.genre}
					onChange={updateForm}
				/>
				{errors?.genre && (
					<p className={styles.error}>{errors.genre}</p>
				)}

				<button>Envoyer</button>

				{response?.error && (
					<p className={styles.error}>{response.error}</p>
				)}
				{response?.success && <p>{response.success}</p>}
			</form>
		</div>
	);
}

export default AdminPage;
