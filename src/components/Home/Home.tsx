import './Home.scss'
import { PatientsContainer } from "../PatientsContainer/PatientsContainer";
import { ComplementPatient } from '../ComplementPatient/ComplementPatient';
import { PopUp } from '../PopUp/PopUp';
import { usePatients } from '../../hooks/PatientsContext';

function Home() {

    const { popUp } = usePatients();
    return (
        <div className="home">
            <PatientsContainer />
            <div className="home-complement-patient">
                <ComplementPatient />
            </div>
            {

                popUp.color && <PopUp color={popUp.color} message={popUp.message} />
            }
        </div>
    )
}

export default Home
