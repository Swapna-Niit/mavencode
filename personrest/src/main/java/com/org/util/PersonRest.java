package com.org.util;

//import java.text.ParseException;

//import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
//import javax.ws.rs.POST;
//import javax.ws.rs.PUT;
import javax.ws.rs.Path;
//import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.org.factory.PersonFactory;
import com.org.model.Person;


@Path("/person")
public class PersonRest {
  /**
   * Returns Menu details.
   * 
   * @return the menu details
   */
  @GET
  @Produces(MediaType.TEXT_HTML)
  public final Person[] listMenu() {
    final Person[] persons = PersonFactory.showMenu();
    return persons;
  }
}