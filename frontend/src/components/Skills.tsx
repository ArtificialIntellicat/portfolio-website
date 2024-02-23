import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('coding');
  const chartRef = useRef(null);
  const [chart, setChart] = useState(null);

  // Skills with value
  const skills = [
    { name: "Python", value: 5, category: "coding" },
    { name: "Machine Learning", value: 4, category: "data science" },
    { name: "PHP", value: 6, category: "coding" },
    { name: "HTML / CSS", value: 10, category: "coding" },
    { name: "Flask", value: 5, category: "coding" },
    { name: "Vue", value: 4, category: "coding" },
    { name: "Java", value: 2, category: "coding" },
    { name: "SQL", value: 6, category: "coding" },
    { name: "JavaScript", value: 4, category: "coding" },
    { name: "German", value: 10, category: "language" },
    { name: "English", value: 9, category: "language" },
    { name: "Spanish", value: 6, category: "language" },
    { name: "French", value: 4, category: "language" },
    { name: "Japanese", value: 2, category: "language" },
    { name: "Project Management", value: 7, category: "data science" },
    { name: "Qualitative Data Analysis", value: 8, category: "data science" },
    { name: "Quantitative Data Analysis", value: 5, category: "data science" },
    { name: "Intercultural Communication", value: 8, category: "language" },
    { name: "Wordpress", value: 9, category: "coding" },
    { name: "Laravel", value: 2, category: "coding" },
    { name: "Next.js", value: 5, category: "coding" }
  ];

  // Prepare data based on the active category
  const prepareChartData = () => {
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
  };

   // Initialize chart
   useEffect(() => {
    if (chartRef.current && !chart) {
      const newChart = new Chart(chartRef.current, {
        type: 'bar',
        data: prepareChartData(),
        options: {
          indexAxis: 'x', // Correct axis
          scales: {
            y: {
              beginAtZero: true,
              max: 5,
              ticks: {
                stepSize: 1,
                font: {
                    weight: 'bold',
                    size: 14,
                    family: "'Raleway', sans-serif",
                    color: '#374075'
                  },
                callback: function(value) {
                  if (value % 1 === 0) {
                    return value;
                  }
                }
              },
              grid: {
                display: true,
                drawBorder: false,
                drawOnChartArea: true,
                drawTicks: false,
                lineWidth: 1
              }
            },
            x: {
              ticks: {
                maxRotation: 45,
                minRotation: 45,
                font: {
                    weight: 'bold',
                    size: 14,
                    family: "'Raleway', sans-serif",
                    color: '#374075'
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
          maintainAspectRatio: false
        }
      });

      setChart(newChart);
    }
  }, [chartRef, chart]);

  // Update chart on category change
  useEffect(() => {
    if (chart) {
      chart.data = prepareChartData();
      chart.update();
    }
  }, [activeCategory]);

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
