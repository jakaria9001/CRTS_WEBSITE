import React, { useEffect, useState } from 'react';
import {getUser, removeUserSession} from './Utils/Common';


function Dashboard(props) {
    // state variables: 
    const user = getUser();
    let [allComplaints, setComplaints] = useState([]);
    let [curPage, setCurPage] = useState(1);
    const url = "https://crtsapp.herokuapp.com/api/complaint/allComplaints"
    // handle click event of logout button
    const handleLogout = () => { 
      removeUserSession();   
      props.history.push('/login');
    } 

    // componentDidMount: 
    useEffect(()=>{
      // fetch complaints from api:
      fetch(url, {
        headers : { 
          'Content-Type': 'application/json'
         }
  
      }).then((res)=>{ return res.json() 
      }).then((json)=>{
          setComplaints(json.complaints);
          
      })
    }, []);

    // console.log(allComplaints);
    let complaintsToDisplay = allComplaints;
    let noOfPages = Math.ceil(complaintsToDisplay.length/5);
    let arr = [];
    for(let i=1;i<=noOfPages;i++){
        arr.push(i);
    }
    let starting = (curPage-1)*5;
    let ending =(curPage*5)-1;

    complaintsToDisplay = complaintsToDisplay.slice(starting,Math.min(ending,complaintsToDisplay.length)+1);
        
    console.log(complaintsToDisplay)
    
    return (
      <div className="container">
        
        <div className="container">
          <table className="table table-striped table-hover" >
                  <thead>
                      <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Address</th>
                      <th scope="col">Complaint Type</th>
                      <th scope="col">Complaint Detail</th>
                      <th scope="col">Registered On</th>
                      <th scope="col">Status</th>
                      <th scope="col">Delete</th>
                      </tr>
                  </thead>

                  <tbody>

                    {
                        complaintsToDisplay.map((el)=>{
                            return (
                                <tr key={el._id}>
                                    <td>{el.name}</td>
                                    <td>{el.email}</td>
                                    <td>{el.address}</td>
                                    <td>{el.c_type}</td>
                                    <td>{el.c_detail}</td>
                                    <td>{el.date}</td>
                                    <td onClick={()=>{
                                        let allMovies = allComplaints;

                                        let index = allMovies.findIndex((eel)=> eel._id===el._id);

                                        allMovies[index].status==="Registered"?allMovies[index].status = "Assigned":allMovies[index].status="Registered";

                                        setComplaints(allMovies)
                                    }}>{el.status}</td>

                                    <td><button type="button" className="btn btn-danger" onClick={()=>{
                                        let allMovies = allComplaints;
                                        allMovies = allMovies.filter((elid)=>{
                                           return elid._id!==el._id
                                        })
                                        setComplaints(allMovies)
                                    }}>
                                        Delete
                                    </button></td>
                                </tr>
                            )
                        })
                    }

                    
                  </tbody>
          </table>
          <nav>
                <ul className="pagination">
                <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous" onClick={()=>{
                        let cPage = curPage;
                        cPage--;
                        if(cPage>0) setCurPage(cPage);
                    }}>
                    <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                {
                    arr.map((el)=>{
                        return(
                            <li className="page-item" onClick={()=>{
                                setCurPage(el)
                            }}>
                                <a className="page-link" href="#">
                                    {el}
                                </a>
                            </li>
                        )
                    })
                }
                <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next" onClick={()=>{
                        let cPage = curPage;
                        cPage++;
                        if(cPage>noOfPages) cPage = noOfPages; 
                        setCurPage( cPage);
                    }}>
                    <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
                </ul>
          </nav>
        </div>
        <div>
            All registered complaints below! <br/>
            Logged In as {user.username}<br /><br />
            <input type="button" onClick={handleLogout} value="Logout" />
        </div>
    </div>
  );
}
 
export default Dashboard;