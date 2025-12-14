import React from "react";
import { FaCheck } from "react-icons/fa";
import SinglePageParentSection from "@/components/ui/single-page-sections/SinglePageParentSection";

interface Feature {
  title: string;
  description: string;
}

interface FeaturesSectionProps {
  image: string;
  features: Feature[];
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ image, features }) => {
  return (
    <SinglePageParentSection>
        <div className="flex flex-wrap items-center gap-6 md:gap-12">
          {/* Левая часть — картинка */}
          <div className="flex-shrink-0 w-full md:w-1/3">
            <img src={image} alt="Чем можем быть полезны" className="rounded-lg w-full h-auto object-cover" />
          </div>

          {/* Правая часть — контент */}
          <div className="flex-1 space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-900">
              Чем мы можем быть вам полезны?
            </h2>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 text-orange-500 mt-1" style={{backgroundColor: "#f8ddd5", padding: 10}}>
                    <FaCheck size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </SinglePageParentSection>
  );
};

export default FeaturesSection;
