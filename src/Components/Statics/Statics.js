import BarChartDisplay from "../BarChart/Barchart";
import {MdArrowDropDown} from "react-icons/md"
import {RiArrowDropRightLine} from "react-icons/ri"
import "./statics.css"
import "../Profile/profile.css"
import "../BarChart/barchart.css"
import DonutChart from "../DonutPie/donutpie1";
import DonutChart2 from "../DonutPie/donutpie2";
import DonutChart3 from "../DonutPie/donutpie3";
import BarChartDisplay2 from "../BarChart/Barchart2";
import DonutSm1 from "../DonutPie/donutsm1";
import DonutSm2 from "../DonutPie/donutsm2";
import Donutsm3 from "../DonutPie/donutsm3";


const Statics = () => {
    return (
        <div className="statics">
            <div className="first-part">
            <div>
            <h6 className="retirement">Retirement Income</h6>
            <h5 style={{marginTop : "0px",fontSize:"17px"}} className="profile-name">Starting Year 2056</h5>
            </div>
            <div className="statics-goals-card">
                <div className="statics-goal">
                    <h3  style={{marginTop : "0px",fontSize:"15px"}} className="profile-name"  id="sm-balance-retirement">$300,000</h3>
                    <p className="balance-text">My Goal</p>
                    <hr className="statics-break"/>
                </div>
                <div className="retirement-sm-details-card">
                <div className="statics-goal">
                    <h3  style={{marginTop : "0px",fontSize:"15px"}} className="profile-name">59%</h3>
                    <p className="balance-text">Goal Achieved</p>
                    <hr className="statics-break"/>
                </div>
                <div className="statics-goal">
                    <h3  style={{marginTop : "0px",fontSize:"15px"}} className="profile-name">$300</h3>
                    <p className="balance-text">Est. Monthly Income</p>
                    <hr className="statics-break"/>
                </div>
                </div>
            </div>
            <div>
                <h3 className="statics-chart-heading">Contribution Overtime</h3>
                <div className="bar-chart-card">
                    <div className="bar-chart-details">
                        <p className="circle"></p>
                        <p className="chart-text">Employer:</p>
                        <p className="amount">K 73,500</p>
                    </div>
                    <div  className="bar-chart-details">
                        <p className="circle2"></p>
                        <p className="chart-text">Employee:</p>
                        <p className="amount">K 52,500</p>
                    </div>
                    <div  className="bar-chart-details">
                        <p className="circle3"></p>
                        <p className="chart-text">Total Interest:</p>
                        <p className="amount">K 244,313</p>
                    </div>
                </div>
                <BarChartDisplay/>
                <BarChartDisplay2/>
            </div>
            <div className="pie-chart-card">
            <h3 className="statics-chart-heading">How do I compare to my peers?</h3>
            <p className="balance-text contribution-sm">These numbers represent current goal achievement</p>
            <div className="pie-chart-container">
            <div className="pie-details">
            <p className="chart-text color">Age:<span className="contribution-span">Under 30 <MdArrowDropDown/></span></p>
            <div className="contribution-break">
            <hr className="breaks"/>
            </div>  
            <p className="chart-text color">Salary:<span  className="contribution-span">K 20 - K 30 <MdArrowDropDown/></span></p>
            <div className="contribution-break">
            <hr className="breaks"/>
            </div>  
            <p className="chart-text color">Gender:<span  className="contribution-span">Male 30 <MdArrowDropDown/></span></p>
            <div className="contribution-break">
            <hr className="breaks"/>
            </div>  
            </div>
            <DonutChart  /> 
            <DonutChart2 />
            <DonutChart3 />
            <div className="donut-card-sm">
            <DonutSm1  /> 
            <DonutSm2 />
            <Donutsm3 />
            </div>
            </div>
            </div>
            </div>
            <div  className="sec-part">
            <h5 style={{marginTop : "0px",fontSize:"17px",marginBottom:"25px"}} className="profile-name">Retirement Strategy</h5>
            <div className="sec-first">
            <div>
            <p className="retirement-text">Employoee Contribution</p>
            <input type="range" value={12}/><label className="retirement-text">12%</label>
            </div>
            <div>
            <p className="retirement-text">Retirement Age</p>
            <input type="range" value={65}/><label className="retirement-text">65%</label>
            </div>
            </div>
            <div style={{display:"flex",width:"55%",marginTop:"15px",alignItems:"flex-start"}}>
            <hr className="breaks"/>
            </div> 
            <div className="sec-last">
            <div style={{display:"flex",alignItems:"center"}}>
            <p className="retirement-text">Employoee Contribution:</p>
            <p className="retirement-text">8.4%</p>
            </div>
            <div  style={{display:"flex",alignItems:"center"}}>
            <p className="retirement-text" >Interest Rate:</p>
            <p className="retirement-text">5%</p>
            </div>
            </div>
            <button type="button" className="profile-btn" style={{width:"60%"}}>Update</button>
            <div style={{display:"flex",alignItems:"center"}}>
            <p className="view-docs-text">View Help Docs</p>
            <RiArrowDropRightLine style={{marginBottom:"-11px",fontSize:"23px",color:"blue"}}/>
            </div>
            <div className="advertisment-card">
                <hr className="advertisment-break"/>
            <div>
                <h3  className="advertisment-heading2">Are you consideing a</h3>
                <h3 className="advertisment-heading">Housing Advance?</h3>
                <p  className="chart-text" style={{fontSize:"15px",fontFamily:"inherit",marginBottom:"0px"}}>Limited time reduced interest.</p>
                <div style={{display:"flex",alignItems:"center",marginTop:"0px"}}>
            <p className="view-docs-text">Learn More</p>
            <RiArrowDropRightLine style={{marginBottom:"-11px",fontSize:"23px",color:"blue"}}/>
            </div>            
            </div>    
            </div>
            </div>

        </div>
    )
}

export default Statics;

