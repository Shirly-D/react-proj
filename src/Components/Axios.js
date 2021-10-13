import React from 'react';
import axios from 'axios';

const url = "https://jsonplaceholder.typicode.com/posts/1";

export default function AxiosApp() {
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get(url).then((response) => {
            setPost(response.data);
        });
    }, []);

    if (!post) return null;

    return(
        <div>
            <h3>{post.titile}</h3>
            <p>{post.body}</p>
        </div>
    );
}