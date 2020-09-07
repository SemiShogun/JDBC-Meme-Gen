package ch.memes.jl.pokedex.Data.Entity;

public class Pokemon {
    private Long pokemonID;
    private String pokemon;
    private String name;
    private int age;

    public Pokemon() {
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
