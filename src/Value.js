import React,{useState} from 'react'
import data from "./data.json";

const Value = () => {
    const [key,setKey]=useState(data)
    const [name,setName]=useState(data.Accessories.AUSTRALIA)

  return (
    <div>
        <table>
            <tr className="valueContainer">
{Object.keys(key).map((item)=>(
    <th>{item}</th>
))}
</tr>
<tr>
{Object.keys(name).map((item)=>(
    <td>{item}</td>
))}
</tr>

</table>
    </div>
  )
}

export default Value    