import { useState, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
const ComingSoonPage = () => {
    const { t } = useLanguage();
  const calculateTimeLeft = () => {
    const targetDate:any = new Date("2024-12-31T00:00:00"); // Replace with your target date
    const now:any = new Date();
    const difference =targetDate -now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const renderTimeLeft = () =>
    Object.keys(timeLeft).length === 0 ? (
      <p className="text-black">We're Live Now!</p>
    ) : (
      <div className="flex space-x-4">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="text-center">
            <p className="text-2xl font-semibold">{value}</p>
            <p className="text-sm uppercase">{unit}</p>
          </div>
        ))}
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-900">{t("products.commingSoon.title")}</h1>
      <p className="mt-4 text-lg text-gray-600">
        {t("products.commingSoon.subtitle")}
      </p>
      <div className="mt-6">{renderTimeLeft()}</div>
      <p className="mt-8 text-sm text-gray-500">
        {t('products.commingSoon.subtitle2')}
      </p>
    </div>
  );
};

export default ComingSoonPage;
