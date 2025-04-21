import {ClassComponent} from react;

class UserClass extends ReactComponent{
    constructor(props){
        super(props)
        this.state={
            count=0,
            count2=1
        };
    } 
    render(){

        const[name,place]=this.props;
        const[count,count2]=this.state;
        return(
            
            <div>
                <button onClick = {()=>{
                    this.setState({
                        count=this.state.count+1,
                        count2=this.state.count2+1,
                    })
                }}/>
                <h3>{count}</h3>
                <h1>{name}</h1>
                <h2>{place}</h2>
                <h3>Prashantsr02</h3>
            </div>
        )
    }    
}