import { User } from './User'
import { Company } from './Company'
import { CustomMap } from './CustomMap'

const user = new User()
const company = new Company()

console.log(user)
console.log(company)

// google maps works when you just create it
// you don't need to reference with a variable. like const customMap = new CustomMap()

const customMap = new CustomMap(
  company.location.lat,
  company.location.lng,
  document.getElementById('map')
)

// customMap.addUserMarker(user)
// customMap.addCompanyMarker(company)

customMap.addMarkerProperly(user)
customMap.addMarkerProperly(company)
