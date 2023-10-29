package com.ecommerce.manage.main.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.manage.main.Model.Product;
import com.ecommerce.manage.main.dao.InCartRepository;
import com.ecommerce.manage.main.dao.ProductRepository;

@CrossOrigin("*")
@RestController
@RequestMapping("/cartcontroller") 
public class PurchasedCartController {
        @Autowired   
        private InCartRepository inCartRepository;
        @Autowired
        private ProductRepository productRepo;

      @GetMapping("/purchaseduser")
      public ResponseEntity<String> purchaseProduct(@RequestParam Long cid)
      {
        System.out.println(cid);
        try {
            List<Product> products = inCartRepository.getcarts(cid);
            if (products.isEmpty()) 
            {  
                return new ResponseEntity<>("No products found for the given cid.", HttpStatus.NOT_FOUND);
            }
             else 
             {
                for (Product product : products) {
                    Integer user_need_count = inCartRepository.getProductCountForUser(cid, product.getSku());
                    Long available_count = productRepo.findUnitsInStockBysku(product.getSku());

                    if(available_count >= user_need_count && available_count>0)
                    {
                        Long newvalue = available_count - user_need_count;
                        System.out.println(newvalue);
                        productRepo.updateUnitsInStockBySku(product.getSku(),newvalue);
                        inCartRepository.deleteByCid(cid);   
                    }
                    else{
                    Long newvalue = available_count - user_need_count;
                    System.out.println("Required = " + newvalue);
                     return new ResponseEntity<>("Product "+product.getName()+" is out of Stock", HttpStatus.OK);
                    }
                }
            System.out.println("--------------");

                return new ResponseEntity<>("success", HttpStatus.OK);
            }
        } catch (Exception e) {
            // Handle any exceptions here, and return an appropriate response
            return new ResponseEntity<>("An error occurred: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
      }


