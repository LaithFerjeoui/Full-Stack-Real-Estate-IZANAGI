import React from "react";
import { Disclosure } from '@headlessui/react'
import { HiShieldCheck } from "react-icons/hi";
import { MdCancel, MdAnalytics } from "react-icons/md";
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import data from "../utils/accordion";
const Value = () => {
  return (
    <section>
        
      <div className="paddings innerWidth valueFlex v-container">
        <div className="v-left flex-1">
          <div className="flexCenter w-[480px] h-[560px] overflow-hidden  rounded-t-full border-8 border-solid border-neutral-800">
            <img src="./value.png" alt="" className="w-[100%] h-[100%]"/>
          </div>
        </div>
        <div className="flexColStart gap-1 flex-1">
          <span className="orangeText"> Our Value</span>
          <span className="primaryText"> Value We Give to You</span>
          <span className="secondaryText">
            We always ready to help by providijng the best services for you.{" "}
            <br />
            We beleive a good blace to live can make your life better
          </span>
    
      <div className="max-w-xl sm:py-10 ">
        <div className="mx-auto max-w-md divide-y divide-gray-900/10">
          
          <dl className=" space-y-6 divide-y divide-gray-900/10">
          {data.map((item) => (
            <Disclosure as="div" key={item.heading} className="pt-6">
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                      <div className="flex items-center">
                        {item.icon && <span className="mr-2">{item.icon}</span>}
                        <span className="text-base font-semibold leading-7">{item.heading}</span>
                      </div>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                        ) : (
                          <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd" className="mt-2 pr-12">
                    <p className="text-base leading-7 text-gray-600">{item.detail}</p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
          </dl>
        </div>
      </div>
    
        </div>
      </div>
    </section>
  );
};

export default Value;
