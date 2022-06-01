import { writable } from "svelte/store";

export const FeedbackStore = writable([
  {
    id: 1,
    rating: 10,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolor vero sunt iste atque officiis expedita in sequi, soluta aliquam, magnam laudantium hic modi molestias neque numquam animi? Sapiente, eius!",
  },
  {
    id: 2,
    rating: 9,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolor vero sunt iste atque officiis expedita in sequi, soluta aliquam, magnam laudantium hic modi molestias neque numquam animi? Sapiente, eius!",
  },
  {
    id: 3,
    rating: 8,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolor vero sunt iste atque officiis expedita in sequi, soluta aliquam, magnam laudantium hic modi molestias neque numquam animi? Sapiente, eius!",
  },
]);
