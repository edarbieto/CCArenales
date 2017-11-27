package com.ccarenales.server.service;

import com.ccarenales.server.model.Tienda;
import com.ccarenales.server.repository.TiendaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class TiendaService {
    @Autowired
    private TiendaRepository repositorio;
    public List<Tienda> buscarTodos(){
        List<Tienda> tiendas = new ArrayList<Tienda>();
        for (Tienda tienda : repositorio.findAll()){
            tiendas.add(tienda);
        }
        return tiendas;
    }
    public Tienda buscar(long id){
        return repositorio.findOne(id);
    }
    public Tienda crear(Tienda tienda){
        return repositorio.save(tienda);
    }
    public Tienda actualizar(Tienda tienda){
        return repositorio.save(tienda);
    }
    public void eliminar(long id){
        repositorio.delete(id);
    }
}
