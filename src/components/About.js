import User from User;
const About= () => {
    return(
        <div>
        <h1>About</h1>
        <User name={"Prashant"} place={"Prayagraj"}/>
        <UserClass name={"Prashant(class)"} place={"Prayagraj (class)"} />
        </div>
    )
}

export default About;