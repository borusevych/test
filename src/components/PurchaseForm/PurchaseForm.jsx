import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import * as Yup from 'yup'

export default function PurchaseForm() {

    const [values, setValues] = useState('');
    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('First name is required'),
        lastName: Yup.string().required('Last name is required'),
        country: Yup.string().required('Country is required'),
        city: Yup.string().required('City is required'),
        address: Yup.string().required('Address is required'),
        code: Yup.string()
        .matches(/^\d{5}$/, 'Postal code must be exactly 5 digits')
        .required('Postal code is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        tel: Yup.string()
        .matches(
            /^(\+\d{1,3}[- ]?)?\d{10}$/,
            'Phone number must be 10 digits'
        )
        .required('Phone number is required')
    })
    const initialValues ={
        firstName: '',
        lastName: '',
        country: '',
        city: '',
        address: '',
        code: '',
        email: '',
        tel: ''
    };
    function onSubmit(v) {
        console.log('submit', v);
        setValues(v);

    }

    return (
        <>
                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                >
                    <Form className="form">
                    <p className="form-header">Billing Details</p>
                        <div className="form-wrapper">
                            <div className='form__input-wrapper'>
                                <label htmlFor="firstName" className='form__label'>First name</label>
                                <Field type='text' name='firstName' id='firstName' className='form__field'/>
                                <ErrorMessage name='firstName' component='div'/>
                            </div>
                            <div className='form__input-wrapper'>
                                <label htmlFor="lastName" className='form__label'>Last name</label>
                                <Field type='text' name='lastName' id='lastName' className='form__field'/>
                                <ErrorMessage name='lastName' component='div'/>
                            </div>
                        </div>
                        <div className="form-wrapper">
                            <div className='form__input-wrapper'>
                                <label htmlFor="country" className='form__label'>Country</label>
                                <Field type='text' name='country' id='country' className='form__field'/>
                                <ErrorMessage name='country' component='div'/>
                            </div>
                            <div className='form__input-wrapper'>
                                <label htmlFor="city" className='form__label'>City</label>
                                <Field type='text' name='city' id='city' className='form__field'/>
                                <ErrorMessage name='city' component='div'/>
                            </div>
                        </div>
                        <div className="form-wrapper">
                            <div className='form__input-wrapper'>
                                <label htmlFor="address" className='form__label'>Address</label>
                                <Field type='text' name='address' id='address' className='form__field'/>
                                <ErrorMessage name='address' component='div'/>
                            </div>
                            <div className='form__input-wrapper'>
                                <label htmlFor="code" className='form__label'>Postal code</label>
                                <Field type='text' name='code' id='code' className='form__field'/>
                                <ErrorMessage name='code' component='div'/>
                            </div>
                        </div>
                        <div className="form-wrapper">
                            <div className='form__input-wrapper'>
                                <label htmlFor="email" className='form__label'>Email</label>
                                <Field type='email' name='email' id='email' className='form__field'/>
                                <ErrorMessage name='email' component='div'/>
                            </div>
                            <div className='form__input-wrapper'>
                                <label htmlFor="tel" className='form__label'>Phone</label>
                                <Field type='tel' name='tel' id='tel' className='form__field'/>
                                <ErrorMessage name='tel' component='div'/>
                            </div>
                        </div>
                        
                        <button id='delivery' type='submit'>Continue to delivery</button>
                    </Form>
                </Formik>
                {values && <p style={{color:'#8A33FD', fontSize: '30px', fontWeight: 'bold'}}>Hurray!</p>}
        </>
    )
}

