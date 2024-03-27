import "./styles.css";

type Props = {
  name: string;
};

export default function ButtonPrimary({ name }: Props) {
  return <div className="dsc-btn dsc-btn-white">{name}</div>;
}
