import React, { Component } from "react";
import AdminLayout from "../../../Hoc/AdminLayout";

import FormFiled from "../../ui/formField";
import { validate } from "../../ui/misc";
import Fileuploader from '../../ui/fileUploader';

import { firebaseDB, firebasePlayers, firebase } from "../../../firebase";

class AddEditPlayers extends Component {
  state = {
    playerId: "",
    formType: "",
    formError: false,
    formSuccess: "",
    defaultImg: "",
    formData: {
      name: {
        element: "input",
        value: "",
        config: {
          label: "Player Name",
          name: "name_input",
          type: "text"
        },
        validation: {
          required: true
        },
        valid: false,
        validationMessage: "",
        showlabel: true
      },
      lastname: {
        element: "input",
        value: "",
        config: {
          label: "Player LastName",
          name: "lastname_input",
          type: "text"
        },
        validation: {
          required: true
        },
        valid: false,
        validationMessage: "",
        showlabel: true
      },
      number: {
        element: "input",
        value: "",
        config: {
          label: "Player Number",
          name: "number_input",
          type: "text"
        },
        validation: {
          required: true
        },
        valid: false,
        validationMessage: "",
        showlabel: true
      },
      position: {
        element: "select",
        value: "",
        config: {
          label: "Select a position",
          name: "select_position",
          type: "select",
          options: [
            { key: "Keeper", value: "Keeper" },
            { key: "Defence", value: "Defence" },
            { key: "Midfield", value: "Midfield" },
            { key: "Striker", value: "Striker" }
          ]
        },
        validation: {
          required: true
        },
        valid: false,
        validationMessage: "",
        showlabel: true
      },
      image: {
        element: 'image',
        value: '',
        validation: {
          required: true
        },
        valid: false
      }
    }
  };

  componentDidMount() {
    const playerId = this.props.match.params.id;

    if(!playerId) {
      /// Add player
      this.setState({
        formType: 'Add player'
      })
    } else {
      /// Edit player
    }
  }

  updateForm(element, content='') {
    const newFormData = { ...this.state.formData };
    const newElement = { ...newFormData[element.id] };

    if(content === '') {
      newElement.value = element.event.target.value;
    } else {
      newElement.value = content;
    }

    let validData = validate(newElement);
    newElement.valid = validData[0];
    newElement.validationMessage = validData[1];

    newFormData[element.id] = newElement;

    this.setState({
      formError: false,
      formData: newFormData
    });
  }

  submitForm(event) {
    event.preventDefault();

    let dataToSubmit = {};
    let formIsValid = true;

    for (let key in this.state.formData) {
      dataToSubmit[key] = this.state.formData[key].value;
      formIsValid = this.state.formData[key].valid && formIsValid;
    }

    if (formIsValid) {
      /// submit form
     if(this.state.formType === 'Edit player') {
       /// Edit player function
     } else {
       /// Add player function
       firebasePlayers.push(dataToSubmit)
          .then(() => {
            this.props.history.push('/admin_players');
          })
          .catch(e=> {
            this.setState({
              formError: true
            })
          })
     }
    } else {
      this.setState({
        formError: true
      });
    }
  }

  resetImage = () => {
    const newFormData = {...this.state.formData}
    newFormData['image'].value = '';
    newFormData['image'].valid = false;

    this.setState({
      defaultImg: '',
      formData: newFormData
    })
  }

  storeFilename = (filename) => {
    this.updateForm({id: 'image'}, filename);
  }

  render() {
    return (
      <AdminLayout>
        <div className="editplayers_dialog_wrapper">
          <h2>{this.state.formType}</h2>

          <div>
            <form action="" onSubmit={event => this.submitForm(event)}>

              <Fileuploader 
                dir="players"
                tag={"Player Image"}
                defaultImg={this.state.defaultImg}
                defaultImgName={this.state.formData.image.value}
                resetImage={() => this.resetImage()}
                filename={(filename) => this.storeFilename(filename)}
              />

              <FormFiled
                id={"name"}
                formData={this.state.formData.name}
                change={element => this.updateForm(element)}
              />

              <FormFiled
                id={"lastname"}
                formData={this.state.formData.lastname}
                change={element => this.updateForm(element)}
              />

              <FormFiled
                id={"number"}
                formData={this.state.formData.number}
                change={element => this.updateForm(element)}
              />

              <FormFiled
                id={"position"}
                formData={this.state.formData.position}
                change={element => this.updateForm(element)}
              />

              <div className="success_label">{this.state.formSuccess}</div>

              {this.state.formError ? (
                <div className="error_label">Something is wrong?</div>
              ) : (
                ""
              )}

              <div className="admin_submit">
                <button onClick={event => this.submitForm(event)}>
                  {this.state.formType}
                </button>
              </div>
            </form>
          </div>
        </div>
      </AdminLayout>
    );
  }
}

export default AddEditPlayers;
