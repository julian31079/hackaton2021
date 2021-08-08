import React, {Fragment} from 'react';

export default function Input({props, onChange}) {
  props = props || {};
  let type = props.type || 'text';
  let label = props.label || "Label";
  let value = props.value;
  return (
    <Fragment>
      <p className="mt-3 mb-2">{label}</p>
      <input type={type} value={value} className="form-control" onChange={onChange} />
    </Fragment>
  )
}
