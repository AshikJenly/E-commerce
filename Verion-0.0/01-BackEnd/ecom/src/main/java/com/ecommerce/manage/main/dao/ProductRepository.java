package com.ecommerce.manage.main.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.ecommerce.manage.main.Model.Product;

@CrossOrigin("http://localhost:4201")
public interface ProductRepository extends JpaRepository<Product, Long> {

}
