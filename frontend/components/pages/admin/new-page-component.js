"use client";

import styles from "./new-page-component.module.scss";

import { useState } from "react";
import { livreSchema } from "../../Form/Validations/LivreValidation";
import CreateForm from "../../Form/create-form";

const NewPageComponent = () => {
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
			<CreateForm
				submitForm={handleSubmit}
				updateField={updateForm}
				data={formData}
				errors={errors}
			/>

			{response?.error && (
				<p className={styles.error}>{response.error}</p>
			)}
			{response?.success && <p>{response.success}</p>}
		</div>
	);
};

export default NewPageComponent;
