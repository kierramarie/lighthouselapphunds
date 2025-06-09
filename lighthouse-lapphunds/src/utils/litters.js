import { dogPhotos } from "./dogPics";
import TriscuitIkeaPic from "../photos/gallery/triscuit_and_ikea.jpg";

const current = [
    {
        names: "Snowbelle and Likkhu Gaddhi (Blix)",
        photos: [dogPhotos["snowbelle"], dogPhotos["blix"]],
    }

]

const future = [
    {
        names: "Bonnie and Usher",
        photos: [dogPhotos["bonnie"], dogPhotos["usher"]],
        time: "Fall 2025"
    },
    {
        names: "Tally and Blue Skies",
        photos: [dogPhotos["blue"]],
        time: "Winter 2025"
    },
    {
        names: "Birdey (Yutoris Blackbird O'er the Lighthouse) and GCH Rhinestone Cowboy",
        photos: [dogPhotos["birdey"]],
        time: "Spring 2026"
    },
    {
        names: "triscuit and Ikea",
        photos: [TriscuitIkeaPic],
        time: "Spring 2026"
    }
]

export { current, future };