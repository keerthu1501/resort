export const navList = [
    {
      id: 1,
      path: "/",
      text: "Home",
    },
    {
      id: 2,
      path: "/about",
      text: "About",
    },
    {
      id: 3,
      path: "/services",
      text: "Services",
    },
    {
      id: 4,
      path: "/rooms",
      text: "Rooms",
    },
    {
      id: 5,
      path: "/page",
      text: "Page",
      subItems: [
        {
          id: 51,
          path: "/booking",
          text: "Booking",
        },
        {
          id: 52,
          path: "/team",
          text: "Our Team",
        },
        {
          id: 53,
          path: "/testimonial",
          text: "Testimonial",
        },
      ],
    },
    {
      id: 6,
      path: "/contact",
      text: "Contact",
    },
  ];
  export const socialIcons = [
    {
      icon: <a href="https://github.com/keerthu1501" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>,
    },
    {
      icon: <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>,
    },
    {
      icon: <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>,
    },
    {
      icon: <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>,
    },
    {
      icon: <a href="https://www.youtube.com/c/yourchannel" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>,
    },
  ];
  
  
  export const carouselData = [
    {
      img: "../assets/img/carousel-1.jpg",
      title: "Discover A Brand Luxurious Hotel",
      subtitle: "luxury living",
      btn1: "Our Room",
      btn2: "Book Room",
    },
    {
      img: "../assets/img/carousel-2.jpg",
      title: "Discover A Brand Luxurious Hotel",
      subtitle: "luxury living",
      btn1: "Our Room",
      btn2: "Book Room",
    },
  ];
  export const about = [
    {
      icon: <i class="fa fa-hotel fa-2x text-primary mb-2"></i>,
      text: "Rooms",
      count: "7",
    },
    {
      icon: <i class="fa fa-users fa-2x text-primary mb-2"></i>,
      text: "Staffs",
      count: "12",
    },
    {
      icon: <i class="fa fa-users-cog fa-2x text-primary mb-2"></i>,
      text: "Acors",
      count: "3",
    },
  ];
  
  export const services = [
    {
      icon: <i class="fa fa-hotel fa-2x text-primary"></i>,
      name: "Rooms ",
      discription: " With fresh, crisp air and stunning vistas at every turn",
    },
    {
      icon: <i class="fa fa-utensils fa-2x text-primary"></i>,
      name: "Food & Dining",
      discription: "Meals offered: You can choose from veg & non-veg meals | Cuisines available: Local, South Indian",
    },
    {
      icon: <i class="fa fa-spa fa-2x text-primary"></i>,
      name: "parking",
      discription: "Shared Access | Onsite Parking is available",
    },
  
    {
      icon: <i class="fa fa-swimmer fa-2x text-primary"></i>,
      name: "popular amenities",
      discription: "Barbeque | Shared Parking  Housekeeping | Luggage Assistance",
    },
    {
      icon: <i class="fa fa-glass-cheers fa-2x text-primary"></i>,
      name: "Basic facilities",
      discription: "Housekeeping | Smoking Rooms | Room Service | Umbrellas.",
    },
  
    {
      icon: <i class="fa fa-dumbbell fa-2x text-primary"></i>,
      name: "Safety and security",
      discription: " CCTV | Fire Extinguishers",
    },
  ];
  export const team = [
    {
      image: "../assets/img/team-1.jpg",
      name: "Full Name",
      designation: "Designation",
    },
    {
      image: "../assets/img/team-2.jpg",
      name: "Full Name",
      designation: "Designation",
    },
    {
      image: "../assets/img/team-3.jpg",
      name: "Full Name",
      designation: "Designation",
    },
    {
      image: "../assets/img/team-3.jpg",
      name: "Full Name",
      designation: "Designation",
    },
  ];
  
  export const footerItem = [
    {
      id: 1,
      header: "Company",
      UnitItem: [
        {
          name: "About Us",
        },
        {
          name: "Contact Us",
        },
        {
          name: "Privacy Policy",
        },
        {
          name: "Terms & Condition",
        },
        {
          name: "Support",
        },
      ],
    },
    {
      id: 2,
      header: "Services",
      UnitItem: [
        {
          name: "Food & Dining",
        },
        {
          name: "Parking",
        },
        {
          name: "Popular Amenities",
        },
        {
          name: "Basic Facilities",
        },
        {
          name: "Safety and Security",
        },
      ],
    },
  ];
  
  export const footerContact = [
    {
      icon: <i className="fa fa-map-marker-alt me-3"></i>,
      name: "A/1A Kodaikanal road, Poombarai, Village, Kodaikanal, Tamil Nadu 624103 ,Naidupuram View on maps. Landmarks. Poombarai Viewing Point.",
    },
    {
      icon: <i className="fa fa-phone-alt me-3"></i>,
      name: "+91 8072508025",
    },
    {
      icon: <i className="fa fa-envelope me-3"></i>,
      name: "evergreenmeadowsglamps@gmail.com",
    },
  ];
  
  export const contact = [
    {
      icon: <i class="fa fa-envelope-open text-primary me-2"></i>,
      title: "Booking",
      email: "evergreenmeadowsglamps@gmail.com",
    },
    {
      icon: <i class="fa fa-envelope-open text-primary me-2"></i>,
      title: "Technical",
      email: "evergreenmeadowsglamps@gmail.com",
    },
    {
      icon: <i class="fa fa-envelope-open text-primary me-2"></i>,
      title: "General",
      email: "evergreenmeadowsglamps@gmail.com",
    },
  ];
  export const testimonial = [
    {
      description:
        "nice place to visit and stay",
      name: "Client Name",
      profession: "Profession",
      icon: (
        <i class="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
      ),
      img: "../assets/img/testimonial-1.jpg",
    },
    {
      description:
        "very happy and adventures.we enjoyed with family",
      name: "Client Name",
      profession: "Profession",
      icon: (
        <i class="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
      ),
      img: "../assets/img/testimonial-2.jpg",
    },
    {
      description:
        "must visit .",
      name: "Client Name",
      profession: "Profession",
      icon: (
        <i class="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
      ),
      img: "../assets/img/testimonial-3.jpg",
    },
  ];
  
  export const roomItems = [
    {
      img: "../assets/img/room-1.jpg",
      price: "Rs.10350/night",
      name: "THE MAGESTIC CROWN",
      star: [
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
      ],
      description:"Room : 1 King Bed, 1 Sofa Cum Bed with 5 people can stay ",
      yellowbtn: "View Detail",
      darkbtn: "book now",
    },
  
    {
      img: "../assets/img/room-2.jpg",
      price: "Rs.5000/night",
      name: "THE POD",
      star: [
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
      ],
      description:
        "Room : 1 bed with 3 people can stay | three pods available  ",
      yellowbtn: "View Detail",
      darkbtn: "book now",
    },
    {
      img: "../assets/img/room-3.jpg",
      price: "Rs.4000/night",
      name: "THE FRAME",
      star: [
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
      ],
      description:
        "Room : 1 bed with 2 people stay | Special for sunrise view ",
      yellowbtn: "View Detail",
      darkbtn: "book now",
    },
  ];
  
  export const facility = [
    {
      icon: <i class="fa fa-bed text-primary me-2"></i>,
      quantity: 3,
      facility: "bed",
    },
    {
      icon: <i class="fa fa-bath text-primary me-2"></i>,
      quantity: 2,
      facility: "bath",
    },
    {
      icon: <i class="fa fa-wifi text-primary me-2"></i>,
      facility: "Wifi",
    },
  ];