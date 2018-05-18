package com.henning.donkey.business.responseEnties;

public class CartArticleDto {

    private String cartArticleUuid;
    private String articleName;
    private String categoryName;
    private long amount;

    public CartArticleDto(){}

    public CartArticleDto(String cartArticleUuid, String articleName, String categoryName, long amount) {
        this.cartArticleUuid = cartArticleUuid;
        this.articleName = articleName;
        this.categoryName = categoryName;
        this.amount = amount;
    }

    public String getCartArticleUuid() {
        return cartArticleUuid;
    }

    public void setCartArticleUuid(String cartArticleUuid) {
        this.cartArticleUuid = cartArticleUuid;
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