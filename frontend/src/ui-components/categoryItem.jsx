import React, {Component} from 'react';

class CategoryItem extends Component {

    render() {
        const {changeHandler, value} = this.props;

        return (
            <button className="btn btn-primary"
                onClick={(ev) => changeHandler(ev, value)}>
                {this.props.category.title}
            </button>
        );
    }
}

export default CategoryItem;