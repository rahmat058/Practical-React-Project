import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import MyButton from '../utils/MyButton';

class Discount extends Component {

  state = {
    discountStart: 0,
    discountEnd: 30
  }

  porcentage = () => {
    if(this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      })
    }
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.porcentage();
    }, 50);
  }

  render() {

    const { discountStart } = this.state

    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade
            onReveal={()=> this.porcentage()}
          >
            <div className="discount_porcentage">
              <span>{discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>

          <Slide right>
            <div className="discount_description">
              <h3>Purchase tickets before 20 October</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quidem debitis sit inventore asperiores sed, excepturi quibusdam soluta similique illum ut neque, minus vel laudantium maiores sequi quia cupiditate accusantium.</p>

              <MyButton 
                text="Purchase tickets"
                bck="#ffa800"
                color="#ffffff"
                link="http://google.com"
              />
            </div>
          </Slide>
        </div>
      </div>
    )
  }
}

export default Discount;
