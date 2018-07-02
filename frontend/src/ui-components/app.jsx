import React from 'react';
import appStore from '../stores/app-store';
import uuid from 'uuid';
import Select from 'react-select';
import CartActionPanel from "./panelButtons";
import CartNameInput from "./cartNameInput";
import CartArticles from "./cartArticles";
import Article from "./article";
import CartSelection from "./cartSelection";
import Header from "./header";
import 'react-select/dist/react-select.css';
import '../../styles/index.scss';
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
import saveNewCart from "../actions/save-new-cart-action";
import backToCarts from "../actions/back-to-carts-action";
import backToCartArticles from "../actions/back-to-cartArticles-action";
import deleteCart from "../actions/delete-purchase-action";
import editCart from "../actions/edit-cart-action";
import editCartArticle from "../actions/edit-cartArticle-action"
import backToPurchase from "../actions/back-to-purchase-action"
import {Col, Grid, Row} from "react-bootstrap";
import EditCartArticle from "./editCartArticle";


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

    _onCategoryChange(ev, category) {
        getCategoryArticles(category.name);
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

    _onBackToCartsClicked(ev) {
        backToCarts();
    }

    _onBackToCartArticles(ev) {
        backToCartArticles(ev);
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

    _onEditCartArticleClicked(ev, cartArticle) {
        editCartArticle(cartArticle);
    }

    _onBackToPurchaseClicked(ev) {
        backToPurchase(ev);
    }

    render() {
        const state = this.state;

        let carts = undefined;
        let purchase = undefined;
        let articles = undefined;
        let categories = undefined;
        let cartNameInput = undefined;
        let actionPanel = undefined;
        let cartArticleInEdit = undefined;
        const renderCartNameInput = state.data.renderCartNameInput;
        const renderArticles = state.data.renderArticles;
        const renderCategories = state.data.renderCategories;
        const renderPurchase = state.data.renderPurchase;
        const renderActionPanel = state.data.renderActionPanel;
        const renderCarts = state.data.renderCarts;
        const renderEditCartArticle = state.data.renderEditCartArticle;
        const header = <Header backHandler={this._onBackToCartsClicked}/>

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
                                     saveHandler={this._onSaveClicked}
                                     editCartHandler={this._onEditCartClicked}
                                     completedArticles={state.data.completedArticles}
                                     backHandler={this._onBackToCartsClicked}
                                     deleteHandler={this._onDeleteClicked}
                                     onEditClicked={this._onEditCartArticleClicked}/>
        }

        if (renderArticles) {
            articles = <Article articles={state.data.filteredArticles}
                                articleChangeHandler={(e, article) => this._onArticleClicked(e, article)}
                                categoryChangeHandler={(e, category) => this._onCategoryChange(e, category)}
                                categoryOptions={state.data.categoryOptions}
                                backToCartArticles={this._onBackToCartArticles}
                                donkeyName={state.data.purchase.name}/>
        }

        if (renderEditCartArticle) {
            cartArticleInEdit = <EditCartArticle purchase={state.data.purchase}
                                                 backHandler={this._onBackToPurchaseClicked}
                                                 article={state.data.selectedArticle}
                                                 addHandler={(e, article) => this._onAddClicked(e, article)}
                                                 removeOneHandler={(e, article) => this._onRemoveOneClicked(e, article)}/>
        }


        if (renderActionPanel) {
            actionPanel = <CartActionPanel className="form-field-name"
                                           saveHandler={this._onSaveClicked}
                                           newCartHandler={this._onNewCartClicked}
                                           backHandler={this._onBackToCartsClicked}
                                           deleteHandler={this._onDeleteClicked}
                                           renderNewButton={state.data.renderNewButton}
                                           renderSaveButton={state.data.renderSaveButton}
                                           renderBackButton={state.data.renderBackButton}
                                           renderDeleteButton={state.data.renderDeleteButton}/>
        }


        if (renderCartNameInput) {
            cartNameInput = <CartNameInput submitHandler={this._onSubmitClicked}
                                           cartNameChanged={this._onCartNameChanged}/>
        }


        if (renderCategories) {
            categories = <Select className="form-field-name"
                                 value={state.data.selectedCategory}
                                 onChange={(e) => this._onCategoryChange(e)}
                                 options={state.data.categoryOptions}/>
        }

        return (<div className="container-fluid app">

                {header}

                <Grid>

                    <Row className="show-grid">

                        <Col xs={12}>{carts}</Col>
                        <Col xs={12}>{purchase}</Col>
                        <Col xs={12}>{articles}</Col>
                        <Col xs={12}>{cartNameInput}</Col>
                        <Col xs={12}>{cartArticleInEdit}</Col>

                    </Row>

                </Grid>

            </div>
        );
    }

}