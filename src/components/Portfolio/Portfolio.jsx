import './portfolio.scss'
import headphone from  '../../assets/project1/headphone.png'
import { useState } from 'react'
import PortfolioDetails from './PortfolioDetails';
import { Link, useParams } from 'react-router-dom';
import data from '../../data';
const Portfolio = () => {
    // const {id} =useParams()
    const [portfolioDetails, setPortfolioDetails] = useState(true);
    

    return (
        <>
           
                <div className="portfolio2">
                <div className="portfolioname1">
                    <p className='portfolio-name'>PORTFOLIO</p>
                  <span className="queries">Checkout my recent work</span>
                </div>
                
                
                    <div className="main-portolio">
                        {data.map((item) => (
                            <>
                            <div key={item.id} onClick={()=>setPortfolioDetails(item)}  className="porfolio-link">
                                 
                                    <Link to={`/portfolio/${item.id}`}>  <img onClick={() => setPortfolioDetails(false)} src={item.image} alt="" width={320} />
                                    </Link>
                   
                </div>
                            </>
                        ))}
                    
                </div>
               
          </div>   
            
            {/* <PortfolioDetails setPortfolio={ setPortfolio} /> */}
            
            
             
        </>
    )
}
export default Portfolio;