import gql from 'graphql-tag'

export const CreateAd = gql`
  mutation createAd(
    $userId: ID,
    $active: Boolean!,
    $highlight: Boolean!,
    $adType: String,
    $type: String!,
    $brand: String,
    $model: String,
    $label: String,
    $category: String,
    $subcategory: String,
    $condition: String,
    $year: String,
    $yearTo: String,
    $price: Int!,
    $text: String,
    $phone: String!,
    $phone2: String,
    $name: String,
    $email: String!,
    $city: String!,
    $expires: Int!
    ) {
    createAd(data: {
      userId: $userId,
      active: $active,
      highlight: $highlight,
      adType: $adType,
      type: $type,
      brand: $brand,
      model: $model,
      label: $label,
      category: $category,
      subcategory: $subcategory,
      condition: $condition,
      year: $year,
      yearTo: $yearTo,
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
      brand
      model
      category
      condition
    }
  }
`

export const UpdateAd = gql`
  mutation updateAd(
      $id: ID!,
      $active: Boolean,
      $highlight: Boolean,
      $adType: String,
      $type: String,
      $brand: String,
      $model: String,
      $label: String,
      $category: String,
      $subcategory: String,
      $condition: String,
      $year: String,
      $yearTo: String,
      $price: Int,
      $text: String,
      $phone: String,
      $phone2: String,
      $name: String,
      $email: String,
      $city: String,
      $expires: Int
    ) {
    updateAd(
      id: $id
      data: {
        active: $active,
        highlight: $highlight,
        adType: $adType,
        type: $type,
        brand: $brand,
        model: $model,
        label: $label,
        category: $category,
        subcategory: $subcategory,
        condition: $condition,
        year: $year,
        yearTo: $yearTo,
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
      brand
      model
      category
      condition
    }
  }
`

export const DeleteAd = gql`
  mutation deleteAd(
      $id: ID!
    ) {
      deleteAd(
        id: $id
      ) {
        id
      }
    }
  `

export const ArchiveAd = gql`
  mutation archiveAd(
      $id: ID!
    ) {
      updateAd(
        id: $id
        data: {
          active: false
        }
      ) {
        id
        brand
        model
        category
        condition
      }
    }
  `

export const ActivateAd = gql`
  mutation activateAd(
      $id: ID!
    ) {
      updateAd(
        id: $id
        data: {
          active: true
        }
      ) {
        id
        brand
        model
        category
        condition
      }
    }
  `

export const UploadFile = gql`
  mutation uploadFile(
      $file: Upload!,
      $id: ID!,
      $type: String!
    ) {
      uploadFile(
        file: $file,
        id: $id,
        type: $type
      )
    }
  `