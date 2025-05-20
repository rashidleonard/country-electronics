import Image from "next/image";

const electronicsBrands = [
  "Apple",
  "Samsung",
  "Sony",
  "LG",
  "Panasonic",
  "Dell",
  "HP",
  "Lenovo",
  "Asus",
  "Acer",
  "Microsoft",
  "Intel",
  "NVIDIA",
  "AMD",
  "Bose",
  "Canon",
  "Philips",
  "Xiaomi",
  "OnePlus",
  "Huawei",
];

export default function Home() {
  return (
    <div className="font-semibold">
      <section className="container mt-4">
        <div className="h-[80vh] bg-grey"></div>
      </section>

      <section className="mt-20 container">
        <h2 className="font-bold">Browse Categories</h2>

        <div className="mt-8 grid grid-cols-3 gap-[20px]">
          <div className="h-100 w-full bg-grey grid place-content-center">
            <Image src="/ac.png" width={350} height={350} alt="" />
          </div>
          <div className="h-100 w-full bg-grey grid place-content-center">
            <Image src="/fridge.png" width={350} height={350} alt="" />
          </div>
          <div className="h-100 w-full bg-grey grid place-content-center">
            <Image src="/microwave.png" width={350} height={350} alt="" />
          </div>
        </div>
      </section>

      <section className="mt-20 container">
        <h2 className="font-bold">Browse Brands</h2>

        <div className="mt-8 flex flex-wrap gap-4">
          {electronicsBrands.map((brand) => {
            return (
              <div key={brand} className="bg-grey outline py-3 px-6">
                {brand}
              </div>
            );
          })}
        </div>
      </section>

      <section className="mt-20 container">
        <div className="flex items-center justify-between">
          <h2 className="font-bold">Popular Products</h2>

          <p>See All</p>
        </div>

        <div className="mt-8 grid grid-cols-4 gap-4">
          <div>
            <div className="bg-grey h-70"></div>
            <h3 className="mt-4 leading-6">
              Westpool WP-408A Twin Tub Top Load Washing Machine - 4Kg - White
            </h3>
            <p className="mt-6 text-black/50">GHS 1,600</p>
          </div>
          <div>
            <div className="bg-grey h-70"></div>
            <h3 className="mt-4 leading-6">
              Delron DWM-008VP Twin Tub Washing Machine - 7kg - White
            </h3>
            <p className="mt-6 text-black/50">GHS 2,805</p>
          </div>
          <div>
            <div className="bg-grey h-70"></div>
            <h3 className="mt-4 leading-6">
              Nasco NASTT-B60FL 6KG Semi Automatic Twin Tub Washing Machine -
              White
            </h3>
            <p className="mt-6 text-black/50">GHS 1,744</p>
          </div>
          <div>
            <div className="bg-grey h-70"></div>
            <h3 className="mt-4 leading-6">
              minMAX 1.5 Litres - 3-in-1 Professional Commercial Electric
              Blender - White/Silver
            </h3>
            <p className="mt-6 text-black/50">GHS 480</p>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="h-[1px] bg-black/10" />

        <div className="py-24 grid grid-cols-3 justify-items-center container">
          <div className="flex flex-col items-center lg:w-[65%]">
            <div className="h-12 aspect-square bg-black/20 rounded-full"></div>
            <p className="font-semibold text-center mt-6">
              Obsessively Curated
            </p>
            <p className="font-normal mt-2 text-black/50 text-center">
              Shop the new luxury featuring the best of the best in Design,
              Style, and Art.
            </p>
          </div>

          <div className="flex flex-col items-center lg:w-[65%]">
            <div className="h-12 aspect-square bg-black/20 rounded-full"></div>
            <p className="font-semibold text-center mt-6">
              Sellers You Can Trust
            </p>
            <p className="font-normal mt-2 text-black/50 text-center">
              Access our exclusive community of trusted sellers, hand-picked by
              our team.
            </p>
          </div>

          <div className="flex flex-col items-center lg:w-[65%]">
            <div className="h-12 aspect-square bg-black/20 rounded-full"></div>
            <p className="font-semibold text-center mt-6">
              Shipping Tailored to You
            </p>
            <p className="font-normal mt-2 text-black/50 text-center">
              We take extra care with your orders with custom shipping options
              and premium, white glove service offerings.
            </p>
          </div>
        </div>

        <div className="h-[1px] bg-black/10" />
      </section>

      {/* <section className="mt-20">
        <h2 className="font-bold">FAQs</h2>

        <div className="mt-8">
          <p className="font-semibold">
            Do I need an account to place an order?
          </p>
          <p className="font-normal mt-2">
            No, all you need is an email address to place and track orders. To
            checkout faster, access your wishlist and order updates, we
            recommend setting up a FARFETCH account.
          </p>

          <div className="h-[1px] bg-black/50 my-6" />

          <p className="font-semibold">
            Do I need an account to place an order?
          </p>
          <p className="font-normal mt-2">
            No, all you need is an email address to place and track orders. To
            checkout faster, access your wishlist and order updates, we
            recommend setting up a FARFETCH account.
          </p>
        </div>
      </section> */}
    </div>
  );
}

// A photorealistic image of a modern microwave, sleek white design, isolated on a transparent background, suitable for e-commerce display.
