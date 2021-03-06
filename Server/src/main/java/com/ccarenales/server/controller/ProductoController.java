package com.ccarenales.server.controller;

import com.ccarenales.server.model.Producto;
import com.ccarenales.server.service.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/producto")
@CrossOrigin(origins = "http://localhost:4200")
public class ProductoController {
    @Autowired
    private ProductoService productoService;
    @GetMapping("/")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<Producto> buscarProductos(){
        return productoService.buscarTodos();
    }
    @GetMapping("/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity buscarProducto(@PathVariable("id") long id){
        Producto producto = productoService.buscar(id);
        if (producto == null){
            return new ResponseEntity("El producto no se encontro para el id " + id, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity(producto, HttpStatus.OK);
    }
    @PostMapping(value = "/")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<?> nuevaProducto(@RequestBody Producto producto){
        return new ResponseEntity<>(productoService.crear(producto), HttpStatus.OK);
    }
    @PutMapping("/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<?> actualizarProducto(@PathVariable long id, @RequestBody Producto producto){
        Producto productoTemp = productoService.buscar(id);
        productoTemp.setNombre(producto.getNombre());
        productoTemp.setDescripcion(producto.getDescripcion());
        productoTemp.setPrecio(producto.getPrecio());
        productoTemp.setPicUri(producto.getPicUri());
        return new ResponseEntity<>(productoService.actualizar(producto), HttpStatus.OK);
    }
    @DeleteMapping("/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<?> eliminarProducto(@PathVariable long id){
        productoService.eliminar(id);
        return new ResponseEntity<>(new Producto(), HttpStatus.OK);
    }
}
