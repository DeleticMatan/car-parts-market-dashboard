import gql from 'graphql-tag'

export const GetAds = gql`
  query getAds {
    ads(
      where: {
        active: true
      },
      orderBy: createdAt_DESC) {
        id
        brand
        model
        category
        condition
      }
  }
`

export const GetAdsDetails = gql`
  query getAdsDetails($userId: ID!) {
    ads(
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
        brand
        model
        category
        condition
      }
  }
`

export const GetArchivedAds = gql`
  query getArchivedAds {
    ads(
      where: {
        active: false
      },
      orderBy: createdAt_DESC) {
        id
        brand
        model
        category
        condition
      }
  }
`

export const GetArchivedAdsDetails = gql`
  query getArchivedAdsDetails($userId: ID!) {
    ads(
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
        brand
        model
        category
        condition
      }
  }
`

export const GetAd = gql`
  query getAd($id: ID!) {
    ads(
      where: {
        id: $id
      }
    ) {
      id
      active
      highlight
      adType
      type
      brand
      model
      label
      category
      subcategory
      condition
      year
      yearTo
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