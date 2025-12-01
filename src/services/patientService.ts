export interface Patient {
    avatar: string;
    name: string;
    id: string;
    description: string;
    website: string;
    createdAt: string;
}

export const getPatients = async (): Promise<Patient[]> => {
    const response = await fetch('https://63bedcf7f5cfc0949b634fc8.mockapi.io/users');
    if (!response.ok) {
        throw new Error('Failed to fetch patients');
    }
    return await response.json();
};
