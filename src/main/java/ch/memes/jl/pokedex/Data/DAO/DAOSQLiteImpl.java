package ch.memes.jl.pokedex.Data.DAO;

import ch.memes.jl.pokedex.Data.Entity.Pokemon;
import org.springframework.stereotype.Repository;

import java.sql.*;
import java.util.ArrayList;

@Repository
public class DAOSQLiteImpl implements DAO {

    private String path = "jdbc:sqlite:src/main/resources/pokedex.db";

    @Override
    public ArrayList<Pokemon> getPokedex() {
        ArrayList<Pokemon> list = new ArrayList<Pokemon>();
        try {
            Class.forName("org.sqlite.JDBC");
            Connection conn = DriverManager.getConnection(path);
            Statement s = conn.createStatement();
            ResultSet rs = s.executeQuery("SELECT * FROM Pokedex");

            while (rs.next()) {
                list.add(createPokemon(rs));
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
            Class.forName("org.sqlite.JDBC");
            Connection conn = DriverManager.getConnection(path);
            Statement s = conn.createStatement();
            PreparedStatement pstmt = conn.prepareStatement("SELECT * FROM Pokedex WHERE pokemonID = ?");
            pstmt.setLong(1, id);
            ResultSet rs = pstmt.executeQuery();
            pokemon = createPokemon(rs);

        } catch (SQLException | ClassNotFoundException err) {
            err.printStackTrace();
        }
        return pokemon;
    }

    @Override
    public ArrayList<Pokemon> createPokemon(Pokemon pokemon) {
        String sql = "INSERT INTO Pokedex(pokemon,name,age) VALUES(?,?,?)";
        try {
            Class.forName("org.sqlite.JDBC");
            Connection conn = DriverManager.getConnection(path);
            Statement s = conn.createStatement();
            PreparedStatement pstmt = conn.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            pstmt.setString(1, pokemon.getPokemon());
            pstmt.setString(2, pokemon.getName());
            pstmt.setInt(3, pokemon.getAge());

        } catch (SQLException | ClassNotFoundException err) {
            err.printStackTrace();
        }
        return getPokedex();
    }

    @Override
    public ArrayList<Pokemon> updatePokemon(Long id, Pokemon pokemon) {
        String sql = "UPDATE Pokedex SET pokemon=?, name=?, age=? WHERE pokemonID=?";
        try {
            Class.forName("org.sqlite.JDBC");
            Connection conn = DriverManager.getConnection(path);
            Statement s = conn.createStatement();
            PreparedStatement pstmt = conn.prepareStatement(sql);
            pstmt.setString(1, pokemon.getPokemon());
            pstmt.setString(2, pokemon.getName());
            pstmt.setInt(3, pokemon.getAge());
            pstmt.setLong(4, id);
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
            Class.forName("org.sqlite.JDBC");
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

    public Pokemon createPokemon(ResultSet entry) throws SQLException {
        Pokemon pokemon = new Pokemon();
        pokemon.setPokemonID(entry.getLong("pokemonID"));
        pokemon.setPokemon(entry.getString("pokemon"));
        pokemon.setName(entry.getString("name"));
        pokemon.setAge(entry.getInt("age"));
        return pokemon;
    }
}
