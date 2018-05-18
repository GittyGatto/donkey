package com.henning.donkey.business;


import com.henning.donkey.business.responseEnties.CategoryDto;
import com.henning.donkey.business.transformer.CategoryTransformerService;
import com.henning.donkey.domain.category.CategoryEntity;
import com.henning.donkey.domain.category.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryBusinessService {

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private CategoryTransformerService categoryTransformerService;

    public List<CategoryDto> getCategories() {
        List<CategoryEntity> categoryEntities = this.categoryRepository.findAll();
        return categoryTransformerService.toCategories(categoryEntities);
    }
}
