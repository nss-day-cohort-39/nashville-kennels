import React, { useState, useEffect } from "react"
import { LocationProvider } from "./location/LocationProvider"
import LocationList from "./location/LocationList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import EmployeeList from "./employee/EmployeeList"
import { AnimalProvider } from "./animal/AnimalProvider"
import AnimalList from "./animal/AnimalList"
import { CustomerProvider } from "./customer/CustomerProvider"
import CustomerList from "./customer/CustomerList"
import { SearchBar } from "./search/SearchBar"
import { SearchResults } from "./search/SearchResults"
import "./Layout.css"
import GeneralList from "./GeneralList"

export default () => {
    const [searchTerms, setTerms] = useState(null)
    const [activeList, setActiveList] = useState("locations")
    const [tree, setTree] = useState()

    const showLocations = () => (
        <LocationProvider>
            <LocationList />
        </LocationProvider>
    )

    const showCustomers = () => (
        <CustomerProvider>
            <CustomerList />
        </CustomerProvider>
    )

    const showEmployees = () => (
        <EmployeeProvider>
            <LocationProvider>
                <EmployeeList />
            </LocationProvider>
        </EmployeeProvider>
    )

    useEffect(() => {
        switch (activeList) {
            case "customers":
                setTree(showCustomers)
                break
            case "locations":
                setTree(showLocations)
                break
            case "employees":
                setTree(showEmployees)
                break
            default:
                setTree(showLocations)
                break
        }
    }, [activeList])

    return (
        <div className="mainContainer">
            <div className="searchContainer">
                <AnimalProvider>
                    <CustomerProvider>
                        <LocationProvider>
                            <SearchBar setTerms={setTerms} />
                            <SearchResults searchTerms={searchTerms} />
                        </LocationProvider>
                    </CustomerProvider>
                </AnimalProvider>
            </div>
            <div className="dataContainer">
                <h2>Nashville Kennels</h2>
                <small>Loving care when you're not there.</small>
                <div className="listContainer">
                    <div className="links">
                        <div className="fakeLink href" onClick={() => setActiveList("locations")}>Locations</div>
                        <div className="fakeLink href" onClick={() => setActiveList("customers")}>Customers</div>
                        <div className="fakeLink href" onClick={() => setActiveList("employees")}>Employees</div>
                    </div>
                    <div className="listDisplay">
                        {tree}
                    </div>
                </div>

            </div>
        </div>
    )
}