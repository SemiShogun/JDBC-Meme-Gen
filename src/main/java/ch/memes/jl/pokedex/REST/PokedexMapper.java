package ch.memes.jl.pokedex.REST;

import ch.memes.jl.pokedex.Data.Entity.Pokemon;
import org.mapstruct.Mapper;

import java.util.ArrayList;

@Mapper(componentModel = "spring")
public interface PokedexMapper {
    ArrayList<Pokemon> mapPokedex(ArrayList<Pokemon> pokedex);
    Pokemon mapPokemon(Pokemon pokemon);
}
