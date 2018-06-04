import React from 'react';
import {Image, PageHeader} from "react-bootstrap";

export default class Header extends React.Component {

    render() {
        const {backHandler} = this.props;

        const header = <PageHeader>
            <Image id="logo" rounded src="/assets/images/logo.png" onClick={backHandler}/> Donkey List
        </PageHeader>

        return (<div>
            {header}
        </div>);
    }
}
