import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="All you need for your freelancer website"
      subtitle="Join the private beta for free."
      button={
        <Link href="https://tally.so/r/nrVy5n">
          <a>
            <Button>Join the private beta</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
