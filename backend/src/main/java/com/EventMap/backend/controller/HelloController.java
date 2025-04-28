package com.EventMap.backend.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.EventMap.backend.beans.HelloBean;
import com.EventMap.backend.entity.AccountDetails;
import com.EventMap.backend.repo.AccountRepository;

@CrossOrigin(origins="http://localhost:4200/")
@RestController
public class HelloController {
	
	@Autowired
	AccountRepository accrepo;
	
	@GetMapping("/hello")
	public Object sayHello()
	{
		return new HelloBean("hello world");
	}

    @PostMapping("/register")
    public AccountDetails registerAccount(@RequestBody AccountDetails accountDetails) {
        return accrepo.save(accountDetails);
    }
    
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody AccountDetails loginRequest) {
        String username = loginRequest.getUserName();
        String password = loginRequest.getPassword();

        Optional<AccountDetails> user = accrepo.findById(username);
        		
        if (user.isPresent() && user.get().getPassword().equals(password)) {
            return ResponseEntity.ok("Login successful!");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }

}
