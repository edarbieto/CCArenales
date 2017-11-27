package com.ccarenales.server.repository;

import com.ccarenales.server.model.Pedido;
import org.springframework.data.repository.CrudRepository;

public interface PedidoRepository extends CrudRepository<Pedido, Long> {
}
