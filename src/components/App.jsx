// import React from "react";
import paintings from './paintings.json'
import Painting from "./Painting";

// ==================================
// const elem1 = <span>Hello</span>;
// const elem2 = <span>world</span>;
// const element = React.createElement('div',
//   {
//     a: 5, b: 10,
//     children: 'Привет мир',
//   },
//   );

// const jsxElement = (<div>{elem1}{elem2}</div>);
// console.log(jsxElement);
// ================================

export const App = () => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
      }}
    >
      <Painting
        url={paintings[0].url}
        title={paintings[0].title}
        author={paintings[0].author.tag}
        profileUrl={paintings[0].author.url}
        price={paintings[0].price}
      />
      <Painting
        url={paintings[1].url}
        title={paintings[1].title}
        author={paintings[1].author.tag}
        profileUrl={paintings[1].author.url}
        price={paintings[1].price}
      />
      <Painting
        url={paintings[2].url}
        title={paintings[2].title}
        author={paintings[2].author.tag}
        profileUrl={paintings[2].author.url}
        price={paintings[2].price}
      />
    </div>
  );
};
