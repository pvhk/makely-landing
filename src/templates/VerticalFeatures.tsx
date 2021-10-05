import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Focus on what really matter"
    description="Use Makely to create and maintain your website, so you can focus on your clients and doing what you are good for."
  >
    <VerticalFeatureRow
      title="Your website within 5 minutes"
      description="Our super powerful website builder allow you to create your website within 5 minutes, everything is pre-configured and optimized for a freelance."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Blog, portfolio and contact systems includes"
      description="Your website is created with a blog, a portfolio and a contact system. Everything a freelance need for a website!"
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Multiple themes available"
      description="For creating a website rapidly, we pre-build a lot of things and we reduce the personnalization level of your website, with our multiple themes, you can chose a website that fit to your image."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
