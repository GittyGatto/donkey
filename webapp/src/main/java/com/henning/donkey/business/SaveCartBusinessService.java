package com.henning.donkey.business;

import com.henning.donkey.business.responseEnties.CartDto;
import com.henning.donkey.domain.cart.CartDomainService;
import com.henning.donkey.domain.cart.CartEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SaveCartBusinessService {

    @Autowired
    private CartDomainService cartDomainService;

    public CartDto saveNewCart(CartDto cartDto) {
        CartEntity cartEntity = new CartEntity(cartDto.getUuid(), cartDto.getName(), null);
        this.cartDomainService.saveCart(cartEntity);
        CartEntity cart = this.cartDomainService.getCart(cartDto.getName());
        return toCartDto(cart);
    }

    private CartDto toCartDto(CartEntity cart) {
        return new CartDto(cart.getCartUuid(), cart.getCartName(),null);
    }
}
