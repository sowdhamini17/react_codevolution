import React from "react"
import Lr1 from "./Lr1"

const Listrendering=()=>{
    const arr1=["brue","simpolo","rambo"]
    const arrList=arr1.map(arr=><h2>{arr}</h2>)
    const persons=[{
        id:1,
        name:"jack",
        role:"swe"},
        {
            id:2,
            name:"jimmy",
            role:"sde"},

            {
                id:3,
                name:"bruce",
                role:"jde"}
    ]
    const personList=persons.map(person=><Lr1 person={person}/>)
    return(
        <div>
        {arrList}
        {personList}
        </div>
    )
}
export default Listrendering