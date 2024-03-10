import React from 'react';

type Event = {
    id: number;
    type: 'large' | 'small';
    style: React.CSSProperties;
};

const eventArchiveData: Event[] = [
    { id: 1, type: 'large', style: { width: '18.75rem', height: '18rem', left: '5%', top: '25%' } },
    { id: 2, type: 'small', style: { width: '15rem', height: '15rem', left: '37%', top: '33%' } },
    { id: 3, type: 'small', style: { width: '30%', height: '20%', left: '75%', top: '30%' } },
    { id: 4, type: 'large', style: { width: '45%', height: '20%', left: '5%', top: '65%' } },
    { id: 5, type: 'large', style: { width: '45%', height: '20%', left: '55%', top: '85%' } },
    { id: 6, type: 'small', style: { width: '20%', height: '20%', left: '40%', top: '90%' } }
];

const OurEventArchive: React.FC = () => {
    return (
        <div className="relative bg-forest-green h-screen text-white">
            <h2 className="text-5xl absolute left-1/2 transform -translate-x-1/2 top-[60%]">Our event archive</h2>
            {eventArchiveData.map((event) => (
                <div
                    key={event.id}
                    style={{
                        ...event.style,
                        position: 'absolute',
                        backgroundColor: 'grey' // placeholder for images
                    }}
                ></div>
            ))}
        </div>
    );
};

export default OurEventArchive;
