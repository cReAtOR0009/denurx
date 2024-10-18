import { profileImage2, doctors,online_consult, online, pill_bottle, health_record, health_tips, calendar, lab_test,feature_advanced, feature_comprehensive, feature_cost, feature_security, feature_user, feature_verified, home_service, service_onlineConsultaions,service_onlineCare,service_medical_record, service_health_tip, service_home_service, service_lab_test, service_medic_management, service_record, facebook, twitter, whatsapp, mockup1,mockup2,mockup3,mockup4, signup, findDoctor, prescription,consultations, managehealth,patientcare2, youtube, instagram
 } from "./images"


export const nav = [
   {title:"Home"}, 
   {title:"Key Features"}, 
   {title:"Quick Start"},
   {title:"About"}, 
   {title:"Services"}, 
]

export const HeroText = [{
    h1:"Your Clinic In Your Hands.",
    tagLine:"Access Quality Healthcare anywhere, anytime",
    description:"Schedule Virtual appointments, track your health and connect with healthcare providers on the go",
    image:patientcare2

}, {
  h1: "Your Clinic In Your Hands.",
  tagLine: "Deliver Virtual care, Grow your Practice and Earn More",
  description:"manage your schedule, engage with patients, and access resources at your fingertips",
  image: doctors,
},]

export const aboutApp = {
    titleProviders:" Deliver Virtual care and grow your practice",
    titlePatients:"Access quality healtcare anywhere, anytime",
    textProviders:"Manage your schedule, engage with patients and access resources at your fingertips",
    textPatients:"Schedule virtual appointments, track your health, and connect with healthcare providers on the go",
    images:[service_home_service, service_lab_test, service_onlineConsultaions, ],
    keyFeatures:[{
      mockup:mockup1,
        text:"Virtual Appointment Scheduling",
        description:"Transform your practice with secure video consultations and remote monitoring. Enhance patient access, expand reach, and improve outcomes. Stay ahead with high-quality, convenient, and secure virtual care."
    },{
      mockup:  mockup2,
      text:"Secure Messaging and Video Consultations",
      description:"Experience secure, 24/7 messaging and video consultations. Connect with healthcare professionals from home, sharing medical information and receiving face-to-face care securely."
  }, {
      mockup:mockup3,
        text:"Electronic health Records Access",
        description:"Access your health records securely and digitally. View your medical history, diagnoses, medications, and test results in one place. Share information easily with healthcare providers for better care."
    },{
      mockup:mockup4,
        text:"Personalized patient engagement tools",
        description:"Denurx provides personalized tools to help patients proactively manage their health. Set health goals, receive reminders, track progress, and monitor health metrics. Access personalized care plans and secure communication with healthcare providers. Denurx enhances the overall patient experience by promoting active participation and personalized engagement, setting a new standard for patient-centered care."
    }
    //  , {
    //   mockup:mockup2,
    //     text:"E-Wallet & Payments.",
    //     description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora sit, voluptatum quibusdam nobis dolores unde."
    // }
  ]
}

export const whyChooseUs = {
    title:"",
    text:"",
    benefits:[
        {title:"", description:""},
        {title:"", description:""},
        {title:"", description:""},
        {title:"", description:""},
        {title:"", description:""},
    ]
}

export const services = [
    {
      title: "Online Doctor Consultations",
      description: "Connect with licensed doctors for virtual consultations via video call or chat. Our network of experienced healthcare professionals is available to address your medical concerns, offer expert advice, and provide treatment plans tailored to your needs this allows you Get expert medical advice without leaving your home. With Denurx, you can access quality healthcare no matter where you are, reducing the need for travel and waiting times.",
      icon: online,  
      image: service_onlineCare      
    },
    {
      title: "Appointment Booking",
      description: "Schedule appointments for both in-person and virtual visits with doctors, nurses, and specialists. Our easy-to-use interface allows you to book, reschedule, or cancel appointments at your convenience. Conveniently book appointments at times that suit your schedule. With flexible booking options, you can find the right time for your healthcare needs without disrupting your daily routine.",
      icon: calendar,     
      image: service_onlineConsultaions      
    },
    {
      title: "Home Health Services",
      description: "Request home visits from nurses for treatments and disease management. Our professional nursing team provides a range of services, including wound care, injections, and ongoing support for persisting Health conditions.  Receive medical care at home, perfect for those with mobility issues or persisting Health conditions. Enjoy the comfort and privacy of your home while receiving high-quality medical care.",
      icon: home_service,         
      image: service_home_service      
    },
  ];

