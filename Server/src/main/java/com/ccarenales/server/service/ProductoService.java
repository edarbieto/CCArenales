package com.ccarenales.server.service;

import com.ccarenales.server.model.Producto;
import com.ccarenales.server.repository.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class ProductoService {
    @Autowired
    private ProductoRepository repositorio;
    public List<Producto> buscarTodos(){
        List<Producto> productos = new ArrayList<Producto>();
        for (Producto producto : repositorio.findAll()){
            productos.add(producto);
        }
        return productos;
    }
    public Producto buscar(long id){
        return repositorio.findOne(id);
    }
    public Producto crear(Producto producto){
        return repositorio.save(producto);
    }
    public Producto actualizar(Producto producto){
        return repositorio.save(producto);
    }
    public void eliminar(long id){
        repositorio.delete(id);
    }
}
