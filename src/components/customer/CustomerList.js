import React, { useContext, useState } from "react"
import { CustomerContext } from "./CustomerProvider"
import { LocationContext } from "../location/LocationProvider"
import Customer from "./Customer"


export default () => {
    const { customers } = useContext(CustomerContext)

    return (
        <>
            <h2>Customers</h2>

            <ul className="customers">
                {
                    customers.map(customer => {
                        return <Customer key={customer.id} customer={customer} />
                    })
                }
            </ul>
        </>
    )
}
