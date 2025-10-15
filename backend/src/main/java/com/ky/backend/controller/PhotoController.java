package com.ky.backend.controller;

import com.ky.backend.model.Photo;
import com.ky.backend.repository.PhotoRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class PhotoController {

    private final PhotoRepository photoRepository;

    public PhotoController(PhotoRepository photoRepository) {
        this.photoRepository = photoRepository;
    }

    @GetMapping("/photos")
    public List<Photo> getPhotos() {
        return photoRepository.findAll();
    }
}
