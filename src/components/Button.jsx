export default function Button() {

    const btnStyle = {}

    // without parameters () => handleClick()
    const handleClick = () => {
        console.log('Button clicked')
    }

    // with parameters () => handleClick2('John')
    const handleClick2 = (name) => {
        console.log(`Hello ${name}`)
    }

    // event object (e) => handleClick3(e)
    const handleClick3 = (e) => {
        e.target.textContent = "Clicked"
    }

    return (
        <div>
            <button onClick={(e) => handleClick3(e)} className={btnStyle}>Click Me</button>
        </div>
    )
} 