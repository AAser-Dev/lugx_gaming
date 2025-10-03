import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TabsSection() {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="container bg-body-secondary rounded-4 mt-5">
      {/* الأزرار */}
      <div className="container pt-3">
        <div className="d-flex gap-5 p-3">
          <button
            className={`btn fw-bold fs-4 ${
              activeTab === "description" ? "text-primary" : "text-secondary"
            }`}
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>
          <button
            className={`btn fw-bold fs-4 ${
              activeTab === "reviews" ? "text-primary" : "text-secondary"
            }`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews (3)
          </button>
        </div>
      </div>

      {/* المحتوى مع الأنيميشن */}
      <div className="container text-body-secondary ps-5 lh-lg pb-4 mb-5">
        <AnimatePresence mode="wait">
          {activeTab === "description" && (
            <motion.div
              key="description"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <p className="pt-2">
                You can search for more templates on Google Search using keywords
                such as "templatemo digital marketing", "templatemo one-page",
                "templatemo gallery", etc. Please tell your friends about our
                website. If you need a variety of HTML templates, you may visit
                Tooplate and Too CSS websites.
              </p>
              <p className="pt-3">
                Coloring book air plant shabby chic, crucifix normcore raclette
                cred swag artisan activated charcoal. PBR&B fanny pack pok pok
                gentrify truffaut kitsch helvetica jean shorts edison bulb
                poutine next level humblebrag la croix adaptogen. Hashtag poke
                literally locavore, beard marfa kogi bruh artisan succulents
                seitan tonx waistcoat chambray taxidermy.
              </p>
            </motion.div>
          )}

          {activeTab === "reviews" && (
            <motion.div
              key="reviews"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <p className="pt-2">
                Coloring book air plant shabby chic, crucifix normcore raclette
                cred swag artisan activated charcoal. PBR&B fanny pack pok pok
                gentrify truffaut kitsch helvetica jean shorts edison bulb
                poutine next level humblebrag la croix adaptogen.
              </p>
              <p className="pt-3">
                Hashtag poke literally locavore, beard marfa kogi bruh artisan
                succulents seitan tonx waistcoat chambray taxidermy. Same cred
                meggings 3 wolf moon lomo irony cray hell of bitters asymmetrical
                gluten-free art party raw denim chillwave tousled try-hard
                succulents street art.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
