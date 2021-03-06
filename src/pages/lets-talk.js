import React from 'react';
import ReactDOM from 'react-dom';
import {navigateTo} from "gatsby-link";
import Layout from '../components/layout';
import SEO from "../components/seo"
import Thanks from "../components/thanks"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './page_styles/lets_talk.scss'

function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}


class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formSubmitted: false
        };

    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value});
    };

    handleSubmit = event => {
        this.setState({formSubmitted: true});
        event.preventDefault();
        const form = event.target;
        fetch("/", {
            method: "POST",
            headers: {"Content-Type": "application/x-www-form-urlencoded"},
            body: encode({
                "form-name": form.getAttribute("name"),
                ...this.state
            })
        });
    };


    render() {
        if (this.state.formSubmitted === false)
            return (
                <Layout>
                    <SEO
                        title={"Let's Talk"}
                        description={"Contact me!"}
                    />
                    <div className={'formContainer'} id={'formContainer'}>

                        <h1 className={'nameHeader'}>I hope we can talk soon {this.state.yourName}</h1>
                        <form name="contact"
                              method="post"
                              action=""
                              data-netlify="true"
                              data-netlify-honeypot="bot-field"
                              onSubmit={this.handleSubmit}
                        >
                            <input type="hidden" name="form-name" value="contact"/>
                            <Form.Group controlId="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control size={'lg'} type="text" name='yourName' placeholder="whats your name?"
                                              required
                                              onChange={this.handleChange}/>
                            </Form.Group>
                            <Form.Group controlId="emailAddress">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" name='yourEmail' placeholder="enter your email" size={'lg'}
                                              required
                                              onChange={this.handleChange}/>
                            </Form.Group>
                            <Form.Group controlId="message">
                                <Form.Label>Message</Form.Label>
                                <textarea className={"form-control"} name='yourMessage' rows={"7"} size={'lg'} required
                                          onChange={this.handleChange}></textarea>
                                <input type="hidden" name="bot-field" onChange={this.handleChange}/>
                            </Form.Group>

                            <Button type={'submit'} variant="secondary" size="lg" block>
                                <h3>submit</h3>
                            </Button>
                        </form>
                    </div>
                </Layout>

            ); else {
            return (
                <Layout>
                    <div className={'thanksContainer'}>

                        <Thanks yourName={this.state.yourName}/>
                    </div>
                </Layout>
            )
        }
    }
}
export default NameForm