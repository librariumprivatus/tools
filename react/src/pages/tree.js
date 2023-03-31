
import React from 'react';

import FetcJson from "./fetcJson";
import Apples from "./Apples";
import Biblioteka from "./Biblioteka";

function Tree() {
    return(
        <div>
            <h1>Tree</h1>
            <Biblioteka></Biblioteka>
            <FetcJson></FetcJson>
            <Apples></Apples>
        </div>
    );
}

export default Tree;
