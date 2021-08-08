import React, {Component} from 'react';
import Text, {EditText} from '../component/Text';
import {components} from '../App';

export default class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      section: 0,
      item: 0,
      panel: 0,
    }
  }

  render() {
    let {template} = this.props;
    let currentItem = template[this.state.section][this.state.item];
    return (
      <div className="container-fluid">
        <div className="row">
          <div id="preview" className="col-8">
            {
              template.map((section, i) => {
                return (
                  <div id={"section" + i} className="row">
                    {
                      section.map((item, j) => {
                        return (
                          <button className={"btn p-0 col-md-" + (12 / section.length)}
                            onClick={() => this.setState({section: i, item: j})}>
                            {components[item.id].el(item.props)}
                          </button>
                        );
                      })
                    }
                  </div>
                );
              })
            }
          </div>
          {/* EDITOR PANEL */}
          <div id="Panel" className="bg-secondary col-4 p-3"
            style={{position: "fixed", right: "0", height:"90vh", overflowY: 'scroll'}}>
            <div className="d-flex justify-content-around">
              <button className="btn" onClick={() => this.setState({panel: 0})}>
                Propiedades
              </button>
              <button className="btn" onClick={() => this.setState({panel: 1})}>
                Componentes
              </button>
              <button className="btn" onClick={() => this.setState({panel: 2})}>
                Paleta de colores
              </button>
            </div>
            <hr />
            {
              this.state.panel === 0 &&
              components[currentItem.id].edit(currentItem.props, (e) => {
                currentItem.props = e;
                this.props.onEdit(template);
              })
            }
            {
              this.state.panel === 1 &&
              components.map((component, i) => {
                return (
                  <button className="btn btn-outline-dark my-3 w-100">
                    <Text props={{value: component.name}} />
                    {component.el()}
                  </button>
                );
              })
            }
          </div>
        </div>
      </div>
    );
  }
}
