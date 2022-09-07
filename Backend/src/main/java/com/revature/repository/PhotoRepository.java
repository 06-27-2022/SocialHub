package com.revature.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.model.Photo;

@Repository
public interface PhotoRepository extends JpaRepository<Photo, Integer>{
	
	List<Photo> findAllByTagOrderByIdDesc(String tag);

}
