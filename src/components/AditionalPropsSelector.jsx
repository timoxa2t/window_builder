import { FieldArray,  Formik, useField } from "formik";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import * as Yup from "yup";
import { FormikFieldComponent } from "./FormikFieldComponent";
import style from "../css/AditionalPropsSelector.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDeleteLeft,
} from "@fortawesome/free-solid-svg-icons";
import { DataSheetGrid, intColumn, keyColumn, textColumn } from "react-datasheet-grid";
import 'react-datasheet-grid/dist/style.css'
import { useState } from "react";

export function AditionalPropsSelector({nextStep}) {
  const initialValues = {
    positions: [
      {
        width: 10,
        height: 10,
        count: 1,
        comment: ""
      },
    ],
  };

  const [ data, setData ] = useState([
    { width: 10, height: 10, count: 1, comment: '' },
    { width: null, height: null, count: null, comment: '' },
  ])

  const columns = [
    { ...keyColumn('width', intColumn), title: 'Ширина' },
    { ...keyColumn('height', intColumn), title: 'Висота' },
    { ...keyColumn('count', intColumn), title: 'Кількість' },
    { ...keyColumn('comment', textColumn), title: 'Коментар' },
  ]

  const handleSubmit = (event) => {
    event.preventDefault()
    nextStep()
  }

  return (
    <Container>
      <DataSheetGrid
        value={data}
        onChange={setData}
        columns={columns}
      />

      <Form onSubmit={handleSubmit}>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Прикріпіть файли</Form.Label>
          <Form.Control type="file" multiple />
        </Form.Group>
        <Button variant="primary" type="submit">
            Перейти до наступного кроку
        </Button>
      </Form>
 
  
      {/* <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          width: Yup.number()
            .min(10, "Ширина має бути не менше 10мм")
            .max(6000, "Ширина не може перевищувати 6 метрів"),
          height: Yup.number()
            .min(10, "Висота має бути не менше 10мм")
            .max(3000, "Висота не може перевищувати 3 метрів"),
          count: Yup.number().min(1, "Мінімальна кількість замовлення 1 шт"),
        })}
        onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              console.log(JSON.stringify(values, null, 2));
              setSubmitting(false);
              nextStep()
            }, 400);
          }}
      >
        {({values}) => (
          <Form>
            <FieldArray name="positions">
              {({ insert, remove, push }) => (
              <div>

                {values.positions.length > 0 &&
                  values.positions.map((position, index) => (
              
                    
                <Row key={index} className={style.position + (position.remove ? " " + style.position__remove: "")}>
                    <FormikFieldComponent name={`positions.${index}.width`} title="Ширина, мм" type="number" />
                    <FormikFieldComponent name={`positions.${index}.height`} title="Висота, мм" type="number" />
                    <FormikFieldComponent name={`positions.${index}.count`} title="Кількість, шт" type="number"/>
                    {values.positions.length > 1 && 
                      <RemoveButton name={`positions.${index}.remove`} remove={remove} index={index}/>}
                </Row>
                ))}
                 <Button variant="primary" type="button" onClick={() => 
                 push({  width: 10, height: 10, count: 1})}>
                    Дотати позицію
                </Button>
              </div>
              )}
            </FieldArray>
            <Button variant="primary" type="submit">
                Перейти до наступного кроку
            </Button>
          </Form>
        )}
        
      </Formik> */}
    </Container>
  );
}



function RemoveButton({remove, index, ...props}){
  const [field, meta, helpers] = useField(props.name)
  const { setValue } = helpers;

  return (
    <Col lg={1} md={1} className={style.col} >
      <Button 
        variant="secondary"
        className={style.btn_delete} 
        onClick={() => {                 
          remove(index) 
        }}>
          <FontAwesomeIcon icon={faDeleteLeft} size="lg" className={style.icon}/>
      </Button>
    </Col>
    )
}