package com.revature.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.model.Account;

@Repository
public interface AccountRepository extends JpaRepository<Account, Integer> {
	
	//for login
	Account findByEmailAndPassword(String email, String password);
	
	//for registeration
	Account findByEmail(String email);
	
	//for profile
	Account findById(int id);
	
	//for testing tablesRelationship
	List<Account> findAll();
}
