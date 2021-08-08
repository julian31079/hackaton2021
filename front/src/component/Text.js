import React, {Component, Fragment} from 'react';

export default function Text({props}) {
  props = props || {};
  let value = props.value || "Some text";
  return (
    <p className="py-2 m-0">{value}</p>
  )
}

export const EditText = ({props, onEdit}) => {
  props = props || {};
  let value = props.value || "Some text";
  return (
    <Fragment>
      <Text props={{value: "Texto"}} />
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