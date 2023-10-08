package com.ecommerce.manage.main.Model;
import jakarta.persistence.*;
import lombok.Data;


@Entity
@Table(name = "in_cart")
@Data
public class InCart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name="cid")
    private Long cid;

    @Column(name="sku")
    private String sku;


    @Column(name="count")
    private Long count;
}
