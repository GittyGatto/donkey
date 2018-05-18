package com.henning.donkey.business;


import com.henning.donkey.domain.cart.CartEntity;
import com.henning.donkey.domain.cart.CartRepository;
import com.henning.donkey.domain.cartArticle.CartArticleEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartBusinessService {

    @Autowired
    private CartRepository cartRepository;

    public CartEntity getCart(List<CartArticleEntity> cartArticleEntities) {
        long cartId = cartArticleEntities.get(0).getCart().getCartId();
        return cartRepository.findOne(cartId);
    }
}
