// Firebase配置
const firebaseConfig = {
    apiKey: "AIzaSyDHd6LoUOSlDm-Nj6c8NSXdtGw5HvPi3I4",
    authDomain: "qtrader-3fd6b.firebaseapp.com",
    databaseURL: "https://qtrader-3fd6b-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "qtrader-3fd6b",
    storageBucket: "qtrader-3fd6b.firebasestorage.app",
    messagingSenderId: "746210099239",
    appId: "1:746210099239:web:6b72d2ef5e044b09a04e02",
    measurementId: "G-HECR0FG996"
};

// 初始化Firebase应用
import { initializeApp, getApps, getApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-database.js";

// 创建或获取Firebase应用实例
let app;
const appName = "[DEFAULT]"; // Firebase默认应用名称
if (!getApps().some(app => app.name === appName)) {
    app = initializeApp(firebaseConfig, appName);
} else {
    app = getApp(appName);
}

// 导出Firebase服务实例
export const auth = getAuth(app);
export const database = getDatabase(app);
export { app };