package com.hexaware.factory;

import org.skife.jdbi.v2.sqlobject.Bind;
import org.skife.jdbi.v2.sqlobject.SqlQuery;
import org.skife.jdbi.v2.sqlobject.SqlUpdate;
import org.skife.jdbi.v2.sqlobject.customizers.Mapper;

import java.sql.Date;
import java.util.List;
import com.hexaware.model.Car;
import com.hexaware.persistance.CarMapper;

public interface CarDAO {

  @SqlQuery("Select * from cars")
    @Mapper(CarMapper.class)
    List<Car> show();

    @SqlUpdate("Insert into Cars (id, name, price, pdate)"
    + " values (:cid ,:cname,:cprice, :cpdate)")
        int insertCar(@Bind("cid") int id,@Bind("cname") String cname,
    @Bind("cprice")int cprice, @Bind("cpdate") Date scpdate);

    @SqlQuery("Select * from Cars where id = :carId")
    @Mapper(CarMapper.class)
    Car showCar(@Bind("carId") int carId);

    @SqlUpdate("Update Cars Set price = :newPrice where ID = :carId")
    @Mapper(CarMapper.class)
    int updateCarPrice(@Bind("carId") int carId, @Bind("newPrice") int newPrice);
}
