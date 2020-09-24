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
    
    private DAO mysql = factory.getDAO(Database.MYSQL);

    private DAO csv = factory.getDAO(Database.CSV);

    @RequestMapping(value="/sqlite/pokedex", method = RequestMethod.GET)
    public ArrayList<Pokemon> getSqlitePokedex() {
        final ArrayList<Pokemon> pokedex = sqlite.getPokedex();
        return this.pokedexMapper.mapPokedex(pokedex);
    }

    @RequestMapping(value="/sqlite/pokedex/{id}", method = RequestMethod.GET)
    public Pokemon getSqlitePokemon(@PathVariable Long id) {
        final Pokemon pokemon = sqlite.getPokemon(id);
        return this.pokedexMapper.mapPokemon(pokemon);
    }

    @RequestMapping(value="/sqlite/pokedex", method = RequestMethod.POST)
    public ArrayList<Pokemon> createSqlitePokemon(@RequestBody Pokemon pokemon) {
        final ArrayList<Pokemon> pokedex = sqlite.createPokemon(pokemon);
        return this.pokedexMapper.mapPokedex(pokedex);
    }

    @RequestMapping(value="/sqlite/pokedex/{id}", method = RequestMethod.PUT)
    public ArrayList<Pokemon> updateSqlitePokemon(@PathVariable Long id, @RequestBody Pokemon pokemon) {
        final ArrayList<Pokemon> pokedex = sqlite.updatePokemon(id, pokemon);
        return this.pokedexMapper.mapPokedex(pokedex);
    }

    @RequestMapping(value="/sqlite/pokedex/{id}", method = RequestMethod.DELETE)
    public ArrayList<Pokemon> deleteSqlitePokemon(@PathVariable Long id) {
        final ArrayList<Pokemon> pokedex = sqlite.deletePokemon(id);
        return this.pokedexMapper.mapPokedex(pokedex);
    }

    @RequestMapping(value="/mysql/pokedex", method = RequestMethod.GET)
    public ArrayList<Pokemon> getMySqlPokedex() {
        final ArrayList<Pokemon> pokedex = mysql.getPokedex();
        return this.pokedexMapper.mapPokedex(pokedex);
    }

    @RequestMapping(value="/mysql/pokedex/{id}", method = RequestMethod.GET)
    public Pokemon getMySqlPokemon(@PathVariable Long id) {
        final Pokemon pokemon = mysql.getPokemon(id);
        return this.pokedexMapper.mapPokemon(pokemon);
    }

    @RequestMapping(value="/mysql/pokedex", method = RequestMethod.POST)
    public ArrayList<Pokemon> createMySqlPokemon(@RequestBody Pokemon pokemon) {
        final ArrayList<Pokemon> pokedex = mysql.createPokemon(pokemon);
        return this.pokedexMapper.mapPokedex(pokedex);
    }

    @RequestMapping(value="/mysql/pokedex/{id}", method = RequestMethod.PUT)
    public ArrayList<Pokemon> updateMySqlPokemon(@PathVariable Long id, @RequestBody Pokemon pokemon) {
        final ArrayList<Pokemon> pokedex = mysql.updatePokemon(id, pokemon);
        return this.pokedexMapper.mapPokedex(pokedex);
    }

    @RequestMapping(value="/mysql/pokedex/{id}", method = RequestMethod.DELETE)
    public ArrayList<Pokemon> deleteMySqlPokemon(@PathVariable Long id) {
        final ArrayList<Pokemon> pokedex = mysql.deletePokemon(id);
        return this.pokedexMapper.mapPokedex(pokedex);
    }

    @RequestMapping(value="/csv/pokedex", method = RequestMethod.GET)
    public ArrayList<Pokemon> getCSVPokedex() {
        final ArrayList<Pokemon> pokedex = csv.getPokedex();
        return this.pokedexMapper.mapPokedex(pokedex);
    }

    @RequestMapping(value="/csv/pokedex/{id}", method = RequestMethod.GET)
    public Pokemon getCSVPokemon(@PathVariable Long id) {
        final Pokemon pokemon = csv.getPokemon(id);
        return this.pokedexMapper.mapPokemon(pokemon);
    }

    @RequestMapping(value="/csv/pokedex", method = RequestMethod.POST)
    public ArrayList<Pokemon> createCSVPokemon(@RequestBody Pokemon pokemon) {
        final ArrayList<Pokemon> pokedex = csv.createPokemon(pokemon);
        return this.pokedexMapper.mapPokedex(pokedex);
    }

    @RequestMapping(value="/csv/pokedex/{id}", method = RequestMethod.PUT)
    public ArrayList<Pokemon> updateCSVPokemon(@PathVariable Long id, @RequestBody Pokemon pokemon) {
        final ArrayList<Pokemon> pokedex = csv.updatePokemon(id, pokemon);
        return this.pokedexMapper.mapPokedex(pokedex);
    }

    @RequestMapping(value="/csv/pokedex/{id}", method = RequestMethod.DELETE)
    public ArrayList<Pokemon> deleteCSVPokemon(@PathVariable Long id) {
        final ArrayList<Pokemon> pokedex = csv.deletePokemon(id);
        return this.pokedexMapper.mapPokedex(pokedex);
    }
}
