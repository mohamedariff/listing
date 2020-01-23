export const filterLocation = (data) => {
  return {
    type: 'FILTER',
    payload: data
  }
}

export const fetch = (data) => {
  return {
    type: 'FETCH',
    payload: data
  }
}

export const updateLike = (id, data) => {
  return {
    type: 'UPDATE_LIKE',
    payload: { id, data }
  }
}
export const updateBookmarked = (id, data) => {
  return {
    type: 'UPDATE_BOOKMARK',
    payload: { id, data }
  }
}