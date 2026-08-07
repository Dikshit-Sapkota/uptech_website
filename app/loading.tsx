import Image from "next/image";

export default function Loading() {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
            <Image
                src="/uptechlogo.png"
                alt="Uptech Solution"
                width={180}
                height={80}
                priority
                className="w-40 h-auto animate-pulse"
            />

            <div className="mt-6 h-1 w-32 overflow-hidden rounded-full bg-gray-200">
                <div className="h-full w-1/2 rounded-full bg-amber-500 animate-pulse" />
            </div>
        </div>
    );
}