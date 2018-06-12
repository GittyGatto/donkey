import React from 'react';
import 'react-select/dist/react-select.css';
import '../../styles/index.scss';
import uuid from 'uuid';
import addArticle from '../actions/add-article-action';
import newCart from "../actions/new-cart-action";
import cartNameChanged from "../actions/cart-name-changed-action";
import getCategoryArticles from '../actions/get-category-articles-action';
import removeOneArticle from '../actions/remove-one-article-action';
import removeArticle from '../actions/remove-article-action'
import getCartArticles from '../actions/get-cart-articles-action';
import savePurchase from '../actions/save-purchase-action';
import getPurchase from "../actions/get-purchase-action";
import checkedArticle from "../actions/checked-article-action"
import appStore from '../stores/app-store';
import Select from 'react-select';
import CartActionPanel from "./panelButtons";
import CartNameInput from "./cartNameInput";
import CartArticles from "./cartArticles";
import Article from "./article";
import CartSelection from "./cartSelection";
import saveNewCart from "../actions/save-new-cart-action";
import backToCarts from "../actions/back-to-carts-action";
import deleteCart from "../actions/delete-purchase-action";
import editCart from "../actions/edit-cart-action";
import {Col, DropdownButton, Grid, MenuItem, Row} from "react-bootstrap";
import Header from "./header";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: appStore.data
        };

        this._onDataChanged = this._onDataChanged.bind(this);
    }

    _onDataChanged() {
        this.setState({data: appStore.data})
    }

    componentDidMount() {
        appStore.addListener(this._onDataChanged);
    }

    componentWillUnmount() {
        appStore.removeListener(this._onDataChanged);
    }

    _onCartSelectionClicked(ev, cart) {
        getPurchase(cart.name);
    }

    _onCategoryChange(ev) {
        getCategoryArticles(ev.value);
    }

    _onArticleClicked(ev, article) {
        addArticle(article);
    }

    _onSubmitClicked(ev) {
        saveNewCart({
            data: {name: appStore.data.cartNameInput, uuid: uuid.v4(), cartArticles: []}
        });
    }

    _onSaveClicked(ev) {
        savePurchase({
            data: appStore.data.purchase
        });
    }

    _onCartChanged(ev) {
        getCartArticles(ev.value);
    }

    _onNewCartClicked(ev) {
        newCart(ev);
    }

    _onAddClicked(e, article) {
        addArticle(article);
    }

    _onRemoveOneClicked(ev, article) {
        removeOneArticle(article);
    }

    _onRemoveArticleClicked(ev, article) {
        removeArticle(article)
    }

    _onCartNameChanged(ev) {
        cartNameChanged(ev.target.value);
    }

    _onBackClicked(ev) {
        backToCarts();
    }

    _onDeleteClicked(ev) {
        deleteCart({
            data: appStore.data.purchase.uuid
        });
    }

    _onDoneClicked(ev, article) {
        checkedArticle(article);
    }

    _onEditCartClicked(ev) {
        editCart();
    }

    render() {
        const state = this.state;

        let carts = undefined;
        let purchase = undefined;
        let articles = undefined;
        let categories = undefined;
        let cartNameInput = undefined;
        let actionPanel = undefined;
        const renderCartNameInput = state.data.renderCartNameInput;
        const renderArticles = state.data.renderArticles;
        const renderCategories = state.data.renderCategories;
        const renderPurchase = state.data.renderPurchase;
        const renderActionPanel = state.data.renderActionPanel;
        const renderCarts = state.data.renderCarts;

        const header = <Header backHandler={this._onBackClicked}/>


        if (renderCarts) {
            carts = <CartSelection carts={state.data.carts}
                                   changeHandler={(e, cart) => this._onCartSelectionClicked(e, cart)}
                                   newCartHandler={this._onNewCartClicked}/>
        }


        if (renderPurchase) {
            purchase = <CartArticles purchase={state.data.purchase}
                                     addHandler={(e, article) => this._onAddClicked(e, article)}
                                     removeOneHandler={(e, article) => this._onRemoveOneClicked(e, article)}
                                     removeArticleHandler={(e, article) => this._onRemoveArticleClicked(e, article)}
                                     doneHandler={(e, article) => this._onDoneClicked(e, article)}
                                     renderDoneBox={state.data.renderDoneBox}
                                     saveHandler={this._onSaveClicked}
                                     editCartHandler={this._onEditCartClicked}
                                     editToggle={state.data.editToggle}
                                     renderButtonPhalanx={state.data.renderCartEditButtonPhalanx}/>
        }

        if (renderArticles) {
            articles = <Article articles={state.data.filteredArticles}
                                articleChangeHandler={(e, article) => this._onArticleClicked(e, article)}

                                selectedCategory={state.data.selectedCategory}
                                categoryChangeHandler={(e) => this._onCategoryChange(e)}
                                categoryOptions={state.data.categoryOptions}/>
        }


        if (renderActionPanel) {
            actionPanel = <CartActionPanel className="form-field-name"
                                           saveHandler={this._onSaveClicked}
                                           newCartHandler={this._onNewCartClicked}
                                           backHandler={this._onBackClicked}
                                           deleteHandler={this._onDeleteClicked}
                                           renderNewButton={state.data.renderNewButton}
                                           renderSaveButton={state.data.renderSaveButton}
                                           renderBackButton={state.data.renderBackButton}
                                           renderDeleteButton={state.data.renderDeleteButton}/>
        }


        if (renderCartNameInput) {
            cartNameInput = <CartNameInput className="form-field-name"
                                           submitHandler={this._onSubmitClicked}
                                           cartNameChanged={this._onCartNameChanged}/>
        }


        if (renderCategories) {
            categories = <Select className="form-field-name"
                                 value={state.data.selectedCategory}
                                 onChange={(e) => this._onCategoryChange(e)}
                                 options={state.data.categoryOptions}/>
        }

        return (<div className="container-fluid">

                {header}

                <Grid>

                    <Row className="show-grid">

                        <Col xs={12}>{carts}</Col>
                        <Col xs={9}>{purchase}</Col>
                        <Col xs={3}>{articles}</Col>

                    </Row>

                </Grid>

            </div>
        );
    }

}