export const servicesComplete =[
  {
    title: "Online Doctor Consultations",
    description: "Connect with licensed doctors for virtual consultations via video call or chat. Our network of experienced healthcare professionals is available to address your medical concerns, offer expert advice, and provide treatment plans tailored to your needs this allows you Get expert medical advice without leaving your home. With Denurx, you can access quality healthcare no matter where you are, reducing the need for travel and waiting times.",
    icon: online,  
    image: service_onlineCare      
  },
  {
    title: "Appointment Booking",
    description: "Schedule appointments for both in-person and virtual visits with doctors, nurses, and specialists. Our easy-to-use interface allows you to book, reschedule, or cancel appointments at your convenience. Conveniently book appointments at times that suit your schedule. With flexible booking options, you can find the right time for your healthcare needs without disrupting your daily routine.",
    icon: calendar,     
    image: service_onlineConsultaions      
  },
  {
    title: "Home Health Services",
    description: "Request home visits from nurses for treatments and disease management. Our professional nursing team provides a range of services, including wound care, injections, and ongoing support for persisting Health conditions.  Receive medical care at home, perfect for those with mobility issues orpersisting Health conditions. Enjoy the comfort and privacy of your home while receiving high-quality medical care.",
    icon: home_service,         
    image: service_home_service      
  },
  {
    title: "Lab Test Requests",
    description: "Order lab tests and receive results directly through the app. Choose between visiting a lab or requesting a home test. Our partnered labs ensure accurate and timely results for your peace of mind. Easy access to diagnostic services without long waits. Stay informed about your health status with our efficient lab test services, helping you and your doctor make informed decisions about your care.",
    icon: lab_test,    
    image: service_lab_test      
  },
  {
    title: "Medication Management",
    description: "Have doctors prescribe medications and order them from nearby pharmacies for home delivery. Keep track of your prescriptions, receive reminders to take your medication, and get your drugs delivered promptly. Manage your medications efficiently and get them delivered to your doorstep. With Denurx, you can avoid trips to the pharmacy and ensure you never miss a dose.",
    icon: pill_bottle,  
    image: service_medic_management      
  },
  // {
  //   title: "Chronic Disease Management",
  //   description: "Specialized care and continuous monitoring for chronic conditions like diabetes, hypertension, and more. Our comprehensive management plans include regular check-ins, personalized treatment plans, and support from a dedicated care team. ngoing support to manage chronic illnesses effectively. Improve your quality of life with continuous monitoring and proactive management of your health.",
  //   icon: heart_disease,        
  //   image: service_chronic_disease      
  // },
  {
    title: "Health Records Management",
    description: "Securely store and access your medical history, lab results, prescriptions, and more. Easily share your records with healthcare providers and keep track of your health journey. Keep all your health information in one place for easy access and sharing with healthcare providers. Stay organized and ensure your medical history is always available when you need it.",
    icon: health_record,       
    image: service_medical_record      
  },
  {
    title: "Health Tips & Education",
    description: "Access a wealth of health-related articles, tips, and resources contributed by medical professionals. Stay up-to-date with the latest health information and learn how to maintain a healthy lifestyle. Stay informed and make better health decisions with expert advice. Empower yourself with knowledge and take charge of your health with Denurx.",
    icon: health_tips,         
    image: service_health_tip      
  }
]
  
  export const testimonials = [
    // {
    //   name: "Dr. John Smith",
    //   image: profileImage,
    //   testament: "Denurx has revolutionized the way I connect with my patients. The convenience of virtual consultations has significantly improved patient satisfaction and health outcomes.",
    //   role: "Doctor"
    // },
    // {
    //   name: "Nurse Jane Doe",
    //   image:profileImage,
    //   testament: "Using Denurx for home visits and chronic disease management has been a game changer. The app's seamless integration of services allows me to provide better care for my patients.",
    //   role: "Nurse"
    // },
    // {
    //   name: "Samuel Johnson",
    //   image:profileImage,
    //   testament: "As a patient with a chronic condition, Denurx has been a lifeline. The ease of booking appointments and getting lab results at home has made managing my health much more manageable.",
    //   role: "Patient"
    // },
    // {
    //   name: "Dr. Emily Davis",
    //   image: profileImage,
    //   testament: "Denurx has allowed me to expand my practice and reach more patients. The app's features for lab tests and e-wallet payments streamline the entire consultation process.",
    //   role: "Doctor"
    // },
    // {
    //   name: "Michael Brown",
    //   image:profileImage,
    //   testament: "The GPS locator feature in Denurx helped me find the nearest pharmacy and get my medications delivered quickly. It's an incredibly useful tool for anyone needing prompt healthcare services.",
    //   role: "Patient"
    // },
    // {
    //   name: "Dr. Sarah Lee",
    //   image: profileImage,
    //   testament: "Denurx offers a secure and efficient way to manage my patients' health records. The app's comprehensive features ensure that I can provide the best possible care.",
    //   role: "Doctor"
    // },
    // {
    //   name: "Nurse Alice Green",
    //   image:profileImage,
    //   testament: "Denurx makes it easy to coordinate home visits and provide continuous care for chronic disease patients. The app's features streamline my workflow and enhance patient care.",
    //   role: "Nurse"
    // },
    // {
    //   name: "Emily Johnson",
    //   image:profileImage,
    //   testament: "Denurx is a lifesaver! Booking appointments and accessing lab results from home has made managing my health so much easier and stress-free.",
    //   role: "Patient"
    // },
    // {
    //   name: "Dr. David White",
    //   image:profileImage,
    //   testament: "The ability to conduct virtual consultations has expanded my practice significantly. Denurx's user-friendly interface makes it easy for me and my patients to stay connected.",
    //   role: "Doctor"
    // },
    {
      name: "Jessica Brown",
      image: "profileImage",
      testament: "Managing my medications has never been easier thanks to Denurx. The app's e-wallet and home delivery features ensure I never miss a dose.",
      role: "Patient"
    },
    {
      name: "Dr. Olivia Black",
      image: "profileImage2",
      testament: "Denurx's integrated lab test features allow me to quickly order and review results for my patients. It’s an invaluable tool for providing timely and accurate diagnoses.",
      role: "Doctor"
    },
    {
      name: "Nurse Tom Harris",
      image:"profileImage",
      testament: "With Denurx, I can easily manage my schedule and provide high-quality care to patients at home. The app’s convenience is unparalleled.",
      role: "Nurse"
    },
    {
      name: "Laura Wilson",
      image: "profileImage",
      testament: "Denurx has transformed the way I manage my health condition. The app’s reminders and easy access to healthcare professionals gives me peace of mind.",
      role: "Patient"
    },
    {
      name: "Dr. Christopher Evans",
      image: "profileImage2",
      testament: "Denurx’s telemedicine platform has streamlined my workflow and improved patient care. The ability to access patient records and lab results on the go is fantastic.",
      role: "Doctor"
    },
    // {
    //   name: "Nurse Lisa Adams",
    //   image:profileImage,
    //   testament: "Denurx allows me to provide personalized care for my patients in their homes. The app’s features make it easy to coordinate and deliver services efficiently.",
    //   role: "Nurse"
    // }
  ];
  
