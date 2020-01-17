import React from 'react';
import './OfferDetail.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class OfferDetail extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div className="divDetail">
        <img
          className="officeImage"
          src={this.props.location.state.offerImage}
          alt="office"
        />

        <div className="detail">
          <h1>{this.props.location.state.titleOffer}</h1>
          <div className="infoDetail">
            <p>{this.props.location.state.addressCity}</p>
            <p>
              {this.props.location.state.capacityOffice} places{' '}
              {this.props.location.state.priceOffer}€
            </p>
          </div>
        </div>

        <hr className="hrOfferDetail" />
        <div className="divTextDetail">
          <p className="textDetail">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
        <div className="sliderPhotos">
          <h2>Photos</h2>

          <Slider {...settings}>
            <div>
              <img
                className="officeImage"
                src="https://cdn.pixabay.com/photo/2017/03/28/12/11/chairs-2181960_960_720.jpg"
                alt="office1"
              />
            </div>
            <div>
              <img
                className="officeImage"
                src="https://cdn.pixabay.com/photo/2015/05/15/14/22/conference-room-768441_960_720.jpg"
                alt="office2"
              />
            </div>
            <div>
              <img
                className="officeImage"
                src="https://cdn.pixabay.com/photo/2017/03/28/12/06/chairs-2181916_960_720.jpg"
                alt="office3"
              />
            </div>
          </Slider>
        </div>

        <div className="equipements">
          <h2>Equipements</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>

        <input className="validateOffer" type="button" value="Valider" />
      </div>
    );
  }
}

export default OfferDetail;
