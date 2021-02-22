import React from 'react';

import Spinner from '../Spinner/spinner'

const WithSpinner = WrappedComponent => 
    ({ isLoading, ...otherProps }) => {
        return isLoading ? (
            <Spinner/>
        ) : (
            <WrappedComponent {...otherProps} />
        )
    }

export default WithSpinner;