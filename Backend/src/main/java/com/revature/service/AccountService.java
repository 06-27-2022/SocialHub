package com.revature.service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.model.Account;
import com.revature.repository.AccountRepository;

@Service
public class AccountService {
	
	@Autowired
	private AccountRepository accountRepository;
	
	public String login(Account account, HttpServletRequest request) {
		Account isValidAccount = this.accountRepository.findByEmailAndPassword(account.getEmail(), account.getPassword());
		if(isValidAccount==null) {
			return "Wrong email or password";
		}else {
			HttpSession session = request.getSession();
			session.setAttribute("accountId", isValidAccount.getId());
			return "Logged in successfully";
		}		
	}
	
	public String logout(HttpServletRequest request) {
		HttpSession session = request.getSession(false);
		if(session != null) {
			session.removeAttribute("accountId");
			session.invalidate();
			return "Logged out successfully";
		}
		return "Already Logged out";
	}
	
	public String register(Account account) {
		Account accountSearch = this.accountRepository.findByEmail(account.getEmail());
		if(accountSearch==null) {
			this.accountRepository.save(account);
			return "New account registered";
		}else {
			return "Account with this email already exists";
		}
	}
}
