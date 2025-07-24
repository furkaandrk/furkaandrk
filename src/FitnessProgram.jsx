
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const program = {
  Pazartesi: {
    title: "Göğüs Günü",
    exercises: [
      "Incline Bench Press (Eğik sehpada üst göğüs halter basma)",
      "Dumbbell Bench Press (Düz sehpada dambıl ile göğüs basma)",
      "Chest Press (Makinede göğüs pres)",
      "Incline Dumbbell Fly (Eğik sehpada dambıl ile göğüs açış)",
      "Pull Overs (Göğüs kafesi esnetme)",
      "Cable Cross Over (Alt seviyeden kablo ile göğüs sıkıştırma)"
    ]
  },
  Salı: {
    title: "Biceps Günü",
    exercises: [
      "Barbell Curl (Ayakta düz bar ile pazı curl)",
      "Incline Dumbbell Curl (Eğik sehpada dambıl ile pazı curl)",
      "Hammer Curl (Çekiç stili dambıl ile curl)",
      "Scott Curl (Scott sehpasında bar ile pazı curl)",
      "Culp Machine Curl (Biceps makinesinde curl)"
    ]
  },
  Çarşamba: {
    title: "Sırt Günü",
    exercises: [
      "Barbell Rowing (Ayakta öne eğilerek bar ile sırt çekiş)",
      "One Arm Dumbbell (Tek kol dambıl ile sırt çekiş)",
      "T Bar Rowing (T-bar ile sırt çekiş)",
      "Front Lat Pulldown (Önden bar ile enseye çekiş)",
      "Rowing Machine (Kürek makinesi sırt egzersizi)"
    ]
  },
  Perşembe: {
    title: "Triceps Günü",
    exercises: [
      "Seated Triceps Dumbbell Extension (Oturarak dambıl ile arka kol açış)",
      "Close Grip Bench (Yatarak dar tutuş bench press)",
      "Reverse Grip Pushdown (Ters tutuş kablo ile aşağı itiş)",
      "Push Down (Düz bar ile kablo aşağı itiş)",
      "Rope Push Down (Halat ile kablo aşağı itiş)"
    ]
  },
  Cuma: {
    title: "Omuz Günü",
    exercises: [
      "Dumbbell Press (Dambıl ile omuz press)",
      "Military Press (Bar ile omuz press)",
      "Side Lateral Rise (Yana dambıl açış)",
      "Front Dumbbell Raise (Öne dambıl kaldırış)",
      "Rear Delt Peck Deck (Makinede arka omuz açış)",
      "Barbell Shrug (Bar ile trapez silkme)"
    ]
  },
  Cumartesi: {
    title: "Bacak Günü",
    exercises: [
      "Hack Squat (Hack squat aleti ile çömelme)",
      "Leg Press (Makinede bacak pres)",
      "Leg Extension (Makinede ön bacak açış)",
      "Leg Curl (Makinede arka bacak curl)",
      "Barbell Lunge (Bar ile ileri adım)",
      "Multi Hip Machine (Çok yönlü kalça makinesi)"
    ]
  }
};

export default function FitnessProgram() {
  const [checked, setChecked] = useState({});

  const toggleCheck = (day, index) => {
    const key = `${day}-${index}`;
    setChecked(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="p-4">
      <Tabs defaultValue="Pazartesi" className="w-full">
        <TabsList className="flex flex-wrap gap-2 mb-4">
          {Object.keys(program).map(day => (
            <TabsTrigger key={day} value={day}>{day}</TabsTrigger>
          ))}
        </TabsList>

        {Object.entries(program).map(([day, data]) => (
          <TabsContent key={day} value={day}>
            <Card>
              <CardContent className="p-4 space-y-2">
                <h2 className="text-xl font-bold mb-2">{data.title}</h2>
                {data.exercises.map((exercise, idx) => {
                  const key = `${day}-${idx}`;
                  return (
                    <div key={key} className="flex items-center space-x-2">
                      <Checkbox id={key} checked={checked[key]} onCheckedChange={() => toggleCheck(day, idx)} />
                      <label htmlFor={key} className="text-sm">{exercise}</label>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
