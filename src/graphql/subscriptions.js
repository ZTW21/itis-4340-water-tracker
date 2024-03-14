/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateWaterLog = /* GraphQL */ `
  subscription OnCreateWaterLog(
    $filter: ModelSubscriptionWaterLogFilterInput
    $owner: String
  ) {
    onCreateWaterLog(filter: $filter, owner: $owner) {
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
export const onUpdateWaterLog = /* GraphQL */ `
  subscription OnUpdateWaterLog(
    $filter: ModelSubscriptionWaterLogFilterInput
    $owner: String
  ) {
    onUpdateWaterLog(filter: $filter, owner: $owner) {
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
export const onDeleteWaterLog = /* GraphQL */ `
  subscription OnDeleteWaterLog(
    $filter: ModelSubscriptionWaterLogFilterInput
    $owner: String
  ) {
    onDeleteWaterLog(filter: $filter, owner: $owner) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
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
