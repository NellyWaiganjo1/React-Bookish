import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginModal = ({ isOpen, toggle }) => {
    const initialValues = {
        username: '',
        password: ''
    };

    const validationSchema = Yup.object({        
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required')
    });

    const handleLogin = (values, { setSubmitting }) => {
        // Simulate login logic
        console.log('Logging in with:', values.username, values.password);

        // Close the modal after login attempt
        toggle();

        // Reset form fields
        setSubmitting(false);
    };

    return (
        <Modal isOpen={isOpen} toggle={toggle}>
            <ModalHeader toggle={toggle}>Login</ModalHeader>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleLogin}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <ModalBody>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <Field
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    name="username"
                                />
                                <ErrorMessage name="username" component="div" className="text-danger" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <Field
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                />
                                <ErrorMessage name="password" component="div" className="text-danger" />
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" type="submit" disabled={isSubmitting}>
                                {isSubmitting ? 'Logging in...' : 'Login'}
                            </Button>
                            <Button color="secondary" onClick={toggle} disabled={isSubmitting}>
                                Cancel
                            </Button>
                        </ModalFooter>
                    </Form>
                )}
            </Formik>
        </Modal>
    );
};

export default LoginModal;
