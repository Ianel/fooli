import { Route, Routes } from "react-router-dom";
import {
    HomePage,
    JobDetails,
    LoginStep,
    OffersHome,
    ProfilePage,
    RegisterStep,
} from "./pages";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginStep />} />
            <Route path="/register" element={<RegisterStep />} />
            <Route path="/job-details" element={<JobDetails />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/admin">
                <Route path="/admin/offers" element={<OffersHome />} />
            </Route>
        </Routes>
    );
}

export default App;
