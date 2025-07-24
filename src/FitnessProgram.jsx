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
      "Scott Dumbell Curl (Scott Sehpasında Dumbell ile Pazu Curl)",
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
    <div className="min-h-screen p-4 bg-gradient-to-b from-black via-zinc-800 to-black text-white font-sans">
      <div className="text-center text-2xl font-bold mb-6">Dış etkenlerin sonuçları değiştirmesine izin verme.</div>
      <div className="bg-white/5 rounded-2xl p-4 shadow-lg max-w-4xl mx-auto">
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {Object.keys(program).map(day => (
            <button
              key={day}
              className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all"
              onClick={() => document.getElementById(day)?.scrollIntoView({ behavior: 'smooth' })}
            >
              {day}
            </button>
          ))}
        </div>
        {Object.entries(program).map(([day, data]) => (
          <div key={day} id={day} className="mb-10">
            <h2 className="text-xl font-semibold mb-3 border-b border-white/20 pb-1">{day} - {data.title}</h2>
            <ul className="space-y-2">
              {data.exercises.map((exercise, idx) => {
                const key = `${day}-${idx}`;
                return (
                  <li key={key} className="flex items-center gap-3">
                    <input
                      id={key}
                      type="checkbox"
                      checked={checked[key]}
                      onChange={() => toggleCheck(day, idx)}
                      className="accent-green-500 w-4 h-4"
                    />
                    <label htmlFor={key} className="text-sm">{exercise}</label>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
