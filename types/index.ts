export type IPost = {
  type_of: string;
  id: number;
  title: string;
  description: string;
  slug: string;
  path: string;
  url: string;
  page_views_count: number;
  comments_count: number;
  public_reactions_count: number;
  published_timestamp: string;
  positive_reactions_count: number;
  cover_image?: string;
  canonical_url: string;
  created_at: string;
  edited_at: string;
  tag_list: string[];
  user: {
    name: string;
    username: string;
    twitter_username: string | null;
    github_username: string;
    user_id: number;
    website_url: string;
    profile_image: string;
    profile_image_90: string;
  };
};
