import React from "react";
import preloader from "../../assets/images/loader-loading.gif"

let Preloader = () => {
    return <div style={{ backgroundColor: 'white' }}>
        <img src={preloader} alt="Данные загружаются"/>
    </div>
}
export default Preloader;