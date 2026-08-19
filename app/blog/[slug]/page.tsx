import Image from "next/image";
import InnerHeroBanner from "../../components/usefullcomponents'/innerpage_hero";
import Getimageurl from "../../Getimageurl";

interface BlogTitle {
    rendered: string;
}

interface BlogContent {
    rendered: string;
    protected: boolean;
}

interface Blog {
    slug: string;
    title: BlogTitle;
    content: BlogContent;
    featured_media: number;
}

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({ params }: PageProps) {

    const { slug } = await params;

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_WORDPRESS_POSTS_API}/posts?slug=${encodeURIComponent(
            slug
        )}&_fields=title`,
        {
            next: {
                revalidate: Number(process.env.NEXT_PUBLIC_CACHE_TIME),
            },
        }
    );

    if (!res.ok) {
        return {
            title: "Blog",
        };
    }

    const data: Blog[] = await res.json();

    const blog = data[0];

    return {
        title: blog?.title?.rendered || "Blog",
    };
}

export default async function BlogDescription({
    params,
}: PageProps) {

    const { slug } = await params;

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_WORDPRESS_POSTS_API}/posts?slug=${encodeURIComponent(
            slug
        )}&_fields=slug,title,content,featured_media`,
        {
            next: {
                revalidate: Number(process.env.NEXT_PUBLIC_CACHE_TIME),
            },
        }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch blog");
    }

    const data: Blog[] = await res.json();

    const blog = data[0];

    if (!blog) {
        return (
            <main>

                <InnerHeroBanner title="Blog" />

                <section className="py-20">

                    <div className="max-w-5xl mx-auto px-5 text-center">

                        <h1 className="text-3xl font-bold">
                            Blog Not Found
                        </h1>

                        <p className="mt-3">
                            The blog you are looking for does not exist.
                        </p>

                    </div>

                </section>

            </main>
        );
    }

    const imageUrl = blog.featured_media
        ? await Getimageurl({
            id: blog.featured_media,
        })
        : null;

    return (
        <main>

            <InnerHeroBanner title="Blog" />

            <section className="py-10 md:py-20">

                <div className="max-w-5xl mx-auto px-5">

                    {/* Blog Title */}
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
                        {blog.title.rendered}
                    </h1>

                    {/* Featured Image */}
                    {imageUrl && (
                        <div className="relative w-full h-[300px] md:h-[500px] mb-10 rounded-2xl overflow-hidden">

                            <Image
                                src={imageUrl}
                                alt={blog.title.rendered}
                                fill
                                priority
                                className="object-cover"
                            />

                        </div>
                    )}

                    {/* Blog Content */}
                    <article
                        className="prose prose-lg max-w-none"
                        dangerouslySetInnerHTML={{
                            __html: blog.content.rendered,
                        }}
                    />

                </div>

            </section>

        </main>
    );
}