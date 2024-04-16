import PostCard from '@/components/postCard/PostCard'
import styles from './blog.module.css'
import { getPosts } from '@/lib/data'

const getData = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/blog", { next: { revalidate: 3600 } });
    if (!response.ok) {
      throw new Error("Could not retrieve posts");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    // Implement retry logic here if needed
    throw error; // Rethrow the error to propagate it further
  }
};

const BlogPage = async () => {
  const posts = await getData();
  
  return (
    <div className={styles.container}>
      {
        posts?.map((post) => (
          <div key={post.id} className={styles.post}>
            <PostCard post={post} />
          </div>
        ))
      }
    </div>
  )
}

export default BlogPage