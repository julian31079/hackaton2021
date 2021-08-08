import React from 'react';
import Img from './Img';

export default function Footer({props}) {
  return (
    <div className="bg-secondary text-center py-5">
      <div className="col-sm-11 col-md-10 col-lg-9 mx-auto">
        <h3 className="mt-4 mb-3">¡Contáctanos!</h3>
        <div className="row justify-content-center">
          <a className="btn p-0 m-3" style={{width: "40px", height: "40px"}}
            href="https://www.facebook.com/aviaturturismomaya" target="_blank">
            <Img props={{img: "facebook.png"}} />
          </a>
          <a className="btn p-0 m-3" style={{width: "40px", height: "40px"}}
            href="https://www.instagram.com/aviaturturismomaya/" target="_blank">
            <Img props={{img: "instagram.png"}} />
          </a>
          <a className="btn p-0 m-3" style={{width: "40px", height: "40px"}}
            href="tel:+4 3198303-04" target="_blank">
            <Img props={{img: "phone.png"}} />
          </a>
        </div>
      </div>
    </div>
  )
}

export const EditFooter = ({props, onEdit}) => {
  return null;
}