package com.henning.donkey.business.transformer;

import com.henning.donkey.business.responseEnties.CategoryDto;
import com.henning.donkey.domain.category.CategoryEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CategoryTransformerService {

    public List<CategoryDto> toCategories(List<CategoryEntity> categoryEntities) {
        List<CategoryDto> categoryDtos = new ArrayList<>();
        categoryEntities.stream().forEach(ce -> {
            CategoryDto categoryDto = toCategoryDto(ce);
            categoryDtos.add(categoryDto);
        });
        return categoryDtos;
    }

    private CategoryDto toCategoryDto(CategoryEntity ce) {
        String categoryName = ce.getCategoryName();
        String categoryUuid = ce.getCategoryUuid();
        return new CategoryDto(categoryUuid, categoryName);
    }
}
