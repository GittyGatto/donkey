package com.henning.donkey.business.transformer;

import com.henning.donkey.business.responseEnties.CartArticleDto;
import com.henning.donkey.business.responseEnties.CartDto;
import com.henning.donkey.domain.article.ArticleEntity;
import com.henning.donkey.domain.article.ArticleRepository;
import com.henning.donkey.domain.cart.CartEntity;
import com.henning.donkey.domain.cart.CartRepository;
import com.henning.donkey.domain.cartArticle.CartArticleEntity;
import com.henning.donkey.domain.cartArticle.CartArticleRepository;
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

    @Autowired
    CartArticleRepository cartArticleRepository;

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

    public List<CartArticleEntity> toCartArticles(CartDto cartDto, CartEntity cartEntity) {
        List<CartArticleEntity> cartArticleEntities = new ArrayList<>();

        cartDto.getCartArticles().stream().forEach(cd -> {
            CartArticleEntity cartArticleEntity = cartArticleRepository.findByCartArticleUuid(cd.getCartArticleUuid()).orElseGet(CartArticleEntity::new);
            cartArticleEntity.setAmount(cd.getAmount());
            cartArticleEntity.setCart(cartEntity);
            cartArticleEntity.setCartArticleUuid(cd.getCartArticleUuid());
            ArticleEntity articleEntity = articleRepository.findByArticleName(cd.getArticleName());
            cartArticleEntity.setArticle(articleEntity);
            cartArticleEntities.add(cartArticleEntity);
        });
        return cartArticleEntities;
    }
}
