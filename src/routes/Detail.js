import React, { Component } from 'react'

class Detail extends Component {
	componentDidMount(){
		const { location, history } = this.props;
		if(location.state === undefined){
			history.push('/');
		}
	}

  render() {
		const { location } = this.props;
		if(location.state === undefined){ 
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