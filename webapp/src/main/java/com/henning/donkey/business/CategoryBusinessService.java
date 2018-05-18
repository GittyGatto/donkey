package com.henning.donkey.business;


import com.henning.donkey.business.responseEnties.CategoryDto;
import com.henning.donkey.domain.category.CategoryEntity;
import com.henning.donkey.domain.category.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CategoryBusinessService {

    @Autowired
    private CategoryRepository categoryRepository;

    public List<CategoryDto> getCategories() {
        List<CategoryEntity> categoryEntities = this.categoryRepository.findAll();
        return toCategories(categoryEntities);
    }

    private List<CategoryDto> toCategories(List<CategoryEntity> categoryEntities) {
        List<CategoryDto> categoryDtos = new ArrayList<>();
        categoryEntities.stream().forEach(ce -> {

            String categoryName = ce.getCategoryName();

            CategoryDto categoryDto = new CategoryDto(categoryName, categoryName);
            categoryDtos.add(categoryDto);
        });
        return categoryDtos;
    }

    public CategoryEntity getCategory(String categoryName) {
        return categoryRepository.findByCategoryName(categoryName);
    }
}
