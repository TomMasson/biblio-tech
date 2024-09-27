import Button from "../UI/button";
import Input from "../UI/input";
import styles from "./livre-form.module.scss";

const LivreForm = ({ submitForm, updateField, data, errors }) => {
	return (
		<form className={styles.form} onSubmit={submitForm}>
			<div className={styles.inputs}>
				<Input
					label={"Titre"}
					id="titre"
					type="text"
					name="titre"
					placeholder="Titre"
					value={data.titre}
					onChange={updateField}
					error={errors?.titre ?? null}
				/>
				<Input
					label={"Auteur ID"}
					id="auteurId"
					type="number"
					name="auteurId"
					placeholder="AuteurId"
					value={data.auteurId}
					onChange={updateField}
					error={errors?.auteurId ?? null}
				/>
				<Input
					label={"Genre"}
					id="genre"
					type="text"
					name="genre"
					placeholder="Genre"
					value={data.genre}
					onChange={updateField}
					error={errors?.genre ?? null}
				/>
			</div>
			<Button fullWidth={true}>Envoyer</Button>
		</form>
	);
};

export default LivreForm;
