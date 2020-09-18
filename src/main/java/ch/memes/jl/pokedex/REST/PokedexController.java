package ch.memes.jl.pokedex.REST;

import ch.memes.jl.pokedex.Data.DAO.DAO;
import ch.memes.jl.pokedex.Data.DAO.DAOSQLiteImpl;
import ch.memes.jl.pokedex.Data.Database;
import ch.memes.jl.pokedex.Data.Entity.Pokemon;
import ch.memes.jl.pokedex.Data.Factory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping(path = "/api", produces = "application/json;charset=UTF-8")
public class PokedexController {

    @Autowired
    private DAOSQLiteImpl daosqLiteImpl;

    @Autowired
    private Factory factory = new Factory();

    @Autowired
    private PokedexMapper pokedexMapper;

    private DAO sqlite = factory.getDAO(Database.SQLITE);

    @RequestMapping(value="/sqlite/pokedex", method = RequestMethod.GET)
    public ArrayList<Pokemon> getPokedex() {
        final ArrayList<Pokemon> pokedex = sqlite.getPokedex();
        return this.pokedexMapper.mapPokedex(pokedex);
    }

    @RequestMapping(value="/sqlite/pokedex/{id}", method = RequestMethod.GET)
    public Pokemon getPokemon(@PathVariable Long id) {
        final Pokemon pokemon = sqlite.getPokemon(id);
        return this.pokedexMapper.mapPokemon(pokemon);
    }

    @RequestMapping(value="/sqlite/pokedex", method = RequestMethod.POST)
    public ArrayList<Pokemon> createPokemon(@RequestBody Pokemon pokemon) {
        final ArrayList<Pokemon> pokedex = sqlite.createPokemon(pokemon);
        return this.pokedexMapper.mapPokedex(pokedex);
    }

    @RequestMapping(value="/sqlite/pokedex/{id}", method = RequestMethod.PUT)
    public ArrayList<Pokemon> updatePokemon(@PathVariable Long id, @RequestBody Pokemon pokemon) {
        final ArrayList<Pokemon> pokedex = sqlite.updatePokemon(id, pokemon);
        return this.pokedexMapper.mapPokedex(pokedex);
    }

    @RequestMapping(value="/sqlite/pokedex/{id}", method = RequestMethod.DELETE)
    public ArrayList<Pokemon> deletePokemon(@PathVariable Long id) {
        final ArrayList<Pokemon> pokedex = sqlite.deletePokemon(id);
        return this.pokedexMapper.mapPokedex(pokedex);
    }
}
