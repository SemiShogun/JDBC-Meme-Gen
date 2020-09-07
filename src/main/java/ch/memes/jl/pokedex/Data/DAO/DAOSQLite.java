package ch.memes.jl.pokedex.Data.DAO;

import ch.memes.jl.pokedex.Data.DAO.CRUD.CRUDSQLite;
import ch.memes.jl.pokedex.Data.Entity.Pokemon;
import org.springframework.stereotype.Repository;

import java.sql.*;
import java.util.ArrayList;

@Repository
public class DAOSQLite implements DAO {

    @Override
    public ArrayList<Pokemon> getPokedex(ArrayList<Pokemon> pokedex) {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection conn = DriverManager.getConnection(
                    "jdbc:ucanaccess://src/main/resources/JokeDB.accdb");
            Statement s = conn.createStatement();
            ResultSet rs = s.executeQuery("SELECT * FROM pokedex");

            while (rs.next()) {
                pokedex.add(CRUDSQLite.createPokemon(rs));
            }
        } catch (SQLException err) {
            err.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
}
