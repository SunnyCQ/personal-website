interface ProjectImage {
    src: string;
    alt: string;
    height: string;
    width: string;
    colLg: number;
}
  
interface ProjectItem {
    title: string;
    description: string;
    images: ProjectImage[];
}

//project items
export const autoscrub_projects: ProjectItem[] = [
    {
      title: "Autoscrub Overview",
      description: `The Autoscrub was a product I designed in my Introductory
                    engineering class for my final project. I completed with
                    two other partners. I was the Chief Technical Officer, so
                    I was tasked with performing most of the technical implementations
                    of the Autoscrub, including designing the circuit, creating the
                    casing in Fusion 360, and the final assembly. The goal of the
                    Autoscrub was to be a cleaning device that reduced strain on the
                    user, such as the elderly. The motorized scrubbing feature removes
                    much of the need for physical exertion, as the device would scrub
                    for you automatically. 
                    `,
      images: [],
    },
    {
      title: "",
      description: `In the end, it was implemented with two different modes: automatic 
                    and manual, with the automatic mode having a timer that the
                    user can set, telling it how long it should run for. It also came
                    with a display that would indicate the time left and what mode it 
                    was on.
                    `,
      images: [],
    },
    {
      title: "Circuit Design",
      description: `I was entirely responsible for designing the circuits
                    for the Autoscrub, using TinkerCAD to prototype before
                    implementing it physically. Below is the final product on
                    TinkerCAD. It lists all the functions, such as timer controls,
                    power level controls, and a manuel mode on/off switch.`,
      images: [
        {
          src: "/assets/project_pics/Autoscrub/circuit.png",
          alt: "circuit diagram",
          height: "600px",
          width: "auto",
          colLg: 12,
        },
      ],
    },
    {
      title: "CAD and Assembly",
      description: `Using Fusion 360, I went through more than 10 design prototypes before
                    reaching the final one shown to the left. The resulting product using
                    this prototype is shown on the right, which implements all the features
                    form the above circuit board physically.`,
      images: [
        {
          src: "/assets/project_pics/Autoscrub/CAD_model.png",
          alt: "CAD model",
          height: "550px",
          width: "auto",
          colLg: 7,
        },
        {
          src: "/assets/project_pics/Autoscrub/final_product.png",
          alt: "final Autoscrub prototype",
          height: "650px",
          width: "auto",
          colLg: 5,
        },
      ],
    },
  ];

export const blackjack_projects: ProjectItem[] = [
{
    title: "Blackjack Overview",
    description: `This was a small but fun project where I implemented blackjack in a
                simple web format using only HTML and Javascript. The main focus was
                just to get some JS practice and review the fundamentals. I hope you
                enjoy the game!
                `,
    images: [],
},
{
    title: "Rules",
    description: `You can read the rules as shown in the image below.`,
    images: [
    {
        src: "/assets/project_pics/blackjack/website_layout.png",
        alt: "blackjack rules",
        height: "auto",
        width: "100%",
        colLg: 12,
    },
    ],
},
{
    title: "Gameplay features",
    description: `While not necessarily hard, the 'split' action in 
                blackjack was by far the most complicated feature I
                had to implement in the code. I did it to varying success,
                allowing the player to split once. However, for the sake of simplicity,
                I did not implement it to the degree of allowing the player to split
                over and over again, which is allowed in real poker.`,
    images: [
    {
        src: "/assets/project_pics/blackjack/game_split_1.png",
        alt: "split one",
        height: "auto",
        width: "100%",
        colLg: 5,
    },
    {
        src: "/assets/project_pics/blackjack/game_split_2.png",
        alt: "split two",
        height: "100%",
        width: "100%",
        colLg: 7,
    },
    ],
},
];

export const fsae_projects: ProjectItem[]  = [
{
    title: "Accumulator Redesign",
    description: `My first assignment was to redesign the accumulator to 
                    add an additional charging port and on/off button hole 
                    to the sides. Through using Solidworks, the redesign 
                    strengthened my 3D CAD skills significantly.`,
    images: [
    {
        src: "/assets/project_pics/FSAE/FSAE_thumbnail.png",
        alt: "accumulator",
        height: "900px",
        width: "auto",
        colLg: 15,
    },
    ],
},
{
    title: "Stress Tests",
    description: `I also conducted various stress tests using both Solidworks and Ansys. 
                    I learned to configure and operate these tests under various conditions, 
                    such as orienting the direction of the force and applying different materials`,
    images: [
    {
        src: "/assets/project_pics/FSAE/cylinder.webp",
        alt: "cylinder stress test",
        height: "auto",
        width: "auto",
        colLg: 7,
    },
    {
        src: "/assets/project_pics/FSAE/hinge.webp",
        alt: "hinge stress test",
        height: "400px",
        width: "auto",
        colLg: 5,
    },
    ],
},
];

export const tomochat_projects: ProjectItem[] = [
{
    title: "Tomochat overview",
    description: `Tomochat, meaning 'friend chat', was an idea that I came up with
                while learning Japanese. I thought that it would be incredibly
                helpful to have a practice conversation partner to speak Japanese to.
                Unfortunately, I didn't really have many friends who were Japanaese
                around me, and even if I did, my embaressment would get in the way
                of me actually speaking to them. So I thought: "why not make a chatbot
                to practice with?" And thus Tomochat was born.
                `,
    images: [],
},
{
    title: "Commands",
    description: `You can read the different tomochat commands as shown below.`,
    images: [
    {
        src: "/assets/project_pics/tomochat/help.png",
        alt: "tomochat commands",
        height: "auto",
        width: "100%",
        colLg: 8,
    },
    ],
},
{
    title: "Gameplay features",
    description: `While not necessarily hard, the 'split' action in 
                blackjack was by far the most complicated feature I
                had to implement in the code. I did it to varying success,
                allowing the player to split once. However, for the sake of simplicity,
                I did not implement it to the degree of allowing the player to split
                over and over again, which is allowed in real poker.`,
    images: [
    {
        src: "/assets/project_pics/tomochat/chatbot.png",
        alt: "tomochat commands",
        height: "auto",
        width: "100%",
        colLg: 7,
    },
    {
        src: "/assets/project_pics/tomochat/flashcard.png",
        alt: "tomochat commands",
        height: "auto",
        width: "100%",
        colLg: 5,
    },
    ],
},
];

