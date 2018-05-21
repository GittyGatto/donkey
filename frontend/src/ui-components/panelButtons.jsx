import React from 'react';
import './panelButtons.css';

export default class PanelButtons extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const newCartHandler = this.props.newCartHandler;
        const resetEnabled = this.props.resetEnabled;
        const resetHandler = this.props.resetHandler;
        const saveEnabled = this.props.saveEnabled;
        const saveHandler = this.props.saveHandler;
        const backHandler = this.props.backHandler;

        return (<div className="panelButtons">
                <button className="btn"
                        onClick={newCartHandler}
                        id="newCartButton">new cart
                </button>

                <button className="btn"
                        onClick={resetHandler}
                        disabled={!resetEnabled} id="resetButton">Reset
                </button>

                <button className="btn"
                        onClick={saveHandler}
                        disabled={!saveEnabled} id="saveButton">Save
                </button>

                <button className="btn"
                        onClick={backHandler}
                        id="backButton">Back
                </button>
            </div>
        );
    }
}
