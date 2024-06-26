import Image from "next/image";
export default function Footer() {
  return (
    <div className="flex flex-col items-center text-center mt-10">
      <div className="font-bold text-2xl">Our Happy Clients</div>
      <div className="flex justify-center align-middle text-sm font-light w-[700px] mt-3">
        Professionally cultivate one-to-one customer service with robust ideas.
        Dynamically innovate resource-leveling customer service for state of the
        art customer service.
      </div>
      <div className="flex flex-wrap justify-center w-[1000px] mt-10">
        <Image
          src="/assets/Slack.png"
          height={236}
          width={200}
          alt=""
          className="pr-1 pt-1 z-10"
        />
        <Image
          src="/assets/Trello.png"
          height={236}
          width={200}
          alt=""
          className="pr-1 pt-1 z-10"
        />
        <Image
          src="/assets/Mailchimp.png"
          height={236}
          width={200}
          alt=""
          className="pr-1 pt-1 z-10"
        />
        <Image
          src="/assets/Medium.png"
          height={236}
          width={200}
          alt=""
          className="pr-1 pt-1 z-10"
        />
        <Image
          src="/assets/Google.png"
          height={236}
          width={200}
          alt=""
          className="pr-1 pt-1 z-10"
        />
        <Image
          src="/assets/Uber.png"
          height={236}
          width={200}
          alt=""
          className="pr-1 pt-1 z-10"
        />
        <Image
          src="/assets/Stripe.png"
          height={236}
          width={200}
          alt=""
          className="pr-1  pt-1 z-10"
        />
        <Image
          src="/assets/Shopify.png"
          height={236}
          width={200}
          alt=""
          className="pr-1 pt-1 z-10"
        />
        <Image
          src="/assets/Cisco.png"
          height={236}
          width={200}
          alt=""
          className="pr-1 pt-1 z-10"
        />
      </div>
    </div>
  );
}