export const howItWorks = [
    {
        icon:signup,
        step: "Sign Up",
        description: "Create an account by providing your basic information and completing your profile.",
        tip: "Tip: Ensure to verify your email and phone number for a secure experience."
      },
      {
        icon:findDoctor,
        step: "Find a Doctor or Service",
        description: "Use the app's search and GPS locator to find doctors, labs, or pharmacies near your location.",
        tip: "Tip: Filter search results based on specialties, services, and user ratings."
      },
      {
        icon:consultations,
        step: "Consult & Book",
        description: "Schedule a consultation or home visit with the healthcare provider of your choice. Choose between video call, chat, or in-person appointments.",
        tip: "Tip: Check provider profiles and availability before booking."
      },
      {
        icon:prescription,
        step: "Get Prescriptions & Lab Tests",
        description: "During the consultation, doctors can prescribe medications and order lab tests. Receive your prescriptions and test orders directly in the app.",
        tip: "Tip: Use the app to locate nearby pharmacies and labs to fulfill your prescriptions and test orders."
      },
      {
        icon:managehealth,
        step: "Manage Your Health",
        description: "Track your medical history, set drug reminders, manage health conditions. View lab results, treatment plans, and many more in one place.",
        tip: "Tip: Regularly update your health information and set reminders for medication and follow-up appointments."
      }
    
]

