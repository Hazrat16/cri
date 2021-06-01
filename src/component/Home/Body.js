import React from 'react';
import './Body.css';
import receive from '../../images/receive.png';
import trophy from '../../images/trophy.png';
import tools from '../../images/tools.png'

const Body = () => {
    return (
        <div className='body'>
            <div className="layout">
                <div className="layout__primary">
                    <img src={trophy} alt="" style={{ width: '104%' }} />
                </div>
                <div className="layout__secondary">
                    <h6 style={{ fontWeight: 'bold' }}>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h6>
                    <ul>
                        <li>
                            <small>
                                C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.
                            </small>
                        </li>
                        <li>
                            <small>
                                C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.
                            </small>
                        </li>
                    </ul>
                    <img src={receive} alt="" style={{ width: '90%' }} />
                    <h6 className="pt-4">
                        Government of India has awarded the <span style={{ fontWeight: 'bold' }}> "National Energy Conservation Award 2018"</span>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.

                    </h6>
                </div>
            </div>
            <div className="py-2 text-center body-bottom">
                <h6>
                    INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.
                </h6>
                <img src={tools} alt="" style={{ width: '100%' }} />
                <h6>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</h6>
            </div>
            
            <div className="py-3 text-center">
                <h6 style={{ fontWeight: 'bold' }}>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h6>
                <small>CHEMICALS | PROCESS POWER WATER | WASTE WATER OILS | GAS PHARMA SUGARS | DISTILLERIES PAPER | PULP MARINE | DEFENCE METAL | MINING FOOD | BEVERAGE PETROCHEMICAL | REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE | RESIDENTIAL</small>
            </div>
        </div>
    );
};

export default Body;