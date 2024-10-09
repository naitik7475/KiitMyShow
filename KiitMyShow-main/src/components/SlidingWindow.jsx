import { Icon } from "@iconify/react/dist/iconify.js";
import { Carousel } from "flowbite-react";

export default function SlidingWindow() {
  return (
    <div className="h-128 sm:h-64 xl:h-128 2xl:h-128">
      <Carousel onSlideChange={(index) => console.log('onSlideChange()', index)}>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white relative">
        <img src="/images.jpg" alt="chandni chowk to china" className="h-full w-full"/>
          <div className="z-20 absolute upperportion bottom-12 left-40">          
            <div className="flex flex-col">
              <div className="font-bold text-3xl my-2 text-button"> Movie Title (2024)</div>
              <div className="flex gap-4">
                <div className="flex gap-1 items-center">
                  <Icon icon="uil:calender" style={{color:"#9cafa3"}}/>
                  <p className="text-gray-400 font-normal">release date</p>
                </div>
                <div className="flex gap-1 items-center">
                  <Icon icon="flowbite:clock-outline" style={{color:"#9cafa3"}}/>
                  <p className="text-gray-400 font-normal">Duration</p>
                </div>
              </div>
              <div className="flex my-4 gap-8">
                <div className="bg-button text-white flex rounded p-3 gap-1 items-center">
                  <Icon icon="ri:coupon-3-fill" />
                  <div className="font-semibold text-gray-200">Get Ticket</div>
                </div>
                <div className="flex my-3 font-semibold">
                    <Icon icon="humbleicons:play" width="24" height="24"  style={{color:"#075985"}} />
                    <div className="text-button ">
                    Watch Trailer
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        <img src="/images.jpg" alt="chandni chowk to china" className="h-full w-full"/>
          <div className="z-20 absolute upperportion bottom-12 left-40">          
            <div className="flex flex-col">
              <div className="font-bold text-3xl my-2 text-button"> Movie Title (2024)</div>
              <div className="flex gap-4">
                <div className="flex gap-1 items-center">
                  <Icon icon="uil:calender" style={{color:"#9cafa3"}}/>
                  <p className="text-gray-400 font-normal">release date</p>
                </div>
                <div className="flex gap-1 items-center">
                  <Icon icon="flowbite:clock-outline" style={{color:"#9cafa3"}}/>
                  <p className="text-gray-400 font-normal">Duration</p>
                </div>
              </div>
              <div className="flex my-4 gap-8">
                <div className="bg-button text-white flex rounded p-3 gap-1 items-center">
                  <Icon icon="ri:coupon-3-fill" />
                  <div className="font-semibold text-gray-200">Get Ticket</div>
                </div>
                <div className="flex my-3 font-semibold">
                    <Icon icon="humbleicons:play" width="24" height="24"  style={{color:"#075985"}} />
                    <div className="text-button ">
                    Watch Trailer
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        <img src="/images.jpg" alt="chandni chowk to china" className="h-full w-full"/>
          <div className="z-20 absolute upperportion bottom-12 left-40">          
            <div className="flex flex-col">
              <div className="font-bold text-3xl my-2 text-button"> Movie Title (2024)</div>
              <div className="flex gap-4">
                <div className="flex gap-1 items-center">
                  <Icon icon="uil:calender" style={{color:"#9cafa3"}}/>
                  <p className="text-gray-400 font-normal">release date</p>
                </div>
                <div className="flex gap-1 items-center">
                  <Icon icon="flowbite:clock-outline" style={{color:"#9cafa3"}}/>
                  <p className="text-gray-400 font-normal">Duration</p>
                </div>
              </div>
              <div className="flex my-4 gap-8">
                <div className="bg-button text-white flex rounded p-3 gap-1 items-center">
                  <Icon icon="ri:coupon-3-fill" />
                  <div className="font-semibold text-gray-200">Get Ticket</div>
                </div>
                <div className="flex my-3 font-semibold">
                    <Icon icon="humbleicons:play" width="24" height="24"  style={{color:"#075985"}} />
                    <div className="text-button ">
                    Watch Trailer
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
