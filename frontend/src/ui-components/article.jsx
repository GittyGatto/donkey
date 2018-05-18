import React from 'react';
import ArticleItem from "./articleItem";


export default class Article extends React.Component {

    render() {
        const {changeHandler} = this.props;

        let articleItem;
        if (this.props.articles) {
            articleItem = this.props.articles.map((article) => {
                return (<span key={article.articleId}>
                        <ArticleItem value={article} article={article}
                                     changeHandler={changeHandler}/>
                    </span>
                );
            });
        }

        return (<div className="panelButtons">
            {articleItem}
        </div>);
    }
}
