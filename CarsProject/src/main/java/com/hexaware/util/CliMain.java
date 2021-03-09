package com.hexaware.util;

import java.text.ParseException;
import java.util.Scanner;
import com.hexaware.factory.CarFactory;
import com.hexaware.model.Car;

class CliMain {
  private Scanner option = new Scanner(System.in, "UTF-8");

  private void mainCar() {
    System.out.println("Car Details");
    System.out.println("-----------------------");
    System.out.println("1. Show Cars");
    System.out.println("2. Exit");
    System.out.println("3. Add Car");
    mainCarDetails();
  }

  private void mainCarDetails() {
    try {
      System.out.println("Enter your choice:");
      int menuOption = option.nextInt();
      switch (menuOption) {
      case 1:
        showCarList();
        break;
      case 2:
        Runtime.getRuntime().halt(0);
      case 3:
        insertCar();
        break;
      default:
        System.out.println("Choose either 1 or 2");
      }
    } catch (Exception e) {
      e.printStackTrace();
      System.out.println("enter a valid value");
    }
    option.nextLine();
    mainCar();
  }

  static int insertCar() throws ParseException {

    int i = CarFactory.insertCar(67, "maruthi800", 56000, "1996-12-01");
    if(i > 0)
    {
      System.out.println("inserted");
    }
    else
    {
      System.out.println("error");
    }
    return i;
  
  }

  private void showCarList() {
    Car[] car = CarFactory.showMenu();
    System.out.println("Car_Id");
    for (Car c : car) {
      System.out.println(c.getId());
    }
  }

  public static void main(final String[] args) {
    final CliMain mainObj = new CliMain();
    mainObj.mainCar();
  }
}
