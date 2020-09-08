package ch.memes.jl.pokedex.Data.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
public class Pokemon {

    @Id
    private Long pokemonID;
    private String pokemon;
    private String name;
    private int age;

    public Pokemon() {
        super();
    }

    public Long getPokemonID() {
        return pokemonID;
    }

    public void setPokemonID(Long pokemonID) {
        this.pokemonID = pokemonID;
    }

    public String getPokemon() {
        return pokemon;
    }

    public void setPokemon(String pokemon) {
        this.pokemon = pokemon;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }
}
