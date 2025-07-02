import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CalendarSection = () => {
  const events = [
    {
      date: "١ سبتمبر",
      title: "بداية الفصل الدراسي الأول",
      type: "بداية",
      color: "bg-secondary"
    },
    {
      date: "١٥ أكتوبر", 
      title: "امتحانات منتصف الفصل الدراسي",
      type: "امتحانات",
      color: "bg-accent"
    },
    {
      date: "٢٠ ديسمبر",
      title: "نهاية الفصل الدراسي الأول",
      type: "نهاية",
      color: "bg-primary"
    }
  ];

  return (
    <section className="section-spacing">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">التقويم الدراسي</h2>
          <p className="text-xl text-muted-foreground">أهم المواعيد والفعاليات الدراسية</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <Card key={index} className="card-elevated text-center">
              <CardHeader>
                <div className={`w-20 h-20 ${event.color} rounded-full mx-auto flex items-center justify-center text-white font-bold text-lg mb-4`}>
                  {index + 1}
                </div>
                <CardTitle className="text-2xl text-primary">{event.date}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-card-foreground">{event.title}</p>
                <div className="mt-4">
                  <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-muted text-muted-foreground">
                    {event.type}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CalendarSection;