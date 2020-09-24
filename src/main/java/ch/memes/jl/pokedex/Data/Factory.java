package ch.memes.jl.pokedex.Data;

import ch.memes.jl.pokedex.Data.DAO.DAO;
import ch.memes.jl.pokedex.Data.DAO.DAOCSVImpl;
import ch.memes.jl.pokedex.Data.DAO.DAOMySQLImpl;
import ch.memes.jl.pokedex.Data.DAO.DAOSQLiteImpl;
import org.springframework.stereotype.Component;

@Component
public class Factory {
    public DAO getDAO(Database DAOType) {
        switch(DAOType) {
            case SQLITE:
                return new DAOSQLiteImpl();
            case MYSQL:
                return new DAOMySQLImpl();
            case CSV:
                return new DAOCSVImpl();
        }

        return null;
    }
}
