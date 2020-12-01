import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>I'm a certified IoT developer and experienced Solutions Architect, with formal training in software development and machine learning. Together with my team, we bring cybersecurity innovations to life on mobile, web, and IoT platforms.</p>
                    <p>I support mid to large to very large sized businesses with their network and application security. Every day I am coding across multiple languages and platforms to ensure our customers are protected at every layer of the stack.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do</span>
                <h2 className="colorlib-heading">Projects</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Machine Learning using Genomic Data </h3>
                    <p>I completed this project after receiving an AWS Machine Learning Scholarship. I apply SVMs to predict the viral host (what organism a virus infects) based on meta-genomic data from the viral genome. </p>
                    <p><a className="btn btn-primary btn-learn" href="https://www.kaggle.com/superchocolatepain/predict-viral-host-based-on-meta-genomic-features" target="_blank" rel="noopener noreferrer">View Project <i className="icon-briefcase3" /></a></p>

                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Secured Communication and Emergency Alerting from a Smart Speaker</h3>
                    <p>This PoC demonstrates the use of various BlackBerry SDKs to perform secure communications and emergency alerting from a smart speaker (Google Home SDK running on Raspberry Pi 3).</p>
                    <p><a className="btn btn-primary btn-learn" href="https://youtu.be/bZD8ZPFnvx4" target="_blank" rel="noopener noreferrer">View Project <i className="icon-briefcase3" /></a></p>

                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>IoT MaxWell - LTE-M enabled Well Monitoring System</h3>
                    <p>Our team placed 3rd at the prestigious Microsoft Disrupt AI hackathon by building a well monitoring system that is LTE-M enabled. Our sensor connects to Telus' LTE-M network to report data to Azure IoT hub from areas with traditionally poor connectivity (remote, rural, and underground).</p>
                    <p><a className="btn btn-primary btn-learn" href="https://devblog.blackberry.com/en/2019/05/what-we-learned-from-winning-disruptai" target="_blank" rel="noopener noreferrer">View Project <i className="icon-briefcase3" /></a></p>

                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Secured IoT Sensor Demo</h3>
                    <p>This project demonstrates the use of BlackBerry Dynamics to securely manage an IoT device. It provides examples of features commonly used in an IoT application such as MQTT, HTTPS, and socket communication.</p>
                    <p><a className="btn btn-primary btn-learn" href="https://github.com/blackberry/BlackBerry-Dynamics-Android-Samples/tree/master/AndroidThingsSensorDemo" target="_blank" rel="noopener noreferrer">View Project <i className="icon-briefcase3" /></a></p>

                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Data Mining and Web App Dashboard for 311</h3>
                    <p>This objective of this project was to simplify the reporting of problematic city services and create a feedback loop for citizen engagement. It uses various Azure services to analyze and categorize twitter data and display it in an interactive web application.</p>
                    <p><a className="btn btn-primary btn-learn" href="https://github.com/JeffinWithYa/MicrosoftEncodeHackathon2020" target="_blank" rel="noopener noreferrer">View Project <i className="icon-briefcase3" /></a></p>

                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Secured Messaging for Cars (Android Auto)</h3>
                    <p>This project expands the messaging framework for Android Auto to include secured voice and text messages. Messages are securely sent and received on the Android Auto display (or desktop emulator), leveraging BlackBerry Spark Communication Services.</p>
                    <p><a className="btn btn-primary btn-learn" href="https://devblog.blackberry.com/en/2018/01/integrating-blackberry-cpaas-with-android-auto-secured-apps-for-cars" target="_blank" rel="noopener noreferrer">View Project <i className="icon-briefcase3" /></a></p>

                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Spark Communication Services Blockchain</h3>
                    <p>This project demonstrates the use of BlackBerry Spark Communication Services to implement a basic blockchain. Communication between the nodes are secured by the BlackBerry SDK.</p>
                    <p><a className="btn btn-primary btn-learn" href="https://youtu.be/0WHUD65sFdM" target="_blank" rel="noopener noreferrer">View Project <i className="icon-briefcase3" /></a></p>

                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Secure OTP for Banking Applications</h3>
                    <p>This project demonstrates how to use BlackBerry Spark Communication Services SDK for node.js and Android to build a banking application that securely deliver a one-time password (OTP) to an ATM.</p>
                    <p><a className="btn btn-primary btn-learn" href="https://youtu.be/ud2OQJLtN9A" target="_blank" rel="noopener noreferrer">View Project <i className="icon-briefcase3" /></a></p>

                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Portfolio React Application (this site!) </h3>
                    <p>Thanks for visiting my portfolio! Please feel free to check out the code for this React project on my Github page.</p>
                    <p><a className="btn btn-primary btn-learn" href="https://youtu.be/ud2OQJLtN9A" target="_blank" rel="noopener noreferrer">View Project <i className="icon-briefcase3" /></a></p>

                </div>
                </div>
            </div>
            {/*
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Jenkins , Kubernetes , Docker </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>My friend knows .. P</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I use Instagram eight hours a day :) </p>
                </div>
                </div>
            </div>
            */}
            </div>
        </div>
        </section>
      </div>
    )
  }
}
