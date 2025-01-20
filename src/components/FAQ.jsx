import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer/Footer';

const faqs = [
  {
    question: "What is Medical Admission Counseling?",
    answer: "Medical Admission Counseling is the process of guiding the client in making the right decision on choice of best college in lowest fees. The admission to a medical college is done through process of counseling which is based on candidate's choice filling based on NEET Rank, Domicile, Category, Fees Budget. A student may not know all the important information about counseling process for all the colleges in India. Moreover, there are different scenarios which effect the admission process. Expert Educational Consultancy will guide you through the counseling process to secure admission in best college in lowest fee."
  },
  {
    question: "What is the basis of medical UG admission?",
    answer: "The Medical UG admission is done on the basis of NEET Rank, Category, Domicile and Fees budget. There are 700 MBBS Colleges in India and in which there are 390 Government Colleges with 56480 Seats and 316 Private Colleges with 52665 Seats. (As on 26-03-2024). There are multiple quotas and admission criteria of colleges in different states and it is practically impossible for a student to have all the knowledge of those quotas and criteria. Expert Educational Consultancy will help you with more than 28 years of expertise in this field."
  },
  {
    question: "Can I take admission on my own? Why do I need an admission counselor?",
    answer: "Yes, You can. If your NEET Rank is very good (>650) then you can secure admission in college of your choice because you will rank top in counseling cut off list however as the NEET Rank gets lower, the admission to the choicest college becomes a matter of strategy decided on the basis of choice filling. If you fill in the right choice of college, you can get the admission in best college with lowest fees budget. If you don't fill the right choice, you may lose seat in dream college and/or pay higher fees. Expert Educational Consultancy will help you make the right choices to ensure you get the admission in best college in lowest fees. On the extreme case, student may lose its security deposit in some colleges due to counseling process which may lead to financial loss. Expert Educational Consultancy will help you save those losses by guiding you through the admission counseling process."
  },
  {
    question: "What will Expert Educational Consultancy do if I enroll for their services?",
    answer: "Expert Educational Consultancy will ensure that you get all the required information regarding college forms, last dates, counseling schedule and fees deposit dates. Expert Educational Consultancy will guide you in choosing the right forms to be filled and right choices to be entered for admission counseling. Expert Educational Consultancy will help you save time, money and hassles on admission counseling. There are many instances wherein candidate's admission chances are impacted by environmental influences. Expert Educational Consultancy has awareness of these variables to help the client get admission in best possible college in lowest fees. Expert Educational Consultancy will help save you money as well. If you fill in the form of a college where there is no chance of your admission, then you will waste money on form filling as well as hassle and anxiety of counseling process."
  },
  {
    question: "Will Expert Educational Consultancy offer any guaranteed admission?",
    answer: "No. Admission to medical colleges happen through a government mandated counseling process. Expert Educational Consultancy or for that matter, NO other person or agency can influence this process. Expert Educational Consultancy doesn't believe in making any false claim in this regard as we are in this profession for last over 26 years. Expert Educational Consultancy will help you through their expertise in the defined admission counseling process."
  },
  {
    question: "Why there is difference in consultancy fees of Expert Educational Consultancy? Others charge flat fees",
    answer: "Expert Educational Consultancy offers the most honest and transparent consultancy fees structure which is based on NEET Rank, Fees budget and Category. The counseling fees is defined on the basis of time and efforts involved in securing the admission for candidate. As you might have observed, if the student's NEET Rank is high, our consultancy fees is very less (In fact it is free if the candidate has scored >630 marks in NEET) because time and efforts involved in securing the admission for that candidate will be much less as compared to candidate with lower NEET Rank. That's the reason Expert Educational Consultancy offers the most affordable and transparent fees structure"
  },
  {
    question: "How shall I pay the fees? Is the consultancy fee refundable in case I don't get admission?",
    answer: "Expert Educational Consultancy's professional fees shall be payable in advance through cash/cheque/online bank transfer. You are most welcome to visit Expert Educational Consultancy office to get help on payment of fees. This fee is not refundable except for NRI/Management quota fees which may be refunded in case Expert Educational Consultancy fails to get a seat for the candidate. Please read the service conditions for more details."
  },
  {
    question: "I want to know some information about admission criteria and process. Can Expert Educational Consultancy provide me information only without charging any consultancy fees?",
    answer: "Expert Educational Consultancy strongly believe that medical admission counseling requires intelligence not the information. In fact, over last 26 years we have seen many people who suffered because they could not convert information into intelligence. That's the reason we as policy don't want to misguide or confuse students with information. Moreover, Google has made the information freely available to all, one can always get information from internet. Expert Educational Consultancy however shares the right information through virtual webinars. You can attend those webinars to get authentic information. We believe that your concern shall be securing admission for the child in best college in lowest fees and Expert Educational Consultancy will guide you for the admission through their acquired expertise."
  },
  {
    question: "How can I trust Expert Educational Consultancy?",
    answer: "Expert Educational Consultancy is a professionally managed company which is owned by Mr. Shamsher Rana who is an engineer by education and certified admission counselor by profession. Expert Educational Consultancy is operating in this profession for over 26 years now through a permanent office in Prashant Vihar, New Delhi. Expert Educational Consultancy has offices in Delhi, Haryana, Rajasthan, Punjab, J&K, Maharashtra, Karnataka, Bihar, Jharkhand with more than 60 employees to guide and help students during the process of admission counseling. Over 26 years, Expert Educational Consultancy has helped more than 10,500 students get admission in their dream colleges. That's the reason, Mr. Shamsher Rana has reference/ past client in practically every district of India. His reputation can be confirmed by contacting the past clients/references which can be furnished on request."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 via-[#1B224B] to-blue-950">
      <Navbar />
      
      <main className="container mx-auto px-4 py-24">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-12"
        >
          <span className="relative inline-block">
          <span className="text-yellow-400">FAQs</span>
          <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></span>
        </span>
        </motion.h1>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 
                         hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-white font-medium pr-8">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-yellow-400" />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-gray-300 text-xs leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;

