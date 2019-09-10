import React from 'react';

const FormFiled = ({ id, formData, change }) => {

  const showError = () => {
    let errorMessage = <div className="error_label">
      {
        formData.validation && !formData.valid ?
            formData.validationMessage
          : null
      }
    </div>

    return errorMessage;
  }

  const renderTemplate = () => {
    let formTemplate = null;

    switch (formData.element) {
      case ('input'):
        formTemplate = (
          <div>
            {
              formData.showlabel ?
                <div className="label_inputs">
                  {formData.config.label}
                </div>
                : null
            }
            <input
              {...formData.config}
              value={formData.value}
              onChange={(event) => change({event, id})}
            />

            { showError() }
          </div>
        )
        break;
      default:
        formTemplate = null;
    }

    return formTemplate;
  }

  return (
    <div>
      {renderTemplate()}
    </div>
  )
}

export default FormFiled;