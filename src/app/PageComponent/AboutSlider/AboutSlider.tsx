"use client";
import Image from "next/image";
import { motion, Variants } from "framer-motion"; // اضافه کردن Framer Motion
import styles from "./aboutSlider.module.css";
import TruckImage from "../../../../public/trackImage1.png";
import Express from "./Experess/Express"

export default function TrustSection() {
  // const karshenas 
  const textVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  return (
    <div className={styles.TrustSection}>
      {/* section 1 */}
      <div className={styles.section}>
        <motion.div
          className={styles.sectionDiv}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={textVariants}
        >
          <h1>پرداخت به موقع، تحویل سریع</h1>
          <p>کار جمعه با کیفیت و سرعت بالا</p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={imageVariants}
        >
          <Image
            width={400}
            height={300} 
            className={styles.sectionImage}
            src={TruckImage}
            alt="truck image steel iron"
            priority={false} 
            placeholder="blur"
          />
        </motion.div>
      </div>

      {/* section 2 */}
      <div className={styles.section} dir="ltr">
        <motion.div
          className={styles.sectionDiv}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={textVariants}
        >
          <h1>پرداخت به موقع، <span>تحویل سریع</span></h1>
          <p>کار جمعه با کیفیت و سرعت حالا تست میکنیم کهد بالا</p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={imageVariants}
        >
          <Image
            width={400}
            height={300} 
            className={styles.sectionImage}
            src={TruckImage}
            alt="truck image steel iron"
            priority={false} 
            placeholder="blur" 
          />
        </motion.div>
      </div>

        {/* last section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={imageVariants}
        >
          <Express></Express>
        </motion.div>
    </div>
  );
}