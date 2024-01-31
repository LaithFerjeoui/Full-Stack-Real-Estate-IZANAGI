import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { MdOutlinePrivacyTip } from "react-icons/md";
const PrivacyPolicyDialog = ({ open, onClose }) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <div>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100">
                    <MdOutlinePrivacyTip size={32} color="blue" />
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-base font-semibold leading-6 text-gray-900"
                    >
                      Privacy Policy for Izanagi Real Estate
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                      Izanagi Real Estate ("us", "we", or "our") operates the Izanagi website at <span className="font-medium italic">izanagi-real-estate.vercel.app</span> (the "Site"). This privacy policy outlines how we collect, use, and protect personal information obtained from users of the Site.
                        <br /> <br />
                        <span className="font-bold">
                          Information Collection
                        </span>{" "}
                        <br />
                        We may request personally identifiable information such
                        as name, email, address, and phone number ("Personal
                        Information"). Additionally, we collect standard Log
                        Data, including IP address and browsing details. <br />
                        <span className="font-bold">
                          Use of Information
                        </span>{" "}
                        <br />
                        We use Personal Information to enhance and personalize
                        user experience on our Site. Log Data helps us analyze
                        and improve our services. Cookies are employed for
                        efficient site functionality. <br />
                        <span className="font-bold">Security</span>
                        <br />
                        While we employ industry-standard measures to safeguard
                        Personal Information, no online transmission is entirely
                        secure. Users acknowledge and accept this inherent risk.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={onClose}
                  >
                    Understood
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default PrivacyPolicyDialog;
