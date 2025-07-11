import React from "react";
import { Link } from "react-router-dom";
import { Github, Mail, Heart } from "lucide-react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/cobigtech", label: "GitHub" },
    { icon: Mail, href: "mailto:kobayashi.naoki@gmail.com", label: "メール" },
  ];

  const footerLinks = [
    {
      title: "ナビゲーション",
      links: [
        { path: "/", label: "ホーム" },
        { path: "/about", label: "私について" },
        { path: "/skills", label: "スキル" },
        { path: "/projects", label: "プロジェクト" },
      ],
    },
    {
      title: "サービス",
      links: [
        { path: "/experience", label: "経験" },
        { path: "/services", label: "サービス" },
        { path: "/contact", label: "お問い合わせ" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold font-zen-kaku mb-4">小林直樹</h3>
            <p className="text-gray-400 mb-6">
              7年以上の経験を持つフリーランス フルスタックデベロッパーとして、
              7年以上の経験を活かして、素晴らしいWebソリューションを作り上げます。
              WordPress、Laravel、 WordPress、Next 等の最新技術で最高品質の成果物を作り続けています。
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    social.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-gray-800 dark:bg-gray-900 rounded-full hover:bg-primary-600 dark:hover:bg-primary-600 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} 道添 春樹 (Michizoe Haruki). All rights reserved.
          </p>
          <div className="flex items-center space-x-1 text-gray-400 text-sm mt-4 md:mt-0">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>in Japan</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
