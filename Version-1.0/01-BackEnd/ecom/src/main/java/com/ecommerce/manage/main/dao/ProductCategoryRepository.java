package com.ecommerce.manage.main.dao;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.ecommerce.manage.main.Model.ProductCategory;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;



@CrossOrigin("*")
@RepositoryRestResource(collectionResourceRel = "productCategory",path = "product-category")
public interface ProductCategoryRepository extends JpaRepository<ProductCategory, Long> {
    Page<ProductCategory> findByid(@Param("id") Long id,Pageable pageable);

}
