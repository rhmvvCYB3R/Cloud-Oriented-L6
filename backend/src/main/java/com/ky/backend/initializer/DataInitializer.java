package com.ky.backend.initializer;

import com.ky.backend.model.Photo;
import com.ky.backend.repository.PhotoRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataInitializer implements CommandLineRunner {

    private final PhotoRepository photoRepository;

    public DataInitializer(PhotoRepository photoRepository) {
        this.photoRepository = photoRepository;
    }

    @Override
    public void run(String... args) {
        if (photoRepository.count() == 0) {
            photoRepository.save(new Photo(null, "https://feb17d08.delivery.rocketcdn.me/wp-content/uploads/2023/08/Bigstock_-139961875-Docker-Emblem.-A-Blue-Whale-With-Several-Containers.-e1574090673987-1.jpg"));
            photoRepository.save(new Photo(null, "https://cs13.pikabu.ru/post_img/2023/07/09/10/1688919144178579044.jpg"));
            photoRepository.save(new Photo(null, "https://cs12.pikabu.ru/post_img/big/2021/01/26/7/1611655941249786062.png"));
        }
    }
}
