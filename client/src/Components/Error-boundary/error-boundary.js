import React, { Component } from 'react';
import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText, ErrorText } from './error-boundary.styles.jsx';

class ErrorBoundary extends Component {

    state = {
        hasErrors: false
    }

    static getDerivedStateFromError(error) {
        return { hasErrors: true };
    }

    componentDidCatch(error, info) {
        console.log(error);
    }

    render() {
        if (this.state.hasErrors) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl={'https://i.imgur.com/QIxIKBH.png'} />
                    <ErrorImageText> This Page is a Ghost! </ErrorImageText>
                    <ErrorText>Once alive and now dead, this ghost appears to have some unfinished business. Could it be with you? Or the treasure hidden under the floorboards of the old mansion in the hills that may never reach its rightful owner, a compassionate school teacher in Brooklyn.</ErrorText>
                </ErrorImageOverlay>
             )
        }

        return this.props.children
    }
}

export default ErrorBoundary;