package com.ccarenales.server.controller;

import com.ccarenales.server.model.Historia;
import com.ccarenales.server.service.HistoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/historia")
@CrossOrigin(origins = "http://localhost:4200")
public class HistoriaController {
    @Autowired
    private HistoriaService historiaService;
    @GetMapping("/")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<Historia> buscarHistorias(){
        return historiaService.buscarTodos();
    }
    @GetMapping("/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity buscarHistoria(@PathVariable("id") long id){
        Historia historia = historiaService.buscar(id);
        if (historia == null){
            return new ResponseEntity("La historia no se encontro para el id " + id, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity(historia, HttpStatus.OK);
    }
    @PostMapping(value = "/")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<?> nuevaHistoria(@RequestBody Historia historia){
        return new ResponseEntity<>(historiaService.crear(historia), HttpStatus.OK);
    }
    @PutMapping("/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<?> actualizarHistoria(@PathVariable long id, @RequestBody Historia historia){
        Historia historiaTemp = historiaService.buscar(id);
        historiaTemp.setTitulo(historia.getTitulo());
        historiaTemp.setHistoria(historia.getHistoria());
        historiaTemp.setPicUri(historia.getPicUri());
        return new ResponseEntity<>(historiaService.actualizar(historia), HttpStatus.OK);
    }
    @DeleteMapping("/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<?> eliminarHistoria(@PathVariable long id){
        historiaService.eliminar(id);
        return new ResponseEntity<>(new Historia(), HttpStatus.OK);
    }
}
