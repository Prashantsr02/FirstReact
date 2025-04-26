import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props)
    } 
    render(){

        const{name,place}=this.props;
        
        return(
            
            <div>
                <h1>{name}</h1>
                <h2>{place}</h2>
                <h3>Prashantsr02</h3>
            </div>
        )
    }    
}
export default UserClass;