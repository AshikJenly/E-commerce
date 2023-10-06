package com.ecommerce.manage.main.dao;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.ecommerce.manage.main.Model.Product;

@CrossOrigin("*")
@RepositoryRestResource(collectionResourceRel = "product",path = "products")
public interface ProductRepository extends JpaRepository<Product, Long> {
    Page<Product> findBysku(@Param("sku") String sku,Pageable pageable);
    Page<Product> findByCategoryId(@Param("id") Long id,Pageable pageable);
    Page<Product> findByNameContaining(@Param("name") String name,Pageable pageable);

}