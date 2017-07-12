import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { compose } from 'redux';

class RegistrationForm extends Component {


    componentDidMount() {
        const initData = {
            "name": this.props.name || "Linus Torvalds",
            "skills": this.props.skills || "Linux, C, Git, React, Python",
            "age": this.props.age || 55,
            "salary": this.props.salary || 1200,
            "currency": this.props.currency || "EUR",
            "currentTech": this.props.currentTech || "React, Python",
            "location": this.props.location || "Helsingfors"
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
