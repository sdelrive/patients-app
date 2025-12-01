import { useState } from 'react';
import './HamburguerMenu.scss'
import { ComplementPatient } from '../ComplementPatient/ComplementPatient';


export const HamburguerMenu = ({ menuList }: { menuList: any }) => {


    const [menuOpen, setMenuOpen] = useState(false);


    return (
        <div className={`menu ${menuOpen ? 'open' : ''}`}>
            <a onClick={() => setMenuOpen(!menuOpen)} href="#" id="menu_btn" className="hamburguer-menu ">
                <span></span>
                <span></span>
                <span></span>
            </a>



            <div className={`menu-items contain faden`}>
                {
                    menuList.map((item: any) => (
                        < a > {item.text}</a>
                    ))
                }

                <a>
                    <ComplementPatient />
                </a>

            </div>
        </div >
    );
};