import './PopUp.scss'
import { usePatients } from "../../hooks/PatientsContext";

export const PopUp = ({ color, message }: { color: string, message: string }) => {
    const { setPopUp } = usePatients();

    return (
        <div className={`pop-up ${color}`}>

            <div className='pop-up-close' onClick={() => setPopUp({ color: "", message: "" })}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="24px"
                    height="24px"
                >
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
            </div>
            <div className={`pop-up-alert`}>
                <h1>{message}</h1>
            </div>
        </div>
    )
}