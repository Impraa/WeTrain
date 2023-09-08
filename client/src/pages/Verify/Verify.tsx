import { useParams } from "react-router-dom";
import "./Verify.scss";

export const Verify = () => {
  const { id } = useParams();
  console.log(id);

  return <div>Verify</div>;
};
