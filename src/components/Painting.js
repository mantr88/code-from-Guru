import defaultImage from './default.jpg';

export default function Painting(props) {
    const {
        url=defaultImage,
        title,
        profileUrl,
        author, 
        price } = props;
  return(
  <div>
    <img src={url} alt={title} width="480" />
    <h2>{title}</h2>
    <p>
      Автор: <a href={profileUrl}>{author}</a>
    </p>
    <p>Цена: {price} кредитов</p>
    <p>Доступность: заканчивается или есть в наличии</p>
    <button type="button">Добавить в корзину</button>
  </div>
);
};
  