import React, { useEffect, useState } from "react";
function App() {

  // ---------------- Problem 1

  // let [path, setPath] = useState({
  //   routerBaseName: "/",
  //   source: {
  //     name: "name",
  //     configuration: {
  //       id: "123",
  //       path: "/",
  //     },
  //   },
  // });
  
  // useEffect(() => {
  //   setPath((others) => ({
  //     ...others,
  //     source: {
  //       ...others.source,
  //       configuration: {
  //         ...others.source.configuration,
  //         path: "/xylexa",
  //       }
  //     }
  //   }));
  // }, []);
  
  // console.log(path);

  // ---------------- Problem 2

  // let [path, setPath] = useState([
  //   {
  //     routerBaseName: "/",
  //     source: {
  //       name: "name",
  //       configuration: {
  //         id: "123",
  //         path: "/",
  //       },
  //     },
  //   },
  // ]);

  // useEffect(() => {
  //   setPath((others) => [
  //     {
  //       ...others[0],
  //       source: {
  //         ...others[0].source,
  //         configuration: {
  //           ...others[0].source.configuration,
  //           path: "/xylexa",
  //         },
  //       },
  //     },
  //   ]);
  // }, []);

  // console.log(path);
  // ---------------- Problem 3

  let [path, setPath] = useState(
    {
      routerBaseName: "/",
      source: [{
        name: "name",
        configuration: {
          id: "123",
          path: "/",
        },
      }],
    },
  );

  useEffect(() => {
    setPath((others) => ({
      ...others,
      source: [{
        ...others.source[0],
        configuration: {
          ...others.source[0].configuration,
          path: "/xylexa",
        }
      }]
    }));
  }, []);

  console.log(path);

  

  return (
    <>
      {/* <button onClick={handler}>click me</button> */}
      <div>App</div>
    </>
  );
}

export default App;
