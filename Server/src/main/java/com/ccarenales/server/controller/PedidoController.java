package com.ccarenales.server.controller;

import com.ccarenales.server.model.Pedido;
import com.ccarenales.server.service.PedidoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/pedido")
@CrossOrigin(origins = "http://localhost:8080")
public class PedidoController {
    @Autowired
    private PedidoService pedidoService;
    @GetMapping("/")
    @CrossOrigin(origins = "http://localhost:8080")
    public List<Pedido> buscarPedidos(){
        return pedidoService.buscarTodos();
    }
    @GetMapping("/{id}")
    @CrossOrigin(origins = "http://localhost:8080")
    public ResponseEntity buscarPedido(@PathVariable("id") long id){
        Pedido pedido = pedidoService.buscar(id);
        if (pedido == null){
            return new ResponseEntity("El pedido no se encontro para el id " + id, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity(pedido, HttpStatus.OK);
    }
    @PostMapping(value = "/")
    @CrossOrigin(origins = "http://localhost:8080")
    public ResponseEntity<?> nuevaPedido(@RequestBody Pedido pedido){
        return new ResponseEntity<>(pedidoService.crear(pedido), HttpStatus.OK);
    }
    @PutMapping("/{id}")
    @CrossOrigin(origins = "http://localhost:8080")
    public ResponseEntity<?> actualizarPedido(@PathVariable long id, @RequestBody Pedido pedido){
        Pedido pedidoTemp = pedidoService.buscar(id);
        pedidoTemp.setFechaEntrega(pedido.getFechaEntrega());
        return new ResponseEntity<>(pedidoService.actualizar(pedido), HttpStatus.OK);
    }
    @DeleteMapping("/{id}")
    @CrossOrigin(origins = "http://localhost:8080")
    public ResponseEntity<?> eliminarPedido(@PathVariable long id){
        pedidoService.eliminar(id);
        return new ResponseEntity<>(new Pedido(), HttpStatus.OK);
    }
}
