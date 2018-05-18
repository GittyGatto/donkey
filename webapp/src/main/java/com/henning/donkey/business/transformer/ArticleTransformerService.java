package com.henning.donkey.business.transformer;

import com.henning.donkey.business.responseEnties.ArticleDto;
import com.henning.donkey.domain.article.ArticleEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ArticleTransformerService {

    public List<ArticleDto> toArticles(List<ArticleEntity> articleEntities) {
        List<ArticleDto> articleDtoList = new ArrayList<>();
        articleEntities.stream().forEach(ae -> {

            ArticleDto articleDto = getArticleDto(ae);
            articleDtoList.add(articleDto);
        });
        return articleDtoList;
    }

    private ArticleDto getArticleDto(ArticleEntity ae) {
        String uuid = ae.getArticleUuid();
        String name = ae.getArticleName();
        String categoryName = ae.getCategory().getCategoryName();

        return new ArticleDto(uuid, name, categoryName);
    }

}
