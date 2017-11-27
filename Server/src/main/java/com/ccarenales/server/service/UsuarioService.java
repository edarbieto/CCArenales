package com.ccarenales.server.service;

import com.ccarenales.server.model.Usuario;
import com.ccarenales.server.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class UsuarioService {
    @Autowired
    private UsuarioRepository repositorio;
    public List<Usuario> buscarTodos(){
        List<Usuario> usuarios = new ArrayList<Usuario>();
        for (Usuario usuario : repositorio.findAll()){
            usuarios.add(usuario);
        }
        return usuarios;
    }
    public Usuario buscar(long id){
        return repositorio.findOne(id);
    }
    public Usuario crear(Usuario usuario){
        return repositorio.save(usuario);
    }
    public Usuario actualizar(Usuario usuario){
        return repositorio.save(usuario);
    }
    public void eliminar(long id){
        repositorio.delete(id);
    }
}
