import MobileHome from './MobileHome'
import DesktopHome from './DesktopHome'
import React from "react";
import MediaQuery from "react-responsive";
import {graphql, useStaticQuery} from 'gatsby'


export default function Home() {
    const data = useStaticQuery(graphql`
    query {
        allFoundationFoodNutritionFactsJson {
        nodes{
          hap_name,
          category
        }
      }
    }
`)
    console.log(data)
    return <>
        <MediaQuery maxWidth={767}><MobileHome/></MediaQuery>
        <MediaQuery minWidth={768}><DesktopHome/></MediaQuery>
    </>
}
