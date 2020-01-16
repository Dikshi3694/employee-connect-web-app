import React from 'react';

export default class Employee extends React.Component{

handleClear = () => {
    document.getElementById("myForm").reset();
}

    render(){
        return(
            <>
            <h1> Employee Details</h1>
            <form id="myForm">
            <table className="body">
                <tr>
                    <td><label>First Name: </label></td>
                    <td><input type="text" id="fName" /></td>
                </tr>
                <tr>
                    <td><label>Last Name: </label></td>
                    <td><input type="text" id="lName" /></td>
                </tr>
                <tr>
                    <td><label>Address: </label></td>
                    <td><input type="textArea" id="address" /></td>
                </tr>
                <tr>           
                     <td><label>Phone No: </label></td>
                     <td><input type="text" id="phone" /></td>
                </tr>
                <tr>           
                     <td><button type="button" id="submit" >Submit</button></td>
                          
                     <td><button type="button" id="cancel" onClick={this.handleClear}>Cancel</button></td>
                </tr>
            </table>
            </form>
            </>
        )
    }
}