import React from 'react'

const UserDeaatila = (props) => {
    const styles = {
        image: {
            width: '200px'
            
        }
    }
    return (
        <div className="col-md-12">
            <h2>Billing Histroy Details</h2>
            
            <div class="card" >
                
                <div className="col-md-6 offset-md-1">
                    
                    <p class="card-text">id:{props.selectedUserDetails.id}</p>
                    <p class="card-text">name:{props.selectedUserDetails.name}</p>
                    <p class="card-text">last_bill_amt:{props.selectedUserDetails.last_bill_amt}</p>
                    <p class="card-text">year:{props.selectedUserDetails.year}</p>
                    <p class="card-text">status:{props.selectedUserDetails.status}</p>
                    <p class="card-text">month:{props.selectedUserDetails.month}</p>
                   
                </div>
            </div>
            <br />



        </div>
    )
}
export default UserDeaatila;