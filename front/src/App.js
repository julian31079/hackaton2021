import React, {Component, useState} from 'react';
import Preview from './view/Preview';
import Editor from './view/Editor';
import Header, {EditHeader} from './component/Header';
import Carousel, {EditCarousel} from './component/Carousel';
import Img, {EditImg} from './component/Img';
import Text, {EditText} from './component/Text';

import './css/custom.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './css/app.css';

export const components = [
  {
    name: "Encabezado",
    el: (props) => <Header props={props} />,
    edit: (props, onEdit) => <EditHeader props={props} onEdit={onEdit} />,
  },
  {
    name: "Carrusel",
    el: (props) => <Carousel props={props} />,
    edit: (props, onEdit) => <EditCarousel props={props} onEdit={onEdit} />,
  },
  {
    name: "Imagen",
    el: (props) => <Img props={props} />,
    edit: (props, onEdit) => <EditImg props={props} onEdit={onEdit} />,
  },
  {
    name: "Texto",
    el: (props) => <Text props={props} />,
    edit: (props, onEdit) => <EditText props={props} onEdit={onEdit} />,
  },
];

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 0,
      template: [
        [
          {
            id: 0,
            props: {
            },
          },
        ],
        [
          {
            id: 1,
            props: {
              imgs: [
                "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
                "https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270",
              ],
            },
          },
        ],
      ],
    }
  }

  pages = [
    () => <Preview template={this.state.template} />,
    () => <Editor template={this.state.template} onEdit={(newState) => this.setState(newState)} />,
  ];

  buttons = [
    <button className="btn btn-outline-light" onClick={() =>
      this.setState({page: 1})}>Editor</button>,
    <button className="btn btn-outline-light" onClick={() =>
      this.setState({page: 0})}>Preview</button>
  ]

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary sticky-top top-0">
          <div className="container-fluid text-center">
            <a class="navbar-brand text-light" href="#">Turismo Maya</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarNav" aria-controls="navbarNav"
              aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <div className="navbar-nav">
                {this.buttons[this.state.page]}
              </div>
            </div>
          </div>
        </nav>
        <div className="overflow-hidden">
          {this.pages[this.state.page]()}
        </div>
      </div>
    );
  }

}
