package com.ccarenales.server.service;

import com.ccarenales.server.model.Pedido;
import com.ccarenales.server.repository.PedidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class PedidoService {
    @Autowired
    private PedidoRepository repositorio;
    public List<Pedido> buscarTodos(){
        List<Pedido> pedidos = new ArrayList<Pedido>();
        for (Pedido pedido : repositorio.findAll()){
            pedidos.add(pedido);
        }
        return pedidos;
    }
    public Pedido buscar(long id){
        return repositorio.findOne(id);
    }
    public Pedido crear(Pedido pedido){
        return repositorio.save(pedido);
    }
    public Pedido actualizar(Pedido pedido){
        return repositorio.save(pedido);
    }
    public void eliminar(long id){
        repositorio.delete(id);
    }
}
