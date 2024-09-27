import styles from "./header-admin.module.scss";
import HeaderComponent from "./header";

const AdminHeaderComponent = () => {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.disclaimer}>Admin</div>
				<HeaderComponent adminLinks={true} />
			</div>
		</>
	);
};

export default AdminHeaderComponent;
