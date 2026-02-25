import { Routes, Route, Navigate } from 'react-router-dom';
import { MainWebsite } from './components/MainWebsite';
import { LMSLayout } from './components/LMSLayout';
import { LMSGenerator } from './components/LMSGenerator';
import { LMSAccount } from './components/LMSAccount';
import { LMSProgress } from './components/LMSProgress';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainWebsite />} />
      <Route path="/lms" element={<LMSLayout />}>
        <Route index element={<Navigate to="/lms/generator" replace />} />
        <Route path="generator" element={<LMSGenerator />} />
        <Route path="account" element={<LMSAccount />} />
        <Route path="progress" element={<LMSProgress />} />
      </Route>
    </Routes>
  );
}

export default App;
