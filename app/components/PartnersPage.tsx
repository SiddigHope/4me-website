import Image from "next/image";
import { motion } from "framer-motion";

export default function PartnersPage() {
  return (
    <main className="relative">
      {/* Banner 1 – Riders / Delivery Captains */}
      <section className="relative bg-[#203260] text-white py-20 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Become a Delivery Captain 🚴‍♂️
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8">
              Join our growing fleet of riders and earn money while delivering
              happiness. Flexible hours, real-time tracking, and instant
              payouts. Be part of the future of delivery.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#FF8242] text-white hover:bg-[#ff956b] transition-colors"
              >
                Download Rider App
              </a>
            </div>
          </motion.div>

          {/* Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <Image
              src="/images/rider_app_mockup.png"
              alt="Rider App Mockup"
              width={500}
              height={500}
              className="w-full h-auto rounded-3xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Banner 2 – Stores / Restaurants */}
      <section className="relative bg-white text-[#203260] py-20 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative order-last lg:order-first"
          >
            <Image
              src="/images/store_app_mockup.png"
              alt="Store App Mockup"
              width={500}
              height={500}
              className="w-full h-auto rounded-3xl"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Grow Your Business 🛍️
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 mb-8">
              Whether you run a restaurant, a coffee shop, or a local store,
              join our platform to reach more customers and increase your sales.
              Manage orders easily and grow your revenue with our support.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#203260] text-white hover:bg-[#2a4277] transition-colors"
              >
                Download Store App
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
