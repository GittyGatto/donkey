import React from 'react';
import 'react-select/dist/react-select.css';
import {Button, ControlLabel, FormControl, FormGroup} from "react-bootstrap";
import Select from 'react-select';


export default class EditArticlePage extends React.Component {

    render() {
        const {title, submitHandler, inputChanged, placeholder, categoryChange, categoryOptions, categorySelection, cartName} = this.props;

        let textValue = this.props.value;

        return (<form className="form_input">
            <h3>{cartName}</h3>
            <FormGroup>
                <ControlLabel>{title}</ControlLabel>

                <FormControl
                    type="text"
                    placeholder={placeholder}
                    value={textValue}
                    onChange={(ev) => inputChanged(ev)}/>

                <ControlLabel>Category:</ControlLabel>

                <Select name="form-field-name"
                        clearable={false}
                        value={categorySelection}
                        onChange={(ev) => categoryChange(ev)}
                        options={categoryOptions}/>

                <Button className="big_button"
                        bsStyle="success"
                        id="submit_button"
                        onClick={(ev) => submitHandler(ev)}>submit</Button>
            </FormGroup>
        </form>);
    }
}
