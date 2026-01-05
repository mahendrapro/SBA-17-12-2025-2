import React from "react";

/* ======================================================
   CLIENTS & PARTNERS – CONTINUOUS SCROLLING ROWS
====================================================== */

const clients = [
  { name: "Berger Paints", logo: "/images/clients/berger.png" },
  { name: "British Paints", logo: "/images/clients/british-paints.png" },
  { name: "Wipro", logo: "/images/clients/wipro.png" },
  { name: "Joyalukkas Foundation", logo: "/images/clients/joyalukkas.png" },
  { name: "Suzlon Infrastructure", logo: "/images/clients/suzlon.png" },
  { name: "Tirupati Steels", logo: "/images/clients/tirupati-steels.png" },
  { name: "Government of Andhra Pradesh", logo: "/images/clients/govt-andhra-pradesh.png" },
  { name: "Government of Karnataka", logo: "/images/clients/govt-karnataka.png" },
  { name: "Indian Railways", logo: "/images/clients/irctc.png" },
  { name: "KIADB", logo: "/images/clients/kiadb.png" },
];

const municipalities = [
  "Hindupur Municipality",
  "Hospet Municipality",
  "Chitradurga Municipality",
  "Gauribidanur Municipality",
];

const partners = [
  { name: "NSL", logo: "/images/clients/nsl.png" },
  { name: "IVRCL", logo: "/images/clients/ivrcl.png" },
  { name: "GVPR", logo: "/images/clients/gvpr.png" },
  { name: "L&T", logo: "/images/clients/lnt.png" },
];

/* ======================================================
   REUSABLE COMPONENTS
====================================================== */

const ScrollingRow: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="relative w-full overflow-hidden">
    <div className="flex items-center gap-12 animate-client-scroll hover:[animation-play-state:paused] whitespace-nowrap">
      {children}
      {children}
    </div>
  </div>
);

const LogoCard: React.FC<{ src: string; name: string }> = ({ src, name }) => (
<div className="flex items-center justify-center min-w-[200px] h-28 bg-white/5 border border-white/10 rounded-lg px-6">
  <img
  src={src}
  alt={name}
  className="max-h-24 object-contain"
/>

  </div>
);

const MunicipalityCard: React.FC<{ name: string }> = ({ name }) => (
<div className="flex items-center justify-center min-w-[200px] h-28 bg-white/5 border border-white/10 rounded-lg px-6">
    <span className="text-white text-sm font-bold uppercase tracking-wide">
      {name}
    </span>
    <span className="text-slate-400 text-[10px] uppercase tracking-widest mt-1">
      Municipality
    </span>
  </div>
);

/* ======================================================
   MAIN SECTION
====================================================== */

const OurClients: React.FC = () => {
  return (
    <section id="clients" className="py-28 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* OUR ESTEEMED CLIENTS */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-widest text-white mb-8">
            Our Esteemed Clients
          </h2>

          <ScrollingRow>
            {clients.map((client) => (
              <LogoCard
                key={client.name}
                src={client.logo}
                name={client.name}
              />
            ))}

            {municipalities.map((name) => (
              <MunicipalityCard key={name} name={name} />
            ))}
          </ScrollingRow>
        </div>

        {/* OUR STRATEGIC PARTNERS */}
        <div>
          <h2 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-widest text-white mb-8">
            Our Strategic Partners
          </h2>

          <ScrollingRow>
            {partners.map((partner) => (
              <LogoCard
                key={partner.name}
                src={partner.logo}
                name={partner.name}
              />
            ))}
          </ScrollingRow>
        </div>

      </div>
    </section>
  );
};

export default OurClients;
