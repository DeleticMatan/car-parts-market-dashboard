import gql from 'graphql-tag'

export const CreateRim = gql`
  mutation createRim(
    $userId: ID,
    $active: Boolean!,
    $highlight: Boolean!,
    $type: String!,
    $diameter: String,
    $width: String,
    $holes: String,
    $brand: String,
    $et: String,
    $condition: String,
    $price: Int!,
    $text: String,
    $phone: String!,
    $phone2: String,
    $name: String,
    $email: String!,
    $city: String!,
    $expires: Int!
    ) {
    createRim(data: {
      userId: $userId,
      active: $active,
      highlight: $highlight,
      type: $type,
      diameter: $diameter,
      width: $width,
      holes: $holes,
      brand: $brand,
      et: $et,
      condition: $condition,
      price: $price,
      text: $text,
      phone: $phone,
      phone2: $phone2,
      name: $name,
      email: $email,
      city: $city,
      expires: $expires
    }) {
      id
      type
      diameter
      width
      brand
    }
  }
`

export const UpdateRim = gql`
  mutation updateRim(
      $id: ID!,
      $active: Boolean!,
      $highlight: Boolean!,
      $type: String!,
      $diameter: String,
      $width: String,
      $holes: String,
      $brand: String,
      $et: String,
      $condition: String,
      $price: Int!,
      $text: String,
      $phone: String!,
      $phone2: String,
      $name: String,
      $email: String!,
      $city: String!,
      $expires: Int!
    ) {
    updateRim(
      id: $id
      data: {
        active: $active,
        highlight: $highlight,
        type: $type,
        diameter: $diameter,
        width: $width,
        holes: $holes,
        brand: $brand,
        et: $et,
        condition: $condition,
        price: $price,
        text: $text,
        phone: $phone,
        phone2: $phone2,
        name: $name,
        email: $email,
        city: $city,
        expires: $expires
      }
    ) {
      id
      type
      diameter
      width
      brand
    }
  }
`
export const DeleteRim = gql`
  mutation deleteRim(
      $id: ID!
    ) {
      deleteRim(
        id: $id
      ) {
        id
      }
    }
  `

export const ArchiveRim = gql`
  mutation archiveRim(
      $id: ID!
    ) {
      updateRim(
        id: $id
        data: {
          active: false
        }
      ) {
        id
        type
        diameter
        width
        brand
      }
    }
  `

export const ActivateRim = gql`
  mutation activateRim(
      $id: ID!
    ) {
      updateRim(
        id: $id
        data: {
          active: true
        }
      ) {
        id
        type
        diameter
        width
        brand
      }
    }
  `