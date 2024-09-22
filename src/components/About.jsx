import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 990,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="strength"
          className="bg-white w-20 h-20 object-contain rounded-full"
        />

        <h3 className="text-white text-[17px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>私の強み</p>
        <h2 className={styles.sectionHeadText}>「タスクをやり遂げる力」 </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-[1100px] leading-[30px]"
      >
        私は何事に対しても計画性、主体性をもち全力でタスクに向き合い、最後までやり切る力があります。
        <br />
        やり遂げた成果としましては、大きく分けて3つあります。
        <br />
        <br />
        ・大学休学期間中のフィリピン留学で定めた6ヶ月で目標TOEIC500点スコアアップを達成したこと。
        <br />
        ・大学卒業後にバケットリストの1つでもあった英語圏の訓練学校受験に合格したこと。
        <br />
        ・登録者数50万人を超える英語系ユーチューバーが開催した、数百人規模のイベントのコンペティションで個人優勝したこと。
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
