package ch.memes.jl.pokedex.Data;

import ch.memes.jl.pokedex.Data.DAO.DAO;
import ch.memes.jl.pokedex.Data.DAO.DAOSQLiteImpl;
import org.springframework.stereotype.Component;

@Component
public class Factory {
    public DAO getDAO(Database DAOType) {
        switch(DAOType) {
            case SQLITE:
                return new DAOSQLiteImpl();
            case MYSQL:
                break;
            case MONGODB:
                break;
        }

        return null;
    }
}
