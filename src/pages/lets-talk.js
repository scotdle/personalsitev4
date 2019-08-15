import React from 'react';
import Layout from '../components/layout';
import SEO from "../components/seo"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './page_styles/lets_talk.scss'


class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: ''};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({name: event.target.value});
    }



    render() {
        return (
            <Layout>
                <SEO
                    title={"Let's Talk"}
                    description={"Contact me!"}
                />
                <div className={'formContainer'}>
                <h1 className={'nameHeader'}>I hope we can talk soon {this.state.name}.</h1>
                <form className={'form'} name='contactMe' data-netlify='true' data-netlify-honeypot='bot-field'
                      method='post' action='#'>
                    <input type="hidden" name="contactMe"/>
                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control size={'lg'} type="text" name='yourName' placeholder="whats your name?"
                                      onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="emailAddress">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name='yourEmail' placeholder="enter your email" size={'lg'}/>
                    </Form.Group>
                    <Form.Group controlId="message">
                        <Form.Label>Message</Form.Label>
                        <textarea className={"form-control"} name='yourMessage' rows={"7"} size={'lg'}></textarea>
                        <input type="hidden" name="bot-field"/>
                    </Form.Group>
                </form>
                <p>
                </p>
                <Button type={'submit'} variant="secondary" size="lg" block>
                    <h3>submit</h3>
                </Button>
                </div>
            </Layout>

        )
    }
}
export default NameForm