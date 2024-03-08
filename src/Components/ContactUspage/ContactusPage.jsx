const ContactusPage = () => {
  return (
    <section>
      <div className="contactbg relative h-[60vh]">
        <div className="absolute left-[5%] top-2/4">
          <h1 className="text-4xl font-merriweather font-bold text-white">
            Contact Us
          </h1>
          <p className="uppercase text-white text-sm font-opensans">
            Home / <span className="text-sm font-bold">Contact Us</span>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 px-10 py-10 gap-y-4">
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl text-[#333] font-merriweather font-bold">
              Our Office
            </h1>
            <p className="text-lg text-[#777] font-opensans font-normal">
 1st floor, Commercial Plaza, 19 Nishter Block, Bahria Town Lahore
            </p>
          </div>
          <div className="flex gap-6">
            <div className="flex flex-col gap-4 pr-10">
              <h1 className="text-2xl text-[#333] font-merriweather font-bold">
                Our Motive
              </h1>
              <p className="text-base text-[#777] font-opensans font-normal">
              We are representatives of all poultry farmers across Pakistan and your central resource for all poultry concerns. Feel free to give appropriate suggestions for the betterment of Farmer community.Our aim is to give Poultry Farmers a separate but strong identity.
              </p>
             
            </div>
            
          </div>
        </div>
        <div>
          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="yourName">Your Name (required)</label>
              <input
                type="text"
                name="yourname"
                className="py-4 px-4 w-full outline-none border-2 border-slate-400"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="youremail">Your Email (required)</label>
              <input
                type="email"
                name="youremail"
                className="py-4 px-4 w-full outline-none border-2 border-slate-400"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="yoursubject">Subject</label>
              <input
                type="text"
                name="yoursubject"
                className="py-4 px-4 w-full outline-none border-2 border-slate-400"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="yourmessage">Your Message</label>
              <textarea
                cols={30}
                rows={5}
                name="yourmessage"
                className="py-4 px-4 w-full outline-none border-2 border-slate-400"
              />
            </div>
            <div className="flex">
              <button className="rounded-full bg-primarycl text-white py-2 px-10 w-40">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>

    </section>
  );
};

export default ContactusPage;
