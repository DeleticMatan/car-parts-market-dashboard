import gql from 'graphql-tag'

export const GetAdministrators = gql`
  query getAdministrators {
    users(
      where: {
       	AND: [{
          access: 1
        }, {
          active: true
        }]
      },
      orderBy: name_ASC) {
        id
        name
        email
        phone
        city
      }
  }
`
export const GetArchivedAdministrators = gql`
  query getArchivedAdministrators {
    users(
      where: {
       	AND: [{
          access: 1
        }, {
          active: false
        }]
      },
      orderBy: name_ASC) {
        id
        name
        email
        phone
        city
      }
  }
`

export const GetUsers = gql`
  query getUsers {
    users(
      where: {
       	AND: [{
          access: 0
        }, {
          active: true
        }]
      },
      orderBy: name_ASC) {
        id
        name
        email
        phone
        city
      }
  }
`

export const GetArchivedUsers = gql`
  query getArchivedUsers {
    users(
      where: {
       	AND: [{
          access: 0
        }, {
          active: false
        }]
      },
      orderBy: name_ASC) {
        id
        name
        email
        phone
        city
      }
  }
`

export const GetUser = gql`
  query getUser($id: ID!) {
    users(
      where: {
        id: $id
      }
    ) {
      id
      access
      active
      email
      password
      name
      phone
      phone2
      address
      city
    }
  }
`