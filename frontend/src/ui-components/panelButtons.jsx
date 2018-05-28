import React from 'react';

export default class PanelButtons extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const newCartHandler = this.props.newCartHandler;
        const saveHandler = this.props.saveHandler;
        const backHandler = this.props.backHandler;
        const deleteHandler = this.props.deleteHandler;

        let newCart = undefined;
        let save = undefined;
        let back = undefined;
        let deleteCart = undefined;

        const renderNewButton = this.props.renderNewButton;
        const renderSaveButton = this.props.renderSaveButton;
        const renderBackButton = this.props.renderBackButton;
        const renderDeleteButton = this.props.renderDeleteButton;

        if (renderNewButton) {
            newCart = <button className="btn btn-primary"
                              onClick={newCartHandler}
                              id="newCartButton">new cart
            </button>
        }

        if (renderBackButton) {
            back = <button className="btn btn-secondary"
                           onClick={backHandler}
                           id="backButton">Back
            </button>
        }


        if (renderSaveButton) {
            save = <button className="btn btn-success"
                           onClick={saveHandler}
                           id="saveButton">Save
            </button>
        }

        if (renderDeleteButton) {
            deleteCart = <button className="btn btn-warning"
                                 onClick={deleteHandler}
                                 id="deleteButton">Delete
            </button>
        }

        return (<div className="panelButtons">
                {newCart}
                {save}
                {back}
                {deleteCart}
            </div>
        );
    }
}
