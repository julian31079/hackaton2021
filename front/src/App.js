import React, {Component, useState} from 'react';
import Preview from './view/Preview';
import Editor from './view/Editor';
import Header, {EditHeader} from './component/Header';
import Carousel, {EditCarousel} from './component/Carousel';
import Img, {EditImg} from './component/Img';
import Text, {EditText} from './component/Text';
import Footer, {EditFooter} from './component/Footer';

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
  {
    name: "Pie de página",
    el: (props) => <Footer props={props} />,
    edit: (props, onEdit) => <EditFooter props={props} onEdit={onEdit} />,
  }
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
              title: "Maya Londono",
              description: "Tu viaje comienza aquí",
            },
          },
        ],
        [
          {
            id: 3,
            props: {
              tag: "h1 mt-4 mb-3",
              value: "¡Explora!",
            },
          },
        ],
        [
          {
            id: 1,
            props: {
              imgs: [
                "https://cdn.pixabay.com/photo/2017/07/18/19/39/lighthouse-2516803_960_720.jpg",
                "https://cdn.pixabay.com/photo/2015/10/19/18/23/salento-996461_960_720.jpg",
                "https://cdn.pixabay.com/photo/2020/03/12/10/38/colombia-4924705_960_720.jpg",
                "https://cdn.pixabay.com/photo/2020/03/07/10/03/colombia-4909308_960_720.jpg",
                "https://cdn.pixabay.com/photo/2019/09/07/02/25/city-4457801_960_720.jpg",
                "https://cdn.pixabay.com/photo/2017/07/01/19/14/colombia-2462346_960_720.jpg",
                "https://cdn.pixabay.com/photo/2017/02/11/02/31/rosario-islands-2056905_960_720.jpg",
              ],
            },
          },
        ],
        [
          {
            id: 3,
            props: {
              value: " ",
            }
          },
          {
            id: 3,
            props: {
              value: "¡Con Maya Londono podrás visitar los mayores sitios turísticos del país!"
                + " Somos una agencia de viajes ubicada en Medellín, Antioquia; ofrecemos paquetes de"
                + " viaje, alquiler de carros, viajes empresariales, tickets de vuelo y cruceros",
            }
          },
          {
            id: 3,
            props: {
              value: " ",
            }
          },
        ],
        [
          {
            id: 4,
            props: {
            }
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
      <div className="text-dark" style={{backgroundColor: "#CCE6E6"}}>
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
