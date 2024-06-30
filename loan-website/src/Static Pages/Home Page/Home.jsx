import React, { useState } from 'react';
import './Home.css';
import { FaPiggyBank, FaFileAlt, FaBriefcase, FaRegFileAlt, FaSearchDollar, FaHandshake, FaMoneyBillWave } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles


const Home = () => {
    // Carousel slides
    const slides = [
        {
            id: 1,
            headline: "Leading bank loan provider in the market",
            subheadline: "Are you looking for a business enhancement loan?",
            applyLink: "/apply-loan",
            contactLink: "/contact",
            imageUrl: "https://c0.wallpaperflare.com/preview/68/49/257/handshake-cooperation-partnership-agreement.jpg",
        },
        {
            id: 2,
            headline: "Business Loans for Entrepreneurs",
            subheadline: "Get the financial support you need",
            applyLink: "/apply-loan",
            contactLink: "/contact",
            imageUrl: "https://c0.wallpaperflare.com/preview/963/973/290/adult-audience-back-view-briefing.jpg",
        },
        {
            id: 3,
            headline: "Flexible Loan Options",
            subheadline: "Choose the best loan for your business",
            applyLink: "/apply-loan",
            contactLink: "/contact",
            imageUrl: "https://www.sydle.com/blog/assets/post/how-to-improve-your-business-financial-management-613255b703a41c18994133c3/financial-management.jpg",
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    // Loan calculator
    const [loanAmount, setLoanAmount] = useState(100000);
    const [loanMonths, setLoanMonths] = useState(120);
    const [interestRate, setInterestRate] = useState(10);

    const calculateMonthlyPayment = (principal, years, rate) => {
        let monthlyRate = rate / 100 / 12;
        let numberOfPayments = years * 12;
        let monthlyPayment =
            (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
        return monthlyPayment.toFixed(2);
    };

    const calculateTotalPrincipal = (principal, years, rate) => {
        return (principal / years / 12).toFixed(2);
    };

    const calculateTotalInterest = (principal, years, rate) => {
        let totalPayment = calculateMonthlyPayment(principal, years, rate) * years * 12;
        let totalInterest = totalPayment - principal;
        return totalInterest.toFixed(2);
    };

    const monthlyPayment = calculateMonthlyPayment(loanAmount, loanMonths / 12, interestRate);
    const totalPrincipal = calculateTotalPrincipal(loanAmount, loanMonths / 12, interestRate);
    const totalInterest = calculateTotalInterest(loanAmount, loanMonths / 12, interestRate);

    // FAQ component
   
const FAQItem = ({ question, answer, isOpen, toggleFAQ }) => {
    return (
        <div className="faq-item">
            <div className="faq-question" onClick={toggleFAQ}>
                <span className="faq-toggle">{isOpen ? '-' : '+'}</span>
                {question}
            </div>
            {isOpen && <div className="faq-answer">{answer}</div>}
        </div>
    );
};

    const FAQ = () => {
        const faqData = [
            {
                question: 'For what purpose I can avail Personal Loan?',
                answer: 'The passages of Lorem Ipsum available but the majority ave suffer alteration embarrassed the point of using Lorem sum is that it has a more-or-less normal distribution.'
            },
            {
                question: 'How interest is charged?',
                answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
                question: 'What is the rate of interest?',
                answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
                question: 'What is the amount of loan that is sanctioned?',
                answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
                question: 'How can I repay Personal Loan?',
                answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
                question: 'What security will I have to provide?',
                answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
                question: 'Can I get a tax benefit on the Home Loan?',
                answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
                question: 'What is the rate of interest?',
                answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            }
        ];
        const [openIndex, setOpenIndex] = useState(null);

        const toggleFAQ = (index) => {
            setOpenIndex(index === openIndex ? null : index);
        };

        return (
            <div className="faq-container">
            <h1>Customer FAQ's</h1>
            <p className="sub-heading">The passages of Lorem Ipsum available but the major have suffered alteration embarrassed</p>
            <div className="faq-columns">
                <div className="faq-column">
                    {faqData.slice(0, 4).map((item, index) => (
                        <FAQItem
                            key={index}
                            question={item.question}
                            answer={item.answer}
                            isOpen={openIndex === index}
                            toggleFAQ={() => toggleFAQ(index)}
                        />
                    ))}
                </div>
                <div className="faq-column">
                    {faqData.slice(4).map((item, index) => (
                        <FAQItem
                            key={index + 4}
                            question={item.question}
                            answer={item.answer}
                            isOpen={openIndex === index + 4}
                            toggleFAQ={() => toggleFAQ(index + 4)}
                        />
                    ))}
                </div>
            </div>
        </div>
        );
    };

    // carousel component
    const CarouselItem = () => {
        return (
          <div className="carousel-item">
            <div className="carousel-content">
              <p className="quote">
                “I was planning to finance my house with another loan bank but loan officer there dropped the ball and left me hanging. My Realtor told me to see anyone at Loanplus. Two weeks later, I'm pleased to report that I'm living in my new house and couldn't be happier. Skip the big box companies and get your next loan with Loanplus.”
              </p>
              <p className="author">Mohammed & Aashi</p>
              <p className="position">Sales Consultant</p>
            </div>
          </div>
        );
      };

const CarouselComponent = () => {
    return (
      <Carousel showArrows={true} showThumbs={false} autoPlay={true} infiniteLoop={true}>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        {/* Add more <CarouselItem /> as needed */}
      </Carousel>
    );
  };

    return (
        <div className='mt-20'>
            {/* Carousel section */}
            <div className="relative w-full" style={{ height: "80vh" }}>
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <div className="bg-cover bg-center h-full flex items-center justify-center" style={{ backgroundImage: `url(${slide.imageUrl})` }}>
                            <div className="text-center text-white">
                                <p className="text-lg mb-2">{slide.headline}</p>
                                <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.subheadline}</h1>
                                <div className="flex justify-center space-x-4">
                                    <a href={slide.applyLink} className="bg-customGreen px-8 py-3 font-bold text-xl rounded hover:bg-customBlue hover:text-white transition-all duration-200 ease-in">Apply Loan</a>
                                    <a href={slide.contactLink} className="bg-transparent border-2 border-white text-white hover:bg-customGreen px-6 py-3 text-xl font-bold rounded">Contact Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full">
                    &lt;
                </button>
                <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full">
                    &gt;
                </button>
            </div>

            {/* About Loanplus section */}
            <div className="container">
                <div className="content">
                    <div className="text-section">
                        <h2 className="header">About Loanplus</h2>
                        <p className="paragraph">
                            Are you looking for a loan, mortgage, or line of credit? You are in the right place.
                        </p>
                        <p className="paragraph">
                            At Loanplus, we’re here to provide you with financial solutions for all your lending needs.
                            Whether you are looking for a loan, mortgage, or line of credit, our knowledgeable and
                            experienced lending team will explain our lending options to you in a straightforward manner.
                        </p>
                        <button className="bg-customGreen px-8 py-3 font-bold text-xl rounded hover:bg-customBlue text-white transition-all duration-200 ease-in">CONTACT US</button>
                    </div>
                    <div className="features-section">
                        <ul className="features-list">
                            <li className="feature-item"><span>✔</span> Low Interest Rate</li>
                            <li className="feature-item"><span>✔</span> No Hidden Fees or Prepayment Penalties</li>
                            <li className="feature-item"><span>✔</span> Single Monthly Payment</li>
                            <li className="feature-item"><span>✔</span> Fixed Term - 3 or 5 Years *</li>
                        </ul>
                        <p className="note">* Checking your rate won't affect your credit score.</p>
                    </div>
                </div>
                <div className="partners">
                    <img src="https://thegenius.co/html/loanplus/preview/asset/img/brand-6.png" alt="Bussinex" className="partner-logo" />
                    <img src="https://thegenius.co/html/loanplus/preview/asset/img/brand-7.png" alt="Eyeota" className="partner-logo" />
                    <img src="https://thegenius.co/html/loanplus/preview/asset/img/brand-8.png" alt="Nomant" className="partner-logo" />
                    <img src="https://thegenius.co/html/loanplus/preview/asset/img/brand-9.png" alt="Allergan" className="partner-logo" />
                    <img src="https://thegenius.co/html/loanplus/preview/asset/img/brand-10.png" alt="Wavebank" className="partner-logo" />
                </div>
            </div>

            {/* Features section */}
            <div className="features-container">
                <div className="feature-1">
                    <FaPiggyBank className="icons" size={50} />
                    <h3 className="h3-heading">No Hidden Fees</h3>
                    <p className="p-para">
                        A letters bas opposed to using content here english many desktop.
                    </p>
                </div>
                <div className="feature-2">
                    <FaFileAlt className="icons" size={50} />
                    <h3 className="h3-heading">Less Documents</h3>
                    <p className="p-para">
                        A letters bas opposed to using content here english many desktop.
                    </p>
                </div>
                <div className="feature-3">
                    <FaBriefcase className="icons" size={50} />
                    <h3 className="h3-heading">Specialist Team</h3>
                    <p className="p-para">
                        A letters bas opposed to using content here english many desktop.
                    </p>
                </div>
            </div>

            {/* CTA section */}
            <div className="cta-container">
                <p>Checking your loan options does not affect your credit score</p>
                <button className="cta-button">CHECK YOUR RATE</button>
            </div>

            {/* Simple Loan Process */}
            <div className="loan-box">
                <h2 className="title">Simple Loan Process</h2>
                <p className="subtitle">
                    The passages of Lorem Ipsum available but the majority have suffered alteration embarrassed
                </p>
                <div className="process-container">
                    <div className="process-step">
                        <div className="step-number">1</div>
                        <FaRegFileAlt className="step-icon" size={40} />
                        <h3 className="step-title">Choose Amount</h3>
                    </div>
                    <div className="process-step">
                        <div className="step-number">2</div>
                        <FaSearchDollar className="step-icon" size={40} />
                        <h3 className="step-title">Provide Document</h3>
                    </div>
                    <div className="process-step">
                        <div className="step-number">3</div>
                        <FaHandshake className="step-icon" size={40} />
                        <h3 className="step-title">Approved Loan</h3>
                    </div>
                    <div className="process-step">
                        <div className="step-number">4</div>
                        <FaMoneyBillWave className="step-icon" size={40} />
                        <h3 className="step-title">Get your Money</h3>
                    </div>
                </div>
            </div>

            {/* Our Services */}
            <div className="App">
                <h1>Our Services</h1>
                <p>The passages of Lorem Ipsum available but the major have suffered alteration embarrassed</p>
                <div className="services">
                    <div className="service-card">
                        <div className="service-icon personal-loan"></div>
                        <h2>Personal Loan</h2>
                        <p>Type specimen book it has no centuries suffer altered.</p>
                    </div>
                    <div className="service-card">
                        <div className="service-icon car-loan"></div>
                        <h2>Car Loan</h2>
                    </div>
                    <div className="service-card">
                        <div className="service-icon business-loan"></div>
                        <h2>Business Loan</h2>
                    </div>
                    <div className="service-card">
                        <div className="service-icon education-loan"></div>
                        <h2>Education Loan</h2>
                    </div>
                    <div className="service-card">
                        <div className="service-icon payday-loan"></div>
                        <h2>Payday Loan</h2>
                    </div>
                    <div className="service-card">
                        <div className="service-icon another-business-loan"></div>
                        <h2>Business Loan</h2>
                    </div>
                </div>
            </div>

            {/* Loan Calculator */}
            <div className="loan-calculator">
                <h1>Loan Calculator</h1>
                <p className="sub-heading">The passages of Lorem Ipsum available but the major have suffered alteration embarrassed</p>
                <div className="calculator-container">
                    <div className="sliders">
                        <div className="slider">
                            <label>Home Loan Amount</label>
                            <input
                                type="range"
                                min="10000"
                                max="1000000"
                                value={loanAmount}
                                onChange={(e) => setLoanAmount(e.target.value)}
                            />
                            <div>${loanAmount}</div>
                        </div>
                        <div className="slider">
                            <label>Loan Months</label>
                            <input
                                type="range"
                                min="12"
                                max="360"
                                value={loanMonths}
                                onChange={(e) => setLoanMonths(e.target.value)}
                            />
                            <div>{loanMonths} Months</div>
                        </div>
                        <div className="slider">
                            <label>Interest Rate</label>
                            <input
                                type="range"
                                min="1"
                                max="20"
                                value={interestRate}
                                onChange={(e) => setInterestRate(e.target.value)}
                            />
                            <div>{interestRate} %</div>
                        </div>
                    </div>
                    <div className="results">
                        <h2>Monthly Payments</h2>
                        <div className="monthly-payment">${monthlyPayment}</div>
                        <div className="details">
                            <div>Total Principal to be Paid</div>
                            <div>${totalPrincipal}</div>
                        </div>
                        <div className="details">
                            <div>Total Interest to be Paid</div>
                            <div>${totalInterest}</div>
                        </div>
                        <button className="apply-button">Apply Now</button>
                    </div>
                </div>
            </div>

            {/* Banner section */}
            <section className="banner-section">
                <div className="banner-content">
                    <p>Available but the major have embarrassed</p>
                    <h1>Make any dream a reality with one of our loan plans</h1>
                    <button className="banner-button">OUR SERVICES</button>
                </div>
            </section>

            {/* Customer FAQs */}
            <FAQ />

            {/* carousel component */}
      <CarouselComponent />
      {/* Other components */}
    

        </div>
    );
};

export default Home;
