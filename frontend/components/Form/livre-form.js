import styles from "./livre-form.module.scss";

const LivreForm = ({ submitForm, updateField, data, errors }) => {
	return (
		<form className={styles.form} onSubmit={submitForm}>
			<label htmlFor="titre">Titre</label>
			<input
				id="titre"
				type="text"
				name="titre"
				placeholder="titre"
				value={data.titre}
				onChange={updateField}
			/>
			{errors?.titre && <p className={styles.error}>{errors.titre}</p>}
			<label htmlFor="auteurId">Auteur (ID)</label>
			<input
				id="auteurId"
				type="number"
				name="auteurId"
				placeholder="auteurId"
				value={data.auteurId}
				onChange={updateField}
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
				value={data.genre}
				onChange={updateField}
			/>
			{errors?.genre && <p className={styles.error}>{errors.genre}</p>}

			<button>Envoyer</button>
		</form>
	);
};

export default LivreForm;
