import React from "react";
import "./connect.css";
import insta from "../resources/icons8-instagram.svg";
import twt from "../resources/icons8-twitter-96.svg";
const connect = () => {
  return (
    <div className="ConnectCon">
      <div className="ContentCon">
        <h1>Connect with Developer</h1>
      </div>
      <div className="DevInfoCon">
        <div className="DevCon">
          <div>
            <h2 id="headOne">#Developer</h2>
          </div>
          <div className="infoCon">
            <h2> Nishchit Malasana</h2>
          </div>
          <h2 id="head">#Working On</h2>
          <div className="workingOn">
            <p>ReactJs</p>
            <p>NodeJs</p>
            <p>Solidity</p>
            <p>SmartContract</p>
            <p>Blockchain</p>
            <p>Web3</p>
          </div>

          <div>
            <h2 id="headOne">#Developer</h2>
          </div>
        
          <div className="socialCon">
            <div className="twitterHandle">
              <a href="https://twitter.com/0xNishchit?t=4nqoDVSYR5Sq2q06ojQFmA&s=09">
                <div className="twtCon">
                  <img src={twt} />
                  <p>@0xNishchit</p>
                </div>
              </a>
            </div>
            <div className="twitterHandle">
              <a href="/">
                <div className="twtCon">
                  <img src={insta} />
                  <p>@0xNishchit</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect;
