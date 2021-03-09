package com.hexaware.factory;

import static org.junit.Assert.assertEquals;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;

import com.hexaware.model.Car;


import org.junit.Test;

import mockit.Expectations;
import mockit.Mock;
import mockit.MockUp;
import mockit.Mocked;

/**
 * MenuFactoryTest.
 */
public class CarFactoryTest {
  /**
   * testGetAllMenu.
   * 
   * @param dao .
   */
  @Test
  public final void testGetAllCar(@Mocked final CarDAO dao) {
    final Car m1 = new Car(1, "Audi", 52642, null);
    final ArrayList<Car> mn = new ArrayList<Car>();
    new Expectations() {
      {
        mn.add(m1);
        dao.show();
        result = mn;
      }
    };
    new MockUp<CarFactory>() {
      @Mock
      CarDAO dao() {
        return dao;
      }
    };
    Car[] mn1 = CarFactory.showMenu();
    assertEquals(m1, mn1[0]);

  }

  @Test
  public final void testInsertCar(@Mocked final CarDAO dao) throws ParseException {
    final int expectedS = 1;
    
    new Expectations() {
        {
          final DateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
          final java.util.Date cpdate = formatter.parse("1999-12-05");
          final java.sql.Date scpdate = new java.sql.Date(cpdate.getTime());
          System.out.println("Mocked GetNewMenu");
          dao.insertCar(17, "ritz", 500000, scpdate);
          result = expectedS;
        }
        };
    new MockUp<CarFactory>() {
        @Mock
        CarDAO dao() {
        System.out.println("Mocked Customer DAO");
        return dao;
        }
        };
    int actualS = CarFactory.insertCar(17, "ritz", 500000, "1999-12-05");
    assertEquals(expectedS, actualS);
  }
}
  
  