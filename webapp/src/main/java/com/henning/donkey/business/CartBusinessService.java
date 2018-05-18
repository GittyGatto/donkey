package com.henning.donkey.business;

import com.henning.donkey.business.responseEnties.CartDto;
import com.henning.donkey.business.transformer.CartTransformerService;
import com.henning.donkey.domain.cart.CartEntity;
import com.henning.donkey.domain.cart.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartBusinessService {

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private CartTransformerService cartTransformerService;

    public List<CartDto> getCartDtos() {
        List<CartEntity> cartEntities = cartRepository.findAll();
        return cartTransformerService.toCartDto(cartEntities);
    }

    public CartDto saveCart(CartDto cartDto) {
        CartEntity cartEntity = cartTransformerService.toCartEntity(cartDto);
        CartEntity storedCartEntity = cartRepository.save(cartEntity);
        return cartTransformerService.toCartDto(storedCartEntity);
    }

    public void delete(String uuid) {
        this.cartRepository.deleteByCartUuid(uuid);
    }

}
