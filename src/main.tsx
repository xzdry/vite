import React, { Suspense, useMemo } from "react";
import ReactDOM from "react-dom";


const App = () => {
  console.log("rerender");
  const Page = useMemo(() => {
    return React.lazy(() => {
      return import("../modules/tmp.json").then((data) => {
        return { default:()=><div>{data.version}</div> };
      });
    });
  }, []);
  return <Page />;
};
ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>asd</div>}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
// ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
//   <React.StrictMode>
//     <Suspense
//       fallback={
//         <div>asd</div>
//       }
//     >
//       <App />
//     </Suspense>
//   </React.StrictMode>
// );
