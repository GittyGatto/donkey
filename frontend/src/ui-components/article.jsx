import React from 'react';
import ArticleItem from "./articleItem";
import 'react-select/dist/react-select.css';
import {Button, Glyphicon} from "react-bootstrap";
import CategoryItem from "./categoryItem";


export default class Article extends React.Component {

    render() {
        const {articleChangeHandler, categoryChangeHandler, categoryOptions, articles, backToCartArticles, donkeyName, onNewArticleClicked} = this.props;

        const newArticleButton = <Button className="big_button"
                                         bsStyle="danger"
                                         bsSize="lg"
                                         onClick={onNewArticleClicked}><Glyphicon className="big_icon"
                                                                                  glyph="plus"/></Button>;

        let categoryFilter;
        if (categoryOptions) {
            categoryFilter = categoryOptions.map(category => {
                return (<span key={category.uuid}>
                    <CategoryItem categoryChangeHandler={categoryChangeHandler}
                                  categoryOptions={categoryOptions}
                                  category={category}
                                  value={category}/>
                </span>)
            });
        }

        let secondBackButton;
        if (articles.length > 4) {
            secondBackButton = <Button className="big_button"
                                       bsStyle="info"
                                       bsSize="lg"
                                       onClick={backToCartArticles}><Glyphicon className="big_icon"
                                                                               glyph="chevron-left"/></Button>;
        }


        let articleItem;
        if (articles) {
            articleItem = articles.map((article) => {
                return (<span key={article.articleUuid}>

                        <ArticleItem value={article}
                                     article={article}
                                     articleChangeHandler={articleChangeHandler}/>

                    </span>
                );
            });
        }

        const backButton = <Button className="big_button"
                                   bsStyle="info"
                                   bsSize="lg"
                                   onClick={backToCartArticles}><Glyphicon className="big_icon"
                                                                           glyph="chevron-left"/></Button>;


        return (<div>

            <h3>{donkeyName}</h3>

            {backButton}

            {newArticleButton}

            {categoryFilter}

            {articleItem}

            {secondBackButton}

        </div>);
    }
}
