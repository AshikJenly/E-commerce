package com.ecommerce.manage.main.Controller;

import java.util.List;
import org.springframework.web.bind.annotation.*;

import com.ecommerce.manage.main.dao.InCartRepository;
import com.ecommerce.manage.main.Model.Product;
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
        // return inCartRepository.getcarts(cid);
    }
}
