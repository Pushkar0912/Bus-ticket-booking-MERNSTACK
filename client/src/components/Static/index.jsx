import happyCustomersImg from "../../assets/happy-customer.jpg";
import ticketsImg from "../../assets/tickets.jpg";
import busesImg from "../../assets/buses.svg";
import { Avatar } from "@mui/material";
import { deepOrange, deepPurple, blueGrey, brown, teal, amber } from "@mui/material/colors";
import { StarRateRounded } from "@mui/icons-material";
import "./styles.css";
export const StatsComponent = () => {
  const statsList = [
    {
      img: busesImg,
      stat: "2000",
      desc: "Bus Collection",
    },
    {
      img: happyCustomersImg,
      stat: "20 Million",
      desc: "Happy Customers across india",
    },
    {
      img: ticketsImg,
      stat: "5000",
      desc: "Tickets Booked Everyday",
    },
  ];

  const Stat = ({ img, stat, desc }) => {
    return (
      <div className="stat-item">
        <img src={img} className="stat-img" />
        <span className="stat-heading">{stat} +</span>
        <span>{desc}</span>
      </div>
    );
  };

  return (
    <div className="grid">
      {statsList.map((Obj) => {
        return (
          <Stat key={Obj.stat} img={Obj.img} stat={Obj.stat} desc={Obj.desc} />
        );
      })}
    </div>
  );
};

export const CustomerReviews = () => {
  const reviews = [
    {
      name: "Vatsal Agarwal",
      since: 2018,
      rating: 4.8,
      review: "Awesome travel experience with reserve, excellent staff",
    },
    {
      name: "Vanya Agarwal",
      since: 2018,
      rating: 4.9,
      review: "Amazing service, Always had  best time, with reserve",
    },
    {
      name: "Seema Agarwal",
      since: 2018,
      rating: 4.5,
      review: "Bus was clean and the journey was smooth, reached on time",
    },
  ];
  const ReviewCard = ({ name, since, rating, review }) => {
    const colors = [deepPurple, deepOrange, blueGrey, brown, teal, amber];
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    return (
      <div className="review-card">
        <div className="review-head">
          <Avatar sx={{ bgcolor: randomColor[500], fontWeight: 600 }}>{name[0]}</Avatar>
          <div className="review-name">
            <span className="review-user-name">{name}</span>
            <span style={{fontSize: 11.5}}>Customer since {since}</span>
          </div>
        </div>
        <div className="rating">
          <StarRateRounded sx={{ fontSize: 16 }} />
          <span>{rating}</span>
        </div>
        <div className="review"><span>{review}</span></div>
      </div>
    );
  };
  return (
    <div className="grid">
      {reviews.map((Obj) => {
        return (
          <ReviewCard
            key={Obj.name}
            name={Obj.name}
            since={Obj.since}
            rating={Obj.rating}
            review={Obj.review}
          />
        );
      })}
    </div>
  );
};
