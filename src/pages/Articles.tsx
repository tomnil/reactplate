import { Link } from "react-router-dom";
import styles from "./Articles.module.css";
import { fakeDB } from "./fakedb";

const Articles = (): JSX.Element => {

	return <div className={styles.container}>
		<h1>Articles</h1>
		<ul>
			{fakeDB.map(article => <li key={article.ID}>
				<Link to={`/article/${article.ID}`}>
					{article.HeadLine}
				</Link>
			</li>,
			)}
		</ul>
	</div >;

};

export default Articles;