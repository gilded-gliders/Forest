import React from 'react';
import Overview from './Overview/Overview.jsx';
import RelatedItems from './RelatedItems/RelatedItems.jsx';
import QA from './QA/QA.jsx';
import Reviews from './Reviews/Reviews.jsx';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      list:[],
      targetId: 2,
    };
    this.fetchGET = this.fetchGET.bind(this);
  }

  fetchGET(){
    fetch('/getproducts')
      .then(res=>res.json())
      .then((data) =>{
        this.setState({
          list: data,
        })
      })
      .catch(err=>{
        console.log(err)
      });
  };

  componentDidMount(){
   this.fetchGET();
  };

  render(){
    return (
      <div>
        {this.state.list.map((i,index)=>{
          return (
            <div key = {index}>
              {i.name}
            </div>
          )
         })}
        {/* // <Overview />
        // <RelatedItems />
        // <QA /> */}
        {/* <Reviews id ={this.state.targetId}/> */}
      </div>
    )
  }
}

export default App;