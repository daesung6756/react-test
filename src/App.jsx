import { Routes, Route } from 'react-router-dom';

import {ScrollTop} from "./components/scroll-top.jsx";

import MainLayout from "./template/main/layout.jsx";
import SubLayout from "./template/sub/layout.jsx";
import SimpleLayout from "./template/simple/layout.jsx";
import AdminLayout from "./template/admin/layout.jsx";
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Favorite from './pages/Favorite.jsx';
import History from './pages/History.jsx';
import Admission from './pages/Admission.jsx';
import DepartmentInfo from './pages/DepartmentInfo.jsx';
import GraduateSchool from './pages/GraduateSchool.jsx';
import Tr from './pages/Tr.jsx';
import News from './pages/News.jsx';
import PageNotFound from "./pages/PageNotFound.jsx";

import './globalStyle.css'

const App = () => {
    return (
    <>
        <Routes>
            <Route exact path="/" element={<MainLayout />}>
                <Route index element={<Home />} exact></Route>
            </Route>
            <Route exact path="/" element={<SubLayout />}>
                <Route path="favorite" element={<Favorite />}></Route>
                <Route path="history" element={<History />}></Route>
                <Route path="admission" element={<Admission />}></Route>
                <Route path="department-info" element={<DepartmentInfo />}></Route>
                <Route path="graduate-school" element={<GraduateSchool />}></Route>
                <Route path="tr" element={<Tr />}></Route>
                <Route path="news" element={<News />}></Route>
            </Route>
            <Route path="/login" element={<SimpleLayout />}>
                <Route index element={<Login />}></Route>
            </Route>
            <Route path="/admin" element={<AdminLayout />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
        <ScrollTop />
    </>
  )
}








export default App;
