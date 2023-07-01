import React from 'react';
import loadingGif from './loading.gif'; //path of the loading gif image

const Spinner = () => {
    const styles = {
        spinnerAlign: {
            position: "relative"
        },
        spinnerDesign: {
            width: '50px', 
            margin: 'auto', 
            display: 'block',
            top: "50%",
            left: "50%",
            position: "absolute",
            transform: "translate(-50%, -50%)",
            fontSize: "18px",
        },
      };

    return (
        <div className={styles.spinnerAlign}>
            <img src={loadingGif} alt="Loading..." style={styles.spinnerDesign}/>
        </div>
    );
}

export default Spinner;
