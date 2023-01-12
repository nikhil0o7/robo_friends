import React, { Component } from "react";


class ErrorBoundary extends Component {
        constructor(props){
            super(props);
            this.state = {
                hasError: false
            }
        }
        render(){
            const { hasError } = this.state;
            if(hasError){

                return <h1>Ooops. There is an error.</h1>
            }
            return this.props.children
        }

}

export default ErrorBoundary;