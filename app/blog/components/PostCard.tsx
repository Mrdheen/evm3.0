import Image from "next/image";

export default function PostCard() {
    return (
      <div className="app-width w-full flex flex-col mt-[-100px] lg:mt-0">
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