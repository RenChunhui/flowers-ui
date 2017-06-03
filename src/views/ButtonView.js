import React from 'react';
import Button from './../components/Button';

class ButtonView extends React.Component {

    render() {
        return(
            <div>
                <Button label="Button" style="light"/>
                <Button label="Button" style="info"/>
            </div>
        )
    }
}

export default ButtonView;