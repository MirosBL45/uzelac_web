import {
    laser,
    visual,
    multisensory,
    lighting,
    entertainment,
    concert,
    discoBall,
    audio,
    movieFrame,
    movieTheater,
    musicWave,
    stage,
    equalizer,
    spotlight,
    concertStar,
    band,
    uziSmall,
    carrent,
    jobit,
    tripguide,
    spotLights,
    soundRay,
    skyMusic,
    gabco,
    papovic,
    bwf,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "feedbacks",
        title: "Testimonials",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

export const navLinksSR = [
    {
        id: "about",
        title: "O Meni",
    },
    {
        id: "work",
        title: "Moj Rad",
    },
    {
        id: "projects",
        title: "Projekti",
    },
    {
        id: "feedbacks",
        title: "Preporuke",
    },
    {
        id: "contact",
        title: "Kontakt",
    },
];

const services = [
    {
        title: "Lighting Design",
        icon: lighting,
    },
    {
        title: "Laser Landscapes",
        icon: laser,
    },
    {
        title: "Visual Storytelling",
        icon: visual,
    },
    {
        title: "Multisensory Experiences",
        icon: multisensory,
    },
];

const servicesSR = [
    {
        title: "Dizajn Osvetljenja",
        icon: lighting,
    },
    {
        title: "Laserski Pejzaži",
        icon: laser,
    },
    {
        title: "Vizuelna Priča",
        icon: visual,
    },
    {
        title: "Multisenzorna Iskustva",
        icon: multisensory,
    },
];

const technologies = [
    {
        name: "discoBall",
        icon: discoBall,
    },
    {
        name: "audio",
        icon: audio,
    },
    {
        name: "entertainment",
        icon: entertainment,
    },
    {
        name: "concert",
        icon: concert,
    },
    {
        name: "movieFrame",
        icon: movieFrame,
    },
    {
        name: "movieTheater",
        icon: movieTheater,
    },
    {
        name: "musicWave",
        icon: musicWave,
    },
    {
        name: "stage",
        icon: stage,
    },
    {
        name: "equalizer",
        icon: equalizer,
    },
    {
        name: "spotLights",
        icon: spotLights,
    },
    {
        name: "spotlight",
        icon: spotlight,
    },
    {
        name: "concertStar",
        icon: concertStar,
    },
    {
        name: "band",
        icon: band,
    },
];

const experiences = [
    {
        title: "Lighting and Sound Effects Specialist",
        company_name: "SoundRay",
        icon: soundRay,
        iconBg: "#E6DEDD",
        date: "March 2010 - Novembar 2014",
        points: [
            "Participation in the design and implementation of lighting systems for various events, such as concerts, theater performances, fashion shows.",
            "Providing technical support during the event.",
            "Installation, testing and maintenance of lighting and sound equipment.",
            "Communicating with clients to understand their requirements and needs.",
            "Monitoring safety at work and implementing measures to preserve the integrity of the equipment.",
            "Adjusting sound systems to achieve the desired sound quality.",
            "Solving equipment problems and providing technical support.",
        ],
    },
    {
        title: "Lighting and Laser Effects Specialist",
        company_name: "SkyMusic",
        icon: skyMusic,
        iconBg: "#E6DEDD",
        date: "December 2014 - Jun 2021",
        points: [
            "Design and implementation of laser effects for various events, concerts, weddings and other manifestations.",
            "Managing the integration of audio, light and laser systems to achieve a synchronized experience.",
            "Working with complex controls and software for laser effects.",
            "Adjustment and synchronization of laser performance with other elements of production.",
            "Education of the team and users on the safe handling of laser technology.",
        ],
    },
    {
        title: "Multimedia Lighting Show Designer",
        company_name: "Uzelac Entrepreneur",
        icon: uziSmall,
        iconBg: "#f5cd82",
        date: "Jul 2021 - Present",
        points: [
            "Designing optimal solutions for lighting spaces or events.",
            "Selection of appropriate lighting equipment in accordance with the needs of the project.",
            "Talking to clients to understand their lighting needs and wants.",
            "Providing expert advice on the types of lighting solutions that would suit the specific requirements of an event or space.",
            "Organization and supervision of the installation of lighting equipment on site.",
            "Adjusting and configuring lights to achieve the desired effect.",
            "Organization of the work of the team of lighting technicians.",
        ],
    },
];

const experiencesSR = [
    {
        title: "Specijalista za osvetljenje i zvučne efekte",
        company_name: "SoundRay",
        icon: soundRay,
        iconBg: "#E6DEDD",
        date: "March 2010 - Novembar 2014",
        points: [
            "Učešće u projektovanju i implementaciji svetlosnih sistema za različite događaje, kao što su koncerti, pozorišne predstave, modne revije.",
            "Pružanje tehničke podrške tokom događaja.",
            "Postavljanje, testiranje i održavanje rasvetne i zvučne opreme.",
            "Komunikacija sa klijentima kako bi se razumeli njihovi zahtevi i potrebe.",
            "Praćenje bezbednosti na radu i primena mera kako bi se očuvala integritet opreme.",
            "Podešavanje zvučnih sistema kako bi se postigao željeni kvalitet zvuka.",
            "Rešavanje problema sa opremom i pružanje tehničke podrške.",
        ],
    },
    {
        title: "Specijalista za osvetljenje i laserske efekte",
        company_name: "SkyMusic",
        icon: skyMusic,
        iconBg: "#E6DEDD",
        date: "December 2014 - Jun 2021",
        points: [
            "Projektovanje i implementacija laserskih efekata za različite događaje, koncerte, svadbe i druge manifestacije.",
            "Upravljanje integracijom audio, light i laser sistema radi postizanja sinhronizovanog doživljaja.",
            "Rad s kompleksnim kontrolama i softverima za laserske efekte.",
            "Podešavanje i sinhronizacija laserskih performansi s ostalim elementima produkcije.",
            "Edukacija tima i korisnika o sigurnom rukovanju laserskom tehnologijom.",
        ],
    },
    {
        title: "Dizajner multimedijalnog osvetljenja",
        company_name: "Uzelac Preduzetnik",
        icon: uziSmall,
        iconBg: "#f5cd82",
        date: "Jul 2021 - I dalje",
        points: [
            "Projektovanje optimalnih rešenja za osvetljavanje prostora ili događaja.",
            "Odabir odgovarajuće rasvetne opreme u skladu s potrebama projekta.",
            "Razgovor s klijentima kako bi razumeli njihove potrebe i želje u vezi s osvetljenjem.",
            "Pružanje stručnih saveta o vrstama rasvetnih rešenja koja bi odgovarala specifičnim zahtevima događaja ili prostora.",
            "Organizacija i nadgledanje instalacije rasvetne opreme na licu mesta.",
            "Podešavanje i konfiguracija svetala kako bi se postigao željeni efekat.",
            "Organizacija rada tima tehničara rasvete.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "Working with Uzelac on the lighting project for the New Year at the Belgrade Tower in Belgrade Waterfront was an extremely positive and productive experience. Uzelac demonstrated a high level of professionalism and dedication throughout the entire process, from consultation and planning to installation and execution. His ability to quickly resolve technical challenges and adapt to changes in the course of events contributed to the smooth execution of the project. Our harmony in work contributed to the synergy between the laser effects that I controlled and the lighting effects that Uzelac performed. The result was a spectacular experience at the Belgrade Tower in Belgrade Waterfront during New Year's Eve.",
        name: "Martin Gabco",
        designation: "Multimedia laser show designer",
        company: "KVANT",
        image: gabco,
    },
    {
        testimonial:
            "As a Lighting and Laser Effects Specialist, Uzelac exceeded all expectations regarding the projects he worked on. Uzelac's technical knowledge is impressive and his ability to translate creative visions into reality is outstanding. He was instrumental in the design and implementation of lighting and laser effects on various projects. His expertise in working with roto-heads and other lighting equipment added significant value to our projects. What I especially appreciate about Uzelac is his dedication to work. He was always ready to take initiative, solve problems quickly and adapt to changes during projects. His communication and cooperation with the team was outstanding, creating a positive atmosphere and contributing to the success of the entire team. Uzelac has shown that he is a skilled professional and a leader in his field.",
        name: "Radomir Papović",
        designation: "Special Projects Manager",
        company: "SkyMusic",
        image: papovic,
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const testimonialsSR = [
    {
        testimonial:
            "Rad sa Uzelcem na projektu rasvete za Novu godinu na Kuli Beograd u Beogradu na vodi bilo je izuzetno pozitivno i produktivno iskustvo. Uzelac je pokazao visok nivo profesionalizma i posvećenosti tokom celog procesa, od konsultacija i planiranja do montaže i izvođenja. Njegova sposobnost da brzo rešava tehničke izazove i prilagođava se promenama u toku događaja doprinela je nesmetanoj realizaciji projekta. Naš sklad u radu doprineo je sinergiji između laserskih efekata koje sam kontrolisao i svetlosnih efekata koje je izvodio Uzelac. Rezultat je bio spektakularno iskustvo na Kuli Beograd u Beogradu na vodi tokom novogodišnje noći.",
        name: "Martin Gabco",
        designation: "Dizajner Laserskih Efekata",
        company: "KVANT",
        image: gabco,
    },
    {
        testimonial:
            "Kao Specijalista za osvetljenje i laserske efekte, Uzelac je premašio sva očekivanja u vezi sa projektima na kojima je radio. Uzelčevo tehničko znanje je impresivno, a njegova sposobnost da prevede kreativne vizije u stvarnost je izvanredna. Bio je ključan u projektovanju i implementaciji svetlosnih i laserskih efekata na različitim projektima. Njegova stručnost u radu sa roto-glavama i ostalom opremom za rasvetu dodala je značajnu vrednost našim projektima. Ono što posebno cenim kod Uzelca jeste njegova predanost poslu. Uvek je bio spreman da preuzme inicijativu, brzo rešava probleme i prilagođava se promenama tokom projekata. Njegova komunikacija i saradnja sa timom bili su izvanredni, stvarajući pozitivnu atmosferu i doprinoseći uspehu celokupnog tima. Uzelac je pokazao da je vešt profesionalac i lider u oblasti rasvete.",
        name: "Radomir Papović",
        designation: "Special Projects Manager",
        company: "SkyMusic",
        image: papovic,
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Belgrade Tower",
        description:
            "This December 31st, the greatest party in Serbia took place at Belgrade Waterfront. As guests of Sava Promenada sailed into the new year, a spectacular light and pyrotechnic show above Belgrade Tower marked „the craziest night“ in the Serbian capital. This project's complexity was arranging the lasers, roto-heads on the tower's exterior and roof, and linking for all devices simultaneously. It was required to set up many light effects projections to go along with the music.",
        tags: [
            {
                name: "lighting",
                color: "blue-text-gradient",
            },
            {
                name: "laser",
                color: "green-text-gradient",
            },
            {
                name: "fireworks",
                color: "pink-text-gradient",
            },
        ],
        image: bwf,
        source_code_link: "https://www.belgradewaterfront.com/en/events",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "audio",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

const projectsSR = [
    {
        name: "Kula Beograd",
        description:
            "Ovog 31. decembra u Beogradu na vodi održana je najveća žurka u Srbiji. Dok su gosti Sava Promenade uplovili u novu godinu, spektakularna svetlosna i pirotehnička predstava iznad Kule Beograd obeležila je „najluđu noć“ u srpskoj prestonici. Složenost ovog projekta bila je uređenje lasera, roto-glava na spoljašnjosti i krovu kule, i povezivanje svih uređaja. Bilo je potrebno podesiti nekoliko projekcija svetlosnih efekata da prate muziku.",
        tags: [
            {
                name: "rasveta",
                color: "blue-text-gradient",
            },
            {
                name: "laser",
                color: "green-text-gradient",
            },
            {
                name: "vatromet",
                color: "pink-text-gradient",
            },
        ],
        image: bwf,
        source_code_link: "https://www.belgradewaterfront.com/en/events",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "audio",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, servicesSR, technologies, experiences, experiencesSR, testimonials, testimonialsSR, projects, projectsSR };