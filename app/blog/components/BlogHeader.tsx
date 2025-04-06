import Image from "next/image";

export default function BlogHeader() {
  return (
    <section className="relative pb-20">
      <div className="app-width max-w-3xl mx-auto text-center py-16">
        {/* Tag */}
        <span className="bg-orange-100 text-orange-600 px-4 py-1 mt-[-24px] lg:mt-0 rounded-full font-medium">
          Our blog
        </span>

        {/* Heading */}
        <h1 className="text-2xl lg:text-5xl font-bold text-gray-900 mt-4">
          We are here to help you
        </h1>
        <p className="text-gray-600 mt-4 text-xl">
          The latest industry news, interviews, technologies, and resources.
        </p>

        {/* Search Bar */}
        <div className="mt-10 flex justify-center px-4">
          <div className="relative w-full sm:max-w-md">
            <span className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              <Image src="/search.png" alt="Search Icon" width={20} height={20} />
            </span>
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2.5 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none shadow-sm text-base sm:text-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
