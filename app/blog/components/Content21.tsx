import Image from "next/image";

export default function BlogHeader() {
  return (
    <section className="relative pb-20">
      <div className="max-w-3xl mx-auto text-center py-16">
        {/* Tag */}
        <span className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-medium">
          Our blog
        </span>

        {/* Heading */}
        <h1 className="text-5xl font-bold text-gray-900 mt-4">
          We are here to help you
        </h1>
        <p className="text-gray-600 mt-4 text-xl">
          The latest industry news, interviews, technologies, and resources.
        </p>

        {/* Search Bar */}
        <div className="mt-6 flex justify-center">
          <div className="relative w-full max-w-md">
            <span className="absolute left-4 top-3 text-gray-400"><Image src="/search.png" alt="✔️" width={20} height={20} /></span>
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
