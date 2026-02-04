import Card from '../Card';
import { Code, Server, LaptopMinimal } from 'lucide-react';
import { monoLabelPosition, monoLabelCaps, modalButton } from '../../styles/stylingPatterns';

const TechCard = ({ onClick }) => {
  return (
    <Card className="lg:col-span-1 lg:row-span-2 relative overflow-hidden flex flex-col justify-between h-full group bg-gradient-to-b dark:from-hideout-card dark:to-[#162032]">
      <div className={monoLabelPosition}>
        <Code size={16} className="text-hideout-accent" />
        <span className={monoLabelCaps}>Tech_Arsenal</span>
      </div>
      <div className="absolute -top-12 -right-12 text-slate-100 dark:text-white/5 z-0 pointer-events-none">
        <Server
          size={140}
          strokeWidth={0.5}
          className="transition-transform duration-[3s] ease-in-out"
        />
      </div>
      <div className="mt-4 flex-grow font-mono text-[10px] leading-relaxed text-slate-500 dark:text-zinc-500 overflow-hidden">
        {/* Command Line (Visible on All) */}
        <div className="flex gap-2 mb-3">
          <span className="text-green-500 font-bold">➜</span>
          <span className="text-slate-700 dark:text-zinc-300">
            detect_stack.sh <span className="text-slate-400">--verbose</span>
          </span>
        </div>

        {/* Log Output */}
        <div className="pl-4 border-l border-zinc-200 dark:border-white/10 ml-1.5 space-y-1.5">
          <p>
            Target: <span className="text-hideout-accent">work_skillsets</span>
          </p>
          <p className="opacity-50">Scanning environment...</p>

          {/* Hide these details on Mobile (hidden), Show on Desktop (md:block) --- */}
          <div className="hidden md:block">
            {/* Group 1 */}
            <div className="mt-3">
              <p className="text-slate-400 dark:text-zinc-600 font-bold mb-0.5">
                # Core_Frameworks
              </p>
              <p>[✓] React SSPA</p>
              <p>[✓] Java Spring Boot</p>
            </div>

            {/* Group 2 */}
            <div className="mt-3">
              <p className="text-slate-400 dark:text-zinc-600 font-bold mb-0.5">
                # Services_&_Tools
              </p>
              <p>[✓] MongoDB</p>
              <p>[✓] Openshift</p>
              <p>[✓] GitLab Runner (CI/CD)</p>
            </div>
          </div>
          {/* ------------------------------------------------------------------------------- */}

          {/* Success Message (Visible on All) */}
          {/* On mobile, this will appear right after "Scanning environment..." */}
          <p className="mt-2 md:mt-4 animate-pulse text-hideout-accent">
            &gt; Awaiting user input_
          </p>
        </div>
      </div>
      <button onClick={onClick} className={modalButton} title="Open Past Projects Gallery">
        <LaptopMinimal className="text-hideout-accent" size={24} />
      </button>
    </Card>
  );
};

export default TechCard;
