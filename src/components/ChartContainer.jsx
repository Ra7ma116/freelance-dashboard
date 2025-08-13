import { useEffect, useRef, useState } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const ChartContainer = ({ title, type, data }) => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (chartRef.current) {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }

            const ctx = chartRef.current.getContext('2d');
            chartInstance.current = new Chart(ctx, {
                type: type,
                data: data,
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: windowSize.width < 768 ? 'bottom' : 'top',
                        },
                    },
                },
            });
        }

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [type, data, windowSize.width]);

    return (
        <div className="chart-wrapper">
            <h3>{title}</h3>
            <div className="chart-container">
                <canvas
                    ref={chartRef}
                    style={{
                        width: '100%',
                        height: windowSize.width < 768 ? '200px' : '300px'
                    }}
                ></canvas>
            </div>
        </div>
    );
};

export default ChartContainer;