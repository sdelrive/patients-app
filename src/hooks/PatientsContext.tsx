import { createContext, useContext, useEffect, useState } from "react";
import { getPatients, type Patient } from "../services/patientService";

export type { Patient };

interface PatientContextType {
    patients: Patient[];
    isLoading: boolean;
    selectedPatientId: string | null;
    setSelectedPatientId: React.Dispatch<React.SetStateAction<string | null>>;
    setPatients: React.Dispatch<React.SetStateAction<Patient[]>>;
    popUp: { color: string, message: string };
    setPopUp: React.Dispatch<React.SetStateAction<{ color: string, message: string }>>;
}

const PatientContext = createContext<PatientContextType | undefined>(undefined);

export function PatientsContextProvider({ children }: { children: React.ReactNode }) {
    const [patients, setPatients] = useState<Patient[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedPatientId, setSelectedPatientId] = useState<string | null>(null);
    const [popUp, setPopUp] = useState<{ color: string, message: string }>({ color: "", message: "" });

    useEffect(() => {
        const fetchPatients = async () => {
            try {
                const data = await getPatients();
                setPatients(data)
            } catch (error) {
                console.error("Error fetching patients:", error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchPatients()
    }, [])

    const value = {
        patients,
        isLoading,
        selectedPatientId,
        setSelectedPatientId,
        setPatients,
        popUp,
        setPopUp
    };

    return (
        <PatientContext.Provider value={value}>
            {children}
        </PatientContext.Provider>
    )
}

export const usePatients = () => {
    const context = useContext(PatientContext);
    if (context === undefined) {
        throw new Error('usePatients must be used within a PatientsContextProvider');
    }
    return context;
}