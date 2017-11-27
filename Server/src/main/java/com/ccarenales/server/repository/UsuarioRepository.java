package com.ccarenales.server.repository;

import com.ccarenales.server.model.Usuario;
import org.springframework.data.repository.CrudRepository;

public interface UsuarioRepository extends CrudRepository<Usuario, Long>{
}
