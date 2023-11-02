package com.ecommerce.manage.main.Controller;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.manage.main.Model.Product;
import com.ecommerce.manage.main.Model.ProductCategory;
import com.ecommerce.manage.main.dao.ProductCategoryRepository;
import com.ecommerce.manage.main.dao.ProductRepository;

@CrossOrigin("*")
@RestController
@RequestMapping("/productcontroller") 
public class ProductController {

    @Autowired
    private ProductRepository productRepo;

    @Autowired
    private ProductCategoryRepository productCategoryRepo;

    @GetMapping("/getcategorynames")
    public List<String> getcategorynames()
    {
          return productCategoryRepo.getAllCategoryName();
    }

  

    @PostMapping("/postproduct")
    public String addNewProduct(@RequestBody Product product) {

        Long lastId = productRepo.findLastProductId() + 1;
        String sku = "SKU" + lastId ;
        System.out.println(sku);
        String categoryName = product.getCategory().getName();

        ProductCategory productCategory = productCategoryRepo.findByName(categoryName);

          //Product Category Logic
        if (productCategoryRepo.existsByName(categoryName)) {
          System.out.println("catgory found : ");
            product.setCategory(productCategory);
        } else {
             productCategory = new ProductCategory();
             productCategory.setName(categoryName);
            System.out.println("Category not found: " + categoryName);
            productCategoryRepo.save(productCategory);
            product.setCategory(productCategory);
        }

          //Product Logic
        if (productRepo.existsByName(product.getName())) {
            // Handle the case where the product already exists
            Product existingProduct = productRepo.findByName(product.getName());
            existingProduct.setUnitPrice(product.getUnitPrice());
            existingProduct.setUnitsInStock(product.getUnitsInStock());
            existingProduct.setImageUrl(product.getImageUrl());

            System.out.println("Existing product: " + existingProduct);
            productRepo.save(existingProduct);
            return "Product Updated Successfully";
          } else {
            // Save the new product to the database
            product.setSku(sku);
            System.out.println("New product: " + product);
            productRepo.save(product);
            return "Product Added Successfully";

        }
    }
}
