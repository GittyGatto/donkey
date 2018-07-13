package com.henning.donkey.controllers;

import com.henning.donkey.business.CategoryBusinessService;
import com.henning.donkey.business.responseEnties.CategoryDto;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CategoryResource {

    private static Logger logger = LoggerFactory.getLogger(CategoryResource.class);

    @Autowired
    CategoryBusinessService categoryBusinessService;

    @RequestMapping(value = "/api/categories/", method = RequestMethod.GET)
    public
    @ResponseBody
    ResponseEntity<List<CategoryDto>> getCategories() {
        logger.info("Categories requested.");
        List<CategoryDto> categoryDtos = this.categoryBusinessService.getCategories();
        return new ResponseEntity<>(categoryDtos, HttpStatus.OK);
    }
}
