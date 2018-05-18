package com.henning.donkey.domain.category;

import javax.persistence.*;

@Entity(name = "Category")
@Table(name = "category")
public class CategoryEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "category_id")
    private long categoryId;

    @Column
    private String categoryUuid;

    @Column(name = "category_name")
    private String categoryName;

    public CategoryEntity (){}

    public String getCategoryUuid() {
        return categoryUuid;
    }

    public void setCategoryUuid(String categoryUuid) {
        this.categoryUuid = categoryUuid;
    }

    public CategoryEntity(String categoryName) {
        this.categoryName = categoryName;
    }

    public long getCategoryId() {
        return categoryId;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }
}