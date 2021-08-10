import React, {Component, Fragment} from 'react';

export default function Text({props}) {
  props = props || {};
  let value = props.value || "Escribe algo...";
  let tag = props.tag;
  return (
    <p className={"py-5 m-0 text-center " + tag}>{value}</p>
  )
}

export const EditText = ({props, onEdit}) => {
  props = props || {};
  let value = props.value || "Escribe algo...";
  return (
    <Fragment>
      <p className={"py-2 m-0 text-center"}>Texto</p>
      <textarea value={value} class="form-control" rows="3" onChange={
        (e) => {
          let el = Object.assign({}, props);
          el.value = e.target.value;
          onEdit(el);
        }
      }>
      </textarea>
    </Fragment>
  );
}