import React from 'react';
import heroImage from '../assets/loose_diamonds_hero.png';

const LooseDiamonds = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <img
                    src={heroImage}
                    alt="Loose Diamonds"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="relative text-center px-6">
                    <h1 className="text-white text-5xl md:text-7xl font-light tracking-widest mb-4">
                        LOOSE DIAMONDS
                    </h1>
                    <p className="text-white text-xl md:text-2xl font-light max-w-2xl mx-auto">
                        Individual brilliance, hand-selected for your unique vision.
                    </p>
                </div>
            </div>

            {/* Information Section */}
            <div className="max-w-5xl mx-auto px-6 py-20">
                <div className="grid md:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-4xl font-light text-gray-900 mb-8">Natural Beauty & Craftsmanship</h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            Our loose diamonds represent the perfect balance of natural beauty and expert craftsmanship. Each diamond is carefully selected, analyzed, and cut to maximize brilliance, fire, and overall visual appeal. With decades of expertise in diamond manufacturing and distribution, we provide high-quality loose diamonds that meet the exact requirements of jewelers, manufacturers, and luxury brands worldwide.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Our loose diamonds are known for their consistent quality, precision calibration, and exceptional sparkle. Every stone undergoes strict quality control and advanced scanning processes to ensure the best possible cut and finish. We specialize in round brilliant cut diamonds that deliver outstanding brilliance and symmetry.
                        </p>
                    </div>
                    <div className="bg-gray-50 p-10 rounded-3xl">
                        <h3 className="text-2xl font-medium text-black mb-6">Key Features</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4">
                                <div className="w-2 h-2 rounded-full bg-black mt-2" />
                                <span className="text-gray-700">Available from 0.01 to 35 Carats</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-2 h-2 rounded-full bg-black mt-2" />
                                <span className="text-gray-700">Precision calibration & exceptional fire</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-2 h-2 rounded-full bg-black mt-2" />
                                <span className="text-gray-700">Advanced scanning & strict QC</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-2 h-2 rounded-full bg-black mt-2" />
                                <span className="text-gray-700">Specialized round brilliant cuts</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LooseDiamonds;
