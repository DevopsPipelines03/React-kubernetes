import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         posts: [],
      };
   }

   componentDidMount() {
      axios
         .get('https://jsonplaceholder.typicode.com/posts')
         .then((response) => {
            this.setState({ posts: response.data });
         })
         .catch((error) => {
            console.log(error);
         });
   }

   render() {
      const { posts } = this.state;
      return (
        <>
         <table class="table table-striped table-hover">
            <thead class="thead-dark">
                <tr>
                
                    <th>Role Name</th>
    <th>Your age</th>
    <th>your Place</th>
    <th>Actions</th>
                    
                </tr>
            </thead>
            <tbody>
         
            {this.state.posts.map((item) => (
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.body}</td>
                        <td>
                        <div class="btn-group btn-group-circle">
                        <a href="#editEmployeeModal" onClick={() => this.setdatas(item._id)} class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit" >&#xE254;</i></a>
                         
                       
                        <a href="#deleteEmployeeModal"onClick={  () => this.deleteHandler(item._id) } class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                           
                                                             
                      </div>
                           

                        </td>
                      
                    </tr>
                ))}
           
            
                               
                
            </tbody>
        </table>
        </>
      );
   }
}
export default App;