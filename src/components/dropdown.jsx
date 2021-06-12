
import React, { useEffect, useState } from 'react'; 
import { Select } from "@chakra-ui/react"


function DropDown(props) {
    const [namesList, setnamesList] = useState([]);

    useEffect(() => {
        async function getDropDowns() {
            let dropDownListTemp = await fetch('/dropdowns')
            dropDownListTemp = await (await dropDownListTemp.json())
            setnamesList(dropDownListTemp)
        }
        getDropDowns()    
    }, [])

    

  return (
    <Select placeholder="Select a work" 
     onChange={props.onChange}
     border="none"
     focusBorderColor="none"
     backgroundColor="none"
     >
            {namesList.map(item => {
                return (
                <option 
                value={item.corpus}
                key={item.corpus}
                >
                {item.corpus}
                </option>
                )
            })}
    </Select>
  );
}

export default DropDown