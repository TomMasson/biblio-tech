import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<h1>Bienvenue dans notre Biblio-tech</h1>
				<h3>
					Ici vous pouvez consulter nos livres & auteurs, et bientôt
					emprunter nos livres !
				</h3>

				<div className={styles.navList}>
					<nav>
						<ul>
							<li>
								<Link href="/livres">Nos livres</Link>
							</li>
							<li>
								<Link href="/auteurs">Les auteurs</Link>
							</li>
						</ul>
					</nav>
				</div>
			</main>
		</div>
	);
}
