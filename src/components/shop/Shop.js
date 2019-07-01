import React ,{Component}from "react"
import {shop_data}from "./ShopData"
import PreviewCollection from "../previewCollection/PreviewCollection"
class Shop extends Component{
    state={
        collections:shop_data
    }
    render(){
        const {collections}=this.state
        return(
        <div className="shop-page">
            {collections.map(({id, ...collection})=>(
                <PreviewCollection key={id} {...collection}/>
                ))}
        </div>
        )
    }
}

export default Shop