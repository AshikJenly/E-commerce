package com.ecommerce.manage.main.dao;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.ecommerce.manage.main.Model.Customer;

@CrossOrigin("*")
@RepositoryRestResource(collectionResourceRel = "customer",path = "customers")
public interface CustomerRepository extends JpaRepository<Customer, Long> {
    Customer findByEmail(@Param("email") String email);
    Customer findByEmailAndPassword(@Param("email") String email, @Param("password") String password);
    
}
