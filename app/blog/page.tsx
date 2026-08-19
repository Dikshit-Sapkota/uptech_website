
import InnerHeroBanner from "../components/usefullcomponents'/innerpage_hero";
import Getimageurl from "../Getimageurl";
import wordpress from "../wordpress_api";
import Link from "next/link";

interface Post {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  featured_media: number | null; // this is a media ID, not a URL
  slug:string
}

interface PostWithImage extends Post {
  imageUrl: string | null;
}

export const metadata = {
  title: "Blog",
};

const stripHtml = (html: string) => html.replace(/<[^>]*>/g, "").trim();

const truncateWords = (text: string, limit: number) => {
  const words = text.split(/\s+/);
  if (words.length <= limit) return text;
  return words.slice(0, limit).join(" ") + "...";
};

export default async function Blog() {
  const { data: posts } = await wordpress.get<Post[]>("/posts", {
    params: {
      _fields: "id,title,excerpt,featured_media,slug",
      per_page: 9,
    },
  });

  // Resolve each post's image URL (only fetch when featured_media exists / isn't 0)
  const postsWithImages: PostWithImage[] = await Promise.all(
    posts.map(async (post) => {
      const imageUrl =
        post.featured_media && post.featured_media !== 0
          ? await Getimageurl({ id: post.featured_media })
          : null;

      return { ...post, imageUrl };
    })
  );

  return (
    <main>
      <InnerHeroBanner title="Blog" />

      <section className="container mx-auto py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {postsWithImages.map((post) => (
            <article
              key={post.id}
              className="overflow-hidden rounded-xl shadow-amber-500 shadow transition hover:shadow-lg"
            >
              {post.imageUrl && (
                <img
                  src={post.imageUrl}
                  alt={post.title.rendered}
                  className="h-60 w-full object-cover"
                />
              )}

              <div className="p-6 flex flex-col gap-5 items-start">
                <h2
                  className="mb-3 text-xl! font-bold"
                  dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                />

                <p className="text-sm! text-gray-600">
                  {truncateWords(stripHtml(post.excerpt.rendered), 30)}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="p-2 rounded bg-amber-500 text-white! text-sm! hover:cursor-pointer"
                >
                  Read More
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}