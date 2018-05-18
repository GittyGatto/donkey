package com.henning.donkey.business;

import com.henning.donkey.business.responseEnties.CartArticleDto;
import com.henning.donkey.business.responseEnties.CartDto;
import com.henning.donkey.domain.article.ArticleEntity;
import com.henning.donkey.domain.article.ArticleRepository;
import com.henning.donkey.domain.cart.CartEntity;
import com.henning.donkey.domain.cart.CartRepository;
import com.henning.donkey.domain.cartArticle.CartArticleEntity;
import com.henning.donkey.domain.category.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CartArticleTransformerService {

    @Autowired
    ArticleRepository articleRepository;

    @Autowired
    CategoryRepository categoryRepository;

    @Autowired
    CartRepository cartRepository;

    public List<CartArticleDto> toCartArticles(List<CartArticleEntity> cartArticleEntities) {
        List<CartArticleDto> cartArticleDtos = new ArrayList<>();

        cartArticleEntities.stream().forEach(ca -> {

            String articleName = ca.getArticle().getArticleName();
            String categoryName = ca.getArticle().getCategory().getCategoryName();
            long amount = ca.getAmount();
            String cartUuid = ca.getCartArticleUuid();

            CartArticleDto cartArticleDto = new CartArticleDto(cartUuid, articleName, categoryName, amount);
            cartArticleDtos.add(cartArticleDto);
        });
        return cartArticleDtos;
    }

    public List<CartArticleEntity> toCartArticles(CartDto cartDto) {
        List<CartArticleEntity> cartArticleEntities = new ArrayList<>();
        CartEntity cartEntity = cartRepository.findByCartUuid(cartDto.getUuid());

        cartDto.getCartArticles().stream().forEach(cd -> {

            ArticleEntity articleEntity = articleRepository.findByArticleUuid(cd.getCartArticleUuid());
            CartEntity cart = cartEntity;
            long amount = cd.getAmount();

            CartArticleEntity cartArticleEntity = new CartArticleEntity(articleEntity.getArticleUuid(), cart, articleEntity, amount);
            cartArticleEntities.add(cartArticleEntity);
        });
        return cartArticleEntities;
    }
}
