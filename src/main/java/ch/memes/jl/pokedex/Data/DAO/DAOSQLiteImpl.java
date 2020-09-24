package ch.memes.jl.pokedex.Data.DAO;

import ch.memes.jl.pokedex.Data.Entity.Pokemon;
import org.springframework.stereotype.Repository;

import java.sql.*;
import java.util.ArrayList;

@Repository
public class DAOSQLiteImpl implements DAO {

    private String path = "jdbc:sqlite:src/main/resources/pokedex.db";
    private String driver = "org.sqlite.JDBC";

    @Override
    public ArrayList<Pokemon> getPokedex() {
        ArrayList<Pokemon> list = new ArrayList<Pokemon>();
        try {
            Class.forName(driver);
            Connection conn = DriverManager.getConnection(path);
            Statement s = conn.createStatement();
            ResultSet rs = s.executeQuery("SELECT * FROM Pokedex");

            while (rs.next()) {
                list.add(generate(rs));
            }
        } catch (SQLException | ClassNotFoundException err) {
            err.printStackTrace();
        }
        return list;
    }

    @Override
    public Pokemon getPokemon(Long id) {
        Pokemon pokemon = new Pokemon();
        try {
            Class.forName(driver);
            Connection conn = DriverManager.getConnection(path);
            Statement s = conn.createStatement();
            PreparedStatement pstmt = conn.prepareStatement("SELECT * FROM Pokedex WHERE pokemonID = ?");
            pstmt.setLong(1, id);
            ResultSet rs = pstmt.executeQuery();
            pokemon = generate(rs);

        } catch (SQLException | ClassNotFoundException err) {
            err.printStackTrace();
        }
        return pokemon;
    }

    @Override
    public ArrayList<Pokemon> createPokemon(Pokemon pokemon) {
        String sql = "INSERT INTO Pokedex(pokemon,name,description,type1,type2) VALUES(?,?,?,?,?)";
        try {
            Class.forName(driver);
            Connection conn = DriverManager.getConnection(path);
            PreparedStatement pstmt = conn.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            pstmt.setString(1, pokemon.getPokemon());
            pstmt.setString(2, pokemon.getName());
            pstmt.setString(3, pokemon.getDescription());
            pstmt.setString(4, pokemon.getType1());
            pstmt.setString(5, pokemon.getType2());
            pstmt.executeUpdate();

        } catch (SQLException | ClassNotFoundException err) {
            err.printStackTrace();
        }
        return getPokedex();
    }

    @Override
    public ArrayList<Pokemon> updatePokemon(Long id, Pokemon pokemon) {
        String sql = "UPDATE Pokedex SET pokemon=?, name=?, description=?, type1=?, type2=? WHERE pokemonID=?";
        try {
            Class.forName(driver);
            Connection conn = DriverManager.getConnection(path);
            PreparedStatement pstmt = conn.prepareStatement(sql);
            pstmt.setString(1, pokemon.getPokemon());
            pstmt.setString(2, pokemon.getName());
            pstmt.setString(3, pokemon.getDescription());
            pstmt.setString(4, pokemon.getType1());
            pstmt.setString(5, pokemon.getType2());
            pstmt.setLong(6, id);
            pstmt.executeUpdate();

        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }

        return getPokedex();
    }

    @Override
    public ArrayList<Pokemon> deletePokemon(Long id) {
        String sql = "DELETE FROM Pokedex WHERE pokemonID=?";
        try {
            Class.forName(driver);
            Connection conn = DriverManager.getConnection(path);
            Statement s = conn.createStatement();
            PreparedStatement pstmt = conn.prepareStatement(sql);
            pstmt.setLong(1, id);
            pstmt.executeUpdate();

        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }

        return getPokedex();
    }

    public Pokemon generate(ResultSet entry) throws SQLException {
        Pokemon pokemon = new Pokemon();
        pokemon.setPokemonID(entry.getLong("pokemonID"));
        pokemon.setPokemon(entry.getString("pokemon"));
        pokemon.setName(entry.getString("name"));
        pokemon.setDescription(entry.getString("description"));
        pokemon.setType1(entry.getString("type1"));
        pokemon.setType2(entry.getString("type2"));
        return pokemon;
    }
}
