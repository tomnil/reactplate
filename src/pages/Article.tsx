import React from "react";
import { useParams } from "react-router-dom";

import styles from "./Article.module.css";
import { fakeDB } from "./fakedb";


export type Props = { id?: string; };

const Article = (props: Props): JSX.Element => {

	// **********************
	// This line will prioritize parameters sent by Props:
	// <Article id="a1"/>
	// and use react-router-dom path parameters as fallback:
	// "/article/a1"
	const { id } = { ...props, ...useParams<keyof Props>() as Props };

	// Show props on rendered page
	const renderPropsAsDebugInfo = true;

	// All other stuff :)
	const [headLine, setheadLine] = React.useState<string | undefined>(undefined);
	const [body, setbody] = React.useState<string | undefined>(undefined);
	const [message, setMessage] = React.useState<string>("Loading...");

	React.useEffect(() => {
		// Load article from the fake database
		const article = fakeDB.find(a => a.ID === id);
		if (article) {
			setheadLine(article.HeadLine);
			setbody(article.Body);
		} else
			setMessage("Article not found. ID=" + id);

	}, [id]);

	if (!headLine)
		return <>{message}</>;

	return <div className={styles.container}>
		<h2 className={styles.headline}>{headLine}</h2>
		<p className={styles.paragraph}>{body}</p>
		{renderPropsAsDebugInfo
			? <div className={styles.debuginfo}>
				PROPS={JSON.stringify(props)}
			</div>
			: <></>
		}
	</div>;

};
export default Article;
