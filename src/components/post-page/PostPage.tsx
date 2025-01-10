import {FC} from "react";
import {IPost} from "../../models/IPost.ts";
import '../user-page/user-page.css'


type PostPageProps = {
    post: IPost;
};

const PostPage: FC<PostPageProps> = ({post}) => {
    return (
        <div className={'container'}>
            <div className={'card'}>
                <div>Id: {post.id}</div>
                <div>Title: {post.title}</div>
            </div>
        </div>
    );
};

export default PostPage;
