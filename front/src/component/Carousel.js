import React, {Component} from 'react';
import Img from './Img';

export default class Carousel extends Component {
  constructor(props) {
    super(props)

    this.state = {
      index: 0,
    }
  }

  render() {
    let imgs = this.props.imgs || [];
    console.log("carousel", this.props);
    console.log("carousel", imgs);
    return (
      <div className="position-relative">
        {
          this.state.index > 0 &&
          <button className="btn position-absolute start-0 top-50 mx-2"
            style={{width: '30px', height: 'px'}}
            onClick={() => this.setState({index: this.state.index - 1})}>
            <Img props={{img: "left.svg"}} />
          </button>
        }
        <Img props={{img: imgs[this.state.index]}} />
        {
          this.state.index < (imgs.length - 1) &&
          <button className="btn position-absolute end-0 top-50 mx-2"
            style={{width: '30px', height: 'px'}}
            onClick={() => this.setState({index: this.state.index - 1})}>
            <Img props={{img: "left.svg"}} />
          </button>
        }
      </div>
    );
  }
}

export const EditCarousel = ({props, onEdit}) => {
  props = props || {};
  return null;
};