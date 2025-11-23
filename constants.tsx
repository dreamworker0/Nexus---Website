import { 
  PenTool, 
  Share2, 
  BarChart3, 
  Zap, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Facebook 
} from 'lucide-react';
import { Service, SocialLink, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: '홈', href: '#hero' },
  { label: '서비스', href: '#services' },
  { label: '문의하기', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'copywriting',
    title: '전략적 카피라이팅',
    description: '청중의 공감을 이끌어내고 전환을 유도하는 매력적인 서사. 단순 방문자를 구매자로 전환시킵니다.',
    icon: PenTool,
  },
  {
    id: 'social',
    title: '소셜 미디어 전략',
    description: '단순한 팔로워가 아닌 커뮤니티를 구축하세요. 데이터 기반 콘텐츠 캘린더와 참여 전략을 제공합니다.',
    icon: Share2,
  },
  {
    id: 'seo',
    title: 'SEO 최적화',
    description: '검색 순위를 높이세요. 기술 감사, 키워드 연구, 콘텐츠 최적화를 통해 검색 결과를 장악합니다.',
    icon: BarChart3,
  },
  {
    id: 'automation',
    title: '워크플로우 자동화',
    description: '더 스마트하게 일하세요. 반복적인 작업을 자동화하여 시간을 절약하고 오류를 줄이는 도구를 통합합니다.',
    icon: Zap,
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'Facebook', href: '#', icon: Facebook },
];