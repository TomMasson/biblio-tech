import Button from "../UI/button";
import styles from "./home-component.module.scss";
import Link from "next/link";

const HomeComponent = () => {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<div className={styles.titleContainer}>
					<h1 className={styles.title}>
						<span>La Biblio</span>
						<span className={styles.titleSuffix}>Tech</span>
					</h1>
				</div>
				<div className={styles.descContainer}>
					<h3 className={styles.desc}>
						Ici vous pouvez consulter nos livres & auteurs,
						<br />
						et bientôt emprunter nos livres !
					</h3>
				</div>

				<div className={styles.navigation}>
					<nav>
						<ul className={styles.linkList}>
							<li>
								<Link href="/livres">
									<Button>Nos Livres</Button>
								</Link>
							</li>
							<li>
								<Link href="/auteurs">
									<Button>Les auteurs</Button>
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</main>
		</div>
	);
};

export default HomeComponent;
