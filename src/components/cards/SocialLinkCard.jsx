import Card from '../Card';
import { monoLabel } from '../../styles/stylingPatterns';
import SocialButton from '../SocialButton';
import { Github, Linkedin, Instagram } from 'lucide-react';

const SocialLinkCard = () => {
  return (
    <Card className="lg:col-span-1 flex flex-col justify-center items-center gap-4 bg-gradient-to-b dark:from-hideout-card dark:to-[#162032]">
      <div className="flex gap-4">
        {/* GitHub Button */}
        <SocialButton href="https://github.com/altiusx" icon={Github} label="GitHub" />
        {/* LinkedIn Button */}
        <SocialButton
          href="https://linkedin.com/in/christopher-qing-yi-choong-739709203/"
          icon={Linkedin}
          label="LinkedIn"
        />
        <SocialButton href="https://instagram.com/altiusx" icon={Instagram} label="Instagram" />
      </div>
      <p className={monoLabel}>@altiusx</p>
    </Card>
  );
};

export default SocialLinkCard;
