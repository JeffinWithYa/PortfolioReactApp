import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Awards and Accomplishments</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>AWS Machine Learning Engineer Scholarship Winner <span>2020</span></h2>
                        <p>This competition was an international opportunity to earn 4 months of advanced Machine Learning training from AWS and Udacity. Out of tens of thousands of applicants world-wide, based on my performance on a timed exam covering introductory ML topics, I was chosen as one of 300 recipients for this scholarship.The scholarship dove deep into techniques and algorithms for Machine Learning. All projects and coursework were built using AWS' Sagemaker machine learning platform. The scholarship provided hands-on experience (and best practices) for data preprocessing, model training, iteration, evaluation, and API deployment on Sagemaker. My capstone project was an independently driven assignment with strict requirements for data preprocessing, model accuracy, and deployment. I built a classifier that takes in viral meta-genomic data and predicts the virus' target host. The project is published on Kaggle (see project links above).</p>
                        <p><a className="btn btn-primary btn-learn" href="https://confirm.udacity.com/KQ6UVEDZ" target="_blank" rel="noopener noreferrer">View Credential <i className="icon-briefcase3" /></a></p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>2nd Place - Microsoft Encode Hackathon <span>2020</span></h2>
                        <p>Several themes were provided as projects ideas for this hackathon. After some deliberation, our team chose the 'Government' theme. Its corresponding scenario outlined the following challenge: “create something using crowdsourced data to identify, categorize, and track problematic area city services… and address accessibility”, moreover, “build a feedback loop for citizen engagement and trust between government and citizen.” With the above theme in mind, we built a system that simplifies reporting of problematic sity services (potholes, litter, etc.) and creates a feedback loop for citizen engagement. Using Azure ML services (deployed as a python flask app) that analyse sentiment, recognizes key phrases, and categorizes input text (such as a tweet), as well as AtHoc APIs for alerting, our project clinched 2nd place among over two dozen teams. More info can be found in the project's Github repo linked above.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Microsoft Certified IoT Developer <span>2020</span></h2>
                        <p>This certification is proof of my competency in designing and implenting Azure services, with an emphasis on Azure IoT. This includes demonstrating a working knowledge of device security, topology, network connectivity, device management, deployment, debugging, CI, and more.</p>
                        <p><a className="btn btn-primary btn-learn" href="https://www.youracclaim.com/badges/ed080952-7ae9-403a-9f8d-12c043f0f8fb?source=linked_in_profile" target="_blank" rel="noopener noreferrer">View Credential <i className="icon-briefcase3" /></a></p>

                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Runner-Up Loblaws/Microsoft Digital HackBytes Hackathon <span>2019</span></h2>
                        <p>HackBytes is a hackathon jointly sponsored by Loblaws Digital and Microsoft. The goal was to build something that used computer vision in a retail environment. Our team took a 3-pronged, microservices-based approach to enhancing the capabilities of security cameras in a retail space. The project, titled ‘Sight for Store Eyes’ accomplished three things: 1. Real-time detection of blacklisted individuals with Azure computer vision, followed by an automatic alert to security teams at the store. 2. Real-time detection of a customer showing the peace sign to a camera, broadcasting an alert to customer service staff to let them know a customer in aisle ‘x’ needs help. 3. Analytics on the data collected from these AI driven alerts.</p> 
                        <p><a className="btn btn-primary btn-learn" href="https://devblog.blackberry.com/en/2019/11/what-we-learned-from-using-azure-computer-vision-at-hackbytes" target="_blank" rel="noopener noreferrer">More Info <i className="icon-briefcase3" /></a></p>

                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>3rd Place - Microsoft DisruptAI Hackathon <span>2019</span></h2>
                        <p>Over 2 days, we built an IoT enabled well-monitoring system that uses AI to perform analyses on the well, and BlackBerry AtHoc to broadcast emergency alerts when the well is flooding or contaminated. Our AI model was trained on sensor data from our device. Once the model was trained, we called a weather API to grab upcoming temp/pressure/humidity data and ran this through our model to predict the water level in the well, weeks or months in advance. Our IoT sensor was built to connect to Telus’ LTE-M network so that we could report data to Azure IoT hub from areas with traditionally poor connectivity (remote, rural, and underground). In the end, we built an enterprise-ready service that could be deployed for less than 200 dollars. In production, we simply need to ship the device to the well owner. These could be farmers, municipal governments, etc. The customer attaches the device to the outside of their well and then we go on Azure and click-click deploy.</p> 
                        <p><a className="btn btn-primary btn-learn" href="https://devblog.blackberry.com/en/2019/05/what-we-learned-from-winning-disruptai" target="_blank" rel="noopener noreferrer">More Info <i className="icon-briefcase3" /></a></p>

                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
