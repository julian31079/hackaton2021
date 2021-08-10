import React from 'react';
import Input from './Input';

export default function Img({props}) {
  props = props || {};
  let img = props.img || "covenas.jpg";
  return (
    <img src={img} className="img-fluid w-100" />
  )
}

export const EditImg = ({props, onEdit}) => {
  props = props || {};
  return (
    <Input props={{type: "file", label: "Imagen"}} onChange={(e) => {
      let el = Object.assign({}, props);
      el.img = URL.createObjectURL(e.target.files[0]);
      onEdit(el);
    }} />
  );
}
