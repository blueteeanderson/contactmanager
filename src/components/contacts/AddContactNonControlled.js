import React, { Component } from "react";

class AddContact extends Component {
  constructor(props) {
    super(props);

    this.nameInput = React.createRef();
    this.phoneInput = React.createRef();
    this.emailInput = React.createRef();
  }
  onSubmit = e => {
    e.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    };

    console.log(contact);
  };

  static defaultProps = {
    name: "Fred",
    email: "f@gmail.com",
    phone: "777-777-7777"
  };

  render() {
    const { name, email, phone } = this.props;

    return (
      <div>
        <div className="card mb-3">
          <div className="card-header">Add Contact</div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="name" />
                <input
                  type="text"
                  className="form-control form control-lg"
                  placeholder="Enter name"
                  name="name"
                  defaultValue={name}
                  ref={this.nameInput}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" />
                <input
                  type="email"
                  className="form-control form control-lg"
                  placeholder="Enter email"
                  name="email"
                  defaultValue={email}
                  ref={this.emailInput}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone" />
                <input
                  type="text"
                  className="form-control form control-lg"
                  placeholder="Enter phone"
                  name="phone"
                  defaultValue={phone}
                  ref={this.phoneInput}
                />
              </div>
              <input
                type="submit"
                value="Add Contact"
                className="btn btn-light btn-block"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddContact;
