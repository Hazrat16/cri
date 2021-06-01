import {faGlobe, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <div>
            <div>
                <div className="layout" style={{backgroundColor:'#EC3237'}} >
                    <div className="layout__primary text-white d-flex">
                        <p><FontAwesomeIcon icon={faPhoneAlt} size="lg"/></p>
                        <p className="ml-2">Toll Free 1800 200 1234</p>
                    </div>
                    <div className="layout__primary text-white d-flex">
                        <p className='m-0'><img src="https://lh3.googleusercontent.com/proxy/fwIHjc87cCqTqu6biKXfmyuzgP9otXR90UyOQIZNV7gB_1OoZQnOJK_GHJjuUwrGOx_HMRNhmj7ERelj21Aj1zHA6pBZS-6DfoCiuHO92YO5oboU8wntI1CzetOmotFain9M-Yy2elaRU6sGjdw3BCeqiMepEZzchomXY8p_LgT1ZqLJPpnzB_mH9gcZqBE7" alt="" style={{width:'30px'}}/></p>
                        <p className="ml-2">www.facebook.com/cripumps</p>
                    </div>
                    <div className="layout__primary text-white d-flex">
                        <p><FontAwesomeIcon icon={faGlobe} size="lg"/></p>
                        <p className="ml-2">www.crigroups.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;