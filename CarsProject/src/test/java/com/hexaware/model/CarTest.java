package com.hexaware.model;

// import com.hexaware.MLP163.persistence.MenuDAO;
// import com.hexaware.MLP163.factory.MenuFactory;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;

import org.junit.Test;
import org.junit.Before;
// import org.junit.runner.RunWith;

// import mockit.Expectations;
// import mockit.MockUp;
// import mockit.Mocked;
// import mockit.Mock;
// import mockit.integration.junit4.JMockit;
// import java.util.ArrayList;

/**
 * Test class for Menu.
 */
// @RunWith(JMockit.class)
public class CarTest {
    /**
   * setup method.
   */
  @Before
  public void initInput() {

  }
  /**
   * Tests the equals/hashcode methods of the employee class.
   */
  @Test
  public final void testMenu() {
    Car m = new Car();
    assertNotNull(m);
    Car m1 = null;
    assertNull(m1);
    Car m100 = new Car(1,"Audi",52642, null);
    //assertEquals(m100, new Car (1,"Audi",52642));
    assertNotEquals(m100, new Car (1,"Audi",152642, null));
    assertNotEquals(m100, m1);
    m100.setId(1);
    assertNotEquals(101, m100.getId());
    m100.setName("Audi");
    assertEquals("Audi", m100.getName());
    m100.setPrice(52642);

    assertEquals(m100.hashCode(), new Car (1,"Audi",52642, null).hashCode());
  }

  /**
   * tests that empty employee list is handled correctly.
   * @param dao mocking the dao class
   */
//   @Test
//   public final void testListAllEmpty(@Mocked final MenuDAO dao) {
//     new Expectations() {
//       {
//         dao.show();
//         result = new ArrayList<Menu>();
//       }
//     };
//     new MockUp<MenuFactory>() {
//       @Mock
//       MenuDAO dao() {
//         return dao;
//       }
//     };
//     Menu[] me = MenuFactory.showMenu();
//     assertEquals(0, me.length);
//   }
//   /**
//    * Tests that a list with some employees is handled correctly.
//    * @param dao mocking the dao class
//    */
//   @Test
//   public final void testListAllSome(@Mocked final MenuDAO dao) {
//     final Menu m100 = new Menu(100);
//     final Menu m101 = new Menu(101);
//     final ArrayList<Menu> mn = new ArrayList<Menu>();
//     new Expectations() {
//       {
//         mn.add(m100);
//         mn.add(m101);
//         dao.show();
//         result = mn;
//       }
//     };
//     new MockUp<MenuFactory>() {
//       @Mock
//       MenuDAO dao() {
//         return dao;
//       }
//     };
//     Menu[] mn1 = MenuFactory.showMenu();
//     assertEquals(2, mn1.length);
//     assertEquals(new Menu(100).getMnuId(), mn1[0].getMnuId());
//     assertEquals(new Menu(101).getMnuId(), mn1[1].getMnuId());
//   }
}
