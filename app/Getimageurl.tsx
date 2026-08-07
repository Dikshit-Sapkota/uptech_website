export default async function Getimageurl({id}: {id: number}) {
    const imageurl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/media/${id}?_fields=source_url`;
    const res = await fetch(imageurl,
        {
            next:
            {
                revalidate:3600,
            }
        }

    );
    const data = await res.json();
    return data.source_url;
}