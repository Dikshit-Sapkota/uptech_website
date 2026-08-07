export default function Testimonials() {
    const testimonials = [
        {
            name: "Jivan Dhami",
            title: "CEO, Tech Corp",
            content: "This company has been instrumental in helping us grow our online presence.",
            nickname: "JD"
        },
        {
            name: "Justice Sapkota",
            title: "Marketing Director, Creative Agency",
            content: "Their expertise in digital marketing has significantly boosted our brand visibility.",
            nickname: "JS"
        },
        {
            name: "Mahendra Joshi",
            title: "Founder, Startup Inc.",
            content: "We couldn't have achieved our growth without their innovative solutions.",
            nickname: "MJ"
        }
    ]

    return (
        <main className="pt-20! pb-20! flex flex-col gap-5 items-start!">
            <div className="flex flex-col items-start w-[60%] gap-2">
                <p className="small_heading">Client Testimonials</p>
                <h2 className="w-[80%]">Businesses trust Us to Show Up Online</h2>
                <div className="flex flex-wrap gap-2">
                    <div className="flex gap-2 items-center p-4 rounded-2xl border border-gray-100">
                        <i className="fa-solid fa-star text-yellow-400 text-sm"></i>
                        <i className="fa-solid fa-star text-yellow-400 text-sm"></i>
                        <i className="fa-solid fa-star text-yellow-400 text-sm"></i>
                        <i className="fa-solid fa-star text-yellow-400 text-sm"></i>
                        <i className="fa-solid fa-star-half-stroke text-yellow-400 text-sm"></i>
                        <p className="text-sm! font-bold">4.9</p>
                        <p className="text-sm! font-bold text-gray-500">Google Reviews</p>
                    </div>
                    <div className="flex gap-2 items-center p-4 rounded-2xl border border-gray-100">
                        <i className="fa-solid fa-star text-yellow-400 text-sm"></i>
                        <i className="fa-solid fa-star text-yellow-400 text-sm"></i>
                        <i className="fa-solid fa-star text-yellow-400 text-sm"></i>
                        <i className="fa-solid fa-star text-yellow-400 text-sm"></i>
                        <i className="fa-solid fa-star-half-stroke text-yellow-400 text-sm"></i>
                        <p className="text-sm! font-bold">4.8</p>
                        <p className="text-sm! font-bold text-gray-500">Facebook Reviews</p>
                    </div>
                </div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full pt-2 pb-2">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="flex flex-col gap-4 p-10 border border-gray-100 bg-gray-50 rounded-2xl">
                        <div className="flex gap-2 items-center">
                            <i className="fa-solid fa-star text-yellow-400 text-sm"></i>
                            <i className="fa-solid fa-star text-yellow-400 text-sm"></i>
                            <i className="fa-solid fa-star text-yellow-400 text-sm"></i>
                            <i className="fa-solid fa-star text-yellow-400 text-sm"></i>
                            <i className="fa-solid fa-star-half-stroke text-yellow-400 text-sm"></i>
                        </div>
                        <p className="text-lg! text-gray-500">"{testimonial.content}"</p>
                        <div className="flex gap-2 items-center">
                            <div>
                                <p className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                                    {testimonial.nickname}
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold">{testimonial.name}</h3>
                                <p className="text-sm! text-gray-500">{testimonial.title}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}