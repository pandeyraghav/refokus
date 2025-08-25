import React, { useState } from 'react'
import Product from './Product'
import {motion} from 'framer-motion'

function Products() {
    var products = [
      {
        title: "arqitel",
        description:
          "Arqu Executive and its employees continue to receive orders for new products and services that meet the evolving needs of their clients.",
        live: true,
        case: false,
      },
      {
        title: "ttr",
        description:
          "Arqu Executive and its employees continue to receive orders for new products and services that meet the evolving needs of their clients.",
        live: true,
        case: false,
      },
      {
        title: "yir 2022",
        description:
          "Arqu Executive and its employees continue to receive orders for new products and services that meet the evolving needs of their clients.",
        live: true,
        case: false,
      },
      {
        title: "yahoo!",
        description:
          "Arqu Executive and its employees continue to receive orders for new products and services that meet the evolving needs of their clients.",
        live: true,
        case: true,
      },
      {
        title: "cula",
        description:
          "Arqu Executive and its employees continue to receive orders for new products and services that meet the evolving needs of their clients.",
        live: true,
        case: true,
      },
      {
        title: "rainfall",
        description:
          "Arqu Executive and its employees continue to receive orders for new products and services that meet the evolving needs of their clients.",
        live: true,
        case: true,
      },
    ];

    const [pos, setPos] = useState(0);
    const mover = (val)=>{
      setPos(val*23)
    }

  return (
    <div className="mt-32 relative">
      {products.map((val, index) => (
        <Product key={index} val={val} mover={mover} count={index} />
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ y: pos }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className=" window absolute w-[32rem] h-[23rem] left-[44%] -translate-x-[50%] bg-white overflow-hidden"
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-400 "
          >
            <video
              src="../arqitel-vdo.webm"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-300 "
          >
            <video
              src="../ttr-vdo.webm"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-200 "
          >
            <video
              src="../yir2022-vdo.webm"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-100 "
          >
            <video
              src="../yahoo-vdo.webm"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-100 "
          >
            <video
              src="../cula-vdo.webm"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-100 "
          >
            <video
              src="../rainfall-vdo.webm"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products
