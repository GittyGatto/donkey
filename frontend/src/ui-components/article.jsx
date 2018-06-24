import React from 'react';
import ArticleItem from "./articleItem";
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import {Button, Glyphicon} from "react-bootstrap";


export default class Article extends React.Component {

    render() {
        const {articleChangeHandler, categoryChangeHandler, categoryOptions, selectedCategory, articles, backToCartArticles} = this.props;

        const cartHeaderItem = <Select name="form-field-name"
                                       clearable={false}
                                       value={selectedCategory}
                                       onChange={categoryChangeHandler}
                                       options={categoryOptions}/>;

        const backButton = <Button className="big_button"
                                           bsStyle="info"
                                           bsSize="lg"
                                           onClick={backToCartArticles}><Glyphicon className="big_icon" glyph="ok"/></Button>;

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

        return (<div>

            {backButton}

            {cartHeaderItem}

            {articleItem}

            {backButton}

        </div>);
    }
}
