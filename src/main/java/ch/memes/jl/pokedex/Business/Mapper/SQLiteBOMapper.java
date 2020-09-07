package ch.memes.jl.pokedex.Business.Mapper;

import ch.memes.jl.pokedex.Business.BO.PokemonBO;
import ch.memes.jl.pokedex.Data.Entity.Pokemon;
import org.mapstruct.Mapper;

import java.util.ArrayList;

@Mapper(componentModel = "spring")
public interface SQLiteBOMapper {
    public ArrayList<Pokemon> getPokedex();

}
