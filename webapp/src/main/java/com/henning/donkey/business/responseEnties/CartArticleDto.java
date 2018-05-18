package com.henning.donkey.business.responseEnties;

public class CartArticleDto {

    private long articleId;
    private String cartArticleUuid;
    private String articleName;
    private String categoryName;
    private long amount;
    private long cartId;

    public CartArticleDto(){}

    public CartArticleDto(long articleId, String cartArticleUuid, String articleName, String categoryName, long amount, long cartId) {
        this.articleId = articleId;
        this.cartArticleUuid = cartArticleUuid;
        this.articleName = articleName;
        this.categoryName = categoryName;
        this.amount = amount;
        this.cartId = cartId;
    }

    public String getCartArticleUuid() {
        return cartArticleUuid;
    }

    public void setCartArticleUuid(String cartArticleUuid) {
        this.cartArticleUuid = cartArticleUuid;
    }

    public long getCartId() {
        return cartId;
    }

    public void setCartId(long cartId) {
        this.cartId = cartId;
    }

    public long getArticleId() {
        return articleId;
    }

    public void setArticleId(long articleId) {
        this.articleId = articleId;
    }

    public String getArticleName() {
        return articleName;
    }

    public void setArticleName(String articleName) {
        this.articleName = articleName;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    public long getAmount() {
        return amount;
    }

    public void setAmount(long amount) {
        this.amount = amount;
    }
}