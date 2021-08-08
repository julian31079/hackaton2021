import React, {Fragment} from 'react';
import Img, {EditImg} from './Img';
import Input from './Input';

export default function Header({props}) {
  props = props || {};
  let title = props.title || "Maya Londono";
  let description = props.description || "Descripción";
  return (
    <div className="position-relative">
      <Img props={{img: props.img}} />
      <h1 className="position-absolute top-50 start-50 translate-middle
        text-light stroke display-3 t-decor fw-bold">{title}</h1>
      <h3 className="position-absolute text-light stroke bottom-0 m-4">{description}</h3>
    </div>
  )
}

export const EditHeader = ({props, onEdit}) => {
  props = props || {};
  let title = props.title || "Título";
  let description = props.description || "Descripción";
  return (
    <Fragment>
      <EditImg props={props} onEdit={onEdit} />
      <Input props={{label: "Título", value: title}} onChange={(e) => {
        let el = Object.assign({}, props);
        el.title = e.target.value;
        onEdit(el);
      }} />
      <Input props={{label: "Descripción", value: description}} onChange={(e) => {
        let el = Object.assign({}, props);
        el.description = e.target.value;
        onEdit(el);
      }} />
    </Fragment>
  );
}
