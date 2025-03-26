import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="py-16 bg-[#0A1B2D] text-white">
      <div className="max-w-7xl mx-auto ">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h2 className="text-xl text-orange-400 font-semibold">
              What They Are Saying About Us
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold leading-tight mt-2">
              Discover more and <br /> dive into the details of Maxwell.
            </h3>
          </div>
          <p className="text-gray-400 max-w-md text-xl">
            Here are testimonials from customers who are thrilled with the products
            and services we&apos;ve delivered.
          </p>
            {/* Navigation Arrows */}
            <div className="flex justify-end space-x-4 mt-25">
                <button className="transform hover:scale-110 transition-transform" title="Previous">
                    <Image src="/leftd.png" alt="✔️" width={50} height={50} />
                </button>
                <button className="transform hover:scale-110 transition-transform" title="Next">
                    <Image src="/rightd.png" alt="✔️" width={50} height={50} />
                </button>
            </div>
        </div>

        {/* Testimonials Container */}
        <div className="flex space-x-20 overflow-x-auto scrollbar-hide">
          {/* Testimonial Card 1 */}
          <div className="bg-[#0A1B2D] p-6 rounded-3xl border border-gray-600 flex items-center space-x-6 w-[600px]">
            <Image
              src="/user1.png"
              alt="David Lee"
              width={240}
              height={240}
              className="rounded-3xl"
            />
            <div>
              <div className="flex space-x-1 text-yellow-400 text-xl mb-2">
                {"★★★★★".split("").map((star, index) => (
                  <span key={index}>{star}</span>
                ))}
              </div>
              <p className="text-gray-300 text-lg">
                As a new EV owner, I was overwhelmed by charging. Thankfully, Maxwell
                makes it effortless! The live map shows nearby stations, and the
                reservation option ensures I never find a full station.
              </p>
              <p className="font-bold mt-4">David Lee</p>
            </div>
          </div>

          {/* Testimonial Card 2 */}
          <div className="bg-[#0A1B2D] p-6 rounded-3xl border border-gray-600 flex items-center space-x-6 w-[600px]">
            <Image
              src="/user2.png"
              alt="Emily Johnson"
              width={240}
              height={240}
              className="rounded-3xl"
            />
            <div>
              <div className="flex space-x-1 text-yellow-400 text-xl mb-2">
                {"★★★★★".split("").map((star, index) => (
                  <span key={index}>{star}</span>
                ))}
              </div>
              <p className="text-gray-300 text-lg">
                Maxwell has changed how we manage our vehicle fleet. The app helps find
                chargers, monitor times, and plan routes. Our team loves the UI, reducing downtime.
              </p>
              <p className="font-bold mt-4">Emily Johnson</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
