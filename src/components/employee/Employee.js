import React, { useState, useContext } from "react"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import { EmployeeContext } from "./EmployeeProvider"

export default ({ employee, location }) => {
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    const { deleteEmployee } = useContext(EmployeeContext)

    return (
        <>
            <li>
                <span className="fakeLink href" onClick={toggle}>{employee.name}</span>
                <span className="fakeLink icon--delete" onClick={() => {
                    deleteEmployee(employee)
                }}>🗑</span>
                </li>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    {employee.name}
                </ModalHeader>
                <ModalBody>
                    <div className="animal__breed">
                        <label className="label--animal">Address:</label> {employee.address}
                    </div>
                    <div className="animal__location">
                        <label className="label--animal">Location:</label> {employee.locationId}
                    </div>
                </ModalBody>
            </Modal>
        </>
    )
}