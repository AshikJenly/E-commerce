package com.ecommerce.manage.main.Model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name="product_category")
@Data
@Getter
@Setter
public class ProductCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @OneToMany(mappedBy = "category")
    private List<Product> products;

    @Override
    public String toString() {
        return "ProductCategory [id=" + id + ", name=" + name + ", products=" + products + "]";
    }

}

