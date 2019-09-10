import React, { Component } from "react";
import AdminLayout from "../../../Hoc/AdminLayout";

import FormFiled from "../../ui/formField";
import { validate } from "../../ui/misc";

class AddEditMatch extends Component {
  state = {
    matchId: "",
    formType: "",
    formError: false,
    formSuccess: "",
    teams: [],
    formData: {
      date: {
        element: "input",
        value: "",
        config: {
          label: "Event date",
          name: "date_input",
          type: "date"
        },
        validation: {
          required: true
        },
        valid: false,
        validationMessage: "",
        showlabel: true
      },
      local: {
        element: "select",
        value: "",
        config: {
          label: "Select a local team",
          name: "select_local",
          type: "select",
          options: []
        },
        validation: {
          required: true
        },
        valid: false,
        validationMessage: "",
        showlabel: false
      }
    }
  };

  render() {
    return (
      <AdminLayout>
        <div className="editmatch_dialog_wrapper">
          <h2>{this.state.formType}</h2>

          <div>
            <form action="" onSubmit={(event) => this.submitForm(event)}>
              <FormFiled
                id={"date"}
                formData={this.state.formData.date}
                change={element => this.updateForm(element)}
              />

              <FormFiled
                id={"local"}
                formData={this.state.formData.local}
                change={element => this.updateForm(element)}
              />
            </form>
          </div>
        </div>
      </AdminLayout>
    );
  }
}

export default AddEditMatch;
