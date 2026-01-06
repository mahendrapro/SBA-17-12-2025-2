import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="
        relative
        w-full
        bg-gradient-to-b
        from-black
        via-slate-900
        to-black
        px-5
        py-24
        md:py-32
      "
    >
      <div className="max-w-3xl mx-auto text-center">

        {/* QUOTE ICON */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-accent text-4xl mb-4"
        >
          ❝
        </motion.div>

        {/* QUOTE */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            text-white
            font-display
            font-bold
            uppercase
            leading-snug
            tracking-wide
            [font-size:clamp(1.25rem,4vw,2.25rem)]
          "
        >
          To build a strong future ensuring increased revenues and enhanced
          support to associates, while strictly adhering to quality and safety.
        </motion.h2>

        {/* DIVIDER */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "64px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="h-1 bg-accent mx-auto my-8"
        />

        {/* DIRECTOR NAME */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="
            text-white
            font-semibold
            [font-size:clamp(1rem,3vw,1.25rem)]
          "
        >
          Mr. C. Krishna Kumar
        </motion.h3>

        {/* DESIGNATION */}
        <p className="text-slate-400 uppercase tracking-widest text-[11px] mt-2">
          Founder & Managing Director
        </p>

        {/* QUALIFICATION */}
        <p className="text-slate-500 text-xs mt-1">
          Post Graduate in Management | Mechanical Engineering
        </p>
      </div>
    </section>
  );
};

export default About;
