import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import * as dd from "dingtalk-jsapi";
import { openAuthMiniApp } from "dingtalk-design-libs/biz/openAuthMiniApp";
function App() {
  const [count, setCount] = useState("0");
  useEffect(() => {
    console.log(JSON.stringify(window.dd));
    console.log(dd.canIUse);

    setCount(JSON.stringify(window.dd));
  }, [setCount]);
  const openMiniApp = () => {
    openAuthMiniApp({
      panelHeight: "percent75",
      path: "pages/home/home", //不要改,这里是小程序dingwlanwvdmrtjjwdmd下的一个页面地址
      extraData: {
        clientId: "dingwlanwvdmrtjjwdmd", // 应用ID(唯一标识)
        corpId: "ding9f50b15bccd16741", //三方企业ID
        rpcScope: "Contact.User.Read",
        fieldScope: "Contact.User.mobile",
        type: 0,
        ext: JSON.stringify({}),
        from: "",
      },
    }).then((res) => {
      // 处理返回数据
      console.log('openAuthMiniAppopenAuthMiniAppopenAuthMiniAppopenAuthMiniApp',res);
    }).catch((err) => {
      // 处理返回数据
      console.log('openAuthMiniAppcatchcatchcatchcatchcatch',err);
    });
  };

  const cancelMiniApp = () => {
    openAuthMiniApp({
      path: "pages/cancel/index",
      extraData: {
        clientId: "dingwlanwvdmrtjjwdmd", // 应用ID(唯一标识)
        corpId: "ding9f50b15bccd16741", //三方企业ID
        rpcScope: "Contact.User.Read",
        fieldScope: "Contact.User.mobile",
        type: 0,
        ext: JSON.stringify({}),
        from: "",
      },
    }).then((res) => {
      // 处理返回数据
      console.log('cancelMiniAppcancelMiniAppcancelMiniAppcancelMiniAppcancelMiniAppcancelMiniApp',res);
    }).catch((err) => {
      // 处理返回数据
      console.log('cancelMiniAppcatchcatchcatchcatchcatchcatchcatchcatchcatch',err);
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{count}</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={openMiniApp}>打开授权弹窗</button>
        <button onClick={cancelMiniApp}>打开取消授权弹窗</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
