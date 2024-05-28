import React from 'react';
import Topbar from '../components/Topbar';
import Contenrowtop from './Contenrowtop'
import Footer from './Footer';



export const Contentwrapper = function () {

    return (
        <div id="content-wrapper" class="d-flex flex-column">
            {/* Content Wrapper */}

		

	    <Topbar/>

	    <Contenrowtop/>

        <Footer/> 
		

            {/* End of Content Wrapper */}
		</div>
    )
}

export default Contentwrapper 