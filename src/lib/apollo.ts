import { ApolloClient, InMemoryCache, gql, createHttpLink } from '@apollo/client';

// Apollo Client setup for Hashnode GraphQL API
const httpLink = createHttpLink({
  uri: 'https://gql.hashnode.com',
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

// GraphQL query to fetch blog posts
export const GET_POSTS = gql`
  query GetPosts($host: String!, $first: Int!) {
    publication(host: $host) {
      title
      posts(first: $first) {
        edges {
          node {
            id
            title
            brief
            slug
            coverImage {
              url
            }
            author {
              name
              profilePicture
            }
            publishedAt
            url
          }
        }
      }
    }
  }
`;

// Default publication host - replace with your Hashnode publication
export const PUBLICATION_HOST = "yourblog.hashnode.dev"; // Update this with actual host