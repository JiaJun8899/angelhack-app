import React, { useState } from 'react';

interface Post {
  id: number;
  title: string;
  content: string;
  username: string;
}

const dummyPosts: Post[] = [
  {
    id: 1,
    title: 'First post',
    content: 'This is the first post content',
    username: 'user1',
  },
  {
    id: 2,
    title: 'Second post',
    content: 'This is the second post content',
    username: 'user2',
  },
];

const SocialMediaFeed: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>(dummyPosts);
  const [newPostTitle, setNewPostTitle] = useState<string>('');
  const [newPostContent, setNewPostContent] = useState<string>('');
  const newPostUsername = "User"
  const [comments, setComments] = useState<string[]>([]);

  const handlePostTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewPostTitle(event.target.value);
  };

  const handlePostContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewPostContent(event.target.value);
  };


  const handlePostSubmit = () => {
    if (newPostTitle.trim() !== '' && newPostContent.trim() !== '' && newPostUsername.trim() !== '') {
      const newPost: Post = {
        id: posts.length + 1,
        title: newPostTitle,
        content: newPostContent,
        username: newPostUsername,
      };
      setPosts([...posts, newPost]);
      setNewPostTitle('');
      setNewPostContent('');
    }
  };

  const handleCommentSubmit = (postId: number, comment: string) => {
    if (comment.trim() !== '') {
      const newComment = `Post ${postId} Comment: ${comment}`;
      setComments([...comments, newComment]);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-xl font-bold mb-4">Forum</h1>
      <div className="mb-4">
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded mb-2"
          placeholder="Post Title"
          value={newPostTitle}
          onChange={handlePostTitleChange}
        />
        <textarea
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Write your post here..."
          value={newPostContent}
          onChange={handlePostContentChange}
        ></textarea>
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handlePostSubmit}
      >
        Post
      </button>
      <div className="mt-4">
        {[...posts, ...dummyPosts].map((post) => (
          <div key={post.id} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h2 className="text-lg font-bold">{post.title}</h2>
            <p>{post.content}</p>
            <div className="flex items-center mt-2">
              <img
                src={`https://www.gravatar.com/avatar/${post.id}?d=identicon`}
                alt="Avatar"
                className="w-8 h-8 rounded-full"
              />
              <span className="ml-2">{post.username}</span> {/* Display username */}
            </div>
            <div className="mt-2">
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded mb-2"
                placeholder="Add a comment..."
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleCommentSubmit(post.id, e.currentTarget.value);
                    e.currentTarget.value = '';
                  }
                }}
              />
              {comments
                .filter((comment) => comment.startsWith(`Post ${post.id} Comment:`))
                .map((comment, index) => (
                  <div key={index} className="bg-gray-100 p-2 rounded">
                    {comment.replace(`Post ${post.id} Comment: `, '')}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaFeed;
