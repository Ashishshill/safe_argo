import React from "react";
import "./Table.css";
// import Project1 from './img/SAFE_F-1.jpg';
// import Project2 from './img/SAFE_Trg.jpg';
// import Project3 from './img/234567890p-[.jpg';

function Table() {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">Our Previous Work</h1>
        <p className="heading p__color">
          There are many variations of passages of Lorem Ipsum available,
        </p>
       
      </div>
       <div className="container">
       <table>
            <tr>
                <th>Type of assignment</th>
                <th>Name of Client</th>
                <th>Funding Agency</th>
                <th>Start Date</th>
                <th>Completion date </th>
            </tr>
            <tr>
                <td>Feasibility Study for Food security for the farming community of CBX & CTG
Main Activity- Assessment
</td>
                <td>Welthungerhilfe</td>
                <td>BMZ</td>
                <td>Dec 15 – 2021</td>
                <td>15 Jan 2022</td>
            </tr>
            <tr>
                <td>Sustainability Evaluation of Bangladesh Program
Main Activity- Evaluation
</td>
                <td>ADRA Bangladesh</td>
                <td>ADRA Sweden</td>
                
                <td>Dec 15 – 2021</td>
                <td>15 Jan 2022</td>
            </tr>
            <tr>
                <td>Assessment of Community Empowerment project
Main Activity- Assessment
</td>
                <td>ADRA Bangladesh</td>
                <td>ADRA Sweden</td>
                <td>Dec 15 – 2021</td>
                <td>15 Jan 2022</td>
            </tr>
            <tr>
                <td>Final Evaluation
Main Activity- Evaluation
</td>
                <td>Swiss Intercooperation HELVETAS</td>
                <td>European Union</td>
                <td>September 2020</td>
                <td>October 2020</td>
            </tr>
            <tr>
                <td>Mid-Term Evaluation (MTE) 
Main Activity- Evaluation
</td>
                <td>DSK & Partners</td>
                <td>WSA/UBR</td>
                <td>February 2020</td>
                <td>October 2020</td>
            </tr>
            <tr>
                <td>Mid-Term Review with Devinsight Pvt. Limited, Delhi. India
Main Activity- Evaluation
</td>
                <td>BARCIK
DEW, 
UD, SUS &
UST
</td>
                <td>Swallows Sweden</td>
                <td>January 2020</td>
                <td>October 2020</td>
            </tr>
        </table>
       </div>
    </div>
  );
}

export default Table;
