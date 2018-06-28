import React, {Component} from 'react';
import {DropdownButton, Glyphicon, MenuItem, Panel} from "react-bootstrap";
import uuid from 'uuid';

class CategoryFilter extends Component {

    render() {

        const {categories, selectedCategory} = this.props;

        let categoryItem;

        if (categories) {
            categoryItem = categories.map(category => {
                return (

                    <MenuItem eventKey={category.uuid}>{category.name}</MenuItem>

                );
            });
        }

        return (<div>
            <Panel className="cart_item"
                   bsStyle="info">

                <Panel.Heading>

                    <Panel.Title componentClass="h3">

                        {selectedCategory}

                        <div className="category_filter_dropdown">
                            <DropdownButton
                                noCaret
                                title={
                                    <div style={{display: 'inline-block'}}>
                                        <Glyphicon glyph="filter"/>
                                    </div>}
                                id={uuid.v4()}>

                                {categoryItem}

                            </DropdownButton>
                        </div>


                    </Panel.Title>

                </Panel.Heading>

            </Panel>
        </div>);
    }
}

export default CategoryFilter;