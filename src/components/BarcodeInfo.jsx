import { useState } from "react";
import { Properties } from "./Properties/Properties";
import barcodeTest from "../barcodeTest.json";
import { useSelector } from "react-redux";
import { PropertiesVisualization } from "./Properties/PropertiesVisualization";
import { getDetails } from "../utilities";
import { useSearchParams } from "react-router-dom";
import { PropertiesInfo } from "./Properties/PropertiesInfo";

export function BarcodeInfo() {
  // const {selectedType} = useSelector(store => store.glass)
  const [searchParams] = useSearchParams()
  const barcode = searchParams.get("barcode");
  const details = barcodeTest

  const [component, setComponent] = useState(details[0].key);

  const chooseComponent = (key) => {
    setComponent(key);
  };

  return (
    <Properties>
        <PropertiesVisualization details={details} chooseComponent={chooseComponent} activeComponent={component}/>
        <PropertiesInfo details={details} chooseComponent={chooseComponent} activeComponent={component}/>
    </Properties>
  );
}


