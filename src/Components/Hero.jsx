import React, { useEffect, useState } from 'react';
import '../Styles/Hero.css';

export default function Hero() {
const gradientStops = [
    'hsla(60, 100%, 75%, 1)',   // Bright Lemon Yellow
    'hsla(58, 100%, 78%, 1)',   // Light Lemon Yellow
    'hsla(56, 100%, 80%, 1)',   // Soft Lemon Yellow
    'hsla(54, 100%, 82%, 1)',   // Light Pastel Yellow
    'hsla(52, 100%, 84%, 1)',   // Pale Butter Yellow
    'hsla(50, 100%, 85%, 1)',   // Soft Butter Yellow
    'hsla(48, 100%, 87%, 1)',   // Soft Pale Yellow
    'hsla(45, 100%, 90%, 1)',   // Soft Lemon
    'hsla(43, 100%, 90%, 1)',   // Light Primrose Yellow
    'hsla(40, 100%, 90%, 1)',   // Soft Primrose Cream
    'hsla(38, 90%, 90%, 1)',    // Soft Lemon Cream
    'hsla(36, 90%, 90%, 1)',    // Light Lemon Cream
    'hsla(34, 90%, 90%, 1)',    // Soft Cream Yellow
    'hsla(32, 90%, 85%, 1)',    // Pastel Yellow Green
    'hsla(30, 90%, 85%, 1)',    // Light Lemon Green
    'hsla(120, 90%, 75%, 1)',   // Pastel Green
    'hsla(110, 90%, 75%, 1)',   // Light Spring Green
    'hsla(100, 90%, 75%, 1)',   // Soft Sage Green
    'hsla(90, 80%, 75%, 1)',    // Light Fern Green
    'hsla(80, 80%, 75%, 1)',    // Light Olive Green
    'hsla(70, 80%, 75%, 1)',    // Soft Grass Green
    'hsla(65, 80%, 75%, 1)',    // Light Mint Green
    'hsla(60, 80%, 75%, 1)',    // Light Mint Tea
    'hsla(55, 80%, 75%, 1)',    // Very Light Green
    'hsla(50, 80%, 80%, 1)',    // Light Pastel Mint
    'hsla(45, 80%, 80%, 1)',    // Soft Mint Cream
    'hsla(40, 80%, 80%, 1)',    // Light Lime Green
    'hsla(35, 90%, 85%, 1)',    // Soft Lime Yellow
    'hsla(30, 90%, 90%, 1)',    // Light Lime Yellow
    'hsla(25, 90%, 90%, 1)',    // Light Olive Yellow
    'hsla(20, 90%, 90%, 1)',    // Light Melon Green
    'hsla(15, 90%, 90%, 1)',    // Very Light Pear Green
    'hsla(10, 100%, 90%, 1)',   // Soft Lemon Lime
    'hsla(5, 60%, 90%, 1)',     // Very Light Creamy Yellow
    'hsla(0, 50%, 95%, 1)',     // Soft Lemon
    'hsla(20, 40%, 85%, 1)',    // Light Meadow Green
    'hsla(150, 50%, 85%, 1)',   // Light Mint Green
    'hsla(100, 50%, 90%, 1)',   // Soft Mint Yellow
    'hsla(75, 50%, 85%, 1)',    // Light Yellowish Green
    'hsla(85, 60%, 85%, 1)',    // Light Pastel Green
    'hsla(45, 50%, 85%, 1)',    // Light Olive Green
    'hsla(40, 70%, 85%, 1)',    // Soft Honeydew
    'hsla(60, 40%, 85%, 1)',    // Light Grass Green
    'hsla(55, 30%, 85%, 1)',    // Light Yellow Green
];

    
    const [currentGradient, setCurrentGradient] = useState(`linear-gradient(to bottom, ${gradientStops.join(', ')})`);

    useEffect(() => {
        const cycleGradient = setInterval(() => {
            const firstColor = gradientStops.shift(); 
            gradientStops.push(firstColor);  
            setCurrentGradient(`linear-gradient(to top right, ${gradientStops.join(', ')})`);
        }, 200);

        return () => clearInterval(cycleGradient); 
    }, []);

    return (
        <div className="heroWrap">
            <div className="heroBG" style={{ backgroundImage: currentGradient }}></div>
            <div className='Hero'>
                <div className="text">
                    <h1>Hi. I'm Rahul.</h1>
                    <h1>Software Development.</h1>
                    <span>I enjoy designing, while I'm good at code.</span>
                </div>
            </div>
        </div>
    );
}
