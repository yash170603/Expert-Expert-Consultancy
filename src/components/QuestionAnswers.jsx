import  React from "react";
import { motion } from "framer-motion";

 

const qaData = [
    {
        "question": "What is the age limit for NEET UG 2022?",
        "answer": "According to NMC & DCI, lower age limit – 17 years on or before 31 December of the year of admission or they have been born on or before 31/12/2005. On meeting held on 21 October 2021, NMC has decided that there should be NO age Limit."
      },
      {
        "question": "How many Rounds are in Counselling?",
        "answer": "4 Round. Round 1, Round 2, MOPUP Round, Stray Round."
      },
      {
        "question": "How many Institutes Participate in MCC?",
        "answer": "All India Quota (15%), Deemed Universities, Central Universities (Delhi University, Jamia Milia Islamia, Central Universities under MoHFW-VMMC & SJH, ABVIMS& RML, ESIC Dental), Aligarh Muslim University, Banaras Hindu University, AIIMS, JIPMER, AFMC."
      },
      {
        "question": "How much fees I have to spend on MCC Counselling?",
        "answer": "For Deemed Universities: Non-Refundable Registration fee: -Rs. 5000/- (same for all candidates) Refundable Security amount: -Rs. 2, 00,000/-. For Govt. Universities: Non-Refundable Registration fee: -Rs. 1000/- for UR candidates & Rs. 500/- For SC/ ST/ OBC/ PH candidates. Refundable security amount: - Rs.10,000/- for UR candidates &Rs. 5,000/- for SC/ST/OBC/PH."
      },
      {
        "question": "How much fee I have to pay in Deemed University Counselling?",
        "answer": "For Deemed Universities: Non-Refundable Registration fee: -Rs. 5000/- (same for all candidates) Refundable Security amount: -Rs. 2, 00,000/- e.g. Any candidate opting for Deemed University will have to pay Rs 5000/- Non-Refundable fee + Rs 2,00,000/- Refundable security amount at the time of Registration."
      },
      {
        "question": "How much fee I have to pay in Govt. University Counselling?",
        "answer": "For Govt. Universities: Non-Refundable Registration fee: -Rs. 1000/- for UR candidates & Rs. 500/- For SC/ ST/ OBC/ PH candidates. Refundable security amount: - Rs.10,000/- for UR candidates &Rs. 5,000/- for SC/ST/OBC/PH."
      },
      {
        "question": "If I have to opt for Govt. & Deemed University both. Do I have to pay the registration fee & security fee for both?",
        "answer": "No. As per the policy, the candidate has to pay only the higher fee. In this case the candidate will have to pay fee for Deemed University i.e., Rs. 5000/- (counselling/registration) plus Rs. 2,00,000/- (security amount)."
      },
      {
        "question": "When & Where the Security Deposit will be refunded?",
        "answer": "Refund process starts after 2 months of counselling finish. It will be refunded in the same account from which you have done the payment."
      },
      {
        "question": "If I got a seat in MBBS in Round 1 of MCC Counselling and I don't want to join that college. Can I leave it without forfeited my security deposit?",
        "answer": "Yes. The first Round is Free Exit."
      },
      {
        "question": "What is the mode for payment in MCC Counselling?",
        "answer": "For Deemed Universities – Net Banking/ Card/ UPI. For Govt. Universities – Net Banking."
      },
      {
        "question": "What is the Conversion Policy in MCC Counselling for MBBS?",
        "answer": "CONVERSION ALGORITHM: 1. ST (PwD) - ST, 2. SC (PwD) - SC, 3. UR (PwD) - UR, 4. OBC(PwD) - OBC, 5. ST - SC, 6. SC - UR, 7. EWS - UR, 8. NRI - UR"
      },
      {
        "question": "If I got a seat in Round 2 in MCC Counselling. But I do not want to join it. So, can I leave the seat? And what if I want to participate again in Mop Up Round. Can I do that?",
        "answer": "Yes. If you get a seat in Round 2 of MCC Counselling and do not want to join it. You can leave the seat. Your security money will be forfeited. And if you want to again participate in MCC Counselling in Mop Up Round, you can do that. You have to do fresh registration in Mop up Round."
      },
      {
        "question": "Do I have to submit fresh choices in every round in MCC Counselling?",
        "answer": "Yes."
      },
      {
        "question": "If I opt to participate in second round of counselling whether my allotted seat (of first round) will be cancelled?",
        "answer": "In case you are not allotted any seat in the second round, you will retain earlier allotted seat in Round 1. However, on up-gradation of a seat in second round, the earlier allotted seat in Round 1 will automatically be cancelled and allotted to another candidate."
      },
      {
        "question": "If I get an up-graded seat during second round, can I join that college directly?",
        "answer": "No, you will have to get online generated relieving letter from the earlier institute/ college (from MCC software - will be given by the college authority), before you join the next college / institution."
      },
      {
        "question": "If I lock my choices and later, I want to modify/ edit my choices, is it possible?",
        "answer": "Once candidate lock the choices it is not possible to unlock the software from MCC end. Hence, candidate is advised to check all choices before locking."
      },
      {
        "question": "In case I get an upgraded seat but in the same college, because of change of category, do I have to take admission on the allotted seat again?",
        "answer": "Yes, you have to get a relieving letter generated on-line for the earlier seat and then get an admission letter again generated on-line for the upgraded category seat from the concerned institution."
      },
      {
        "question": "What to do If by mistake I had opted for Deemed Universities seats when I wanted to opt only for All India Quota (AIQ). How do I correct it?",
        "answer": "There is a reset initialization option at registration page where candidate can reset the previous filled quota choice and fill the particular again and then proceed for registration. This facility is provided only once."
      },
      {
        "question": "Whether Up-gradation is allowed from 2nd round counselling to Mop-up Round counselling?",
        "answer": "No, Up-gradation is not allowed once a candidate joins a seat allotted in Round II of AIQ/Deemed/ Central Universities/AIIMS/JIPMER/Nursing and the candidate will not be allowed to vacate the seat."
      },
      {
        "question": "Who are Eligible for Stray Vacancy Round?",
        "answer": "All Registered Candidates except: a) Candidates who joined the allotted seat in Round II, b) Candidates allotted a seat in Mop Up Round and NOT REPORTED, c) Candidates joined a seat in Mop Up Round of MCC."
      },
      {
        "question": "Will there be any Fresh Registration for Stray Vacancy Round?",
        "answer": "No, there will be no Fresh Registration for Stray vacancy Round."
      },
      {
        "question": "Whether I am eligible for State Quota if allotted a seat in IInd Round of DGHS?",
        "answer": "If a candidate has been allotted a seat in Round II but not reported at the allotted Institute, he/she can exit with Forfeiture of Fees. However, once the candidate joins a seat allotted in IInd Round, he/she will not be eligible for any other round of Counselling including State Counselling."
      },
      {
        "question": "How much time will I be given to join the allotted college?",
        "answer": "Candidates allotted seats will be required to join the allotted college/course within stipulated time which is mentioned in counselling schedule. If candidate fails to join within stipulated time, the allotted seat will be cancelled."
      },
      {
        "question": "In case I have Birth Certificate / Caste Certificate/ other certificate(s) in regional language, will it be acceptable?",
        "answer": "Certificates issued by the competent authority on standard format, should be in English or Hindi language. Candidates are advised to carry certified (attested) Copy of English version of the original certificate, in case certificate issued is in other than English language."
      },
      {
        "question": "If there is discrepancy in spelling of name in documents and application form, what do I do?",
        "answer": "If there is discrepancy in spelling of name in documents, candidate must carry proof that the documents belong to same person, in the form of an affidavit."
      },
      {
        "question": "What if I do not have my Original Documents with me at the time of joining?",
        "answer": "Admission is provisional subject to physical verification of documents by the allotted college authorities. Candidates who have deposited their original documents with any other Institute will not be allowed to take admission."
      },
      {
        "question": "What happens if the candidate makes more than one payment for the same Roll#?",
        "answer": "Candidate can approach the Financial Custodian after 15 days of closing of Registration Window. The Financial custodian will refund the excess payment, deducting 50% of the Regn. Fees or Rs.500/whichever is less towards Admn. Expenses."
      },
      {
        "question": "What is MCC Call Centre Number?",
        "answer": "MCC CALL CENTRE: Phone No.: 0120-4073500 TOLL FREE NUMBER: 1800 102 7637"
      },
      {
        "question": "Is there any restriction for filling up number of choices of Institution?",
        "answer": "No, you can give as many choices as you wish during online choice filling. Choices should be in order of candidates' preference."
      },
      {
        "question": "Is it necessary to fill up the choices and lock the choices in MCC Counselling to get seat allotted?",
        "answer": "After online registration, you have to fill in choice of Institutions/colleges/courses in order of preference. If you don't register and fill in choices during registration period, you will not be allotted any seat."
      },
      {
        "question": "What is MCC Counselling website?",
        "answer": "www.mcc.nic.in"
      },
      {
        "question": "What is Andhra Pradesh Counselling website?",
        "answer": "http://drntruhs.in/"
      },
      {
        "question": "What is the Registration fee in Andhra Pradesh Counselling?",
        "answer": "OC/BC - Rs.2950/- (Rs.2500/- + Rs.450/- (GST @ 18 %) Bank charges extra SC/ST - Rs.2360/- (Rs.2000 + Rs.360/- (GST @ 18 %) Bank charges extra Fee shall be paid online through Debit Card/ Credit Card or Net Banking."
      },
      {
        "question": "Can I use Mobile or Tablets to apply in Counselling registration?",
        "answer": "No. It would be better if you use Laptop or Computer for registration in counselling process. Many websites are not Mobile friendly."
      },
      {
        "question": "What is a Merit List?",
        "answer": "The Provisional Merit Position of the candidates those who have applied through online in response to the notification issued by the Counselling Committee for seats into MBBS/BDS determined by NEET UG Scores of the latest year after verification of uploaded certificates."
      },
      {
        "question": "What is an allotment list?",
        "answer": "An Allotment list of the candidates those who got allotted in the particular seat of the college as per their NEET Rank, Category, Domicile and other eligibility conditions."
      },
      {
        "question": "How many MBBS Colleges are in Andhra Pradesh?",
        "answer": "Total MBBS Colleges - 31, Government Colleges – 13, Private Colleges - 18"
      },
      {
        "question": "How may MBBS Seats are in Andhra Pradesh?",
        "answer": "Total MBBS Seats - 5335, Government Seats – 2485, Private Seats - 2850"
      },
      {
        "question": "How many BDS Colleges are in Andhra Pradesh?",
        "answer": "Total BDS Colleges - 16, Government Colleges – 2, Private Colleges - 14"
      },
      {
        "question": "How may BDS Seats are in Andhra Pradesh?",
        "answer": "Total BDS Seats - 1440, Government Seats – 140, Private Seats - 1300"
      },
      {
        "question": "Do I have to Fill choice filling in every round of Andhra Pradesh Counselling?",
        "answer": "No. In Andhra Pradesh Counselling, there is only one time web options available. Only if a new college is added then you can fill that choice again."
      },
      {
        "question": "Is there any security deposit in Andhra Pradesh Counselling?",
        "answer": "No. There is no security Deposit in Andhra Pradesh Counselling. You only have to pay the registration fee to participate in the counselling procedure."
      },
      {
        "question": "What is Arunachal Pradesh Counselling website?",
        "answer": "http://apdhte.nic.in/"
      },
      {
        "question": "What is the state eligibility condition to participate in Arunachal Pradesh Counselling?",
        "answer": "The children of Arunachal Pradesh Scheduled Tribe (APST), children of non-APST employees of the State Government, All India Services (AIS), the Central Government & the Central Public Sector Undertakings serving in Arunachal Pradesh and all the others residing in Arunachal Pradesh for the last 3 years or more and who have passed Class XII from any of the schools within Arunachal Pradesh and who have appeared the NEET 2021."
      },
      {
        "question": "What is the Registration fee in Arunachal Pradesh Counselling?",
        "answer": "Category – I (APST) - Rs. 500/-, Category – II (Non-APST) - Rs. 700/-"
      },
      {
        "question": "How seats are distributed in Arunachal Pradesh for MBBS Counselling?",
        "answer": "Regional seats: 100% Cat-I, 0% Cat-II. MBBS & BDS seats from Govt. of India: 80% Cat-I, 20% Cat-II. One seat reserved for PWD candidate under Cat-I."
      },
      {
        "question": "Is there any fresh registration in second round of Arunachal Pradesh Counselling?",
        "answer": "No. There is no fresh registration in second round of Arunachal Pradesh Counselling."
      },
      {
        "question": "Do I have to Fill choice filling in every round of Arunachal Pradesh Counselling?",
        "answer": "No. In Arunachal Pradesh Counselling, there is only one time web options available. Only if a new college is added then you can fill that choice again."
      }  
];

const QAList = () => {
  return (
    <div className="w-full mx-auto p-6 space-y-4 bg-blue-950  shadow-xl overflow-y-auto h-screen">
      <h1 className="text-3xl font-bold text-white mb-6 text-center">Question Answers!</h1>
      <div className="space-y-4">
        {qaData.map((item, index) => (
          <motion.div
            key={index}
            className="border-l-4 border-yellow-600 bg-blue-900 rounded-lg p-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <h2 className="text-lg font-medium text-yellow-400">{item.question}</h2>
            <p className="text-white mt-2">{item.answer}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default QAList;
