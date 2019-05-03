import gql from 'graphql-tag'

export const CreateUser = gql`
  mutation createUser(
      $active: Boolean!,
      $access: Int!,
      $name: String!,
      $email: String!,
      $password: String!,
      $phone: String!,
      $phone2: String,
      $address: String!,
      $city: String!
    ) {
    createUser(data: {
      active: $active,
      access: $access,
      name: $name,
      email: $email,
      password: $password,
      phone: $phone,
      phone2: $phone2,
      address: $address,
      city: $city
    }) {
      user {
        id
        name
        email
        phone
        city
      }
      token
    }
  }
`

export const UpdateUser = gql`
  mutation updateUser(
      $id: ID!,
      $active: Boolean!,
      $access: Int!,
      $name: String!,
      $email: String!,
      $password: String!,
      $phone: String!,
      $phone2: String,
      $address: String!,
      $city: String!
    ) {
    updateUser(
      id: $id
      data: {
        active: $active,
        access: $access,
        name: $name,
        email: $email,
        password: $password,
        phone: $phone,
        phone2: $phone2,
        address: $address,
        city: $city
      }
    ) {
        id
        name
        email
        phone
        city
      }
    }
  `
export const DeleteUser = gql`
  mutation deleteUser(
      $id: ID!
    ) {
      deleteUser(
        id: $id
      ) {
        id
      }
    }
  `

export const ArchiveUser = gql`
  mutation archiveUser(
      $id: ID!
    ) {
      updateUser(
        id: $id
        data: {
          active: false
        }
      ) {
        id
        name
        email
        phone
        city
      }
    }
  `

export const ActivateUser = gql`
  mutation activateUser(
      $id: ID!
    ) {
      updateUser(
        id: $id
        data: {
          active: true
        }
      ) {
        id
        name
        email
        phone
        city
      }
    }
  `

export const Login = gql`
  mutation login(
      $email: String!
      $password: String!
    ) {
      adminLogin(data: {
       email: $email,
       password: $password
      }) {
        user {
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
        token
      }
    }
  `