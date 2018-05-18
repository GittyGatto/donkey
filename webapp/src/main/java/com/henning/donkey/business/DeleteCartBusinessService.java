package com.henning.donkey.business;

import com.henning.donkey.domain.cart.CartDomainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(propagation = Propagation.REQUIRED)
public class DeleteCartBusinessService
{
    @Autowired
    private CartDomainService cartDomainService;

    public void delete(String cartName)
    {
        this.cartDomainService.remove(cartName);
    }
}
