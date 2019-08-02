import React from 'react';
import Layout from '../components/layout';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './page_styles/lets_talk.scss'

function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
}
class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: ''};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({name: event.target.value});
    }

    handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        fetch('/', {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: encode({
                'form-name': form.getAttribute('name'),
                ...this.state,
            }),
        })

    };


    render() {
        return (
            <Layout>

                <h1 className={'nameHeader'}>I hope we can talk soon {this.state.name}.</h1>
                <form className={'form'} name='contactMe' data-netlify='true' data-netlify-honeypot='bot-field'
                      method='post' onSubmit={this.handleSubmit}>
                    <input type="hidden" name="form-name" value="contactMe"/>
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
            </Layout>

        )
    }
}
export default NameForm