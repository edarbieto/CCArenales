package com.ccarenales.server.service;

import com.ccarenales.server.model.Historia;
import com.ccarenales.server.repository.HistoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class HistoriaService {
    @Autowired
    private HistoriaRepository repositorio;
    public List<Historia> buscarTodos(){
        List<Historia> historias = new ArrayList<Historia>();
        for (Historia historia : repositorio.findAll()){
            historias.add(historia);
        }
        return historias;
    }
    public Historia buscar(long id){
        return repositorio.findOne(id);
    }
    public Historia crear(Historia historia){
        return repositorio.save(historia);
    }
    public Historia actualizar(Historia historia){
        return repositorio.save(historia);
    }
    public void eliminar(long id){
        repositorio.delete(id);
    }
}
