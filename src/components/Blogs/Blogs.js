import React from 'react';
import { Accordion } from 'react-bootstrap'

const Blogs = () => {
    return (
        <div>
            <h2 className='text-white mt-3'>Blog</h2>
            <Accordion className='m-5'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Difference between authorization and authentication?</Accordion.Header>
                    <Accordion.Body>
                        Authentication is used to verify someone whereas Authorization is used to verify specific application ,data or app.Authentication verifies who is the user on the othen hand authorization determines what a user can access.Authentication is visible and changeable by user but authorization can not visible or changeable by user.Authentication works through passwords, one-time pins, biometric information,authorization works through settings that are implemented and maintained by the organization.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                    <Accordion.Body>
                        Google Firebase provides authentication features that helps us to authenticate my website.It is a perfect prototyping tool.Firebase reduce time and developer workload.It is also a google cloud service so that i can access many features.
                        We have many options besides firebase like Auth0, Back4App,AWS Amplify,Kuzzle,Okta,Microsoft Azure Active Directory.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>What other services does firebase provide other than authentication?</Accordion.Header>
                    <Accordion.Body>
                        By using firebase we can develop games , make products for web page , it also helps to performance optimizations.Firebase helps realtime Database Build serverless apps by storing and syncing JSON data between your users in near-realtime.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;