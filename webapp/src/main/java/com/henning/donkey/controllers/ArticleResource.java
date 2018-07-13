package com.henning.donkey.controllers;


import com.henning.donkey.business.ArticleBusinessService;
import com.henning.donkey.business.responseEnties.ArticleDto;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ArticleResource {

    private static Logger logger = LoggerFactory.getLogger(ArticleResource.class);

    @Autowired
    private ArticleBusinessService articleBusinessService;

    @RequestMapping(value = "/api/articles/", method = RequestMethod.GET)
    public
    @ResponseBody
    ResponseEntity<List<ArticleDto>> getArticles() {
        logger.info("Articles requested");
        List<ArticleDto> articleDtoList = this.articleBusinessService.getArticles();
        return new ResponseEntity<>(articleDtoList, HttpStatus.OK);
    }

    @RequestMapping(value = "/api/articles", method = RequestMethod.POST)
    public
    @ResponseBody
    ResponseEntity<ArticleDto> saveArticle(@RequestBody ArticleDto request) {
        logger.info("New Article received " + request.getArticleName());
        ArticleDto articleDto = this.articleBusinessService.saveArticle(request);
        return new ResponseEntity<>(articleDto, HttpStatus.OK);
    }

}
