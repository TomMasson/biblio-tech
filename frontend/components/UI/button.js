import styles from "./button.module.scss";

const Button = ({ children, fullWidth = false }) => {
	return (
		<button
			className={`${styles.button} ${fullWidth ? styles.fullWidth : ""}`}
		>
			{children}
		</button>
	);
};

export default Button;
