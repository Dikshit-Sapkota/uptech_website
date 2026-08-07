
import Button from "../components/usefullcomponents'/button";
import InnerHeroBanner from "../components/usefullcomponents'/innerpage_hero";
import wordpress from "../wordpress_api";

interface Post {
    id: number;
    title: {
        rendered: string;
    };
    excerpt: {
        rendered: string;
    };
    featured_image_url: string | null;
}
export const metadata =
{
    title: "Blog"
};
const stripHtml = (html: string) => {
    return html.replace(/<[^>]*>/g, "").trim();
};

const truncateWords = (text: string, limit: number) => {
    const words = text.split(/\s+/);

    if (words.length <= limit) return text;

    return words.slice(0, limit).join(" ") + "...";
};

export default async function Blog() {
    const { data: posts } = await wordpress.get<Post[]>("/posts", {
        params: {
            _fields: "id,title,excerpt,featured_image_url",
            per_page: 9,
        },
    });

    const Blogpost=(id:number)=>
    {


    }

    return (
        <main>
            <InnerHeroBanner title="Blog" />

            <section className="container mx-auto py-20">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                        <article
                            key={post.id}
                            className="overflow-hidden rounded-xl shadow-amber-500  shadow transition hover:shadow-lg"
                        >
                            {post.featured_image_url && (
                                <img
                                    src={post.featured_image_url}
                                    alt={post.title.rendered}
                                    className="h-60 w-full object-cover"
                                />
                            )}

                            <div className="p-6 flex flex-col gap-5 items-start">
                                <h2 className="mb-3 text-xl! font-bold">
                                    {post.title.rendered}
                                </h2>

                                <p className="text-sm! text-gray-600">
                                    {truncateWords(stripHtml(post.excerpt.rendered), 30)}
                                </p>
                                <p className="p-2 rounded bg-amber-500 text-white! text-sm! hover:cursor-pointer" >Read More</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}