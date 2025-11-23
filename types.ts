import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: React.ElementType;
}

export interface NavItem {
  label: string;
  href: string;
}