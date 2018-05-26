package com.henning.donkey.domain.cartArticle;

import com.henning.donkey.domain.cart.CartEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

public interface CartArticleRepository extends JpaRepository<CartArticleEntity, Long> {

    @Transactional
    Optional<List<CartArticleEntity>> findByCart(CartEntity cartEntity);

    @Transactional
    Optional<CartArticleEntity> findByCartArticleUuid(String uuid);

    @Transactional
    void deleteByCart(CartEntity cartEntity);

    @Transactional
    List<CartArticleEntity> removeByCart(CartEntity cartEntity);

}
