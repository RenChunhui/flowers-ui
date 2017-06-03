import React from 'react';
import Button from './../components/Button';

class ButtonView extends React.Component {

    render() {
        return(
            <div>
                <Button label="LIGHT" style="light"/>
                <Button label="INFO" style="info"/>
                <Button label="DANGER" style="danger"/>
                <Button label="PRIMARY" style="primary"/>
                <Button label="WARNING" style="warning"/>
                <Button label="SUCCESS" style="success"/>
                <Button label="DARK" style="dark"/> 
            </div>
        )
    }
}

export default ButtonView;