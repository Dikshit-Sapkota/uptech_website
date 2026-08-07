import axios from "axios";
const wordpress = axios.create(
    {
        baseURL:process.env.NEXT_PUBLIC_WORDPRESS_POSTS_API!,
    }
);
export default wordpress;


