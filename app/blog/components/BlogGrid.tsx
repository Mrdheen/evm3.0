import Image from "next/image";

export default function BlogGrid() {
  const blogPosts = [
    {
      category: "Design",
      title: "DCFC chargers: advantages and why to choose them",
      description: "How do you know when fast chargers are the best option to install in a business?",
      author: "Olivia Rhye",
      date: "20 Jan 2024",
      mainImage: "/post1.png",
      profileImage: "/profile1.png",
    },
    {
      category: "Design",
      title: "Which EV charging station is best for my business?",
      description: "Installing EV charging stations is a strategic necessity for businesses.",
      author: "Phoenix Baker",
      date: "19 Jan 2024",
      mainImage: "/post2.png",
      profileImage: "/profile2.png",
    },
    {
      category: "Design",
      title: "100 reasons to drive an electric vehicle",
      description: "We support Blink Charging’s campaign.",
      author: "Lana Steiner",
      date: "18 Jan 2024",
      mainImage: "/post3.png",
      profileImage: "/profile3.png",
    },
    {
      category: "Management",
      title: "Bill Walsh leadership lessons",
      description: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      author: "Alec Whitten",
      date: "17 Jan 2024",
      mainImage: "/post4.png",
      profileImage: "/profile4.png",
    },
    {
      category: "Product",
      title: "PM mental models",
      description: "Mental models are simple expressions of complex processes or relationships.",
      author: "Demi Wilkinson",
      date: "16 Jan 2024",
      mainImage: "/post5.png",
      profileImage: "/profile5.png",
    },
    {
      category: "Design",
      title: "What is Wireframing?",
      description: "Introduction to Wireframing and its principles. Learn from the best in the industry.",
      author: "Candice Wu",
      date: "15 Jan 2024",
      mainImage: "/post6.png",
      profileImage: "/profile6.png",
    },
    {
      category: "Design",
      title: "How collaboration makes us better designers",
      description: "Collaboration can make our teams stronger, and our individual designs better.",
      author: "Natali Craig",
      date: "14 Jan 2024",
      mainImage: "/post7.png",
      profileImage: "/profile7.png",
    },
    {
      category: "Product",
      title: "Our top 10 JavaScript frameworks to use",
      description: "JavaScript frameworks make development easy with extensive features and functionalities.",
      author: "Drew Cano",
      date: "13 Jan 2024",
      mainImage: "/post8.png",
      profileImage: "/profile8.png",
    },
    {
      category: "Customer Success",
      title: "Podcast: Creating a better CX Community",
      description: "Starting a community doesn't need to be complicated, but how do you get started?",
      author: "Orlando Diggs",
      date: "12 Jan 2024",
      mainImage: "/post9.png",
      profileImage: "/profile9.png",
    },
  ];

  return (
    <div className="mt-[-150px] py-12">
      <div className="app-width max-w-7xl mx-auto">
        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl shadow-lg p-5 transition-transform duration-300 hover:scale-105"
            >
              {/* Main Image */}
              <div className="relative w-full h-52">
                <Image
                  src={post.mainImage}
                  alt={post.title}
                  layout="fill"
                  className="rounded-lg object-cover"
                />
              </div>

              {/* Text Content */}
              <div className="mt-4">
                <p className="text-blue-600 text-sm font-semibold">{post.category}</p>
                <h3 className="text-2xl font-bold mt-2">{post.title}</h3>
                <p className="text-gray-600 mt-2">{post.description}</p>
              </div>

              {/* Author Section */}
              <div className="flex items-center mt-4">
                {/* Profile Image */}
                <Image
                  src={post.profileImage}
                  alt={post.author}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <div className="ml-3 text-sm text-gray-500">
                  <p>{post.author}</p>
                  <p>{post.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-10 flex justify-center">
          <button className="px-6 py-3 bg-blue-200 text-blue-700 rounded-2xl shadow-md hover:bg-blue-300 transition">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
}
