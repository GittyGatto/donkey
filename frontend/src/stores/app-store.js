import {dispatcher, initStore} from '../util/mini-flux';

class AppStore {
    constructor() {
        this.data = {
            renderActionPanel: false,

            renderCarts: true,
            carts: [],
            selectedCart: '',

            renderCategories: false,
            categoryOptions: [],
            selectedCategory: 'All',

            renderArticles: false,
            articles: [],
            selectedArticle: '',

            renderPurchase: false,
            purchase: [],

            resetEnabled: false,
            saveEnabled: false,

            renderCartNameInput: false,
            cartNameInput: '',
        };
    }

    handlePurchaseSaved(ev) {
        console.log('saved');
    }

    handleArticleRemoved(ev) {
        this.data.selectedArticle = ev.article;
        this.removeArticle();
        this.data.saveEnabled = true;
        this.update({});
    }

    handleOneArticleRemoved(ev) {
        this.data.selectedArticle = ev.article;
        this.removeOneArticle();
        this.data.saveEnabled = true;
        this.update({});
    }

    handleCategoryArticlesReceived(ev) {
        this.data.articles = ev.data;
        this.data.selectedCategory = ev.categoryName;
        this.update({});
    }

    handleCategoriesReceived(ev) {
        this.toLabelValue(ev);
        this.addDefaultCategory();
        this.update({});
    }

    handleArticlesReceived(ev) {
        this.data.articles = ev.data;
        this.update({});
    }

    handleNewCartClicked(ev) {
        this.data.renderCartNameInput = true;
        this.data.renderPurchase = false;
        this.update({});
    }

    handleCartArticlesReceived(ev) {
        this.data.purchase = this.getCartByName(ev.data);
        this.data.selectedCart = ev.cartName;

        this.data.renderArticles = true;
        this.data.renderPurchase = true;
        this.data.renderCartNameInput = false;

        this.data.resetEnabled = true;
        this.update({});
    }

    handleCartsReceived(ev) {
        this.data.carts = ev.data;
        this.update({});
    }

    handleCartNameSubmitted(ev) {
        this.addCartToCarts(ev.data);
        this.data.renderCartNameInput = false;
        this.data.cartNameInput = '';
        this.update({});
    }

    handleCartReseted() {
        this.resetCart();
        this.data.saveEnabled = true;
        this.update({});
    }

    handleArticleAdded(ev) {
        this.data.selectedArticle = ev.article;
        this.data.saveEnabled = true;
        this.addArticle();
        this.update({});
    }

    handleCartNameChanged(ev) {
        this.data.cartNameInput = ev.value;
        this.update({});
    }

    handleDataChanged(ev) {
        this.data = ev.data;
        this.update({});
    }

    update(ev) {
        this.notifyListeners(ev);
    }

    getCartByName(cartName) {
        const carts = this.data.carts;
        const index = carts.findIndex(cart => cart.name === cartName);
        return carts[index];
    }

    addDefaultCategory() {
        let categoryOptions = this.data.categoryOptions;
        const defaultOption = {label: 'All', value: 'All'};
        categoryOptions.push(defaultOption);
        this.data.categoryOptions = categoryOptions;
    }

    removeArticle() {
        const article = this.data.selectedArticle;
        let purchase = this.data.purchase.cartArticles;
        const index = purchase.findIndex(x => x.articleName === article.articleName);
        purchase.splice(index, 1);
    }

    removeOneArticle() {
        const article = this.data.selectedArticle;
        let purchase = this.data.purchase.cartArticles;

        let index = purchase.findIndex(x => x.articleName === article.articleName);

        if (index >= 0 && purchase[index].amount > 1) {
            purchase[index].amount--;
        } else {
            purchase.splice(index, 1);
        }
    }

    addArticle() {
        let purchase = this.data.purchase.cartArticles;
        let article = this.data.selectedArticle;
        let index = purchase.findIndex(x => x.articleName === article.articleName);

        if (index >= 0) {
            purchase[index].amount++;
        } else {
            let newArticle = {
                cartArticleUuid: article.articleUuid,
                articleName: article.articleName,
                categoryName: article.categoryName,
                amount: 1
            };
            purchase.push(newArticle);
            this.data.resetEnabled = true;
            this.data.saveEnabled = true;
        }
        this.data.purchase.cartArticles = purchase;
    }

    resetCart() {
        this.data.purchase = [];
        this.data.resetEnabled = false;
        this.data.saveEnabled = false;
    }

    toLabelValue(ev) {
        let labelValues = [];
        ev.data.forEach(e => {
            const labelValue = {label: e.name, value: e.name};
            labelValues.push(labelValue);
        })

        if (ev.type === 'categoriesReceived') {
            this.data.categoryOptions = labelValues;
        }
    }

    addCartToCarts(NewCart) {
        let carts = this.data.carts;
        carts.push(NewCart);
        this.data.carts = carts;
    }
}

var appStore = initStore(new AppStore());

dispatcher.addStore(appStore);

export default appStore;
