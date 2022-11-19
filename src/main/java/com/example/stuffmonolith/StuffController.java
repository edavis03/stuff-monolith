package com.example.stuffmonolith;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static org.springframework.http.HttpStatus.OK;

@RestController
public class StuffController {

    @GetMapping("/stuff")
    public ResponseEntity<List<Item>> getStuff() {
        var stuff = List.of(
                new Item(1L, "lamp"),
                new Item(2L, "sweatshirt"),
                new Item(3L, "kakapo")
        );
        return new ResponseEntity(stuff, OK);
    }
}

