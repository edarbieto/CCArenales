package com.ccarenales.server.controller;

import com.ccarenales.server.model.PedidoProducto;
import com.ccarenales.server.service.PedidoProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/pedidoproducto")
public class PedidoProductoController {
    @Autowired
    private PedidoProductoService pedidoProductoService;
    @GetMapping("/")
    public List<PedidoProducto> buscarPedidoProductos(){
        return pedidoProductoService.buscarTodos();
    }
    @GetMapping("/{id}")
    public ResponseEntity buscarPedidoProducto(@PathVariable("id") long id){
        PedidoProducto pedidoProducto = pedidoProductoService.buscar(id);
        if (pedidoProducto == null){
            return new ResponseEntity("El pedidoProducto no se encontro para el id " + id, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity(pedidoProducto, HttpStatus.OK);
    }
    @PostMapping(value = "/")
    public ResponseEntity<?> nuevaPedidoProducto(@RequestBody PedidoProducto pedidoProducto){
        return new ResponseEntity<>(pedidoProductoService.crear(pedidoProducto), HttpStatus.OK);
    }
    @PutMapping("/{id}")
    public ResponseEntity<?> actualizarPedidoProducto(@PathVariable long id, @RequestBody PedidoProducto pedidoProducto){
        PedidoProducto pedidoProductoTemp = pedidoProductoService.buscar(id);
        pedidoProductoTemp.setCantidad(pedidoProducto.getCantidad());
        return new ResponseEntity<>(pedidoProductoService.actualizar(pedidoProducto), HttpStatus.OK);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<?> eliminarPedidoProducto(@PathVariable long id){
        pedidoProductoService.eliminar(id);
        return new ResponseEntity<>(new PedidoProducto(), HttpStatus.OK);
    }
}
