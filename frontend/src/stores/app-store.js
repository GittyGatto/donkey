import {dispatcher, initStore} from '../util/mini-flux';

class AppStore {
    constructor() {
        this.data = {
            renderActionPanel: false,
            renderNewButton: false,
            renderSaveButton: false,
            renderBackButton: false,
            renderDeleteButton: false,

            renderCarts: false,
            renderDoneBox: false,
            carts: [],

            renderCategories: false,
            categoryOptions: [],
            selectedCategory: 'Alle',

            renderArticles: false,
            articles: [],
            filteredArticles: [],
            selectedArticle: '',

            renderPurchase: false,
            purchase: [],

            renderCartNameInput: false,
            cartNameInput: '',
        };
    }

    handleArticleChecked(ev) {
        this.data.purchase.cartArticles = this.checkArticle(ev.article);
        this.update({});
    }

    handlePurchaseDeleted(ev) {
        this.removePurchase();
        this.data.renderCarts = true;
        this.data.renderPurchase = false;
        this.data.renderArticles = false;
        this.update({});
    }

    handlePurchaseSaved(ev) {
        console.log('saved');
    }

    handleArticleRemoved(ev) {
        this.data.selectedArticle = ev.article;
        this.removeArticle();
        this.update({});
    }

    handleOneArticleRemoved(ev) {
        this.data.selectedArticle = ev.article;

        this.data.renderSaveButton = true;

        this.removeOneArticle();
        this.update({});
    }

    handleCategoryChanged(ev) {
        this.data.selectedCategory = ev.data;
        this.filterArticles(ev.data);
        this.update({});
    }

    handleCategoriesReceived(ev) {
        this.toLabelValue(ev);
        this.addDefaultCategory();
        this.update({});
    }

    handleArticlesReceived(ev) {
        this.data.articles = ev.data;
        this.data.filteredArticles = ev.data;
        this.update({});
    }

    handleNewCartClicked(ev) {
        this.data.renderCartNameInput = true;

        this.data.renderArticles = false;
        this.data.renderPurchase = false;

        this.update({});
    }

    handleCartArticlesReceived(ev) {
        this.setPurchase(ev.data);

        this.data.renderArticles = true;
        this.data.renderPurchase = true;
        this.data.renderCategories = true;
        this.data.renderDoneBox = false;
        this.data.renderCarts = false;
        this.data.renderCartNameInput = false;

        this.data.renderBackButton = true;
        this.data.renderDeleteButton = true;

        this.update({});
    }

    handleCartsReceived(ev) {
        this.data.carts = ev.data;
        this.data.renderCarts = true;
        this.update({});
    }

    handleCartNameSubmitted(ev) {
        this.addCartToCarts(ev.data);
        this.data.cartNameInput = '';
        this.data.renderCartNameInput = false;
        this.data.renderCarts = true;
        this.update({});
    }

    handleArticleAdded(ev) {
        this.data.selectedArticle = ev.article;
        this.data.renderSaveButton = true;
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

    handleBackToCartsClicked(ev) {
        this.data.renderCarts = true;
        this.data.renderArticles = false;
        this.data.renderPurchase = false;
        this.data.renderSaveButton = false;
        this.data.renderDeleteButton = false;
        this.data.renderBackButton = false;
        this.update({});
    }

    handleEditCartClicked(ev) {
        this.data.renderPurchase = false;
        this.data.renderArticles = true;
        this.update({});
    }

    update(ev) {
        this.notifyListeners(ev);
    }

    setPurchase(cartName) {
        const carts = this.data.carts;
        const index = carts.findIndex(cart => cart.name === cartName);
        this.data.purchase = carts[index];
    }

    addDefaultCategory() {
        let categoryOptions = this.data.categoryOptions;
        const defaultOption = {label: 'Alle', value: 'Alle', clearableValue: false};
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

    checkArticle(article) {
        let purchase = this.data.purchase.cartArticles;
        const index = purchase.findIndex(x => x.articleName === article.articleName);
        if (purchase[index].done) {
            purchase[index].done = false;
        } else {
            purchase[index].done = true;
        }
        return this.data.purchase.cartArticles = purchase;
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
        }
        this.data.purchase.cartArticles = purchase;
    }

    toLabelValue(ev) {
        let labelValues = [];
        ev.data.forEach(e => {
            const labelValue = {label: e.name, value: e.name, clearableValue: false};
            labelValues.push(labelValue);
        })
        this.data.categoryOptions = labelValues;
    }

    addCartToCarts(NewCart) {
        let carts = this.data.carts;
        carts.push(NewCart);
        this.data.carts = carts;
    }

    removePurchase() {
        let carts = this.data.carts;
        const purchaseName = this.data.purchase.name;
        const index = carts.findIndex(cart => cart.name === purchaseName);
        carts.splice(index);
        this.data.carts = carts;
    }

    filterArticles(categoryName) {
        const articles = this.data.articles;
        let filteredArticles = articles.filter(article => article.categoryName === categoryName || categoryName === 'Alle');
        this.data.filteredArticles = filteredArticles;
    }
}

var appStore = initStore(new AppStore());

dispatcher.addStore(appStore);

export default appStore;
