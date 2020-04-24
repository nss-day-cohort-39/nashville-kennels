import React from "react"

export default ({ animal, customer, location }) => {
    return (
        <>
            <section className="animal">
                <div className="animal__breed">
                    <label className="label--animal" htmlFor="">Breed:</label> {animal.breed}
                </div>
                <div className="animal__location">
                    <label className="label--animal" htmlFor="">Location:</label> {location.name}
                </div>
                <div className="animal__owner">
                    <label className="label--animal" htmlFor="">Customer:</label> {customer.name}
                </div>
            </section>
        </>
    )
}