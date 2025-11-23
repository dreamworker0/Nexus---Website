import React from 'react';
import { Activity, Mail, MapPin, Phone } from 'lucide-react';
import { SOCIAL_LINKS, NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="p-1.5 bg-gradient-to-br from-purple-600 to-pink-600 rounded-md">
                <Activity className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Nexus</span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              데이터 기반 전략과 창의적인 탁월함을 통해 디지털 시대에 브랜드가 번영하도록 돕습니다.
            </p>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-purple-600 hover:text-white transition-all duration-300"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">회사</h4>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-slate-400 hover:text-purple-400 text-sm transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
              <li><a href="#" className="text-slate-400 hover:text-purple-400 text-sm transition-colors">채용</a></li>
              <li><a href="#" className="text-slate-400 hover:text-purple-400 text-sm transition-colors">개인정보 처리방침</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">서비스</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-purple-400 text-sm transition-colors">카피라이팅</a></li>
              <li><a href="#" className="text-slate-400 hover:text-purple-400 text-sm transition-colors">소셜 미디어 전략</a></li>
              <li><a href="#" className="text-slate-400 hover:text-purple-400 text-sm transition-colors">SEO 최적화</a></li>
              <li><a href="#" className="text-slate-400 hover:text-purple-400 text-sm transition-colors">워크플로우 자동화</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6">연락처</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm">123 Innovation Drive,<br/>Tech Valley, CA 90210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-purple-500 shrink-0" />
                <span className="text-slate-400 text-sm">hello@nexusagency.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-purple-500 shrink-0" />
                <span className="text-slate-400 text-sm">+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} Nexus Digital Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;