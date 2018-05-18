package com.henning.donkey.business;


import com.henning.donkey.business.responseEnties.CartArticleDto;
import com.henning.donkey.business.responseEnties.CartDto;
import com.henning.donkey.domain.cart.CartDomainService;
import com.henning.donkey.domain.cart.CartEntity;
import com.henning.donkey.domain.cartArticle.CartArticleEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class GetCartBusinessService {

    @Autowired
    private CartDomainService cartDomainService;

    public List<CartDto> getCartDto() {
        List<CartEntity> carts = cartDomainService.getCarts();
        if (carts == null){
            return null;
        }
        List<CartDto> responseCarts = getCartDto(carts);
        return responseCarts;
    }

    private List<CartDto> getCartDto(List<CartEntity> carts) {
        List<CartDto> response = new ArrayList<>();
        carts.stream().forEach(c -> {
            CartDto cartDto = new CartDto();
            cartDto.setUuid(c.getCartUuid());
            cartDto.setName(c.getCartName());
            cartDto.setCartArticles(toCartArticles(c.getCartArticles()));
            response.add(cartDto);
        });
        return response;
    }

    private List<CartArticleDto> toCartArticles(List<CartArticleEntity> cartArticleEntities) {
        List<CartArticleDto> cartArticleDtos = new ArrayList<>();
        cartArticleEntities.stream().forEach(ca -> {

            long articleId = ca.getArticle().getArticleId();
            String articleName = ca.getArticle().getArticleName();
            String categoryName = ca.getArticle().getCategory().getCategoryName();
            long amount = ca.getAmount();
            long cartId = ca.getCart().getCartId();
            String cartUuid = ca.getCartArticleUuid();

            CartArticleDto cartArticleDto = new CartArticleDto(articleId, cartUuid, articleName, categoryName, amount, cartId);
            cartArticleDtos.add(cartArticleDto);
        });
        return cartArticleDtos;
    }
}
