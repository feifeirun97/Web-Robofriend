import CardList from '../components/CardList.js';
// import {robots} from './robots.js';//没有default的要加{}
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js';
import ErrorBoundry from '../components/ErrorBoundry.js';
import React, {Component} from 'react';
import './App.css';
//标准格式
class App extends Component {
	constructor() {
		super();
		// console.log('constructor')
		this.state={
			robots:[],
			searchfield:''
		} 
	}
	//Api爬去数据转化为obj array. fetch是window自带的
	//https://jsonplaceholder.typicode.com/
	componentDidMount(){
		// console.log('componentDidMount')
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(json => this.setState({robots:json}))
	}
	//这里必须用const来定义函数，否则this会指向input而报错
	//function不必加前缀因为是class
	onSearchChange = (event) => {
		// 需要改变state里面的值必须是用this.setState({})
		this.setState({ searchfield:event.target.value })
	}

		
	//整体流程：onchage连接到onSearchChange函数，内容变化即更新searchfield
	//render的filterRobots随之改变，传递给CardList的机器人列表也减小
	render() {
		const {robots, searchfield}= this.state;
		const filterRobots = robots.filter(robot=>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase())
		});
		//加载不出显示loading
		if (robots.length===0) {
			return <h1 className='tc'>Loading</h1>
		}else{
			return(
				<div className='tc'>
					<h1>RoboFriends</h1>
					<SearchBox searchChange = {this.onSearchChange} />
					<Scroll>
						<ErrorBoundry>
							<CardList robots={filterRobots} />
						</ErrorBoundry>
					</Scroll>
				</div>
				);

		}
	}
}

export default App;