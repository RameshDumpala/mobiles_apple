import React, { useState } from "react";
import data from "../data.json";
//  import "./Accessories.css"

const Watch = () => {
  const [accessoriesas, setAccessoriesas] = useState([data.Watch.AUSTRALIA]);
  const [iphon, setIphon] = useState([data.Watch.CANADA]);
  const [japan, setJapan] = useState([data.Watch.JAPAN]);
  const [mexico, setMexico] = useState([data.Watch.MEXICO]);
  const [india, setIndia] = useState([data.Watch.INDIA]);

  return (
    <div>
      <h3 className="keys">Watch</h3>
      <table className="Accessories_table">
        <tr>
          <th>QTD</th>
          <th>Q3</th>
          <th>WOW</th>
          <th>YOY</th>
        </tr>

        <tr>
          {accessoriesas.map((item, i) => (
            <>
              <td className="aus">{item.QTD}</td>
              <td className="aus">{item.Q3}</td>
              <td className="aus">{item.WOW}</td>
              <td className="aus">{item.YOY}</td>
            </>
          ))}
        </tr>
        <tr>
          {iphon.map((item, i) => (
            <>
              <td className="can">{item.QTD}</td>
              <td className="can">{item.Q3}</td>
              <td className="can">{item.WOW}</td>
              <td className="can">{item.YOY}</td>
            </>
          ))}
        </tr>
        <tr>
          {japan.map((item, i) => (
            <>
              <td className="jap">{item.QTD}</td>
              <td className="jap">{item.Q3}</td>
              <td className="jap">{item.WOW}</td>
              <td className="jap">{item.YOY}</td>
            </>
          ))}
        </tr>
        <tr>
          {mexico.map((item, i) => (
            <>
              <td className="max">{item.QTD}</td>
              <td className="max">{item.Q3}</td>
              <td className="max">{item.WOW}</td>
              <td className="max">{item.YOY}</td>
            </>
          ))}
        </tr>
        <tr>
          {india.map((item, i) => (
            <>
              <td className="ind">{item.QTD}</td>
              <td className="ind">{item.Q3}</td>
              <td className="ind">{item.WOW}</td>
              <td className="ind">{item.YOY}</td>
            </>
          ))}
        </tr>
      </table>
    </div>
  );
};

export default Watch;
