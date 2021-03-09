package com.hexaware.factory;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
//import java.util.Date;
import java.util.List;


import com.hexaware.model.Car;

public class CarFactory {

  protected CarFactory() {

  }

  private static CarDAO dao() {
    final DbConnection db = new DbConnection();
    return db.getConnect().onDemand(CarDAO.class);
  }

  public static Car[] showMenu() {
    final List<Car> car = dao().show();
    return car.toArray(new Car[car.size()]);
  }

  public static int insertCar(final int id, final String cname, final int cprice, final String cdate)
      throws ParseException {
    final DateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
    final java.util.Date cpdate = formatter.parse(cdate);
    final java.sql.Date scpdate = new java.sql.Date(cpdate.getTime());

    final int insertResult = dao().insertCar(id, cname, cprice, scpdate);
    return insertResult;
  }

  public static Car showCar(int carId) {

    CarDAO cDao = dao();
    Car sc = cDao.showCar(carId);
    return sc;
  }

  public static int updateCarPrice(Car newCar) {
    CarDAO cDao = dao();
    int cw = cDao.updateCarPrice(newCar.getId(), newCar.getPrice());
    return cw;
  }

  public static int insertCar(Car newCar) throws ParseException {
    //String date = newCar.getCpdate().getText();
    //final DateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
    //final java.util.Date cpdate = formatter.parse(newCar.getCpdate());
    final java.util.Date cpdate = newCar.getCpdate();
    final java.sql.Date scpdate = new java.sql.Date(cpdate.getTime());

    final int insertResult = dao().insertCar(newCar.getId(), newCar.getName(),newCar.getPrice(),scpdate);
    return insertResult;
}
}

