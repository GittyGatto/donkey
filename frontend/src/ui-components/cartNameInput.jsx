import React from 'react';
import {Button, ControlLabel, FieldGroup, FormControl, FormGroup} from "react-bootstrap";


export default class CartNameInput extends React.Component {
    render() {

        const {cartNameChanged, submitHandler} = this.props;

        var value = this.props.value;

        return (<form className="form_input">
            <FormGroup>
                <ControlLabel>Donkey Name</ControlLabel>
                <FormControl
                    type="text"
                    placeholder="Meine neue Donkeyliste"
                    value={value}
                    onChange={(ev) => cartNameChanged(ev)}/>
                <Button bsStyle="success"
                        id="submit_button"
                        onClick={(ev) => submitHandler(ev)}>submit</Button>
            </FormGroup>
        </form>);
    }
}
