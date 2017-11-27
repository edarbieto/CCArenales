package com.ccarenales.server.service;

import com.ccarenales.server.model.PedidoProducto;
import com.ccarenales.server.repository.PedidoProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class PedidoProductoService {
    @Autowired
    private PedidoProductoRepository repositorio;
    public List<PedidoProducto> buscarTodos(){
        List<PedidoProducto> pedidoProductos = new ArrayList<PedidoProducto>();
        for (PedidoProducto pedidoProducto : repositorio.findAll()){
            pedidoProductos.add(pedidoProducto);
        }
        return pedidoProductos;
    }
    public PedidoProducto buscar(long id){
        return repositorio.findOne(id);
    }
    public PedidoProducto crear(PedidoProducto pedidoProducto){
        return repositorio.save(pedidoProducto);
    }
    public PedidoProducto actualizar(PedidoProducto pedidoProducto){
        return repositorio.save(pedidoProducto);
    }
    public void eliminar(long id){
        repositorio.delete(id);
    }
}
