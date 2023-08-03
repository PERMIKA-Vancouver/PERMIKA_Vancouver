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
        let relativeCursorX = cursorPosition.x / window.innerWidth;
        let relativeCursorY = cursorPosition.y / window.innerHeight;

        let relativeImgX = initialLeft / 100;
        let relativeImgY = initialTop / 100;

        // Calculate distance
        let distanceX = relativeImgX - relativeCursorX;
        let distanceY = relativeImgY - relativeCursorY;

        // Calculate the overall distance (hypotenuse)
        let distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

        let top = initialTop - distanceY * distance * 30; // multiply by distance and by 100 to increase the shift
        let left = initialLeft - distanceX * distance * 30;

        // Consider image size and limit the movement
        const imageSizeRelative = 1/5; // Image size relative to viewport size
        top = Math.min(Math.max(top, 0), 100 - imageSizeRelative * 100);
        left = Math.min(Math.max(left, 0), 100 - imageSizeRelative * 100);

        return { top: `${top}%`, left: `${left}%` };
    };



    return (
        <div className="relative h-screen overflow-hidden">
            <div className="absolute inset-0 opacity-20 z-10">
                <img src={Black} alt="background" className="absolute w-1/5 opacity-20" style={calculatePosition(10, 5)} />
                <img src={Black} alt="background" className="absolute w-1/5 opacity-20" style={calculatePosition(8, 70)} />
                <img src={Black} alt="background" className="absolute w-1/5 opacity-20" style={calculatePosition(65, 15)} />
                <img src={Black} alt="background" className="absolute w-1/5 opacity-20" style={calculatePosition(67, 73)} />
                <img src={Black} alt="background" className="absolute w-1/5 opacity-20" style={calculatePosition(2, 40)} />
                <img src={Black} alt="background" className="absolute w-1/5 opacity-20" style={calculatePosition(60, 45)} />
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
