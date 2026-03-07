import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Ruler, BadgeCheck, Gem, Sparkles, ArrowRight } from "lucide-react";

export default function DiamondFeatureSection() {
    const navigate = useNavigate();


    const features = [
        {
            id: 1,
            icon: Ruler,
            text: "Size of Diamond",
            description:
                "Explore our extensive collection of lab-grown diamonds, ranging from 0.01cts to 35 Carats, catering to every design requirement.",
            hasArrow: true,
            action: () => alert("Navigating to Diamond Sizes...")
        },
        {
            id: 2,
            icon: BadgeCheck,
            text: "Certificate",
            description:
                "Every diamond is meticulously graded and certified by leading gemological institutes like IGI and GIA, ensuring peace of mind.",
            hasArrow: true,
            action: () => alert("Navigating to Certification Details...")
        },
        {
            id: 3,
            icon: Gem,
            text: "Product",
            description:
                "Browse our premium inventory of lab-grown diamonds, available in various shapes, clarities, and cuts for your perfect choice.",
            hasArrow: true,
            action: () => alert("Navigating to Product Inventory...")
        },
        {
            id: 4,
            icon: Sparkles,
            text: "Service",
            description:
                "Experience exceptional customer service, from personalized consultations to expert guidance in selecting your ideal diamond.",
            hasArrow: true,
            action: () => alert("Navigating to Our Services...")
        }
    ];

    const [activeFeature, setActiveFeature] = useState(features[0]);

    return (
        <div className="min-h-fit flex items-center justify-center bg-[#1A1A1A] px-6 py-10">
            <div className="max-w-7xl w-full bg-white rounded-3xl overflow-hidden">

                <div className="grid lg:grid-cols-5">

                    {/* LEFT SIDE */}
                    <div className="lg:col-span-2 flex flex-col">

                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            const isActive = activeFeature.id === feature.id;

                            return (
                                <div
                                    key={feature.id}
                                    onClick={() => setActiveFeature(feature)}
                                    className={`
                  flex items-center justify-between px-8 py-10
                  cursor-pointer transition-all duration-300
                  ${isActive ? "bg-gray-100 scale-[1.03] shadow-lg" : "bg-white hover:bg-gray-50 hover:scale-[1.02]"}
                  ${index < features.length - 1 ? "border-b border-gray-200" : ""}
                  `}
                                >
                                    <div className="flex items-center gap-4">

                                        <div className={`${isActive ? "bg-black" : "bg-gray-200"} p-3 rounded-xl transition-colors duration-300`}>
                                            <Icon className={`w-6 h-6 ${isActive ? "text-white" : "text-black"}`} />
                                        </div>

                                        <span className={`text-xl font-medium ${isActive ? "text-black" : "text-gray-700"}`}>
                                            {feature.text}
                                        </span>
                                    </div>

                                    {/* Interactive Arrow */}
                                    {feature.hasArrow && (
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation(); // prevents card click
                                                feature.action();
                                            }}
                                            className={`rounded-full p-3 shadow-md 
                      hover:scale-110 hover:shadow-xl
                      transition-all duration-300 ${isActive ? "bg-black text-white" : "bg-white text-black border border-gray-200"}`}
                                        >
                                            <ArrowRight className="w-5 h-5" />
                                        </button>
                                    )}
                                </div>
                            );
                        })}
                    </div>


                    {/* RIGHT SIDE */}
                    <div className="lg:col-span-3 bg-black/80 flex items-center justify-center p-16">

                        <div className="max-w-xl text-center transition-all duration-500">

                            <h2 className="text-white text-4xl font-light mb-6">
                                {activeFeature.text}
                            </h2>

                            <p className="text-white text-xl leading-relaxed opacity-90 mb-10">
                                {activeFeature.description}
                            </p>

                            {/* Special Options for Product */}
                            {activeFeature.id === 3 && (
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                    <button
                                        onClick={() => navigate("/loose-diamonds")}
                                        className="px-8 py-4 bg-white text-black rounded-full font-medium 
                                        hover:bg-gray-200 transition-all duration-300 shadow-lg hover:scale-105"
                                    >
                                        Loose Diamonds
                                    </button>
                                    <button
                                        onClick={() => navigate("/certified-diamonds")}
                                        className="px-8 py-4 bg-transparent border border-white text-white rounded-full font-medium 
                                        hover:bg-white/10 transition-all duration-300 shadow-lg hover:scale-105"
                                    >
                                        Certified Diamonds
                                    </button>
                                </div>
                            )}

                            {/* Special Options for Service */}
                            {activeFeature.id === 4 && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                                    <button
                                        onClick={() => navigate("/bruting-and-fluting")}
                                        className="px-6 py-3 bg-white text-black rounded-full font-medium 
                                        hover:bg-gray-200 transition-all duration-300 shadow-lg hover:scale-105 text-sm"
                                    >
                                        Bruting & Fluting
                                    </button>
                                    <button
                                        onClick={() => navigate("/perfect-assortment")}
                                        className="px-6 py-3 bg-transparent border border-white text-white rounded-full font-medium 
                                        hover:bg-white/10 transition-all duration-300 shadow-lg hover:scale-105 text-sm"
                                    >
                                        Perfect Assortment
                                    </button>
                                    <button
                                        onClick={() => navigate("/calibrated-parcels")}
                                        className="px-6 py-3 bg-white text-black rounded-full font-medium 
                                        hover:bg-gray-200 transition-all duration-300 shadow-lg hover:scale-105 text-sm"
                                    >
                                        Calibrated Parcels
                                    </button>
                                    <button
                                        onClick={() => navigate("/jewellery")}
                                        className="px-6 py-3 bg-transparent border border-white text-white rounded-full font-medium 
                                        hover:bg-white/10 transition-all duration-300 shadow-lg hover:scale-105 text-sm"
                                    >
                                        Jewellery
                                    </button>
                                </div>
                            )}

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}