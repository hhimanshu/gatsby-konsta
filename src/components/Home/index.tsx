import MobileHome from './MobileHome'
import DesktopHome from './DesktopHome'
import React, {useEffect} from "react";
import MediaQuery from "react-responsive";

export default function Home() {
    return <>
        <MediaQuery maxWidth={767}><MobileHome/></MediaQuery>
        <MediaQuery minWidth={768}><DesktopHome/></MediaQuery>
    </>
}
