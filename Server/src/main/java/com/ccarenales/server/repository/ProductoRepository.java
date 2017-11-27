package com.ccarenales.server.repository;

import com.ccarenales.server.model.Producto;
import org.springframework.data.repository.CrudRepository;

public interface ProductoRepository extends CrudRepository<Producto, Long> {
}
