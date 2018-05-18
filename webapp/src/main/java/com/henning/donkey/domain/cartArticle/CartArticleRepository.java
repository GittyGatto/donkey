package com.henning.donkey.domain.cartArticle;

import com.henning.donkey.domain.cart.CartEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;


import java.util.List;

public interface CartArticleRepository extends JpaRepository<CartArticleEntity, Long> {


    List<CartArticleEntity> findByCart(CartEntity cartEntity);

    @Transactional
    void deleteByCart(CartEntity cartEntity);

    @Transactional
    List<CartArticleEntity> removeByCart(CartEntity cartEntity);

}
