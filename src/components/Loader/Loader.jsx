import s from "./Loader.module.css";
import { MutatingDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className={s.loaderBox}>
      <MutatingDots
        visible={true}
        height="100"
        width="100"
        color="#4fa94d"
        secondaryColor="#4fa94d"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
      />
    </div>
  );
};
export default Loader;
