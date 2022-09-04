package com.revature.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.model.Photo;
import com.revature.service.PhotoService;

@RestController
@RequestMapping("/photo")
public class PhotoController {
	
	@Autowired
	private PhotoService photoService;
	
	@PostMapping(path="/{tag}")
	public List<Photo> logOut(@PathVariable String tag) {
		return this.photoService.findAllPhotosByTag(tag);
	}
}
