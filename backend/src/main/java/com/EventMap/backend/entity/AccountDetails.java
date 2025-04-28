package com.EventMap.backend.entity;

import jakarta.persistence.*;

@Entity
public class AccountDetails {
	
	
	@Id
	@Column(name = "username")
	private String UserName;
	
	@Column(name="password")
	private String Password;
	
	@Column(name="email")
	private String Email;


	public String getUserName() {
		return UserName;
	}

	public void setUserName(String userName) {
		UserName = userName;
	}

	public String getPassword() {
		return Password;
	}

	public void setPassword(String password) {
		Password = password;
	}

	public String getEmail() {
		return Email;
	}

	public void setEmail(String email) {
		Email = email;
	}

	@Override
	public String toString() {
		return "AccountDetails [UserName=" + UserName + ", Password=" + Password + ", Email=" + Email
				+ "]";
	}

	
}
