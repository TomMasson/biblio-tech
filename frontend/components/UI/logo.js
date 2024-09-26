import styles from "./logo.module.scss";

const LogoComponent = ({ isSmall = false }) => {
	return (
		<div className={styles.titleContainer}>
			<h1 className={isSmall ? styles.smallTitle : styles.title}>
				<span>La Biblio</span>
				<span className={styles.titleSuffix}>Tech</span>
			</h1>
		</div>
	);
};

export default LogoComponent;
