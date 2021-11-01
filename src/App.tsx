import React, { useState } from 'react';
import './App.css';
import { Form, FormGroup, Input, Label, Button } from "reactstrap";

interface IAppForm {
  firstInputValue: string;
  secondInputValue: string;
}

function App() {
  const [appForm, setAppForm] = useState<IAppForm>({
    firstInputValue: '',
    secondInputValue: ''
  });

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setAppForm(
        {
          ...appForm,
          [event.target.id]: event.target.value
        }
    )
  };

  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    setAppForm(
        {
          firstInputValue: appForm.secondInputValue,
          secondInputValue: appForm.firstInputValue
        }
    )
  };

  return (
      <div className="App container d-flex justify-content-center align-items-center">
        <Form onSubmit={handleFormSubmit} className="w-50">
          <FormGroup>
            <Label for="firstInputValue">
              First Text Area
            </Label>
            <Input
                id="firstInputValue"
                name="firstInputValue"
                type="textarea"
                value={appForm.firstInputValue}
                onChange={handleFormChange}
            />
          </FormGroup>
          <Button className="my-5">
            Swap
          </Button>
          <FormGroup>
            <Label for="secondInputValue">
              Second Text Area
            </Label>
            <Input
                id="secondInputValue"
                name="secondInputValue"
                type="textarea"
                value={appForm.secondInputValue}
                onChange={handleFormChange}
            />
          </FormGroup>
        </Form>
      </div>
  );
}

export default App;
