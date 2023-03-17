import React from "react";
import { newsCategory } from "./news/news-categories";
class Header extends React.Component{
    
    state={
        searchItem:""
    }

    handleSearch =(e)=>{
        this.setState({
            searchItem : e.target.value
        })
        console.log(this.state)
    }

    handleKeyPres=(e)=>{

    }

    render(){
        const {category}=this.props
        return(
           <div className="my-4">
                <h1 className="mb-4" style={{fontWeight:'300'}}>Block Buster headlines</h1>
                <input
                     type="search" 
                     className="form-control"
                     placeholder="Type anything & Press enter to search"
                     value={this.state.searchItem}
                     onChange={this.handleSearch}
                     onKeyPress={this.handleKeyPres}
                     />
                <div className="my-4">
                    {newsCategory && Object.keys(newsCategory).map((item) => {
                        if (category===newsCategory[item]) {
                            return(
                                <button className="btn btn-sm btn-warning mx-1">{newsCategory[item]}</button>
                                )
                        }else{
                            return(
                                <button className="btn btn-sm btn-light mx-1">{newsCategory[item]}</button>
                                )
                        }
                        
                    })
                    }
                    
                </div>
           </div>
        )
    }
}
export default Header;