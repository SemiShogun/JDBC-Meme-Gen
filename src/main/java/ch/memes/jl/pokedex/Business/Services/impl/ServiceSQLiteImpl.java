package ch.memes.jl.pokedex.Business.Services.impl;

import ch.memes.jl.pokedex.Business.Mapper.SQLiteBOMapper;
import ch.memes.jl.pokedex.Business.Services.ServiceSQLite;
import ch.memes.jl.pokedex.Data.DAO.DAOSQLite;
import ch.memes.jl.pokedex.Data.Entity.Pokemon;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class ServiceSQLiteImpl implements ServiceSQLite {

    @Autowired
    private DAOSQLite daosqLite;

    @Autowired
    private SQLiteBOMapper sqLiteBOMapper;

    @Override
    public ArrayList<Pokemon> getPokedex() {
        final ArrayList<Pokemon> pokedex = this.daosqLite.getPokedex();
        return this.sqLiteBOMapper.getPokedex();
    }
}
