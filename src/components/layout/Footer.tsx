import { Github, Mail, FileText, FileUser } from 'lucide-react';

export default function Footer() {
  const snsLinks = [
    {
      id: 1,
      name: 'Github',
      href: 'https://github.com/gusdnrs',
      icon: <Github size={18} />,
    },
    {
      id: 2,
      name: 'Notion',
      href: 'https://h-gomi.notion.site/2e0eae09287780078b1bf89ddfae8189?pvs=143',
      icon: <FileText size={18} />,
    },
    {
      id: 3,
      name: 'Email',
      href: 'mailto:gusdnrs@naver.com',
      icon: <Mail size={18} />,
    },
    {
      id: 4,
      name: 'Resume',
      href: '/documents/resume_hyunwook.pdf',
      icon: <FileUser size={18} />,
    },
  ];

  return (
    <footer
      id="contact"
      className="py-16 px-5 md:px-10 border-t border-gray-100 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          <div className="self-center text-center md:text-left space-y-4">
            <div>
              <p className="font-en text-2xl font-black text-brand-blue-dark mb-1 tracking-tighter">
                IM HYUNWOOK
              </p>
              <p className="text-gray-500 text-sm font-medium">
                기획의 진심을 기술의 가치로 번역합니다.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full md:w-auto justify-items-center md:items-center">
            {snsLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target={link.name !== 'Email' ? '_blank' : undefined}
                rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                className="group flex items-center justify-center gap-2.5 px-5 py-3 rounded-2xl bg-gray-50 text-gray-600 hover:bg-brand-blue hover:text-white transition-all duration-300 ease-out border border-gray-100 hover:border-brand-blue w-full min-w-[120px]"
              >
                <span className="transition-transform duration-300 group-hover:scale-110 shrink-0">
                  {link.icon}
                </span>
                <span className="font-en text-sm font-bold tracking-tight">
                  {link.name}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-xs font-en text-gray-400 font-medium">
            © 2026 IM HYUNWOOK. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
