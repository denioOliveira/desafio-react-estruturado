import "./styles.css";

type Props = {
  name: string;
};

export default function ButtonNextPage({ name }: Props) {
  return <div className="dsc-btn-next-page">{name}</div>;
}
