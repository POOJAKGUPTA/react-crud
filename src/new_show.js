import React from "react";
import ReactDOM from "react-dom";

// fake async validation

const validateUserName = userName => {
  return new Promise((res, rej) =>
    setTimeout(() => res(userName === "React" ? "Name exists!" : false), 1000)
  );
};

// validations

const validate = ({ firstName, lastName }) => {
  return {
    firstName:
      !firstName || firstName.trim().length === 0
        ? "First Name is required"
        : false,
    lastName:
      !lastName || lastName.trim().length === 0
        ? "Last Name is required"
        : false
  };
};

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.intitialState;
  }

  onChange = event => {
    // taken straight from the official React Docs
    // https://reactjs.org/docs/forms.html#handling-multiple-inputs
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.update(name, value);
  };

  update = (name, value) => {
    if (this.props.update) {
      this.setState(state => this.props.update(state, name, value));
    } else {
      this.setState(state => ({
        ...state,
        [name]: value
      }));
    }
  };

  updateState = fn => {
    this.setState(state => fn(state));
  };
  render() {
    return this.props.render({
      ...this.props,
      form: this.state,
      onChange: this.onChange,
      udpate: this.update,
      updateState: this.updateState
    });
  }
}

const errorStyle = { color: "red" };

const CheckBox = ({ label, error, onChange, name, value }) => (
  <label>
    {label}:
    <input name={name} type="checkbox" checked={value} onChange={onChange} />
    {error && <span style={errorStyle}>{error}</span>}
  </label>
);

const Input = ({ label, error, onChange, name, value }) => (
  <label>
    {label}:
    <input name={name} type="text" value={value} onChange={onChange} />
    {error && <span style={errorStyle}>{error}</span>}
  </label>
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { errors: { userName: false } };
  }
  validate = e => {
    validateUserName(e.target.value).then(validationResult =>
      this.setState(({ errors }) => ({
        errors: {
          ...errors,
          userName: validationResult
        }
      }))
    );
  };
  update = data => {
    console.log(data);
  };
  render() {
    return (
      <Form
        intitialState={{
          values: {
            active: false,
            firstName: "",
            lastName: ""
          },
          submitted: false,
          changedFields: {}
        }}
        update={(state, name, value) => {
          return {
            ...state,
            values: { ...state.values, [name]: value },
            changedFields: { ...state.changedFields, [name]: true }
          };
        }}
        onSubmit={data => this.update(data)}
        asyncErrors={this.state.errors}
        asyncValidateUserName={this.validate}
        render={({
          form,
          onChange,
          asyncErrors,
          asyncValidateUserName,
          onSubmit,
          updateState
        }) => {
          const { values, changedFields, submitted } = form;
          const errors = validate(values);
          const hasErrors =
            errors.firstName || errors.lastName || errors.userName;
          const showErrors = submitted && hasErrors;

          return (
            <form onSubmit={e => e.preventDefault()}>
              <CheckBox
                label="Active"
                name="active"
                type="checkbox"
                checked={values.active}
                onChange={onChange}
              />

              <br />
              <Input
                label="UserName"
                name="userName"
                type="text"
                value={values.userName}
                onChange={asyncValidateUserName}
                error={showErrors && asyncErrors.userName}
              />

              <br />
              <Input
                label="First Name *"
                name="firstName"
                type="text"
                value={values.userName}
                onChange={onChange}
                error={changedFields.firstName && errors.firstName}
              />
              <br />
              <Input
                label="Last Name *"
                name="lastName"
                type="text"
                value={values.lastName}
                onChange={onChange}
                error={changedFields.lastName && errors.lastName}
              />
              <br />
              <div>
                Form has been Submitted already ? {submitted ? "Yes" : "No"}
              </div>
              <button
                onClick={() => {
                  updateState(state => ({ ...state, submitted: true }));
                  onSubmit(values);
                }}
                disabled={hasErrors}
              >
                Submit
              </button>
              <br />
              <div>
                Type React in UserName field to trigger an async validation
                error.
              </div>
            </form>
          );
        }}
      />
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
