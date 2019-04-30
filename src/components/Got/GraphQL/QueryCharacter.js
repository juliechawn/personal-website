import gql from "graphql-tag";

export default gql(`
query($id: ID!) {
  getCharacter(id: $id) {
    id   
  }
}`);