import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Palette, Zap, Globe, Users, Award, Star, Briefcase, Clock, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: Code2,
      title: 'フルスタック開発',
      description: 'React、Next、Vue、Laravel、WordPress、PHPを使用した最新のWebアプリケーション開発'
    },
    {
      icon: Palette,
      title: 'UI/UXデザイン',
      description: '日本の美学を取り入れた、ユーザー中心のデザイン設計'
    },
    {
      icon: Zap,
      title: 'パフォーマンス最適化',
      description: '高速で効率的なWebサイトとアプリケーションの構築'
    },
    {
      icon: Globe,
      title: 'WordPress開発',
      description: 'カスタムテーマ・プラグイン開発とヘッドレスCMS構築'
    },
    {
      icon: Users,
      title: 'チーム開発',
      description: 'アジャイル開発とモダンな開発手法によるプロジェクト管理'
    },
    {
      icon: Award,
      title: '品質保証',
      description: 'テスト駆動開発とコードレビューによる高品質な成果物'
    }
  ];

  const stats = [
    { number: '80+', label: 'プロジェクト完了' },
    { number: '50+', label: '満足いただいたクライアント' },
    { number: '7+', label: '年の経験' },
    { number: '25+', label: '技術スタック' }
  ];  

  const freelanceHighlights = [
    {
      icon: Briefcase,
      title: 'フリーランス専門',
      description: '2023年より独立し、柔軟で迅速な対応を実現'
    },
    {
      icon: Clock,
      title: '迅速な対応',
      description: '24時間以内の返信と効率的なプロジェクト進行'
    },
    {
      icon: Star,
      title: '豊富な実績',
      description: '7年以上の経験と80以上のプロジェクト実績'
    }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-primary-50 dark:bg-japanese-navy"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-4xl mx-auto px-4"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto mb-8 bg-primary-600 rounded-full flex items-center justify-center shadow-2xl">
              <Code2 className="w-16 h-16 text-white" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 font-zen-kaku text-primary-600"
          >
            小林直樹
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 font-noto-sans"
          >
            フリーランス フルスタックデベロッパー
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 font-noto-sans"
          >
            7年以上の豊富な経験で、革新的なWebソリューションを提供
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/projects"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              作品を見る
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/"
              className="inline-flex items-center px-8 py-4 border-2 border-primary-600 text-primary-600 dark:text-primary-400 rounded-full hover:bg-primary-600 hover:text-white transition-colors duration-200"
            >
              <Download className="mr-2 w-5 h-5" />
              履歴書
            </Link>
          </motion.div>
        </motion.div>

        {/* Floating Animation Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary-200 dark:bg-primary-800 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary-200 dark:bg-secondary-800 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent-200 dark:bg-accent-800 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      </section>

      {/* Freelance Highlights */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-zen-kaku text-gray-900 dark:text-white">
              フリーランスの強み
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              独立したからこそ実現できる、柔軟で高品質なサービス
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {freelanceHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 text-center"
              >
                <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <highlight.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-zen-kaku text-gray-900 dark:text-white">
              専門技術
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              最新の技術と日本の美学を融合させた、革新的なWebソリューションを提供します
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Freelance */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-zen-kaku text-gray-900 dark:text-white">
              フリーランスを選ぶ理由
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              大手企業での経験を活かし、個人の強みを最大限に発揮
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      直接的なコミュニケーション
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      中間業者を介さず、クライアントと直接やり取りすることで、要件の理解と実装の精度が向上します。
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      柔軟な対応力
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      組織の制約がないため、プロジェクトの変更や緊急対応にも迅速に対応できます。
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      コストパフォーマンス
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      企業の間接費用がかからないため、高品質なサービスをリーズナブルな価格で提供できます。
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="w-full h-96 bg-primary-100 rounded-3xl flex items-center justify-center">
                <div className="w-64 h-64 bg-primary-600 rounded-full flex items-center justify-center">
                  <Briefcase className="w-32 h-32 text-white" />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full animate-bounce opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-400 rounded-full animate-pulse opacity-20"></div>
            </motion.div>
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
              プロジェクトを始めませんか？
            </h2>
            <p className="text-xl mb-8 opacity-90">
              あなたのアイデアを現実のものにしましょう。
              8年以上の経験を活かして、素晴らしいWebソリューションを作り上げます。
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-full hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl font-semibold"
            >
              今すぐ相談する
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;