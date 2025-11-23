import React from 'react';
import Button from './Button';
import { ArrowRight, Rocket } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="blob w-[500px] h-[500px] bg-purple-600 rounded-full -top-20 -left-20 opacity-20 mix-blend-screen blur-3xl animate-pulse"></div>
      <div className="blob w-[400px] h-[400px] bg-pink-600 rounded-full top-40 right-0 opacity-20 mix-blend-screen blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm animate-[fadeIn_1s_ease-out]">
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-sm text-slate-300 font-medium">2024년 신규 클라이언트 모집 중</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 tracking-tight">
            브랜드의 <br />
            <span className="gradient-text">디지털 잠재력을 깨우세요</span>
          </h1>
          
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            우리는 Nexus입니다. 스토리텔링, SEO, 워크플로우 자동화를 마스터하여 
            비즈니스를 효율적으로 확장하는 미래 지향적 디지털 에이전시입니다.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact">
              <Button variant="primary" size="lg" className="w-full sm:w-auto group">
                프로젝트 시작하기
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#services">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                서비스 둘러보기
              </Button>
            </a>
          </div>

          {/* Social Proof / Trusted By strip (Visual Filler) */}
          <div className="mt-20 pt-10 border-t border-white/5">
            <p className="text-sm text-slate-500 mb-6 uppercase tracking-widest">함께하는 혁신적인 기업들</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
               {/* Placeholders for logos */}
               <span className="text-xl font-bold text-white">ACME Corp</span>
               <span className="text-xl font-bold text-white">Stark Ind.</span>
               <span className="text-xl font-bold text-white">Globex</span>
               <span className="text-xl font-bold text-white">Umbrella</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;