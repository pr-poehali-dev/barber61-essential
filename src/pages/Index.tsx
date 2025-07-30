import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    master: '',
    date: '',
    time: '',
    comment: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-barber-cream to-yellow-50">
      {/* Header */}
      <header className="bg-barber-dark text-barber-cream py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="Scissors" size={32} className="text-barber-gold" />
            <h1 className="text-2xl font-vintage font-bold">БАРБЕРШОП 61</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-barber-gold transition-colors">Главная</a>
            <a href="#services" className="hover:text-barber-gold transition-colors">Услуги</a>
            <a href="#masters" className="hover:text-barber-gold transition-colors">Мастера</a>
            <a href="#prices" className="hover:text-barber-gold transition-colors">Цены</a>
            <a href="#gallery" className="hover:text-barber-gold transition-colors">Галерея</a>
            <a href="#contacts" className="hover:text-barber-gold transition-colors">Контакты</a>
          </nav>
          <Button className="bg-barber-gold text-barber-dark hover:bg-yellow-500">
            Записаться
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-6 text-center animate-fade-in-up">
        <div className="container mx-auto">
          <h2 className="text-5xl font-vintage font-bold text-barber-dark mb-6">
            КЛАССИЧЕСКИЙ БАРБЕРШОП
          </h2>
          <p className="text-xl text-barber-brown mb-8 max-w-2xl mx-auto font-elegant">
            Традиции мужского стиля с 1961 года. Профессиональные стрижки, уход за бородой и усами в атмосфере классического барбершопа.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-barber-brown text-barber-cream hover:bg-barber-dark">
              <Icon name="Scissors" size={20} className="mr-2" />
              Записаться на стрижку
            </Button>
            <Button size="lg" variant="outline" className="border-barber-brown text-barber-brown hover:bg-barber-brown hover:text-barber-cream">
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6 bg-barber-cream"
        style={{
          animationDelay: '0.2s',
          animationFillMode: 'both'
        }}
      >
        <div className="container mx-auto">
          <h3 className="text-4xl font-vintage font-bold text-center text-barber-dark mb-12">
            НАШИ УСЛУГИ
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-barber-gold border-2 hover:scale-105 transition-transform duration-300 animate-scale-in" style={{animationDelay: '0.3s', animationFillMode: 'both'}}>
              <CardContent className="p-6 text-center">
                <Icon name="Scissors" size={48} className="text-barber-gold mx-auto mb-4" />
                <h4 className="text-xl font-vintage font-semibold text-barber-dark mb-2">СТРИЖКИ</h4>
                <p className="text-barber-brown">Классические и современные мужские стрижки от опытных мастеров</p>
              </CardContent>
            </Card>
            <Card className="bg-white border-barber-gold border-2 hover:scale-105 transition-transform duration-300 animate-scale-in" style={{animationDelay: '0.4s', animationFillMode: 'both'}}>
              <CardContent className="p-6 text-center">
                <Icon name="User" size={48} className="text-barber-gold mx-auto mb-4" />
                <h4 className="text-xl font-vintage font-semibold text-barber-dark mb-2">УХОД ЗА БОРОДОЙ</h4>
                <p className="text-barber-brown">Моделирование, стрижка и уход за бородой и усами</p>
              </CardContent>
            </Card>
            <Card className="bg-white border-barber-gold border-2 hover:scale-105 transition-transform duration-300 animate-scale-in" style={{animationDelay: '0.5s', animationFillMode: 'both'}}>
              <CardContent className="p-6 text-center">
                <Icon name="Zap" size={48} className="text-barber-gold mx-auto mb-4" />
                <h4 className="text-xl font-vintage font-semibold text-barber-dark mb-2">БРИТЬЕ</h4>
                <p className="text-barber-brown">Классическое бритье опасной бритвой с горячими полотенцами</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Masters Section */}
      <section id="masters" className="py-16 px-6">
        <div className="container mx-auto">
          <h3 className="text-4xl font-vintage font-bold text-center text-barber-dark mb-12">
            НАШИ МАСТЕРА
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Владимир Петров", experience: "15 лет опыта", specialty: "Классические стрижки" },
              { name: "Сергей Иванов", experience: "12 лет опыта", specialty: "Моделирование бород" },
              { name: "Алексей Сидоров", experience: "8 лет опыта", specialty: "Современные стили" }
            ].map((master, index) => (
              <Card key={index} className="bg-white border-barber-brown border">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-barber-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" size={40} className="text-barber-dark" />
                  </div>
                  <h4 className="text-xl font-vintage font-semibold text-barber-dark mb-2">{master.name}</h4>
                  <p className="text-barber-brown mb-1">{master.experience}</p>
                  <p className="text-sm text-barber-brown">{master.specialty}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prices Section */}
      <section id="prices" className="py-16 px-6 bg-barber-cream">
        <div className="container mx-auto">
          <h3 className="text-4xl font-vintage font-bold text-center text-barber-dark mb-12">
            ПРАЙС-ЛИСТ
          </h3>
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white border-barber-gold border-2">
              <CardContent className="p-8">
                <div className="space-y-4">
                  {[
                    { service: "Мужская стрижка", price: "1200₽" },
                    { service: "Стрижка + укладка", price: "1500₽" },
                    { service: "Моделирование бороды", price: "800₽" },
                    { service: "Классическое бритье", price: "1000₽" },
                    { service: "Комплекс (стрижка + борода)", price: "1800₽" },
                    { service: "VIP обслуживание", price: "2500₽" }
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-barber-gold/30">
                      <span className="font-elegant text-barber-dark">{item.service}</span>
                      <span className="font-vintage font-bold text-barber-brown">{item.price}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 px-6">
        <div className="container mx-auto">
          <h3 className="text-4xl font-vintage font-bold text-center text-barber-dark mb-12">
            ГАЛЕРЕЯ РАБОТ
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="aspect-square rounded-lg overflow-hidden border-2 border-barber-gold">
              <img 
                src="/img/d787620b-c0f8-40c3-b317-3b7df027db77.jpg" 
                alt="Интерьер барбершопа" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden border-2 border-barber-gold">
              <img 
                src="/img/11fde03e-8848-4322-b37b-05badb5da0a3.jpg" 
                alt="Профессиональная стрижка" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden border-2 border-barber-gold">
              <img 
                src="/img/b9872691-6d08-4ef0-930c-fd720aa6f3f8.jpg" 
                alt="Уход за бородой" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            {[4, 5, 6].map((item) => (
              <div key={item} className="aspect-square bg-barber-gold/20 rounded-lg flex items-center justify-center border-2 border-barber-gold">
                <Icon name="Camera" size={48} className="text-barber-brown" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 bg-barber-cream">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-vintage font-bold text-barber-dark mb-8">О НАС</h3>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-barber-brown font-elegant mb-6">
              Барбершоп 61 - это место, где традиции классического мужского стиля встречаются с современным подходом к обслуживанию. 
              Наши мастера с многолетним опытом создают не просто стрижки, а настоящие произведения искусства.
            </p>
            <p className="text-lg text-barber-brown font-elegant">
              Мы используем только качественные инструменты и косметику, обеспечивая каждому клиенту индивидуальный подход 
              и непревзойденное качество обслуживания в атмосфере настоящего джентльменского клуба.
            </p>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 px-6">
        <div className="container mx-auto">
          <h3 className="text-4xl font-vintage font-bold text-center text-barber-dark mb-12">
            КОНТАКТЫ
          </h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-vintage font-semibold text-barber-dark mb-6">Свяжитесь с нами</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={24} className="text-barber-gold" />
                  <span className="text-barber-brown">г. Ростов-на-Дону, ул. Большая Садовая, 61</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={24} className="text-barber-gold" />
                  <span className="text-barber-brown">+7 (863) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={24} className="text-barber-gold" />
                  <span className="text-barber-brown">Ежедневно с 9:00 до 21:00</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={24} className="text-barber-gold" />
                  <span className="text-barber-brown">info@barber61.ru</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-2xl font-vintage font-semibold text-barber-dark mb-6">Онлайн запись</h4>
              <Card className="bg-white border-barber-gold border-2">
                <CardContent className="p-6">
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <Icon name="CheckCircle" size={48} className="text-green-500 mx-auto mb-4" />
                      <h5 className="text-xl font-vintage font-semibold text-barber-dark mb-2">Заявка отправлена!</h5>
                      <p className="text-barber-brown">Мы свяжемся с вами в ближайшее время</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name" className="text-barber-dark font-vintage">Имя *</Label>
                          <Input 
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            className="border-barber-gold focus:border-barber-brown"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone" className="text-barber-dark font-vintage">Телефон *</Label>
                          <Input 
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            className="border-barber-gold focus:border-barber-brown"
                            placeholder="+7 (___) ___-__-__"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label className="text-barber-dark font-vintage">Услуга *</Label>
                          <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                            <SelectTrigger className="border-barber-gold focus:border-barber-brown">
                              <SelectValue placeholder="Выберите услугу" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="haircut">Мужская стрижка (1200₽)</SelectItem>
                              <SelectItem value="haircut-styling">Стрижка + укладка (1500₽)</SelectItem>
                              <SelectItem value="beard">Моделирование бороды (800₽)</SelectItem>
                              <SelectItem value="shave">Классическое бритье (1000₽)</SelectItem>
                              <SelectItem value="complex">Комплекс (1800₽)</SelectItem>
                              <SelectItem value="vip">VIP обслуживание (2500₽)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label className="text-barber-dark font-vintage">Мастер</Label>
                          <Select value={formData.master} onValueChange={(value) => handleInputChange('master', value)}>
                            <SelectTrigger className="border-barber-gold focus:border-barber-brown">
                              <SelectValue placeholder="Любой мастер" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="any">Любой мастер</SelectItem>
                              <SelectItem value="vladimir">Владимир Петров</SelectItem>
                              <SelectItem value="sergey">Сергей Иванов</SelectItem>
                              <SelectItem value="alexey">Алексей Сидоров</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="date" className="text-barber-dark font-vintage">Дата *</Label>
                          <Input 
                            id="date"
                            type="date"
                            value={formData.date}
                            onChange={(e) => handleInputChange('date', e.target.value)}
                            className="border-barber-gold focus:border-barber-brown"
                            min={new Date().toISOString().split('T')[0]}
                            required
                          />
                        </div>
                        <div>
                          <Label className="text-barber-dark font-vintage">Время *</Label>
                          <Select value={formData.time} onValueChange={(value) => handleInputChange('time', value)}>
                            <SelectTrigger className="border-barber-gold focus:border-barber-brown">
                              <SelectValue placeholder="Выберите время" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="09:00">09:00</SelectItem>
                              <SelectItem value="10:00">10:00</SelectItem>
                              <SelectItem value="11:00">11:00</SelectItem>
                              <SelectItem value="12:00">12:00</SelectItem>
                              <SelectItem value="13:00">13:00</SelectItem>
                              <SelectItem value="14:00">14:00</SelectItem>
                              <SelectItem value="15:00">15:00</SelectItem>
                              <SelectItem value="16:00">16:00</SelectItem>
                              <SelectItem value="17:00">17:00</SelectItem>
                              <SelectItem value="18:00">18:00</SelectItem>
                              <SelectItem value="19:00">19:00</SelectItem>
                              <SelectItem value="20:00">20:00</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="comment" className="text-barber-dark font-vintage">Комментарий</Label>
                        <Textarea 
                          id="comment"
                          value={formData.comment}
                          onChange={(e) => handleInputChange('comment', e.target.value)}
                          className="border-barber-gold focus:border-barber-brown"
                          placeholder="Дополнительные пожелания..."
                          rows={3}
                        />
                      </div>

                      <Button type="submit" className="w-full bg-barber-brown text-barber-cream hover:bg-barber-dark">
                        <Icon name="Calendar" size={20} className="mr-2" />
                        Записаться
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-barber-dark text-barber-cream py-8 px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Scissors" size={24} className="text-barber-gold" />
            <span className="text-xl font-vintage font-bold">БАРБЕРШОП 61</span>
          </div>
          <p className="text-barber-cream/80">© 2024 Барбершоп 61. Все права защищены.</p>
          <p className="text-barber-cream/60 text-sm mt-2">Традиции мужского стиля с 1961 года</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;