import { useField } from "formik";
import { useEffect } from "react";
import { Col, Form as BootstrpForm } from "react-bootstrap";
import { useDispatch } from "react-redux";
import style from "../css/FormikFieldComponent.module.css";

export function FormikFieldComponent({ title, handler, ...props }) {
  const dispatch = useDispatch()
  const [field, meta] = useField(props);
  const {value} = field
  const isInvalid = meta.touched && meta.error;
    useEffect(() => {
      if(handler) {
        console.log(value)
        dispatch(handler(value))
      }
    }, [dispatch, handler, value])
  // const handleChange = (event => {
  //   if(handler){
  //     dispatch(handler(event.target.value))
  //   }
  // })

  return (
    <Col lg={true} md={true}>
      <BootstrpForm.Group className={style.group}>
        <BootstrpForm.Label className={style.label} htmlFor={props.name}>
          {title}
        </BootstrpForm.Label>
        <BootstrpForm.Control
          className={style.input}
          {...field}
          {...props}
          isInvalid={isInvalid} />
        {meta.touched && meta.error ? (
          <div className={style.error}>{meta.error}</div>
        ) : null}
      </BootstrpForm.Group>
    </Col>
  );
}
