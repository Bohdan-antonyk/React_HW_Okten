import {useEffect, useState} from "react";
import PostPage from "../post-page/PostPage.tsx";
import {IPost} from "../../models/IPost.ts";
import {getPosts} from "../../services/posts.service.ts";

const PostsComponent = () => {

    const [posts, setPosts] = useState<IPost[]>([])

    useEffect(() => {
        getPosts()
            .then(data => setPosts(data.posts));
    }, []);

    return (
        <div>
            {posts.map(item => <PostPage key={item.id} post={item}/>)}
        </div>
    );
};

export default PostsComponent;