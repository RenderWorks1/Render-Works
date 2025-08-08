import { CometCard } from "@/components/ui/comet-card";

export default function BenefitsCometCards() {
  return (
    <div className="max-w-6xl mx-auto px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10">
        {benefits.map((benefit, _idx) => (
          <CometCard key={benefit?.link}>
            <div className="flex w-full cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-6 h-80">
              <div className="flex-1 flex flex-col justify-start">
                <div className="font-sans text-white py-6">
                  <div className="text-xl font-medium mb-8 px-4">{benefit.title}</div>
                  <div className="relative mb-6">
                    <div className="h-px bg-gradient-to-r from-transparent via-white/60 to-transparent mx-4"></div>
                    <div className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-4 blur-sm"></div>
                  </div>
                  <div className="text-base text-gray-300 leading-relaxed px-4">{benefit.description}</div>
                </div>
              </div>
            </div>
          </CometCard>
        ))}
      </div>
    </div>
  );
}

const benefits = [
  {
    id: 1,
    title: "Boost Sales",
    description:
      "Increase property sales by up to 40% with compelling video walkthroughs that showcase your developments in their best light.",
    link: "#boost-sales",
  },
  {
    id: 2,
    title: "Marketing Power",
    description:
      "Create viral-worthy content for social media, websites, and advertising campaigns that drives qualified leads and investor interest.",
    link: "#marketing-power",
  },
  {
    id: 3,
    title: "Competitive Edge",
    description:
      "Stand out from competitors with Hollywood-quality videos that give potential buyers confidence and accelerate decision-making.",
    link: "#competitive-edge",
  },
]; 