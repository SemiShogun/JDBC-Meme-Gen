package ch.memes.jl.pokedex.Business.BO;

import ch.memes.jl.pokedex.Data.DAO.DAO;
import ch.memes.jl.pokedex.Data.Entity.Pokemon;

import java.util.ArrayList;

public class PokedexBO {
    private ArrayList<Pokemon> pokedex;

    public PokedexBO(DAO dao) {
        super();
        pokedex = new ArrayList<Pokemon>();
        dao.getPokedex(pokedex);
    }
}
