package com.henning.donkey.business.responseEnties;

public class ArticleDto {
    private long articleId;
    private String articleName;
    private String categoryName;

    public ArticleDto(){}

    public ArticleDto(long articleId, String articleName, String categoryName) {
        this.articleId = articleId;
        this.articleName = articleName;
        this.categoryName = categoryName;
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
}