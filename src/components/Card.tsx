import { StyledCard } from "./styles/StyledCard";
interface itemProp {
  item: {
    id: number;
    title: string;
    body: string;
    image: string;
  };
}
export default function Card({item:{ id, title, body, image }}: itemProp) {
  return (
    <StyledCard layout={id % 2 === 0 && "row-reverse"}>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>

      <div>
        <img src={`/images/${image}`} alt="" />
      </div>
    </StyledCard>
  );
}
