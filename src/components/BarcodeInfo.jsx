import { useState } from "react";
import { Properties } from "./Properties/Properties";
import { useDispatch, useSelector } from "react-redux";
import { PropertiesVisualization } from "./Properties/PropertiesVisualization";
import { useParams } from "react-router-dom";
import { PropertiesInfo } from "./Properties/PropertiesInfo";
import { getBarcodeInfo } from "../store/details/action";
import { useEffect } from "react";

export function BarcodeInfo() {


  const dispatch = useDispatch()
  const {barcode} = useParams()
  const {components, width, height} = useSelector(store => store.details)
  const [component, setComponent] = useState("")

  useEffect(() => {
    dispatch(getBarcodeInfo({barcode}))
  }, [barcode, dispatch])

  useEffect(() => {
    setComponent(components[0]?.key)
  }, [components])

  const chooseComponent = (key) => {
    setComponent(key);
  };

  return (
    <Properties>
        <PropertiesVisualization details={components} chooseComponent={chooseComponent} activeComponent={component} width={width} height={height}/>
        <PropertiesInfo details={components} chooseComponent={chooseComponent} activeComponent={component}/>
    </Properties>
  );
}


