import React, { useState } from "react";
import {
	Card,
	CardBody,
	Typography,
	Avatar,
	Input,
	Button,
	Switch,
    CardFooter
} from "@material-tailwind/react";

interface Post {
	id: number;
	title: string;
	content: string;
	username: string;
}

interface Comment {
	username: string;
	postId: number;
	content: string;
}

const dummyPostsEnglish: Post[] = [
	{
		id: 1,
		title: "Help with money matters",
		content: "This is a post about investment",
		username: "Tan Ah Hock",
	},
	{
		id: 2,
		title: "Second post",
		content: "This is the second post content",
		username: "user2",
	},
];

const dummyPostsChinese: Post[] = [
	{
		id: 1,
		title: "金融问题求助",
		content: "这是一篇关于投资的帖子",
		username: "陈阿福",
	},
	{
		id: 2,
		title: "第二篇帖子",
		content: "这是第二篇帖子的内容",
		username: "用户2",
	},
];

const SocialMediaFeed: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>(dummyPostsEnglish);
    const [newPostTitle, setNewPostTitle] = useState<string>("");
    const [newPostContent, setNewPostContent] = useState<string>("");
    const newPostUsername = "User";
    const [comments, setComments] = useState<Comment[]>([]);
    const [isChinese, setIsChinese] = useState<boolean>(false);

    const translations = {
        post: {
            english: "Post",
            chinese: "发布"
        },
        startDiscussion: {
            english: "Start a Discussion",
            chinese: "开始讨论"
        }
    };

    const handlePostTitleChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setNewPostTitle(event.target.value);
    };

    const handlePostContentChange = (
        event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setNewPostContent(event.target.value);
    };

    const handlePostSubmit = () => {
        if (
            newPostTitle.trim() !== "" &&
            newPostContent.trim() !== "" &&
            newPostUsername.trim() !== ""
        ) {
            const newPost: Post = {
                id: posts.length + 1,
                title: newPostTitle,
                content: newPostContent,
                username: newPostUsername,
            };
            setPosts([...posts, newPost]);
            setNewPostTitle("");
            setNewPostContent("");
        }
    };

    const handleCommentSubmit = (postId: number, comment: string) => {
        if (comment.trim() !== "") {
            const newComment: Comment = {
                postId: postId,
                content: comment,
                username: newPostUsername,
            };
            setComments([...comments, newComment]);
        }
    };

    const toggleLanguage = () => {
        setIsChinese(!isChinese);
        setPosts(isChinese ? dummyPostsEnglish : dummyPostsChinese);
    };

    return (
        <div className="container mx-auto px-4 pt-6 mb-24">
            <h1 className="text-xl font-bold mb-4 flex items-center justify-between">
                Forum
                <Switch
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={toggleLanguage}
                    label={isChinese ? "English" : "中文"}
                ></Switch>
            </h1>
            <Card className="mt-6 w-full">
                <CardBody>
                    <h2 className="text-lg font-bold mb-2">
                        {isChinese ? translations.startDiscussion.chinese : translations.startDiscussion.english}
                    </h2>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded mb-2"
                        placeholder={isChinese ? "帖子标题" : "Post Title"}
                        value={newPostTitle}
                        onChange={handlePostTitleChange}
                    />
                    <textarea
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder={isChinese ? "在这里写您的帖子..." : "Write your post here..."}
                        value={newPostContent}
                        onChange={handlePostContentChange}
                    ></textarea>
                </CardBody>
                <CardFooter className="pt-0">
                    <Button onClick={handlePostSubmit}>{isChinese ? translations.post.chinese : translations.post.english}</Button>
                </CardFooter>
            </Card>

            <div className="mt-4">
                {posts.map((post) => (
                    <Card className="mt-6 w-full" key={post.id}>
                        <CardBody>
                            <Avatar
                                size="sm"
                                variant="circular"
                                alt="tania andrew"
                                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                className="border-2 border-white hover:z-10"
                            />
                            <span className="ml-2">{post.username}</span>{" "}
                            <Typography
                                variant="h5"
                                color="blue-gray"
                                className="mb-2"
                            >
                                {post.title}
                            </Typography>
                            <Typography>{post.content}</Typography>
                        </CardBody>
                        <div className="relative flex w-full max-w-[24rem]">
                            <Input
                                type="text"
                                id={`comment-input-${post.id}`}
                                label={isChinese ? "评论" : "Comment"}
                                className="pr-20"
                                placeholder={isChinese ? "添加评论..." : "Add a comment..."}
                                containerProps={{
                                    className: "min-w-0",
                                }}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        handleCommentSubmit(
                                            post.id,
                                            e.currentTarget.value
                                        );
                                        e.currentTarget.value = "";
                                    }
                                }}
                            />
                            <Button
                                size="sm"
                                color={"blue-gray"}
                                className="!absolute right-1 top-1 rounded"
                                onClick={() => {
                                    const commentInput =
                                        document.getElementById(
                                            `comment-input-${post.id}`
                                        ) as HTMLInputElement;
                                    handleCommentSubmit(
                                        post.id,
                                        commentInput.value
                                    );
                                    commentInput.value = "";
                                }}
                            >
                                {isChinese ? "评论" : "Comment"}
                            </Button>
                        </div>
                        <div>
                            {comments
                                .filter((comment) => comment.postId === post.id)
                                .map((comment, index) => (
                                    <Card className="mt-6 w-full" key={index}>
                                        <CardBody>
                                            <Avatar
                                                size="sm"
                                                variant="circular"
                                                alt="tania andrew"
                                                src="https://docs.material-tailwind.com/img/face-2.jpg"
                                                className="border-2 border-white hover:z-10"
                                            />
                                            <span className="ml-2">
                                                {comment.username}
                                            </span>{" "}
                                            <Typography>
                                                {comment.content}
                                            </Typography>
                                        </CardBody>
                                    </Card>
                                ))}
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default SocialMediaFeed;