import React from 'react';
import './addBill.css';
import { toast } from 'react-toastify';

class AddBill extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayAddBill: false,
            displaySplitBlock: false,
            data: {
                description: "",
                amount: "",
                numOfFriends: "",
            },
            billList: [] ,
            amountPaidByIndividual: "",
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleSplit = this.handleSplit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleClick() {
        console.log("add bill", this.state.displayAddBill)
        this.setState({
            displayAddBill: true
        })
    }
    handleChange(e) {
        var name = e.target.name;
        var value = e.target.value;
        var obj = this.state.data;
        obj[name] = value;
        console.log("props name", name);
        this.setState({
            ...this.state, data: obj
        })
    }
    handleDelete(e,i){
        var arr = this.state.billList;
       var arr1= arr.slice(0,i);
       var arr2= arr.slice(i+1)
       var array = arr.concat(arr2);
       console.log("deleted array", array);
    }
    handleSplit() {
        if( this.state.data.description == ""){
            toast.error("Please enter the Description", {
                position: toast.POSITION.TOP_RIGHT  
            });
            return;
        }
        else if( this.state.data.amount == ""){
            toast.error("Please enter the Amount to be Split", {
                position: toast.POSITION.TOP_RIGHT  
            }); 
            return;
        }
        else if( this.state.data.numOfFriends == ""){
            toast.error("Please enter the Number of Friends", {
                position: toast.POSITION.TOP_RIGHT  
            });
            return;
        }
        this.setState({
            displaySplitBlock: true
        })
        var paidByIndividual = (parseInt(this.state.data.amount) / parseInt(this.state.data.numOfFriends)).toFixed(2);
        this.setState({
            amountPaidByIndividual: paidByIndividual, displaySplitBlock: true
        })

        var newArray = [];
        var newObj = {};
        newObj = this.state.data;
        newArray= this.state.billList;
        newArray.push(newObj);
        console.log(newArray);
        this.setState({
            ...this.state , billList : newArray
        })
    }
    render() {
        const TBody = this.state.billList.map((c,i)=>{
            return (
                <div className="tableBlock" key={i} >
                    <div className="item">{c.description}</div>
                    <div className="item">{c.amount}</div>                    
                    <div className="item">{c.numOfFriends}</div>
                    <div> 
                        <button onClick={(e) => this.handleDelete(i,e)} className="delButton" > Delete </button>
                    </div>
                </div>    
            );
        })
 
        return (

            <div className="">
                <div>
                    <button onClick={this.handleClick} >Add Bill </button>
                </div>
                {this.state.displayAddBill &&
                    <div>
                        <div>
                            <input type="text" name="description" value={this.state.data.description} onChange={this.handleChange} placeholder="Expense Description" />
                        </div>
                        <div>
                            <input type="number" name="amount" value={this.state.data.amount} onChange={this.handleChange} placeholder="Amount to be Split" />
                        </div>
                        <div>
                            <input type="number" name="numOfFriends" value={this.state.data.numOfFriends} onChange={this.handleChange} placeholder="Number of Friends" />
                        </div>
                    </div>
                }

                <div>
                    <button onClick={this.handleSplit} className="splitButton" > Split Bill Among Friends </button>
                </div>

                {this.state.displaySplitBlock &&
                    <div className="textDisplay" >
                        The Amount Split among {this.state.numOfFriends} : Rs.{this.state.amountPaidByIndividual}/-
                    </div>
                }
                <hr />
                <div className="Listdetails" >
                    Display the list of bills 
                    <div>
                        {TBody}
                    </div>
                </div>
            </div>

        )

    }
}

export default AddBill;