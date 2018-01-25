// import React from 'react';
// import ReactDOM from 'react-dom';
// import './assets/index.css';
// import './assets/app.css';
// import App from './components/App';
// import Upvotes from './components/UpvotesExample';
//
//
//
// ReactDOM.render(<Upvotes />, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));




import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// import 'core-js/fn/promise';
// import SideBar from './components/sidebar';
// import Header from './components/header';
// import HomeContent from './components/home';


function getJSON(url) {
  return get(url)
    .then(JSON.parse);
}

function get(url) {
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
    var req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function() {
      // This is called even on 404 etc
      // so check the status
      if (req.status === 200) {
        // Resolve the promise with the response text
        resolve(req.response);
      } else {
        // Otherwise reject with the status text
        // which will hopefully be a meaningful error
        reject(Error(req.statusText));
      }
    };
    // Handle network errors
    req.onerror = function() {
      reject(Error("Network Error"));
    };
    // Make the request
    req.send();
  });
}



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      user: '',
      loading1: true,
      menuList: [],
      loading2: true
    };
  }
  componentDidMount() {
    getJSON('/api/user/get/user/method/user/format/json?quiet=1')
      .then((response) => {
        console.log('response', response);
        this.setState({
          username: response.body.recordset.record[0].name,
          loading1: false
        });
      })
      .catch(error => {
        console.log('Error>>>', error);
      });


    getJSON('/api/user/get/user/method/menu/format/json?quiet=1')
      .then((response) => {
        console.log(JSON.stringify(response));
        let menuData = response.body.recordset.record;
        let menuList = [];
        var i = 0;
        menuData.container.forEach(menus => {
          menus.sub_modules.forEach(submenu => {
            menuList.push(<li className="menu" key={i}>{submenu.title}</li>);
            i++
            if (submenu.menuitem.length) {
              submenu.menuitem.forEach(menuitem => {
                menuList.push(<li key={i}>
                  <a href={menuitem.link}>{menuitem.title}</a>
                </li>);
                i++;
              })
            }
          })
        });
        this.setState({
          menuList: menuList,
          loading2: false
        });
      })
      .catch(error => {
        console.log("Failed!>>>", error);
        // $('#myModalError .modal-body').html(error);
        // $('#myModalError').modal('show');
      });
  }


  componentWillUnmount() {}
  render() {
    let content = '';
    if (this.state.loading1 || this.state.loading2) {
      content = <div>Loading...</div>
    } else {
      content = <div id="wrapper" className="toggled">
        {/* <Header username={this.state.username}/> */}
        {/* <SideBar menuList={this.state.menuList}/> */}
        {/* <HomeContent/> */}
      </div>
    }
    return <div>
      {content}
    </div>
  }
};
ReactDOM.render(<App/>, document.getElementById("root"));
