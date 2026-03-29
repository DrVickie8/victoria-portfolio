import { Switch, Route } from "wouter";
import Home from "./pages/Home.tsx";

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center text-foreground">
      <h1 className="text-2xl font-bold">404 — Page Not Found</h1>
    </div>
  );
}

export default function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}
