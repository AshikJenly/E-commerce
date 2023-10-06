// package com.ecommerce.manage.main.Controller;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;

// import com.ecommerce.manage.main.Model.Customer;
// import com.ecommerce.manage.main.dao.CustomerRepository;

// @RestController
// @RequestMapping("/api/customers")
// @CrossOrigin("*")
// public class CustomerRestController {
//     private final CustomerRepository customerRepository;

//     @Autowired
//     public CustomerRestController(CustomerRepository customerRepository) {
//         this.customerRepository = customerRepository;
//     }

//     @PostMapping("/register")
//     public ResponseEntity<String> registerCustomer(@RequestBody Customer customerRequest) {
//         try {
//             // Create a Customer entity from the request data
//             Customer customer = new Customer();
//             System.out.println(customerRequest.getFirstname());
//             System.out.println(customer);
//             customer.setFirstname(customerRequest.getFirstname());
//             customer.setLastname(customerRequest.getLastname());
//             customer.setEmail(customerRequest.getEmail());
//             customer.setPassword(customerRequest.getPassword());
//             customer.setIs_seller(customerRequest.isIs_seller());

//             // Save the customer to the database
//             customerRepository.save(customer);

//             return ResponseEntity.ok("Customer registered successfully.");
//         } catch (Exception e) {
//             // Handle any exceptions (e.g., validation errors or database errors)
//             return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Registration failed.");
//         }
//     }
// }
