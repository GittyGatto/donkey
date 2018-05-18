package com.henning.donkey.business;

import com.henning.donkey.business.responseEnties.ArticleDto;
import com.henning.donkey.business.responseEnties.CartArticleDto;
import com.henning.donkey.domain.article.ArticleEntity;
import com.henning.donkey.domain.article.ArticleRepository;
import com.henning.donkey.domain.cart.CartEntity;
import com.henning.donkey.domain.cart.CartRepository;
import com.henning.donkey.domain.cartArticle.CartArticleEntity;
import com.henning.donkey.domain.cartArticle.CartArticleRepository;
import com.henning.donkey.domain.category.CategoryEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ArticleBusinessService {

    @Autowired
    private CartArticleRepository cartArticleRepository;

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private ArticleRepository articleRepository;

    @Autowired
    private CategoryBusinessService categoryBusinessService;

    /*
    public List<CartArticleDto> getCartArticles(String cartName) {
        CartEntity cartEntity = this.cartRepository.findByCartName(cartName);
        List<CartArticleEntity> cartArticleEntities = this.cartArticleRepository.findByCart(cartEntity);
        return toCartArticles(cartArticleEntities);
    }
    */

    public List<ArticleDto> getArticles() {
        List<ArticleEntity> articleEntities = this.articleRepository.findAll();
        return toArticles(articleEntities);
    }

    public List<ArticleDto> getCategoryArticles(String categoryName) {
        if (categoryName.equals("All")) {
            return getAllArticles();
        } else {
            return getFilteredCategoryArticles(categoryName);
        }
    }

    private List<ArticleDto> getAllArticles() {
        List<ArticleEntity> articleEntities = articleRepository.findAll();
        return toArticles(articleEntities);
    }

    private List<ArticleDto> getFilteredCategoryArticles(String categoryName) {
        CategoryEntity categoryEntity = this.categoryBusinessService.getCategory(categoryName);
        List<ArticleEntity> articleEntities = articleRepository.findByCategory(categoryEntity);
        return toArticles(articleEntities);
    }

    private List<ArticleDto> toArticles(List<ArticleEntity> articleEntities) {
        List<ArticleDto> articleDtoList = new ArrayList<>();
        articleEntities.stream().forEach(ae -> {

            long articleId = ae.getArticleId();
            String articleName = ae.getArticleName();
            String categoryName = ae.getCategory().getCategoryName();

            ArticleDto articleDto = new ArticleDto(articleId, articleName, categoryName);
            articleDtoList.add(articleDto);
        });
        return articleDtoList;
    }
}
