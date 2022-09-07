package com.revature.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.revature.model.Photo;
import com.revature.service.AWSS3Service;
import com.revature.service.PhotoService;

@RestController
@RequestMapping("/photo")
@CrossOrigin(origins = "http://localhost:3000", allowCredentials="true")
public class PhotoController {
	
	@Autowired
	private PhotoService photoService;
	
	@Autowired
	private AWSS3Service awsS3Service;
	
	
	@GetMapping(path="/{tag}")
	public List<Photo> logOut(@PathVariable String tag) {
		return this.photoService.findAllPhotosByTag(tag);
	}
	
	@PostMapping("/upload")
	public ResponseEntity<Map<String, String>> uploadFile(@RequestParam MultipartFile file, String description, String tag,HttpServletRequest request) {
		System.out.println(description);
		System.out.println(tag);
		String publicURL = awsS3Service.uploadFile(file,description,tag, request);
		Map<String, String> response = new HashMap<>();
		response.put("publicURL", publicURL);
		return new ResponseEntity<Map<String, String>>(response, HttpStatus.CREATED);
	}
}
