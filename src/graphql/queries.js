/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getWaterLog = /* GraphQL */ `
  query GetWaterLog($id: ID!) {
    getWaterLog(id: $id) {
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
export const listWaterLogs = /* GraphQL */ `
  query ListWaterLogs(
    $filter: ModelWaterLogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWaterLogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        amount
        timestamp
        userID
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const waterLogsByUserIDAndTimestamp = /* GraphQL */ `
  query WaterLogsByUserIDAndTimestamp(
    $userID: ID!
    $timestamp: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelWaterLogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    waterLogsByUserIDAndTimestamp(
      userID: $userID
      timestamp: $timestamp
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        amount
        timestamp
        userID
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
