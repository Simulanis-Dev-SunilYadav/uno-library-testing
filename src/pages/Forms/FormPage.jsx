import React, {useState} from 'react'
import { UiComponents } from '@simulanisindia/ui';

const FormPage = () => {
    const {SimForm, SimRow, SimColumns, SimContainer, SimSelect} = UiComponents
    const [name, setName] = useState("");

    const options = [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' }
      ]

  return (
    <>
    <SimContainer fluid>
        <SimRow>
            <SimColumns col="4" sm="12">
                <SimForm
                    type="text"
                    placeholder="Enter your name"
                    label="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    errorMessage="Please fill your name"
                />
            </SimColumns>
            <SimColumns col="4" sm="12">
                <SimSelect
                    options={options}
                    multiselet={false}
                    label="Gender"
                    placeholder="Select Gender"
                />
            </SimColumns>
        </SimRow>
    </SimContainer>

    </>
  )
}

export default FormPage
