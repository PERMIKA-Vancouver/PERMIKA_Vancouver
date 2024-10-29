import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface Data {
  year: string;
  title: string;
  date: string;
  location: string;
  images?: string[];
  description: string;
}

export const Gallery = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [maxHeight, setMaxHeight] = useState('none');

  const payload: Data = {
    year: location.state.year,
    title: location.state.title,
    date: location.state.date,
    location: location.state.location,
    images: location.state.images,
    description: location.state.description,
  };

  const updateMaxHeight = () => {
    const windowWidth = window.innerWidth;
    let height = null;

    // Apply different maxHeight based on screen size
    if (windowWidth >= 1280 && payload.images) {
      height = `${Math.ceil(payload.images?.length / 4) * 400}px`;
    } else if (windowWidth >= 640 && payload.images) {
      height = `${Math.ceil(payload.images?.length / 2) * 400}px`;
    } else {
      // For smaller screens, no maxHeight
      height = 'none';
    }

    setMaxHeight(height);
  };

  useEffect(() => {
    // redirect to events page if no payload title (or no payload at all)
    if (!payload.title) {
      navigate('/events', { replace: true });
    }
  });

  useEffect(() => {
    updateMaxHeight(); // Initial
    window.addEventListener('resize', updateMaxHeight);
    return () => window.removeEventListener('resize', updateMaxHeight);
  });

  const formatDate = (dateString: string | undefined) => {
    if (!dateString) return 'No date available';
    const dateObject = new Date(dateString);

    if (isNaN(dateObject.getTime())) {
      return 'Invalid date'; // Fallback for invalid date formats
    }
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    };
    let formattedDate = new Intl.DateTimeFormat('en-US', options).format(
      dateObject
    );

    const day = dateObject.getDate();
    let suffix = 'th';
    if (day % 10 === 1 && day !== 11) {
      suffix = 'st';
    } else if (day % 10 === 2 && day !== 12) {
      suffix = 'nd';
    } else if (day % 10 === 3 && day !== 13) {
      suffix = 'rd';
    }

    return formattedDate.replace(new RegExp(' ' + day), ` ${day}${suffix}`);
  };

  return (
    <>
      <div className="bg-forest-green pt-navbar pb-[200px]">
        <div className="pt-8 text-white grid grid-cols-8 gap-2 span-10 ">
          <div className="col-start-2 col-span-6">
            <h2 className="text-white">{payload.title} </h2>
          </div>
          <div className="flex col-start-2 justify-between row-start-2 mt-2 col-span-6">
            <div>
              <p>{formatDate(payload.date)}</p>
            </div>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                fill="#ffffff"
                version="1.1"
                id="Capa_1"
                className="w-4 h-4 mr-1"
                viewBox="0 0 395.71 300"
                xmlSpace="preserve"
              >
                <g>
                  <path d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738   c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388   C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191   c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z" />
                </g>
              </svg>
              <p>{payload.location}</p>
            </div>
          </div>
          <div className="col-start-2 row-start-3 col-span-6">
            <div
              style={maxHeight !== 'none' ? { maxHeight } : {}}
              className="flex flex-col content-center flex-wrap overflow-y-auto gap-4"
            >
              {payload.images?.map((src, index) => (
                <div className="w-[344px]">
                  <img
                    key={index}
                    className="w-full h-auto rounded-lg"
                    src={src}
                    alt={payload.title}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
