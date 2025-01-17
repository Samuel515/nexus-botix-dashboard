/** @format */

import React from "react";

const Integrations = () => {
  return (
    <div>
      <div className="container bg-gray2 p-4">
        <div className=" bg-gray3 rounded-md p-4">
          <h1 className=" font-bold text-[28px]">
            Connect Nexus Botix to your favourite apps
          </h1>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-5">
            {/* IG */}
            <div className=" bg-gray2 rounded-md p-5 flex flex-col items-start gap-3">
              <img src="/social-media-icons/IG.svg" />
              <h1 className=" font-medium text-[20px]">Instagram</h1>
              <p className=" text-[14px]">
                Use your chatbot to respond to incoming messages to your
                Instagram business account.
              </p>
              <a
                className=" gap-1 flex items-center underline font-semibold"
                href="#"
              >
                connect
                <img src="/social-media-icons/arrow-right.svg" />
              </a>
            </div>
            {/* WA */}
            <div className=" bg-gray2 rounded-md p-5 flex flex-col items-start gap-3">
              <img src="/social-media-icons/WA.svg" />
              <h1 className=" font-medium text-[20px]">Whatsapp</h1>
              <p className=" text-[14px]">
                Connect your chatbot to a WhatsApp business number for automatic
                24/7 responses.
              </p>
              <a
                className=" gap-1 flex items-center underline font-semibold"
                href="#"
              >
                connect
                <img src="/social-media-icons/arrow-right.svg" />
              </a>
            </div>
            {/* FM */}
            <div className=" bg-gray2 rounded-md p-5 flex flex-col items-start gap-3">
              <img src="/social-media-icons/FM.svg" />
              <h1 className=" font-medium text-[20px]">Messenger</h1>
              <p className=" text-[14px]">
                Use your chatbot to automatically reply to your Facebook pages
                messages or comments.
              </p>
              <a
                className=" gap-1 flex items-center underline font-semibold"
                href="#"
              >
                connect
                <img src="/social-media-icons/arrow-right.svg" />
              </a>
            </div>
            {/*ZA */}
            <div className=" bg-gray2 rounded-md p-5 flex flex-col items-start gap-3">
              <img src="/social-media-icons/ZA.svg" />
              <h1 className=" font-medium text-[20px]">Zapier</h1>
              <p className=" text-[14px]">
                Connect your bot with Zapier to integrate with more than 7000+
                apps.
              </p>
              <a
                className=" gap-1 flex items-center underline font-semibold"
                href="#"
              >
                connect
                <img src="/social-media-icons/arrow-right.svg" />
              </a>
            </div>
            {/* WP */}
            <div className=" bg-gray2 rounded-md p-5 flex flex-col items-start gap-3">
              <img src="/social-media-icons/WP.svg" />
              <h1 className=" font-medium text-[20px]">Wordpress</h1>
              <p className=" text-[14px]">
                Connect your bot with WordPress websites with a click of a
                button.
              </p>
              <a
                className=" gap-1 flex items-center underline font-semibold"
                href="#"
              >
                connect
                <img src="/social-media-icons/arrow-right.svg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integrations;
