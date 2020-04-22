import React from "react"
import Animal from "./animal/Animal"
import Employee from "./employee/Employee"
import Customer from "./customer/Customer"
import Location from "./location/Location"
import "./Kennel.css"
import "./animal/Animal.css"
import "./employee/Employee.css"
import "./customer/Customer.css"
import "./location/Location.css"
import LocationList from "./location/LocationList"
import { LocationProvider } from "./location/LocationProvider"
import AnimalList from "./animal/AnimalList"
import { AnimalProvider } from "./animal/AnimalProvider"
import { CustomerProvider } from "./customer/CustomerProvider"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import EmployeeList from "./employee/EmployeeList"

export default () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <h2>Animals</h2>
        <AnimalProvider>
            <LocationProvider>
                <CustomerProvider>
                    <AnimalList />
                </CustomerProvider>
            </LocationProvider>
        </AnimalProvider>

        <EmployeeProvider>
            <LocationProvider>
                <EmployeeList />
            </LocationProvider>
        </EmployeeProvider>

        <h2>Locations</h2>
        <LocationProvider>
            <LocationList />
        </LocationProvider>

        <h2>Customers</h2>
        <article className="customers">
            <Customer />
            <Customer />
            <Customer />
            <Customer />
        </article>
    </>
)
