import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useAlert } from "./AlertProvider";
export default function Partners() {
  const { t } = useTranslation();

  const showAlert = useAlert();
  
  const partnersObj = [{
    name: t("partners.riders.title"),
    nameColor: "text-white",
    bgColor: "bg-[#203260]",
    descriptionColor: "text-white/90",
    description: t("partners.riders.description"),
    buttonText: t("partners.riders.download"),
    btnColor: "bg-[#FF8242]",
    btnHoverColor: "hover:bg-[#ff956b]",
    link: "#",
    mockupImage: "/images/rider_app_mockup.png",
    overlayColor: "bg-[#203260]",
    onClick : () => showAlert("New order received! 🚴‍♂️", "info"),
  },
  {
    name: t("partners.stores.title"),
    // nameColor: "text-[#203260]",
    nameColor: "text-white",
    bgColor: "bg-white",
    // descriptionColor: "text-gray-700",
    descriptionColor: "text-white/90",
    description: t("partners.stores.description"),
    buttonText: t("partners.stores.download"),
    btnColor: "bg-[#203260]",
    btnHoverColor: "hover:bg-[#2a4277]",
    link: "#",
    mockupImage: "/images/store_app_mockup.png",
    overlayColor: "bg-[#ff956b]",
    onClick : () => showAlert("New order received! 🚴‍♂️", "error"),
  }]

  return (
    <main className="relative">
      {partnersObj.map((partner, index) => (
        <section
          key={index}
          id="partners"
          className={`relative ${partner.bgColor} lg:h-[40vh] flex items-center justify-center lg:m-12 m-6 lg:p-12 p-6 grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden mb-20 bg-[url('/images/partners.png')] bg-cover`}
        >
        <div className={`max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center lg:text-auto text-center`}>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 max-w-3xl px-6"
          >
            <h2
              className={`text-2xl lg:text-4xl font-bold mb-6 ${partner.nameColor}`}
            >
              {partner.name}
            </h2>
            <p
              className={`text-md lg:text-lg mb-8 ${partner.descriptionColor}`}
            >
              {partner.description}
            </p>

          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 max-w-3xl px-6"
          >
            <div className="flex justify-center">
              <button
                onClick={partner.onClick}
                className={`inline-flex items-center justify-center px-8 py-3 rounded-full ${partner.btnColor} text-white ${partner.btnHoverColor} transition-colors`}
              >
                {partner.buttonText}
              </button>
            </div>
          </motion.div>
          {/* Overlay */}
          <div
            className={`absolute inset-0 ${partner.overlayColor} opacity-80`}
          ></div>
        </div>
        </section>
      ))}
    </main>
  );
}
