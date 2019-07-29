// The crazy thing about TS is that any time you need to show a map again,
// you can use this file. (Just take the instructive shit out obviously)

import { User } from './User'
import { Company } from './Company'
// In TS, you can use a class to create an instance,
// Or just use it to refer to a type.

export class CustomMap {
  // the custom map stops other devs from accessing
  // all the google map shit.
  // It just carries one property - the map.

  // make it private so you can't access it from outside the class.
  private googleMap: google.maps.Map

  constructor(lat: number, lng: number, containerDiv: Element) {
    this.googleMap = new google.maps.Map(containerDiv, {
      zoom: 3,
      center: {
        lat: lat,
        lng: lng
      }
    })
  }

  // this is a bad way of doing it
  // You would have to build another one if you wanted to add a company
  // Then another for like... fuel stations.
  addUserMarker(mappable: User | Company): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    })
  }

  // Slightly better way:
  // When you use or (|) typescript goes through and figures out which
  // properties are on both objects. In this case, the only one that exists
  // on both is location.
  // This is still shit tho because every time you want to expand
  // what you want to use a marker for, you would need to import it
  // and then have a shitload of or statements in the type.
  addMarkerBadly(mappable: User | Company): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    })
  }

  // Real Solution.
  // interfaces say "Hey every other object, if you want to show up on the map
  // You have to have a location property"
  // See the Mappable interface below too.
  addMarkerProperly(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    })
    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent()
      })
      infoWindow.open(this.googleMap, marker)
    })
  }
}

// You should really define interfaces at the top.
// I put it here because it's related to addMarkerProperly, so you can see it
// both on the screen at once
export interface Mappable {
  location: {
    lat: number
    lng: number
  }
  // You have to have a markerContent function that returns a string
  markerContent(): string
  colour: string
}
