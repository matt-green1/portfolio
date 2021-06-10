import React from 'react'
import { Header, Checkbox } from 'semantic-ui-react'

class Greeting extends React.Component {

    render() {
        return(
            <Header as="h1" id="greeting">
                <span id="wave">
                    {
                    !this.props.blurbStatus
                    ?
                    <>
                    ✋
                    </>
                    :
                    <>
                    🐽
                    </>
                    }
                </span>&nbsp;
                    {
                    !this.props.blurbStatus
                    ?
                    <>
                    Hey, I'm Matt!  
                    </>
                    :
                    <>
                    Eyhay, I'mway Attmay!
                    </>
                    }
                <span id="pigspan">
                    <Checkbox 
                                className="pigtoggle"
                                toggle
                                onChange={this.props.switchBlurb}
                                checked={this.props.blurbStatus}
                            >
                                        
                    </Checkbox>
                    <span id="pigemoji">
                        🐖
                    </span>
                </span>
            </Header>
        )
    }   
}
export default Greeting