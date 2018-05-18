package com.henning.donkey.controllers;

import com.henning.donkey.business.DeleteCartBusinessService;
import com.henning.donkey.business.GetCartBusinessService;
import com.henning.donkey.business.SaveCartBusinessService;
import com.henning.donkey.business.responseEnties.CartDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CartResource {

    @Autowired
    private DeleteCartBusinessService deleteCartBusinessService;

    @Autowired
    private GetCartBusinessService getCartBusinessService;

    @Autowired
    private SaveCartBusinessService saveCartBusinessService;

    @RequestMapping(value = "/api/carts", method = RequestMethod.POST)
    public
    @ResponseBody
    ResponseEntity<CartDto> saveCart(@RequestBody CartDto request) {
        CartDto cartDto = this.saveCartBusinessService.saveNewCart(request);
        return new ResponseEntity<>(cartDto, HttpStatus.OK);
    }

    @RequestMapping(value = "/api/carts", method = RequestMethod.GET)
    public
    @ResponseBody
    ResponseEntity<List<CartDto>> getCarts() {
        List<CartDto> carts = this.getCartBusinessService.getCartDto();
        return new ResponseEntity<>(carts, HttpStatus.OK);
    }

   /* @RequestMapping(value = "/api/carts/{cartName}", method = RequestMethod.DELETE)
    public
    @ResponseBody
    ResponseEntity<?> deleteCart(@PathVariable("cartName") String cartName) {
        this.deleteCartBusinessService.delete(cartName);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    */


/*    @RequestMapping(value = "/api/carts/", method = RequestMethod.POST)
    public
    @ResponseBody
    ResponseEntity<CartDto> saveNewCart(@RequestBody String cartName)
    */

    /*
    @RequestMapping(value = "/api/carts/{cartName}", method = RequestMethod.GET)
    public
    @ResponseBody
    ResponseEntity<CartDto> getCart(@PathVariable("cartName") String cartName) {
        CartDto cart = this.getCartBusinessService.getCartDto(cartName);
        if (cart == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(cart, HttpStatus.OK);
    }

    @RequestMapping(value = "/api/carts", method = RequestMethod.POST)
    public
    @ResponseBody
    ResponseEntity<CartDto> saveCart(@RequestBody CartDto request) {
        CartDto cart = this.saveCartBusinessService.save(request);
        return new ResponseEntity<>(cart, HttpStatus.OK);
    }
    */
}
