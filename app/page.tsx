import Homepage from "./Homepage";
import Navbar from "./Navbar";
import Categories from "./Categories";
import ForYou from "./ForYou";
import Footer from "./Footer";

//Function for fetching data from API

const page = () => {
  return (
    <div>
      <Navbar />
      <Homepage />
      <Categories />
      {/* @ts-ignore */}
      <ForYou />
      <Footer />
    </div>
  );
};

export default page;
