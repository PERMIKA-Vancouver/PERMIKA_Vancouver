import React, {useEffect, useState} from 'react';
import Black from '../../assets/black.png';

export const Home = () => {
    // Cursor Position State
    const [cursorPosition, setCursorPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

    // Mouse Move Handler
    const mouseMoveHandler = (e: MouseEvent) => {
        setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    // Effect to Add and Remove Event Listener
    useEffect(() => {
        document.addEventListener('mousemove', mouseMoveHandler);

        // Cleanup
        return () => {
            document.removeEventListener('mousemove', mouseMoveHandler);
        };
    }, []);

    // Position Calculation
    const calculatePosition = (initialTop: number, initialLeft: number) => {
        let top = initialTop + (cursorPosition.y / window.innerHeight - 0.5) * 20;
        let left = initialLeft + (cursorPosition.x / window.innerWidth - 0.5) * 20;

        // Limit the movement
        top = Math.min(Math.max(top, 0), 100);
        left = Math.min(Math.max(left, 0), 100);

        return { top: `${top}%`, left: `${left}%` };
    };

    return (
        <div className="relative h-screen">
            <div className="absolute inset-0 opacity-20 z-10">
                <img src={Black} alt="background" className="absolute w-1/5 opacity-20" style={calculatePosition(10, 5)} />
                <img src={Black} alt="background" className="absolute w-1/5 opacity-20" style={calculatePosition(8, 90)} />
                <img src={Black} alt="background" className="absolute w-1/5 opacity-20" style={calculatePosition(95, 15)} />
                <img src={Black} alt="background" className="absolute w-1/5 opacity-20" style={calculatePosition(97, 93)} />
                <img src={Black} alt="background" className="absolute w-1/5 opacity-20" style={calculatePosition(2, 40)} />
                <img src={Black} alt="background" className="absolute w-1/5 opacity-20" style={calculatePosition(90, 65)} />
            </div>

            <div className="App z-20 relative">
                <header className="App-header">
                    <h1 className="text-6xl">This is <span className="bg-emerald-950 text-white">PERMIKA Vancouver</span></h1>
                    <p className="w-7/12 text-lg text-left text-gray-500 pt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio excepturi laboriosam minima? Assumenda eos explicabo fugit nam non sint suscipit? Aspernatur eaque ex facere, maxime mollitia nobis non vitae voluptates.</p>
                </header>
            </div>
        </div>
    );
};
