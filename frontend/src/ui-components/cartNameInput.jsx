import React from 'react';


export default class CartNameInput extends React.Component {
    render() {

        const {cartNameChanged, submitHandler} = this.props;

        var value = this.props.value;

        return (<div className="form-group cartNameInput">
                <input className="form-control" type="text"
                       placeholder="Cart Name"
                       value={value}
                       id="cartNameInput"
                       onChange={(ev) => cartNameChanged(ev)}/>

                <button className="btn btn-success"
                        onClick={(ev) => submitHandler(ev)}>submit
                </button>
            </div>
        );
    }
}
