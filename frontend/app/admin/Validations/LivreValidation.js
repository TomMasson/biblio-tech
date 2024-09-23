import * as yup from "yup";

export const livreSchema = yup.object().shape({
	titre: yup
		.string()
		.required("Le titre est requis")
		.min(3, "Le titre doit faire plus de 2 caractères"),
	auteurId: yup.string().required("L'auteur ID est requise"),
	genre: yup.string().required("Le genre est requis"),
});
