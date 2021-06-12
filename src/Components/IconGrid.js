import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Grid, Image, Header } from 'semantic-ui-react'
import github from "../images/about_images/github.png"
import linkedin from "../images/about_images/linkedin.png"

class IconGrid extends React.Component {

    state = {
        value: "magreen118@gmail.com",
        copied: false
    }

    emailCopyHelper = () => {
        this.setState({copied: true})
        setTimeout(() => {
            this.setState({copied: false});
            }, 800);
    };

    render() {
        return(
            <Grid divided='vertically' >
                <Grid.Row columns={3} id="linkiconrow">
                    <Grid.Column className="linkicons">
                        <Image src={linkedin} alt="linkedin" className="hvr-skew" id="linkedin" href="https://linkedin.com/in/matthewgreen123" target="_blank" />
                    </Grid.Column>
                    <Grid.Column className="linkicons">
                        <Image src={github} alt="github" className="hvr-skew" id="github" href="https://github.com/matt-green1" target="_blank"/>
                    </Grid.Column>
                    <Grid.Column className="linkicons">
                        <CopyToClipboard text={this.state.value} onCopy={() => this.emailCopyHelper()}>
                            <Header as="h1" id="emailsymbol" className="hvr-skew">
                                @
                            </Header>
                        </CopyToClipboard>
                    </Grid.Column>
                    {this.state.copied ? <span id="emailcopytext">Email Copied!</span> : null}
                </Grid.Row>
            </Grid>
        )
    }

}

export default IconGrid