// import React from 'react'
import React,  {Component} from 'react';



const BasicInfo =(props) => {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>phoneNumber: {props.phoneNumber}</p>
            <p>birthDate: {props.birthDate}</p>
        </div>
    )
}








// class Info extends React.Component{
//     render (){
//         return(
//             <div className="info-card">
//                 <img src="https://placehold.it/75"/>
//                 <div className="information">
//                     <div className="name">Nadia Berry</div>
//                     <div className="number">123-456-7891</div>
//                     <div className="dob">05/05/1996</div>
//                 </div>
//             </div>
//         )
//     }
// }

export default BasicInfo;