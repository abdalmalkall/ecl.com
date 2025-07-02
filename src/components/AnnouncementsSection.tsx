import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AnnouncementsSection = () => {
  const announcements = [
    {
      id: 1,
      title: "بدء التسجيل للفصل الدراسي الجديد",
      icon: "📢",
      type: "جديد",
      urgent: true
    },
    {
      id: 2,
      title: "نتائج الفصل الدراسي السابق متاحة الآن",
      icon: "📢",
      type: "نتائج",
      urgent: false
    },
    {
      id: 3,
      title: "اجتماع أولياء الأمور الخميس المقبل",
      icon: "📢",
      type: "اجتماع",
      urgent: true
    }
  ];

  return (
    <section className="section-spacing bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">الإعلانات الجديدة</h2>
          <p className="text-xl text-muted-foreground">آخر المستجدات والإعلانات المهمة</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {announcements.map((announcement) => (
            <Card key={announcement.id} className="card-elevated hover:scale-105 transition-transform duration-300">
              <CardHeader className="text-center">
                <div className="text-4xl mb-2">{announcement.icon}</div>
                <div className="flex justify-center mb-2">
                  <Badge variant={announcement.urgent ? "destructive" : "secondary"}>
                    {announcement.type}
                  </Badge>
                </div>
                <CardTitle className="text-right">{announcement.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <button className="text-primary hover:text-primary-glow font-semibold transition-colors">
                    اقرأ المزيد ←
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnnouncementsSection;