import React from 'react';

class AddContact extends React.Component {
    state = {
        name: "",
        email: "",
        Contact: "",
    };
    add=(e) => {
        e.preventDefault();
        if(this.state.name === "" || this.state.email === "" ||this.state.Contact === ""){
            alert("All the fields are needed!")
            return
        }
        this.props.addContactHandler(this.state);
        this.setState({name: "", email: "", Contact: "" });       
     }
    render() { 
        return <div className="form">
            
            <form onSubmit={this.add} >
                <div >
                <h2>Add Contact</h2>
                    <label >Name</label>
                    <input type="text" 
                    name="name" 
                    placeholder="Name..." 
                    value={this.state.name}
                    onChange={ (e) => this.setState({name: e.target.value})}
                    />
                </div>
                <div className="form">
                    <label >Contact</label>
                    <input type="text" 
                    name="name" 
                    placeholder="Contact..."
                    value={this.state.Contact}
                    onChange={ (e) => this.setState({Contact: e.target.value})}
                    />
                </div>
                <div className="form">
                    <label >Email</label>
                    <input type="text" 
                    name="name" 
                    placeholder="example@gmail.com"
                    value={this.state.email}
                    onChange={ (e) => this.setState({email: e.target.value})}
                    />
                </div>
                <div className="button">
                <button type="submit">Add</button>
                </div>
                <br />
            </form>
        </div>;
    }
}
export default AddContact;