export const benefits = 
    {title:"About Denurx", paragraph:"Discover the unique advantages of our telemedicine app-Denurx. Denurx provides comprehensive, convenient, and secure healthcare services to ensure you receive the best Healthcare possible through your Phone.  With Denurx, you can connect with experienced healthcare professionals from the comfort of your home, saving time and avoiding the hassle of traveling to a clinic. Our app, Denurx, offers a wide range of services, including virtual doctor consultations, home health visits, lab test requests, and medication management. We prioritize your privacy and security, ensuring that your medical data is protected at all times. Whether you need ongoing support for a health condition or quick access to a healthcare provider for an health issue, Denurx is here to make quality healthcare accessible and affordable from the comfort of your Space through your Phone. Join the many users and Healthcare Providers who trust Denurx for their healthcare needs and Professional Service delivery and experience the future of medicine today. Here are some reasons why you need us:", benefits:[
        {
          icon: feature_comprehensive,
          title: "Comprehensive Healthcare Services",
          text: "Denurx provides an all-in-one solution for your healthcare needs. From consultations and prescription management to lab tests and disease management, everything is available in one place. Users can save time and hassle by accessing a wide range of services without needing multiple apps or visits to different providers."
        },
        {
          icon: online_consult,
          title: "Convenient Access to Healthcare",
          text: "With Denurx, access top-notch healthcare from the comfort of your home. Connect with healthcare professionals anytime via your phone. Book appointments, consult doctors, order lab tests, and get medications delivered to your door through our user-friendly app. Perfect for those with mobility issues or busy schedules, Denurx ensures you receive the best care without the hassle of commutes or waiting rooms."
        },
        {
          icon: online,
          title: "Convenience and Accessibility",
          text: "Access healthcare services anytime and anywhere. Book appointments, consult with doctors, order lab tests, and get medications delivered to your door, all through a user-friendly app. using Denurx, Users can manage their health from the comfort of their home, making healthcare more accessible, especially for those with mobility issues or busy schedules."
        },
        {
          icon: feature_verified,
          title: "Verified and Qualified Professionals",
          text: "All doctors, nurses, and healthcare providers on our platform are thoroughly verified, ensuring that you receive care from qualified and trusted professionals. Users can have peace of mind knowing they are in good hands and receiving quality healthcare services."
        },
        {
          icon: feature_advanced,
          title: "Enhanced Health Management Features",
          text: "Our app includes features like electronic medical history management, drug reminders, GPS locators for nearby services, and more to help you stay on top of your health. Users can efficiently manage their health, track their medical history, and never miss a medication or appointment."
        },
        {
          icon: feature_security,
          title: "Secure and Private",
          text: "We prioritize your privacy and security. with Denurx,  All your medical data and consultations are securely stored and encrypted, ensuring your personal information remains confidential. Users can trust that their sensitive health information is safe and secure with us."
        },
        {
          icon: feature_user,
          title: "User-Friendly Interface",
          text: "The app is designed with a focus on ease of use. Whether you are tech-savvy or not, you will find the app intuitive and easy to navigate. Users of all ages and technical abilities can easily use the app to access healthcare services and also provide healthcare Services as an Healthcare provider."
        },
        {
          icon: feature_cost,
          title: "Cost-Effective Solutions",
          text: "Our app offers competitive pricing for consultations and other services, with subscription models available for regular users. Save on travel costs and time off work by using telemedicine services. Users can access affordable healthcare services, making it easier to stay healthy without breaking the bank."
        }
      ]
      }


export const socials = [
    {platform:"facebook", image:facebook ,link:" https://www.facebook.com/profile.php?id=100087267245999"},
    {platform:"instagram", image:instagram ,link:"https://www.instagram.com/denurx_tech"},
    {platform:"twitter", image:twitter ,link:"https://www.twitter.com/@denurx001"},
    {platform:"youtube", image:youtube ,link:"https://www.youtube.com/@Denurx"},
    {platform:"whatsapp", image:whatsapp ,link:"https://wa.me/2348076091961"},
    // {platform:"linkdn", image:linkedin ,link:"#"},
]

