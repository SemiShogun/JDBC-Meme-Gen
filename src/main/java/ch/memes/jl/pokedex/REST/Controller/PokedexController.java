package ch.memes.jl.pokedex.REST.Controller;

import ch.memes.jl.pokedex.Data.Entity.Pokedex;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api", produces = "application/json;charset=UTF-8")
public class PokedexController {

    @Autowired
    private ServiceSQLite serviceSQLite;

    @RequestMapping(value="/pokedex")
    public Pokedex getPokedex() {
        serviceSQLite.getPokedex();
    }
}
