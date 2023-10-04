package com.ecommerce.manage.main.Model;
import jakarta.persistence.*;
import lombok.Data;


@Entity
@Table(name = "in_cart")
@Data
public class InCart {

    @Id
    @Column(name="cid")
    private Long cid;

    @Column(name="pid")
    private Long pid;


    @Column(name="count")
    private Long count;
}
