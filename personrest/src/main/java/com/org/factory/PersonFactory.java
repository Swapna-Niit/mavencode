package com.org.factory;

//import java.text.DateFormat;
//import java.text.ParseException;
//import java.text.SimpleDateFormat;
//import java.util.Date;
import java.util.List;

import com.org.model.Person;
import com.org.persistence.DbConnection;
import com.org.persistence.PersonDAO;


public class PersonFactory {

    protected PersonFactory() {

  }

  private static PersonDAO dao() {
    final DbConnection db = new DbConnection();
    return db.getConnect().onDemand(PersonDAO.class);
  }

  public static Person[] showMenu() {
    final List<Person> person = dao().show();
    return person.toArray(new Person[person.size()]);
  }
}

