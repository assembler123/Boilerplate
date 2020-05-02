import React from "react";
const Bye = (props) => {
        console.dir(props)
        return ( < h1 > Bye { props.match.params.name } < /h1>)
        }

        export default Bye;