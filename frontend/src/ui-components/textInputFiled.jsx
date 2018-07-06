import React from 'react';
import {Button, ControlLabel, FieldGroup, FormControl, FormGroup} from "react-bootstrap";


export default class TextInputFiled extends React.Component {
    render() {

        const {inputChanged, submitHandler, title, placeholder} = this.props;

        var value = this.props.value;

        return (<form className="form_input">
            <FormGroup>
                <ControlLabel>{title}</ControlLabel>
                <FormControl
                    type="text"
                    placeholder={placeholder}
                    value={value}
                    onChange={(ev) => inputChanged(ev)}/>
                <Button className="big_button"
                        bsStyle="success"
                        id="submit_button"
                        onClick={(ev) => submitHandler(ev)}>submit</Button>
            </FormGroup>
        </form>);
    }
}
