import { styles } from "../styles";

const NotFoundPage = () => {
	return (
		<div className="w-full h-screen max-w-7xl mx-auto">
			<h1 className={`${styles.sectionHeadText} text-6xl pb-4 text-primary-green font-bold pt-[15%]`}>
				404.
			</h1>
			<h2 className={styles.darkSectionSubText}>
				Sorry, that page could not be found.
			</h2>
		</div>
	);
};

export default NotFoundPage;
