import styles from "./error.module.scss";

const ErrorNotif = ({ error }) => {
	return <p className={styles.error}>{error}</p>;
};

export default ErrorNotif;
