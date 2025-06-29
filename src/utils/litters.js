import { dogPhotos } from "./dogPics";
import TriscuitIkeaPic from "../photos/gallery/triscuit_and_ikea.jpg";

const current = [
    {
        names: "Snowbelle and Blix (Likkhu Gaddhi)",
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
        photos: [dogPhotos["tansy"], dogPhotos["blue"]],
        time: "Winter 2025"
    },
    {
        names: "Birdey (Yutoris Blackbird O'er the Lighthouse) and Ringo (GCH Rhinestone Cowboy)",
        photos: [dogPhotos["birdey"], dogPhotos["ringo"]],
        time: "Spring 2026"
    },
    {
        names: "Triscuit and Ikea",
        photos: [TriscuitIkeaPic],
        time: "Spring 2026"
    }
]

export { current, future };