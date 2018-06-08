import React from 'react';
import CategoryItem from "./categoryItem";


export default class Category extends React.Component {

    render() {
        const {changeHandler} = this.props;

        let categoryItem;
        if (this.props.categories) {
            categoryItem = this.props.categories.map((category) => {
                return (<div className="row buttonPanel"
                        key={category.id}>
                        <CategoryItem value={category}
                                      category={category}
                                      changeHandler={changeHandler}/>
                    </div>
                );
            });
        }

        return (<div>
            {categoryItem}
        </div>);
    }
}
