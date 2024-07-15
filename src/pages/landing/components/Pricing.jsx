import { motion } from "framer-motion";

const plans = [
  {
    title: "Free Plan",
    features: [
      "Basic portfolio creation",
      "Limited templates",
      "Community support",
    ],
    price: "GHC0/month",
    buttonLabel: "Sign Up for Free",
    buttonLink: "/signup",
  },
  {
    title: "Pro Plan",
    features: [
      "Advanced customization",
      "Premium templates",
      "Priority support",
    ],
    price: "GHC49.99/month",
    buttonLabel: "Get Started",
    buttonLink: "/signup",
  },
  {
    title: "Enterprise Plan",
    features: ["Custom solutions", "Dedicated support", "Team collaboration"],
    price: "Contact for pricing",
    buttonLabel: "Contact Us",
    buttonLink: "/contact",
  },
];

const Pricing = () => {
  return (
    <div className=" py-20" id="pricing">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-12 text-center">
          Affordable Plans for Everyone
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-4">{plan.title}</h3>
              <p className="text-4xl font-bold text-blue-500 mb-4">
                {plan.price}
              </p>
              <ul className="text-gray-700 text-center mb-6 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <a
                href={plan.buttonLink}
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg shadow-md transition-all duration-300"
              >
                {plan.buttonLabel}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
