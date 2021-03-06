package com.henning.donkey.domain.cart;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;


@Repository
public interface CartRepository extends JpaRepository<CartEntity, Long> {

    @Transactional
    void deleteByCartUuid(String uuid);

    @Transactional
    Optional<CartEntity> findByCartUuid(String uuid);
}
