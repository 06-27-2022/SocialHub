package com.revature.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.model.Account;

public interface AccountRepository extends JpaRepository<Account, Integer> {
	//for login
	Account findByEmailAndPassword(String email, String password);
	//for registeration
	Account findByEmail(String email);
}
