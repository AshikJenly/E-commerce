
package com.ecommerce.manage.main.dao;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.ecommerce.manage.main.Model.InCart;
import com.ecommerce.manage.main.Model.Product;

import jakarta.transaction.Transactional;


@CrossOrigin("*")
@RepositoryRestResource(collectionResourceRel = "cart",path = "carts")
public interface InCartRepository extends JpaRepository<InCart,Long> {

    @Query("SELECT p FROM Product p WHERE p.sku IN (SELECT ic.sku FROM InCart ic WHERE ic.cid = :cid)")
    List<Product> getcarts(@Param("cid") Long cid);
  
    @Query("SELECT p FROM Product p JOIN InCart ic ON p.sku = ic.sku WHERE ic.cid = :cid")
    List<Product> getcartall(@Param("cid") Long cid);
   
    @Transactional
    void deleteByCidAndSku(Long cid, String sku);
    
    @Query("SELECT SUM(p.unitPrice * ic.count) FROM Product p JOIN InCart ic ON p.sku = ic.sku WHERE ic.cid = :cid")
    Double getTotalCostForUser(@Param("cid") Long cid);
    
    @Query("SELECT COUNT(ic) FROM InCart ic WHERE ic.sku = :sku AND ic.cid = :cid")
    Integer getProductCountForUser(@Param("cid") Long cid, @Param("sku") String sku);

     @Transactional
    @Modifying
    @Query(value = "DELETE FROM in_cart WHERE cid = :cid AND sku = :sku LIMIT 1", nativeQuery = true)
    void deleteByCidAndSkuWithLimit(@Param("cid") Long cid, @Param("sku") String sku);
}
