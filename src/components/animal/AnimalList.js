import React, { useContext } from "react"
import { AnimalContext } from "./AnimalProvider"
import { LocationContext } from "../location/LocationProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import Animal from "./Animal"

export default () => {
    const { animals } = useContext(AnimalContext)
    const { customers } = useContext(CustomerContext)
    const { locations } = useContext(LocationContext)

    return (
        <div className="animals">
        {
            animals.map(animal => {
                const location = locations.find(l => l.id === animal.locationId)
                const customer = customers.find(c => c.id === animal.customerId)

                return <Animal key={animal.id}
                            animal={animal}
                            customer={customer}
                            location={location} />

            })
        }
        </div>
    )
}
