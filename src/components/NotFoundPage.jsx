import { styles } from "../styles";

const NotFoundPage = () => {
	return (
		<div className="container w-full h-screen mx-16 mt-[20%] max-w-7xl">
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
