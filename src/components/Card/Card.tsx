import { formatDate } from "@/utils/formatDate";
import "./Card.style.scss";

type CardProps = {
  image: string;
  title: string;
  content: string;
  date: string;
  link: string;
};

function Card({ image, title, content, date, link }: CardProps) {
  return (
    <article className="card">
      <a href={link}>
        <div className="card__wrapper">
          <div className="card__image-wrapper">
            <img className="card__image" src={image} alt={title} />
          </div>
          <div className="card__content">
            <h3 className="card__title">{title}</h3>
            <p className="card__description">{content}</p>
            <time className="card__date"dateTime={date}>{formatDate(date)}</time>
          </div>
        </div>
      </a>
    </article>
  );
}

export default Card;
