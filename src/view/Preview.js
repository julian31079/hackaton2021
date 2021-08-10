import React from 'react';
import {components} from '../App';

export default function Preview({template}) {
  return (
    <div className="col-12 p-0">
      {
        template.map((section, index) => {
          return (
            <div id={"section" + index} className="row position-relative">
              {
                section.map((item, index) => {
                  return (
                    <div className={"col-md-" + (12 / section.length)}>
                      {components[item.id].el(item.props)}
                    </div>
                  );
                })
              }
            </div>
          );
        })
      }
    </div>
  )
}
