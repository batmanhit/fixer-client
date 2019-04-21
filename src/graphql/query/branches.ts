import gql from "graphql-tag";

export const BRANCHES_QUERY = gql`
  query listBranches {
    branches {
      id
      name
    }
  }
`;