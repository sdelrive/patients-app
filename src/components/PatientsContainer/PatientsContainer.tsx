import { useMemo } from 'react';
import { PatientCard } from '../PatientCard/PatientCard'
import './PatientsContainer.scss'
import { usePatients } from '../../hooks/PatientsContext';
import { PatientModal } from '../PatientModal/PatientModal';

export const PatientsContainer = () => {

    const { patients, selectedPatientId } = usePatients();

    const selectedPatient = useMemo(() => {
        return patients.find(p => p.id === selectedPatientId);
    }, [patients, selectedPatientId]);


    return (
        <>
            <div className={`patients-container `}>
                <div className='patients-search-bar'>
                </div>

                {patients.map((patient: any) => (
                    <PatientCard key={patient.id} patient={patient} />
                ))}
            </div>
            {selectedPatient && (
                <PatientModal patient={selectedPatient} />
            )}
        </>
    )
}