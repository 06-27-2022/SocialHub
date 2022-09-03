package com.revature.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.model.Account;
import com.revature.service.AccountService;

@RestController
@RequestMapping("/account")
public class AccountController {
	@Autowired
	private AccountService accountService;
	
	@GetMapping(path ="/test")
	public String test() {
		System.out.println("test endpoint");
		return "it works test";
	}
	
	@PostMapping("/login")
	public String login(@RequestBody Account account, HttpServletRequest request) {
		return this.accountService.login(account, request);
	}
	
	@RequestMapping("/logout")
	public String logOut(HttpServletRequest request) {
		return this.accountService.logout(request);
	}
	
	@PostMapping("/register")
	public String register(@RequestBody Account account) {
		return this.accountService.register(account);
	}
}