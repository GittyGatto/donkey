package com.henning.donkey.business.responseEnties;

public class ArticleDto {
    private String articleUuid;
    private String articleName;
    private String categoryName;

    public ArticleDto() {
    }

    public ArticleDto(String articleUuid, String articleName, String categoryName) {
        this.articleUuid = articleUuid;
        this.articleName = articleName;
        this.categoryName = categoryName;
    }

    public String getArticleUuid() {
        return articleUuid;
    }

    public void setArticleUuid(String articleUuid) {
        this.articleUuid = articleUuid;
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