import React from "react";
import Head from "next/head";
import Footer from "../components/Footer";
import Nav from "../components/navbar/NavLayout";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import Image from "next/legacy/image";
import akj from "../public/team/akj.jpg";
import prof from "../public/team/rajnesh_tyagi.png";
import vp from "../public/team/vp.jpg";
import avp from "../public/team/amitavp.jpg";
import sr from "../public/team/sr.jpeg";
import rieu from "../public/team/rieu.jpeg";
import ev from "../public/team/ev.jpeg";
import wnb from "../public/team/wnb.jpg";
import tqb from "../public/team/tqb.jpeg";
import Amit from "../public/team/2022-2023/Amit.jpg";
import Tanaya from "../public/team/2022-2023/Tanaya.jpg";
import Tanya from "../public/team/2022-2023/Tanya.jpeg";
import Parth from "../public/team/2022-2023/Parth.jpg";
import Ashwat from "../public/team/2022-2023/Ashwat.jpg";
import Divyansh from "../public/team/2022-2023/Divyansh.jpg";
import Shreya from "../public/team/2022-2023/Shreya.jpg";
import Vanshika from "../public/team/2022-2023/Vanshika.jpg";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionSummary } from "@mui/material";
import Team22 from "../components/Team22";
import Team23 from "../components/Team23";