export const faqs = [
  {
    question: "What is Denurx?",
    answer: "Denurx is a telemedicine app that provides comprehensive healthcare services, including online doctor consultations, appointment bookings, home health services, lab test requests, and medication management."
  },
  {
    question: "How do I sign up for Denurx?",
    answer: "To sign up for Denurx, download the app from the App Store or Google Play Store, open the app, and follow the on-screen instructions to create an account. You will need to provide some basic information and verify your email and phone number."
  },
  {
    question: "Can I consult with a doctor through Denurx?",
    answer: "Yes, you can consult with licensed doctors through Denurx via video call or chat. Simply book an appointment with a doctor of your choice and choose your preferred method of consultation."
  },
  {
    question: "How do I book an appointment?",
    answer: "To book an appointment, log in to your Denurx account, use the search feature to find a healthcare provider, and select an available time slot that suits you. You can book appointments for both virtual and in-person visits."
  },
  {
    question: "What types of services does Denurx offer?",
    answer: "Denurx offers a wide range of services, including online doctor consultations, home health services, lab test requests, medication management, disease management, and health records management."
  },
  {
    question: "How can I request a home visit from a nurse?",
    answer: "To request a home visit from a nurse, log in to your Denurx account, search for available home health services, and book a visit at a time that is convenient for you. A nurse will come to your location to provide the necessary care."
  },
  {
    question: "Can I get my medications delivered through Denurx?",
    answer: "Yes, after a consultation, doctors can prescribe medications through Denurx, and you can order these medications from nearby pharmacies for home delivery."
  },
  {
    question: "How do I view my lab test results?",
    answer: "You can view your lab test results directly in the Denurx app. After your test is completed, the lab will upload the results to your profile, and you will be notified when they are ready to view."
  },
  {
    question: "Is my personal and medical information secure on Denurx?",
    answer: "Yes, Denurx uses advanced security measures to protect your personal and medical information. All data is encrypted and stored securely, and we comply with all relevant privacy regulations."
  },
  {
    question: "How do I contact customer support?",
    answer: "If you need assistance, you can contact Denurx customer support through the app. Go to the 'Support' section and choose your preferred method of contact, such as email or live chat."
  }
];

export const blogs = [
  {
    title: "The Future of Telemedicine in Africa",
    image: service_health_tip,
    summary: "Explore how telemedicine is transforming healthcare across Africa, providing greater access to medical services and improving patient outcomes.",
    date: "June 14, 2024",
    author: "Dr. Chaz",
    content: "Telemedicine is rapidly gaining ground in Africa, offering a viable solution to bridge the gap in healthcare access. With advancements in technology, patients can now connect with healthcare providers from remote areas, receive consultations, and even get prescriptions without traveling long distances..."
  },
  {
    title: "Top 5 Benefits of Using Telemedicine",
    image: service_lab_test, 
    summary: "Discover the top benefits of telemedicine and how it can enhance your healthcare experience by providing convenient and timely access to medical services.",
    date: "June 10, 2024",
    author: "Dr. Chaz",
    content: "Telemedicine offers numerous benefits, including increased access to healthcare, convenience, cost savings, and improved patient engagement. By utilizing telemedicine platforms like Denurx, patients can receive medical consultations, book appointments, and manage their health more effectively..."
  },
  {
    title: "How to Book a Virtual Doctor Appointment with Denux",
    image: service_record, 
    summary: "Step-by-step guide on how to book a virtual doctor appointment using the Denurx app. Ensure you get timely medical consultations from the comfort of your home.",
    date: "June 5, 2024",
    author: "Dr. Freedom",
    content: "Booking a virtual doctor appointment with Denurx is easy and straightforward. In this blog, we walk you through the steps to schedule your consultation, from selecting a doctor to confirming your appointment. Follow these simple instructions to get started with your virtual healthcare journey..."
  },
  {
    title: "The Role of Telemedicine in Emergency Situations",
    image: profileImage2, 
    summary: "Understand the critical role telemedicine plays in emergency situations, providing immediate medical attention and advice when it is needed the most.",
    date: "June 1, 2024",
    author: "Dr. Freedom",
    content: "In emergency situations, time is of the essence. Telemedicine offers a lifeline by providing quick access to medical professionals who can offer immediate advice and support. Whether it's a minor injury or a serious health concern, telemedicine ensures patients receive prompt attention, potentially saving lives..."
  },
];

