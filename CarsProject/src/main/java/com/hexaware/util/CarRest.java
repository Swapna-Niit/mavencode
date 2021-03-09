package com.hexaware.util;

import java.text.ParseException;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.hexaware.factory.CarFactory;
import com.hexaware.model.Car;

@Path("/car")
public class CarRest {
  /**
   * Returns Menu details.
   * 
   * @return the menu details
   */
  @GET
  @Produces(MediaType.APPLICATION_JSON)
  public final Car[] listMenu() {
    final Car[] cars = CarFactory.showMenu();
    return cars;
  }

  @POST
  @Consumes(MediaType.APPLICATION_JSON)
  @Produces(MediaType.APPLICATION_JSON)
  @Path("/addCar")
  public final String addCar(final Car newCar) throws ParseException {
    String comment = "";
    //final int cd = CarFactory.insertCar(134, "Datsun", 500000, "2019-10-10");
    final int cd = CarFactory.insertCar(newCar);
    if (cd > 0) {
      comment = "{ \"value\" : \"car added Successfull\" }";
    } else {
      comment = "{ \"value\" : \"car already exists so Failed\" }";
    }
    return comment;
  }

  @PUT
  @Consumes(MediaType.APPLICATION_JSON)
  @Produces(MediaType.APPLICATION_JSON)
  @Path("/updateCar")
  public final String updateCar(final Car newCar) throws ParseException {
    String comment = "";
    final int cd = CarFactory.updateCarPrice(newCar);
    if (cd > 0) {
      comment = "{ \"value\" : \"car updated Successfull\" }";
    } else {
      comment = "{ \"value\" : \"car doesnot exists so Failed\" }";
    }
    return comment;
  }


  @Path("/displayCar/{carId}")
  @GET
  @Produces(MediaType.APPLICATION_JSON)
  public final Car showCustomer(@PathParam("carId") final int carId) {
    final Car cw = CarFactory.showCar(carId);
    return cw;
  }
}
