import Image from "next/image";

export default function PostCard() {
    return (
      <div className="w-full flex flex-col">
        <div className="mb-8">
          <Image
            src="/postcad.png"
            alt="Image Container"
            width={1280} // Set width to match full screen width
            height={401}  // Adjust height as needed
            className="py-5 w-full h-auto"
          />
        </div>
     </div>
     );
    }