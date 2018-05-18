package com.henning.donkey.controllers;


import com.henning.donkey.business.ArticleBusinessService;
import com.henning.donkey.business.responseEnties.ArticleDto;
import com.henning.donkey.business.responseEnties.CartArticleDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ArticleResource {

    @Autowired
    private ArticleBusinessService articleBusinessService;

    @RequestMapping(value = "/api/articles/", method = RequestMethod.GET)
    public
    @ResponseBody
    ResponseEntity<List<ArticleDto>> getArticles() {
        List<ArticleDto> articleDtoList = this.articleBusinessService.getArticles();
        return new ResponseEntity<>(articleDtoList, HttpStatus.OK);
    }
}
