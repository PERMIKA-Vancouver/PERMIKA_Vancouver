import React from 'react';

type Event = {
    id: number;
    imageUrl: string;
    style: {
        aspectRatio: string;
        left: string;
        top: string;
    };
};

const eventArchiveData: Event[] = [
    { id: 1, imageUrl: "https://permikawebsite.s3.us-west-2.amazonaws.com/assets/events/2019%3A20'/prepair+to+bowl/IMG_0215.webp", style: { aspectRatio: '3 / 2', left: '-5%', top: '25%' } },
    { id: 2, imageUrl: "https://permikawebsite.s3.us-west-2.amazonaws.com/assets/events/2019%3A20'/prepair+to+bowl/IMG_0393.webp", style: { aspectRatio: '3 / 2', left: '29%', top: '13%' }},
    { id: 3, imageUrl: "https://permikawebsite.s3.us-west-2.amazonaws.com/assets/events/2019%3A20'/prepair+to+bowl/IMG_0583.webp", style: { aspectRatio: '3 / 2', left: '65%', top: '19%' } },
    { id: 4, imageUrl: "https://permikawebsite.s3.us-west-2.amazonaws.com/assets/events/2022%3A23'/speda/IMG_0302.webp", style: { aspectRatio: '3 / 2', left: '18%', top: '82%' } },
    { id: 5, imageUrl: "https://permikawebsite.s3.us-west-2.amazonaws.com/assets/events/2022%3A23'/speda/IMG_0392.webp", style: { aspectRatio: '3 / 2', left: '65%', top: '87%' } },
    { id: 6, imageUrl: "https://permikawebsite.s3.us-west-2.amazonaws.com/assets/events/2022%3A23'/estafet/IMG_9480.webp", style: {  aspectRatio: '3 / 2',left: '88%', top: '70%' } },
    { id: 7, imageUrl: "https://permikawebsite.s3.us-west-2.amazonaws.com/assets/events/2022%3A23'/estafet/IMG_9545.webp", style: { aspectRatio: '3 / 2', left: '85%', top: '55%' } },
    { id: 8, imageUrl: "https://permikawebsite.s3.us-west-2.amazonaws.com/assets/events/2022%3A23'/estafet/IMG_9451.webp", style: { aspectRatio: '3 / 2', left: '37%', top: '35%' }},
    { id: 9, imageUrl: "https://permikawebsite.s3.us-west-2.amazonaws.com/assets/events/2019%3A20'/prepair+to+bowl/IMG_0601.webp", style: { aspectRatio: '3 / 2', left: '88%', top: '34%' } },
    { id: 10, imageUrl: "https://permikawebsite.s3.us-west-2.amazonaws.com/assets/events/2019%3A20'/prepair+to+bowl/IMG_0212.webp", style: { aspectRatio: '3 / 2', left: '-5%', top: '62%' } },
    { id: 11, imageUrl: "https://permikawebsite.s3.us-west-2.amazonaws.com/assets/events/2021%3A22'/mabar_offline/IMG_9639.webp", style: { aspectRatio: '3 / 2', left: '40%', top: '65%' } },
];

const OurEventArchive: React.FC = () => {
    return (
        <div className="relative bg-forest-green h-screen text-white">
            <h2 className="text-3xl sm:text-4xl md:text-5xl absolute left-[63%] sm:left-[74%] transform -translate-x-1/2 top-[50%] w-full">Our event archive</h2>
            {eventArchiveData.map((event) => (
                <div
                    key={event.id}
                    className={`w-[27%] sm:w-[21%] md:w-[16%]`}
                    style={{
                        ...event.style,
                        position: 'absolute',
                    }}
                ><img className={"opacity-50"} src={event.imageUrl} alt={`Event ${event.id}`} style={{ width: '100%', height: 'auto' }} /></div>
            ))}
        </div>
    );
};

export default OurEventArchive;
