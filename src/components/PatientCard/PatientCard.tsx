import { useState } from "react";
import './PatientCard.scss'
import { usePatients, type Patient } from "../../hooks/PatientsContext";


const DefaultAvatar = "https://img.freepik.com/vector-gratis/circulo-azul-usuario-blanco_78370-4707.jpg?semt=ais_hybrid&w=740&q=80"

export const PatientCard = ({ patient }: { patient: Patient }) => {
    const { setSelectedPatientId } = usePatients();



    const [imgError, setImgError] = useState(false);

    const handleModal = () => {
        setSelectedPatientId(patient.id)
    }

    return (
        <>
            <div className="patient-card">
                <div className="patient-body">
                    <div className="patient-avatar">
                        <img src={imgError ? DefaultAvatar : patient.avatar} alt="" onError={() => setImgError(true)} />
                    </div>

                    <div className="patient-info">
                        <div className="patient-info-name">
                            <p className="patient-info-label"> Name </p>
                            <p>{patient.name}</p>
                        </div>

                        <div className="patient-info-id">
                            <p className="patient-info-label"> ID </p>
                            <p>{patient.id}</p>
                        </div>
                    </div>
                </div>

                <div className="patient-footer">
                    <button onClick={() => handleModal()}>Profile</button>
                </div>
            </div>
        </>
    )
}

