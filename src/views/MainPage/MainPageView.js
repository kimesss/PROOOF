import {ToastContainer} from "react-toastify";
import PortfolioContainer from "../../PortfolioContainer/PortfolioContainer";
import Fotter from "../../PortfolioContainer/Footer/Fotter";

 const MainPageView = () =>{
    return(
        <div className="App">
            <ToastContainer></ToastContainer>
            <PortfolioContainer></PortfolioContainer>
            <Fotter></Fotter>
        </div>
    )
}
export default MainPageView