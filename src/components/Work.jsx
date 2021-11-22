import React from "react";
const vans = require('./images/vans.png').default;
const fx = require('./images/fx.png').default;
const car = require('./images/car.png').default;
const rh = require('./images/rh.png').default;
const simp = require('./images/simp.png').default;
const bb = require('./images/bb-website.jpg').default;
const mt = require('./images/mt.jpg').default;

function Work() {
    return (
        <span>
        <h2 class="font-weight-bold  h1  my-md-4  py-md-4  my-lg-5  py-lg-3  text-center" style={{ letterSpacing: "-2px", lineHeight: "6rem", color: "#535353" }}>Featured Projects</h2>
        <div class="row align-items-center  my-5  pb-5">
            <div class="col-md-6  col-lg-6  position-relative d-none  d-md-block">
                <svg
                    xmlns="http://www.w3.org/2000/svg" 
                    version="1.1" 
                    width="100%" 
                    height="430px" 
                    viewBox="0 0 480 480"
                    className="position-absolute" style={{zIndex: '1', top: '-13px', left: '3px'}}>
                    <path id="blob-1-b" fill="#a4d4b4" d="M460,298Q441,356,398,397.5Q355,439,297.5,454.5Q240,470,185,450.5Q130,431,83,394.5Q36,358,27.5,299Q19,240,34,185Q49,130,90,90.5Q131,51,185.5,28.5Q240,6,299.5,20Q359,34,402,78Q445,122,462,181Q479,240,460,298Z" />
                    <animate xlinkHref="#blob-1-b"
                            attributeName="d"
                            attributeType="XML"
                            from="M445.5,295Q430,350,392,394Q354,438,297,453.5Q240,469,183.5,452Q127,435,84.5,394.5Q42,354,21,297Q0,240,23,184Q46,128,88.5,89.5Q131,51,185.5,32.5Q240,14,300,23Q360,32,402,77Q444,122,452.5,181Q461,240,445.5,295Z"
                                to="M448.5,296.5Q435,353,391.5,390Q348,427,294,445Q240,463,185,447Q130,431,90.5,390Q51,349,26.5,294.5Q2,240,23,183.5Q44,127,87.5,89Q131,51,185.5,34.5Q240,18,295.5,32.5Q351,47,393.5,87Q436,127,449,183.5Q462,240,448.5,296.5Z"
                            dur="10s"
                            values="M445.5,295Q430,350,392,394Q354,438,297,453.5Q240,469,183.5,452Q127,435,84.5,394.5Q42,354,21,297Q0,240,23,184Q46,128,88.5,89.5Q131,51,185.5,32.5Q240,14,300,23Q360,32,402,77Q444,122,452.5,181Q461,240,445.5,295Z;M454.5,297Q437,354,397,398Q357,442,298.5,459Q240,476,180.5,461Q121,446,80,401Q39,356,31,298Q23,240,30,181.5Q37,123,80,80Q123,37,181.5,19Q240,1,296.5,23Q353,45,399.5,83Q446,121,459,180.5Q472,240,454.5,297Z;
            M449,298Q440,356,397,397Q354,438,297,459Q240,480,182,460.5Q124,441,78.5,400Q33,359,19,299.5Q5,240,27,185Q49,130,89,89Q129,48,184.5,28Q240,8,296,27Q352,46,395.5,85.5Q439,125,448.5,182.5Q458,240,449,298Z;M460,298Q441,356,398,397.5Q355,439,297.5,454.5Q240,470,185,450.5Q130,431,83,394.5Q36,358,27.5,299Q19,240,34,185Q49,130,90,90.5Q131,51,185.5,28.5Q240,6,299.5,20Q359,34,402,78Q445,122,462,181Q479,240,460,298Z;
            M448.5,296.5Q435,353,391.5,390Q348,427,294,445Q240,463,185,447Q130,431,90.5,390Q51,349,26.5,294.5Q2,240,23,183.5Q44,127,87.5,89Q131,51,185.5,34.5Q240,18,295.5,32.5Q351,47,393.5,87Q436,127,449,183.5Q462,240,448.5,296.5Z;M445.5,295Q430,350,392,394Q354,438,297,453.5Q240,469,183.5,452Q127,435,84.5,394.5Q42,354,21,297Q0,240,23,184Q46,128,88.5,89.5Q131,51,185.5,32.5Q240,14,300,23Q360,32,402,77Q444,122,452.5,181Q461,240,445.5,295Z"
                            repeatCount="indefinite"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" 
                version="1.1" 
                width="100%" 
                height="400px" 
                viewBox="0 0 480 480"
                className="position-relative" style={{zIndex: '2'}}>
                <defs>
                    <clipPath id="blobWrap">
                        <path id="blob1"
                            d="M445.5,295Q430,350,392,394Q354,438,297,453.5Q240,469,183.5,452Q127,435,84.5,394.5Q42,354,21,297Q0,240,23,184Q46,128,88.5,89.5Q131,51,185.5,32.5Q240,14,300,23Q360,32,402,77Q444,122,452.5,181Q461,240,445.5,295Z"
                            fill="#474bff" />
                        <animate xlinkHref="#blob1"
                            attributeName="d"
                            attributeType="XML"
                            from="M445.5,295Q430,350,392,394Q354,438,297,453.5Q240,469,183.5,452Q127,435,84.5,394.5Q42,354,21,297Q0,240,23,184Q46,128,88.5,89.5Q131,51,185.5,32.5Q240,14,300,23Q360,32,402,77Q444,122,452.5,181Q461,240,445.5,295Z"
                                to="M448.5,296.5Q435,353,391.5,390Q348,427,294,445Q240,463,185,447Q130,431,90.5,390Q51,349,26.5,294.5Q2,240,23,183.5Q44,127,87.5,89Q131,51,185.5,34.5Q240,18,295.5,32.5Q351,47,393.5,87Q436,127,449,183.5Q462,240,448.5,296.5Z"
                            dur="10s"
                            values="M445.5,295Q430,350,392,394Q354,438,297,453.5Q240,469,183.5,452Q127,435,84.5,394.5Q42,354,21,297Q0,240,23,184Q46,128,88.5,89.5Q131,51,185.5,32.5Q240,14,300,23Q360,32,402,77Q444,122,452.5,181Q461,240,445.5,295Z;M454.5,297Q437,354,397,398Q357,442,298.5,459Q240,476,180.5,461Q121,446,80,401Q39,356,31,298Q23,240,30,181.5Q37,123,80,80Q123,37,181.5,19Q240,1,296.5,23Q353,45,399.5,83Q446,121,459,180.5Q472,240,454.5,297Z;
            M449,298Q440,356,397,397Q354,438,297,459Q240,480,182,460.5Q124,441,78.5,400Q33,359,19,299.5Q5,240,27,185Q49,130,89,89Q129,48,184.5,28Q240,8,296,27Q352,46,395.5,85.5Q439,125,448.5,182.5Q458,240,449,298Z;M460,298Q441,356,398,397.5Q355,439,297.5,454.5Q240,470,185,450.5Q130,431,83,394.5Q36,358,27.5,299Q19,240,34,185Q49,130,90,90.5Q131,51,185.5,28.5Q240,6,299.5,20Q359,34,402,78Q445,122,462,181Q479,240,460,298Z;
            M448.5,296.5Q435,353,391.5,390Q348,427,294,445Q240,463,185,447Q130,431,90.5,390Q51,349,26.5,294.5Q2,240,23,183.5Q44,127,87.5,89Q131,51,185.5,34.5Q240,18,295.5,32.5Q351,47,393.5,87Q436,127,449,183.5Q462,240,448.5,296.5Z;M445.5,295Q430,350,392,394Q354,438,297,453.5Q240,469,183.5,452Q127,435,84.5,394.5Q42,354,21,297Q0,240,23,184Q46,128,88.5,89.5Q131,51,185.5,32.5Q240,14,300,23Q360,32,402,77Q444,122,452.5,181Q461,240,445.5,295Z"
                            repeatCount="indefinite"/>
                    </clipPath>
                </defs>
                <image x="0" y="-10%" width="150%" height="150%" clip-path="url(#blobWrap)" xlinkHref={bb} preserveAspectRatio="xMidYMid slice"></image>
                </svg>
            </div>
            <div class="col-md-6  col-lg-6">
                <h2 className="font-weight-bold  mb-4" style={{color: 'rgb(83, 83, 83)'}}>Bluebeam Global Responsive Website</h2>
                <p className="mb-5">
                    Senior web developer for Bluebeam's <b className="stick-green">website and webstore</b>. I was tasked maintain and develop new <b className="stick-green">pages and features</b> for marketing pushes using our in-house <b className="stick-green">design system</b>. Key projects included a re-skin of our <b className="stick-green">web store</b> using our internal design system.
                </p>
                <a href="https://bluebeam.com" className="blob-btn  dark  text-capitalize" target="_blank" rel="noreferrer">
                    Launch
                    <span class="blob-btn__inner">
                    <span class="blob-btn__blobs">
                        <span class="blob-btn__blob"></span>
                        <span class="blob-btn__blob"></span>
                        <span class="blob-btn__blob"></span>
                        <span class="blob-btn__blob"></span>
                    </span>
                    </span>
                </a>
            </div>
        </div>
        <div class="row align-items-center my-5">
            <div class="col-md-6  col-lg-6">
                <h2 className="font-weight-bold  mb-4" style={{color: 'rgb(83, 83, 83)'}}>Media Temple Website &amp; Account Center</h2>
                <p className="mb-5">
                    Principle front-end developer for Media Temple tasked to maintain and develop new features for the customer account center and marketing site. Some key projects included a <b className="stick-green">product wizard</b>, <b className="stick-green">one-click install</b> interface for popular web apps such as <b className="stick-green">WordPress</b> and <b className="stick-green">Drupal</b> and an inline <b className="stick-green">file editing web app</b>.
                </p>
                <a href="https://mediatemple.net" className="blob-btn  dark  text-capitalize" target="_blank" rel="noreferrer">
                    Launch
                    <span class="blob-btn__inner">
                    <span class="blob-btn__blobs">
                        <span class="blob-btn__blob"></span>
                        <span class="blob-btn__blob"></span>
                        <span class="blob-btn__blob"></span>
                        <span class="blob-btn__blob"></span>
                    </span>
                    </span>
                </a>
            </div>
            <div class="col-md-6  col-lg-6 d-none  d-md-block">
                <svg
                    xmlns="http://www.w3.org/2000/svg" 
                    version="1.1" 
                    width="100%" 
                    height="430px" 
                    viewBox="0 0 480 480"
                    className="position-absolute" style={{zIndex: '1', top: '-13px', left: '3px'}}>
                    <path id="blob-2-b" fill="#a4d4b4" d="M445.5,295Q430,350,392,394Q354,438,297,453.5Q240,469,183.5,452Q127,435,84.5,394.5Q42,354,21,297Q0,240,23,184Q46,128,88.5,89.5Q131,51,185.5,32.5Q240,14,300,23Q360,32,402,77Q444,122,452.5,181Q461,240,445.5,295Z" />
                    <animate xlinkHref="#blob-2-b"
                            attributeName="d"
                            attributeType="XML"
                            from="M445.5,295Q430,350,392,394Q354,438,297,453.5Q240,469,183.5,452Q127,435,84.5,394.5Q42,354,21,297Q0,240,23,184Q46,128,88.5,89.5Q131,51,185.5,32.5Q240,14,300,23Q360,32,402,77Q444,122,452.5,181Q461,240,445.5,295Z"
                                to="M448.5,296.5Q435,353,391.5,390Q348,427,294,445Q240,463,185,447Q130,431,90.5,390Q51,349,26.5,294.5Q2,240,23,183.5Q44,127,87.5,89Q131,51,185.5,34.5Q240,18,295.5,32.5Q351,47,393.5,87Q436,127,449,183.5Q462,240,448.5,296.5Z"
                            dur="10s"
                            values="M445.5,295Q430,350,392,394Q354,438,297,453.5Q240,469,183.5,452Q127,435,84.5,394.5Q42,354,21,297Q0,240,23,184Q46,128,88.5,89.5Q131,51,185.5,32.5Q240,14,300,23Q360,32,402,77Q444,122,452.5,181Q461,240,445.5,295Z;M454.5,297Q437,354,397,398Q357,442,298.5,459Q240,476,180.5,461Q121,446,80,401Q39,356,31,298Q23,240,30,181.5Q37,123,80,80Q123,37,181.5,19Q240,1,296.5,23Q353,45,399.5,83Q446,121,459,180.5Q472,240,454.5,297Z;
            M449,298Q440,356,397,397Q354,438,297,459Q240,480,182,460.5Q124,441,78.5,400Q33,359,19,299.5Q5,240,27,185Q49,130,89,89Q129,48,184.5,28Q240,8,296,27Q352,46,395.5,85.5Q439,125,448.5,182.5Q458,240,449,298Z;M460,298Q441,356,398,397.5Q355,439,297.5,454.5Q240,470,185,450.5Q130,431,83,394.5Q36,358,27.5,299Q19,240,34,185Q49,130,90,90.5Q131,51,185.5,28.5Q240,6,299.5,20Q359,34,402,78Q445,122,462,181Q479,240,460,298Z;
            M448.5,296.5Q435,353,391.5,390Q348,427,294,445Q240,463,185,447Q130,431,90.5,390Q51,349,26.5,294.5Q2,240,23,183.5Q44,127,87.5,89Q131,51,185.5,34.5Q240,18,295.5,32.5Q351,47,393.5,87Q436,127,449,183.5Q462,240,448.5,296.5Z;M445.5,295Q430,350,392,394Q354,438,297,453.5Q240,469,183.5,452Q127,435,84.5,394.5Q42,354,21,297Q0,240,23,184Q46,128,88.5,89.5Q131,51,185.5,32.5Q240,14,300,23Q360,32,402,77Q444,122,452.5,181Q461,240,445.5,295Z"
                            repeatCount="indefinite"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" 
                version="1.1" 
                width="100%" 
                height="400px" 
                viewBox="0 0 480 480" className="position-relative" style={{zIndex: '2'}}>
                <defs>
                    <clipPath id="blobWrap">
                        <path id="blob2"
                            d="M445.5,295Q430,350,392,394Q354,438,297,453.5Q240,469,183.5,452Q127,435,84.5,394.5Q42,354,21,297Q0,240,23,184Q46,128,88.5,89.5Q131,51,185.5,32.5Q240,14,300,23Q360,32,402,77Q444,122,452.5,181Q461,240,445.5,295Z"
                            fill="#474bff" />
                        <animate xlinkHref="#blob2"
                            attributeName="d"
                            attributeType="XML"
                            from="M445.5,295Q430,350,392,394Q354,438,297,453.5Q240,469,183.5,452Q127,435,84.5,394.5Q42,354,21,297Q0,240,23,184Q46,128,88.5,89.5Q131,51,185.5,32.5Q240,14,300,23Q360,32,402,77Q444,122,452.5,181Q461,240,445.5,295Z"
                                to="M448.5,296.5Q435,353,391.5,390Q348,427,294,445Q240,463,185,447Q130,431,90.5,390Q51,349,26.5,294.5Q2,240,23,183.5Q44,127,87.5,89Q131,51,185.5,34.5Q240,18,295.5,32.5Q351,47,393.5,87Q436,127,449,183.5Q462,240,448.5,296.5Z"
                            dur="10s"
                            values="M445.5,295Q430,350,392,394Q354,438,297,453.5Q240,469,183.5,452Q127,435,84.5,394.5Q42,354,21,297Q0,240,23,184Q46,128,88.5,89.5Q131,51,185.5,32.5Q240,14,300,23Q360,32,402,77Q444,122,452.5,181Q461,240,445.5,295Z;M454.5,297Q437,354,397,398Q357,442,298.5,459Q240,476,180.5,461Q121,446,80,401Q39,356,31,298Q23,240,30,181.5Q37,123,80,80Q123,37,181.5,19Q240,1,296.5,23Q353,45,399.5,83Q446,121,459,180.5Q472,240,454.5,297Z;
            M449,298Q440,356,397,397Q354,438,297,459Q240,480,182,460.5Q124,441,78.5,400Q33,359,19,299.5Q5,240,27,185Q49,130,89,89Q129,48,184.5,28Q240,8,296,27Q352,46,395.5,85.5Q439,125,448.5,182.5Q458,240,449,298Z;M460,298Q441,356,398,397.5Q355,439,297.5,454.5Q240,470,185,450.5Q130,431,83,394.5Q36,358,27.5,299Q19,240,34,185Q49,130,90,90.5Q131,51,185.5,28.5Q240,6,299.5,20Q359,34,402,78Q445,122,462,181Q479,240,460,298Z;
            M448.5,296.5Q435,353,391.5,390Q348,427,294,445Q240,463,185,447Q130,431,90.5,390Q51,349,26.5,294.5Q2,240,23,183.5Q44,127,87.5,89Q131,51,185.5,34.5Q240,18,295.5,32.5Q351,47,393.5,87Q436,127,449,183.5Q462,240,448.5,296.5Z;M445.5,295Q430,350,392,394Q354,438,297,453.5Q240,469,183.5,452Q127,435,84.5,394.5Q42,354,21,297Q0,240,23,184Q46,128,88.5,89.5Q131,51,185.5,32.5Q240,14,300,23Q360,32,402,77Q444,122,452.5,181Q461,240,445.5,295Z"
                            repeatCount="indefinite"/>
                    </clipPath>
                </defs>
                <image x="0" y="0" width="150%" height="100%" clip-path="url(#blobWrap)" xlinkHref={mt} preserveAspectRatio="xMidYMid slice"></image>
                </svg>
            </div>
        </div>
        <div className="container" style={{paddingTop: '125px'}}>
            <div className="row  justify-content-center  text-center" style={{marginBottom: '100px'}}>
                <div className="col-md-4  col-lg-4 position-relative  pb-5  pb-md-5  pb-lg-5">
                    <svg id="10015.io" viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg" className="mb-3  position-relative" style={{zIndex: '2'}}>
                        <defs>
                            <clipPath id="other-blob-1">
                                <path fill="#474bff" d="M455,292Q437,344,400,381Q363,418,315.5,442.5Q268,467,215,456Q162,445,116,417.5Q70,390,44,342.5Q18,295,20,240.5Q22,186,46.5,138Q71,90,115,58.5Q159,27,213.5,16.5Q268,6,321.5,25.5Q375,45,404,92Q433,139,453,189.5Q473,240,455,292Z" />
                            </clipPath>
                        </defs>
                        <image x="0" y="0" width="100%" height="100%" clip-path="url(#other-blob-1)" xlinkHref={vans} preserveAspectRatio="xMidYMid slice"></image>
                    </svg>
                    <svg viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg" className="position-absolute" style={{zIndex: '1', stroke: '#a4d4b4', strokeWidth: '3px', top: '-15px', left: '0px'}}>
	                    <path fill="#fff" d="M455,292Q437,344,400,381Q363,418,315.5,442.5Q268,467,215,456Q162,445,116,417.5Q70,390,44,342.5Q18,295,20,240.5Q22,186,46.5,138Q71,90,115,58.5Q159,27,213.5,16.5Q268,6,321.5,25.5Q375,45,404,92Q433,139,453,189.5Q473,240,455,292Z" />
                    </svg>
                    <h3 className="font-weight-bold  mt-3" style={{color: 'rgb(83, 83, 83)'}}>Vans</h3>
                    <p className={'mb-5'}>Lead front-end developer for vans.com redesign.</p>
                    <a href="https://www.vans.com/" className="blob-btn  dark  text-capitalize" target="_blank" rel="noreferrer">
                    Launch
                        <span class="blob-btn__inner">
                        <span class="blob-btn__blobs">
                            <span class="blob-btn__blob"></span>
                            <span class="blob-btn__blob"></span>
                            <span class="blob-btn__blob"></span>
                            <span class="blob-btn__blob"></span>
                        </span>
                        </span>
                    </a>
                </div>
                <div className="col-md-4  col-lg-4 position-relative  pb-5  pb-md-5  pb-lg-5">
                    <svg id="10015.io" viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg" className="mb-3  position-relative" style={{zIndex: '2'}}>
                        <defs>
                            <clipPath id="other-blob-2">
                                <path fill="#474bff" d="M455.5,292Q438,344,407,390.5Q376,437,321.5,451.5Q267,466,212.5,461Q158,456,112,425Q66,394,42,344.5Q18,295,22.5,241Q27,187,49.5,139Q72,91,114.5,56Q157,21,212.5,16.5Q268,12,319,32Q370,52,411,90.5Q452,129,462.5,184.5Q473,240,455.5,292Z" />
                            </clipPath>
                        </defs>
                        <image x="0" y="0" width="100%" height="100%" clip-path="url(#other-blob-2)" xlinkHref={simp} preserveAspectRatio="xMidYMid slice"></image>
                    </svg>
                    <svg viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg" className="position-absolute" style={{zIndex: '1', stroke: '#a4d4b4', strokeWidth: '3px', top: '-15px', left: '0px'}}>
	                    <path fill="#fff" d="M455.5,292Q438,344,407,390.5Q376,437,321.5,451.5Q267,466,212.5,461Q158,456,112,425Q66,394,42,344.5Q18,295,22.5,241Q27,187,49.5,139Q72,91,114.5,56Q157,21,212.5,16.5Q268,12,319,32Q370,52,411,90.5Q452,129,462.5,184.5Q473,240,455.5,292Z" />
                    </svg>
                    <h3 className="font-weight-bold  mt-3" style={{color: 'rgb(83, 83, 83)'}}>Simpsons World</h3>
                    <p>Featured a custom 24/7 streaming player of every Simpsons episode ever.</p>
                </div>
                <div className="col-md-4  col-lg-4 position-relative  pb-5  pb-md-5  pb-lg-5">
                    <svg id="10015.io" viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg" className="mb-3  position-relative" style={{zIndex: '2'}}>
                        <defs>
                            <clipPath id="other-blob-3">
                                <path fill="#474bff" d="M447.5,290.5Q432,341,398.5,381Q365,421,316.5,446Q268,471,214.5,460Q161,449,115.5,420Q70,391,39.5,344Q9,297,9.5,240Q10,183,42,138Q74,93,117,61.5Q160,30,213.5,23Q267,16,318,34.5Q369,53,406,93.5Q443,134,453,187Q463,240,447.5,290.5Z" />
                            </clipPath>
                        </defs>
                        <image x="0" y="0" width="100%" height="100%" clip-path="url(#other-blob-3)" xlinkHref={car} preserveAspectRatio="xMidYMid slice"></image>
                    </svg>
                    <svg viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg" className="position-absolute" style={{zIndex: '1', stroke: '#a4d4b4', strokeWidth: '3px', top: '-15px', left: '0px'}}>
	                    <path fill="#fff" d="M447.5,290.5Q432,341,398.5,381Q365,421,316.5,446Q268,471,214.5,460Q161,449,115.5,420Q70,391,39.5,344Q9,297,9.5,240Q10,183,42,138Q74,93,117,61.5Q160,30,213.5,23Q267,16,318,34.5Q369,53,406,93.5Q443,134,453,187Q463,240,447.5,290.5Z" />
                    </svg>
                    <h3 className="font-weight-bold  mt-3" style={{color: 'rgb(83, 83, 83)'}}>Lexus</h3>
                    <p className={'mb-5'}>Managed asset loading for large site. Increased performance by 30%.</p>
                    <a href="https://www.lexus.com/" className="blob-btn  dark  text-capitalize" target="_blank" rel="noreferrer">
                    Launch
                        <span class="blob-btn__inner">
                        <span class="blob-btn__blobs">
                            <span class="blob-btn__blob"></span>
                            <span class="blob-btn__blob"></span>
                            <span class="blob-btn__blob"></span>
                            <span class="blob-btn__blob"></span>
                        </span>
                        </span>
                    </a>
                </div>            
                <div className="col-md-4  col-lg-4 position-relative  pb-5  pb-md-5  pb-lg-5">
                    <svg id="10015.io" viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg" className="mb-3  position-relative" style={{zIndex: '2'}}>
                        <defs>
                            <clipPath id="other-blob-4">
                                <path fill="#474bff" d="M461.5,294.5Q448,349,412,393Q376,437,321.5,450.5Q267,464,213.5,457.5Q160,451,114.5,421Q69,391,42,343Q15,295,16,240Q17,185,43.5,137Q70,89,116.5,62.5Q163,36,215,27Q267,18,321,31.5Q375,45,403.5,92Q432,139,453.5,189.5Q475,240,461.5,294.5Z" />
                            </clipPath>
                        </defs>
                        <image x="0" y="0" width="100%" height="100%" clip-path="url(#other-blob-4)" xlinkHref={fx} preserveAspectRatio="xMidYMid slice"></image>
                    </svg>
                    <svg viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg" className="position-absolute" style={{zIndex: '1', stroke: '#a4d4b4', strokeWidth: '3px', top: '-15px', left: '0px'}}>
	                    <path fill="#fff" d="M461.5,294.5Q448,349,412,393Q376,437,321.5,450.5Q267,464,213.5,457.5Q160,451,114.5,421Q69,391,42,343Q15,295,16,240Q17,185,43.5,137Q70,89,116.5,62.5Q163,36,215,27Q267,18,321,31.5Q375,45,403.5,92Q432,139,453.5,189.5Q475,240,461.5,294.5Z" />
                    </svg>
                    <h3 className="font-weight-bold  mt-3" style={{color: 'rgb(83, 83, 83)'}}>FX Network</h3>
                    <p className={'mb-5'}>Front-end developer for FX redesign. Responsive and SSO integration.</p>
                    <a href="https://www.fxnetworks.com/" className="blob-btn  dark  text-capitalize" target="_blank" rel="noreferrer">
                    Launch
                        <span class="blob-btn__inner">
                        <span class="blob-btn__blobs">
                            <span class="blob-btn__blob"></span>
                            <span class="blob-btn__blob"></span>
                            <span class="blob-btn__blob"></span>
                            <span class="blob-btn__blob"></span>
                        </span>
                        </span>
                    </a>
                </div>
                <div className="col-md-4  col-lg-4 position-relative  pb-5  pb-md-5  pb-lg-5">
                    <svg id="10015.io" viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg" className="mb-3  position-relative" style={{zIndex: '2'}}>
                        <defs>
                            <clipPath id="other-blob-5">
                                <path fill="#474bff" d="M452.5,290.5Q432,341,401.5,385.5Q371,430,318.5,444Q266,458,214,452Q162,446,115,419.5Q68,393,40.5,344.5Q13,296,13.5,240Q14,184,40,135Q66,86,111,52.5Q156,19,212,14Q268,9,316,35Q364,61,401,98.5Q438,136,455.5,188Q473,240,452.5,290.5Z" />
                            </clipPath>
                        </defs>
                        <image x="0" y="0" width="100%" height="100%" clip-path="url(#other-blob-5)" xlinkHref={rh} preserveAspectRatio="xMidYMid slice"></image>
                    </svg>
                    <svg viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg" className="position-absolute" style={{zIndex: '1', stroke: '#a4d4b4', strokeWidth: '3px', top: '-15px', left: '0px'}}>
	                    <path fill="#fff" d="M452.5,290.5Q432,341,401.5,385.5Q371,430,318.5,444Q266,458,214,452Q162,446,115,419.5Q68,393,40.5,344.5Q13,296,13.5,240Q14,184,40,135Q66,86,111,52.5Q156,19,212,14Q268,9,316,35Q364,61,401,98.5Q438,136,455.5,188Q473,240,452.5,290.5Z" />
                    </svg>
                    <h3 className="font-weight-bold  mt-3" style={{color: 'rgb(83, 83, 83)'}}>Restoration Hardware</h3>
                    <p className={'mb-5'}>Cross-browser development. Focused on compatabilty all the way down to IE6.</p>
                    <a href="https://rh.com/" className="blob-btn  dark  text-capitalize" target="_blank" rel="noreferrer">
                    Launch
                        <span class="blob-btn__inner">
                        <span class="blob-btn__blobs">
                            <span class="blob-btn__blob"></span>
                            <span class="blob-btn__blob"></span>
                            <span class="blob-btn__blob"></span>
                            <span class="blob-btn__blob"></span>
                        </span>
                        </span>
                    </a>
                </div>
            </div>
        </div>
        </span>
    );
}

export default Work;