import React, {Component} from 'react';
import {Button} from "react-bootstrap";

class CategoryItem extends Component {

    render() {
        const {categoryChangeHandler, category, value} = this.props;

        return (<Button className="cat_filter"
                        onClick={(ev) => categoryChangeHandler(ev, value)}>
            {category.name}
        </Button>);
    }
}

export default CategoryItem;