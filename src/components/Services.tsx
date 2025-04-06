import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, 
  Cloud, 
  Globe, 
  BarChart, 
  MessageSquare, 
  Settings 
} from 'lucide-react';

const services = [
  {
    icon: ShoppingCart,
    title: "eCommerce Strategy Consulting",
    description: "Develop winning strategies to boost your online sales and market presence.",
    features: ["Market Analysis", "Competition Research", "Growth Planning"]
  },
  {
    icon: Cloud,
    title: "Salesforce CRM Setup",
    description: "Expert implementation and customization of Salesforce solutions.",
    features: ["Custom Configuration", "Data Migration", "User Training"]
  },
  {
    icon: Globe,
    title: "Custom Website Development",
    description: "Build modern, responsive websites that convert visitors into customers.",
    features: ["Responsive Design", "SEO Optimization", "Performance Tuning"]
  },
  {
    icon: BarChart,
    title: "Marketing Automation",
    description: "Streamline your marketing efforts with powerful automation tools.",
    features: ["Email Campaigns", "Lead Nurturing", "Analytics"]
  },
  {
    icon: MessageSquare,
    title: "24/7 Support",
    description: "Round-the-clock technical support for your business needs.",
    features: ["Quick Response", "Expert Solutions", "Dedicated Team"]
  },
  {
    icon: Settings,
    title: "System Integration",
    description: "Seamlessly connect your business systems for maximum efficiency.",
    features: ["API Development", "Data Sync", "Workflow Automation"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Our Services
          </motion.h2>
          <p className="text-xl text-gray-600">
            Comprehensive solutions to power your digital success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;