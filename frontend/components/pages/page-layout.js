import styles from "./page-layout.module.scss";

const PageLayout = ({ children, titre }) => {
	return (
		<div className={styles.page}>
			<h1 className={styles.titre}>{titre}</h1>
			{children}
		</div>
	);
};

export default PageLayout;
