import React, { useState, useEffect } from "react"
import { DataStore } from "./DataStore"
import LocationList from "./location/LocationList"
import EmployeeList from "./employee/EmployeeList"
import CustomerList from "./customer/CustomerList"
import { SearchBar } from "./search/SearchBar"
import { SearchResults } from "./search/SearchResults"
import "./Layout.css"

export default () => {
    const [searchTerms, setTerms] = useState(null)
    const [activeList, setActiveList] = useState("locations")
    const [components, setComponents] = useState()

    // Higher order functions that return which component to render
    const showLocations = () => <LocationList />
    const showCustomers = () => <CustomerList />
    const showEmployees = () => <EmployeeList />

    /*
        This effect hook determines which list is shown
        based on the state of the `activeList` variable.
    */
    useEffect(() => {
        if (activeList === "customers") {
            setComponents(showCustomers)
        }
        else if (activeList === "locations") {
            setComponents(showLocations)
        }
        else if (activeList === "employees") {
            setComponents(showEmployees)
        }
    }, [activeList])

    return (
        <div className="mainContainer">
            <DataStore>
                <div className="searchContainer">
                    <SearchBar setTerms={setTerms} />
                    <SearchResults searchTerms={searchTerms} />
                </div>
                <div className="dataContainer">
                    <h1>Nashville Kennels</h1>
                    <small>Loving care when you're not there.</small>
                    <div className="listContainer">
                        <div className="links">
                            <div className="fakeLink href" onClick={() => setActiveList("locations")}>Locations</div>
                            <div className="fakeLink href" onClick={() => setActiveList("customers")}>Customers</div>
                            <div className="fakeLink href" onClick={() => setActiveList("employees")}>Employees</div>
                        </div>
                        <div className="listDisplay">
                            {components}
                        </div>
                    </div>
                </div>
            </DataStore>
        </div>
    )
}