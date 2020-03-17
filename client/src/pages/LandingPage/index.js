import React, { Component } from "react";
import "./style.css";
import Modal from 'react-modal';
import Nav from '../../components/Nav';
import API from "../../utils/API";
import QuoteCard from '../../components/QuoteCard';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
}

class LandingPage extends Component {

    state = {
        editModalIsOpen: false,
        adminModalIsOpen: false,
        finishModalIsOpen: false,
        zipCode: "",
        zipAddress: []
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        },
        setTimeout(() => {this.handleInputCheck()}, 500))
    };

    handleInputCheck = () => {

        API.findZip(this.state.zipCode)
            .then(res => {
                console.log("Zipcodes Found!")
                console.log(res.data)
                this.setState({
                    zipAddresses: res.data
                })
            }).catch(err => {
                console.log("No Zipcodes Found")
                console.log(err)
            })

    }

    componentDidMount = () => {
        console.log("Landing Page")
    }

    onAfterOpen = () => {
        console.log("Modal Is Opened")

    }



    openAdminModal = () => {
        this.setState({
            adminModalIsOpen: true
        })
    }

    closeAdminModal = () => {
        this.setState({
            adminModalIsOpen: false
        })
    }

    // submitRequest = (event) => {
    //     event.preventDefault();

    //     var requestData = {
    //         projName: this.state.projectName,
    //         projDesc: this.state.projectDescription,
    //         reqName: this.state.requesterName,
    //         reqEmail: this.state.requesterEmail,
    //         reqPhone: this.state.requesterPhone,
    //         reqBudget: this.state.requesterBudget,
    //         projNotes: this.state.projectNotes
    //     }

    //     console.log("You've submitted your request!")
    //     console.log(requestData)

    //     API.submitRequest({
    //         projName: this.state.projectName,
    //         projDesc: this.state.projectDescription,
    //         reqName: this.state.requesterName,
    //         reqEmail: this.state.requesterEmail,
    //         reqPhone: this.state.requesterPhone,
    //         reqBudget: this.state.requesterBudget,
    //         projNotes: this.state.projectNotes
    //     })
    //         .then(res => {
    //             alert("Youre request has been submitted!")
    //         })
    //         .catch(err => {
    //             alert("There was a problem processing your request, please make sure all forms are filled out or call 610-299-9918 to speak to Evan")
    //         })

    // }

    loginAdmin = (event) => {
        event.preventDefault()
        console.log(this.state.adminName)
        console.log(this.state.adminPassword)
        if (this.state.adminName === "evancleary@1creative.com" && this.state.adminPassword === "YKi34709") {
            document.location.href = '/xbyMGrZ4XIFuk2GiPHta'
        } else if (this.state.admin !== "evancleary" && this.state.adminPassword !== "YKi34709") {
            alert("You input the wrong information!")
        } else {
            alert("Error")
        }
    }

    reRoute = (url) => {
        // event.preventDefault();

        window.location.href = url
    }


    render() {
        return (

            <div className="container-fluid" style={{ background: '#FFF8DC', padding: '0', height: '100%' }}>
                

                <div className="row" style={{ padding: '5%' }}>
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <div className="card bg-primary">



                            <form>
                                <label>Enter Zipcode</label>
                                <input type="number" onChange={this.handleInputChange} name="zipCode" value={this.state.zipCode} />
                            </form>
                        </div>


                    </div>
                    <div className="col-md-2"></div>


                </div>


               

                {/* Admin Login Modal */}

                <Modal
                    isOpen={this.state.adminModalIsOpen}
                    onAfterOpen={this.afterOpenEditModal}
                    onRequestClose={this.closeAdminModal}
                    style={customStyles}
                    contentLabel={"Make your request here!"}
                    ariaHideApp={false}
                >
                    <div className="card" style={{ overflow: 'auto' }}>
                        <div className="card-header" style={{ textAlign: 'center' }}>
                            <h3>--------Admin Login--------</h3>
                            <button className="btn btn-sm btn-secondary" onClick={this.closeEditModal}>Exit</button>
                        </div>
                        <div className="card-body" style={{ height: '500px', overflow: 'auto' }}>
                            <form>
                                <label>Username</label>
                                <br />
                                <input className="form-group" type="text" value={this.state.adminName} onChange={this.handleInputChange} name="adminName" />
                                <br />

                                <label>Password</label>
                                <br />
                                <input className="form-group" type="password" value={this.state.adminPassword} onChange={this.handleInputChange} name="adminPassword" />
                                <br />


                                <button className="btn btn-success" onClick={this.loginAdmin}>Log In</button>

                            </form>

                        </div>


                    </div>

                </Modal>
            </div >


        )

    }

}

export default LandingPage;