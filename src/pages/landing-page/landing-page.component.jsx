import React from 'react'

import NET from 'vanta/dist/vanta.net.min'

import './landing-page.styles.scss'

class LandingPage extends React.Component{

  constructor(props){
    super(props);
    this.vantaRef = React.createRef()
  }

  componentDidMount() {
    this.vantaEffect = NET({
      el: this.vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0xe5e5e5ff,
      backgroundColor: 0x242C3F,
      maxDistance: 26.00,
      spacing: 18.00
    })
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy()
  }
  
  render(){
    return (
      <div className="landing-page">
        <section className="introduction">
          <div className="introduction-title-container">
            <h2>
              Lift off your <br /> network 
              <svg className="logo"  height="40" viewBox="0 0 512 512" width="40" xmlns="http://www.w3.org/2000/svg"><path d="m511.4 38.222c-1.109-20.338-17.284-36.511-37.622-37.621-41.038-2.242-121.342-.061-198.13 39.656-39.145 20.248-80.545 54.577-113.584 94.185-.407.488-.803.979-1.207 1.468l-74.98 5.792c-12.342.954-23.335 7.423-30.161 17.747l-51.154 77.372c-5.177 7.83-6 17.629-2.203 26.212 3.798 8.584 11.602 14.566 20.877 16.003l63.171 9.784c-.223 1.228-.447 2.455-.652 3.683-2.103 12.58 2.065 25.514 11.151 34.599l87.992 87.993c7.533 7.533 17.712 11.686 28.142 11.686 2.148 0 4.308-.177 6.458-.536 1.228-.205 2.455-.429 3.683-.652l9.784 63.172c1.437 9.275 7.419 17.08 16.001 20.877 3.571 1.58 7.35 2.36 11.112 2.36 5.283-.001 10.529-1.539 15.101-4.562l77.372-51.155c10.325-6.827 16.793-17.82 17.745-30.161l5.792-74.979c.489-.404.981-.8 1.469-1.207 39.609-33.039 73.939-74.439 94.186-113.585 39.719-76.791 41.896-157.096 39.657-198.131zm-175.394 393.037-74.011 48.933-9.536-61.565c31.28-9.197 62.223-23.927 91.702-43.66l-3.773 48.845c-.235 3.047-1.833 5.762-4.382 7.447zm-129.895-37.377-87.993-87.993c-2.245-2.246-3.283-5.401-2.774-8.44 2.616-15.643 6.681-30.534 11.713-44.562l132.028 132.028c-16.848 6.035-31.939 9.635-44.534 11.741-3.044.506-6.195-.529-8.44-2.774zm-117.923-222.269 48.844-3.773c-19.734 29.479-34.464 60.422-43.661 91.702l-61.564-9.535 48.934-74.012c1.686-2.55 4.401-4.147 7.447-4.382zm270.155 155.286c-24.233 20.213-47.756 34.833-69.438 45.412l-149.221-149.221c13.858-28.304 30.771-51.873 45.417-69.431 30.575-36.655 68.602-68.276 104.331-86.756 70.474-36.453 144.725-38.416 182.713-36.348 5.028.274 9.027 4.273 9.301 9.302 2.071 37.988.104 112.238-36.349 182.713-18.479 35.728-50.1 73.754-86.754 104.329z"/><path d="m350.721 236.243c19.202-.002 38.412-7.312 53.031-21.931 14.166-14.165 21.966-32.999 21.966-53.031s-7.801-38.866-21.966-53.031c-29.242-29.243-76.822-29.241-106.062 0-14.166 14.165-21.967 32.999-21.967 53.031s7.802 38.866 21.967 53.031c14.622 14.622 33.822 21.933 53.031 21.931zm-31.82-106.781c8.772-8.773 20.295-13.159 31.818-13.159 11.524 0 23.047 4.386 31.819 13.159 8.499 8.499 13.179 19.799 13.179 31.818s-4.68 23.32-13.179 31.819c-17.544 17.545-46.093 17.544-63.638 0-8.499-8.499-13.18-19.799-13.18-31.818s4.682-23.32 13.181-31.819z"/><path d="m15.301 421.938c3.839 0 7.678-1.464 10.606-4.394l48.973-48.973c5.858-5.858 5.858-15.355 0-21.213-5.857-5.858-15.355-5.858-21.213 0l-48.972 48.973c-5.858 5.858-5.858 15.355 0 21.213 2.928 2.929 6.767 4.394 10.606 4.394z"/><path d="m119.761 392.239c-5.857-5.858-15.355-5.858-21.213 0l-94.154 94.155c-5.858 5.858-5.858 15.355 0 21.213 2.929 2.929 6.767 4.393 10.606 4.393s7.678-1.464 10.606-4.394l94.154-94.154c5.859-5.858 5.859-15.355.001-21.213z"/><path d="m143.429 437.12-48.973 48.973c-5.858 5.858-5.858 15.355 0 21.213 2.929 2.929 6.768 4.394 10.606 4.394s7.678-1.464 10.606-4.394l48.973-48.973c5.858-5.858 5.858-15.355 0-21.213-5.857-5.858-15.355-5.858-21.212 0z"/></svg>
            </h2>
            <p>
              Lunar is the 1st intelligent contact manager that reminds you to reach out to your contacts and strengthen your connections.
            </p>
            <button className="button">
              Get started
            </button>
          </div>
          <svg className="introduction-picture"  id="a7911dd8-4c59-47c4-8e89-f08275b909c0" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="902.09746" height="742.06281" viewBox="0 0 902.09746 742.06281"><path d="M945.69481,680.39584c-18.17319,35.46508-41.224,69.76412-70.3892,100.80763-.64768.70106-1.30191,1.384-1.96193,2.07929l-69.10082-32.713c.42274-.70236.88624-1.49062,1.38456-2.35263,29.68322-50.787,208.86487-360.59146,203.20295-430.75835C1009.48992,323.24579,1030.72855,514.62775,945.69481,680.39584Z" transform="translate(-148.95127 -78.96859)" fill="#627782"/><path d="M888.6368,787.51457c-.96723.54979-1.959,1.088-2.95723,1.60811l-51.83786-24.54052c.72474-.51422,1.569-1.12219,2.53944-1.80589,15.88129-11.40253,63.10529-45.61328,109.31366-82.38043,49.658-39.51087,98.15212-81.96412,105.35392-102.22834C1049.58586,582.8143,1004.13425,724.06455,888.6368,787.51457Z" transform="translate(-148.95127 -78.96859)" fill="#84acc2"/><ellipse cx="267" cy="715.62717" rx="267" ry="26.43564" fill="#627782"/><circle cx="120.80209" cy="648.05071" r="80" fill="#e5e5e5ff"/><path d="M301.79872,693.448H237.708a10.69385,10.69385,0,0,0-10.68177,10.68178v45.779A10.69381,10.69381,0,0,0,237.708,760.5906h64.09076a10.69382,10.69382,0,0,0,10.68181-10.68182v-45.779A10.69386,10.69386,0,0,0,301.79872,693.448Zm0,6.10388a4.55709,4.55709,0,0,1,1.13374.14789l-33.17168,26.46129-32.97773-26.51513a4.581,4.581,0,0,1,.92491-.09405Zm0,54.93484H237.708a4.58317,4.58317,0,0,1-4.5779-4.57794v-45.3679l34.711,27.90888a3.052,3.052,0,0,0,3.81549.00726l34.72013-27.69675v45.14851A4.58317,4.58317,0,0,1,301.79872,754.48672Z" transform="translate(-148.95127 -78.96859)" fill="#242C3F"/><polygon points="340.407 445.28 275.039 449.483 257.506 387.422 314.96 373.958 340.407 445.28" fill="#5c8fad"/><path d="M578.492,605.51982l17.90009.14725a12.45383,12.45383,0,0,0,12.3984-14.43007v0a12.45382,12.45382,0,0,0-17.80692-9.19146L574.103,590.37528l-57.73653,12.8756L491.63133,577.9617l-14.20818,23.401,33.378,25.78787Z" transform="translate(-148.95127 -78.96859)" fill="#8d5524"/><path d="M575.137,790.4585l-21.0895,4.05567c-14.40536-45.40853-30.013-88.41084-30.012-121.67018C503.6494,695.53294,478.369,708.51332,448.6,712.58958l3.24454-50.29034,24.334-12.97815,37.243-17.18908a28.28069,28.28069,0,0,1,10.36483-2.56388h0a28.28063,28.28063,0,0,1,29.41184,23.77347Z" transform="translate(-148.95127 -78.96859)" fill="#8d5524"/><path d="M571.89243,770.18014s2.02224-.85658,10.09824,9.71125c0,0,25.79022,4.80247,21.52492,16.43182s-37.426,11.26375-40.57724,9.48708-28.23273-1.74019-26.499-9.64142,11.72475-16.73206,11.72475-16.73206,4.59371,9.3079,11.73393,9.347c9.56095.05239,12.80549-8.059,11.18322-16.1703C571.0661,772.53753,571.95368,770.229,571.89243,770.18014Z" transform="translate(-148.95127 -78.96859)" fill="#7fc3eb"/><path d="M409.61135,742.522s3.15964,8.63711-11.06619,13.84121c0,0-13.95383,26.41871-25.15568,17.84333s.42261-44.511,3.42149-47.33621,11.45081-30.11151,19.45571-25.55113,14.22515,18.41448,14.22515,18.41448-25.775,8.27691-13.58211,27.43484C396.90972,747.16856,402.22575,747.52808,409.61135,742.522Z" transform="translate(-148.95127 -78.96859)" fill="#7fc3eb"/><circle cx="290.13864" cy="407.90843" r="26.56097" fill="#8d5524"/><path d="M461.9837,557.25732H415.749l-9.73361-28.38971c16.87461-5.15073,12.933-19.77814,9.73361-34.06765H461.9837c-8.96327,17.87726-20.09875,43.17784,1.62227,47.85694Z" transform="translate(-148.95127 -78.96859)" fill="#8d5524"/><path d="M474.15072,706.50608l-8.40559,6.38824a26.03084,26.03084,0,0,1-25.66205,3.34538h0c-24.07541-18.04606-43.71077-12.638-59.21282,14.60042-18.59411-20.98528-20.65027-51.37887-4.05568-82.73572l92.06378,2.02783,18.65609-5.67794Z" transform="translate(-148.95127 -78.96859)" fill="#5c8fad"/><path d="M443.49022,800.48525l0,0a23.50693,23.50693,0,0,1-27.81977-11.721c-8.27361-7.28739-15.25455-17.72094-21.30929-30.40862A235.35214,235.35214,0,0,1,383.194,729.67237c-4.18966-12.94009,2.81585-27.07679,15.85472-30.94809q.58159-.17268,1.17736-.32559c17.40628-4.46885,35.28122,5.57064,41.23113,22.52787l17.30115,49.30829A23.507,23.507,0,0,1,443.49022,800.48525Z" transform="translate(-148.95127 -78.96859)" fill="#8d5524"/><path d="M391.415,752.74074s20.27836,22.71177,24.334,35.68992" transform="translate(-148.95127 -78.96859)" opacity="0.2"/><path d="M312.7676,645.55531l-6.78679,16.56425a12.45383,12.45383,0,0,0,8.79115,16.872h0a12.45383,12.45383,0,0,0,15.14908-13.11773l-1.4623-18.76695,9.4957-58.38766,32.66858-13.5696-16.44763-21.885-36.3425,21.40861Z" transform="translate(-148.95127 -78.96859)" fill="#8d5524"/><path d="M474.96185,648.10439c-23.30586,39.14729-60.78716,32.27676-100.58068,1.62227,16.78233-12.54764,6.48908-48.66808-8.11134-51.10148-15.09761-2.51627-16.91328-33.39206-22.71177-48.66807l70.5687-25.95631,19.06167,15.006,19.06166-4.46124,7.81479,2.773a26.41992,26.41992,0,0,1,17.58227,24.53686C461.633,584.99093,449.77787,609.6709,474.96185,648.10439Z" transform="translate(-148.95127 -78.96859)" fill="#fca311ff"/><path d="M483.88433,616.47014s-3.59181-18.51977-15.3824-12.70721-12.60174-10.41012-12.60174-10.41012l9.32805-53.94045,38.12332,40.55673Z" transform="translate(-148.95127 -78.96859)" fill="#fca311ff"/><path d="M463.89836,452.693s13.46093,5.04772,13.64919,22.96789a32.34842,32.34842,0,0,1-1.27476,8.9109c-.9047,3.28517-1.67052,10.42373,4.13385,20a184.66315,184.66315,0,0,1,10.2482,19.27125h0l-15.21893,1.33267-2.29135-25.22953a125.12513,125.12513,0,0,0-8.62394-35.61888l-.09618-.23767s-7.08336,12.063-20.33858,11.57218l4.9093-4.55871s-16.66168,6.10668-25.70271,7.28237a5.71887,5.71887,0,0,0-3.52817,9.47905q.07869.08767.16074.176c5.47046,5.89116,16.34125,19.56707,9.328,29.73647s-1.43763,13.22015-1.43763,13.22015L417.611,524.93078l-4.62883-3.01569-.14024,3.7872-24.51164-3.75192s-6.59255-1.19221,8.20546-16.762c0,0,3.98172-6.11159,2.54056-11.56328a27.21109,27.21109,0,0,1-.56275-12.75524C402.35235,463.23828,416.142,428.41243,463.89836,452.693Z" transform="translate(-148.95127 -78.96859)" fill="#7fc3eb"/><path id="b82a9922-ead1-40af-af3b-f133b244cde7" data-name="Path 33" d="M948.22812,251.91361h-4v-109.545a63.4,63.4,0,0,0-63.4-63.4h-232.087a63.4,63.4,0,0,0-63.4,63.4v600.974a63.4,63.4,0,0,0,63.4,63.4h232.086a63.4,63.4,0,0,0,63.4-63.4V329.88959h4Z" transform="translate(-148.95127 -78.96859)" fill="#e5e5e5ff"/><path id="b2a7827b-2d2c-407d-93be-35e4c67116bc" data-name="Path 34" d="M883.38608,95.4616h-30.295a22.495,22.495,0,0,1-20.828,30.994h-132.959a22.495,22.495,0,0,1-20.827-30.991h-28.3a47.348,47.348,0,0,0-47.348,47.348v600.089a47.348,47.348,0,0,0,47.348,47.348H883.37711a47.348,47.348,0,0,0,47.348-47.348v-.00007h0v-600.092a47.348,47.348,0,0,0-47.348-47.348h.009Z" transform="translate(-148.95127 -78.96859)" fill="#242c3f"/><circle id="e6b07811-3d0f-4972-ba4c-46b0c6566e33" data-name="Ellipse 7" cx="618.23084" cy="651.74599" r="26" fill="#e5e5e5ff"/><path className="fade-up" d="M661.70582,490.26682c-2.45763,0-4.45757,2.28274-4.45757,5.08789s1.99994,5.0879,4.45757,5.0879H871.84839c2.45763,0,4.45757-2.28274,4.45757-5.0879s-1.99994-5.08789-4.45757-5.08789Z" transform="translate(-148.95127 -78.96859)" fill="#fca311ff"/><path
          className="fade-up" d="M661.70582,610.26682c-2.45763,0-4.45757,2.28274-4.45757,5.08789s1.99994,5.0879,4.45757,5.0879H871.84839c2.45763,0,4.45757-2.28274,4.45757-5.0879s-1.99994-5.08789-4.45757-5.08789Z" transform="translate(-148.95127 -78.96859)" fill="#fca311ff"/><path
          className="fade-up"  d="M661.70582,520.7942c-2.45763,0-4.45757,2.28274-4.45757,5.0879s1.99994,5.08789,4.45757,5.08789h90.425c2.45764,0,4.45757-2.28274,4.45757-5.08789s-1.99993-5.0879-4.45757-5.0879Z" transform="translate(-148.95127 -78.96859)" fill="#fca311ff"/><path 
          className="fade-up" d="M661.70582,549.89259c-2.45763,0-4.45757,2.28274-4.45757,5.08789s1.99994,5.0879,4.45757,5.0879H871.84839c2.45763,0,4.45757-2.28274,4.45757-5.0879s-1.99994-5.08789-4.45757-5.08789Z" transform="translate(-148.95127 -78.96859)" fill="#fca311ff"/><path
          className="fade-up"   d="M661.70582,580.42c-2.45763,0-4.45757,2.28274-4.45757,5.0879s1.99994,5.08789,4.45757,5.08789h90.425c2.45764,0,4.45757-2.28274,4.45757-5.08789s-1.99993-5.0879-4.45757-5.0879Z" transform="translate(-148.95127 -78.96859)" fill="#fca311ff"/><path className="fade-up" d="M701.37683,258.59576H832.19035a5.457,5.457,0,0,1,5.45054,5.45054V400.28321a5.457,5.457,0,0,1-5.45054,5.45054H701.37683a5.457,5.457,0,0,1-5.45054-5.45054V264.0463A5.457,5.457,0,0,1,701.37683,258.59576Z" transform="translate(-148.95127 -78.96859)" fill="#fca311ff"/><path d="M804.31659,377.63922a3.70044,3.70044,0,1,0,0-7.40087h-75.066a3.70044,3.70044,0,1,0,0,7.40087Z" transform="translate(-148.95127 -78.96859)" fill="#242C3F"/><path d="M804.31659,355.83706a3.70044,3.70044,0,0,0,0-7.40088h-75.066a3.70044,3.70044,0,1,0,0,7.40088Z" transform="translate(-148.95127 -78.96859)" fill="#242C3F"/><path d="M766.78332,286.69029a23.29255,23.29255,0,1,1-23.29254,23.29254A23.31893,23.31893,0,0,1,766.78332,286.69029Z" transform="translate(-148.95127 -78.96859)" fill="#242C3F"/></svg>
        </section>
        <section id="pricing">
          <h2 className="regular-title">Pricing</h2>
          <div className="pricing-plans-container">
            <div className="pricing-plans">
              <svg className="animated-svg"  version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  
                viewBox="-100 -100 700 700" enableBackground="new 0 0 450 450">
              
                  <path data-aos="svg-trick" d="M507.681,209.011c-1.297-6.991-7.324-12.111-14.433-12.262c-7.104-0.122-13.347,4.711-14.936,11.643
                    c-15.26,66.497-73.643,112.94-141.978,112.94c-80.321,0-145.667-65.346-145.667-145.666c0-68.335,46.443-126.718,112.942-141.976
                    c6.93-1.59,11.791-7.826,11.643-14.934c-0.149-7.108-5.269-13.136-12.259-14.434C287.546,1.454,271.735,0,256,0
                    C187.62,0,123.333,26.629,74.98,74.981C26.628,123.333,0,187.62,0,256s26.628,132.667,74.98,181.019
                    C123.333,485.371,187.62,512,256,512s132.667-26.629,181.02-74.981C485.372,388.667,512,324.38,512,256
                    C512,240.278,510.546,224.469,507.681,209.011z"/>
              </svg>
              <div className="pricing-plans-card" data-aos="flip-up" data-aos-duration="700">
                <h3>Basic</h3>
                <p className="price-tag">0$</p>
                <p>Rediscover the joy of contact management</p>
              </div>
            </div>
            <div className="pricing-plans">
              <svg className="animated-svg" enableBackground="new 0 0 450 450"  viewBox="-100 -100 700 700"  xmlns="http://www.w3.org/2000/svg"><path data-aos="svg-trick" d="m130.239 138.268-44.358 3.427c-12.343.954-23.336 7.423-30.162 17.748l-51.157 77.372c-5.177 7.83-6 17.629-2.203 26.213 3.798 8.584 11.603 14.566 20.878 16.003l40.615 6.29c9.501-50.42 32.245-100.716 66.387-147.053z"/><path data-aos="svg-trick" d="m226.682 448.151 6.291 40.615c1.437 9.275 7.419 17.08 16.002 20.877 3.571 1.58 7.351 2.36 11.112 2.36 5.283 0 10.529-1.539 15.102-4.563l77.374-51.156c10.325-6.827 16.794-17.821 17.746-30.162l3.427-44.358c-46.338 34.143-96.633 56.887-147.054 66.387z"/><path data-aos="svg-trick" d="m211.407 420c1.41 0 2.828-.116 4.243-.352 21.124-3.532 41.484-9.482 60.906-17.27l-166.93-166.93c-7.788 19.421-13.738 39.781-17.27 60.906-1.392 8.327 1.401 16.81 7.37 22.78l93.144 93.144c4.956 4.955 11.645 7.722 18.537 7.722z"/><path data-aos="svg-trick" d="m471.178 227.003c40.849-78.974 42.362-162.43 40.227-201.57-.731-13.411-11.423-24.103-24.835-24.834-6.373-.348-13.926-.599-22.439-.599-43.766 0-113.017 6.629-179.131 40.826-52.542 27.177-121.439 87.018-162.087 165.66.48.375.949.773 1.391 1.215l180 180c.442.442.839.91 1.214 1.39 78.642-40.649 138.483-109.546 165.66-162.088zm-173.48-118.763c29.241-29.241 76.822-29.244 106.065 0 14.166 14.165 21.967 33 21.967 53.033s-7.801 38.868-21.967 53.033c-14.619 14.619-33.829 21.93-53.032 21.932-19.209.001-38.41-7.309-53.033-21.932-14.166-14.165-21.968-33-21.968-53.033s7.802-38.868 21.968-53.033z"/><path data-aos="svg-trick" d="m318.911 193.092c17.545 17.545 46.095 17.546 63.64 0 8.499-8.5 13.18-19.8 13.18-31.82s-4.681-23.32-13.18-31.819c-8.772-8.773-20.296-13.159-31.82-13.159-11.523 0-23.047 4.386-31.819 13.159-8.499 8.499-13.181 19.799-13.181 31.819s4.681 23.321 13.18 31.82z"/><path data-aos="svg-trick" d="m15.305 421.938c3.839 0 7.678-1.464 10.606-4.394l48.973-48.973c5.858-5.858 5.858-15.355 0-21.213-5.857-5.858-15.355-5.858-21.213 0l-48.973 48.973c-5.858 5.858-5.858 15.355 0 21.213 2.929 2.929 6.768 4.394 10.607 4.394z"/><path data-aos="svg-trick" d="m119.765 392.239c-5.857-5.858-15.355-5.858-21.213 0l-94.155 94.155c-5.858 5.858-5.858 15.355 0 21.213 2.929 2.929 6.768 4.393 10.607 4.393s7.678-1.464 10.606-4.394l94.154-94.154c5.859-5.858 5.859-15.355.001-21.213z"/><path data-aos="svg-trick" d="m143.432 437.12-48.972 48.973c-5.858 5.858-5.858 15.355 0 21.213 2.929 2.929 6.768 4.394 10.606 4.394s7.678-1.464 10.606-4.394l48.973-48.973c5.858-5.858 5.858-15.355 0-21.213-5.857-5.858-15.355-5.858-21.213 0z"/></svg>
              <div className="pricing-plans-card" data-aos="flip-up" data-aos-duration="700" data-aos-delay="200">
                <h3>Premium</h3>
                <p className="price-tag">0$</p>
                <p>For our most experienced networkers. If you're the next Keith Ferrazzi, we've got you covered.</p>
              </div>
            </div>
            
            <div className="pricing-plans">
              <svg className="animated-svg"  id="gaming-svg" height="512" viewBox="0 0 70 70" width="512" xmlns="http://www.w3.org/2000/svg"><g id="game_controller-video_game_controller-controller-monitor-hands" data-name="game controller-video game controller-controller-monitor-hands"><path data-aos="svg-trick" d="m20 28h1.38l-1.38-2.76z"/><path data-aos="svg-trick" d="m10 28v-2.76l-1.38 2.76z"/><path data-aos="svg-trick" d="m32 8.25-2.6 1.95a1.014 1.014 0 0 0 -.4.8v9h2v-3h2v3h2v-9a1.014 1.014 0 0 0 -.4-.8zm1 5.75h-2v-2h2z"/><path data-aos="svg-trick" d="m49 16.25-2.6 1.95a1.014 1.014 0 0 0 -.4.8v9h2v-3h2v3h2v-9a1.014 1.014 0 0 0 -.4-.8zm1 5.75h-2v-2h2z"/><path data-aos="svg-trick" d="m48 31.7 1 1.5 1-1.5v-1.7h-2z"/><path data-aos="svg-trick" d="m31 23.7 1 1.5 1-1.5v-1.7h-2z"/><path data-aos="svg-trick" d="m44 28v-2.76l-1.38 2.76z"/><path data-aos="svg-trick" d="m37 20h1.38l-1.38-2.76z"/><path data-aos="svg-trick" d="m27 20v-2.76l-1.38 2.76z"/><path data-aos="svg-trick" d="m14 31.7 1 1.5 1-1.5v-1.7h-2z"/><path data-aos="svg-trick" d="m4 4v44h10.3a2.989 2.989 0 0 1 1.06-2.6l4.69-3.91a4.989 4.989 0 0 1 4.95-4.49h14a4.989 4.989 0 0 1 4.95 4.49l4.69 3.91a2.989 2.989 0 0 1 1.06 2.6h10.3v-44zm48 2h2v2h-2zm-4 0h2v2h-2zm-42 1a1 1 0 0 1 1-1h4v2h-3v3h-2zm0 6h2v2h-2zm4 21h-2v-2h2zm6 6h-2v-2h2zm6-6h-2v-2h2zm1.85-4.47a1 1 0 0 1 -.85.47h-5v2a.967.967 0 0 1 -.17.55l-2 3a.99.99 0 0 1 -1.66 0l-2-3a.967.967 0 0 1 -.17-.55v-2h-5a1 1 0 0 1 -.89-1.45l3.89-7.79v-1.76a3.012 3.012 0 0 1 1.2-2.4l3.2-2.4a.99.99 0 0 1 1.2 0l3.2 2.4a3.012 3.012 0 0 1 1.2 2.4v1.76l3.89 7.79a1.007 1.007 0 0 1 -.04.98zm3.15-3.53h-2v-2h2zm6 6h-2v-2h2zm6-6h-2v-2h2zm-4-4v2a.967.967 0 0 1 -.17.55l-2 3a.99.99 0 0 1 -1.66 0l-2-3a.967.967 0 0 1 -.17-.55v-2h-5a1 1 0 0 1 -.89-1.45l3.89-7.79v-1.76a3.012 3.012 0 0 1 1.2-2.4l3.2-2.4a.99.99 0 0 1 1.2 0l3.2 2.4a3.012 3.012 0 0 1 1.2 2.4v1.76l3.89 7.79a1 1 0 0 1 -.89 1.45zm9 12h-2v-2h2zm6 6h-2v-2h2zm6-6h-2v-2h2zm1.85-4.47a1 1 0 0 1 -.85.47h-5v2a.967.967 0 0 1 -.17.55l-2 3a.99.99 0 0 1 -1.66 0l-2-3a.967.967 0 0 1 -.17-.55v-2h-5a1 1 0 0 1 -.89-1.45l3.89-7.79v-1.76a3.012 3.012 0 0 1 1.2-2.4l3.2-2.4a.99.99 0 0 1 1.2 0l3.2 2.4a3.012 3.012 0 0 1 1.2 2.4v1.76l3.89 7.79a1.007 1.007 0 0 1 -.04.98zm.15-21.53h-2v-2h2z"/><path data-aos="svg-trick" d="m36.18 47.34a2.99 2.99 0 0 1 5.11-2.12l.71.71v-3.93a3.009 3.009 0 0 0 -3-3h-14a3.009 3.009 0 0 0 -3 3v3.93l.7-.71a3.005 3.005 0 0 1 4.25 4.25l-1.81 1.8.55 1.65a3.012 3.012 0 0 0 2.31-2.92 1 1 0 0 1 1-1h6a1 1 0 0 1 1 1 3.013 3.013 0 0 0 .88 2.13 3.068 3.068 0 0 0 1.43.79l.55-1.65-1.81-1.8a3.011 3.011 0 0 1 -.87-2.13z"/><path data-aos="svg-trick" d="m23.29 50.29 2.24-2.24a.972.972 0 0 0 .29-.71.951.951 0 0 0 -.29-.7.99.99 0 0 0 -1.42 0l-2.4 2.41a1 1 0 0 1 -1.09.21.987.987 0 0 1 -.62-.92v-4.21l-3.36 2.8a1.02 1.02 0 0 0 -.32 1.05l1.64 5.75a.8.8 0 0 1 .04.27v6h6v-5.84l-.95-2.84a1.007 1.007 0 0 1 .24-1.03z"/><path data-aos="svg-trick" d="m54 28h1.38l-1.38-2.76z"/><path data-aos="svg-trick" d="m44 44.14v4.2a.987.987 0 0 1 -.62.92 1 1 0 0 1 -1.09-.21l-2.41-2.41a.987.987 0 0 0 -1.41 0 .951.951 0 0 0 -.29.7.972.972 0 0 0 .29.71l2.24 2.24a1.007 1.007 0 0 1 .24 1.03l-.95 2.84v5.84h6v-6a.8.8 0 0 1 .04-.27l1.64-5.75a1 1 0 0 0 -.32-1.04z"/><path data-aos="svg-trick" d="m15 16.25-2.6 1.95a1.014 1.014 0 0 0 -.4.8v9h2v-3h2v3h2v-9a1.014 1.014 0 0 0 -.4-.8zm1 5.75h-2v-2h2z"/></g></svg>
              <div className="pricing-plans-card" data-aos="flip-up" data-aos-duration="700" data-aos-delay="400">
                <h3>Professional</h3>
                <p className="price-tag">2000$</p>
                <p>Do you wish your website looked as good as this? Then  <strong>hire me</strong>, I'm open to work!</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2 className="regular-title">Helping you</h2>
          <div className="stars-container" ref={this.vantaRef}>
            <h2 className="stars-title-1">Connect</h2>
            <h2 className="stars-title-2">Connect</h2>
          </div>
        </section>
        <section>
        <h2 className="regular-title">Made with</h2>
        <div className="made-with">
          <i data-aos="zoom-in-up" className="made-with-icon fab fa-html5"></i>
          <i  data-aos="zoom-in-up" data-aos-delay="100" className="made-with-icon fab fa-css3-alt"></i>
          <i  data-aos="zoom-in-up" data-aos-delay="200" className="fab fa-js made-with-icon"></i>
          <i data-aos="zoom-in-up" data-aos-delay="300" className="made-with-icon fab fa-react"></i>
          <img className="made-with-icon" data-aos="zoom-in-up" data-aos-delay="400" src={require("./redux-logo.svg")} alt="redux" id="redux-logo"/>
          <i className="made-with-icon fab fa-sass" data-aos="zoom-in-up" data-aos-delay="500"></i>
          <i className="made-with-icon fa fa-heart" data-aos="zoom-in-up" data-aos-delay="600"></i>
        </div>
        </section>
      </div>
    )
  }
}

export default LandingPage
