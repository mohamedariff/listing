
const initialState = {
  listing: [{
    id: 1,
    location: 'Ipoh',
    price: 900,
    address: 'Petaling Jaya, Selangor',
    bed: 5,
    bathroom: 3,
    imageUrl: `https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=2773&q=80`,
    details: `Comprises four (4) blocks condominium with two (2) towers for each blocks namely Tower A1 & A2, B1 & B2, C1 & C2 and D1 & D2. Sitting on 11.29 acres freehold land.\n\nTotal units 676 units condominium with five (5) unique layouts to choose from namely Type A (1,399 sqft), Type B (1,184 sqft), Type C (829 sqft), Type D (1,227 sqft) and Type E (2,250 sqft)`,
    isLike: false,
    isBookmarked: false,
  },
  {
    id: 2,
    location: 'KL',
    price: 2000,
    address: 'Petaling Jaya, Selangor',
    bed: 3,
    bathroom: 2,
    imageUrl: `https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60`,
    details: `Comprises four (4) blocks condominium with two (2) towers for each blocks namely Tower A1 & A2, B1 & B2, C1 & C2 and D1 & D2. Sitting on 11.29 acres freehold land.\n\nTotal units 676 units condominium with five (5) unique layouts to choose from namely Type A (1,399 sqft), Type B (1,184 sqft), Type C (829 sqft), Type D (1,227 sqft) and Type E (2,250 sqft)`,
    isLike: false,
    isBookmarked: false,
  },
  {
    id: 3,
    location: 'JB',
    price: 1100,
    address: 'Petaling Jaya, Selangor',
    bed: 4,
    bathroom: 2,
    imageUrl: `https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80`,
    details: `Comprises four (4) blocks condominium with two (2) towers for each blocks namely Tower A1 & A2, B1 & B2, C1 & C2 and D1 & D2. Sitting on 11.29 acres freehold land.\n\nTotal units 676 units condominium with five (5) unique layouts to choose from namely Type A (1,399 sqft), Type B (1,184 sqft), Type C (829 sqft), Type D (1,227 sqft) and Type E (2,250 sqft)`,
    isLike: false,
    isBookmarked: false,
  },
  {
    id: 4,
    location: 'Terengganu',
    price: 500,
    address: 'Penarik, Terengganu',
    bed: 3,
    bathroom: 2,
    imageUrl: `https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80`,
    details: `Comprises four (4) blocks condominium with two (2) towers for each blocks namely Tower A1 & A2, B1 & B2, C1 & C2 and D1 & D2. Sitting on 11.29 acres freehold land.\n\nTotal units 676 units condominium with five (5) unique layouts to choose from namely Type A (1,399 sqft), Type B (1,184 sqft), Type C (829 sqft), Type D (1,227 sqft) and Type E (2,250 sqft)`,
    isLike: false,
    isBookmarked: false,
  }]
}

const property = (state = initialState, action) => {
  switch (action.type) {
    case 'FILTER': {
      const { payload } = action
      if (payload == '') {
        return {
          ...state,
          listing: [...state.listing],
          newListing: undefined
        }
      }
      const filtered = state.listing.filter(item => item.location.startsWith(payload))[0]
      return {
        ...state,
        newListing: [filtered]
      }
    }
    case 'FETCH': {
      return {
        ...state,
        listing: [...state.listing, ...action.payload]
      }
    }
    case 'UPDATE_LIKE': {
      const { id, data } = action.payload
      state.listing.filter(item => item.id === id)[0].isLike = !!data
      return {
        ...state,
        listing: [...state.listing]
      }
    }
    case 'UPDATE_BOOKMARK': {
      const { id, data } = action.payload
      state.listing.filter(item => item.id === id)[0].isBookmarked = !!data
      return {
        ...state,
        listing: [...state.listing]
      }
    }
    default:
      return state
  }
}

export default property