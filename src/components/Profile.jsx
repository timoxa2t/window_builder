import { Form, Formik } from "formik";

import { Button, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import { setAddress, setEmail, setLastname, setFirstName, setPhone } from "../store/user/actions";
import { FormikFieldComponent } from "./FormikFieldComponent";


export function Profile(){
    const {firstName, lastName, phone, email, address} = useSelector(store => store.user)
    
    return (
        <Container>
          <Formik
            initialValues={{firstName, lastName, phone, email, address}}
            validationSchema={Yup.object({
              name: Yup.string(),
              lastName: Yup.string(),
              phone: Yup.string(),
              email: Yup.string(),
              address: Yup.string(),
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  console.log(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            onChange={(event) => console.log(event)}
          >
            <Form>
                <Row>
                <FormikFieldComponent name="firstName" title="Ім'я" type="text" handler={setFirstName}/>
                <FormikFieldComponent name="lastName" title="Прізвище" type="text" handler={setLastname}/>
                </Row>
                <Row>
                <FormikFieldComponent name="phone" title="Телефон" type="phone" handler={setPhone}/>
                <FormikFieldComponent name="email" title="Пошта" type="mail" handler={setEmail}/>
                <FormikFieldComponent name="address" title="Адреса" type="text" handler={setAddress}/>
                </Row>
                <Button variant="primary" type="submit">
                    Підтвердити
                </Button>
            </Form>
          </Formik>
        </Container>
      ); 
}