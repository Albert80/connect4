/*********************
 ***Token component***
 **********************/
import { PlayerColors } from "../../utils/constants";
import { TokenProps } from "./tokenProps";


export const Token = ({ playerColor }: TokenProps) => {
    /**********************************
    // Color for every single player //
    **********************************/
    const color = playerColor || PlayerColors.white;

    /***********************
    //Custom Style to play//
    ************************/
    const style = {
        backgroundColor: color,
        border: "1px solid black",
        borderRadius: "100%",
        paddingTop: "98%"
    };

    return <div style={style}> </div>;
};
