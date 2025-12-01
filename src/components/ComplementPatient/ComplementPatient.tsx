import { useState } from "react";
import './ComplementPatient.scss'
import { usePatients } from "../../hooks/PatientsContext";
import { randomPatientId, validateForm } from "../../utils/createUserUtils";

export const ComplementPatient = () => {

    const [addPatient, setAddPatient] = useState(true);
    const [newPatient, setNewPatient] = useState({
        name: '',
        description: '',
        website: '',
        avatar: '',
        createdAt: '',
        id: ''
    });

    const { setPatients, patients, setPopUp } = usePatients();

    const handleConfirm = () => {
        const newID = randomPatientId(patients)
        const createdAt = String(new Date());

        if (validateForm(newPatient)) {
            setPatients([...patients, { ...newPatient, createdAt, id: String(newID) }]);
            setAddPatient(false);
            setPopUp({ color: "green", message: "Patient created" })
        }
        else {
            setPopUp({ color: "red", message: "Error creating patient" })

        }
    }


    return (
        <div className="complement-patient">
            <div className="add-patient">
                <button className="add-patient-button" onClick={() => setAddPatient(!addPatient)}>Add Patient</button>

                {
                    addPatient && (
                        <div className="add-patient-form">
                            <input type="text" placeholder="Name" value={newPatient.name} onChange={(e) => setNewPatient({ ...newPatient, name: e.target.value })} />
                            <input type="text" placeholder="Description" value={newPatient.description} onChange={(e) => setNewPatient({ ...newPatient, description: e.target.value })} />
                            <input type="text" placeholder="Website" value={newPatient.website} onChange={(e) => setNewPatient({ ...newPatient, website: e.target.value })} />
                            <input type="text" placeholder="Image URL" value={newPatient.avatar} onChange={(e) => setNewPatient({ ...newPatient, avatar: e.target.value })} />

                            <button className="add-patient-button-confirm" onClick={handleConfirm}>Confirm</button>
                        </div>
                    )
                }

            </div>

            <div className="complement-patient-info">

            </div>

        </div>
    )
}