/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";
import bokerImg from "../assets/power.svg";
import serviceImg from "../assets/graph.svg";
import shiperImg from "../assets/gtg.svg";
import { Button } from "@material-tailwind/react";

const StaggeredDropDown = ({open,setOpen,selectedOption ,setSelectedOption}:any) => {

  const handleOptionSelect = (option:any) => {
    setSelectedOption(option);
    setOpen(false);
  };

  return (
    <div className=" w-full h-fit flex items-center justify-center">
      <motion.div animate={open ? "open" : "closed"} className="relative w-full">
        <Button
        onPointerEnterCapture={''}
        onPointerLeaveCapture={''}
        placeholder={''}
          onClick={() => setOpen((prev: any) => !prev)}
          className="flex items-center justify-between w-full rounded-full gap-2 px-3 py-3 text-indigo-50 bg-gradient-to-r from-primgradient to-secgradient hover:bg-indigo-500"
        >
          <span className="font-medium text-sm">{selectedOption}</span>
          <motion.span variants={iconVariants}>
            <i className="fa-solid fa-chevron-down"></i>
          </motion.span>
        </Button>

        <motion.ul
          initial={wrapperVariants.closed}
          animate={open ? "open" : "closed"}
          variants={wrapperVariants}
          style={{ originY: "top", translateX: "-50%" }}
          className="flex flex-col gap-2 p-2 rounded-2xl bg-gray-800 text-white shadow-xl absolute top-[120%] left-[50%] w-full overflow-hidden"
        >
          <Option
            text="Broker"
            Icon={bokerImg}
            handleOptionSelect={handleOptionSelect}
          />
          <Option
            text="Carrier"
            Icon={serviceImg}
            handleOptionSelect={handleOptionSelect}
          />
          <Option
            text="Shipper"
            Icon={shiperImg}
            handleOptionSelect={handleOptionSelect}
          />
        </motion.ul>
      </motion.div>
    </div>
  );
};

const Option = ({ text, Icon, handleOptionSelect }:any) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => handleOptionSelect(text)}
      className="flex items-center gap-2 w-full h-fit p-2 text-xs font-medium whitespace-nowrap rounded-xl duration-300 transition-all ease-linear hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 cursor-pointer"
    >
      <motion.span variants={actionIconVariants}>
        <img src={Icon} alt="icon" className="h-8 w-8 object-cover" />
      </motion.span>
      <span>{text}</span>
    </motion.li>
  );
};

export default StaggeredDropDown;

// Animation Variants
const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.01,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.01,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};
