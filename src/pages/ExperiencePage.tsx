import React from 'react';
import { Briefcase, Calendar, MapPin, Award, TrendingUp, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const ExperiencePage: React.FC = () => {
  const experiences = [
    {
      company: 'フリーランス',
      position: '豊富な経験を持つフルスタックデベロッパー',
      period: '2024年4月 - 現在',
      location: 'リモート',
      type: 'フリーランス',
      description: '独立後、多様なクライアントのプロジェクトを手がけ、柔軟で高品質なWebソリューションを提供。',
      achievements: [
        'React/Next.jsを使用したSaaSプラットフォームの開発をリード',
        'Laravel APIとWordPressヘッドレスCMSの統合システム構築',
        'Chakra UIを活用したデザインシステムの構築',
        'パフォーマンス最適化により読み込み速度を40%改善',
        'クライアント満足度95%以上を維持',
        'プロジェクト納期遵守率100%を達成'
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Laravel', 'PHP', 'WordPress', 'Chakra UI', 'AWS', 'Docker']
    },
    {
      company: 'テックイノベーション株式会社',
      position: 'シニアフルスタックデベロッパー',
      period: '2022年4月 - 2024年3月',
      location: '東京, 日本',
      type: 'フルタイム',
      description: '大規模なWebアプリケーションの設計・開発をリード。チームの技術指導とコードレビューを担当。',
      achievements: [
        'React/Next.jsを使用したSaaSプラットフォームの開発をリード',
        'Laravel APIとWordPressヘッドレスCMSの統合システム構築',
        'Chakra UIを活用したデザインシステムの構築',
        'パフォーマンス最適化により読み込み速度を40%改善',
        '5人のジュニア開発者のメンタリングを実施',
        'CI/CDパイプラインの構築により開発効率を30%向上'
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Laravel', 'PHP', 'WordPress', 'Chakra UI', 'AWS', 'Docker']
    },
    {
      company: 'デジタルソリューションズ合同会社',
      position: 'フルスタック開発者',
      period: '2020年6月 - 2022年3月',
      location: '大阪, 日本',
      type: 'フルタイム',
      description: 'モダンなフロントエンド技術とPHP/Laravelを使用したWebアプリケーションの開発。',
      achievements: [
        'Laravel + Vue.jsを使用したECサイトの開発',
        'WordPressカスタムテーマとプラグインの開発',
        'レスポンシブデザインの実装でモバイル利用率を25%向上',
        'Webアクセシビリティの改善でWCAG 2.1 AA準拠を達成',
        'コンポーネントライブラリの構築で開発効率を向上',
        'PHPとMySQLのパフォーマンス最適化'
      ],
      technologies: ['Vue.js', 'Nuxt.js', 'Laravel', 'PHP', 'WordPress', 'MySQL', 'Sass', 'Webpack']
    },
    {
      company: 'スタートアップテック株式会社',
      position: 'Web開発者',
      period: '2018年4月 - 2020年5月',
      location: '東京, 日本',
      type: 'フルタイム',
      description: 'スタートアップ環境でのWebアプリケーション開発。フロントエンドからバックエンドまで幅広く担当。',
      achievements: [
        'React.jsを使用したWebアプリケーションの開発',
        'WordPress + WooCommerceを使用したECサイト構築',
        'RESTful APIの設計と実装（PHP/Laravel）',
        'データベース設計とパフォーマンス最適化',
        'アジャイル開発手法の実践',
        'Git/GitHubを使用したチーム開発'
      ],
      technologies: ['React', 'JavaScript', 'PHP', 'Laravel', 'WordPress', 'MySQL', 'Node.js', 'Git']
    },
    {
      company: 'フリーランス（初期）',
      position: 'Web開発者',
      period: '2016年4月 - 2018年3月',
      location: 'リモート',
      type: 'フリーランス',
      description: 'WordPressを中心としたWebサイト制作とPHPによるカスタム開発。',
      achievements: [
        'WordPress カスタムテーマ・プラグイン開発',
        '中小企業向けコーポレートサイト制作',
        'PHP/MySQLによるWebアプリケーション開発',
        'レスポンシブWebデザインの実装',
        'SEO対策とサイト高速化',
        'クライアント要件のヒアリングから納品まで一貫対応'
      ],
      technologies: ['WordPress', 'PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Bootstrap']
    }
  ];

  const skills = [
    { name: 'プロジェクト管理', level: 95 },
    { name: 'クライアント対応', level: 92 },
    { name: 'チームリーダーシップ', level: 88 },
    { name: 'メンタリング', level: 85 },
    { name: '技術選定', level: 92 },
    { name: 'コードレビュー', level: 95 },
    { name: 'アーキテクチャ設計', level: 87 },
    { name: '要件定義', level: 90 }
  ];

  const achievements = [
    {
      icon: Award,
      title: 'フリーランス独立',
      description: '豊富な経験を活かした独立',
      year: '2024'
    },
    {
      icon: TrendingUp,
      title: 'パフォーマンス改善賞',
      description: 'システム最適化による大幅な改善',
      year: '2022'
    },
    {
      icon: Users,
      title: 'チームリーダー認定',
      description: 'リーダーシップスキルの認定',
      year: '2021'
    },
    {
      icon: Award,
      title: 'WordPress Expert認定',
      description: 'WordPress開発における専門性認定',
      year: '2020'
    }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-zen-kaku text-gray-900 dark:text-white">
              経験・実績
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              8年以上のWeb開発経験と、フリーランスとして培った実践的なスキル
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-zen-kaku text-gray-900 dark:text-white">
              職歴
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              キャリアの成長と技術的な進歩の軌跡
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800"></div>
            
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="relative flex items-start mb-16"
              >
                <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mr-8 relative z-10 shadow-lg">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex-1">
                  <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {exp.position}
                        </h3>
                        <h4 className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-2">
                          {exp.company}
                        </h4>
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center mb-1">
                          <Calendar className="w-4 h-4 mr-2" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {exp.description}
                    </p>

                    <div className="mb-6">
                      <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        主な成果
                      </h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-600 dark:text-gray-300">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        使用技術
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Skills */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-zen-kaku text-gray-900 dark:text-white">
              フリーランススキル
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              独立して培った実践的なビジネススキル
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

      {/* Achievements */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-zen-kaku text-gray-900 dark:text-white">
              受賞・認定
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              専門性と貢献が認められた実績
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 text-center"
              >
                <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {achievement.description}
                </p>
                <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium">
                  {achievement.year}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Freelance Benefits */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-zen-kaku text-gray-900 dark:text-white">
              フリーランスの価値
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              豊富な経験を活かした独立の強み
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: '直接的なコミュニケーション',
                description: '中間業者を介さず、クライアントと直接やり取りすることで、要件の理解と実装の精度が向上します。',
                icon: '💬'
              },
              {
                title: '柔軟な対応力',
                description: '組織の制約がないため、プロジェクトの変更や緊急対応にも迅速に対応できます。',
                icon: '⚡'
              },
              {
                title: 'コストパフォーマンス',
                description: '企業の間接費用がかからないため、高品質なサービスをリーズナブルな価格で提供できます。',
                icon: '💰'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 text-center"
              >
                <div className="text-4xl mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-primary-600 rounded-3xl p-12 text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-zen-kaku">
              一緒にプロジェクトを成功させましょう
            </h2>
            <p className="text-xl mb-8 opacity-90">
              8年以上の豊富な経験とフリーランスの柔軟性を活かして、あなたのプロジェクトを成功に導きます。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-full hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl font-semibold"
              >
                お問い合わせ
              </a>
              <a
                href="/projects"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-primary-600 transition-colors duration-200"
              >
                実績を見る
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ExperiencePage;