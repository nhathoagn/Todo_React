import {connect} from "react-redux";
import {saveTheme} from "../actions/changeThemeAction";
import Footer from "../../layout/Footer";

const mapDispathToProps  = dispathch => ({
    dispathch,
    saveColorTheme: color => dispathch(saveTheme(color)),
});
function mapStateToProps(state) {
    return{
        themeColor: state.color
    };
};
export default connect(mapStateToProps,mapDispathToProps)(Footer);