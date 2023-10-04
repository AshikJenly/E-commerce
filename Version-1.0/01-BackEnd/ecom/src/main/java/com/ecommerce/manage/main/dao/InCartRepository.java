
package com.ecommerce.manage.main.dao;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.ecommerce.manage.main.Model.InCart;
import com.ecommerce.manage.main.Model.Product;


@CrossOrigin("*")
@RepositoryRestResource(collectionResourceRel = "cart",path = "carts")
public interface InCartRepository extends JpaRepository<InCart,Long> {

    @Query("SELECT p FROM Product p WHERE p.id IN (SELECT ic.pid FROM InCart ic WHERE ic.cid = :cid)")
    List<Product> getcarts(@Param("cid") Long cid);


}
