package com.ccarenales.server.controller;

import com.ccarenales.server.model.Usuario;
import com.ccarenales.server.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/usuario")
@CrossOrigin(origins = "http://localhost:4200")
public class UsuarioController {
    @Autowired
    private UsuarioService usuarioService;
    @GetMapping("/")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<Usuario> buscarUsuarios(){
        return usuarioService.buscarTodos();
    }
    @GetMapping("/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity buscarUsuario(@PathVariable("id") long id){
        Usuario usuario = usuarioService.buscar(id);
        if (usuario == null){
            return new ResponseEntity("El usuario no se encontro para el id " + id, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity(usuario, HttpStatus.OK);
    }
    @PostMapping(value = "/")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<?> nuevaUsuario(@RequestBody Usuario usuario){
        return new ResponseEntity<>(usuarioService.crear(usuario), HttpStatus.OK);
    }
    @PutMapping("/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<?> actualizarUsuario(@PathVariable long id, @RequestBody Usuario usuario){
        Usuario usuarioTemp = usuarioService.buscar(id);
        usuarioTemp.setNickname(usuario.getNickname());
        usuarioTemp.setPassword(usuario.getPassword());
        usuarioTemp.setPicUri(usuario.getPicUri());
        return new ResponseEntity<>(usuarioService.actualizar(usuario), HttpStatus.OK);
    }
    @DeleteMapping("/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<?> eliminarUsuario(@PathVariable long id){
        usuarioService.eliminar(id);
        return new ResponseEntity<>(new Usuario(), HttpStatus.OK);
    }
}
