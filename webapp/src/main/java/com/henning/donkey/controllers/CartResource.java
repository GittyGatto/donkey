package com.henning.donkey.controllers;

import com.henning.donkey.business.CartBusinessService;
import com.henning.donkey.business.responseEnties.CartDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CartResource {

    @Autowired
    private CartBusinessService cartBusinessService;

    @RequestMapping(value = "/api/carts", method = RequestMethod.GET)
    public
    @ResponseBody
    ResponseEntity<List<CartDto>> getCarts() {
        List<CartDto> carts = this.cartBusinessService.getCartDtos();
        return new ResponseEntity<>(carts, HttpStatus.OK);
    }

    @RequestMapping(value = "/api/carts", method = RequestMethod.POST)
    public
    @ResponseBody
    ResponseEntity<CartDto> saveCart(@RequestBody CartDto request) {
        CartDto cartDto = this.cartBusinessService.saveCart(request);
        return new ResponseEntity<>(cartDto, HttpStatus.OK);
    }

    @RequestMapping(value = "/api/carts/{uuid}", method = RequestMethod.DELETE)
    public
    @ResponseBody
    ResponseEntity<?> deleteCart(@PathVariable("uuid") String uuid) {
        this.cartBusinessService.delete(uuid);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
