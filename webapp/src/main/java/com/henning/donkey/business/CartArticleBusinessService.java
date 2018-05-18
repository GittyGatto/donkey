package com.henning.donkey.business;

import com.henning.donkey.domain.cart.CartEntity;
import com.henning.donkey.domain.cartArticle.CartArticleEntity;
import com.henning.donkey.domain.cartArticle.CartArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class CartArticleBusinessService {


    @Autowired
    private CartArticleRepository cartArticleRepository;

    @Autowired
    private CartBusinessService cartBusinessService;

    public void saveCartArticles(List<CartArticleEntity> cartArticleEntities) {
        CartEntity cartEntity = cartBusinessService.getCart(cartArticleEntities);
        cartArticleRepository.deleteByCart(cartEntity);
        cartArticleRepository.save(cartArticleEntities);
    }
}
