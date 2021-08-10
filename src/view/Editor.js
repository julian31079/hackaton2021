import React, {Component} from 'react';
import Text, {EditText} from '../component/Text';
import Img from '../component/Img';
import {components} from '../App';

export default class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      section: 0,
      item: 0,
      panel: 0,
      component: 0,
    }
  }

  render() {
    let {template} = this.props;
    let panel = this.state.panel;
    let currentItem = template[this.state.section][this.state.item];
    return (
      <div className="container-fluid">
        <div className="row">
          <div id="preview" className="col-8">
            {
              template.map((section, i) => {
                return (
                  <div id={"section" + i} className="row position-relative">
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
                    <button className="btn op-3 p-0 mx-3 position-absolute z-1 top-100 start-0 translate-middle-y"
                      style={{width: "30px", height: "30px"}} onClick={() => {
                        template.splice(i + 1, 0, [
                          {
                            id: this.state.component,
                          }
                        ]);
                        this.props.onEdit(template);
                      }}>
                      <Img props={{img: "plus.png"}} />
                    </button>
                    <button className="btn op-3 p-0 mx-3 position-absolute z-1 top-50 end-0 translate-middle-y"
                      style={{width: "30px", height: "30px"}} onClick={() => {
                        template.splice(i, 1);
                        this.props.onEdit(template);
                      }}>
                      <Img props={{img: "delete.png"}} />
                    </button>
                  </div>
                );
              })
            }
          </div>
          {/* EDITOR PANEL */}
          <div id="Panel" className="bg-secondary col-4 p-3"
            style={{position: "fixed", right: "0", height: "90vh", overflowY: 'scroll'}}>
            <div className="d-flex justify-content-around">
              <button className={"btn" + (panel === 0 ? " fw-bold" : "")}
                onClick={() => this.setState({panel: 0})}>Propiedades</button>
              <button className={"btn" + (panel === 1 ? " fw-bold" : "")}
                onClick={() => this.setState({panel: 1})}>Componentes</button>
              <button className={"btn" + (panel === 2 ? " fw-bold" : "")}
                onClick={() => this.setState({panel: 2})}>Paleta de colores</button>
            </div>
            <hr />
            {panel === 0 &&
              components[currentItem.id].edit(currentItem.props, (e) => {
                currentItem.props = e;
                this.props.onEdit(template);
              })}
            {panel === 1 &&
              components.map((component, i) => {
                return (
                  <button className="btn btn-outline-dark my-3 w-100"
                    onClick={() => this.setState({component: i})}>
                    <p className="py-2 m-0 text-center">{component.name}</p>
                    {component.el()}
                  </button>
                );
              })}
            {panel === 2 &&
              <div className="row">
                {[
                  "#DD2222", "#22DD22", "#2222DD", "#DDDD22", "#22DDDD", "#DD22DD",
                  "#DD5555", "#55DD55", "#5555DD", "#DDDD55", "#55DDDD", "#DD55DD",
                  "#DD8888", "#88DD88", "#8888DD", "#DDDD88", "#88DDDD", "#DD88DD",
                  "#DDBBBB", "#BBDDBB", "#BBBBDD", "#DDDDBB", "#BBDDDD", "#DDBBDD",
                  "#DD8822", "#88DD22", "#22DD88", "#2288DD", "#8822DD", "#DD2288",
                  "#DDAA55", "#AADD55", "#55DDAA", "#55AADD", "#AA55DD", "#DD55AA",
                  "#DDCC88", "#CCDD88", "#88DDCC", "#88CCDD", "#CC88DD", "#DD88CC",
                  "#DDDDBB", "#DDDDBB", "#BBDDDD", "#BBDDDD", "#DDBBDD", "#DDBBDD",
                  "#DDDDDD", "#BBBBBB", "#999999", "#777777", "#555555", "#333333"]
                  .map((color, i) => {
                    return (
                      <button className="p-1 btn my-3 col-4 col-md-3 col-lg-2">
                        <div className="mx-auto border border-dark"
                          style={{backgroundColor: color, width: "40px", height: "40px"}}>

                        </div>
                      </button>
                    );
                  })}
              </div>}
          </div>
        </div>
      </div>
    );
  }
}
