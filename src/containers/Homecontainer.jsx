import { connect } from "react-redux";
import Home from "../components/Home";
import addTocart from "../Service/Action/Actions";

const mapStateToProps=state=>({

})
const mapDispatchToProps=dispatch=>({
    addTocartHandler:data=>dispatch(addTocart(data))
})
export default connect(mapStateToProps,mapDispatchToProps)(Home)
// export default Home;