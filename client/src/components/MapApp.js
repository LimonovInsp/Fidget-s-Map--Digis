import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper, InfoWindow } from "google-maps-react";
import axios from "axios";
import "../less/InfrastructureList.less";
import "../less/Maplist.less";

const style = {
  width: "100%",
  height: "900px",
  border: "1px solid black"
};

class MapApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [],
      currentLocation: [],
      venuesSchools: [],
      venuesRestaurants: [],
      venuesPharmacies: [],
      venuesGas: [],
      currentObjects: " ",
      schools: false,
      restaurants: false,
      pharmacies: false,
      gas: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(t, map, coord) {
    const { latLng } = coord;
    const lat = latLng.lat();
    const lng = latLng.lng();

    this.setState(previousState => {
      return {
        markers: [
          ...previousState.markers,
          {
            newPosition: { lat, lng }
          }
        ]
      };
    });
  }

  getVenues = () => {
    const endPoint = "https://api.foursquare.com/v2/venues/explore?";
    const parametersSchools = {
      client_id: "MUGQ5VQSHY13S5PWCODBTF0ZQIB3IWZT5EW2ISTDPUU5SXPA",
      client_secret: "DRFGLD3POJ0IMICPS0BJ1YN2SXLPAIBY2KBOC35IVTES0NH5",
      categoryId: "4bf58dd8d48988d13b941735",
      radius: "10000",
      ll: this.state.currentObjects,
      v: "20182507"
    };
    const parametersRestaurants = {
      client_id: "MUGQ5VQSHY13S5PWCODBTF0ZQIB3IWZT5EW2ISTDPUU5SXPA",
      client_secret: "DRFGLD3POJ0IMICPS0BJ1YN2SXLPAIBY2KBOC35IVTES0NH5",
      categoryId: "4d4b7105d754a06374d81259",
      radius: "10000",
      ll: this.state.currentObjects,
      v: "20182507"
    };
    const parametersPharmacies = {
      client_id: "MUGQ5VQSHY13S5PWCODBTF0ZQIB3IWZT5EW2ISTDPUU5SXPA",
      client_secret: "DRFGLD3POJ0IMICPS0BJ1YN2SXLPAIBY2KBOC35IVTES0NH5",
      categoryId: "4bf58dd8d48988d10f951735",
      radius: "10000",
      ll: this.state.currentObjects,
      v: "20182507"
    };
    const parametersGas = {
      client_id: "MUGQ5VQSHY13S5PWCODBTF0ZQIB3IWZT5EW2ISTDPUU5SXPA",
      client_secret: "DRFGLD3POJ0IMICPS0BJ1YN2SXLPAIBY2KBOC35IVTES0NH5",
      categoryId: "4bf58dd8d48988d113951735",
      radius: "10000",
      ll: this.state.currentObjects,
      v: "20182507"
    };
    axios
      .get(endPoint + new URLSearchParams(parametersSchools))
      .then(response => {
        this.setState({
          venuesSchools: response.data.response.groups[0].items
        });
      });

    axios
      .get(endPoint + new URLSearchParams(parametersRestaurants))
      .then(response => {
        this.setState({
          venuesRestaurants: response.data.response.groups[0].items
        });
      });

    axios
      .get(endPoint + new URLSearchParams(parametersPharmacies))
      .then(response => {
        this.setState({
          venuesPharmacies: response.data.response.groups[0].items
        });
      });
    axios
      .get(endPoint + new URLSearchParams(parametersGas))
      .then(response => {
        this.setState({
          venuesGas: response.data.response.groups[0].items
        });
      })

      .catch(error => {
        console.log("Error! " + error);
      });
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState(
        {
          currentLocation: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          },
          currentObjects:
            position.coords.latitude + "," + position.coords.longitude
        },
        () => {
          this.getVenues();
        }
      );
    });
  }
  togglerSchool() {
    this.setState({
      schools: !this.state.schools
    });
  }

  togglerRestaurants() {
    this.setState({
      restaurants: !this.state.restaurants
    });
  }
  togglerPharmacies() {
    this.setState({
      pharmacies: !this.state.pharmacies
    });
  }

  togglerGas() {
    this.setState({
      gas: !this.state.gas
    });
  }

  render() {
    const position = {
      lat: this.state.currentLocation.lat,
      lng: this.state.currentLocation.lng
    };
    return (
      <React.Fragment>
        <div className="list_container">
          <ul className="list-group list-group-horizontal-md">
            <button
              onClick={() => this.togglerSchool()}
              type="button"
              className="list-group-item list-group-item-info"
            >
              Schools
            </button>
            <button
              onClick={() => this.togglerPharmacies()}
              type="button"
              className="list-group-item list-group-item-info"
            >
              Pharmacies
            </button>
            <button
              onClick={() => this.togglerRestaurants()}
              type="button"
              className="list-group-item list-group-item-info"
            >
              Restaurants
            </button>
            <button
              onClick={() => this.togglerGas()}
              type="button"
              className="list-group-item list-group-item-info"
            >
              Gas stations
            </button>
          </ul>
        </div>
        <div className="map_container">
          <Map
            styles={[
              { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
              {
                elementType: "labels.text.stroke",
                stylers: [{ color: "#242f3e" }]
              },
              {
                elementType: "labels.text.fill",
                stylers: [{ color: "#746855" }]
              },
              {
                featureType: "administrative.locality",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }]
              },
              {
                featureType: "poi",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }]
              },
              {
                featureType: "poi.park",
                elementType: "geometry",
                stylers: [{ color: "#263c3f" }]
              },
              {
                featureType: "poi.park",
                elementType: "labels.text.fill",
                stylers: [{ color: "#6b9a76" }]
              },
              {
                featureType: "road",
                elementType: "geometry",
                stylers: [{ color: "#38414e" }]
              },
              {
                featureType: "road",
                elementType: "geometry.stroke",
                stylers: [{ color: "#212a37" }]
              },
              {
                featureType: "road",
                elementType: "labels.text.fill",
                stylers: [{ color: "#9ca5b3" }]
              },
              {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [{ color: "#746855" }]
              },
              {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [{ color: "#1f2835" }]
              },
              {
                featureType: "road.highway",
                elementType: "labels.text.fill",
                stylers: [{ color: "#f3d19c" }]
              },
              {
                featureType: "transit",
                elementType: "geometry",
                stylers: [{ color: "#2f3948" }]
              },
              {
                featureType: "transit.station",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }]
              },
              {
                featureType: "water",
                elementType: "geometry",
                stylers: [{ color: "#17263c" }]
              },
              {
                featureType: "water",
                elementType: "labels.text.fill",
                stylers: [{ color: "#515c6d" }]
              },
              {
                featureType: "water",
                elementType: "labels.text.stroke",
                stylers: [{ color: "#17263c" }]
              }
            ]}
            google={this.props.google}
            onClick={this.onClick}
            zoom={10}
            style={style}
            center={position}
            className={"map"}
          >
            <Marker position={position} title={"CURRENT LOCATION"} />
            {this.state.schools
              ? this.state.venuesSchools.map((mySchools, index) => {
                  return (
                    <Marker
                      title={mySchools.venue.name}
                      key={index}
                      position={{
                        lat: mySchools.venue.location.lat,
                        lng: mySchools.venue.location.lng
                      }}
                    />
                  );
                })
              : null}
            {this.state.restaurants
              ? this.state.venuesRestaurants.map((myRestaurants, index) => {
                  return (
                    <Marker
                      title={myRestaurants.venue.name}
                      key={index}
                      position={{
                        lat: myRestaurants.venue.location.lat,
                        lng: myRestaurants.venue.location.lng
                      }}
                    />
                  );
                })
              : null}
            {this.state.pharmacies
              ? this.state.venuesPharmacies.map((myPharmacies, index) => {
                  return (
                    <Marker
                      title={myPharmacies.venue.name}
                      key={index}
                      position={{
                        lat: myPharmacies.venue.location.lat,
                        lng: myPharmacies.venue.location.lng
                      }}
                    />
                  );
                })
              : null}
            {this.state.gas
              ? this.state.venuesGas.map((myGas, index) => {
                  return (
                    <Marker
                      title={myGas.venue.name}
                      key={index}
                      position={{
                        lat: myGas.venue.location.lat,
                        lng: myGas.venue.location.lng
                      }}
                    />
                  );
                })
              : null}
            {this.state.markers.map((marker, index) => (
              <Marker key={index} position={marker.newPosition} />
            ))}
          </Map>
        </div>
      </React.Fragment>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyA-40aTBtkqaYw6AgNy-OoLn_eFqMwgidY"
})(MapApp);
