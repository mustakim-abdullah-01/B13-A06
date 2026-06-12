import { Check } from "lucide-react";
import CommonButton from "../CommonButton";

const PricingCards = () => {
  return (
    <>
      <div className="container mx-auto gap-7.5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-30">
        <div className="border bg-[#f9fafc] border-[#f2f2f2] rounded-2xl shadow-md hover:shadow-[#4f39f6] hover:-translate-y-2.5 duration-700 transition-all space-y-6 p-6 flex-col flex justify-center h-112">
          <div className="space-y-2">
            <h3 className="font-bold text-2xl text-[#101727]">Starter</h3>
            <p className="text-[16px] text-[#627382]">
              Perfect for getting started
            </p>
          </div>

          <div>
            <p className="text-2xl font-bold">
              $0
              <span className="text-[20px] text-[#627382] font-normal">
                /Month
              </span>
            </p>
          </div>

          <div>
            <ul>
              <li className="flex gap-2">
                <span className="text-[16px] text-[#30b868]">
                  <Check />
                </span>
                <span className=" text-[16px] font-medium text-[#627382]">
                  Access to 10 free tools
                </span>
              </li>

              <li className="flex gap-2">
                <span className="text-[16px] text-[#30b868]">
                  <Check />
                </span>
                <span className=" text-[16px] font-medium text-[#627382]">
                  Basic templates
                </span>
              </li>

              <li className="flex gap-2">
                <span className="text-[16px] text-[#30b868]">
                  <Check />
                </span>
                <span className=" text-[16px] font-medium text-[#627382]">
                  Community support
                </span>
              </li>

              <li className="flex gap-2">
                <span className="text-[16px] text-[#30b868]">
                  <Check />
                </span>
                <span className=" text-[16px] font-medium text-[#627382]">
                  1 project per month
                </span>
              </li>
            </ul>
          </div>

          <CommonButton text={"Get Started Free"} w={"full"} />
          <div className="space-y-2"></div>
        </div>

        <div className="shadow-4xl -translate-y-3 bg-linear-to-br from-[#4f39f6] to-[#9514fa] rounded-2xl hover:-translate-y-6.5 duration-700 transition-all space-y-6 p-6 flex-col flex justify-center h-109.25 relative">
          <div className="badge badge-warning badge-soft bg-[#fef3c6] border-none rounded-full absolute -top-3 left-36 p-4 font-medium">
            <p>Most Popular</p>
          </div>

          <div className="space-y-2 text-white">
            <h3 className="font-bold text-2xl">Pro</h3>
            <p className="text-[16px]">Best for professionals</p>
          </div>

          <div>
            <p className="text-2xl font-bold text-white">
              $29
              <span className="text-[20px] font-normal">/Month</span>
            </p>
          </div>

          <div>
            <ul>
              <li className="flex gap-2 text-white">
                <span className="text-[16px]">
                  <Check />
                </span>
                <span className=" text-[16px] font-medium">
                  Access to all premium tools
                </span>
              </li>

              <li className="flex gap-2 text-white">
                <span className="text-[16px]">
                  <Check />
                </span>
                <span className=" text-[16px] font-medium">
                  Unlimited templates
                </span>
              </li>

              <li className="flex gap-2 text-white">
                <span className="text-[16px]">
                  <Check />
                </span>
                <span className=" text-[16px] font-medium">
                  Priority support
                </span>
              </li>

              <li className="flex gap-2 text-white">
                <span className="text-[16px]">
                  <Check />
                </span>
                <span className=" text-[16px] font-medium">
                  Unlimited projects
                </span>
              </li>

              <li className="flex gap-2 text-white">
                <span className="text-[16px]">
                  <Check />
                </span>
                <span className=" text-[16px] font-medium">Cloud sync</span>
              </li>

              <li className="flex gap-2 text-white">
                <span className="text-[16px]">
                  <Check />
                </span>
                <span className=" text-[16px] font-medium">
                  Advanced analytics
                </span>
              </li>
            </ul>
          </div>

          <button className="btn rounded-full py-4  bg-white ">
            <span className="text-transparent text-[16px] font-bold bg-clip-text bg-linear-to-r from-[#4f39f6] to-[#9514fa]">
              Start Pro Trial
            </span>
          </button>
          <div className="space-y-2"></div>
        </div>

        <div className="border bg-[#f9fafc] border-[#f2f2f2] rounded-2xl shadow-md hover:shadow-[#4f39f6] hover:-translate-y-2.5 duration-700 transition-all space-y-6 p-6 flex-col flex justify-center h-112">
          <div className="space-y-2">
            <h3 className="font-bold text-2xl text-[#101727]">Enterprise</h3>
            <p className="text-[16px] text-[#627382]">
              For teams and businesses
            </p>
          </div>

          <div>
            <p className="text-2xl font-bold">
              $99
              <span className="text-[20px] text-[#627382] font-normal">
                /Month
              </span>
            </p>
          </div>

          <div>
            <ul>
              <li className="flex gap-2">
                <span className="text-[16px] text-[#30b868]">
                  <Check />
                </span>
                <span className=" text-[16px] font-medium text-[#627382]">
                  Everything in Pro
                </span>
              </li>

              <li className="flex gap-2">
                <span className="text-[16px] text-[#30b868]">
                  <Check />
                </span>
                <span className=" text-[16px] font-medium text-[#627382]">
                  Team collaboration
                </span>
              </li>

              <li className="flex gap-2">
                <span className="text-[16px] text-[#30b868]">
                  <Check />
                </span>
                <span className=" text-[16px] font-medium text-[#627382]">
                  Custom integrations
                </span>
              </li>

              <li className="flex gap-2">
                <span className="text-[16px] text-[#30b868]">
                  <Check />
                </span>
                <span className=" text-[16px] font-medium text-[#627382]">
                  Dedicated support
                </span>
              </li>

              <li className="flex gap-2">
                <span className="text-[16px] text-[#30b868]">
                  <Check />
                </span>
                <span className=" text-[16px] font-medium text-[#627382]">
                  SLA guarantee
                </span>
              </li>

              <li className="flex gap-2">
                <span className="text-[16px] text-[#30b868]">
                  <Check />
                </span>
                <span className=" text-[16px] font-medium text-[#627382]">
                  Custom branding
                </span>
              </li>
            </ul>
          </div>

          <CommonButton text={"Contact Sales"} w={"full"} />
          <div className="space-y-2"></div>
        </div>
      </div>
    </>
  );
};

export default PricingCards;
