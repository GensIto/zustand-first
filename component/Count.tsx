import useStore from "../store";
import { FC } from "react";

export const Count: FC = () => {
  const count = useStore((state) => state.count);
  return <div>{count}</div>;
};
