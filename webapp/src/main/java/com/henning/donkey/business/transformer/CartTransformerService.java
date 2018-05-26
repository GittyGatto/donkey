package com.henning.donkey.business.transformer;

import com.henning.donkey.business.responseEnties.CartDto;
import com.henning.donkey.domain.cart.CartEntity;
import com.henning.donkey.domain.cart.CartRepository;
import com.henning.donkey.domain.cartArticle.CartArticleEntity;
import com.henning.donkey.domain.cartArticle.CartArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CartTransformerService {

    @Autowired
    CartArticleTransformerService cartArticleTransformerService;

    @Autowired
    CartRepository cartRepository;

    @Autowired
    CartArticleRepository cartArticleRepository;

    public List<CartDto> toCartDto(List<CartEntity> carts) {
        List<CartDto> response = new ArrayList<>();
        carts.stream().forEach(c -> {
            CartDto cartDto = toCartDto(c);
            response.add(cartDto);
        });
        return response;
    }

    public CartDto toCartDto(CartEntity c) {
        CartDto cartDto = new CartDto();
        cartDto.setUuid(c.getCartUuid());
        cartDto.setName(c.getCartName());
        cartDto.setCartArticles(cartArticleTransformerService.toCartArticles(c.getCartArticles()));
        return cartDto;
    }

    public CartEntity toCartEntity(CartDto cartDto) {
        CartEntity cartEntity = cartRepository.findByCartUuid(cartDto.getUuid()).orElseGet(CartEntity::new);
        cartEntity.setCartName(cartDto.getName());
        cartEntity.setCartUuid(cartDto.getUuid());
        List<CartArticleEntity> cartArticleEntities = cartArticleTransformerService.toCartArticles(cartDto, cartEntity);
        cartEntity.setCartArticles(cartArticleEntities);
        return cartEntity;
    }
}
