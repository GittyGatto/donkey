package com.henning.donkey.domain.article;


import com.henning.donkey.domain.category.CategoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface ArticleRepository extends JpaRepository<ArticleEntity, Long> {

    ArticleEntity findByArticleUuid(String cartArticleUuid);

    ArticleEntity findByArticleName(String articleName);
}
