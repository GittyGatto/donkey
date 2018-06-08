import React from 'react';
import Article from "./article";


export default class Packstation extends React.Component {


    render() {
        const {changeHandler, articles} = this.props;

        return (
            <div>


                <h1>Packstation</h1>

                <Article articles={articles}
                         changeHandler={changeHandler}/>

            </div>);
    }
}

