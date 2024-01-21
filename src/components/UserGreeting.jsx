// Props
export default function UserGreeting(props) {

    return( 
        props.isLoggedIn ? <h1>hello {props.username}</h1> : <p>log in to continue</p>
    )
}