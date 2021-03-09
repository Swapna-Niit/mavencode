package com.org.util;

import java.util.Scanner;

import com.org.factory.PersonFactory;
import com.org.model.Person;


/**
 * CliMain used as Client interface for java coading.
 * @author hexware
 */
class CliMain {
  private final Scanner option = new Scanner(System.in, "UTF-8");

  /**
   * mainMenu method used to display the option we had in the application.
   */
  private void mainMenu() {
    System.out.println("Canteen Management System");
    System.out.println("-----------------------");
    System.out.println("1. Show Menu");
    System.out.println("2. Customer login");
    System.out.println("3. Vendor login");
    System.out.println("4. Sign Up");
    System.out.println("5. Exit");
    mainMenuDetails();
  }

  /**
   * mainMenuDetails method process the option selected from main menu.
   */
  private void mainMenuDetails() {
    try {
      System.out.println("Enter your choice:");
      final int menuOption = option.nextInt();
      option.nextLine();
      switch (menuOption) {
        case 1:
          showFullMenu();
          break;
        case 2:
          //custLogin();
        break;
      case 3:
        //vnuLogin();
        break;
      case 4:
        //signUpCus();
        break;
      case 5:
        Runtime.getRuntime().halt(0);
      default:
        System.out.println("Choose valid option");
      }
    } catch (final Exception e) {
      System.out.println("enter a valid value");
      System.out.println(e);
      return;
    }

    mainMenu();
  }

  /**
   * showFullMenu method display the menu item stored in database.
   */
  private void showFullMenu() {
    final Person[] person = PersonFactory.showMenu();
    System.out.printf("%5s %20s %12s", "Person_Id", "Person_Name", "Person_DOB");    System.out.println();
    for (final Person p : person) {
      System.out.format("%5d %20s %12s", p.getPerson_id(), p.getPerson_name(), p.getPerson_dob());
         // p.getMnuDetails(), p.getMnuCategory(), p.getMnuSpecilization());
      System.out.println();
    }
  }

 
  /**
   * main method is the basic entry point for the application.
   * @param args used to get the user input.
   */
  public static void main(final String[] args) {
    final CliMain mainObj = new CliMain();
    mainObj.mainMenu();
  }
}
