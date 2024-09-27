"use client";

import LivreForm from "@/components/Form/livre-form";
import { livreSchema } from "@/components/Form/Validations/LivreValidation";
import { useEffect, useState } from "react";
import ErrorNotif from "@/components/Form/error";

const EditLivrePageComponent = ({ livreId }) => {
	const [formData, setFormData] = useState({
		titre: "",
		auteurId: "",
		genre: "",
	});

	useEffect(() => {
		const fetchData = async () => {
			const result = await fetch(
				`http://localhost:3001/livres/${livreId}`
			);
			const jsonResult = await result.json();

			if (!jsonResult.error) {
				setFormData(jsonResult);
			}
		};

		fetchData();
	}, []);

	const [errors, setErrors] = useState();
	const [response, setResponse] = useState();

	const submitLivre = async (formData) => {
		formData.auteurId = parseInt(formData.auteurId);

		await fetch(
			`http://localhost:3001/livres/${livreId}?mdp=IAmBiblioProtecter`,
			{
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			}
		)
			.then(async (result) => {
				const jsonResult = await result.json();

				if (jsonResult.error) {
					setResponse({ error: jsonResult.message });
				} else {
					setResponse({
						success:
							"Le livre " +
							jsonResult.titre +
							" a bien été modifié.",
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
			console.log(error);

			error.inner.forEach((error) => {
				console.log("e", error);
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
		<>
			<LivreForm
				submitForm={handleSubmit}
				updateField={updateForm}
				data={formData}
				errors={errors}
			/>

			{response?.error && <ErrorNotif errors={response.error} />}
			{response?.success && <p>{response.success}</p>}
		</>
	);
};

export default EditLivrePageComponent;
