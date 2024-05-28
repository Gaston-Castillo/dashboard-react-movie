import React from 'react';

import Contenrowmovies from './Contenrrowmovies'
import { Contenrowlistmovie } from './Contentrowlastmovie';
import Contenrowgeneres from './Contenrowgenres';

const Contenrowtop  =function () {
    return (

<div class="container-fluid">
            {/* Content Row Top */}
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">App Dashboard</h1>
        </div>
    
        
        <Contenrowmovies/>

    <Contenrowlistmovie/>  

        <Contenrowgeneres/>
        
        </div>
    
    )
}

export default Contenrowtop