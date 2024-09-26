import Link from "next/link";
import styles from "./header.module.scss";
import LogoComponent from "../UI/logo";

const HeaderComponent = () => {
	return (
		<div className={styles.header}>
			<ul className={styles.links}>
				<li className={styles.link}>
					<Link href="/livres">Livres</Link>
				</li>
				<li className={styles.link}>
					<Link href="/auteurs">Auteurs</Link>
				</li>
			</ul>
			<LogoComponent isSmall={true} />
		</div>
	);
};

export default HeaderComponent;
