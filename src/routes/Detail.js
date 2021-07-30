import React, { Component } from 'react'

class Detail extends Component {
	componentDidMount(){
		const { location, history } = this.props;//비구조할당
		if(location.state === undefined){
			history.push('/');
			//history.goBack(); //바로 전까지만 이동
		}
	}

  	render() {
		const { location } = this.props;
		if(location.state){ 
			return <span>{location.state.title}</span>
		}else{
			return null;
		}
    // return (
    //   <div>
		// 		<span>Hello!</span>
		// 		<span>{location.state.title}</span>
    //   </div>
    // )
  }
}

export default Detail;