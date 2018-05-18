package com.henning.donkey.business.responseEnties;

public class ArticleDto {
    private String uuid;
    private String name;
    private String categoryName;

    public ArticleDto() {
    }

    public ArticleDto(String uuid, String name, String categoryName) {
        this.uuid = uuid;
        this.name = name;
        this.categoryName = categoryName;
    }

    public String getUuid() {
        return uuid;
    }

    public void setUuid(String uuid) {
        this.uuid = uuid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }
}