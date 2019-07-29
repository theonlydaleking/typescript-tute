import { User } from './User'
import { Company } from './Company'

const user = new User()
const company = new Company()

console.log(user)
console.log(company)

const map = new google.maps.Map(document.getElementById('map'), {
  zoom: 3,
  center: {
    lat: company.location.lat,
    lng: company.location.lng
  }
})
