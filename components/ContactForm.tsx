import React, { useState } from 'react';
import Button from './Button';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'strategy',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('https://formspree.io/f/xzzwjlkz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', service: 'strategy', message: '' });
        // Reset status after showing success message for a few seconds if desired,
        // or leave it as success to prevent duplicate submissions.
        setTimeout(() => {
          setStatus('idle');
        }, 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-purple-900/10 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              특별한 것을 <br/>
              <span className="gradient-text">함께 만들어갑시다</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              디지털 존재감을 변화시킬 준비가 되셨나요? 양식을 작성해주시면 Nexus가 자동화와 전략을 통해 비즈니스 목표를 달성하는 방법을 논의해 드립니다.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-400 text-xl font-bold">1</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">문의 양식 작성</h4>
                  <p className="text-slate-500 text-sm">프로젝트 요구 사항을 알려주세요.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-400 text-xl font-bold">2</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">디스커버리 콜</h4>
                  <p className="text-slate-500 text-sm">15분 정도의 가벼운 상담을 진행합니다.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-400 text-xl font-bold">3</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">전략 실행</h4>
                  <p className="text-slate-500 text-sm">맞춤형 전략으로 프로젝트를 시작합니다.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="glass-card p-8 md:p-10 rounded-3xl shadow-2xl shadow-purple-900/20">
            {status === 'success' ? (
              <div className="text-center py-16 animate-in zoom-in duration-300">
                <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">메시지 전송 완료!</h3>
                <p className="text-slate-400">곧 연락드리겠습니다.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-300">성함</label>
                    <input
                      required
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-slate-950/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                      placeholder="홍길동"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-300">이메일 주소</label>
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-slate-950/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                      placeholder="hong@company.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium text-slate-300">관심 서비스</label>
                  <div className="relative">
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-slate-950/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all appearance-none"
                    >
                      <option value="copywriting">카피라이팅</option>
                      <option value="social">소셜 미디어 전략</option>
                      <option value="seo">SEO 최적화</option>
                      <option value="automation">워크플로우 자동화</option>
                      <option value="other">기타 / 문의</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-300">메시지</label>
                  <textarea
                    required
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-slate-950/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="프로젝트에 대해 자세히 알려주세요..."
                  ></textarea>
                </div>

                {status === 'error' && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-3 text-red-400">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <p className="text-sm">메시지 전송에 실패했습니다. 잠시 후 다시 시도해주세요.</p>
                  </div>
                )}

                <Button 
                  type="submit" 
                  variant="primary" 
                  className="w-full"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? (
                    <span className="flex items-center">
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      전송 중...
                    </span>
                  ) : (
                    '메시지 보내기'
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;