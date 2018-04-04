import  ColorManipulation from 'material-ui/lib/utils/color-manipulator';
import * as Colors from "material-ui/styles/colors";

export default {
    palette: {
        primary1Color: Colors.cyan500,
        primary2Color: Colors.cyan700,
        primary3Color: Colors.lightBlack,
        accent1Color: Colors.pinkA200,
        accent2Color: Colors.grey100,
        accent3Color: Colors.grey500,
        textColor: Colors.deepPurpleA700,
        alternateTextColor: Colors.white,
        canvasColor: Colors.white,
        borderColor: Colors.grey300,
        disabledColor: ColorManipulation.fade(Colors.darkBlack, 0.3),
        pickerHeaderColor: Colors.cyan500,
    }
};