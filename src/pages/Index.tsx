import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Sprout" size={28} className="text-primary" />
              <span className="text-xl font-bold text-foreground">АгроКонсалтинг</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-sm font-medium hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-primary transition-colors">Услуги</button>
              <button onClick={() => scrollToSection('blog')} className="text-sm font-medium hover:text-primary transition-colors">Блог</button>
              <button onClick={() => scrollToSection('faq')} className="text-sm font-medium hover:text-primary transition-colors">FAQ</button>
              <button onClick={() => scrollToSection('contacts')} className="text-sm font-medium hover:text-primary transition-colors">Контакты</button>
            </div>
            <Button className="hidden md:inline-flex">Консультация</Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-20 pb-28 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 text-sm px-4 py-2">Профессиональный консалтинг для агробизнеса</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Маркетинговое сопровождение агробизнеса
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Консалтинг для дилеров сельхозтехники и запчастей. От диагностики до управляемой системы продаж.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="text-base px-8">
                <Icon name="Calendar" size={20} className="mr-2" />
                Записаться на консультацию
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8">
                <Icon name="TrendingUp" size={20} className="mr-2" />
                Оценить потенциал центра
              </Button>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6">
                  <Icon name="Tractor" size={32} className="text-primary mb-3 mx-auto" />
                  <p className="text-sm font-medium">Дилерская модель: техника, запчасти, сервис</p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6">
                  <Icon name="Link" size={32} className="text-primary mb-3 mx-auto" />
                  <p className="text-sm font-medium">Связка маркетинг ↔ продажи ↔ CRM</p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6">
                  <Icon name="BarChart3" size={32} className="text-primary mb-3 mx-auto" />
                  <p className="text-sm font-medium">Контроль через цифры, а не догадки</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="target" className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Кому подходит агроконсалтинг</h2>
            <p className="text-lg text-muted-foreground">Работаем с лидерами агросектора</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: 'Building2', title: 'Дилерские центры', desc: 'Сельхозтехники и запчастей' },
              { icon: 'Landmark', title: 'Агропредприятия', desc: 'Владельцы крупного бизнеса' },
              { icon: 'Users', title: 'Фермеры', desc: 'Выходящие на масштаб' },
              { icon: 'TrendingUp', title: 'Инвесторы', desc: 'В аграрный сектор' }
            ].map((item, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon name={item.icon as any} size={40} className="text-primary mb-3" />
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription>{item.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Услуги и пакеты</h2>
            <p className="text-lg text-muted-foreground">Выберите формат сотрудничества</p>
          </div>
          
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="border-2 border-primary">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <Badge className="mb-3">Разовая услуга</Badge>
                    <CardTitle className="text-2xl">Диагностическая консультация</CardTitle>
                    <CardDescription className="text-base mt-2">Глубокий анализ текущего состояния с конкретными рекомендациями</CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary">15 000 ₽</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" size={20} className="text-primary mt-1" />
                    <div>
                      <p className="font-semibold">90 минут онлайн</p>
                      <p className="text-sm text-muted-foreground">Глубокая сессия с анализом вашего бизнеса</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="FileText" size={20} className="text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Письменное резюме</p>
                      <p className="text-sm text-muted-foreground">Детальный отчет с конкретными шагами</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Target" size={20} className="text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Дорожная карта</p>
                      <p className="text-sm text-muted-foreground">План внедрения изменений на 3-6 месяцев</p>
                    </div>
                  </div>
                </div>
                <Button className="w-full" size="lg">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Записаться на диагностику
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8">Ежемесячное консалтинговое сопровождение</h3>
            <p className="text-center text-muted-foreground mb-10">Все пакеты — 1 месяц. Продление по результату.</p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: 'Старт',
                  price: '50 000',
                  icon: 'Rocket',
                  features: ['2 консультации/месяц', 'Email-поддержка', 'Аудит маркетинга', 'Базовая CRM-настройка']
                },
                {
                  name: 'Рост',
                  price: '120 000',
                  icon: 'TrendingUp',
                  popular: true,
                  features: ['4 консультации/месяц', 'Приоритетная поддержка', 'Настройка воронки продаж', 'Интеграция CRM + маркетинг', 'Обучение команды']
                },
                {
                  name: 'Масштаб',
                  price: '250 000',
                  icon: 'Building2',
                  features: ['8 консультаций/месяц', 'Персональный менеджер', 'Полная автоматизация', 'Стратегия продаж', 'Аналитика и отчеты', 'Выездная работа']
                }
              ].map((pkg, idx) => (
                <Card key={idx} className={`${pkg.popular ? 'border-2 border-primary shadow-xl' : ''} hover:shadow-lg transition-shadow`}>
                  <CardHeader>
                    {pkg.popular && <Badge className="mb-3 w-fit">Популярный</Badge>}
                    <Icon name={pkg.icon as any} size={36} className="text-primary mb-3" />
                    <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                    <div className="text-3xl font-bold text-primary mt-2">{pkg.price} ₽<span className="text-sm text-muted-foreground">/мес</span></div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Icon name="Check" size={18} className="text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full" variant={pkg.popular ? 'default' : 'outline'}>
                      Выбрать пакет
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Блог и кейсы</h2>
            <p className="text-lg text-muted-foreground">Практические материалы для агробизнеса</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { 
                icon: 'LineChart', 
                title: 'Рост продаж на 47% за квартал',
                desc: 'Кейс дилерского центра в Краснодарском крае',
                date: '15 декабря 2024'
              },
              { 
                icon: 'Settings', 
                title: 'Внедрение CRM за 14 дней',
                desc: 'Как автоматизировали отдел продаж с нуля',
                date: '8 декабря 2024'
              },
              { 
                icon: 'Users', 
                title: 'Обучение команды продаж',
                desc: 'Методология работы с клиентами B2B в агросекторе',
                date: '1 декабря 2024'
              }
            ].map((post, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-all cursor-pointer group">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name={post.icon as any} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{post.title}</CardTitle>
                  <CardDescription className="text-base">{post.desc}</CardDescription>
                  <p className="text-xs text-muted-foreground mt-2 flex items-center gap-1">
                    <Icon name="Calendar" size={14} />
                    {post.date}
                  </p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Часто задаваемые вопросы</h2>
            <p className="text-lg text-muted-foreground">Ответы на популярные вопросы</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Подходит ли консалтинг небольшим дилерским центрам?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Да, мы работаем с дилерами любого размера. Пакет "Старт" разработан специально для небольших центров с оборотом от 5 млн рублей в год. Главное — готовность внедрять изменения.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Какие CRM-системы вы рекомендуете для агробизнеса?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Работаем с AmoCRM, Битрикс24, и специализированными решениями для дилеров. Выбор зависит от специфики бизнеса, количества сделок и интеграций. На диагностической консультации подберем оптимальный вариант.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Как быстро появятся результаты?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Первые изменения видны через 2-4 недели (настройка процессов, CRM). Рост ключевых показателей — через 1-3 месяца. Системные результаты — через полгода регулярной работы.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Что входит в обучение команды продаж?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Работа с возражениями клиентов, техники продаж запчастей и сервиса, использование CRM, построение долгосрочных отношений с фермерами. Формат — онлайн-сессии и практические задания.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Можно ли начать с диагностики, а потом подключить сопровождение?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Да, это оптимальный сценарий. После диагностики вы получите полное понимание ситуации и рекомендации. Если решите продолжить — стоимость диагностики вычтем из первого месяца сопровождения.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Начнем сотрудничество?</h2>
              <p className="text-lg text-muted-foreground">Запишитесь на диагностическую консультацию</p>
            </div>
            
            <Card className="border-2">
              <CardContent className="pt-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
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
                        <Icon name="Mail" size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Email</p>
                        <a href="mailto:info@agroconsult.ru" className="text-primary hover:underline">info@agroconsult.ru</a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="MapPin" size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Офис</p>
                        <p className="text-muted-foreground">Москва, ул. Примерная, 123</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Имя</label>
                      <input type="text" className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Иван Иванов" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Телефон</label>
                      <input type="tel" className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" placeholder="+7 (___) ___-__-__" />
                    </div>
                    <Button className="w-full" size="lg">
                      <Icon name="Send" size={20} className="mr-2" />
                      Отправить заявку
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Sprout" size={24} className="text-primary" />
                <span className="text-lg font-bold">АгроКонсалтинг</span>
              </div>
              <p className="text-sm text-background/70">Профессиональный консалтинг для дилеров агротехники</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li><a href="#" className="hover:text-primary transition-colors">Диагностика</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Сопровождение</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Обучение</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Кейсы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Блог</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li>+7 (900) 123-45-67</li>
                <li>info@agroconsult.ru</li>
                <li>Москва, ул. Примерная, 123</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-sm text-background/70">
            <p>© 2024 АгроКонсалтинг. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
