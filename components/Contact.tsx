import React from 'react'

import { COMPANY_DETAILS } from '../constants'

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-black py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          <div>
            <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs block mb-6">
              Contact Us
            </span>

            <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase leading-tight mb-8">
              {"Let's Build"} <br /> Something Great
            </h2>

            <div className="mt-6 space-y-6 text-slate-400">
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">
                  General Enquiries
                </p>
                <a href="mailto:contact@sbainfra.com" className="hover:text-white">
                  contact@sbainfra.com
                </a>
              </div>

              <div>
                <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">
                  Sales Enquiries
                </p>
                <a href="mailto:sales@sbainfra.com" className="hover:text-white">
                  sales@sbainfra.com
                </a>
              </div>

              <div>
                <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">
                  Managing Director
                </p>
                <a href="mailto:md@sbainfra.com" className="hover:text-white">
                  md@sbainfra.com
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-end">
            <div className="mb-8">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-4">
                Headquarters
              </h4>
              <address className="not-italic text-slate-400">
                {COMPANY_DETAILS.address}
                <br />
                Satya Sai District, Andhra Pradesh
              </address>
            </div>

            <div className="mb-8">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-4">
                Branch Office
              </h4>
              <address className="not-italic text-slate-400">
                #203, Above Canara Bank <br />
                Mahima Sai Pradhan <br />
                Maruthi Nagar, Kogilu Main Road <br />
                Yelahanka, Bangalore – 560064
              </address>
            </div>

            <div>
              <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-4">
                Phone
              </h4>
              <p className="text-slate-400">{COMPANY_DETAILS.phone}</p>
            </div>
          </div>

        </div>

        <div className="mt-24 pt-8 border-t border-white/5 flex justify-between text-slate-600 text-[10px] uppercase tracking-widest">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY_DETAILS.name}
          </p>
          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Contact
