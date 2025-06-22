import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import DevLogger from '@/components/Common/DevLogger'
import ErrorBoundaryWrapper from '@/components/Common/ErrorBoundaryWrapper'

createRoot(document.getElementById("root")!).render(
  <ErrorBoundaryWrapper context="Application Root">
    <DevLogger />
    <App />
  </ErrorBoundaryWrapper>
);

