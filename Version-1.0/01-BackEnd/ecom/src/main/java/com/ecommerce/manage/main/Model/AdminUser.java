package com.ecommerce.manage.main.Model;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;


@Entity
@Table(name = "adminuser")
@Data
@Getter
@Setter
public class AdminUser {
    @Id
    @Column(name="aid")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long aid;

    @Column(name = "firstname")
    private String firstname;

    @Column(name = "lastname")
    private String lastname;

    @Column(name = "email",unique = true)
    private String email;
    
    @Column(name = "password")
    private String password;

    
     @Column(name = "shopname")
    private String shopname;

     @Column(name = "pannumber")
    private String pannumber;

     @Column(name = "aadhar")
    private String aadhar;

    

}