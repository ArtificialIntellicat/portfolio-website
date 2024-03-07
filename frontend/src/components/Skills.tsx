import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import Chart from 'chart.js/auto';
import { useTranslation } from 'next-i18next';

interface SkillItem {
  name: string;
  value: number;
  category: string;
}

const Skills: React.FC = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<string>('coding');
  const chartRef = useRef<HTMLCanvasElement>(null);
  const [chart, setChart] = useState<Chart | null>(null);

  // Fetching skills data from cv.json based on active category
  const skills = useMemo(() => t(`cv:skills.${activeCategory}`, { returnObjects: true }), [t, activeCategory]);

  // Prepare chart data
  const prepareChartData = useCallback(() => {
    if (!Array.isArray(skills)) return { labels: [], datasets: [] };
    return {
      labels: skills.map(skill => skill.name),
      datasets: [{
        label: 'Skill Level',
        data: skills.map(skill => skill.value / 2),
        backgroundColor: 'rgba(114, 126, 189, 1)',
        borderColor: 'rgba(114, 126, 189, 1)',
        borderWidth: 1,
        barPercentage: 0.5,
        categoryPercentage: 1,
        barThickness: 35
      }]
    };
  }, [skills]);

  // Initialize or update chart
  useEffect(() => {
    const ctx = chartRef.current?.getContext('2d');
    if (!ctx) return;

    // If chart already exists, just update its data
    if (chart) {
      chart.data = prepareChartData();
      chart.update();
    } else {
      // Create a new chart instance
      const newChart = new Chart(ctx, {
        type: 'bar',
        data: prepareChartData(),
        options: {
          indexAxis: 'x',
          scales: {
            y: {
              beginAtZero: true,
              max: 5,
              ticks: {
                color: "#9fa6d2",
                stepSize: 1,
                font: {
                    weight: 'bold',
                    size: 14,
                  },
                  callback: function(value) {
                    const numericValue = Number(value);
                    if (numericValue % 1 === 0) {
                      return numericValue;
                    }
                  }
              },
              grid: {
                display: true,
                drawOnChartArea: true,
                drawTicks: false,
                lineWidth: 1
              }
            },
            x: {
              ticks: {
                color: "#9fa6d2",
                maxRotation: 45,
                minRotation: 45,
                font: {
                    weight: 'bold',
                    size: 14,
                  }
              },
              grid: {
                display: false
              }
            }
          },
          plugins: {
            legend: {
              display: false
            }
          },
          maintainAspectRatio: false, 
        }
      });

    setChart(newChart);
  }
}, [prepareChartData, chart]);

  // Update chart on category change
  useEffect(() => {
    if (chart && chartRef.current) {
      chart.data = prepareChartData();
      chart.update();
    }
  }, [prepareChartData, chartRef]);

  return (
    <div>
        <div className="skill-category-toggle text-center mb-2">
            <button onClick={() => setActiveCategory('coding')} className="hover-effect dark:hover:text-[#d9dff3] text-xl">coding</button>
            <button onClick={() => setActiveCategory('data science')} className="hover-effect dark:hover:text-[#d9dff3] text-xl">data science</button>
            <button onClick={() => setActiveCategory('language')} className="hover-effect dark:hover:text-[#d9dff3] text-xl">{t('common:lang')}</button>
        </div>
        <div className="bar-chart" style={{ height: '400px' }}>
            <canvas ref={chartRef} />
        </div>
        <style jsx global>{`
            .skill-category-toggle button {
                background: none;
                border: none;
                font-weight: bold;
                color: #8FA1DB;
                margin: 0 10px 20px 10px;
                cursor: pointer;
            }
        `}</style>
    </div>  );
};

export default Skills;
