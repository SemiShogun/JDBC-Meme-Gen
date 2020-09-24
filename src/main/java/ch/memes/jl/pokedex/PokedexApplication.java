package ch.memes.jl.pokedex;

import ch.memes.jl.pokedex.Data.DAO.DAOAccess;
import ch.memes.jl.pokedex.Data.Database;
import ch.memes.jl.pokedex.Data.Factory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class PokedexApplication {
    public static void main(String[] args) {
        SpringApplication.run(PokedexApplication.class, args);

        Factory factory = new Factory();
        DAOAccess setupdb = (DAOAccess) factory.getDAO(Database.CSV);
        setupdb.setupDB();
    }

}
