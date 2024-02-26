import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import Chart, { Chart as ChartType } from 'chart.js/auto';

interface SkillItem {
  name: string;
  value: number;
  category: string;
}

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('coding');
  const chartRef = useRef<HTMLCanvasElement>(null);
  const [chart, setChart] = useState<ChartType | null>(null);

  const skills: SkillItem[] = useMemo(() => [
    { name: "Python", value: 5, category: "coding" },
    { name: "Machine Learning", value: 4, category: "data science" },
    { name: "PHP", value: 6, category: "coding" },
    { name: "HTML / CSS", value: 10, category: "coding" },
    { name: "Flask", value: 5, category: "coding" },
    { name: "Vue", value: 4, category: "coding" },
    { name: "Java", value: 2, category: "coding" },
    { name: "SQL", value: 6, category: "coding" },
    { name: "JavaScript", value: 4, category: "coding" },
    { name: "TypeScript", value: 2, category: "coding" },
    { name: "German", value: 10, category: "language" },
    { name: "English", value: 9, category: "language" },
    { name: "Spanish", value: 6, category: "language" },
    { name: "French", value: 4, category: "language" },
    { name: "Japanese", value: 2, category: "language" },
    { name: "Kiswahili", value: 2, category: "language" },
    { name: "Project Management", value: 7, category: "data science" },
    { name: "Qualitative Data Analysis", value: 8, category: "data science" },
    { name: "Quantitative Data Analysis", value: 5, category: "data science" },
    { name: "Wordpress", value: 9, category: "coding" },
    { name: "Laravel", value: 2, category: "coding" },
    { name: "Next.js", value: 5, category: "coding" }
  ], []);

  // Prepare data based on the active category
  const prepareChartData = useCallback(() => {
    const filteredSkills = skills.filter(skill => skill.category === activeCategory);
    return {
      labels: filteredSkills.map(skill => skill.name),
      datasets: [{
        label: 'Skill Level',
        data: filteredSkills.map(skill => skill.value / 2), // Dividing by 2 to scale to 1-5
        backgroundColor: 'rgba(114, 126, 189, 1)',
        borderColor: 'rgba(114, 126, 189, 1)',
        borderWidth: 1,
        barPercentage: 0.5,
        categoryPercentage: 1,
        barThickness: 35
      }]
    };
  }, [activeCategory, skills]);

   // Initialize chart
   useEffect(() => {
    if (chartRef.current && !chart) {
      const newChart = new Chart(chartRef.current, {
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
  }, [chartRef, chart, prepareChartData]);

  // Update chart on category change
  useEffect(() => {
    if (chart) {
      chart.data = prepareChartData();
      chart.update();
    }
  }, [activeCategory, chart, prepareChartData]);

  return (
    <div>
        <div className="skill-category-toggle text-center mb-2">
            <button onClick={() => setActiveCategory('coding')} className="hover-effect dark:hover:text-[#d9dff3] text-xl">coding</button>
            <button onClick={() => setActiveCategory('data science')} className="hover-effect dark:hover:text-[#d9dff3] text-xl">data science</button>
            <button onClick={() => setActiveCategory('language')} className="hover-effect dark:hover:text-[#d9dff3] text-xl">languages</button>
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
    </div>
  );
};

export default Skills;
