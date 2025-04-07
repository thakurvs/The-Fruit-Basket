import React, {useRef} from 'react'
import Apple from "../../assets/fruits/apple.png";
import Orange from "../../assets/fruits/orange.png";
import Avocado from "../../assets/fruits/avocado.png";
import Cherry from "../../assets/fruits/cherry.png";
import Apricot from "../../assets/fruits/Apricot.jpg";
import Banana from "../../assets/fruits/Banana.jpg";
import Melon from "../../assets/fruits/Melon.jpg";
import Papaya from "../../assets/fruits/Papaya.jpg";
import Pineapple from "../../assets/fruits/Pineapple.jpg";
import Pomegranate from "../../assets/fruits/Pomegranate.jpg";
import Strawberry from "../../assets/fruits/Strawberry.jpg";
import Watermelon from "../../assets/fruits/Watermelon.jpg";
import { FadeLeft } from "../../utility/animation"
import {motion} from "framer-motion"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import arrow icons

const MenusData = [
    { id: 1, title: "Fresh Red Apples", price: "$3.99", img: Apple, delay: 0.3, },
    { id: 2, title: "Fresh Oranges", price: "$4.99", img: Orange, delay: 0.6, },
    { id: 3, title: "Fresh Avocado", price: "$5.99", img: Avocado, delay: 0.9, },
    { id: 4, title: "Fresh Cherries", price: "$2.99", img: Cherry, delay: 1.2, },
    { id: 5, title: "Fresh Apricots", price: "$5.99", img: Apricot, delay: 1.5, },
    { id: 6, title: "Fresh Bananas", price: "$2.99", img: Banana, delay: 1.8, },
    { id: 7, title: "Fresh Melons", price: "$4.99", img: Melon, delay: 2.1, },
    { id: 8, title: "Fresh Papayas", price: "$3.99", img: Papaya, delay: 2.4, },
    // { id: 9, title: "Fresh Pineapples", price: "$5.99", img: Pineapple },
    // { id: 10, title: "Fresh Pomegranates", price: "$4.99", img: Pomegranate },
    // { id: 11, title: "Fresh Strawberries", price: "$3.99", img: Strawberry },
    // { id: 12, title: "Fresh Watermelons", price: "$5.99", img: Watermelon },
];

function Header() {
    return (
      <motion.h1
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className=" uppercase text-2xl font-bold text-left pb-10">
        Our Menus
      </motion.h1>
    );
}

const MenuCard = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 space-y-4">
            {MenusData.map((menu) => (
            <motion.div
                initial="hidden"
                whileInView={"visible"}
                variants={FadeLeft(menu.delay)}
                // animate="visible"
                whileHover={{ scale: 1.1 }}
                key={menu.id}
                className="bg-white rounded-3xl px-4
                        py-2 shadow-[0_0_22px_0_rgba(0,0,0,0.15)] flex flex-row
                        justify-around items-center gap-3">
                <img src={menu.img} alt="fruit" className="w-[60px] object-cover mb-4 scale-110
                        transform -translate-y-6" />
                <div>
                    <h1 className="text-lg font-semibold">{menu.title}</h1>
                    <p className="text-lg font-semibold text-secondary">{menu.price}</p>
                </div>
            </motion.div>
            ))}
        </div>
    );
};

function Menus() {
  return (
    <section  className="py-20">
        <div className="container">
          <Header />
          <MenuCard />
        </div>
    </section>
  )
}

export default Menus;