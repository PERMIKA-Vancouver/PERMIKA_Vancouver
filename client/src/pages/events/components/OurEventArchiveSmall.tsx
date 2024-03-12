import React from 'react';

type Event = {
    id: number;
    type: 'large' | 'small';
    style: {
        width: string;
        aspectRatio: string;
        left: string;
        top: string;
    };
};

const eventArchiveData: Event[] = [
    { id: 1, type: 'large', style: { width: '22%', aspectRatio: '2 / 1', left: '5%', top: '25%' } },
    { id: 2, type: 'small', style: { width: '10%', aspectRatio: '1 / 1', left: '37%', top: '35%' }},
    { id: 3, type: 'small', style: { width: '20%', aspectRatio: '3 / 2', left: '75%', top: '26%' } },
    { id: 4, type: 'large', style: { width: '18%', aspectRatio: '5 / 3', left: '8%', top: '67%' } },
    { id: 5, type: 'large', style: { width: '16%', aspectRatio: '3 / 2', left: '45%', top: '72%' } },
    { id: 6, type: 'small', style: { width: '10%',  aspectRatio: '5 / 7',left: '88%', top: '70%' } }
];

const OurEventArchive: React.FC = () => {
    return (
        <div className="relative bg-forest-green h-screen text-white">
            <h2 className="text-xl md:text-3xl lg:text-5xl absolute left-1/2 transform -translate-x-1/2 top-[60%]">Our event archive</h2>
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
