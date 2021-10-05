
import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6 -mt-20">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <a target="_blank" href="https://tally.so/r/nrVy5n">
            Private beta
          </a>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'The perfect website builder for\n'}
            <span className="text-primary-500">Freelancers</span>
          </>
        }
        description="The easiest and fastest way to build your freelancers website within 5 minutes, all inclusive."
        button={
            <a target="_blank" href="https://tally.so/r/nrVy5n">
              <Button xl>Sign in to private beta</Button>
            </a>
        }
      />
    </Section>
  </Background>
);

export { Hero };
