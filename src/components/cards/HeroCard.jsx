import Card from '../Card';

const HeroCard = () => {
  return (
    <Card className="lg:col-span-2 lg:row-span-2 flex flex-col justify-between group bg-gradient-to-b dark:from-hideout-card dark:to-[#162032]">
      <div className="z-10">
        <h2 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">About Me</h2>
        <p className="text-slate-600 dark:text-hideout-muted leading-relaxed">
          Currently a Senior Software Engineer at{' '}
          <span className="text-slate-900 dark:text-white font-semibold">DSTA</span>. Focusing on
          full-stack architecture and national defence solutions.
        </p>
      </div>
      {/* Decoration */}
      <div className="absolute right-0 bottom-0 w-32 h-32 bg-gradient-to-tl from-orange-100/50 dark:from-hideout-accent/20 to-transparent rounded-tl-full transition-colors" />
    </Card>
  );
};

export default HeroCard;
