import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            우리의 <span className="gradient-text">전문 분야</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            성장을 가속화하고 운영을 효율화하기 위한 맞춤형 디지털 솔루션입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.id}
                className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-all duration-300 group hover:-translate-y-2 border border-white/5 hover:border-purple-500/30 relative overflow-hidden"
              >
                {/* Hover Glow Effect */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-purple-600 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

                <div className="w-14 h-14 rounded-xl bg-slate-800 flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors duration-300 text-white">
                  <Icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-400 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;