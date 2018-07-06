package com.henning.donkey.business.transformer;

import com.henning.donkey.business.responseEnties.ArticleDto;
import com.henning.donkey.domain.article.ArticleEntity;
import com.henning.donkey.domain.article.ArticleRepository;
import com.henning.donkey.domain.category.CategoryEntity;
import com.henning.donkey.domain.category.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ArticleTransformerService {

    @Autowired
    private ArticleRepository articleRepository;

    @Autowired
    private CategoryRepository categoryRepository;

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

    public ArticleEntity toArticleEntity(ArticleDto articleDto) {
        ArticleEntity articleEntity = articleRepository.findByArticleUuid(articleDto.getArticleUuid()).orElseGet(ArticleEntity::new);
        CategoryEntity categoryEntity = categoryRepository.findByCategoryName(articleDto.getCategoryName());
        articleEntity.setArticleName(articleDto.getArticleName());
        articleEntity.setArticleUuid(articleDto.getArticleUuid());
        articleEntity.setCategory(categoryEntity);
        return articleEntity;
    }

    public ArticleDto toArticleDto(ArticleEntity storedArticleEntity) {
        return getArticleDto(storedArticleEntity);
    }
}
