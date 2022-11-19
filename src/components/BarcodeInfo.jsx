import { useState } from "react";
import { Properties } from "./Properties/Properties";
import barcodeTest from "../barcodeTest.json";
import { useDispatch, useSelector } from "react-redux";
import { PropertiesVisualization } from "./Properties/PropertiesVisualization";
import { getDetails } from "../utilities";
import { useParams, useSearchParams } from "react-router-dom";
import { PropertiesInfo } from "./Properties/PropertiesInfo";
import { getBarcodeInfo } from "../store/details/action";
import { useEffect } from "react";

export function BarcodeInfo() {


  const dispatch = useDispatch()
  const {barcode} = useParams()
  const {components} = useSelector(store => store.details)
  const [component, setComponent] = useState("")

  useEffect(() => {
    dispatch(getBarcodeInfo({barcode}))
  }, [barcode])

  const chooseComponent = (key) => {
    setComponent(key);
  };

  return (
    <Properties>
        <PropertiesVisualization details={components} chooseComponent={chooseComponent} activeComponent={component}/>
        <PropertiesInfo details={components} chooseComponent={chooseComponent} activeComponent={component}/>
    </Properties>
  );
}


