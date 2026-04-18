import React from 'react';

export interface ServiceBanner {
  image: string;
  title: React.ReactNode;
  description: React.ReactNode;
  linkText?: string;
  linkTo?: string;
}

export interface ServiceData {
  heroTitle: string;
  topImage: string;
  topTitle: React.ReactNode;
  topParagraphs: React.ReactNode[];
  topSubTitle: React.ReactNode;
  topList: React.ReactNode[];
  banners: ServiceBanner[];
  // SEO metadata
  seoDescription?: string;
  seoKeywords?: string;
  seoUrl?: string;
}
