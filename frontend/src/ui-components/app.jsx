import React from 'react';
import 'react-select/dist/react-select.css';
import '../../styles/index.scss';
import uuid from 'uuid';
import cartReset from '../actions/cart-reset-action'
import addArticle from '../actions/add-article-action';
import newCart from "../actions/new-cart-action";
import cartNameChanged from "../actions/cart-name-changed-action";
import getCategoryArticles from '../actions/get-category-articles-action';
import removeOneArticle from '../actions/remove-one-article-action';
import removeArticle from '../actions/remove-article-action'
import getCartArticles from '../actions/get-cart-articles-action';
import savePurchase from '../actions/save-purchase-action';
import getPurchase from "../actions/get-purchase-action";
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

    _onResetClicked() {
        cartReset();
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


    render() {
        const state = this.state;

        let cartNameInput = undefined;
        let articles = undefined;
        let categories = undefined;
        let purchase = undefined;
        let actionPanel = undefined;
        let carts = undefined;
        const renderCartNameInput = state.data.renderCartNameInput;
        const renderArticles = state.data.renderArticles;
        const renderCategories = state.data.renderCategories;
        const renderPurchase = state.data.renderPurchase;
        const renderActionPanel = state.data.renderActionPanel;
        const renderCarts = state.data.renderCarts;

        if (renderCartNameInput) {
            cartNameInput = <CartNameInput className="form-field-name"
                                           submitHandler={this._onSubmitClicked}
                                           cartNameChanged={this._onCartNameChanged}/>
        }

        if (renderArticles) {
            articles = <Article className="form-field-name"
                                articles={state.data.articles}
                                changeHandler={(e, article) => this._onArticleClicked(e, article)}/>
        }

        if (renderCategories) {
            categories = <Select className="form-field-name"
                                 value={state.data.selectedCategory}
                                 onChange={(e) => this._onCategoryChange(e)}
                                 options={state.data.categoryOptions}/>
        }

        if (renderPurchase) {
            purchase = <CartArticles className="form-field-name"
                                     purchase={state.data.purchase}
                                     addHandler={(e, article) => this._onAddClicked(e, article)}
                                     removeOneHandler={(e, article) => this._onRemoveOneClicked(e, article)}
                                     removeArticleHandler={(e, article) => this._onRemoveArticleClicked(e, article)}
                                     saveHandler={this._onSaveClicked}
                                     saveEnabled={state.data.saveEnabled}/>
        }

        if (renderActionPanel) {
            actionPanel = <CartActionPanel className="form-field-name"
                                           resetHandler={this._onResetClicked}
                                           resetEnabled={state.data.resetEnabled}
                                           saveHandler={this._onSaveClicked}
                                           saveEnabled={state.data.saveEnabled}
                                           newCartHandler={this._onNewCartClicked}
                                           backHandler={this._onBackClicked}
                                           deleteHandler={this._onDeleteClicked}/>
        }

        if (renderCarts) {
            carts = <CartSelection className="form-field-name"
                                   carts={state.data.carts}
                                   changeHandler={(e, cart) => this._onCartSelectionClicked(e, cart)}
                                   newCartHandler={this._onNewCartClicked}/>
        }

        return (<div className="container">
            <h1 className="col-12"><img id="logo" src="/assets/images/logo.png"/>Donkey List</h1>


            <div className="row">
                <div className="col-md-12">{actionPanel}</div>
                <div className="col-md-12">{carts}</div>
                <div className="col-md-6">{articles}</div>
                <div className="col-md-6">{purchase}</div>
            </div>


            {cartNameInput}
            {categories}
        </div>);
    }
}