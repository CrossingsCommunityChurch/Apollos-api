import gql from 'graphql-tag';

export default gql`
  type Event implements Node & ContentNode & ShareableNode {
    id: ID!
    title(hyphenated: Boolean): String
    htmlContent: String
    coverImage: ImageMedia
    location: String
    start: String
    end: String
    sharing: SharableContentItem
    name: String @deprecated(reason: "Use title")
    description: String @deprecated(reason: "Use htmlContent")
    image: ImageMedia @deprecated(reason: "Use coverImage")
  }

  extend type Campus {
    events: [Event]
  }

  extend type Query {
    allEvents: [Event] @cacheControl(maxAge: 3600)
  }
`;
