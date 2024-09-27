import styles from "./input.module.scss";

const Input = ({ label, error, ...rest }) => {
	return (
		<>
			<label className={styles.label} htmlFor={rest.name}>
				{label}
			</label>
			<input {...rest} className={styles.input}></input>
			{error && <p className={styles.error}>{error}</p>}
		</>
	);
};

export default Input;
