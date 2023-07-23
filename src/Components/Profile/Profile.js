import {MdArrowDropDown} from "react-icons/md"
import "./profile.css"

const Profile =()=> {
    return (
        <div className="profile">
            <div className="profile-sm-card">
            <div className="profile-details">
                <img src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?w=740&t=st=1690029576~exp=1690030176~hmac=ff6d0db6527c881ef8224ae05ec3f9d8f6501c9208f0484cd53def761b9ae9d6" alt=""
                className="profile-img" />
                <div className="name-card">
                <h1 className="profile-name">Hi Mike,</h1>
                <p className="profile-welcome">welcome back.</p>
                </div>
            </div>
            <div className="profile-balance">
                <p className="profile-name" id="sm" style={{fontSize:"15px"}}>Today</p>
                <div className="profile-balance-card">
                <h1 className="profile-name" id="sm-balance">$19,892</h1>
                <p className="balance-text">Account Balance</p>
                </div>
                <div className="date-interest-card">
                <div className="profile-balance-card" id="sm" >
                <h1 className="balance" id="sm" >$4,000</h1>
                <p  className="balance-text ">Year-to-Date </p>
                </div>
                <div className="profile-balance-card" id="sm" >
                <h1 className="balance" id="sm" >$1,892</h1>
                <p  className="balance-text">Total Interest</p>
                </div>
                </div>
                <button className="profile-btn" type="button">I want to<MdArrowDropDown style={{fontSize:"13px"}} /> </button>
            </div>
            <div className="profile-transaction">
                <h4  className="profile-name" style={{fontSize:"14px",marginBottom:"25px"}}>Recent Transactions</h4>
                <div className="profile-transaction-history">
                    <p className="balance-text">2020-08-07</p>
                    <h5 className="profile-name" style={{fontSize:"11px",marginTop:"5px"}}>Withdrawal Transfer to Bank-XXX11</h5>
                </div>
                <hr className="profile-break" style={{marginBlock:"19px",borderTop:"1px solid #cdd4d0"}}/>
                <div className="profile-transaction-history">
                    <p className="balance-text">2020-07-21</p>
                    <h5 className="profile-name" style={{fontSize:"11px",marginTop:"5px"}}>Withdrawal Transfer to Bank-XXX11</h5>
                </div>
                <hr className="profile-break" style={{marginBlock:"19px",borderTop:"1px solid #cdd4d0"}}/>
                <div className="profile-transaction-history">
                    <p className="balance-text">2020-07-16</p>
                    <h5 className="profile-name" style={{fontSize:"11px",marginTop:"5px"}}>Withdrawal Transfer to Bank-XXX11</h5>
                </div>
                <hr className="profile-break" style={{marginBlock:"19px",borderTop:"1px solid #cdd4d0"}}/>

            </div>
        </div>
        </div>
    )
}
export default Profile;