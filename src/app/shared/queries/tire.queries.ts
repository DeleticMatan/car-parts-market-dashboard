import gql from 'graphql-tag'

export const GetTires = gql`
  query getTires {
    tires(
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

export const GetTiresDetails = gql`
  query getTiresDetails($userId: ID!) {
    tires(
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

export const GetArchivedTires = gql`
  query getArchivedTires {
    tires(
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

export const GetArchivedTiresDetails = gql`
  query getArchivedTiresDetails($userId: ID!) {
    tires(
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

export const GetTire = gql`
  query getTire($id: ID!) {
    tires(
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
      height
      brand
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