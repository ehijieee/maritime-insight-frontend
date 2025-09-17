import { GraphQLClient } from 'graphql-request';

const API_URL = import.meta.env.VITE_HASHNODE_API || 'https://gql.hashnode.com';
const HASHNODE_HOST = import.meta.env.VITE_HASHNODE_HOST || 'nigerian-business-and-maritime-digest.hashnode.dev';

const client = new GraphQLClient(API_URL);

export interface Post {
  id: string;
  title: string;
  slug: string;
  brief: string;
  coverImage?: {
    url: string;
  };
  publishedAt: string;
  author: {
    name: string;
    profilePicture?: string;
  };
  contentMarkdown?: string;
}

export interface PostsResponse {
  publication: {
    posts: {
      edges: Array<{
        node: Post;
      }>;
    };
  };
}

export interface PostResponse {
  publication: {
    post: Post;
  };
}

const POSTS_QUERY = `
  query GetPosts($host: String!, $first: Int!) {
    publication(host: $host) {
      posts(first: $first) {
        edges {
          node {
            id
            title
            slug
            brief
            coverImage {
              url
            }
            publishedAt
            author {
              name
              profilePicture
            }
          }
        }
      }
    }
  }
`;

const POST_BY_SLUG_QUERY = `
  query GetPostBySlug($host: String!, $slug: String!) {
    publication(host: $host) {
      post(slug: $slug) {
        id
        title
        slug
        brief
        coverImage {
          url
        }
        publishedAt
        author {
          name
          profilePicture
        }
        contentMarkdown
      }
    }
  }
`;

export async function fetchPosts(limit: number = 10): Promise<Post[]> {
  try {
    const data: PostsResponse = await client.request(POSTS_QUERY, {
      host: HASHNODE_HOST,
      first: limit,
    });
    
    return data.publication?.posts?.edges?.map(edge => edge.node) || [];
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export async function fetchPostBySlug(slug: string): Promise<Post | null> {
  try {
    const data: PostResponse = await client.request(POST_BY_SLUG_QUERY, {
      host: HASHNODE_HOST,
      slug,
    });
    
    return data.publication?.post || null;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}
