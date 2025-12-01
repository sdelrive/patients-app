import { useState } from "react"
import { usePatients, type Patient } from "../../hooks/PatientsContext";
import './PatientModal.scss'
import { formatDate } from "../../utils/dateUtils";



const DefaultAvatar = "https://img.freepik.com/vector-gratis/circulo-azul-usuario-blanco_78370-4707.jpg?semt=ais_hybrid&w=740&q=80"
export const PatientModal = ({ patient }: { patient: Patient }) => {

    const [editMode, setEditMode] = useState(false)

    const [imgError, setImgError] = useState(false);

    const context = usePatients()
    const { patients, setPatients, setSelectedPatientId, setPopUp } = context;

    const [patientData, setPatientData] = useState(patient)

    const handleSave = () => {

        // para una db real en realidad usaria un update, no seria necesario borrar el usuario y crearlo de nuevo
        const updatedPatients: Patient[] = patients?.filter((p) => p.id !== patientData.id)

        updatedPatients?.push(patientData)

        setPatients(updatedPatients)

        setPopUp({ color: "green", message: "Patient edited" })
        setSelectedPatientId(null)
        setEditMode(false)
    }


    const handleCloseModal = () => {
        setSelectedPatientId(null)
    }

    const handleDelete = () => {
        const updatedPatients: Patient[] = patients?.filter((p) => p.id !== patientData.id)
        setPatients(updatedPatients)
        setPopUp({ color: "red", message: "Patient deleted" })
        setSelectedPatientId(null)
    }


    return (
        <>
            <div className="patient-modal">
                <div className="patient-modal-close" onClick={() => handleCloseModal()}>   <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="24px"
                    height="24px"
                >
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg> </div>

                <div className="patient-modal-content">
                    <div className="patient-modal-image">

                        <img src={imgError ? DefaultAvatar : patient.avatar} alt="" onError={() => setImgError(true)} />
                        <div className="patient-modal-buttons">
                            <button onClick={() => setEditMode(true)}>Editar</button>
                            <button onClick={() => handleDelete()}>Eliminar</button>
                        </div>

                    </div>


                    <div className="patient-modal-info">
                        <div className="patient-modal-info-name">
                            <p className="patient-info-label"> Nombre </p>
                            {
                                editMode ? (
                                    <input type="text"
                                        className="patient-info-input"
                                        value={patientData.name}
                                        onChange={(e) => setPatientData({ ...patientData, name: e.target.value })}
                                    />
                                ) : (
                                    <p className="patient-info-value">{patientData.name}</p>
                                )
                            }

                        </div>
                        <hr />
                        <div className="patient-modal-info-id">
                            <p className="patient-info-label"> Patient Id </p>


                            <p className="patient-info-value">{patient.id}</p>

                        </div>
                        <hr />
                        <div className="patient-modal-info-website">
                            <p className="patient-info-label"> Website </p>
                            {
                                editMode ? (
                                    <input type="text" className="patient-info-input" value={patientData.website} onChange={(e) => setPatientData({ ...patientData, website: e.target.value })} />
                                ) : (
                                    <p className="patient-info-value">{patient.website}</p>
                                )
                            }
                        </div>
                        <hr />
                        <div className="patient-modal-info-description" >
                            <p className="patient-info-label"> Description </p>
                            {
                                editMode ? (
                                    <input type="text" className="patient-info-input" value={patientData.description} onChange={(e) => setPatientData({ ...patientData, description: e.target.value })} />
                                ) : (
                                    <p className="patient-info-value">{patient.description}</p>
                                )
                            }
                        </div>
                        <hr />


                        <div className="patient-modal-info-created">
                            <p className="patient-info-label"> Registered </p>
                            <p>{formatDate(patient.createdAt)}</p>
                        </div>


                        {
                            editMode && (
                                <div className="patient-modal-info-buttons">
                                    <button onClick={() => setEditMode(false)}>Cancelar</button>
                                    <button onClick={() => handleSave()}>Guardar</button>
                                </div>
                            )
                        }
                    </div>

                </div>
            </div>

            <div className="patients-modal-overlay">
            </div>
        </>
    )
}