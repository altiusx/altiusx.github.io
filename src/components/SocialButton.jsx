const SocialButton = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    target="_blank"
    aria-label={label}
    className="p-3 bg-zinc-100 dark:bg-white/5 rounded-full hover:scale-110 text-slate-700 dark:text-white transition-all hover:text-blue-600 dark:hover:text-blue-400"
  >
    <Icon size={24} />
  </a>
);

export default SocialButton;
