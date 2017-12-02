package com.ccarenales.server.controller;

import com.ccarenales.server.model.Tienda;
import com.ccarenales.server.service.TiendaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tienda")
@CrossOrigin(origins = "http://localhost:4200")
public class TiendaController {
    @Autowired
    private TiendaService tiendaService;
    @GetMapping("/")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<Tienda> buscarTiendas(){
        return tiendaService.buscarTodos();
    }
    @GetMapping("/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity buscarTienda(@PathVariable("id") long id){
        Tienda tienda = tiendaService.buscar(id);
        if (tienda == null){
            return new ResponseEntity("La tienda no se encontro para el id " + id, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity(tienda, HttpStatus.OK);
    }
    @PostMapping(value = "/")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<?> nuevaTienda(@RequestBody Tienda tienda){
        return new ResponseEntity<>(tiendaService.crear(tienda), HttpStatus.OK);
    }
    @PutMapping("/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<?> actualizarTienda(@PathVariable long id, @RequestBody Tienda tienda){
        Tienda tiendaTemp = tiendaService.buscar(id);
        tiendaTemp.setNombre(tienda.getNombre());
        tiendaTemp.setDescripcion(tienda.getDescripcion());
        tiendaTemp.setnEstrellas(tienda.getnEstrellas());
        tiendaTemp.setPicUri(tienda.getPicUri());
        return new ResponseEntity<>(tiendaService.actualizar(tienda), HttpStatus.OK);
    }
    @DeleteMapping("/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<?> eliminarTienda(@PathVariable long id){
        tiendaService.eliminar(id);
        return new ResponseEntity<>(new Tienda(), HttpStatus.OK);
    }
}
