import { useState } from "react";

const program = {
  Pazartesi: {
    title: "Göğüs Günü",
    exercises: [
      "Incline Bench Press (Eğik Sehpada Üst Göğüs Halter Basma)",
      "Dumbbell Bench Press (Düz Sehpada Dambıl ile Göğüs Basma)",
      "Chest Press (Makinede Göğüs Pres)",
      "Incline Dumbbell Fly (Eğik Sehpada Dambıl ile Açış)",
      "Pull Overs (Göğüs Kafesi Esnetme)",
      "Cable Cross Over (Makinede Göğüs Sıkıştırma)"
    ]
  },
  Salı: {
    title: "Biceps Günü",
    exercises: [
      "Barbell Curl (Ayakta Bar ile Pazu Curl)",
      "Incline Dumbbell Curl (Eğik Sehpada Dambıl ile Pazu Curl)",
      "Hammer Curl (Çekiç Stili Dambıl Curl)",
      "Scott Curl (Scott Sehpasında Dambıl ile Curl)",
      "Culp Machine Curl (Biceps Makinesi Curl)"
    ]
  },
  Çarşamba: {
    title: "Sırt Günü",
    exercises: [
      "Barbell Rowing (Ayakta Öne Eğilerek Bar ile Sırt Çekiş)",
      "One Arm Dumbbell (Tek Kol Dambıl ile Sırt Çekiş)",
      "T Bar Rowing (T-Bar Aleti ile Sırt Çekiş)",
      "Front Lat Pulldown (Göğüse Çekiş)",
      "Rowing Machine (Kürek Makinesi Sırt Çalışması)"
    ]
  },
  Perşembe: {
    title: "Triceps Günü",
    exercises: [
      "Seated Triceps Dumbbell Extension (Oturarak Dambıl ile Arka Kol Açış)",
      "Close Grip Bench (Yatarak Barı Göğüse İndirme)",
      "Reverse Grip Pushdown (Ters Tutuş Kablo İtme)",
      "Push Down (Düz Tutarak Aşağı İtiş)",
      "Rope Push Down (Halat ile Arka Kol Kablo İtme)"
    ]
  },
  Cuma: {
    title: "Omuz Günü",
    exercises: [
      "Dumbbell Press (Dambıl ile Omuz Pres)",
      "Military Press (Düz Bar ile Omuz Pres)",
      "Side Lateral Rise (Yana Dambıl Açış - Orta Omuz)",
      "Front Dumbbell Raise (Öne Dambıl Kaldırış - Ön Omuz)",
      "Rear Delt Peck Deck (Makinede Arka Omuz)",
      "Barbell Shrug (Bar ile Omuz Silkme - Trapez)"
    ]
  },
  Cumartesi: {
    title: "Bacak Günü",
    exercises: [
      "Hack Squat (Hack Squat Aleti ile Bacak)",
      "Leg Press (Makinede Bacak Pres)",
      "Leg Extension (Makinede Ön Bacak Açış)",
      "Leg Curl (Makinede Arka Bacak Curl)",
      "Barbell Lunge (Bar ile İleri Adım Bacak)",
      "Multi Hip Machine (Çok Yönlü Kalça Makinesi)"
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
      <div className="flex gap-2 mb-4 flex-wrap">
        {Object.keys(program).map(day => (
          <button
            key={day}
            onClick={() => setChecked(prev => ({ ...prev, activeTab: day }))}
            className={`px-4 py-2 rounded ${checked.activeTab === day ? 'bg-black text-white' : 'bg-gray-200'}`}
          >
            {day}
          </button>
        ))}
      </div>

      {Object.entries(program).map(([day, data]) => (
        checked.activeTab === day && (
          <div key={day} className="space-y-4">
            <h2 className="text-xl font-bold mb-2">{data.title}</h2>
            {data.exercises.map((exercise, idx) => {
              const key = `${day}-${idx}`;
              return (
                <div key={key} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={key}
                    checked={checked[key] || false}
                    onChange={() => toggleCheck(day, idx)}
                  />
                  <label htmlFor={key}>{exercise}</label>
                </div>
              );
            })}
          </div>
        )
      ))}
    </div>
  );
}
