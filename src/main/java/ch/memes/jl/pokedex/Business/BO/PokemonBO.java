package ch.memes.jl.pokedex.Business.BO;

public class PokemonBO {
    private Long pokemonID;
    private String pokemon;
    private String name;
    private int age;

    public PokemonBO() {
        super();
    }

    public void setPokemonID(Long pokemonID) {
        this.pokemonID = pokemonID;
    }

    public void setPokemon(String pokemon) {
        this.pokemon = pokemon;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setAge(int age) {
        this.age = age;
    }
}
