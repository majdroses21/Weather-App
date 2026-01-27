// import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardContent
} from "@/components/ui/card";
import { ThemeControls } from '../components/ThemeControls';
import { CloudRain, Sun, Wind, CloudSnow } from 'lucide-react';

const Test = () => {
  return (
    <>
      <div className="min-h-screen p-8 space-y-8">
        {/* أزرار التحكم */}
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold">تطبيق الطقس 🌤️</h1>
          <ThemeControls />
        </div>

        {/* بطاقات تجريبية */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="shadow-theme-lg hover:shadow-xl transition-all">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Sun className="w-8 h-8 text-accent" />
                <CardTitle>طقس اليوم</CardTitle>
              </div>
              <CardDescription>مشمس وجميل</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-primary">28°C</p>
              <p className="text-muted-foreground mt-2">الرطوبة: 65%</p>
            </CardContent>
          </Card>

          <Card className="shadow-theme-lg hover:shadow-xl transition-all">
            <CardHeader>
              <div className="flex items-center gap-3">
                <CloudRain className="w-8 h-8 text-primary" />
                <CardTitle>الغد</CardTitle>
              </div>
              <CardDescription>أمطار متوقعة</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-primary">22°C</p>
              <p className="text-muted-foreground mt-2">احتمال المطر: 80%</p>
            </CardContent>
          </Card>

          <Card className="shadow-theme-lg hover:shadow-xl transition-all">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Wind className="w-8 h-8 text-secondary" />
                <CardTitle>سرعة الرياح</CardTitle>
              </div>
              <CardDescription>معتدلة</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-secondary">15 km/h</p>
              <p className="text-muted-foreground mt-2">اتجاه: شمالي</p>
            </CardContent>
          </Card>
        </div>

        {/* أزرار تجريبية */}
        <div className="flex flex-wrap gap-4">
          <Button variant="default" size="lg">
            Primary Button
          </Button>
          <Button variant="secondary" size="lg">
            Secondary Button
          </Button>
          <Button variant="outline" size="lg">
            Outline Button
          </Button>
          <Button variant="ghost" size="lg">
            Ghost Button
          </Button>
        </div>

        {/* خلفية Accent */}
        <div className="bg-accent text-accent-foreground p-6 rounded-lg shadow-theme">
          <h3 className="text-xl font-bold mb-2">تنبيه هام! ⚠️</h3>
          <p>درجة الحرارة قد ترتفع بشكل ملحوظ غداً. احرص على شرب الماء!</p>
        </div>
      </div>
    </>
  );
};
export default Test;
