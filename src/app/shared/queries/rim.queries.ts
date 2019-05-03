import gql from 'graphql-tag'

export const GetRims = gql`
  query getRims {
    rims(
      where: {
        active: true
      },
      orderBy: createdAt_DESC) {
        id
        type
        diameter
        width
        brand
      }
  }
`

export const GetRimsDetails = gql`
  query getRimsDetails($userId: ID!) {
    rims(
      where: {
       	AND: [{
          user: {
            id: $userId
          }
        }, {
          active: true
        }]
      },
      orderBy: createdAt_DESC) {
        id
        type
        diameter
        width
        brand
      }
  }
`

export const GetArchivedRims = gql`
  query getArchivedRims {
    rims(
      where: {
        active: false
      },
      orderBy: createdAt_DESC) {
        id
        type
        diameter
        width
        brand
      }
  }
`

export const GetArchivedRimsDetails = gql`
  query getArchivedRimsDetails($userId: ID!) {
    rims(
      where: {
       	AND: [{
          user: {
            id: $userId
          }
        }, {
          active: false
        }]
      },
      orderBy: createdAt_DESC) {
        id
        type
        diameter
        width
        brand
      }
  }
`

export const GetRim = gql`
  query getRim($id: ID!) {
    rims(
      where: {
        id: $id
      }
    ) {
      id
      active
      highlight
      type
      diameter
      width
      holes
      brand
      et
      condition
      price
      text
      phone
      phone2
      name
      email
      city
      expires
    }
  }
`