"use client"

import { useEffect } from 'react';

const MedflexWidget: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://booking.medflex.ru/components/round/round_widget_button.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      id="medflexRoundWidgetData"
      data-src="https://booking.medflex.ru/?user=3f95a31a4856851683a3ebb7d764ff61&isRoundWidget=true"
    >
    </div>
  );
};

export default MedflexWidget;