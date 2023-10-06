package com.ecommerce.manage.main.Model;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;


@Entity
@Table(name = "customer")
@Data
@Getter
@Setter
public class Customer {
    @Id
    @Column(name="cid")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cid;

    @Column(name = "firstname")
    private String firstname;

    @Column(name = "lastname")
    private String lastname;

    @Column(name = "email",unique = true)
    private String email;
    
    @Column(name = "password")
    private String password;

    @Column(name="is_seller",columnDefinition = "boolean default false")
    private boolean is_seller;

    public boolean isIs_seller() {
        return is_seller;
    }

    public void setIs_seller(boolean is_seller) {
        this.is_seller = is_seller;
    }

    

}