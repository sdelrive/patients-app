import type { Patient } from "../services/patientService";

export const randomPatientId = (patients: Patient[]): number => {
    const randomId = Math.floor(Math.random() * 1000);

    // check id is unique
    const isUnique = patients.every(patient => patient.id !== String(randomId));
    if (isUnique) {
        return randomId;
    } else {
        return randomPatientId(patients);
    }

}


export const validateForm = (patient: any) => {
    if (patient.name && patient.description && patient.website && patient.avatar) {
        return true;
    }
}