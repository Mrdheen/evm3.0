import Image from "next/image";

const PartnersLogos = () => {
  const row1 = [
    { src: "/logos/webasto.png", className:"logo-webasto"},
    { src: "/logos/tesla.png", className:"logo-tesla"},
    { src: "/logos/maxwell.png", className:"logo-maxwell"},
    { src: "/logos/abb.png", className:"logo-abb"},
    { src: "/logos/enelx.png", className:"logo-enelx"},
  ];

  const row2 = [
    { src: "/logos/bosch.png", className:"logo-bosch"},
    { src: "/logos/enphase.png", className:"logo-enphase"},
    { src: "/logos/chargepoint.png", className:"logo-chargepoint"},
    { src: "/logos/amazon.png", className:"logo-amazon"},
    { src: "/logos/asana.png", className:"logo-asana"},
  ];

  return (
    <section className="py-12 bg-white">
      <div className="app-width space-y-8">
        {/* Row 1 */}
        <div className="flex justify-center flex-wrap gap-8 lg:gap-12">
          {row1.map((logo, index) => (
            <div key={index} className={`relative ${logo.className}`}>
              <Image
                src={logo.src}
                alt={`Logo ${index}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex justify-center flex-wrap gap-8 lg:gap-12">
          {row2.map((logo, index) => (
            <div key={index} className={`relative ${logo.className}`}>
              <Image
                src={logo.src}
                alt={`Logo ${index + 5}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersLogos;
