import {dispatcher, initStore} from '../util/mini-flux';

class AppStore {
    constructor() {
        this.data = {
            renderActionPanel: false,
            renderNewButton: false,
            renderSaveButton: false,
            renderBackButton: false,
            renderDeleteButton: false,
            renderEditCartArticle: false,

            renderCarts: false,
            carts: [],

            renderCategories: false,
            categoryOptions: [],
            categoryOptionsAsLabelValue: [],
            selectedCategory: 'Alle',

            completedArticles: undefined,

            renderArticles: false,
            articles: [],
            filteredArticles: [],
            selectedArticle: '',
            cartArticleInEdit: {},

            renderPurchase: false,
            purchase: [],
            editToggle: false,

            renderCartNameInput: false,
            cartNameInput: '',

            renderArticleNameInput: false,
            articleCategory: {},
            articleNameInput: '',
            articleCategorySelection: '',
        };
    }

    handleArticleChecked(ev) {
        this.data.purchase.cartArticles = this.checkArticle(ev.article);
        this.data.completedArticles = this.getCompletedArticles(this.data.purchase.cartArticles);
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

    handleNewArticleSaved(ev){
        console.log('article saved');
        this.addArticleToArticles(ev.data);
        this.data.renderArticleNameInput = false;
        this.data.renderArticles = true;
        this.update({});
    }

    handleArticleRemoved(ev) {
        this.data.selectedArticle = ev.article;
        this.removeArticle();
        this.filterArticlesByCategory();
        this.removeCartArticlesFromFilteredArticles();
        this.data.completedArticles = this.getCompletedArticles(this.data.purchase.cartArticles);
        this.update({});
    }

    handleOneArticleRemoved(ev) {
        this.data.selectedArticle = ev.article;
        this.data.renderSaveButton = true;
        this.removeOneArticle();
        this.resetFilteredArticles();
        this.removeCartArticlesFromFilteredArticles();
        this.data.completedArticles = this.getCompletedArticles(this.data.purchase.cartArticles);
        this.update({});
    }

    handleCategoryChanged(ev) {
        this.data.selectedCategory = ev.data;
        this.filterArticlesByCategory();
        this.removeCartArticlesFromFilteredArticles();
        this.update({});
    }

    handleCategoriesReceived(ev) {
        this.data.categoryOptions = ev.data;
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

    handleNewArticleClicked(ev) {
        this.getCategoryOptionsAsLabelValue();
        this.data.renderArticleNameInput = true;

        this.data.renderArticles = false;

        this.update({});
    }

    handleCartArticlesReceived(ev) {
        this.setPurchase(ev.data);
        this.data.completedArticles = this.getCompletedArticles(this.data.purchase.cartArticles);
        this.removeCartArticlesFromFilteredArticles();
        this.data.renderPurchase = true;
        this.data.renderCategories = true;
        this.data.renderCarts = false;
        this.data.renderCartNameInput = false;
        this.data.renderArticles = false;

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
        this.removeCartArticlesFromFilteredArticles();
        this.update({});
    }

    handleCartNameChanged(ev) {
        this.data.cartNameInput = ev.value;
        this.update({});
    }

    handleArticleCategoryChanged(ev){
        this.data.articleCategorySelection = ev.category;
        this.update({});
    }

    handleArticleNameChanged(ev) {
        this.data.articleNameInput = ev.value;
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

    handleBackToCartArticlesClicked(ev) {
        this.data.renderPurchase = true;
        this.data.renderArticles = false;
        this.update({});
    }

    handleEditCartArticleClicked(ev) {
        this.data.renderPurchase = false;
        this.data.renderArticles = false;
        this.data.selectedArticle = ev.article;
        this.data.renderEditCartArticle = true;
        this.update({});
    }

    handleBackToPurchaseClicked() {
        this.data.renderEditCartArticle = false;
        this.data.renderPurchase = true;
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

    getCartArticleIndex(articleName) {
        let cartArticles = this.data.purchase.cartArticles;
        return cartArticles.findIndex(x => x.articleName === articleName);
    }

    getCompletedArticles(cartArticles) {
        let completedArticles = cartArticles.filter(article => article.done === true);
        return completedArticles.length;
    }


    removeArticle() {
        const article = this.data.selectedArticle;
        let cartArticles = this.data.purchase.cartArticles;
        const index = this.getCartArticleIndex(article.articleName);
        cartArticles.splice(index, 1);
    }

    removeOneArticle() {
        const article = this.data.selectedArticle;
        let cartArticles = this.data.purchase.cartArticles;

        let index = this.getCartArticleIndex(article.articleName);

        if (index >= 0 && cartArticles[index].amount > 1) {
            cartArticles[index].amount--;
        } else {
            cartArticles.splice(index, 1);
        }
    }

    checkArticle(article) {
        let cartArticles = this.data.purchase.cartArticles;
        const index = this.getCartArticleIndex(article.articleName);

        if (index >= 0) {

            if (cartArticles[index].done) {
                cartArticles[index].done = false;
            } else {
                cartArticles[index].done = true;
            }

        }
        return this.data.purchase.cartArticles = cartArticles;
    }

    addArticle() {
        let cartArticles = this.data.purchase.cartArticles;
        let article = this.data.selectedArticle;
        let index = this.getCartArticleIndex(article.articleName);

        if (index >= 0) {
            cartArticles[index].amount++;
        } else {
            let newArticle = {
                cartArticleUuid: article.articleUuid,
                articleName: article.articleName,
                categoryName: article.categoryName,
                done: false,
                amount: 1
            };
            cartArticles.push(newArticle);
        }
        this.data.purchase.cartArticles = cartArticles;
    }

    addCartToCarts(newCart) {
        let carts = this.data.carts;
        carts.push(newCart);
        this.data.carts = carts;
    }

    addArticleToArticles(newArticle){
        let articles = this.data.articles;
        articles.push(newArticle);
        this.data.filteredArticles =articles;
    }

    removePurchase() {
        let carts = this.data.carts;
        const purchaseName = this.data.purchase.name;
        const index = carts.findIndex(cart => cart.name === purchaseName);
        carts.splice(index);
        this.data.carts = carts;
    }

    filterArticlesByCategory() {
        const categoryName = this.data.selectedCategory;
        const articles = this.data.articles;
        let filteredArticles = articles.filter(article => article.categoryName === categoryName || categoryName === 'Alle');
        this.data.filteredArticles = filteredArticles;
    }

    removeCartArticlesFromFilteredArticles() {
        const filteredArticles = this.data.filteredArticles;
        let result = [];


        filteredArticles.map(article => {
            const isInCart = this.isInCartArticles(article.articleName)

            if (!isInCart) {
                result.push(article);
            }

        });
        this.data.filteredArticles = result;
    }

    resetFilteredArticles() {
        this.data.filteredArticles = this.data.articles;
    }

    isInCartArticles(articleName) {
        const cartArticles = this.data.purchase.cartArticles;
        const index = cartArticles.findIndex(article => article.articleName === articleName);
        if (index >= 0) {
            return true;
        } else {
            return false;
        }
    }

    getCategoryOptionsAsLabelValue() {
        const categoryOptions = this.data.categoryOptions;

        let labelValues = [];
        categoryOptions.forEach(e => {
            const labelValue = {label: e.name, value: e.name, clearableValue: false};
            labelValues.push(labelValue);
        })
        this.data.categoryOptionsAsLabelValue = labelValues;
    }
}

var appStore = initStore(new AppStore());

dispatcher.addStore(appStore);

export default appStore;
