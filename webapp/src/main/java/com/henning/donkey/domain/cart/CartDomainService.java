package com.henning.donkey.domain.cart;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class CartDomainService {

    @Autowired
    private CartRepository cartRepository;

    public CartEntity getCart(String cartName) {
        CartEntity cart = this.cartRepository.findByCartName(cartName);
        return cart;
    }

    public void remove(String cartName) {
        this.cartRepository.deleteByCartName(cartName);
    }

    public List<CartEntity> getCarts() {
        List<CartEntity> carts = cartRepository.findAll();
        return carts;
    }

    public void saveCart(CartEntity cartEntity) {
        this.cartRepository.save(cartEntity);
    }

}
