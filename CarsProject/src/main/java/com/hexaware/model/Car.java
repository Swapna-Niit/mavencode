package com.hexaware.model;

import java.util.Date;

public class Car {
    
    private int id;
    private String name;
    private int price;
    private Date cpdate;

    public Car(int i, String name, int price, Date cpdate) {
        this.id = i;
        this.name = name;
        this.price = price;
        this.cpdate = cpdate;
    }

    public Car() {
        // TODO Auto-generated constructor stub
    }

    public int getId() {
        return id;
    }

    public void setId(int Id) {
        this.id = Id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return "Car{" + "Id=" + id + ", name=" + name + ", price=" + price + '}';
    }

    public Date getCpdate() {
        return cpdate;
    }

    public void setCpdate(Date cpdate) {
        this.cpdate = cpdate;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((cpdate == null) ? 0 : cpdate.hashCode());
        result = prime * result + id;
        result = prime * result + ((name == null) ? 0 : name.hashCode());
        result = prime * result + price;
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Car other = (Car) obj;
        if (cpdate == null) {
            if (other.cpdate != null)
                return false;
        } else if (!cpdate.equals(other.cpdate))
            return false;
        if (id != other.id)
            return false;
        if (name == null) {
            if (other.name != null)
                return false;
        } else if (!name.equals(other.name))
            return false;
        if (price != other.price)
            return false;
        return true;
    }

    
}