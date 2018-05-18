package com.henning.donkey.business;

import com.henning.donkey.business.responseEnties.ArticleDto;
import com.henning.donkey.business.transformer.ArticleTransformerService;
import com.henning.donkey.domain.article.ArticleEntity;
import com.henning.donkey.domain.article.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArticleBusinessService {

    @Autowired
    private ArticleTransformerService articleTransformerService;

    @Autowired
    private ArticleRepository articleRepository;

    public List<ArticleDto> getArticles() {
        List<ArticleEntity> articleEntities = this.articleRepository.findAll();
        return articleTransformerService.toArticles(articleEntities);
    }
}
