package com.henning.donkey.domain.cart;

import com.henning.donkey.domain.cartArticle.CartArticleEntity;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "cart")
public class CartEntity
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "cart_id")
	private long cartId;

	@Column
	private String cartUuid;

	@Column(name = "cart_name")
	private String cartName;

	@OneToMany(fetch = FetchType.LAZY, orphanRemoval = true, cascade = CascadeType.ALL, mappedBy="cart")
	private List<CartArticleEntity> cartArticles = new ArrayList<CartArticleEntity>();

	public CartEntity(){}

	public CartEntity(String cartUuid, String cartName, List<CartArticleEntity> cartArticles) {
		this.cartName = cartName;
		this.cartArticles = cartArticles;
		this.cartUuid = cartUuid;
	}

	public String getCartUuid() {
		return cartUuid;
	}

	public void setCartUuid(String cartUuid) {
		this.cartUuid = cartUuid;
	}

	public List<CartArticleEntity> getCartArticles() {
		return cartArticles;
	}

	public void setCartArticles(List<CartArticleEntity> cartArticles) {
		this.cartArticles = cartArticles;
	}

	public long getCartId() {
		return cartId;
	}

	public void setCartId(long cartId) {
		this.cartId = cartId;
	}

	public String getCartName() {
		return cartName;
	}

	public void setCartName(String cartName) {
		this.cartName = cartName;
	}
}
