package com.henning.donkey.domain.article;

import com.henning.donkey.domain.category.CategoryEntity;

import javax.persistence.*;

@Entity
@Table(name = "article")
public class ArticleEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "article_id")
    private long articleId;

    @Column
    private String articleUuid;

    @Column(name = "articleName")
    private String articleName;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "category_id")
    private CategoryEntity category;

    public String getArticleUuid() {
        return articleUuid;
    }

    public void setArticleUuid(String articleUuid) {
        this.articleUuid = articleUuid;
    }

    public long getArticleId() {
        return articleId;
    }

    public String getArticleName() {
        return articleName;
    }

    public void setArticleName(String articleName) {
        this.articleName = articleName;
    }

    public CategoryEntity getCategory() {
        return category;
    }

    public void setCategory(CategoryEntity category) {
        this.category = category;
    }
}