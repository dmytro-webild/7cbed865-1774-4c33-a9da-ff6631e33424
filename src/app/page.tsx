"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import BlogCardTwo from '@/components/sections/blog/BlogCardTwo';
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTwentyNine from '@/components/sections/feature/featureCardTwentyNine/FeatureCardTwentyNine';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import { Globe, Lock, Shield } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="small"
        sizing="large"
        background="aurora"
        cardStyle="layered-gradient"
        primaryButtonStyle="flat"
        secondaryButtonStyle="solid"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",          id: "hero"},
        {
          name: "Features",          id: "features"},
        {
          name: "Security",          id: "metrics"},
        {
          name: "Support",          id: "contact"},
      ]}
      button={{
        text: "Sign In",        href: "#"}}
      brandName="AuthFlow"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="AuthFlow"
      description="Secure, scalable, and professional authentication as a service. Build your login portal in minutes, not months."
      buttons={[
        {
          text: "Get Started",          href: "#"},
        {
          text: "Learn More",          href: "#"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/3d-render-modern-low-poly-plexus-design_1048-13725.jpg"
      imageAlt="Security Platform Hero"
      showDimOverlay={true}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyNine
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      features={[
        {
          title: "Biometric Auth",          description: "Seamless integration with FaceID and fingerprint sensors.",          imageSrc: "http://img.b2bpic.net/free-photo/technology-system-network-security-development-graphic-word_53876-121147.jpg",          titleImageSrc: "http://img.b2bpic.net/free-photo/cybersecurity-professional-phone_23-2152004092.jpg",          buttonText: "Read More"},
        {
          title: "End-to-End Encryption",          description: "Industry-leading security standards for your user data.",          imageSrc: "http://img.b2bpic.net/free-photo/key-lock-password-security-privacy-protection-graphic_53876-125201.jpg",          titleImageSrc: "http://img.b2bpic.net/free-photo/abstract-cybersecurity-concept-design_23-2151841675.jpg",          buttonText: "Read More"},
        {
          title: "Scalable Team Access",          description: "Manage permissions effortlessly across your entire organization.",          imageSrc: "http://img.b2bpic.net/free-photo/entrepreneurs-collaborating-with-real-estate-agent-office-relocation-planning_482257-90818.jpg",          titleImageSrc: "http://img.b2bpic.net/free-photo/group-graphic-designers-interacting-with-each-other_1170-770.jpg",          buttonText: "Read More"},
      ]}
      title="Everything You Need to Scale"
      description="Powerful tools designed to manage users, security, and identity at global scale."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",          icon: Shield,
          title: "Uptime",          value: "99.99%"},
        {
          id: "m2",          icon: Lock,
          title: "Requests",          value: "10M+"},
        {
          id: "m3",          icon: Globe,
          title: "Users",          value: "500k+"},
      ]}
      title="Built for Reliability"
      description="We process millions of requests securely every single day."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",          name: "Sarah Miller",          imageSrc: "http://img.b2bpic.net/free-photo/black-businessman-happy-expression_1194-2623.jpg"},
        {
          id: "2",          name: "Mark Evans",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-equity-analyst-working-proprietary-firm-reading-annual-company-reports-evaluate_482257-132953.jpg"},
        {
          id: "3",          name: "Elena Rodriguez",          imageSrc: "http://img.b2bpic.net/free-photo/handsome-cheerful-young-man-searches-job-browses-webpage-modern-cell-phone-checks-information-internet-sits-cafeteria-enjoys-sweet-dessert-fresh-drink_273609-29263.jpg"},
        {
          id: "4",          name: "James Chen",          imageSrc: "http://img.b2bpic.net/free-photo/man-solar-panel-manufacturing-facility-presents-green-energy-production_482257-118152.jpg"},
        {
          id: "5",          name: "Olivia Smith",          imageSrc: "http://img.b2bpic.net/free-photo/closeup-content-mature-business-man-office_1262-2979.jpg"},
      ]}
      cardTitle="Trusted by Industry Leaders"
      cardTag="Testimonials"
      cardAnimation="blur-reveal"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={true}
      faqs={[
        {
          id: "1",          title: "Is AuthFlow free?",          content: "We offer a generous free tier for developers getting started."},
        {
          id: "2",          title: "How long does integration take?",          content: "Our SDKs allow most developers to get up and running in under an hour."},
        {
          id: "3",          title: "Can I use custom themes?",          content: "Yes, our UI components are fully customizable to match your brand style."},
      ]}
      sideTitle="Common Questions"
      sideDescription="Everything you need to know about setting up and managing AuthFlow."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="blog" data-section="blog">
      <BlogCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      title="Latest Insights"
      description="Stay up to date with the latest trends in digital security and user authentication."
      blogs={[
        {
          id: "b1",          category: "Technology",          title: "The Future of Passwordless Auth",          excerpt: "Moving beyond passwords into a truly seamless experience.",          imageSrc: "http://img.b2bpic.net/free-photo/privacy-confidential-protection-security-solitude-concept_53876-121229.jpg",          authorName: "Jane Doe",          authorAvatar: "http://img.b2bpic.net/free-photo/portrait-festive-plump-male-eyeglasses-bow-tie-dark-grey-background_613910-13747.jpg",          date: "Jan 20, 2024"},
        {
          id: "b2",          category: "Security",          title: "Securing Your API Endpoints",          excerpt: "Best practices for modern API security and token handling.",          imageSrc: "http://img.b2bpic.net/free-photo/black-corporate-team-collaborate-global-investment-strategy_482257-125289.jpg",          authorName: "John Smith",          authorAvatar: "http://img.b2bpic.net/free-photo/positive-businesswoman-work_1098-3861.jpg",          date: "Jan 15, 2024"},
        {
          id: "b3",          category: "Compliance",          title: "SOC2 Compliance for SaaS",          excerpt: "How to navigate the complex world of security audits.",          imageSrc: "http://img.b2bpic.net/free-photo/business-people-walking-office_23-2147626575.jpg",          authorName: "Alice Johnson",          authorAvatar: "http://img.b2bpic.net/free-photo/industrial-consultant-examines-high-tech-solar-energy-production-line_482257-126062.jpg",          date: "Jan 10, 2024"},
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "canvas-reveal"}}
      text="Ready to secure your application? Our team is standing by to help you integrate."
      buttons={[
        {
          text: "Contact Support",          href: "#"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="AuthFlow"
      leftLink={{
        text: "Privacy Policy",        href: "#"}}
      rightLink={{
        text: "Terms of Service",        href: "#"}}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
