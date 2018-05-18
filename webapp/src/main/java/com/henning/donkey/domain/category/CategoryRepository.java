package com.henning.donkey.domain.category;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<CategoryEntity, Long> {

    CategoryEntity findByCategoryName(String categoryName);
}
