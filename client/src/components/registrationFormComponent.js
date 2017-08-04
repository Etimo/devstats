import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { compose } from 'redux';

class RegistrationForm extends Component {

    componentDidMount() {
        const initData = {
            "name": this.props.name || "James Lester",
            "skills": this.props.skills || "Assembler, Micro Services",
            "age": this.props.age || 66,
            "salary": this.props.salary || 25000,
            "currency": this.props.currency || "EUR",
            "experience": this.props.experience || 55,
            "currentTech": this.props.currentTech || "Assembler, Go",
            "location": this.props.location || "San Jose"
        };

        this.props.initialize(initData);
    }

    handleFormSubmit(formProps) {
        this.props.onSubmit(formProps);
    }

    render() {

        const { handleSubmit, submitting } = this.props;

        const renderField = ({ input, label, type, required }) => (
            <div>
                <label>{label}</label>
                <div>
                    <input {...input} placeholder={label} type={type} required={required} />
                </div>
            </div>
        );

        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <Field label="Name" name="name" component={renderField} type="text" required="true"/>
                <Field label="Skills" name="skills" component={renderField} type="text" />
                <Field label="Age" name="age" component={renderField} type="number" />
                <Field label="Salary" name="salary" component={renderField} type="number" />
                <Field label="Currency" name="currency" component={renderField} type="text" />
                <Field label="Experience" name="experience" component={renderField} type="number" />
                <Field label="Tech you work with right now..." name="currentTech" component={renderField} type="text" />
                <Field label="Location" name="location" component={renderField} type="text" />
                <div>
                    <button disabled={submitting} type="submit">Send</button>
                </div>
            </form>
        );
    }
}

export default compose(reduxForm({
    form: 'registrationForm'
}))(RegistrationForm);
