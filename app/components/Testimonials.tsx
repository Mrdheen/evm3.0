import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="py-16 bg-[#0A1B2D] text-white">
      <div className="app-width max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div>
            <h2 className="text-orange-400 font-semibold">
              What They Are Saying About Us
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold mt-4">
              Discover more and <br /> dive into the details of Maxwell.
            </h3>
          </div>
          <p className="text-gray-400 max-w-md mt-4 md:mt-0">
            Here are testimonials from customers who are thrilled with the products
            and services we&apos;ve delivered.
          </p>
        </div>

        {/* Navigation Arrows - Centered on Mobile */}
        <div className="flex justify-center md:justify-end space-x-4 mt-6 md:mt-0">
          <button className="transform hover:scale-110 transition-transform" title="Previous">
            <Image src="/leftd.png" alt="Previous" width={50} height={50} />
          </button>
          <button className="transform hover:scale-110 transition-transform" title="Next">
            <Image src="/rightd.png" alt="Next" width={50} height={50} />
          </button>
        </div>

        {/* Testimonials Container */}
        <div className="flex flex-wrap md:flex-nowrap gap-6 overflow-x-auto scrollbar-hide mt-8">
          {/* Testimonial Card 1 */}
          <div className="bg-[#0A1B2D] p-6 rounded-3xl border border-gray-600 flex flex-col md:flex-row items-center space-x-0 md:space-x-6 w-full md:w-[600px]">
            <Image
              src="/user1.png"
              alt="David Lee"
              width={240}
              height={240}
              className="rounded-3xl"
            />
            <div className="text-center md:text-left mt-4 md:mt-0">
              <div className="flex justify-center md:justify-start space-x-1 text-orange-400 text-xl mb-2">
                {"★★★★★".split("").map((star, index) => (
                  <span key={index}>{star}</span>
                ))}
              </div>
              <p className="text-gray-300">
                As a new EV owner, I was overwhelmed by charging. Thankfully, Maxwell
                makes it effortless! The live map shows nearby stations, and the
                reservation option ensures I never find a full station.
              </p>
              <p className="font-bold text-lg mt-4">David Lee</p>
            </div>
          </div>

          {/* Testimonial Card 2 */}
          <div className="bg-[#0A1B2D] p-6 rounded-3xl border border-gray-600 flex flex-col md:flex-row items-center space-x-0 md:space-x-6 w-full md:w-[600px]">
            <Image
              src="/user2.png"
              alt="Emily Johnson"
              width={240}
              height={240}
              className="rounded-3xl"
            />
            <div className="text-center md:text-left mt-4 md:mt-0">
              <div className="flex justify-center md:justify-start space-x-1 text-orange-400 text-xl mb-2">
                {"★★★★★".split("").map((star, index) => (
                  <span key={index}>{star}</span>
                ))}
              </div>
              <p className="text-gray-300">
                Maxwell has changed how we manage our vehicle fleet. The app helps find
                chargers, monitor times, and plan routes. Our team loves the UI, reducing downtime.
              </p>
              <p className="font-boldtext-lg mt-4">Emily Johnson</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
