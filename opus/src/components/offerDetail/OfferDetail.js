import React from 'react';
import './OfferDetail.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Modal from './Modal';

const mapStateToProps = state => ({
  token: state.token
});

class OfferDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reservation_date: '',
      visibleModal: false,
      isFavorite: this.props.location.state.is_favorite
    };
  }

  makeAReservation = () => {
    axios
      .post(
        'http://localhost:8000/booking',
        {
          reservation_date: this.state.reservation_date,
          id_offer: this.props.location.state.id
        },
        {
          headers: {
            Authorization: this.props.token
          }
        }
      )
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
  };

  addToFavorite = () => {
    !this.state.isFavorite
      ? axios
          .post(
            'http://localhost:8000/favorites',
            {
              id_offer: this.props.location.state.id
            },
            {
              headers: {
                Authorization: this.props.token
              }
            }
          )
          .then(response => {
            console.log(response);
            this.setState({
              isFavorite: true
            });
          })
          .catch(error => {
            console.error(error);
          })
      : axios
          .delete('http://localhost:8000/favorites', {
            data: { id_offer: this.props.location.state.id },
            headers: { Authorization: this.props.token }
          })
          .then(response => {
            console.log(response);
            this.setState({
              isFavorite: false
            });
          })
          .catch(error => {
            console.error(error);
          });
  };

  handleChange = event => {
    this.setState({ reservation_date: event.target.value });
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  openModal = () => {
    this.setState({ visibleModal: true });
  };
  closeModal = () => {
    this.setState({ visibleModal: false });
  };

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return this.props.token ? (
      <>
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
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
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
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>

          <input
            className="validateOffer"
            type="button"
            value="Réserver"
            onClick={this.openModal}
          />
          <input
            className="validateOffer"
            type="button"
            value={
              this.state.isFavorite ? 'Ajouté aux favoris' : 'Ajouter aux favoris'
            }
            onClick={() => this.addToFavorite()}
          />
        </div>
        <Modal
          openModal={this.state.visibleModal}
          closeModal={this.closeModal}
        />
        <div>
          <Link to="/home">
            <button className="buttonReturn">Retour</button>
          </Link>
        </div>
      </div>

      </>

    ) : (
      <Redirect to="/" />
    );
  }
}

export default connect(mapStateToProps)(OfferDetail);
