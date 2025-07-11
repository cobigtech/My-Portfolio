import React from 'react';
import { User, Code, Heart, Target, Award, BookOpen, GraduationCap, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Code,
      title: '技術への情熱',
      description: '最新の技術トレンドを常に追求し、革新的なソリューションを提供します。'
    },
    {
      icon: Heart,
      title: '品質へのこだわり',
      description: '細部まで妥協することなく、最高品質の成果物を作り上げます。'
    },
    {
      icon: Target,
      title: '目標達成',
      description: 'クライアントの目標を理解し、確実に達成するための戦略を立てます。'
    },
    {
      icon: Award,
      title: '継続的改善',
      description: '常に学び続け、自分自身とサービスの質を向上させていきます。'
    }
  ];

  const timeline = [
    {
      year: '2016',
      title: 'Web開発者としてキャリア開始',
      description: 'PHP、WordPress、LaravelでのWeb開発に従事'
    },
    {
      year: '2018',
      title: 'フロントエンド技術の習得',
      description: 'React、Vue.js、モダンJavaScriptフレームワークを習得'
    },
    {
      year: '2020',
      title: 'フルスタック開発者へ転身',
      description: 'Node.js、Express、データベース技術を習得し、総合的な開発力を身につける'
    },
    {
      year: '2022',
      title: 'シニアデベロッパーに昇格',
      description: 'チームリーダーとして複数のプロジェクトを統括、技術指導も担当'
    },
    {
      year: '2024',
      title: 'フリーランスとして独立',
      description: '8年以上の経験を活かして、素晴らしいWebソリューションを作り上げます。'
    }
  ];

  const education = [
    {
      degree: '情報工学学士',
      school: '東京工業大学',
      period: '2012年4月 - 2016年3月',
      description: 'コンピュータサイエンスの基礎から応用まで幅広く学習。プログラミング、データ構造、アルゴリズム、ソフトウェア工学を専攻。',
      achievements: [
        '卒業論文：「Webアプリケーションのパフォーマンス最適化に関する研究」',
        'プログラミングコンテスト入賞（ACM-ICPC地区予選）',
        '学部優秀賞受賞',
        'ソフトウェア工学研究室所属'
      ],
      gpa: '3.8/4.0'
    },
    {
      degree: '高等学校卒業',
      school: '私立開成高等学校',
      period: '2009年4月 - 2012年3月',
      description: '理数系科目を中心に学習。特に数学と物理に興味を持ち、論理的思考力を養う。',
      achievements: [
        '数学オリンピック県大会出場',
        '物理部部長として活動',
        '学年上位5%の成績を維持',
        '東京工業大学推薦入学'
      ],
      gpa: '4.2/5.0'
    }
  ];

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect - Associate',
      issuer: 'Amazon Web Services',
      year: '2023',
      description: 'クラウドアーキテクチャの設計と実装に関する専門知識を証明'
    },
    {
      name: 'PHP Zend Certified Engineer',
      issuer: 'Zend Technologies',
      year: '2020',
      description: 'PHP開発における高度な技術力と知識を認定'
    },
    {
      name: 'React Developer Certification',
      issuer: 'Meta',
      year: '2022',
      description: 'React.jsを使用したモダンフロントエンド開発の専門性を証明'
    },
    {
      name: 'Google Analytics Individual Qualification',
      issuer: 'Google',
      year: '2021',
      description: 'Webアナリティクスとデータ分析の専門知識を認定'
    }
  ];

  const skills = [
    { name: 'React', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'PHP', level: 92 },
    { name: 'Laravel', level: 88 },
    { name: 'WordPress', level: 95 },
    { name: 'Node.js', level: 85 },
    { name: 'Next.js', level: 88 },
    { name: 'Chakra UI', level: 85 },
    { name: 'Tailwind CSS', level: 92 },
    { name: 'Python', level: 75 },
    { name: 'AWS', level: 80 },
    { name: 'UI/UX Design', level: 85 }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 font-zen-kaku text-gray-900 dark:text-white">
                私について
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                8年以上の経験を持つフリーランス フルスタックデベロッパーとして、
                革新的なWebソリューションを提供しています。
              </p>
              <div className="flex items-center space-x-4">
                <User className="w-6 h-6 text-primary-600" />
                <span className="text-lg font-medium text-gray-900 dark:text-white">
                  道添 春樹 (Michizoe Haruki)
                </span>
              </div>
              <div className="mt-4 text-gray-600 dark:text-gray-300">
                <p>Email: michizoeharuki@gmail.com</p>
                <p>GitHub: <a href="https://github.com/ninjia-yeti" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">github.com/ninjia-yeti</a></p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="w-full h-96 bg-primary-100 dark:bg-primary-900 rounded-3xl flex items-center justify-center">
                <div className="w-64 h-64 bg-primary-600 rounded-full flex items-center justify-center">
                  <User className="w-32 h-32 text-white" />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full animate-bounce opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-400 rounded-full animate-pulse opacity-20"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-zen-kaku text-gray-900 dark:text-white">
              価値観
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              私の開発哲学とクライアントに対する約束
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-zen-kaku text-gray-900 dark:text-white">
              学歴
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              技術的基盤を築いた学習の軌跡
            </p>
          </motion.div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <div className="flex items-center mb-4">
                      <GraduationCap className="w-8 h-8 text-primary-600 mr-3" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {edu.degree}
                        </h3>
                        <p className="text-lg text-primary-600 dark:text-primary-400 font-semibold">
                          {edu.school}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      {edu.period}
                    </div>
                    {edu.gpa && (
                      <div className="bg-primary-50 dark:bg-primary-900 px-4 py-2 rounded-lg">
                        <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                          GPA: {edu.gpa}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="lg:col-span-2">
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {edu.description}
                    </p>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        主な成果・活動
                      </h4>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-600 dark:text-gray-300">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-zen-kaku text-gray-900 dark:text-white">
              資格・認定
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              専門性を証明する公式認定資格
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {cert.name}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                      {cert.issuer}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {cert.description}
                    </p>
                  </div>
                  <span className="bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 px-3 py-1 rounded-full text-sm font-medium ml-4">
                    {cert.year}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-zen-kaku text-gray-900 dark:text-white">
              キャリアの歩み
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              8年以上の技術者としての成長の軌跡
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800"></div>
            
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="relative flex items-start mb-12"
              >
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center mr-8 relative z-10">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div className="flex-1">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                    <div className="text-sm font-semibold text-primary-600 dark:text-primary-400 mb-2">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-zen-kaku text-gray-900 dark:text-white">
              技術スキル
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              習得している主要な技術とその習熟度
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {skill.name}
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                    className="bg-primary-600 h-3 rounded-full"
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-primary-600 rounded-3xl p-12 text-white"
          >
            <BookOpen className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-zen-kaku">
              学習への情熱
            </h2>
            <p className="text-xl mb-8 opacity-90">
              技術は日々進歩しています。私は常に新しい技術を学び、
              それをプロジェクトに活かすことで、クライアントに最高の価値を提供し続けます。
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm">
                継続的学習
              </span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm">
                技術革新
              </span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm">
                品質向上
              </span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm">
                クライアント満足
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;