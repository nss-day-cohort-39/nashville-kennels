import React, { useState } from "react"
import { DataStore } from "./DataStore"
import { LocationList } from "./location/LocationList"
import { EmployeeList } from "./employee/EmployeeList"
import { CustomerList } from "./customer/CustomerList"
import { SearchBar } from "./search/SearchBar"
import { SearchResults } from "./search/SearchResults"
import "./Layout.css"

export const Dashboard = () => {
    const [searchTerms, setTerms] = useState(null)
    const [components, setComponents] = useState(<LocationList />)


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
                            <div className="fakeLink href" onClick={() => setComponents(<LocationList />)}>Locations</div>
                            <div className="fakeLink href" onClick={() => setComponents(<CustomerList />)}>Customers</div>
                            <div className="fakeLink href" onClick={() => setComponents(<EmployeeList />)}>Employees</div>
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