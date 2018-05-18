package com.henning.donkey.controllers;

import com.henning.donkey.business.ArticleBusinessService;
import com.henning.donkey.business.CategoryBusinessService;
import com.henning.donkey.business.responseEnties.ArticleDto;
import com.henning.donkey.business.responseEnties.CategoryDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CategoryResource {

    @Autowired
    CategoryBusinessService categoryBusinessService;

    @Autowired
    ArticleBusinessService articleBusinessService;

    @RequestMapping(value = "/api/categories/", method = RequestMethod.GET)
    public
    @ResponseBody
    ResponseEntity<List<CategoryDto>> getCategories() {
        List<CategoryDto> categoryDtos = this.categoryBusinessService.getCategories();
        return new ResponseEntity<>(categoryDtos, HttpStatus.OK);
    }

    @RequestMapping(value = "/api/categories/{categoryName}", method = RequestMethod.GET)
    public
    @ResponseBody
    ResponseEntity<List<ArticleDto>> getCategoryArticles(@PathVariable("categoryName") String categoryName) {
        List<ArticleDto> articleDtos = this.articleBusinessService.getCategoryArticles(categoryName);
        return new ResponseEntity<>(articleDtos, HttpStatus.OK);
    }
}
