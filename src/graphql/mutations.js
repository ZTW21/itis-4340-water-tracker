/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createWaterLog = /* GraphQL */ `
  mutation CreateWaterLog(
    $input: CreateWaterLogInput!
    $condition: ModelWaterLogConditionInput
  ) {
    createWaterLog(input: $input, condition: $condition) {
      id
      amount
      timestamp
      user {
        id
        createdAt
        updatedAt
        owner
        __typename
      }
      userID
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const updateWaterLog = /* GraphQL */ `
  mutation UpdateWaterLog(
    $input: UpdateWaterLogInput!
    $condition: ModelWaterLogConditionInput
  ) {
    updateWaterLog(input: $input, condition: $condition) {
      id
      amount
      timestamp
      user {
        id
        createdAt
        updatedAt
        owner
        __typename
      }
      userID
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const deleteWaterLog = /* GraphQL */ `
  mutation DeleteWaterLog(
    $input: DeleteWaterLogInput!
    $condition: ModelWaterLogConditionInput
  ) {
    deleteWaterLog(input: $input, condition: $condition) {
      id
      amount
      timestamp
      user {
        id
        createdAt
        updatedAt
        owner
        __typename
      }
      userID
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      waterLogs {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      waterLogs {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      waterLogs {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