const Team = () => {
  return (
    <>
      <Head>
        <title>Team</title>
        <meta name="robots" content="index, follow" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <div
        className="container"
        style={{
          margin: "80px auto",
        }}
      >
        <div className="row">
          <h1
            style={{
              margin: "auto",
              textAlign: "center",
              fontSize: "4rem",
              fontWeight: "bold",
            }}
          >
            The Team
          </h1>
          <h2
            style={{
              fontSize: "1.5rem",
              color: "black",
              textAlign: "center",
            }}
          >
            GET TO KNOW THE TEAM OF E-CELL
          </h2>
        </div>
        <div>
          <h2
            style={{
              fontSize: "2rem",
              color: "black",
              textAlign: "center",
              fontWeight: "bold",
              margin: "90px auto 30px auto",
            }}
          >
            UNDER THE GUIDANCE OF
          </h2>
          <div className="our-team" style={{ margin: "auto" }}>
            <Image src={prof} className="img-responsive" alt="team member" />
            <div className="team-content">
              <h3 className="name">PROF. RAJNESH TYAGI</h3>
              <span className="post">PROF. INCHARGE, E-CELL</span>
            </div>
          </div>
        </div>

        <div className="row">
          <h2
            style={{
              fontSize: "2rem",
              color: "black",
              textAlign: "center",
              fontWeight: "bold",
              margin: "90px auto 30px auto",
            }}
          >
            CORE TEAM MEMBERS
          </h2>
          <Team23 />

          <Team22 />
          <Accordion className="past-team">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h2
                style={{
                  fontSize: "1.4rem",
                  textAlign: "center",
                  width: "100%",
                  fontWeight: "bold",
                }}
              >
                TEAM OF 2021-22
              </h2>
            </AccordionSummary>
            <div className="team-container">
              <div className="our-team">
                <Image src={vp} className="img-responsive" alt="team member" />
                <div className="team-content">
                  <h3 className="name">HARSHIT SHUKLA</h3>
                  <span className="post">VICE PRESIDENT E-CELL</span>
                  <div className="team-social">
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=harshitshukla.eee18@iitbhu.ac.in`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GrMail className="social-icons"></GrMail>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/harshitshuklaiitbhu/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="social-icons"></FaLinkedin>
                    </a>
                    <a
                      href="https://twitter.com/harshit_tw"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter className="social-icons"></FaTwitter>
                    </a>
                  </div>
                </div>
              </div>
              <div className="our-team">
                <Image src={avp} className="img-responsive" alt="team member" />
                <div className="team-content">
                  <h3 className="name">AMIT KUMAR BAHETI</h3>
                  <span className="post">ASSOCIATE VICE PRESIDENT E-CELL</span>
                  <div className="team-social">
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=amit.krbaheti.eee19@iitbhu.ac.in`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GrMail className="social-icons"></GrMail>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/amitkumarbaheti/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="social-icons"></FaLinkedin>
                    </a>
                    <a
                      href="https://twitter.com/amit_baheti_"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter className="social-icons"></FaTwitter>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="team-container-1">
              <div className="our-team">
                <Image src={wnb} className="img-responsive" alt="team member" />
                <div className="team-content">
                  <h3 className="name">AATISHYA SOOD</h3>
                  <span className="post">WEB AND BRANDING HEAD</span>
                  <div className="team-social">
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=aatishya.sood.met19@itbhu.ac.in`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GrMail className="social-icons"></GrMail>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/aatishya-sood-5699081a7"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="social-icons"></FaLinkedin>
                    </a>
                    <a
                      href="https://twitter.com/aatishya?s=09"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter className="social-icons"></FaTwitter>
                    </a>
                  </div>
                </div>
              </div>
              <div className="our-team">
                <Image src={akj} className="img-responsive" alt="team member" />
                <div className="team-content">
                  <h3 className="name">AMIT KUMAR JHA</h3>
                  <span className="post">SAP HEAD</span>
                  <div className="team-social">
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=amit.kumarjha.met19@itbhu.ac.in`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GrMail className="social-icons"></GrMail>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/amit-jha-96022618b"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="social-icons"></FaLinkedin>
                    </a>
                    <a
                      href="https://twitter.com/AmitKum17723914"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter className="social-icons"></FaTwitter>
                    </a>
                  </div>
                </div>
              </div>
              <div className="our-team  ">
                <Image src={tqb} className="img-responsive" alt="team member" />
                <div className="team-content">
                  <h3 className="name">ANSHUL SINGH</h3>
                  <span className="post">STUDENT BODY HEAD, CISCO THINGQ</span>
                  <div className="team-social">
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=anshul.singh.met19@itbhu.ac.in`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GrMail className="social-icons"></GrMail>
                    </a>
                    <a
                      href={`https://www.linkedin.com/in/anshul-singh-b58790197`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="social-icons"></FaLinkedin>
                    </a>
                    <a
                      href="https://twitter.com/AnshulS61107731"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter className="social-icons"></FaTwitter>
                    </a>
                  </div>
                </div>
              </div>
              <div className="our-team ">
                <Image src={ev} className="img-responsive" alt="team member" />
                <div className="team-content">
                  <h3 className="name">ABHISHEK NAVNEET FARDE</h3>
                  <span className="post">EVENTS HEAD</span>
                  <div className="team-social">
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=abhisheknfarde.mec18@itbhu.ac.in`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GrMail className="social-icons"></GrMail>
                    </a>
                    <a
                      href={`https://www.linkedin.com/in/abhishek-farde-95b871194`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="social-icons"></FaLinkedin>
                    </a>
                    <a
                      href={`https://twitter.com/AbhishekFarde?s=09`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter className="social-icons"></FaTwitter>
                    </a>
                  </div>
                </div>
              </div>
              <div className="our-team">
                <Image src={sr} className="img-responsive" alt="team member" />
                <div className="team-content">
                  <h3 className="name">ANMOL GOYAL</h3>
                  <span className="post">STRATEGIC RELATIONS HEAD</span>
                  <div className="team-social">
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=anmol.goyal.civ19@itbhu.ac.in`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GrMail className="social-icons"></GrMail>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/anmol-goyal-324852194"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="social-icons"></FaLinkedin>
                    </a>
                    <a
                      href="https://twitter.com/AnmolGo37120796"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter className="social-icons"></FaTwitter>
                    </a>
                  </div>
                </div>
              </div>
              <div className="our-team  ">
                <Image
                  src={rieu}
                  className="img-responsive"
                  alt="team member"
                />
                <div className="team-content">
                  <h3 className="name">ARSHAD KHAN</h3>
                  <span className="post">RIEU HEAD</span>
                  <div className="team-social">
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=mdarshadkhan.bme18@itbhu.ac.in`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GrMail className="social-icons"></GrMail>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/mohammed-arshad-khan-0b766a191"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="social-icons"></FaLinkedin>
                    </a>
                    <a
                      href="https://twitter.com/mak640477"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter className="social-icons"></FaTwitter>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Accordion>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Team;
