import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Navigation from './components/Navigation';
import Detail from './routes/Detail';
// import axios from 'axios';
// import Movie from './Movie';
import './App.css';

//spa = single page application
function App(){
  return(
    <HashRouter>
      <Navigation/>
      <Route path="/" exact={true} component={Home}/>
      <Route path="/about" component={About}/>
      {/* localhost:3000/#/about */}
      <Route path="/detail" component={Detail}/>
      {/* //#이 있으면 #이후만 해석할 수 있다, 적절하게 페이지를 연결한다 */}
    </HashRouter>
  );
}
// class App extends React.Component {
//   state = {
//     isLoading: true,
//     movies: [],
//   };
//   getMovies = async () => {//배열이 저장된 부분
//     const {//구조 분해 할당
//       data: {
//         data: { movies },
//       },
//     } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
//     //await는 async를 실행하라는 걸 알려준다
//     this.setState({ movies, isLoading: false });
//   };
//   componentDidMount() {
//     this.getMovies();
//   }
//   render() {
//     const { isLoading, movies } = this.state;
//     return (
//       <section className="container">
//         {isLoading ? (
//           <div className="loader">
//             {/* 로딩이 안되었을 경우 실행 */}
//             <span className="loader__text">Loading...</span>
//           </div>
//         ) : (
//           // 로딩이 되면 실행
//           <div className="movies">
//             {movies.map((movie) => {
//               return (
//                 <Movie
//                   key={movie.id}
//                   id={movie.id}
//                   year={movie.year}
//                   title={movie.title}
//                   summary={movie.summary}
//                   poster={movie.medium_cover_image}
//                   genres={movie.genres}
//                 />
//               );
//             })}
//           </div>
//         )}
//       </section>
//     );
//   }
// }

export default App;
