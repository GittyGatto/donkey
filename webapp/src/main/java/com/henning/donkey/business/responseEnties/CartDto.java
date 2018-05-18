package com.henning.donkey.business.responseEnties;

import java.util.List;

public class CartDto
{
	private String uuid;
	private String name;
	private List<CartArticleDto> cartArticles;

	public CartDto(){}

    public CartDto(String uuid, String name, List<CartArticleDto> cartArticles) {
        this.uuid = uuid;
        this.name = name;
        this.cartArticles = cartArticles;
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

    public List<CartArticleDto> getCartArticles() {
        return cartArticles;
    }

    public void setCartArticles(List<CartArticleDto> cartArticles) {
        this.cartArticles = cartArticles;
    }
}
