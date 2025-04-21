import {PastEvent} from "../types/types";
// Ordered from most recent to least recent
const PAST_EVENTS: PastEvent[] = [
  {
    year: "2023/24'",
    title: "Layar Tancap",
    date: "2023-10-21",
    location: "Consulate General of Indonesia",
    description:
      "On the halloween of 2023, we watched the Indonesian horror film 'Qorin' in a unique tradition. We sat on the floor, used a projector, and enjoyed free Indomie noodles. It was a spine-tingling night with a twist of Indonesian charm",
  },
  {
    year: "2023/24'",
    title: "HALU (Welcoming Party)",
    date: "2023-09-16",
    location: "Consulate General of Indonesia",
    description:
      "Each year, we host our annual Welcoming Party for new Indonesian students in Canada. It's a fantastic opportunity for newcomers to learn, connect, and have fun. We provide valuable information, play games, and foster friendships – making sure everyone feels at home from the start!",
  },
  {
    year: "2023/24'",
    title: "PETASAN (Pesta Rakyat 17an)",
    date: "2023-08-19",
    location: "Burnaby Central Park",
    description: "We celebrated our annual Independence Day, marking the 78th anniversary of Indonesia's independence in grand style! This year was particularly special as we collaborated with PERMIKA Nasional and moved our festivities to the great outdoors, setting up in the heart of Burnaby Central Park. The event was a delightful blend of cherished traditional games and an exciting new addition: blind volleyball (voli terpal)." ,
  },
  {
    year: "2022/23'",
    title: "SPEDA - Speed Dating Permika",
    date: "2023-02-22",
    location: "KJRI Vancouver",
    description:
      "SPEDA is our second iteration of our speed dating event, this time with even more participants and even more matches!",
    images:["https://permikawebsite.s3.us-west-2.amazonaws.com/assets/events/2022:23'/speda/IMG_0282.webp", "https://permikawebsite.s3.us-west-2.amazonaws.com/assets/events/2022:23'/speda/IMG_0302.webp", "https://permikawebsite.s3.us-west-2.amazonaws.com/assets/events/2022:23'/speda/IMG_0306.webp", "https://permikawebsite.s3.us-west-2.amazonaws.com/assets/events/2022:23'/speda/IMG_0392.webp", "https://permikawebsite.s3.us-west-2.amazonaws.com/assets/events/2022:23'/speda/IMG_0397.webp", "https://permikawebsite.s3.us-west-2.amazonaws.com/assets/events/2022:23'/speda/IMG_0403.webp"]
  },
  {
    year: "2022/23'",
    title: "RUMAH HANTU",
    date: "2022-11-04",
    location: "UBC AMS Nest, Room 2314",
    description:
        "On a crisp November day, a 👻spooktacular Halloween👻 adventure unfolded as attendees gathered to brave the haunted mysteries of Rumah Hantu. Hosted in the heart of UBC, this eerie yet thrilling event drew a crowd eager for frights, fun, and the chance to save a friend from ghostly clutches. ",
  },
  {
    year: "2022/23'",
    title: "HALU - Welcoming Party",
    date: "2022-09-11",
    location: "KJRI Vancouver",
    description:
        "PERMIKA warmly extended an invitation to all first-year students, announcing the return of HALU, a Welcoming Party crafted especially for newcomers. This event was a golden opportunity for first years to seek answers to their burning questions, forge connections with peers, and start their journey in Vancouver on a high note. ",
  },
  {
    year: "2022/23'",
    title: "ES TAFET 77",
    date: "2022-08-27",
    location: "KJRI Vancouver",
    description:
        "As the sun shone brightly, marking a day of celebration, the Consulate General of the Republic of Indonesia became a hub of joy for the 77th Independence Day celebration, hosted by PERMIKA. This third \"Merdeka bersama Permika\" event, held on a vibrant Saturday in August, invited everyone to revel in the spirit of freedom with an array of fun games and delectable dishes. The community gathered from 2 to 5 PM, basking in the warmth of companionship and the rich flavors of Indonesian cuisine.",
    images:["https://permikawebsite.s3.us-west-2.amazonaws.com/assets/events/2022:23'/estafet/DSCF1262.webp", "https://permikawebsite.s3.us-west-2.amazonaws.com/assets/events/2022:23'/estafet/IMG_9451.webp", "https://permikawebsite.s3.us-west-2.amazonaws.com/assets/events/2022:23'/estafet/IMG_9480.webp", "https://permikawebsite.s3.us-west-2.amazonaws.com/assets/events/2022:23'/estafet/IMG_9482.webp", "https://permikawebsite.s3.us-west-2.amazonaws.com/assets/events/2022:23'/estafet/IMG_9509.webp", "https://permikawebsite.s3.us-west-2.amazonaws.com/assets/events/2022:23'/estafet/IMG_9545.webp"]
  },
  {
    year: "2021/22'",
    title: "Speed Dating",
    date: "2022-04-16",
    location: "KJRI Vancouver",
    description:
        "On April 16th, 2022, love and friendship were in the air at the Consulate General of Indonesia in Vancouver, where a special Speed Dating event unfolded from 2 to 4 pm. With the aim of sparking connections, whether for those single and searching or simply keen on making new friends, this gathering offered a lively platform to meet and mingle. Participants had the chance to win a $50 The Keg gift card, adding an extra layer of excitement to the mix. Open to everyone, regardless of relationship status, the event welcomed attendees without an entrance fee, though slots were limited to ensure meaningful interactions. This Speed Dating event wasn't just about finding love; it was about community, discovery, and the joy of new beginnings.",
  },
  {
    year: "2021/22'",
    title: "MABAR 2021",
    date: "2021-11-20",
    location: "KJRI Vancouver",
    description:
        "Our third MABAR event, MABAR 2021, hosted by PERMIKA Vancouver and Toronto on November 20-21, turned the spotlight on gamers ready for battle in Mobile Legends, PUBG, and Valorant. This event united competitors in a thrilling quest for glory and spectacular prizes, with team registrations facilitated through PERMIKA's channels. A dedicated discord offered solos a chance to join forces, while also welcoming voices for commentary, enriching the experience. MABAR 2021 was not just a competition but a celebration of gaming talent and teamwork, marking another successful chapter in its legacy.",
    images:
    ["https://permikawebsite.s3.us-west-2.amazonaws.com/assets/events/2021%3A22'/mabar_offline/IMG_9639.webp", "https://permikawebsite.s3.us-west-2.amazonaws.com/assets/events/2021:22'/mabar_offline/IMG_9650.webp"]
  },
  {
    year: "2021/22'",
    title: "Merdeka Bersama PERMIKA",
    date: "2021-08-29",
    location: "KJRI Vancouver",
    description:
        "Our Annual Independence day celebration! We had Indonesian food vendors and played traditional games!",
  },
  {
    year: "2020/21'",
    title: "MABAR LAGI",
    date: "2021-02-19",
    location: "Online",
    description:
        "MaBar LAGI - Main Bareng Permika x ISAUW\" made an exciting return, bringing together the gaming communities of Vancouver and Seattle from February 19 - 21, 2021. This collaboration between PERMIKA and ISAUW invited gamers to compete in popular online games across a North American server, fostering cross-city camaraderie. The event offered a platform for both team and solo players to connect, compete, and showcase their skills in a friendly yet competitive atmosphere. Registration and team formation were streamlined through a shared online platform, ensuring a seamless start to the gaming action. Highlighting games like DOTA2, Mobile Legends (ML), and PUBG, the event promised a dynamic and engaging weekend for participants, with specific sessions dedicated to each game. This gathering was not just about gaming; it was a celebration of community, teamwork, and the spirit of competition",
  },
  {
    year: "2020/21'",
    title: "MABAR PERMIKA 2020",
    date: "2020-06-19",
    location: "Online",
    description:
        "From the 19th to the 21st, PERMIKA hosted \"MaBar – Main Bareng Permika!\", an online gaming event for a noble cause. Participants joined favorite online games by contributing at least $5, with $2.5 allocated to prizes and the remainder donated to support COVID-19 organizations in Indonesia. Gamers had the option to register individually or as a team, particularly for DOTA2 and Mobile Legends (ML), ensuring flexibility in participation. This event is a collaboration event with PermaiBC!",
  },
  {
    year: "2019/20'",
    title: "Paint 'N' Chill With Bob Ross",
    date: "2020-02-29",
    location: "KJRI Vancouver",
    description:
        "On the unique date of Saturday, February 29th, 2020, PERMIKA invited all to the Consulate General of Indonesia in Vancouver for a special \"Paint 'n' Chill with Bob Ross\" evening at 6 PM. This leap day event combined the joy of painting with the relaxation of a movie night, offering a perfect escape for those eager to explore their creativity, regardless of painting skill. With various prize categories available, it was an evening designed for enjoyment and artistic discovery.",
  },
  {
    year: "2019/20'",
    title: "Welcome Home",
    date: "2019-09-28",
    location: "Collingwood Neighborhood House",
    description:
        "On September 28th, 2019, PERMIKA Vancouver hosted the heartwarming \"WELCOME HOME\" welcoming party at Collingwood Neighbourhood House, brightening the day from 1:15 PM to 4:45 PM. Aimed at banishing homesickness and reigniting connections, this event was a delightful mix of Indonesian culinary delights, engaging games, and a chance to meet with various supportive Indonesian organizations. Designed to foster friendships and celebrate culture, \"WELCOME HOME\" was a joyous gathering for those craving a taste of home and eager to weave new stories in Vancouver.",
    images: ["https://permikawebsite.s3.us-west-2.amazonaws.com/assets/events/2019:20'/welcome+home/21C26216-A203-4902-A421-8CF1DD2A87F9.webp", "https://permikawebsite.s3.us-west-2.amazonaws.com/assets/events/2019:20'/welcome+home/EEACC6DF-5286-44F0-A4E9-15D9476A7625.webp"]
  },
  {
    year: "2019/20'",
    title: "Prepair To Bowl",
    date: "2019-06-15",
    location: "Commodore Lanes",
    description:
        "On June 15th, Commodore Lanes Downtown lit up with joy, thanks to a special event featuring free bowling and Indonesian culinary delights, including the standout \"Ayam Geprek\" from the newly opened Waroeng. Hosted in collaboration with the Consulate General of the Republic of Indonesia in Vancouver, BC, attendees registered with a refundable $10 deposit and enjoyed a discount on their flavorful dish. The evening was a perfect blend of fun and culture, leaving participants with smiles and cherished memories",
    images: ["https://permikawebsite.s3.us-west-2.amazonaws.com/assets/events/2019:20'/prepair+to+bowl/IMG_0212.webp", "https://permikawebsite.s3.us-west-2.amazonaws.com/assets/events/2019:20'/prepair+to+bowl/IMG_0215.webp", "https://permikawebsite.s3.us-west-2.amazonaws.com/assets/events/2019:20'/prepair+to+bowl/IMG_0350.webp", "https://permikawebsite.s3.us-west-2.amazonaws.com/assets/events/2019:20'/prepair+to+bowl/IMG_0393.webp", "https://permikawebsite.s3.us-west-2.amazonaws.com/assets/events/2019:20'/prepair+to+bowl/IMG_0509.webp", "https://permikawebsite.s3.us-west-2.amazonaws.com/assets/events/2019:20'/prepair+to+bowl/IMG_0533.webp", "https://permikawebsite.s3.us-west-2.amazonaws.com/assets/events/2019:20'/prepair+to+bowl/IMG_0563.webp", "https://permikawebsite.s3.us-west-2.amazonaws.com/assets/events/2019:20'/prepair+to+bowl/IMG_0583.webp", "https://permikawebsite.s3.us-west-2.amazonaws.com/assets/events/2019:20'/prepair+to+bowl/IMG_0601.webp"]
  },
  {
    year: "2019/20'",
    title: "NOBAR! Nonton Bareng Film Sultan Agung",
    date: "2019-05-03",
    location: "KJRI Vancouver",
    description:
        "On Friday, May 3, everyone was warmly invited to a special gathering at KJRI, marking the official introduction of PERMIKA Vancouver alongside a captivating 'NOBAR' movie event featuring \"SULTAN AGUNG.\" ",
  },
];

export { PAST_EVENTS };
