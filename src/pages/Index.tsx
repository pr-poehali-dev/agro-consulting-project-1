import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 bg-white/98 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-6 lg:px-12 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Sprout" size={24} className="text-white" />
              </div>
              <span className="text-xl font-bold text-foreground tracking-tight">АгроКонсалтинг</span>
            </div>
            <div className="hidden lg:flex items-center space-x-10">
              <button onClick={() => scrollToSection('services')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Услуги</button>
              <button onClick={() => scrollToSection('cases')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Кейсы</button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Обо мне</button>
              <button onClick={() => scrollToSection('blog')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Блог</button>
            </div>
            <div className="flex items-center gap-4">
              <Button onClick={() => scrollToSection('contact')} className="hidden lg:inline-flex">Записаться на консультацию</Button>
              <button 
                className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/98 backdrop-blur-sm lg:hidden">
          <div className="container mx-auto px-6 py-6 mt-24">
            <nav className="flex flex-col space-y-6">
              <button onClick={() => scrollToSection('services')} className="text-left text-lg font-medium py-3 border-b border-border">Услуги</button>
              <button onClick={() => scrollToSection('cases')} className="text-left text-lg font-medium py-3 border-b border-border">Кейсы</button>
              <button onClick={() => scrollToSection('about')} className="text-left text-lg font-medium py-3 border-b border-border">Обо мне</button>
              <button onClick={() => scrollToSection('blog')} className="text-left text-lg font-medium py-3 border-b border-border">Блог</button>
              <Button size="lg" className="w-full mt-4" onClick={() => scrollToSection('contact')}>Записаться на консультацию</Button>
            </nav>
          </div>
        </div>
      )}

      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 bg-gradient-to-b from-muted/40 to-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <Badge className="mb-6 text-xs uppercase tracking-wider px-4 py-2 font-semibold">Маркетинговый консалтинг</Badge>
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-[1.1] tracking-tight">
              Маркетинговое сопровождение агробизнеса
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-2xl">
              Эксперт по развитию дилерских центров сельхозтехники и запчастей
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base px-8 h-12" onClick={() => scrollToSection('contact')}>
                Записаться на консультацию
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 h-12" onClick={() => scrollToSection('cases')}>
                Смотреть кейсы
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="clients" className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">С кем я работаю</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">Стратегические партнёры в развитии агробизнеса</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {[
                { 
                  icon: 'Warehouse', 
                  title: 'Дилерские центры', 
                  desc: 'Дилеры сельхозтехники и запчастей, стремящиеся к системному росту и оптимизации процессов продаж'
                },
                { 
                  icon: 'Building2', 
                  title: 'Владельцы агробизнеса', 
                  desc: 'Компании, готовые масштабироваться через стратегический маркетинг и решения на основе данных'
                },
                { 
                  icon: 'Tractor', 
                  title: 'Растущие фермеры', 
                  desc: 'Фермеры, переходящие от небольших операций к бизнес-моделям коммерческого масштаба'
                },
                { 
                  icon: 'TrendingUp', 
                  title: 'Инвесторы в агробизнес', 
                  desc: 'Инвесторы, нуждающиеся в стратегических маркетинговых инсайтах для портфельных компаний'
                }
              ].map((item, idx) => (
                <Card key={idx} className="border-2 hover:border-primary/50 transition-all group cursor-pointer">
                  <CardHeader className="space-y-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon name={item.icon as any} size={28} className="text-primary" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{item.desc}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <Badge className="mb-4 text-xs uppercase tracking-wider">Экспертная консультация</Badge>
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">Диагностическая консультация</h2>
              <p className="text-lg text-muted-foreground max-w-3xl">
                Глубокий анализ маркетинга, воронки продаж, CRM-систем и дилерских процессов с планом действий на 30 дней
              </p>
            </div>

            <Card className="border-2 border-primary/20 shadow-xl mb-20">
              <CardContent className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-10">
                  <div className="space-y-6">
                    <div>
                      <div className="text-5xl font-bold text-primary mb-2">90 мин</div>
                      <p className="text-muted-foreground">Интенсивная стратегическая сессия</p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon name="Check" size={14} className="text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">Аудит маркетинга</p>
                          <p className="text-sm text-muted-foreground">Анализ текущих каналов, месседжинга и позиционирования</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon name="Check" size={14} className="text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">Оценка воронки продаж</p>
                          <p className="text-sm text-muted-foreground">Точки конверсии, узкие места, возможности</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon name="Check" size={14} className="text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">Обзор CRM и процессов</p>
                          <p className="text-sm text-muted-foreground">Системы, рабочие процессы, эффективность команды</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon name="Check" size={14} className="text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">Анализ дилерских операций</p>
                          <p className="text-sm text-muted-foreground">Складские запасы, ценообразование, жизненный цикл клиента</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="bg-muted/50 rounded-xl p-6">
                      <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                        <Icon name="FileText" size={20} className="text-primary" />
                        Результат
                      </h4>
                      <p className="text-foreground font-semibold mb-2">План действий на 30 дней</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Приоритизированная дорожная карта с конкретными инициативами, ожидаемыми результатами и планом внедрения
                      </p>
                    </div>
                    <Button size="lg" className="w-full h-14 text-base" onClick={() => scrollToSection('contact')}>
                      Записаться на диагностику
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mb-12">
              <h3 className="text-2xl lg:text-4xl font-bold text-foreground mb-4 tracking-tight">Постоянное консалтинговое сопровождение</h3>
              <p className="text-lg text-muted-foreground">Стратегическая поддержка под вашу стадию роста</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  name: 'Бронза',
                  tagline: 'Структурирование',
                  description: 'Построение фундамента для маркетинга и систем продаж',
                  features: [
                    'Ежемесячная стратегическая сессия',
                    'Документирование маркетинговых процессов',
                    'Оптимизация воронки продаж',
                    'Консультации по настройке CRM',
                    'Поддержка по email'
                  ]
                },
                {
                  name: 'Серебро',
                  tagline: 'Оптимизация',
                  description: 'Системный консалтинг для растущих дилерских операций',
                  popular: true,
                  features: [
                    '2 стратегические сессии в месяц',
                    'Разработка и анализ кампаний',
                    'Обучающие воркшопы для команды',
                    'Настройка аналитики производительности',
                    'Приоритетная поддержка',
                    'Квартальный обзор бизнеса'
                  ]
                },
                {
                  name: 'Золото',
                  tagline: 'Стратегическое лидерство',
                  description: 'Полная стратегическая поддержка как фрактальный CMO',
                  features: [
                    'Еженедельные стратегические сессии',
                    'Полное владение маркетинговой стратегией',
                    'Лидерство и развитие команды',
                    'Планирование и оптимизация бюджета',
                    'Отчётность для руководства',
                    'Доступ по запросу',
                    'Выездные визиты (ежеквартально)'
                  ]
                }
              ].map((pkg, idx) => (
                <Card key={idx} className={`${pkg.popular ? 'border-2 border-primary shadow-2xl scale-105' : 'border-2'} hover:shadow-xl transition-all`}>
                  <CardHeader className="space-y-3 pb-6">
                    {pkg.popular && <Badge className="w-fit">Популярный</Badge>}
                    <div>
                      <CardTitle className="text-2xl mb-1">{pkg.name}</CardTitle>
                      <p className="text-sm font-semibold text-primary uppercase tracking-wider">{pkg.tagline}</p>
                    </div>
                    <CardDescription className="text-base leading-relaxed">{pkg.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Icon name="Check" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full" variant={pkg.popular ? 'default' : 'outline'} onClick={() => scrollToSection('contact')}>
                      Начать работу
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <Badge className="mb-4 text-xs uppercase tracking-wider">Кейс</Badge>
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">Рост дилера запчастей</h2>
              <p className="text-lg text-muted-foreground max-w-3xl">
                Региональный дилер сельхозтехники достиг трёхкратного роста выручки через системный маркетинг и оптимизацию процессов
              </p>
            </div>

            <div className="space-y-8">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-xl">Задача</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground leading-relaxed">
                  <p>
                    Средний дилерский центр с годовым оборотом 150 млн рублей столкнулся с застоем роста. Нет маркетинговой системы, 
                    реактивный подход к продажам, отсутствие CRM. Привлечение клиентов основано только на сарафанном радио 
                    и личных связях. Высокомаржинальные клиенты не развиваются системно.
                  </p>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-2 border-primary/20 bg-primary/5">
                  <CardHeader>
                    <div className="text-4xl font-bold text-primary mb-2">3x</div>
                    <CardTitle className="text-lg">Рост выручки</CardTitle>
                    <CardDescription>150 млн → 450 млн за 18 месяцев</CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-2 border-primary/20 bg-primary/5">
                  <CardHeader>
                    <div className="text-4xl font-bold text-primary mb-2">47%</div>
                    <CardTitle className="text-lg">Рост конверсии</CardTitle>
                    <CardDescription>Улучшение показателя лид → клиент</CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-2 border-primary/20 bg-primary/5">
                  <CardHeader>
                    <div className="text-4xl font-bold text-primary mb-2">+320</div>
                    <CardTitle className="text-lg">Новых клиентов</CardTitle>
                    <CardDescription>Программа системного привлечения</CardDescription>
                  </CardHeader>
                </Card>
              </div>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-xl">Реализация</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">1</div>
                      <div>
                        <p className="font-semibold mb-1">Маркетинговый фундамент</p>
                        <p className="text-sm text-muted-foreground">Создана модель сегментации клиентов, разработаны ценностные предложения для каждого сегмента, построена контент-стратегия</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">2</div>
                      <div>
                        <p className="font-semibold mb-1">Внедрение CRM</p>
                        <p className="text-sm text-muted-foreground">Развёрнута и кастомизирована CRM, установлены рабочие процессы продаж, настроены автоматические последовательности дожима</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">3</div>
                      <div>
                        <p className="font-semibold mb-1">Система генерации лидов</p>
                        <p className="text-sm text-muted-foreground">Запущены таргетированные кампании, оптимизировано цифровое присутствие, создана реферальная программа для существующих клиентов</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">4</div>
                      <div>
                        <p className="font-semibold mb-1">Оптимизация процессов</p>
                        <p className="text-sm text-muted-foreground">Перепроектированы точки контакта жизненного цикла клиента, внедрены маркетинговые триггеры на основе складских запасов, созданы программы удержания</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 text-xs uppercase tracking-wider">Обо мне</Badge>
                <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">Стратегический маркетинг<br />для агробизнеса</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Более 5 лет специализированного опыта в маркетинге агробизнеса с глубокой экспертизой 
                    в операциях дилерских центров и B2B продажах в сельском хозяйстве.
                  </p>
                  <p>
                    Бывший руководитель маркетинга в ведущем дистрибьюторе сельхозтехники, где я построил маркетинговые 
                    системы с нуля и масштабировал операции по нескольким дилерским локациям.
                  </p>
                  <p>
                    Мой подход сочетает стратегическое маркетинговое мышление с практическим пониманием экономики дилера, 
                    динамики запасов и сезонности сельского хозяйства. Я фокусируюсь на построении систем, работающих в реальном 
                    мире агробизнеса — а не теоретических фреймворках.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <Card className="border-2">
                  <CardHeader>
                    <div className="text-4xl font-bold text-primary mb-2">5+</div>
                    <CardTitle className="text-lg">Лет в агробизнесе</CardTitle>
                    <CardDescription>Специализированная маркетинговая экспертиза</CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-2">
                  <CardHeader>
                    <div className="text-4xl font-bold text-primary mb-2">20+</div>
                    <CardTitle className="text-lg">Дилерских центров</CardTitle>
                    <CardDescription>Успешно трансформированы</CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-2">
                  <CardHeader>
                    <div className="text-4xl font-bold text-primary mb-2">B2B</div>
                    <CardTitle className="text-lg">Эксперт модели продаж</CardTitle>
                    <CardDescription>Сельхозтехника и запчасти</CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-2">
                  <CardHeader>
                    <div className="text-4xl font-bold text-primary mb-2">360°</div>
                    <CardTitle className="text-lg">Полный цикл</CardTitle>
                    <CardDescription>От стратегии до исполнения</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">Инсайты и ресурсы</h2>
              <p className="text-lg text-muted-foreground">Практические знания для роста агробизнеса</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: 'Target',
                  title: 'Маркетинг дилерского центра: за пределами сарафанного радио',
                  category: 'Стратегия',
                  readTime: '8 мин чтения'
                },
                {
                  icon: 'Database',
                  title: 'Внедрение CRM для продаж в сельском хозяйстве',
                  category: 'Системы',
                  readTime: '12 мин чтения'
                },
                {
                  icon: 'TrendingUp',
                  title: 'Сезонное маркетинговое планирование в агробизнесе',
                  category: 'Планирование',
                  readTime: '10 мин чтения'
                }
              ].map((post, idx) => (
                <Card key={idx} className="border-2 hover:border-primary/50 transition-all cursor-pointer group">
                  <CardHeader className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">{post.category}</Badge>
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </div>
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon name={post.icon as any} size={24} className="text-primary" />
                    </div>
                    <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors">{post.title}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 lg:py-32 bg-gradient-to-b from-background to-muted/40">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">Готовы трансформировать ваш дилерский центр?</h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Запишитесь на диагностическую консультацию, чтобы определить возможности роста с максимальным эффектом
            </p>
            <Card className="border-2 text-left">
              <CardContent className="p-8 lg:p-12">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold mb-4">Контактная информация</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon name="Mail" size={20} className="text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold mb-1">Email</p>
                          <a href="mailto:contact@agroconsult.ru" className="text-primary hover:underline">contact@agroconsult.ru</a>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon name="Phone" size={20} className="text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold mb-1">Телефон</p>
                          <a href="tel:+79001234567" className="text-primary hover:underline">+7 (900) 123-45-67</a>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon name="Linkedin" size={20} className="text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold mb-1">LinkedIn</p>
                          <a href="#" className="text-primary hover:underline">Связаться со мной</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <input 
                      type="text" 
                      placeholder="Ваше имя" 
                      className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input 
                      type="email" 
                      placeholder="Email" 
                      className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input 
                      type="text" 
                      placeholder="Компания/Дилерский центр" 
                      className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <textarea 
                      placeholder="Краткое описание ваших потребностей" 
                      rows={4}
                      className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    />
                    <Button size="lg" className="w-full h-12">
                      Записаться на консультацию
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <Icon name="Sprout" size={24} className="text-white" />
                  </div>
                  <span className="text-lg font-bold">АгроКонсалтинг</span>
                </div>
                <p className="text-sm text-background/70 leading-relaxed">Маркетинговый консалтинг для дилерских центров агробизнеса</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Услуги</h4>
                <ul className="space-y-2 text-sm text-background/70">
                  <li><button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">Диагностическая консультация</button></li>
                  <li><button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">Постоянное сопровождение</button></li>
                  <li><button onClick={() => scrollToSection('cases')} className="hover:text-primary transition-colors">Кейсы</button></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Компания</h4>
                <ul className="space-y-2 text-sm text-background/70">
                  <li><button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">Обо мне</button></li>
                  <li><button onClick={() => scrollToSection('blog')} className="hover:text-primary transition-colors">Блог</button></li>
                  <li><button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">Контакты</button></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Контакты</h4>
                <ul className="space-y-2 text-sm text-background/70">
                  <li>contact@agroconsult.ru</li>
                  <li>+7 (900) 123-45-67</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-background/20 pt-8 text-center text-sm text-background/70">
              <p>© 2024 АгроКонсалтинг. Профессиональный маркетинговый консалтинг для агробизнеса.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
