package com.revature.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.model.Photo;
import com.revature.service.PhotoService;

@RestController
@RequestMapping("/photo")
@CrossOrigin(origins = "http://localhost:3000", allowCredentials="true")
public class PhotoController {
	
	@Autowired
	private PhotoService photoService;
	
	@GetMapping(path="/{tag}")
	public List<Photo> logOut(@PathVariable String tag) {
		return this.photoService.findAllPhotosByTag(tag);
	}
}
