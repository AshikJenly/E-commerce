package com.ecommerce.manage.main.Controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.ecommerce.manage.main.dao.InCartRepository;


@CrossOrigin("*")
@RestController
@RequestMapping("/cartcontroller") // Specify the base URL path for this controller
public class RemoveCartController {

    private InCartRepository inCartRepository;

    public RemoveCartController(InCartRepository inCartRepository) {
        this.inCartRepository = inCartRepository;
    }

    // Define the URL path, including path variables
    @PostMapping("/deleteFromCartItem")
    public void deleteCartItem(@RequestParam Long cid, @RequestParam String sku) {
        // Use the repository to delete the item based on cid and sku
        inCartRepository.deleteByCidAndSku(cid, sku);
        // System.out.println(""+inCartRepository.getcartallforcontroller(cid).get(0));
    }
  @PostMapping("/deleteFromCartItemwithlimit")
    public void deleteCartItemlimit(@RequestParam Long cid, @RequestParam String sku) {
        

        inCartRepository.deleteByCidAndSkuWithLimit(cid, sku);

    }
     @GetMapping("/cart/totalCost")
    public ResponseEntity<Double> getTotalCostForUser(@RequestParam Long cid) {
        Double totalCost = inCartRepository.getTotalCostForUser(cid);
        if (totalCost != null) {
            return ResponseEntity.ok(totalCost);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Get the count of a single product for a given user and product SKU
    @GetMapping("/cart/productCount")
    public ResponseEntity<Integer> getProductCountForUser(@RequestParam Long cid, @RequestParam String sku) {
        Integer productCount = inCartRepository.getProductCountForUser(cid, sku);
        if (productCount != null) {
            return ResponseEntity.ok(productCount);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}