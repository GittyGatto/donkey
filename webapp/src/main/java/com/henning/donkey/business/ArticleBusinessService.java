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
    private CartArticleBusinessService cartArticleBusinessService;

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private ArticleRepository articleRepository;

    @Autowired
    private CategoryBusinessService categoryBusinessService;

    public List<CartArticleDto> getCartArticles(String cartName) {
        CartEntity cartEntity = this.cartRepository.findByCartName(cartName);
        List<CartArticleEntity> cartArticleEntities = this.cartArticleRepository.findByCart(cartEntity);
        return toCartArticles(cartArticleEntities);
    }

    public List<ArticleDto> getArticles() {
        List<ArticleEntity> articleEntities = this.articleRepository.findAll();
        return toArticles(articleEntities);
    }

    public List<CartArticleDto> saveCartArticles(List<CartArticleDto> request) {
        List<CartArticleEntity> cartArticleEntities = toCartArticleEntity(request);
        cartArticleBusinessService.saveCartArticles(cartArticleEntities);
        List<CartArticleDto> cartArticleDtos = toCartArticles(cartArticleEntities);
        return cartArticleDtos;
    }

    public List<ArticleDto> getCategoryArticles(String categoryName) {
        if (categoryName.equals("All")) {
            return getAllArticles();
        } else {
            return getFilteredCategoryArticles(categoryName);
        }
    }

    private List<CartArticleEntity> toCartArticleEntity(List<CartArticleDto> request) {
        List<CartArticleEntity> cartArticleEntities = new ArrayList<>();
        request.stream().forEach(r -> {
            long articleId = r.getArticleId();
            long cartId = r.getCartId();
            long amount = r.getAmount();
            String cartArticleUuid = r.getCartArticleUuid();

            ArticleEntity articleEntity = articleRepository.findOne(articleId);
            CartEntity cartArticleEntity = cartRepository.findOne(cartId);

            CartArticleEntity cartArticle = new CartArticleEntity(cartArticleUuid, cartArticleEntity, articleEntity, amount);
            cartArticleEntities.add(cartArticle);
        });

        return cartArticleEntities;
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

    private List<CartArticleDto> toCartArticles(List<CartArticleEntity> cartArticleEntities) {
        List<CartArticleDto> cartArticleDtos = new ArrayList<>();
        cartArticleEntities.stream().forEach(ca -> {

            long articleId = ca.getArticle().getArticleId();
            String articleName = ca.getArticle().getArticleName();
            String categoryName = ca.getArticle().getCategory().getCategoryName();
            long amount = ca.getAmount();
            long cartId = ca.getCart().getCartId();
            String cartUuid = ca.getCartArticleUuid();

            CartArticleDto cartArticleDto = new CartArticleDto(articleId, cartUuid, articleName, categoryName, amount, cartId);
            cartArticleDtos.add(cartArticleDto);
        });
        return cartArticleDtos;
    }

}
