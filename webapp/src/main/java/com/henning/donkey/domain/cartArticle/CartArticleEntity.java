package com.henning.donkey.domain.cartArticle;

import com.henning.donkey.domain.article.ArticleEntity;
import com.henning.donkey.domain.cart.CartEntity;

import javax.persistence.*;

@Entity(name = "CartArticle")
@Table(name = "cart_article")
public class CartArticleEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cart_article_id")
    private long cartArticleId;

    @Column
    private String cartArticleUuid;

    @ManyToOne
    @JoinColumn(name = "cart_id")
    private CartEntity cart;

    @ManyToOne
    @JoinColumn(name = "article_id")
    private ArticleEntity article;

    @Column(name = "amount")
    private long amount;

    @Column(name = "done")
    private boolean done;

    public CartArticleEntity() {
    }

    public CartArticleEntity(String cartArticleUuid, CartEntity cart, ArticleEntity article, long amount, boolean done) {
        this.cartArticleUuid = cartArticleUuid;
        this.cart = cart;
        this.article = article;
        this.amount = amount;
        this.done = done;
    }

    public String getCartArticleUuid() {
        return cartArticleUuid;
    }

    public void setCartArticleUuid(String cartArticleUuid) {
        this.cartArticleUuid = cartArticleUuid;
    }

    public long getCartArticleId() {
        return cartArticleId;
    }

    public void setCartArticleId(long cartArticleId) {
        this.cartArticleId = cartArticleId;
    }

    public CartEntity getCart() {
        return cart;
    }

    public void setCart(CartEntity cart) {
        this.cart = cart;
    }

    public ArticleEntity getArticle() {
        return article;
    }

    public void setArticle(ArticleEntity article) {
        this.article = article;
    }

    public long getAmount() {
        return amount;
    }

    public void setAmount(long amount) {
        this.amount = amount;
    }

    public boolean isDone() {
        return done;
    }

    public void setDone(boolean done) {
        this.done = done;
    }
}