export const privacyPolicy = {
  introduction: "Denurx Healthcare Private Limited ('Denurx', 'we', 'us') values your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and disclose personal information from our users.",
  
  informationWeCollect: [
    "Personal information (name, email, phone number, password)",
    "Health information (medical history, conditions, medications)",
    "Location data (GPS location, IP address)",
    "Usage data (health history, search queries)",
    "Payment information (credit card details, payment history)"
  ],
  
  howWeUseYourInformation: [
    "Provide and improve our services",
    "Communicate with you about your account and services",
    "Comply with legal and regulatory requirements",
    "Protect the rights, property, and safety of our users and others",
    "Personalize your experience (recommendations, offers)"
  ],
  
  informationSharing: [
    "With healthcare providers and professionals (for virtual consultations and services)",
    "With third-party service providers (payment processing, data analysis)",
    "In response to legal requests and subpoenas",
    "In the event of a merger, acquisition, or asset sale"
  ],
  
  dataSecurity: [
    "We use encryption and secure servers to protect your data",
    "We implement appropriate security measures to prevent unauthorized access"
  ],
  
  yourRights: [
    "Access and correct your personal information",
    "Request deletion of your personal information",
    "Object to processing of your personal information",
    "Lodge a complaint with a supervisory authority"
  ],
  
  changesToThisPolicy: "We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting a notice on our website or sending an email.",
  
  contactUs: "If you have questions or concerns about this Privacy Policy, please contact us at",
  
  acknowledgment: "By using our services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy."
};



export const termsAndConditions = {
  effectiveDate: "24/06/2024",
  
  definitions: [
    `"Denurx" means Denurx Technology Private Limited, a company incorporated under the Companies and Allied Matters Act (CAMA) with RC number: 2010172.`,
    `"Platform" means the Denurx website and mobile app.`,
    `"Services" means the healthcare services provided through the Platform.`,
    `"Users" means patients, healthcare providers, and other individuals who use the Services.`
  ],

  useOfServices: [
    "Users must be at least 18 years old to use the Services.",
    "Users must provide accurate and complete information.",
    "Users are responsible for maintaining the confidentiality of their accounts."
  ],

  healthcareServices: [
    "Healthcare providers are independent contractors and not employees of Denurx.",
    "Denurx does not provide medical advice or diagnosis.",
    "Users must consult a qualified healthcare professional for medical advice."
  ],

  paymentTerms: [
    "Payment for Services is due at the time of booking.",
    "Denurx may offer payment plans or insurance coverage."
  ],

  intellectualProperty: [
    "Denurx owns all intellectual property rights to the Platform and Services.",
    "Users may not reproduce, modify, or distribute our content without permission."
  ],

  disclaimerOfWarranties: [
    "Our Services are provided 'as is' and 'as available'.",
    "Denurx disclaims all warranties, express or implied."
  ],

  limitationOfLiability: [
    "Denurx is not liable for damages or losses resulting from our Services.",
    "Our liability is limited to the amount paid for Services."
  ],

  disputeResolution: [
    "Any dispute or claim arising out of or related to these Terms and Conditions shall be resolved through arbitration in accordance with the rules of the Nigerian Arbitration and Conciliation Act (ACA).",
    "The arbitration shall be conducted by a single arbitrator appointed by the Nigerian Arbitration and Conciliation Act (ACA).",
    "The arbitration shall take place in Lagos, Nigeria, and the language of the arbitration shall be English.",
    "The arbitrator's decision shall be final and binding, and may be enforced in any court of competent jurisdiction."
  ],

  governingLaw: "These Terms and Conditions are governed by the Companies and Allied Matters Act (CAMA) and the laws of the Federal Republic of Nigeria.",

  changesToTermsAndConditions: [
    "Denurx may update these Terms and Conditions at any time.",
    "Users will be notified of significant changes.",
    "Continued use of the Services after changes take effect will constitute acceptance of the updated Terms and Conditions."
  ],

  acknowledgment: "By using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions."
};
