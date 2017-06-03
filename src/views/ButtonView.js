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

                <Button label="LIGHT" type='raised' style="light"/>
                <Button label="INFO" type='raised' style="info"/>
                <Button label="DANGER" type='raised'  type='raised' style="danger"/>
                <Button label="PRIMARY" type='raised'  style="primary"/>
                <Button label="WARNING" type='raised'  style="warning"/>
                <Button label="SUCCESS" type='raised'  style="success"/>
                <Button label="DARK" type='raised' style="dark"/> 
            </div>
        )
    }
}

export default ButtonView;