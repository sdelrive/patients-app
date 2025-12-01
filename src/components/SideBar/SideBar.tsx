
import './Sidebar.scss';
import { HamburguerMenu } from '../HamburguerMenu/HamburguerMenu';




const menuList = [
    {
        icon: 'logos/patient.svg',
        text: 'Patients'
    },
    {
        icon: 'logos/home.svg',
        text: 'Dashboard'
    },
    {
        icon: 'logos/message.svg',
        text: 'Messages'
    },
    {
        icon: 'logos/calendar.svg',
        text: 'Calendar'
    }
]





export const Sidebar = () => {



    return (
        <div className="sidebar">
            <div className="sidebar__title">
                <i className="fa-solid fa-user"></i>

                <div className="sidebar__title-text"> Patients App</div>
            </div>

            <nav className="sidebar__menu-list">
                <div className="sidebar__menu-list-item">
                    <img src="logos/home.svg" alt="" />

                    Dashboard
                </div>
                <div className="sidebar__menu-list-item sidebar__menu-list-active">
                    <img src="logos/patient.svg" alt="" />

                    Patients
                </div>
                <div className="sidebar__menu-list-item">
                    <img src="logos/message.svg" alt="" />

                    Messages
                </div>
                <div className="sidebar__menu-list-item">
                    <img src="logos/calendar.svg" alt="" />
                    Calendar
                </div>
            </nav>

            <div className="sidebar__hamburguer-menu">
                <HamburguerMenu menuList={menuList} />
            </div>
        </div>
    );
};