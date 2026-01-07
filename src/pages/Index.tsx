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
              <span className="text-xl font-bold text-foreground tracking-tight">AgroConsult</span>
            </div>
            <div className="hidden lg:flex items-center space-x-10">
              <button onClick={() => scrollToSection('services')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Services</button>
              <button onClick={() => scrollToSection('cases')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Cases</button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">About</button>
              <button onClick={() => scrollToSection('blog')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Blog</button>
            </div>
            <div className="flex items-center gap-4">
              <Button onClick={() => scrollToSection('contact')} className="hidden lg:inline-flex">Request Consultation</Button>
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
              <button onClick={() => scrollToSection('services')} className="text-left text-lg font-medium py-3 border-b border-border">Services</button>
              <button onClick={() => scrollToSection('cases')} className="text-left text-lg font-medium py-3 border-b border-border">Cases</button>
              <button onClick={() => scrollToSection('about')} className="text-left text-lg font-medium py-3 border-b border-border">About</button>
              <button onClick={() => scrollToSection('blog')} className="text-left text-lg font-medium py-3 border-b border-border">Blog</button>
              <Button size="lg" className="w-full mt-4" onClick={() => scrollToSection('contact')}>Request Consultation</Button>
            </nav>
          </div>
        </div>
      )}

      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 bg-gradient-to-b from-muted/40 to-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <Badge className="mb-6 text-xs uppercase tracking-wider px-4 py-2 font-semibold">Marketing Consulting</Badge>
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-[1.1] tracking-tight">
              Marketing support<br />for agribusiness
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-2xl">
              Expert in developing dealer centers of agricultural machinery and spare parts
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base px-8 h-12" onClick={() => scrollToSection('contact')}>
                Request Consultation
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 h-12" onClick={() => scrollToSection('cases')}>
                View Cases
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="clients" className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">Who I work with</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">Strategic partners in agricultural business development</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {[
                { 
                  icon: 'Warehouse', 
                  title: 'Dealer Centers', 
                  desc: 'Agricultural machinery and spare parts dealers seeking systematic growth and optimized sales processes'
                },
                { 
                  icon: 'Building2', 
                  title: 'Agribusiness Owners', 
                  desc: 'Companies ready to scale operations through strategic marketing and data-driven decisions'
                },
                { 
                  icon: 'Tractor', 
                  title: 'Growing Farmers', 
                  desc: 'Farmers transitioning from small operations to commercial-scale business models'
                },
                { 
                  icon: 'TrendingUp', 
                  title: 'Agribusiness Investors', 
                  desc: 'Investors requiring strategic marketing insights and growth optimization for portfolio companies'
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
              <Badge className="mb-4 text-xs uppercase tracking-wider">Expert Consultation</Badge>
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">Diagnostic Consultation</h2>
              <p className="text-lg text-muted-foreground max-w-3xl">
                Deep-dive analysis of your marketing, sales funnel, CRM systems, and dealer processes with actionable 30-day plan
              </p>
            </div>

            <Card className="border-2 border-primary/20 shadow-xl mb-20">
              <CardContent className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-10">
                  <div className="space-y-6">
                    <div>
                      <div className="text-5xl font-bold text-primary mb-2">90 min</div>
                      <p className="text-muted-foreground">Intensive strategy session</p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon name="Check" size={14} className="text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">Marketing audit</p>
                          <p className="text-sm text-muted-foreground">Current channels, messaging, positioning analysis</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon name="Check" size={14} className="text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">Sales funnel evaluation</p>
                          <p className="text-sm text-muted-foreground">Conversion points, bottlenecks, opportunities</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon name="Check" size={14} className="text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">CRM and process review</p>
                          <p className="text-sm text-muted-foreground">Systems, workflows, team efficiency</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon name="Check" size={14} className="text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">Dealer operations analysis</p>
                          <p className="text-sm text-muted-foreground">Inventory, pricing, customer lifecycle</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="bg-muted/50 rounded-xl p-6">
                      <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                        <Icon name="FileText" size={20} className="text-primary" />
                        Deliverable
                      </h4>
                      <p className="text-foreground font-semibold mb-2">30-Day Action Plan</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Prioritized roadmap with specific initiatives, expected outcomes, and implementation timeline
                      </p>
                    </div>
                    <Button size="lg" className="w-full h-14 text-base" onClick={() => scrollToSection('contact')}>
                      Book Diagnostic Session
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mb-12">
              <h3 className="text-2xl lg:text-4xl font-bold text-foreground mb-4 tracking-tight">Ongoing Consulting Packages</h3>
              <p className="text-lg text-muted-foreground">Strategic support tailored to your growth stage</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  name: 'Bronze',
                  tagline: 'Structuring',
                  description: 'Foundation building for marketing and sales systems',
                  features: [
                    'Monthly strategic session',
                    'Marketing process documentation',
                    'Sales funnel optimization',
                    'CRM setup guidance',
                    'Email support'
                  ]
                },
                {
                  name: 'Silver',
                  tagline: 'Optimization',
                  description: 'System consulting for growing dealer operations',
                  popular: true,
                  features: [
                    '2 strategic sessions/month',
                    'Campaign development & review',
                    'Team training workshops',
                    'Performance analytics setup',
                    'Priority support',
                    'Quarterly business review'
                  ]
                },
                {
                  name: 'Gold',
                  tagline: 'Strategic Leadership',
                  description: 'Full strategic support as fractional CMO',
                  features: [
                    'Weekly strategic sessions',
                    'Full marketing strategy ownership',
                    'Team leadership & development',
                    'Budget planning & optimization',
                    'Executive reporting',
                    'On-demand access',
                    'On-site visits (quarterly)'
                  ]
                }
              ].map((pkg, idx) => (
                <Card key={idx} className={`${pkg.popular ? 'border-2 border-primary shadow-2xl scale-105' : 'border-2'} hover:shadow-xl transition-all`}>
                  <CardHeader className="space-y-3 pb-6">
                    {pkg.popular && <Badge className="w-fit">Most Popular</Badge>}
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
                      Get Started
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
              <Badge className="mb-4 text-xs uppercase tracking-wider">Case Study</Badge>
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">Spare Parts Dealer Growth</h2>
              <p className="text-lg text-muted-foreground max-w-3xl">
                Regional agricultural spare parts dealer achieving 3x revenue growth through systematic marketing and process optimization
              </p>
            </div>

            <div className="space-y-8">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-xl">Challenge</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground leading-relaxed">
                  <p>
                    Mid-sized dealer center with $2M annual revenue facing stagnant growth. No marketing system, 
                    reactive sales approach, no CRM implementation. Customer acquisition relying solely on word-of-mouth 
                    and personal networks. High-value customers not systematically nurtured.
                  </p>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-2 border-primary/20 bg-primary/5">
                  <CardHeader>
                    <div className="text-4xl font-bold text-primary mb-2">3x</div>
                    <CardTitle className="text-lg">Revenue Growth</CardTitle>
                    <CardDescription>$2M → $6M in 18 months</CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-2 border-primary/20 bg-primary/5">
                  <CardHeader>
                    <div className="text-4xl font-bold text-primary mb-2">47%</div>
                    <CardTitle className="text-lg">Conversion Increase</CardTitle>
                    <CardDescription>Lead-to-customer rate improvement</CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-2 border-primary/20 bg-primary/5">
                  <CardHeader>
                    <div className="text-4xl font-bold text-primary mb-2">+320</div>
                    <CardTitle className="text-lg">New Customers</CardTitle>
                    <CardDescription>Systematic acquisition program</CardDescription>
                  </CardHeader>
                </Card>
              </div>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-xl">Implementation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">1</div>
                      <div>
                        <p className="font-semibold mb-1">Marketing Foundation</p>
                        <p className="text-sm text-muted-foreground">Built customer segmentation model, developed value propositions for each segment, created content strategy</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">2</div>
                      <div>
                        <p className="font-semibold mb-1">CRM Implementation</p>
                        <p className="text-sm text-muted-foreground">Deployed and customized CRM, established sales workflows, implemented automated follow-up sequences</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">3</div>
                      <div>
                        <p className="font-semibold mb-1">Lead Generation System</p>
                        <p className="text-sm text-muted-foreground">Launched targeted campaigns, optimized digital presence, created referral program for existing customers</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">4</div>
                      <div>
                        <p className="font-semibold mb-1">Process Optimization</p>
                        <p className="text-sm text-muted-foreground">Redesigned customer lifecycle touchpoints, implemented inventory-based marketing triggers, created retention programs</p>
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
                <Badge className="mb-4 text-xs uppercase tracking-wider">About</Badge>
                <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">Strategic Marketing<br />for Agribusiness</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Over 5 years of specialized experience in agribusiness marketing, with deep expertise in dealer 
                    center operations and B2B agricultural sales.
                  </p>
                  <p>
                    Former Head of Marketing at leading agricultural machinery distributor, where I built marketing 
                    systems from the ground up and scaled operations across multiple dealer locations.
                  </p>
                  <p>
                    My approach combines strategic marketing thinking with practical understanding of dealer economics, 
                    inventory dynamics, and agricultural seasonality. I focus on building systems that work in the real 
                    world of agribusiness—not theoretical frameworks.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <Card className="border-2">
                  <CardHeader>
                    <div className="text-4xl font-bold text-primary mb-2">5+</div>
                    <CardTitle className="text-lg">Years in Agribusiness</CardTitle>
                    <CardDescription>Specialized marketing expertise</CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-2">
                  <CardHeader>
                    <div className="text-4xl font-bold text-primary mb-2">20+</div>
                    <CardTitle className="text-lg">Dealer Centers</CardTitle>
                    <CardDescription>Successfully transformed</CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-2">
                  <CardHeader>
                    <div className="text-4xl font-bold text-primary mb-2">B2B</div>
                    <CardTitle className="text-lg">Sales Model Expert</CardTitle>
                    <CardDescription>Agricultural machinery & parts</CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-2">
                  <CardHeader>
                    <div className="text-4xl font-bold text-primary mb-2">360°</div>
                    <CardTitle className="text-lg">Full-Cycle</CardTitle>
                    <CardDescription>Strategy to execution</CardDescription>
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
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">Insights & Resources</h2>
              <p className="text-lg text-muted-foreground">Practical knowledge for agribusiness growth</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: 'Target',
                  title: 'Dealer Center Marketing: Beyond Word-of-Mouth',
                  category: 'Strategy',
                  readTime: '8 min read'
                },
                {
                  icon: 'Database',
                  title: 'CRM Implementation for Agricultural Sales',
                  category: 'Systems',
                  readTime: '12 min read'
                },
                {
                  icon: 'TrendingUp',
                  title: 'Seasonal Marketing Planning in Agribusiness',
                  category: 'Planning',
                  readTime: '10 min read'
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
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">Ready to transform your dealer center?</h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Schedule a diagnostic consultation to identify your highest-impact growth opportunities
            </p>
            <Card className="border-2 text-left">
              <CardContent className="p-8 lg:p-12">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon name="Mail" size={20} className="text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold mb-1">Email</p>
                          <a href="mailto:contact@agroconsult.com" className="text-primary hover:underline">contact@agroconsult.com</a>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon name="Phone" size={20} className="text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold mb-1">Phone</p>
                          <a href="tel:+1234567890" className="text-primary hover:underline">+1 (234) 567-890</a>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon name="Linkedin" size={20} className="text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold mb-1">LinkedIn</p>
                          <a href="#" className="text-primary hover:underline">Connect with me</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input 
                      type="text" 
                      placeholder="Company/Dealer Center" 
                      className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <textarea 
                      placeholder="Brief description of your needs" 
                      rows={4}
                      className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    />
                    <Button size="lg" className="w-full h-12">
                      Request Consultation
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
                  <span className="text-lg font-bold">AgroConsult</span>
                </div>
                <p className="text-sm text-background/70 leading-relaxed">Marketing consulting for agribusiness dealer centers</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-sm text-background/70">
                  <li><button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">Diagnostic Consultation</button></li>
                  <li><button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">Ongoing Support</button></li>
                  <li><button onClick={() => scrollToSection('cases')} className="hover:text-primary transition-colors">Case Studies</button></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-background/70">
                  <li><button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">About</button></li>
                  <li><button onClick={() => scrollToSection('blog')} className="hover:text-primary transition-colors">Blog</button></li>
                  <li><button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">Contact</button></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <ul className="space-y-2 text-sm text-background/70">
                  <li>contact@agroconsult.com</li>
                  <li>+1 (234) 567-890</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-background/20 pt-8 text-center text-sm text-background/70">
              <p>© 2024 AgroConsult. Professional marketing consulting for agribusiness.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
