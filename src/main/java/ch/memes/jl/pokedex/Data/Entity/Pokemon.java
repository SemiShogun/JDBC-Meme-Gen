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
    private String description;
    private String type1;
    private String type2;
    private String image;

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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getType1() {
        return type1;
    }

    public void setType1(String type1) {
        this.type1 = type1;
    }

    public String getType2() {
        return type2;
    }

    public void setType2(String type2) {
        this.type2 = type2;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

}
