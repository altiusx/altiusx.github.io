import Card from '../Card';
import MusicPlayerWidget from '../MusicPlayer';

const LofiCard = () => {
  return (
    <Card className="lg:col-span-1 !p-0 group hover:ring-2 hover:ring-hideout-accent/50 transition-all">
      <MusicPlayerWidget />
    </Card>
  );
};

export default LofiCard;
