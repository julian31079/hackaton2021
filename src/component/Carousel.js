import React, {Component} from 'react';
import Img from './Img';
import Input from './Input';

export default class Carousel extends Component {
  constructor(props) {
    super(props)

    this.state = {
      index: 0,
    }
  }

  render() {
    this.props = this.props || {};
    this.props = this.props.props || {};
    let imgs = this.props.imgs || [];
    let index = this.state.index;
    return (
      <div className="position-relative col-sm-11 col-md-9 col-lg-7 mx-auto">
        {
          this.state.index > 0 &&
          <button className="btn p-0 position-absolute start-0 top-50 mx-2 op-4"
            style={{width: '40px', height: 'px'}}
            onClick={() => this.setState({index: index - 1})}>
            <Img props={{img: "left.svg"}} />
          </button>
        }
        <Img props={{img: imgs[index]}} />
        {
          this.state.index < (imgs.length - 1) &&
          <button className="btn p-0 position-absolute end-0 top-50 mx-2 op-4"
            style={{width: '40px', height: 'px'}}
            onClick={() => this.setState({index: index + 1})}>
            <Img props={{img: "right.svg"}} />
          </button>
        }
      </div>
    );
  }
}

export const EditCarousel = ({props, onEdit}) => {
  props = props || {};
  return (
    <Input props={{type: "files", label: "Imágenes"}} onChange={(e) => {
      let el = Object.assign({}, props);
      console.log("files", e.target.files);
      el.imgs = Array.from(e.target.files).map(file => {
        return URL.createObjectURL(file);
      });
      onEdit(el);
    }} />
  );
};