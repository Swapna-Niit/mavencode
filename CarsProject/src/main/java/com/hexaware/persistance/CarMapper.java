package com.hexaware.persistance;

import java.sql.ResultSet;
import java.sql.SQLException;

import com.hexaware.model.Car;

import org.skife.jdbi.v2.StatementContext;
import org.skife.jdbi.v2.tweak.ResultSetMapper;


public class CarMapper implements ResultSetMapper<Car> {
   
    public Car map(int idx, ResultSet rs, StatementContext ctx) throws SQLException {
        return new Car(rs.getInt("Id"), rs.getString("Name"), rs.getInt("Price"),rs.getDate("pdate"));
    }
}