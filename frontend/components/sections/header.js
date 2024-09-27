import Link from "next/link";
import styles from "./header.module.scss";
import LogoComponent from "../UI/logo";

const HeaderComponent = ({ adminLinks = false }) => {
	return (
		<div className={styles.header}>
			<ul className={styles.links}>
				<li className={styles.link}>
					<Link href="/">Accueil</Link>
				</li>
				<li className={styles.link}>
					<Link href={`/${adminLinks ? "admin/" : ""}livres`}>
						Livres
					</Link>
				</li>
				<li className={styles.link}>
					<Link href={`/${adminLinks ? "admin/" : ""}auteurs`}>
						Auteurs
					</Link>
				</li>
			</ul>
			<LogoComponent isSmall={true} isLink={true} />
		</div>
	);
};

export default HeaderComponent;
