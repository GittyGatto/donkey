import React from 'react';
import ArticleItem from "./articleItem";
import Select from 'react-select';
import 'react-select/dist/react-select.css';


export default class Article extends React.Component {

    render() {
        const {articleChangeHandler, categoryChangeHandler, categoryOptions, selectedCategory, articles} = this.props;

        const cartHeaderItem = <Select name="form-field-name"
                                       clearable={false}
                                       value={selectedCategory}
                                       onChange={categoryChangeHandler}
                                       options={categoryOptions}/>;

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

            {cartHeaderItem}

            {articleItem}


        </div>);
    }
}
