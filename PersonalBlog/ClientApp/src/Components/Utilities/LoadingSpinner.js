import React from 'react';
import loadingSpinner from '../../img/loadingSpinner.svg';

const styles = {
    display: 'block',
    width: '70px',
    margin:'0 auto'
}

const LoadingSpinner = () => (<img src={loadingSpinner} alt="" style={styles} />)

export default LoadingSpinner;