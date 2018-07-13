package com.henning.donkey.controllers;

import com.henning.donkey.business.CartBusinessService;
import com.henning.donkey.business.responseEnties.CartDto;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CartResource {

    private static Logger logger = LoggerFactory.getLogger(CartResource.class);

    @Autowired
    private CartBusinessService cartBusinessService;

    @RequestMapping(value = "/api/carts", method = RequestMethod.GET)
    public
    @ResponseBody
    ResponseEntity<List<CartDto>> getCarts() {
        logger.info("Carts requested.");
        List<CartDto> carts = this.cartBusinessService.getCartDtos();
        return new ResponseEntity<>(carts, HttpStatus.OK);
    }

    @RequestMapping(value = "/api/carts", method = RequestMethod.POST)
    public
    @ResponseBody
    ResponseEntity<CartDto> saveCart(@RequestBody CartDto request) {
        logger.info("New cart received: " + request.getName());
        CartDto cartDto = this.cartBusinessService.saveCart(request);
        return new ResponseEntity<>(cartDto, HttpStatus.OK);
    }

    @RequestMapping(value = "/api/carts/{uuid}", method = RequestMethod.DELETE)
    public
    ResponseEntity<?> deleteCart(@PathVariable("uuid") String uuid) {
        logger.info("Delete request received for: " + uuid);
        this.cartBusinessService.delete(uuid);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
