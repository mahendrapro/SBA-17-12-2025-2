import React from "react";

const clients = [
  "Berger Paints",
  "British Paints",
  "Wipro Enterprises",
  "Suzlon Infrastructure",
  "Joyalukkas",
  "L&T (Sub-contract)",
  "IVRCL",
  "NSL Group",
  "GVPR Engineers",
  "KIADB",
];


const OurClients: React.FC = () => {
  return (
    <section id="clients" className="py-32 bg-matte">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase mb-6">
          Our Clients
        </h2>

        <p className="text-slate-400 max-w-3xl mb-16">
          Sri Balaji Associates has executed projects for leading corporates,
          infrastructure companies, and government organizations across Andhra
          Pradesh and Karnataka.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clients.map((client) => (
            <div
              key={client}
              className="border border-white/10 p-6 text-center text-slate-300 text-sm uppercase tracking-widest bg-white/[0.02]"
            >
              {client}
            </div>
          ))}
        </div>

        <p className="text-xs text-slate-600 mt-12">
          *Detailed project credentials can be shared upon request.
        </p>

      </div>
    </section>
  );
};

export default OurClients;
