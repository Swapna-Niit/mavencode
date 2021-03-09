package com.org.persistence;

import java.sql.ResultSet;
import java.sql.SQLException;


import com.org.model.Person;

import org.skife.jdbi.v2.StatementContext;
import org.skife.jdbi.v2.tweak.ResultSetMapper;


public class PersonMapper implements ResultSetMapper<Person> {
   
    public Person map(int idx, ResultSet rs, StatementContext ctx) throws SQLException {
        return new Person(rs.getInt("person_id"),rs.getString("person_name"),rs.getDate("person_dob"));
    }
}