import { FolderGit2, Github, ExternalLink, Star } from 'lucide-react';
import CommonWrapper from './CommonWrapper';
import { projectData } from '../data/projectData';

const ProjectsModal = ({ isOpen, onClose }) => {
  return (
    <CommonWrapper
      isOpen={isOpen}
      onClose={onClose}
      title="user@altiusx:~/projects"
      className="!bg-zinc-50 dark:!bg-[#0c0c0c] border-zinc-200 dark:border-zinc-800"
    >
      {/* Header Area */}
      <div className="p-6 pb-2 shrink-0 bg-inherit">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <FolderGit2 className="text-hideout-accent" /> Personal Projects
        </h2>
        <p className="text-sm text-slate-500 dark:text-hideout-muted font-mono">
          git log --oneline --graph --all
        </p>
      </div>

      {/* Projects Grid */}
      <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-4 bg-inherit">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="group flex flex-col justify-between p-5 rounded-xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/5 hover:border-hideout-accent/50 dark:hover:border-hideout-accent/50 transition-all hover:shadow-lg dark:hover:shadow-none"
          >
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-slate-800 dark:text-zinc-100 group-hover:text-hideout-accent transition-colors">
                  {project.title}
                </h3>
                {project.featured && <Star size={16} className="text-yellow-500 fill-yellow-500" />}
              </div>

              <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 text-[10px] font-mono rounded bg-zinc-100 dark:bg-white/10 text-slate-600 dark:text-zinc-300 border border-zinc-200 dark:border-white/5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Links Footer */}
            <div className="flex items-center gap-3 pt-4 border-t border-zinc-100 dark:border-white/5">
              {project.links.repo && (
                <a
                  href={project.links.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-medium text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <Github size={14} /> Source
                </a>
              )}
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-medium text-slate-600 dark:text-zinc-400 hover:text-hideout-accent dark:hover:text-hideout-accent transition-colors"
                >
                  <ExternalLink size={14} /> Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </CommonWrapper>
  );
};

export default ProjectsModal;
