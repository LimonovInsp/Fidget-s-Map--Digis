import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import axios from "axios";

const style = {
  width: "100%",
  height: "900px",
  border: "1px solid black"
};

export class MapApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [],
      location: [],
      venues: []
    };
    this.onClick = this.onClick.bind(this);
    this.getVenues = this.getVenues.bind(this);
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
            position: { lat, lng }
          }
        ]
      };
    });
  }

  callback() {
    return null;
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        location: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      });
      console.log(position);
    });
    this.getVenues();
  }

  getVenues = () => {
    const endPoint = "https://api.foursquare.com/v2/venues/explore?";
    const parameters = {
      client_id: "MUGQ5VQSHY13S5PWCODBTF0ZQIB3IWZT5EW2ISTDPUU5SXPA",
      client_secret: "DRFGLD3POJ0IMICPS0BJ1YN2SXLPAIBY2KBOC35IVTES0NH5",
      categoryId: "4bf58dd8d48988d13b941735",
      radius: "10000",
      ll: "46.369615599999996,30.6822389",
      v: "20182507"
    };

    axios
      .get(endPoint + new URLSearchParams(parameters))
      .then(response => {
        this.setState(
          {
            venues: response.data.response.groups[0].items
          },
          this.callback()
        );
      })
      .catch(error => {
        console.log("Error! " + error);
      });
  };

  render() {
    const position = {
      lat: this.state.location.lat,
      lng: this.state.location.lng
    };
    return (
      <div>
        <button onClick={() => console.log(this.getVenues())}>Click</button>
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
          <Marker position={position} name={"Current location"} />
          {this.state.venues.map(myVenue => {
            <Marker
              title={myVenue.venue.name}
              position={{
                lat: myVenue.venue.location.lat,
                lng: myVenue.venue.location.lng
              }}
            />;
          })}
          {this.state.markers.map((marker, index) => (
            <Marker key={index} position={marker.position} />
          ))}
        </Map>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyA-40aTBtkqaYw6AgNy-OoLn_eFqMwgidY"
})(MapApp);
