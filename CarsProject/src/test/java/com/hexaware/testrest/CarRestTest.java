package com.hexaware.testrest;

import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.Set;
import java.util.HashSet;
import java.net.URISyntaxException;
import java.text.SimpleDateFormat;
import java.text.ParseException;
import org.junit.Test;
import static org.junit.Assert.*;

import com.hexaware.model.Car;
import com.jayway.restassured.http.ContentType;
import com.jayway.restassured.path.json.JsonPath;
import static com.jayway.restassured.RestAssured.given;

public class CarRestTest {

	@Test
	public void testCarList() throws AssertionError, URISyntaxException, ParseException {
		Car[] res = given().accept(ContentType.JSON).when()
				.get(CommonUtil.getURI("/api/car")).getBody().as(Car[].class);
		
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		String s1 = "2016-05-20";
    	Date doj = sdf.parse(s1);
		System.out.println(doj);
    	String s2 = "2018-10-20";
    	Date doj1 = sdf.parse(s2);
		
		String s3 = "2018-12-20";
    	Date doj2 = sdf.parse(s3);

		String s4 = "2017-03-22";
    	Date doj3 = sdf.parse(s4);

		String s5 = "2019-01-01";
    	Date doj4 = sdf.parse(s5);

        Car c1 = new Car (23, "SUV", 500000, doj);
        Car c2 = new Car (24, "XYLO", 450000, doj1);
        Car c3 = new Car (25, "i10", 650000, doj2);
        Car c4 = new Car (26, "Dzire", 750000, doj3);
        Car c5 = new Car (27, "Toyoto", 850000, doj4);

		
		for (Car c: res) {
			switch (c.getId()) {
				case 1000:
					assertEquals(res[0], c1);
					break;
				case 2000 : 
					assertEquals(res[1], c2);
					break;
				case 3000:
					assertEquals(res[2], c3);
					break;
				case 4000:
					assertEquals(res[3], c4);
					break;
				case 5000:
					assertEquals(res[4], c5);
					break;
				default:
					fail("Unknown employee with id:" + c);	
			}
	}
	}
}