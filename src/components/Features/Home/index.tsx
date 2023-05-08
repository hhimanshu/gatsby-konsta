import MobileHome from './MobileHome'
import DesktopHome from './DesktopHome'
import React from "react";
import MediaQuery from "react-responsive";
import {graphql, useStaticQuery} from 'gatsby'
import {Foods} from "../../../lib/types";


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
    const foods: Foods = data.allFoundationFoodNutritionFactsJson.nodes.map((node: any) => ({
        name: node.hap_name,
        category: node.category
    }))

    return <>
        <MediaQuery maxWidth={767}><MobileHome foods={foods}/></MediaQuery>
        <MediaQuery minWidth={768}><DesktopHome/></MediaQuery>
    </>
}
