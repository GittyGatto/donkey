package com.henning.donkey.domain.article;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

public interface ArticleRepository extends JpaRepository<ArticleEntity, Long> {

    @Transactional
    Optional<ArticleEntity> findByArticleUuid(String cartArticleUuid);

    ArticleEntity findByArticleName(String articleName);
}
