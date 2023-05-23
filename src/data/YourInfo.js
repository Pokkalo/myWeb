import { MdCastForEducation } from 'react-icons/md'
import { IoMdBrowsers } from 'react-icons/io'
import { FaMicrochip } from 'react-icons/fa'


// ============ For Services or Card group ========================
export const sty = {

    // ==== Styling outside the card group by function or bootstrap ======
    CardWidth: 3,
    buttonVariant: "white",
    buttonBg: "success",
    
    
    // ==== For unity style in Card group =========
    titleTextSize: 24,
    fontSize: 16,
    icon_size: 100,
    button: false,
    buttonText: "Hi dad"

}

export const YourServices = [

    {
        id: 1,

        Service: "STEM Education",
        ServiceTextSize: sty.titleTextSize,

        description: "Teaching Primary and Secondary Students coding and 3D design by using Cospaces, micbit, Arduino, TinkerCad and C language",
        fontSize: sty.fontSize,

        CardWidth: sty.CardWidth,
        category: "Dog",

        icon: MdCastForEducation,
        icon_size: sty.icon_size,

        button: sty.button,
        buttonVariant: sty.buttonVariant,
        buttonText: sty.buttonText,

        images: [
        "./imgs/006_1.jpg",
        "./imgs/006_2.jpg",
        "./imgs/006_3.png",
        ]
    },
    {
        id: 2,

        Service: "Frontend Development",
        ServiceTextSize: sty.titleTextSize,

        description: "Using React, JavaScript, Css, HTML and firebase to create simple static webpage",
        fontSize: sty.fontSize,

        CardWidth: sty.CardWidth,
        category: "Dog",

        icon: IoMdBrowsers,
        icon_size: sty.icon_size,

        button: sty.button,
        buttonVariant: sty.buttonVariant,
        buttonText: sty.buttonText,

        images: [
        "./imgs/006_1.jpg",
        "./imgs/006_2.jpg",
        "./imgs/006_3.png",
        ]
        },{
        id: 3,

        Service: "Arduino Demostration",
        ServiceTextSize: sty.titleTextSize,

        description: "Using electronic modules such as UNO R3 to create simple demo for testing",
        fontSize: sty.fontSize,

        CardWidth: sty.CardWidth,
        category: "Dog",

        icon: FaMicrochip,
        icon_size: sty.icon_size,

        //col-sm-10 col-md-5 col-lg-3 col-xl-2

        button: sty.button,
        buttonVariant: sty.buttonVariant,
        buttonText: sty.buttonText,

        images: [
        "./imgs/006_1.jpg",
        "./imgs/006_2.jpg",
        "./imgs/006_3.png",
        ]
     },
    //  {
    //     id: 4,

    //     Service: "test",
    //     ServiceTextSize: sty.titleTextSize,

    //     description: "Teaching Primary and Secondary Students coding and 3D design by using Cospaces, micbit, Arduino, TinkerCad 3D",
    //     fontSize: sty.fontSize,

    //     CardWidth: sty.CardWidth,
    //     category: "Dog",

    //     icon: MdCastForEducation,
    //     icon_size: sty.icon_size,

    //     button: sty.button,
    //     buttonVariant: sty.buttonVariant,
    //     buttonText: sty.buttonText,

    //     images: [
    //     "./imgs/006_1.jpg",
    //     "./imgs/006_2.jpg",
    //     "./imgs/006_3.png",
    //     ]
    //  },
]


//================================== For Experience or Timeline ==========================

export const timeline = [
    {
      id: 0,
      title: "Student",
      location: "Hong Kong Metropolitan University",
      description:
        "Bacholar Degree with scheme A electronic discipline from HKIE",
      buttonText: "About the HKMU",
      date: "July 2019 to Augest 2022",
      icon: "school",
    },
    {
        id: 1,
        title: "Internship",
        location: "TUV SUD Hong Kong Limited",
        description:
          "Preparing for my final year project by using Arduino and starting Coding Journey",
        buttonText: "About this company",
        date: "July 2021 to Augest 2021",
        icon: "work",
    },
    {
      id: 2,
      title: "Code tutor",
      location: "Enjoyeener Education limited",
      description:
        "Teaching the primary and secondary students STEM related course by using education platform and C language",
      buttonText: "About this company",
      date: "November 2021 to Augest 2022",
      icon: "work",
    },
    {
      id: 3,
      title: "Completed my project",
      location: "Hong Kong Metropolitan University",
      description:
        "Complete both hardware and software development that integrated the demostration of warehouse picking system with classification",
      buttonText: "About the project",
      date: "May 2022",
      icon: "school",
    },
    {
      id: 4,
      title: "Sale Engineer",
      location: "GNS technology limited",
      description:
        "Explain the workflow of development process and prepare the demostration before starting development to client",
      buttonText: "About the company",
      date: "Augest 2022 to November 2022",
      icon: "work",
    },
    {
      id: 5,
      title: "Certificate in Frontend Web Developer",
      location: "School of Continuing and Professional Education",
      description:
        "Learning the development procedure and studying all web development language such as JavaScript, React",
      buttonText: "About the Course",
      date: "December 2022 to March 2023",
      icon: "school",
    },

]

//============== Contact ==============


const contactConfig = {
  YOUR_EMAIL: 'developer@javascript.com',
  YOUR_FONE: '(555)123-4567',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ',
  YOUR_SERVICE_ID: 'service_id',
  YOUR_TEMPLATE_ID: 'template_id',
  YOUR_USER_ID: 'user_id',
};

 
export {
  contactConfig, 

};

// ================== Your Project ==========================

export const projectImgForDescription = [
  {
    id: 1,
    url: require("../imgs"),

  }
]