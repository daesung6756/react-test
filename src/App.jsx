import { Routes, Route } from 'react-router-dom';

import MainLayout from "./template/main/layout.jsx";
import SubLayout from "./template/sub/layout.jsx";
import SimpleLayout from "./template/simple/layout.jsx";
import AdminLayout from "./template/admin/layout.jsx";
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import About from './pages/About.jsx';
import Support from './pages/Support.jsx';
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
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} exact></Route>
            </Route>
            <Route path="/" element={<SubLayout />}>
                <Route path="about" element={<About />}></Route>
                <Route path="support" element={<Support />}></Route>
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
    </>
  )
}








export default App;
