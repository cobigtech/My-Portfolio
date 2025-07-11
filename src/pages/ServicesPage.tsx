import React from 'react';
import { Code2, Palette, Zap, Shield, Globe, Users, ArrowRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: Code2,
      title: 'Webアプリケーション開発',
      description: 'React、Next.js、TypeScriptを使用したモダンなWebアプリケーションの設計・開発',
      features: [
        'レスポンシブデザイン対応',
        'SEO最適化',
        'パフォーマンス最適化',
        'セキュリティ対策',
        'テスト自動化'
      ],
      price: '¥500,000〜',
      duration: '2-4ヶ月'
    },
    {
      icon: Palette,
      title: 'UI/UXデザイン',
      description: '日本の美学を取り入れた、ユーザー中心のデザイン設計とプロトタイピング',
      features: [
        'ユーザビリティテスト',
        'ワイヤーフレーム作成',
        'デザインシステム構築',
        'アクセシビリティ対応',
        'ブランディング'
      ],
      price: '¥200,000〜',
      duration: '1-2ヶ月'
    },
    {
      icon: Zap,
      title: 'パフォーマンス最適化',
      description: '既存サイトの読み込み速度改善とCore Web Vitalsの最適化',
      features: [
        'パフォーマンス監査',
        'コード最適化',
        '画像最適化',
        'キャッシュ戦略',
        'CDN設定'
      ],
      price: '¥150,000〜',
      duration: '2-4週間'
    },
    {
      icon: Shield,
      title: 'セキュリティ監査',
      description: 'Webアプリケーションのセキュリティ脆弱性の診断と対策',
      features: [
        'セキュリティ診断',
        '脆弱性対策',
        'セキュリティポリシー策定',
        '定期監視設定',
        'インシデント対応'
      ],
      price: '¥100,000〜',
      duration: '1-2週間'
    },
    {
      icon: Globe,
      title: '国際化対応',
      description: '多言語対応と国際化（i18n）の実装',
      features: [
        '多言語サイト構築',
        'ローカライゼーション',
        '文字エンコーディング対応',
        'タイムゾーン対応',
        '通貨・日付形式対応'
      ],
      price: '¥300,000〜',
      duration: '1-3ヶ月'
    },
    {
      icon: Users,
      title: 'チーム開発支援',
      description: '開発チームの技術指導とプロジェクト管理支援',
      features: [
        'コードレビュー',
        '技術指導・メンタリング',
        '開発プロセス改善',
        'CI/CD構築',
        'チーム研修'
      ],
      price: '¥80,000〜/月',
      duration: '継続契約'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'ヒアリング',
      description: 'お客様の要件や目標を詳しくお聞きし、最適なソリューションを提案します。'
    },
    {
      step: '02',
      title: '企画・設計',
      description: '要件に基づいて技術選定を行い、詳細な設計書を作成します。'
    },
    {
      step: '03',
      title: '開発・実装',
      description: 'アジャイル手法を用いて、段階的に開発を進めます。'
    },
    {
      step: '04',
      title: 'テスト・検証',
      description: '品質保証のため、徹底的なテストと検証を実施します。'
    },
    {
      step: '05',
      title: 'リリース・運用',
      description: 'スムーズなリリースと継続的な運用サポートを提供します。'
    }
  ];

  const testimonials = [
    {
      name: '田中 美咲',
      company: 'スタートアップ株式会社',
      position: 'CTO',
      content: '技術力の高さはもちろん、ビジネス視点での提案も素晴らしく、期待以上の成果を得られました。',
      rating: 5
    },
    {
      name: '佐藤 健太',
      company: '大手商社',
      position: 'IT部長',
      content: 'プロジェクト管理能力が高く、スケジュール通りに高品質なシステムを納品していただきました。',
      rating: 5
    },
    {
      name: '山田 花子',
      company: 'ECサイト運営会社',
      position: '代表取締役',
      content: 'UI/UXの改善により、コンバージョン率が30%向上しました。投資対効果が非常に高いです。',
      rating: 5
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
              サービス
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              お客様のビジネス成長を支える、包括的なWeb開発サービスを提供します
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  {service.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <Check className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                        {service.price}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        期間: {service.duration}
                      </div>
                    </div>
                  </div>

                  <button className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium">
                    詳細を見る
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-zen-kaku text-gray-900 dark:text-white">
              開発プロセス
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              品質の高い成果物を確実に納品するための5つのステップ
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-primary-200 dark:bg-primary-800 transform -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  className="relative"
                >
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 text-center">
                    <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-zen-kaku text-gray-900 dark:text-white">
              お客様の声
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              実際にサービスをご利用いただいたお客様からの評価
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="w-5 h-5 text-yellow-400">★</div>
                  ))}
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                  "{testimonial.content}"
                </p>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.position}, {testimonial.company}
                  </div>
                </div>
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
              プロジェクトを始めませんか？
            </h2>
            <p className="text-xl mb-8 opacity-90">
              お客様のビジネス目標達成のため、最適なソリューションを提案いたします。
              まずはお気軽にご相談ください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-full hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl font-semibold"
              >
                無料相談を申し込む
                <ArrowRight className="ml-2 w-5 h-5" />
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

export default ServicesPage;