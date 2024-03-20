import React from 'react';

type Event = {
    id: number;
    imageUrl: string;
    title: string;
    year: string;
    style: {
        width: string;
        aspectRatio: string;
        left: string;
        top: string;
    };
};

const eventArchiveData: Event[] = [
    { id: 1, title: "prepair to bowl", year:"2019", imageUrl: "https://permikawebsite.s3.us-west-2.amazonaws.com/assets/events/2019%3A20'/prepair+to+bowl/IMG_0215.webp", style: { width: '20%', aspectRatio: '2 / 1', left: '5%', top: '10%' } },
    { id: 2, title: "welcome home", year:"2019", imageUrl: "https://permikawebsite.s3.us-west-2.amazonaws.com/assets/events/2019%3A20'/welcome+home/21C26216-A203-4902-A421-8CF1DD2A87F9.webp", style: { width: '10%', aspectRatio: '1 / 1', left: '37%', top: '22%' }},
    { id: 3, title: "prepair to bowl", year:"2019", imageUrl: "https://permikawebsite.s3.us-west-2.amazonaws.com/assets/events/2019%3A20'/prepair+to+bowl/IMG_0212.webp", style: { width: '20%', aspectRatio: '3 / 2', left: '75%', top: '10%' } },
    { id: 4, title: "estafet", year:"2019", imageUrl: "https://permikawebsite.s3.us-west-2.amazonaws.com/assets/events/2022%3A23'/estafet/IMG_9451.webp", style: { width: '18%', aspectRatio: '5 / 3', left: '8%', top: '70%' } },
    { id: 5, title: "speda", year:"2019", imageUrl: "https://permikawebsite.s3.us-west-2.amazonaws.com/assets/events/2022%3A23'/speda/IMG_0392.webp", style: { width: '16%', aspectRatio: '3 / 2', left: '57%', top: '65%' } },
    { id: 6, title: "speda", year:"2019", imageUrl: "https://permikawebsite.s3.us-west-2.amazonaws.com/assets/events/2022%3A23'/speda/IMG_0282.webp", style: { width: '10%',  aspectRatio: '5 / 7',left: '88%', top: '65%' } }
];

const OurEventArchive: React.FC = () => {
    return (
        <div className="relative bg-forest-green h-screen text-white">
            <h2 className="text-6xl w-full absolute left-[85%] transform -translate-x-1/2 top-[50%]">Our event archive</h2>
            {eventArchiveData.map((event) => (
                <div
                    key={event.id}
                    style={{
                        ...event.style,
                        position: 'absolute',
                    }}
                    className={`group transition-transform duration-300 ease-in-out transform hover:scale-105`}
                >
                    <img className="opacity-50 group-hover:opacity-100" src={event.imageUrl} alt={`Event ${event.id}`} style={{ width: '100%', height: 'auto' }} />
                    <div className="flex justify-between text-grey-body pt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                        <p className="text-sm">
                            {event.year}
                        </p>
                        <p className="text-sm">{event.title}</p>
                    </div>
                </div>
            ))}

        </div>
    );
};

export default OurEventArchive;
