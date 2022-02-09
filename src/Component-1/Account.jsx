// import React from "react";

// class Account extends React.Component{
//     render(){
//         return(
//             <div className="box">
//                 <div className="blcok">
//                     <h1 className="h1">Создать аккаунт</h1>
//                     <p className ="text">
//                     Быстро и легко
//                     </p>
//                     <form action="">
//                     <input type="text" placeholder="Имя" className="input__name"/>
//                     </form>
//                     <form action="">
//                     <input type="text" placeholder="Фамилия" className="input__name "/>
//                     </form>
//                     <form action="">
//                     <input type="number" placeholder="Телефон" className="input__name"/>
//                     </form>
//                     <form action="">
//                     <input type="password" placeholder="Пароль" className="input__name password"/>
//                     </form>
//                     <label for="start">Дата рождение</label>

//                     <input type="date" id="start" name="trip-start"
//                     value="2022-01-07"
//                     min="2000-01-01" max="2023-01-01" className="date"></input>
                    
//                     <div className="radio__box">
//                         <h3 className="h3">Выберите пол</h3>
//                         <div className="radio__input">

//                         {/* <form action="" >
//                         <input type="radio"  id="woman" className="woman" name="nnnn"/>
//                             <label for="woman">Женшина</label>
                            
//                         </form>
//                         <form action="">
//                         <input type="radio"  id="man" className="man" name="nnnn"/>
//                             <label for="man">Мужчина</label>
                            
//                         </form> */}


//                         <input name='hii' id='abc' type='radio' />
//                         <label for="abc">
//                         Мужчина
//                         </label>
//                         <input name='hii' id='abcd' type='radio' />
//                         <label for="abcd" >
//                         Женщина
//                         </label>
//                         </div>
//                         </div>

//                     <button type="submit">Регистрация</button>


//                 </div>
//             </div>
//         )
//     }
// }
// export default Account;








// class App extends React.Component {

//   // name = 'Aziz'

//   data = [
//     {
//       "albumId": 1,
//       "id": 1,
//       "title": "accusamus beatae ad facilis cum similique qui sunt",
//       "url": "https://via.placeholder.com/600/92c952",
//       "thumbnailUrl": "https://via.placeholder.com/150/92c952"
//     },
//     {
//       "albumId": 1,
//       "id": 2,
//       "title": "reprehenderit est deserunt velit ipsam",
//       "url": "https://via.placeholder.com/600/771796",
//       "thumbnailUrl": "https://via.placeholder.com/150/771796"
//     },
//     {
//       "albumId": 1,
//       "id": 3,
//       "title": "officia porro iure quia iusto qui ipsa ut modi",
//       "url": "https://via.placeholder.com/600/24f355",
//       "thumbnailUrl": "https://via.placeholder.com/150/24f355"
//     },
//     {
//       "albumId": 1,
//       "id": 4,
//       "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
//       "url": "https://via.placeholder.com/600/d32776",
//       "thumbnailUrl": "https://via.placeholder.com/150/d32776"
//     },
//     {
//       "albumId": 1,
//       "id": 5,
//       "title": "natus nisi omnis corporis facere molestiae rerum in",
//       "url": "https://via.placeholder.com/600/f66b97",
//       "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
//     },
//     {
//       "albumId": 1,
//       "id": 6,
//       "title": "accusamus ea aliquid et amet sequi nemo",
//       "url": "https://via.placeholder.com/600/56a8c2",
//       "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
//     },
//     {
//       "albumId": 1,
//       "id": 7,
//       "title": "officia delectus consequatur vero aut veniam explicabo molestias",
//       "url": "https://via.placeholder.com/600/b0f7cc",
//       "thumbnailUrl": "https://via.placeholder.com/150/b0f7cc"
//     },
//     {
//       "albumId": 1,
//       "id": 8,
//       "title": "aut porro officiis laborum odit ea laudantium corporis",
//       "url": "https://via.placeholder.com/600/54176f",
//       "thumbnailUrl": "https://via.placeholder.com/150/54176f"
//     },
//     {
//       "albumId": 1,
//       "id": 9,
//       "title": "qui eius qui autem sed",
//       "url": "https://via.placeholder.com/600/51aa97",
//       "thumbnailUrl": "https://via.placeholder.com/150/51aa97"
//     },
//     {
//       "albumId": 1,
//       "id": 10,
//       "title": "beatae et provident et ut vel",
//       "url": "https://via.placeholder.com/600/810b14",
//       "thumbnailUrl": "https://via.placeholder.com/150/810b14"
//     }
//   ]

//   render() {
//     return (
//       // <>
//       //   <h1>
//       //     hello world {this.name}
//       //   </h1>
//       // </>
//       // пустые скобки можно использовать для оборачивания контента
//       // без оборачивания в общий див всё не будет работать


//       // <>
//       //   {this.data.map((v) =>{
//       //     return(
//       //       <h1> {v.id} </h1>
//       //     )
//       //   })}
//       // </>

//       <>
//         {this.data.map((v) => {
//           return (
//             <div>
//               <h1>{v.id}</h1>
//               <h1>{v.title}</h1>
//               <img src={v.thumbnailUrl} />
//             </div>
//           )
//         })}

//       {/* для вызова другого компонента */}
//         <Block /> 
//         <Block /> 
//       </>
//     )
//   }
// }