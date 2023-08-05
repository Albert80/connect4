/*********************
 ***Token component***
 **********************/

import { defaultCellColor, playerColor } from "../../utils/constants";


export default function Token(props) {
    /**********************************
    // Color for every single player //
    **********************************/
    var color = playerColor[props.cell] || defaultCellColor;

    /***********************
    //Custom Style to play//
    ************************/
    var style = {
      backgroundColor: color,
      border: "1px solid black",
      borderRadius: "100%",
      paddingTop: "98%"
    };
  
    //
    // Return to render >
    //
    return <div style={style}> </div>;
};