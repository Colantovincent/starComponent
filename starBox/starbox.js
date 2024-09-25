"use client"
import Star from "../starComponent/star"
import { useState } from "react"
export default function StarBox() {
    const [isVisible, setIsVisible] = useState(false);
    const [rating, setRating] = useState(0);
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (rating > 0) {
            alert("Thank you for giving us a " + rating + "-stars rating");
            //actually send data to the place where it should go, we do a dummy refresh just to show how cool the app is
            window.location.reload();
        } else {
            //used to avoid empty reviews
            alert("Please, give us a valid rating");
        }
    }
    if (isVisible) {
        return (
            <>
            <div id="starScreenSpan" className="flex justify-center align-center fixed top-0 left-0 w-screen h-screen backdrop-blur-sm">
                <div id="ratingBox" className="flex flex-col w-1/4 my-auto shadow-md bg-slate-800 rounded-lg">
                    <div id="top" className="flex bg-slate-700 justify-end p-2 rounded-t-lg">
                        <button className="w-8 h-8 rounded-md bg-slate-600 hover:bg-slate-800 focus:bg-slate-950" onClick={toggleVisibility}>X</button>
                    </div>
                    <hr/>
                    <form action="#" onSubmit={handleSubmit}>
                        <div id="center" className="flex flex-row justify-center m-4 h-32">
                            <Star val={rating} setter={setRating} index={1}/>
                            <Star val={rating} setter={setRating} index={2}/>
                            <Star val={rating} setter={setRating} index={3}/>
                            <Star val={rating} setter={setRating} index={4}/>
                            <Star val={rating} setter={setRating} index={5}/>
                        </div>
                        <hr/>
                        <div id="bottom" className="flex justify-center p-4 bg-slate-700 rounded-b-lg">
                            <button className="px-4 py-1 rounded-xl text-lg bg-slate-600 hover:bg-slate-800 focus:bg-slate-950 " type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            </>
        )
    } else {
        return <button className="w-1/6 h-16 self-center my-auto rounded-lg text-lg bg-slate-700 hover:bg-slate-800 focus:bg-slate-950" onClick={toggleVisibility}>OPEN THE MODAL</button>;
    }
   
}